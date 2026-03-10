# Resume Checker Backend

This is the backend service for the Resume Checker application built using **FastAPI**.

The backend is responsible for parsing resumes, extracting skills, and calculating resume match scores.

## Tech Stack

* FastAPI
* Python
* Poetry
* Regex based skill detection
* PDF / DOCX parsing

## Features

* Resume text extraction
* Job description skill extraction
* Skill comparison engine
* Resume scoring
* Suggestions for improvement

## Installation

Navigate to the backend folder.

```
cd resume-checker-backend
```

Install dependencies using Poetry.

```
poetry install
```

Run the FastAPI server.

```
poetry run uvicorn app.main:app --reload
```

The API will run at:

```
http://127.0.0.1:8000
```

API documentation is available at:

```
http://127.0.0.1:8000/docs
```

## API Endpoint

Analyze Resume

```
POST /analyze-resume
```

Inputs

* resume file (PDF / DOCX)
* job description

Response

```
{
  "resume_score": 75,
  "matched_skills": [],
  "missing_skills": [],
  "suggestions": []
}
```
