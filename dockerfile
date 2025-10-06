# Use the official Node.js version from https://hub.docker.com/
FROM node:22-alpine

# Set the working directory inside the container to /app
WORKDIR /app

# Copy only the package.json file to the working directory
COPY package.json .

# Install npm dependencies based on the package.json
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 5002 to allow external access
EXPOSE 3000

# Specify the command to run the application when the container starts
CMD [ "npm", "run", "dev"]