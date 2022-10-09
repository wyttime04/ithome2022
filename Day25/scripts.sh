docker network create test-web

docker run -d \
    --network=test-web \
    -e HOST_PORT=80 \
    --name backend \
    test-backend:dev


docker run -d \
    -p 30001:80 \
    -v ${PWD}/frontend/react-nginx.conf:/etc/nginx/conf.d/default.conf \
    --network=test-web \
    --name frontend \
    test-frontend:dev


docker tag test-frontend:dev harbor.example.domain.com/test-web/test-frontend:dev
docker tag test-backend:dev harbor.example.domain.com/test-web/test-backend:dev

docker push harbor.example.domain.com/test-web/test-frontend:dev
docker push harbor.example.domain.com/test-web/test-backend:dev
