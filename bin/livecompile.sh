# call me from parent dir!

static -H '{"Cache-Control": "no-cache, must-revalidate"}' --port 3000 &
nodemon --exec "sh $(pwd)/bin/build.sh" -e jade,styl