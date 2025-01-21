# JWT Secured Service with Dockerized Frontend and Backend

This project is a comprehensive example of creating a secure service using Spring Boot and JWT for authentication. It includes a frontend built with Angular and demonstrates how to securely communicate between the frontend and backend using JWT. The entire application is dockerized using Docker Compose for easy setup and deployment.

## Project Overview

During this project, we build a backend service in Spring Boot, secure it using JWT, and create roles to manage user permissions. The frontend is developed in Angular, demonstrating user authentication and secure data exchange with the backend. Finally, we dockerize both the backend and frontend and configure a Docker Compose setup to run the entire stack, including a database.

## Who This Project Is For

- Developers looking to quickly learn how to secure communication between backend and frontend.
- Those interested in learning through LiveCoding and real project implementation.
- Anyone who wants to use Docker Compose for running applications.

### Prerequisites

- Docker and Docker Compose installed on your system.

### Running the Project

1. Clone the repository:
    ```bash
    git clone https://github.com/bartlomiejbakdev/spring-angular-jwt-docker.git
    cd spring-angular-jwt-docker
2. Build and run the services using Docker Compose:
    docker-compose up --build
3. The backend service will be accessible at http://localhost:8080, and the frontend at http://localhost:4200.
4. To stop the services, press Crtl+c and run:
docker-compose down

MIT
