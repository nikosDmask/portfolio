# portfolio/backend/Dockerfile

FROM python:3.11-slim

# install OS deps
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
      build-essential libpq-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# copy & install Python requirements
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# copy your Django code
COPY . .

# collect static
ENV DJANGO_SETTINGS_MODULE=config.settings
ENV DJANGO_DEBUG=False
RUN python manage.py collectstatic --noinput

EXPOSE 8000
CMD ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8000"]
