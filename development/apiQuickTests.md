## GET /f-counts

curl -i http://localhost:3100/f-counts

## POST /f-counts

curl -i -X POST -H "Content-Type: application/json" -d '{"imgUrl":"http://crud.com", "callbackUrl":"http://cb.com"}' http://localhost:3100/f-counts

## GET /f-counts/:id

curl -i http://localhost:3100/f-counts/1

## DELETE /f-counts/:id

curl -i -X DELETE http://localhost:3100/f-counts/1