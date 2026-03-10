# Resume Checker Frontend

This is the frontend of the Resume Checker application built using **Next.js**.

The frontend allows users to upload a resume and paste a job description to analyze resume compatibility.

## Tech Stack

* Next.js
* React
* Tailwind CSS
* Axios

## Features

* Resume upload
* Job description input
* Resume analysis request
* Display resume score
* Show matched and missing skills
* Display suggestions

## Installation

Clone the repository and navigate to the frontend folder.

```
cd resume-checker-frontend
```

Install dependencies.

```
npm install
```

Run the development server.

```
npm run dev
```

The application will start at:

```
http://localhost:3000
```

## API Connection

The frontend communicates with the FastAPI backend at:

```
http://localhost:8000
```

Make sure the backend server is running before analyzing resumes.
