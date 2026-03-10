from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware

from .parser import extract_resume_text
from .scorer import analyze_resume

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "Resume Checker API running"}


@app.post("/analyze-resume")
async def analyze_resume_api(
    resume: UploadFile = File(...),
    job_description: str = Form(...)
):

    resume_text = extract_resume_text(resume)

    result = analyze_resume(resume_text, job_description)

    return result