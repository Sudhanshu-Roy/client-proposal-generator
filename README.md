## Problem Statement

Digital marketing agencies spend significant time creating customized proposals for prospective clients. The process typically involves manually analyzing a client's website, identifying strengths and weaknesses, researching growth opportunities, and drafting a detailed proposal tailored to the client's business goals.

This manual workflow is repetitive, time-consuming, and difficult to scale, especially when agencies need to respond quickly to multiple leads.

The objective of this project is to automate the proposal creation process using Artificial Intelligence. By providing a website URL and a business objective, the system automatically:

* Scrapes and analyzes website content
* Identifies strengths and weaknesses
* Detects SEO and lead-generation opportunities
* Generates actionable marketing recommendations
* Produces a structured, client-ready digital marketing proposal

The result is a faster, more scalable workflow that enables agencies to create professional proposals in seconds instead of hours.

## Solution Overview

AI Client Proposal Generator is a full-stack AI application that combines web scraping, large language models, and modern web technologies to automate proposal creation.

The platform extracts meaningful information from a business website, analyzes it using GPT-4o-mini, and generates structured marketing insights including website analysis, strengths, weaknesses, SEO opportunities, lead generation strategies, social media recommendations, and expected business outcomes.

By transforming raw website data into actionable marketing proposals, the application helps agencies improve productivity, reduce manual effort, and accelerate client acquisition workflows.

# AI Client Proposal Generator

An AI-powered SaaS application that automatically analyzes a business website and generates a professional digital marketing proposal within seconds.

Built using FastAPI, React, Tailwind CSS, SQLite, SQLAlchemy, and GPT-4o-mini.

---

## 📸 Screenshots

### Proposal Generation Dashboard

<img width="959" height="495" alt="Screenshot 2026-06-23 192135" src="https://github.com/user-attachments/assets/68a2c490-bb67-4ee1-b3ad-4214aecfc06a" />

### Generated Proposal Output

<img width="668" height="482" alt="Screenshot 2026-06-23 191127" src="https://github.com/user-attachments/assets/9219fba4-7c64-4f93-8818-3650968c07b2" />


---

##  Features

*  Website URL Analysis
*  AI-Powered Proposal Generation
*  Structured Marketing Insights
*  Business Goal-Based Recommendations
*  Executive Summary Generation
*  Website Strength & Weakness Analysis
*  SEO Opportunity Detection
*  Lead Generation Strategy Suggestions
*  Social Media Strategy Recommendations
*  Proposal Storage with SQLite
*  FastAPI REST API Backend
*  Modern React + Tailwind Frontend

---

##  System Architecture

```text
User
 ↓
React Frontend
 ↓
Axios API Requests
 ↓
FastAPI Backend
 ↓
Website Scraper
 ↓
GPT-4o-mini
 ↓
Structured JSON Output
 ↓
SQLite Database
```

---

##  Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Axios

### Backend

* FastAPI
* Pydantic
* SQLAlchemy
* SQLite

### AI & Data Processing

* GPT-4o-mini
* BeautifulSoup4
* Requests

---

## 📂 Project Structure

```text
client-proposal-generator/
│
├── backend/
│   │
│   ├── app/
│   │   └── main.py
│   │
│   ├── database.py
│   ├── db_models.py
│   ├── llm.py
│   ├── prompts.py
│   ├── scraper.py
│   ├── models.py
│   ├── schemas.py
│   │
│   ├── requirements.txt
│   ├── proposals.db
│   ├── .env.example
│   └── .gitignore
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── node_modules/
│
├── screenshots/
│   ├── dashboard.png
│   └── proposal-output.png
│
├── .gitignore
├── README.md
└── LICENSE
```

---

##  Installation

### Clone Repository

```bash
git clone https://github.com/your-username/ai-client-proposal-generator.git

cd ai-client-proposal-generator
```

### Backend Setup

```bash
cd backend

pip install -r requirements.txt
```

Create a `.env` file:

```env
AI_MODEL=gpt-4o-mini
AI_API_KEY=YOUR_API_KEY
AI_ENDPOINT=YOUR_ENDPOINT
```

Run backend:

```bash
uvicorn app.main:app --reload
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

##  API Endpoint

### Generate Proposal

```http
POST /generate-proposal
```

Request:

```json
{
  "website_url": "https://openai.com",
  "business_goal": "Generate more enterprise leads"
}
```

---

##  Future Improvements

* Proposal History Dashboard
* PDF Export
* Authentication & User Accounts
* Competitor Analysis
* PostgreSQL Integration
* RAG-Based Custom Proposal Templates
* Proposal Sharing & Collaboration
* Deployment to Cloud

---

##  What I Learned

This project helped me gain hands-on experience with:

* FastAPI
* React
* Tailwind CSS
* SQLAlchemy ORM
* REST API Design
* LLM Integration
* Prompt Engineering
* Web Scraping
* Database Management
* Full-Stack AI Application Development

---

##  License

This project is licensed under the MIT License.

