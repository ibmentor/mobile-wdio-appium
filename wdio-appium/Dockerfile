# The FROM instruction initializes a new build stage and sets the Base Image for subsequent instructions
# alpine will serve as the base image
FROM node:alpine

# The LABEL instruction adds metadata to an image
LABEL maintainer="Pranshu"

# The RUN instruction will execute any commands in a new layer on top of the current image and commit the results
# apk is the package manager for alpine based images
# using that installing necessary packages
RUN apk --no-cache add \
    build-base \
    nodejs \
    npm \
    ffmpeg \
    && npm install -g n\
    npm stable \
    # Clean up obsolete files:
    && rm -rf \
    /tmp/* \
    /root/.npm

# The WORKDIR instruction sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD
# instructions that follow it in the Dockerfile.
WORKDIR /wdio-appium
#The COPY instruction copies files from a local source location to a destination in the Docker container
COPY package.json /wdio-appium
#COPY package-lock.json /wdio-appium
COPY wdio.config.js /wdio-appium
RUN cd /wdio-appium


RUN rm -rf ./node_modules

RUN rm -rf ./package-lock.json

RUN npm cache clear --force

# Installing all the dependecies present in the package.json file
RUN npm install 
    # Clean up obsolete files:
    #&& rm -rf \
    #/tmp/* \
    #/root/.npm

RUN node -v && npm -v

# Copying all the source code into the folder
COPY . /wdio-appium

# An ENTRYPOINT allows you to configure a container that will run as an executable.
ENTRYPOINT [ "npm", "run" ]

# The main purpose of a CMD is to provide default commands to an executing container
CMD ["test"]
