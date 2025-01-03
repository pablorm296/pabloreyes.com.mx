FROM node:lts AS base

WORKDIR /srv/pabloreyes.com.mx

FROM base AS deps

COPY package*.json ./
RUN npm install

FROM deps AS builder

COPY . .
RUN npm run build

FROM nginx AS runtime

COPY ./server/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /srv/pabloreyes.com.mx/dist /usr/share/nginx/html
EXPOSE 8080