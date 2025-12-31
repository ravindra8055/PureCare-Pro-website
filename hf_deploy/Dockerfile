FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

ENV CACHE_BUSTER=FINAL_BUILD

# Support running as arbitrary user which is needed for Hugging Face Spaces
RUN chmod -R 777 /var/cache/nginx /var/run /var/log/nginx && \
    chmod -R 777 /etc/nginx/conf.d

# Copy built assets with correct ownership
COPY --chown=nginx:nginx dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
