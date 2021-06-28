FROM python:3.8

# This prevents Python from writing out pyc files
ENV PYTHONDONTWRITEBYTECODE 1
# This keeps Python from buffering stdin/stdout
ENV PYTHONUNBUFFERED 1

WORKDIR /app
ADD requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5000
ENV FLASK_APP=src/server.py
CMD ["python", "-u", "src/server.py"]
#CMD ["/bin/bash"]
#CMD ["flask", "run", "-h", "0.0.0.0", "-p", "5000"]