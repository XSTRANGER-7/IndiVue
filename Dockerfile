FROM python:3.9-slim


RUN apt-get update && apt-get install -y nodejs npm


WORKDIR /app


COPY . .


RUN pip install django


RUN npm install


EXPOSE 3000
EXPOSE 8000


CMD ["sh", "-c", "npm start & python3 manage.py runserver 0.0.0.0:8000"]
