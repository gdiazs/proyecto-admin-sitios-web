npm install --prefix ./inventario-frontend
npm run build --prefix ./inventario-frontend
docker build -t inventario-frontend:v0.0.1 -f ./inventario-frontend/Dockerfile .