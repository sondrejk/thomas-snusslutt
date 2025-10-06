# About
This is a website made to help my friend quit snus. It uses React + Vite with no backend. It is deployed locally on a server I own using a docker image.

# How to run locally
There are two options:
1. Run `npm run dev`
2. Run `docker compose up -d`

# How to deploy
At the moment I don't have an automatic deploying solution

1. `docker build --no-cache . -f dockerfile.prod -t sondrejk/snusnettside`
2. `docker push sondrejk/snusnettside`\
On kvasir server
3. `docker pull sondrejk/snusnettside`\
re-run the docker container
