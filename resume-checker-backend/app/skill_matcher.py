import re
from .skills_db import skills


def detect_skills(text):

    text = text.lower()

    detected = []

    for skill, pattern in skills.items():

        if re.search(pattern, text):
            detected.append(skill)

    return detected