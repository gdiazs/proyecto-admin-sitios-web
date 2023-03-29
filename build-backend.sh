mvn clean install -f inventario-backend/pom.xml
docker build -t inventario-backend:v0.0.1 -f ./inventario-backend/Dockerfile .