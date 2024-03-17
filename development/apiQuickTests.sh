#!/bin/bash

echo "GET /f-counts"
curl -X GET http://localhost:3100/f-counts
echo ""

echo "POST /f-counts"
curl -X POST http://localhost:3100/f-counts
echo ""

echo "GET /f-counts/:id"
curl -X GET http://localhost:3100/f-counts/2
echo ""

echo "DELETE /f-counts/:id"
curl -X DELETE http://localhost:3100/f-counts/2
echo ""