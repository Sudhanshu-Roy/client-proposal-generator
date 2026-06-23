from pydantic import BaseModel


class ProposalRequest(BaseModel):
    website_url: str
    business_goal: str