FROM postgres:latest
ENV POSTGRES_PASSWORD=secret
ENV POSTGRES_USER=username
ENV POSTGRES_DB=database
COPY create.sql /docker-entrypoint-initdb.d/create.sql
COPY insert.sql /docker-entrypoint-initdb.d/insert.sql