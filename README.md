# Resume Checker

Resume Checker is a full-stack web application that analyzes a user's resume and compares it with a job description to generate a **resume match score**.

The system extracts skills from both the resume and job description, compares them, and provides feedback on missing skills and improvements.

## Tech Stack

Frontend

* Next.js
* React
* TailwindCSS

Backend

* FastAPI
* Python
* Poetry (dependency management)

Other Tools

* PDF parsing
* Regex-based skill detection
* REST API communication

## Features

* Upload resume (PDF / DOCX)
* Paste job description
* Automatic skill extraction
* Resume match score calculation
* Matched and missing skill detection
* Suggestions for improving the resume

## Project Structure

```
Resume-Checker
│
├── resume-checker-backend
│   └── FastAPI backend for resume analysis
│
└── resume-checker-frontend
    └── Next.js frontend for user interface
```

## How It Works

1. User uploads resume
2. User pastes job description
3. Backend extracts resume text
4. Skills are detected using pattern matching
5. Resume is compared with job description
6. Score and suggestions are returned

## Future Improvements

* ATS compatibility scoring
* NLP-based skill extraction
* Resume keyword optimization
* Job role specific scoring
* Resume improvement suggestions using AI

## Author

Uday Kallam
