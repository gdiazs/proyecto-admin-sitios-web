FROM eclipse-temurin:17
RUN mkdir /opt/app
COPY ./inventario-backend/target/*.jar /opt/app/application.jar
EXPOSE 8080
CMD ["java", "-jar", "/opt/app/application.jar"]