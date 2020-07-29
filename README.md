# 108 Divyadesams

A map-based infographic to complement the journey of learning about the 108 Divya desams.

## Workflow
```
$ docker build -t 108dd .
$ docker run -ti -p 3000:3000 -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules -e CHOKIDAR_USEPOLLING=true 108dd
```

## Production
Once ready to deploy:
1. Copy the current source code to a temp folder.
1. Checkout to gh-pages branch.
1. Move all its contents to trash.
1. Paste the temp folder contents.
1. Create a prod build using Dockerfile.prod: `docker build -t 108dd . -f Dockerfile.prod`.
1. Create a container from the image which will create the artifacts in a build folder: `docker run -ti -p 3000:3000 -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules -v ${PWD}/build:/usr/src/app/build 108dd`. Creating a container to create a build is a convoluted way and I have to this because I messed up my node installation in my host machine and hence I can't run npm scripts locally.
1. Rename "/static/js..." to "/108-divyadesams/static/js..." in the `build/index.html` file (2 such occurrences) so that when deployed, the browser knows where to look for the JS assets (raghavramesh.github.io/108-divyadesams as opposed to raghavramesh.github.io/).
1. Delete everything except the build folder.
1. Move the contents of the build folder to the root and delete the empty build folder.
1. Commit: `git add . && git commit -am "<describe the updates>"`.
1. Push to deploy: `git push origin gh-pages`.
