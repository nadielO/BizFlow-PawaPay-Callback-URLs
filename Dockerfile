# Use the official Node.js image with the version that matches
# the version specified in the 'package.json' dependencies for compatibility
FROM node:16.13.0

# Set the working directory inside the container to '/app'
WORKDIR /app

# Copy 'package.json' and 'package-lock.json' (if exists) into '/app'
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the remaining project files into '/app'
COPY . .

# Expose the port specified in the .env file (PORT=8080 by default)
EXPOSE 8080

# Set the command to start the server using 'npm start'
CMD ["npm", "start"]