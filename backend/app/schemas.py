from pydantic import BaseModel


class ProposalResponse(BaseModel):

    executive_summary: str

    website_analysis: str

    strengths: list[str]

    weaknesses: list[str]

    seo_opportunities: list[str]

    lead_generation_strategy: str

    social_media_strategy: str

    recommended_services: list[str]

    action_plan: str

    expected_outcomes: str