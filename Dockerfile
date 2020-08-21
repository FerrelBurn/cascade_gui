# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM tiangolo/node-frontend:10 as build-stage
# Creates directories 

WORKDIR /app
# Install JSON dependencies
COPY package*.json /app/
# Install node package manager access
# Javascript modules on the registry
# metadata file in JSON format
RUN npm install

# vis-network bug workaround
RUN cp node_modules/vis-network/dist/dist/vis-network.min.css node_modules/vis-network/dist/vis-network.min.css

COPY ./ /app/
RUN npm run build
# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
# Cleans up container remove the files system when container exits
RUN rm /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/build/ /usr/share/nginx/html
