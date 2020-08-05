# Development

## Workflow
### Front-end
1.
    ```
    108-divyadesams (master) $ cd front-end
    108-divyadesams/front-end (master) $ docker build -t 108dd .
    108-divyadesams/front-end (master) $ docker run -ti -p 3000:3000 -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules -e CHOKIDAR_USEPOLLING=true 108dd
    ```
1. Visit localhost:3000

### API
1.
    ```
    108-divyadesams (master) $ cd api
    108-divyadesams/api (master) $ mvn clean spring-boot:run
    ```
1. API server will run in localhost:8080. `curl` or visit localhost:8080/swagger-ui.html


## Deployment
### Deploy Front-end to Github Pages
The following is a convoluted way to deploy and I have to do this because I messed up the node
installation in my local machine (and I'm not motivated to fix it).

1. Copy the contents of front-end folder to a temp folder.
1. Checkout to `gh-pages` branch:
    ```
    108-divyadesams (master) $ git checkout gh-pages
    ```
1. Move all its contents to trash:
    ```
    108-divyadesams (gh-pages) $ rm -rf .
    ```
1. Paste the temp folder contents.
1. Create a prod build using `Dockerfile.prod`:
    ```
    108-divyadesams (gh-pages) $ docker build -t 108dd . -f Dockerfile.prod`
    ```
1. Create a container from the image which will create the artifacts in a build folder:
    ```
    108-divyadesams (gh-pages) $ docker run -ti -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules -v ${PWD}/build:/usr/src/app/build 108dd
    ```
1. Rename "/static/js..." to "/108-divyadesams/static/js..." in the `build/index.html` file (2 such occurrences) so that when deployed, the browser knows where to look for the JS assets (raghavramesh.github.io/108-divyadesams as opposed to raghavramesh.github.io/).
1. Delete everything except the build folder.
1. Move the contents of the build folder to the root and delete the empty build folder.
1. Commit:
    ```
    108-divyadesams (gh-pages) $ git add . && git commit -am "<describe the updates>"
    ```
1. Push to deploy:
    ```
    108-divyadesams (gh-pages) $ git push origin gh-pages
    ```
### Deploy API
_todo_
