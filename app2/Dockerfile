FROM python:3.11-alpine

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5000

RUN adduser -D appuser
USER appuser

CMD ["gunicorn", "--bind", "0.0.0.0:5000", "index:app"]