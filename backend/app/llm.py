import json
import os

from dotenv import load_dotenv
from groq import Groq

from .prompts import PROPOSAL_PROMPT

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def generate_proposal(
    website_data: dict,
    goal: str
):
    prompt = PROPOSAL_PROMPT.format(
        title=website_data["title"],
        meta_description=website_data["meta_description"],
        h1_tags="\n".join(
            website_data["h1_tags"]
        ),
        h2_tags="\n".join(
            website_data["h2_tags"]
        ),
        content=website_data["content"],
        goal=goal
    )

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": (
                    "You are an expert digital "
                    "marketing consultant."
                )
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.7
    )

    content = (
        response
        .choices[0]
        .message
        .content
    )

    content = (
        content
        .replace("```json", "")
        .replace("```", "")
        .strip()
    )

    proposal_json = json.loads(content)

    return proposal_json