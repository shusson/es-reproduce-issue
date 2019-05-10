# es-reproduce-issue

Have you encountered an issue with the [Elasticsearch JavaScript client](https://github.com/elastic/elasticsearch-js) and are you trying to reproduce it in a clean environment? This repository is here to help you!

## Instructions

1. Fork the repository

1. Clone the repository in your local machine

1. Generate the certificates (only needed once):
```
docker-compose -f create-certs.yml up
```

1. Start three Elasticsearch nodes configured for SSL/TLS:
```
docker-compose up
```

1. Install project dependencies:
```
npm install
```

1. Edit the `.js` or `.ts` file to reproduceyour issue. The client is already configured to work with the cluster.

1. Push your changes in your fork and attach the link to your fork in the issue.

You can find the guide to work with Elasticsearch and docker [here](https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html), while [here](https://www.elastic.co/guide/en/elasticsearch/reference/current/configuring-tls-docker.html) you can find the tls configuration.

## License
[MIT](./LICENSE)
