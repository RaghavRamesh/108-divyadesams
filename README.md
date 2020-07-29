# 108 Divyadesams

A map-based infographic to complement the journey of learning about the 108 Divya desams.

## Workflow
```
$ docker build -t 108dd .
$ docker run -ti -p 3000:3000 -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules -e CHOKIDAR_USEPOLLING=true 108dd
```

## Production
Once ready to deploy, execute the following in the Docker host:
```
$ git checkout gh-pages
$ git merge master
$ docker build -t 108dd -f Dockerfile.prod
$ docker run -ti -p 3000:3000 -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules -v ${PWD}/build:/usr/src/app/build 108dd
$ rsync -av --progress . /sourcecode --exclude build
$ cp build/ .
$ rm -rf build
$ git push origin gh-pages
$ cp sourcecode/ .
$ rm -rf sourcecode
```
