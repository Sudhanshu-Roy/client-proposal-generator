import requests
from bs4 import BeautifulSoup


def scrape_website(url: str):

    response = requests.get(
        url,
        timeout=20,
        headers={
            "User-Agent": (
                "Mozilla/5.0 "
                "(Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 "
                "(KHTML, like Gecko) "
                "Chrome/122.0.0.0 Safari/537.36"
            )
        }
    )

    response.raise_for_status()

    soup = BeautifulSoup(
        response.text,
        "html.parser"
    )

    title = (
        soup.title.string.strip()
        if soup.title and soup.title.string
        else ""
    )

    meta_description = ""

    meta_tag = soup.find(
        "meta",
        attrs={"name": "description"}
    )

    if meta_tag:
        meta_description = meta_tag.get(
            "content",
            ""
        )

    h1_tags = [
        tag.get_text(strip=True)
        for tag in soup.find_all("h1")
    ]

    h2_tags = [
        tag.get_text(strip=True)
        for tag in soup.find_all("h2")
    ]

    page_text = soup.get_text(
        separator=" ",
        strip=True
    )

    return {
        "title": title,
        "meta_description": meta_description,
        "h1_tags": h1_tags[:10],
        "h2_tags": h2_tags[:20],
        "content": page_text[:4000]
    }