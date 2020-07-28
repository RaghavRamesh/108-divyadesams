# 108 Divyadesams

A map-based infographic to complement the journey of learning about the 108 Divya desams.

## Workflow
```
$ docker build -t 108dd .
$ docker run -ti -p 3000:3000 -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules -e CHOKIDAR_USEPOLLING=true 108dd
```
