---
title: API Platform Framework
description: Το API Platform είναι ένα σύνολο εργαλείων για τη δημιουργία διαδικτυακών Rest API.
origin: https://api-platform.com/
weight: 38
---
Το API Platform είναι ένα εργαλείο γραμμένο σε [PHP]({{< ref "technologies/php" >}}) και βασισμένο στο Symfony Flex για την δημιουργία Restful/GraphQL Api.

Το μόνο που έχεις να κάνεις είναι να περιγράψεις τα μοντέλα σου και το api-platform αναλαμβάνει εξολοκλήρου την υπόλοιπη δουλειά.

Μερικά από τα σημαντικότερα χαρακτηριστικά του:
* Δυνατότητα ενημερώσεις των μοντέλων σου σε πραγματικό χρόνο (real-time updates) χρησιμοποιώντας <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events'>Server-sent events</a>.
* Φίλτρα
* Validation
* JWT Authentication
* Αυτόματα έτοιμο <a href='https://en.wikipedia.org/wiki/OpenAPI_Specification' target='_blank'>OpenAPI v3</a> (Swagger Specification)
* Integration με Elasticsearch
* Pagination
* Helm chart για να κάνεις deploy το API σου σε Kubernetes cluster
* Client Generators
* Βοηθητικά εργαλεία για Unit Testing

