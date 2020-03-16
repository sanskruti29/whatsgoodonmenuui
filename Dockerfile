###########################
FROM node:13 as build-stage
###########################
# install chrome for protractor tests
#RUN apt-get -y update && apt-get install -y chromium libgconf-2-4

# This line is to tell karma-chrome-launcher where
# chromium was downloaded and installed to.
#ENV CHROME_BIN /usr/bin/chromium-browser
###########################
WORKDIR /app
COPY package*.json /app/
###########################
RUN npm install
COPY ./ /app/
###########################
#RUN CI=true npm test
RUN npm run build
###########################
FROM nginx:1.17
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
###########################
ENV PORT 8080
###########################