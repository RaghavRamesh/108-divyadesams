# Development

## Workflow
```
108dd (master) $ docker build -t 108dd .
108dd (master) $ docker run -ti -p 3000:3000 -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules -e CHOKIDAR_USEPOLLING=true 108dd
```

## Deployment

The following is a convoluted way to deploy and I have to this because I messed up the node
installation in my local machine (and I'm not motivated to fix it).

1. Copy the current source code to a temp folder.
1. Checkout to `gh-pages` branch:
  ```
  108dd (master) $ git checkout gh-pages
  ```
1. Move all its contents to trash:
  ```
  108dd (gh-pages) $ rm -rf .
  ```
1. Paste the temp folder contents.
1. Create a prod build using `Dockerfile.prod`:
  ```
  108dd (gh-pages) $ docker build -t 108dd . -f Dockerfile.prod`
  ```
1. Create a container from the image which will create the artifacts in a build folder:
  ```
  108dd (gh-pages) $ docker run -ti -p 3000:3000 -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules -v ${PWD}/build:/usr/src/app/build 108dd
  ```
1. Rename "/static/js..." to "/108-divyadesams/static/js..." in the `build/index.html` file (2 such occurrences) so that when deployed, the browser knows where to look for the JS assets (raghavramesh.github.io/108-divyadesams as opposed to raghavramesh.github.io/).
1. Delete everything except the build folder.
1. Move the contents of the build folder to the root and delete the empty build folder.
1. Commit:
  ```
  108dd (gh-pages) $ git add . && git commit -am "<describe the updates>"
  ```
1. Push to deploy:
  ```
  108dd (gh-pages) $ git push origin gh-pages
  ```
