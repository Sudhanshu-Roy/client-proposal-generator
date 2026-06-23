PROPOSAL_PROMPT = """
You are a senior digital marketing consultant.

Analyze the provided website information and create a professional digital marketing proposal.

Return ONLY valid JSON.

Schema:

{{
    "executive_summary": "string",
    "website_analysis": "string",

    "strengths": ["string"],
    "weaknesses": ["string"],

    "seo_opportunities": ["string"],

    "lead_generation_strategy": "string",

    "social_media_strategy": "string",

    "recommended_services": ["string"],

    "action_plan": "string",

    "expected_outcomes": "string"
}}

Website Title:
{title}

Meta Description:
{meta_description}

H1 Tags:
{h1_tags}

H2 Tags:
{h2_tags}

Website Content:
{content}

Business Goal:
{goal}

Rules:
1. Return ONLY valid JSON.
2. No markdown.
3. No explanations outside JSON.
4. Ensure all fields are present.
5. Strengths, weaknesses, SEO opportunities, and recommended services must be arrays.
"""