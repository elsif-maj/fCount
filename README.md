# Readme

This is fCount, an application that provides an API for the submission of image URLs, and provides a count of human faces in the images via a callback. It uses SQLite to store request information and statuses, and has API documentation by way of Open API 3.0 YAML. The API spec is transformed into a visually appealing and interactive API documentation with Swagger UI -- and can be accessed when the server is running at localhost:3100/docs.

## Instructions

- `git clone https://github.com/elsif-maj/fCount`

- `docker-compose up` from the project base directory

The base route for the API is localhost:3100/f-counts

Swagger UI docs/interactive page is at localhost:3100/docs

## Notes

- To keep things simple, an API key ("1234") is added to the environment by Docker on spin up. You'll need this for any requests that are made to the API.

- The facial recognition branch currently crashes upon being given a second image processing request. Use the main branch primarily for testing the POST route.

## Resources

For your convenience, here are some image links you can use to test the face recognition branch: 

https://www.andreasollenberger.com/wp-content/uploads/2019/12/01_Family-photographers-Gainesville-Florida.jpg

https://shannonreecejonesphotography.com/wp-content/uploads/2018/01/21-970-pp_gallery/Family-Session.jpg

And here is a site that can be used to provide a callback URL to test the callback functionality: https://webhook.site
