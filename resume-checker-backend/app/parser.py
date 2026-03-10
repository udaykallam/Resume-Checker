import tempfile
import docx2txt
from pdfminer.high_level import extract_text


def extract_resume_text(upload_file):

    suffix = upload_file.filename.split(".")[-1]

    with tempfile.NamedTemporaryFile(delete=False) as tmp:
        tmp.write(upload_file.file.read())
        temp_path = tmp.name

    if suffix == "pdf":
        return extract_text(temp_path)

    if suffix == "docx":
        return docx2txt.process(temp_path)

    return ""