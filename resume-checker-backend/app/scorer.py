from .skill_matcher import detect_skills
from .skill_extractor import extract_skills_from_jd


def analyze_resume(resume_text, job_description):

    resume_text = resume_text.lower()

    jd_skills = extract_skills_from_jd(job_description)

    resume_skills = detect_skills(resume_text)

    matched = []
    missing = []

    for skill in jd_skills:
        if skill in resume_skills:
            matched.append(skill)
        else:
            missing.append(skill)

    score = int((len(matched) / len(jd_skills)) * 100) if jd_skills else 0

    suggestions = []

    if missing:
        suggestions.append("Consider adding these skills if you have experience.")

    if "projects" not in resume_text:
        suggestions.append("Add a projects section.")

    if "experience" not in resume_text:
        suggestions.append("Add work experience details.")

    return {
        "resume_score": score,
        "jd_skills": jd_skills,
        "resume_skills": resume_skills,
        "matched_skills": matched,
        "missing_skills": missing,
        "suggestions": suggestions
    }