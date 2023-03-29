call mvn clean install -f inventario-backend\pom.xml
call docker build -t inventario-backend:v0.0.1 -f .\inventario-backend\Dockerfile .