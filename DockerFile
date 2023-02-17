FROM node
LABEL authors="Codecooler"

# Update dependencies and make the image smaller by deleting the apt lists
RUN apt-get update \
    && apt-get install -y \
    && rm -rf /var/lib/apt/lists/*

# Sets the working directory (it will be created if it doesn't exist)
WORKDIR /app

COPY . .

# Update each dependency in package.json to the latest version
RUN npm install \
    && npm install -g npm-check-updates \
    && ncu -u \
    && npm install

# If you are building your code for production
# npm ci will install dependencies from package-lock.json
RUN npm ci --only=production

EXPOSE 5000

CMD [ "node", "index.js" ]