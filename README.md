# 108 Divyadesams

A map-based infographic to complement the journey of learning about the 108 Divya desams.

## Workflow
```
$ docker build -t 108dd .
$ docker run -ti -p 3000:3000 -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules -e CHOKIDAR_USEPOLLING=true 108dd
```

## Production
1. Once ready to deploy, checkout to gh-pages branch
1. `git merge master`
1. `docker build -t 108dd -f Dockerfile.prod`
1. `docker run -ti -p 3000:3000 -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules -v ${PWD}/build:/usr/src/app/build 108dd`
1. Move all files except build folder in host machine to `108dd/sourcecode` directory
1. `cp build/ . && rm build`
1. `git push origin gh-pages` which will deploy the changes to raghavramesh.github.io/108-divyadesams
1. `cp sourcecode/ .`
