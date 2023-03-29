call npm install --prefix .\inventario-frontend 
call npm run build --prefix .\inventario-frontend
call docker build -t inventario-frontend:v0.0.1 -f .\inventario-frontend\Dockerfile .