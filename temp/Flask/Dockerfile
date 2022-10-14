FROM python:slim
WORKDIR /app/
RUN pip install flask
COPY server.py .
CMD ["flask", "--app", "server", "run", "--port", "8000", "--host", "0.0.0.0"]