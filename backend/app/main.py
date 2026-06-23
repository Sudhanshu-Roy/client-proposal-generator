import logging

from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from .models import ProposalRequest
from .schemas import ProposalResponse
from sqlalchemy.orm import Session
from .scraper import scrape_website
from .llm import generate_proposal

from .database import engine, SessionLocal, Base
from .db_models import Proposal

logging.basicConfig(
    level=logging.INFO
)

logger = logging.getLogger(__name__)

app = FastAPI(
    title="AI Client Proposal Generator"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()

@app.get("/")
def home():

    return {
        "message": "AI Proposal Generator Running"
    }


@app.post(
    "/generate-proposal",
    response_model=ProposalResponse
)
def generate(data: ProposalRequest,db: Session = Depends(get_db)):

    logger.info(
        f"Generating proposal for {data.website_url}"
    )

    try:

        website_data = scrape_website(
            data.website_url
        )

    except Exception as e:

        logger.error(
            f"Scraping error: {str(e)}"
        )

        raise HTTPException(
            status_code=400,
            detail=f"Website scraping failed: {str(e)}"
        )

    try:

        proposal = generate_proposal(
            website_data,
            data.business_goal
        )

    except Exception as e:

        logger.error(
            f"LLM error: {str(e)}"
        )

        raise HTTPException(
            status_code=500,
            detail=f"Proposal generation failed: {str(e)}"
        )

    logger.info(
        "Proposal generated successfully"
    )

    db_proposal = Proposal(
    website_url=data.website_url,
    business_goal=data.business_goal,
    proposal_json=proposal
    )

    db.add(db_proposal)

    db.commit()

    db.refresh(db_proposal)

    return ProposalResponse(
        **proposal
    )

@app.get("/proposals")
def get_proposals(
    db: Session = Depends(get_db)
):

    proposals = db.query(
        Proposal
    ).all()

    return proposals

@app.get("/proposal/{proposal_id}")
def get_proposal(
    proposal_id: int,
    db: Session = Depends(get_db)
):

    proposal = (
        db.query(Proposal)
        .filter(
            Proposal.id == proposal_id
        )
        .first()
    )

    if not proposal:

        raise HTTPException(
            status_code=404,
            detail="Proposal not found"
        )

    return proposal