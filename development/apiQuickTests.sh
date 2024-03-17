#!/bin/bash

echo "POST /f-counts"
curl -X POST -H "Content-Type: application/json" -d '{"imgUrl":"http://img1.com", "callbackUrl":"http://test1.com"}' http://localhost:3100/f-counts
echo ""

echo "POST /f-counts"
curl -X POST -H "Content-Type: application/json" -d '{"imgUrl":"http://img2.com", "callbackUrl":"http://test2.com"}' http://localhost:3100/f-counts
echo ""

echo "GET /f-counts/:id"
curl -X GET http://localhost:3100/f-counts/1
echo ""

echo "DELETE /f-counts/:id"
curl -X DELETE http://localhost:3100/f-counts/1
echo ""

echo "GET /f-counts"
curl -X GET http://localhost:3100/f-counts
echo ""