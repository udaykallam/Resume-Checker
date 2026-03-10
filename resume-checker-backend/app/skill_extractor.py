from .skill_matcher import detect_skills


def extract_skills_from_jd(job_description):

    skills = detect_skills(job_description)

    return list(set(skills))