FROM node:latest

RUN npm i -g @vue/cli

WORKDIR /usr/project

CMD /bin/bash
