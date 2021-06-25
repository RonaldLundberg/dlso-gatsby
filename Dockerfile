FROM node:buster

# Create app directory
WORKDIR /app

# Install app dependencies
# RUN npm -g install serve
RUN npm -g install gatsby-cli

COPY package*.json ./

<<<<<<< HEAD
=======
RUN npm install -g joi 
# npm@7.18.1

>>>>>>> 841a57ead358a18eff6056b7682c11b9a6090896
RUN npm ci

# Bundle app source
COPY . .

# Build static files
RUN npm run build

# serve on port 8080
<<<<<<< HEAD
# CMD ["serve", "-l", "tcp://0.0.0.0:8080", "public"]
CMD ["gatsby", "serve", "--verbose", "--prefix-paths", "-p", "8080", "--host", "0.0.0.0"]
=======
#CMD ["serve", "-l", "tcp://0.0.0.0:8080", "public"]
CMD ["gatsby", "serve", "--verbose", "--prefix-paths", "-p", "8080", "--host", "0.0.0.0"]

# docker run --rm -d  -p 8080:8080 gatsby
# docker build -t "gatsby"  --build-arg HTTP_PROXY=http://user:****:password@jacks.org:31 --build-arg HTTPS_PROXY=http://****:password@bjacks.org:31 .







>>>>>>> 841a57ead358a18eff6056b7682c11b9a6090896
