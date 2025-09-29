# defines the version of the node image to use
FROM node:20

# sets the working directory to /app
WORKDIR /app

# copies package.json and package-lock.json to the working directory
COPY package*.json ./

# installs dependencies
RUN npm install

# copies the rest of the application files to the working directory
COPY . .

# generates Prisma client
RUN npx prisma generate

# builds the application
RUN npm run build

# exposes port 3000
EXPOSE 3000

# starts the application
CMD ["npm", "start"]