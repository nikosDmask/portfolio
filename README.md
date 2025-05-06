
<body>

  <h1>🚀 Portfolio Project</h1>
  <p>
    <img class="badge" src="https://img.shields.io/github/workflow/status/nikosDmask/portfolio/CI" alt="CI Badge" />
    <img class="badge" src="https://img.shields.io/docker/cloud/build/nikosdmask/portfolio-frontend" alt="Docker Badge" />
    <img class="badge" src="https://img.shields.io/badge/Deployed-AWS-orange" alt="AWS Badge" />
  </p>

  <p>A personal portfolio application showcasing projects, an about section, and a contact form, built with React, Tailwind CSS, Framer Motion, Django REST Framework, Docker, and deployed on AWS.</p>

  <hr/>

  <h2>Table of Contents</h2>
  <ol>
    <li><a href="#overview">Overview</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li><a href="#architecture">Architecture</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#docker-setup">Docker Setup</a></li>
    <li><a href="#aws-deployment">AWS Deployment</a></li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#ci-github-flow">CI & GitHub Flow</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>

  <h2 id="overview">Overview</h2>
  <p>This repo powers my developer portfolio. It features:</p>
  <ul>
    <li>Home hero section</li>
    <li>Projects showcase (fetched from Django backend)</li>
    <li>About section with draggable hobbies</li>
    <li>Contact form with email notifications</li>
    <li>Full containerization via Docker Compose</li>
    <li>Live deployment on AWS</li>
  </ul>

  <h2 id="features">Features</h2>
  <ul>
    <li>Framer Motion animations</li>
    <li>Responsive design with Tailwind CSS</li>
    <li>Django REST API backend</li>
    <li>Inbound & confirmation emails via AWS SES</li>
    <li>Dockerized services</li>
    <li>AWS ECS/Fargate for backend, S3 + CloudFront for frontend</li>
  </ul>

  <h2 id="tech-stack">Tech Stack</h2>
  <ul>
    <li><strong>Frontend:</strong> React, Vite, Tailwind CSS, Framer Motion</li>
    <li><strong>Backend:</strong> Django 5, Django REST Framework, Gunicorn, WhiteNoise</li>
    <li><strong>Database:</strong> PostgreSQL (RDS prod) / SQLite (dev)</li>
    <li><strong>Infra:</strong> AWS ECS, RDS, S3, CloudFront, SES</li>
    <li><strong>CI/CD:</strong> GitHub Actions, Docker Hub / ECR</li>
  </ul>

  <h2 id="architecture">Architecture</h2>
  <pre>
User → CloudFront & S3 (frontend)
      ↕
     API Gateway → ECS Fargate (Django backend) → RDS (Postgres)
      ↕
     SES (email)
  </pre>

  <h2 id="getting-started">Getting Started</h2>
  <h3>Prerequisites</h3>
  <ul>
    <li>Node.js >=18</li>
    <li>Python 3.11</li>
    <li>Docker & Docker Compose</li>
    <li>AWS CLI configured</li>
  </ul>

  <h3>Installation</h3>
  <pre>
# Clone
git clone https://github.com/nikosDmask/portfolio.git
cd portfolio
  </pre>
  <p>Create <code>.env</code> files in <code>backend/</code> for:</p>
  <ul>
    <li>DJANGO_SECRET_KEY</li>
    <li>DATABASE_URL</li>
    <li>EMAIL_HOST_USER / EMAIL_HOST_PASSWORD</li>
    <li>AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY</li>
  </ul>

  <h3>Running Locally (without Docker)</h3>
  <pre>
# Backend
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

# Frontend
cd frontend
npm install
npm run dev
  </pre>

  <h2 id="docker-setup">Docker Setup</h2>
  <pre>
docker compose build
docker compose up
  </pre>
  <p>Frontend: http://localhost:3000<br/>
     Backend:  http://localhost:8000</p>

  <h2 id="aws-deployment">AWS Deployment</h2>
  <h3>1. Frontend → S3 & CloudFront</h3>
  <pre>
cd frontend
npm run build
aws s3 sync dist/ s3://YOUR_BUCKET_NAME --delete
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
  </pre>

  <h3>2. Backend → ECR & ECS</h3>
  <pre>
# Login & push
aws ecr create-repository --repository-name portfolio-backend
$(aws ecr get-login --no-include-email)
docker build -t portfolio-backend backend/
docker tag portfolio-backend:latest YOUR_ECR_URI/portfolio-backend:latest
docker push YOUR_ECR_URI/portfolio-backend:latest

# Update ECS service
aws ecs update-service \
  --cluster your-cluster \
  --service backend-service \
  --force-new-deployment
  </pre>

  <h3>3. Database & Email</h3>
  <ul>
    <li>Ensure RDS security group allows ECS tasks</li>
    <li>Configure AWS SES with a verified domain/email</li>
  </ul>

  <h2 id="testing">Testing</h2>
  <p>I’m integrating automated tests into the GitHub Flow:</p>
  <ul>
    <li><strong>Backend unit tests</strong> (Django’s <code>pytest</code> or <code>manage.py test</code>)</li>
    <li><strong>Frontend tests</strong> (Jest + React Testing Library)</li>
    <li><strong>API contract tests</strong> with <code>pytest-drf</code></li>
    <li><strong>End-to-end tests</strong> using Cypress against a staging environment</li>
  </ul>
  <pre>
# Example commands
cd backend
pytest

cd frontend
npm run test
  </pre>

  <h2 id="ci-github-flow">CI & GitHub Flow</h2>
  <ol>
    <li>Branch off <code>main</code>:
      <pre>git checkout -b feature/my-change</pre>
    </li>
    <li>Push & open a PR — GitHub Actions will run:
      <ul>
        <li>Lint & tests</li>
        <li>Build & Docker publish</li>
      </ul>
    </li>
    <li>After approval, merge → <code>main</code> triggers deployment</li>
  </ol>

  <h2 id="contributing">Contributing</h2>
  <p>Fork → branch → code → PR against <code>main</code>.</p>

  <h2 id="license">License</h2>
  <p>This project is released into the public domain. Feel free to use, copy,
  modify, and distribute this code in any way you like—no attribution required.</p>

  <h2 id="contact">Contact</h2>
  <ul>
    <li><strong>Email:</strong> <a href="#">nikosdevmask@gmail.com</a></li>
    <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/nikos-maskalidis-03a6b0330/" target="_blank">nikos-maskalidis-03a6b0330</a></li>
  </ul>

</body>
</html>
