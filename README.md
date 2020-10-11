# Read me

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

```comment/html
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
```

```comment/html
The page will reload if you make edits.<br />
You will also see any lint errors in the console.
```

### `npm test`

```comment/html
Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
```

### `npm run build`

```comment/html
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
```

```comment/html
The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
```

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: <https://facebook.github.io/create-react-app/docs/code-splitting>

### Analyzing the Bundle Size

This section has moved here: <https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size>

### Making a Progressive Web App

This section has moved here: <https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app>

### Advanced Configuration

This section has moved here: <https://facebook.github.io/create-react-app/docs/advanced-configuration>

### Deployment

This section has moved here: <https://facebook.github.io/create-react-app/docs/deployment>

### `npm run build` fails to minify

This section has moved here: <https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify>

======================= Docker ==================  
After making any changes, update following command with new version number.
Execute to build the image and push it:  

```docker/bash
docker build -t menuui:v1 .  
```

You can run the image locally using

```docker/bash
docker run --name menuuidocker --rm -p 8080:8080 menuui:v1
Note: Container exposes 8080 and is mapped to local port 8080
```

You can browse the website at:

```bash
curl http://localhost:8080
```

See all running docker containers using:

```docker/bash
docker ps
```

To stop running container

```docker/bash
docker stop menuuidocker
```

======================= Docker ==================  
======================= Docker Prod ==================  

```docker/bash
docker build -f DockerfileProd -t gcr.io/kubegcp-256806/menu-ui:v2 .
docker push gcr.io/kubegcp-256806/menu-ui:v2
docker run --name menuuidocker --rm -p 8080:8080 gcr.io/kubegcp-256806/menu-ui:v2
Note: Container exposes 8080 and is mapped to local port 8880
docker stop menuuidocker  
```

======================= Docker Prod ==================  
======================= Kubernetes Prod ==================  
To create required google managed certs, execute

```kubernetes/bash
kubectl apply -f k8s/menu-ui-menu-coderprabhu-cert.yaml
kubectl apply -f k8s/menu-ui-whatsgoodonmenu-cert.yaml  
kubectl apply -f k8s/menu-ui-wwwwhatsgoodonmenu-cert.yaml
```

To remove all k8s objects, execute

```kubernetes
kubectl delete -f k8s/menu-ui-backend-service.yaml  
kubectl delete -f k8s/menu-ui-deployment.yaml  
```

When code is updated update the deployment yaml with new
container image versions.
To create or update the k8s deployment

```kubernetes
kubectl apply -f k8s/menu-ui-deployment.yaml  
kubectl apply -f k8s/menu-ui-backend-service.yaml  

kubectl apply -f k8s-manual/menu-ui-backend-service-manual.yaml  

```

For Ingress/Load Balancer, following command from <https://github.com/CoderPraBhu/coderprabhu-k8s> is applied.
It includes following:

```comment
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: coderprabhu-ingress
  annotations:
    kubernetes.io/ingress.global-static-ip-name: coderprabhu-ip
    networking.gke.io/managed-certificates: "menucoderprabhudotcommanagedcert"
  labels:
    app: coderprabhu-ui
spec:
  rules:
  - host: menu.coderprabhu.com
    http:
      paths:
        - path: /*
          backend:
            serviceName: menu-ui-backend
            servicePort: httpuiport
```

```kubernetes
kubectl apply -f coderprabhu-ingress.yaml
kubectl describe ingress coderprabhu-ingress
```

Additional commands:  

```kubernetes
kubectl describe managedcertificate menucoderprabhudotcommanagedcert
kubectl describe managedcertificate whatsgoodonmenudotcommanagedcert
kubectl describe managedcertificate wwwwhatsgoodonmenudotcommanagedcert

kubectl get deployment menu-ui-web
kubectl describe deployment menu-ui-web
kubectl get service menu-ui-backend
kubectl describe service menu-ui-backend
```

======================= Kubernetes Prod ==================  

================== Production Deployment ==================

```docker
docker build -f DockerfileProd -t gcr.io/kubegcp-256806/menu-ui:v13 .
docker push gcr.io/kubegcp-256806/menu-ui:v13

docker build -f DockerfileProd -t gcr.io/all-projects-292200/menu-ui:v14 .
docker push gcr.io/all-projects-292200/menu-ui:v14 
```

Change version in k8s ->  menu-ui-deployment

```kubernetes
kubectl apply -f k8s/menu-ui-deployment.yaml

kubectl apply -f k8s-manual/menu-ui-deployment-manual.yaml
```

## Npm install

Installation of external frameworks and libraries:

### React Router DOM

Allows you to handle routes in a web app, using dynamic routing

``` Javascript/bash
npm install react-router-dom
```

### Formik

Formik is form library for React:

```javascript/bash
npm install formik --save
```

### Yup

Yup is a JavaScript schema builder for value parsing and validation:

```javascript/bash
npm install yup --save
```

### React Bootstrap

React Bootstrap is front-end framework for React:

```javascript/bash
npm install react-bootstrap bootstrap
```

### Emotion

Emotion is a library designed for writing css styles with JavaScript

``` javascript/bash
npm install --save @emotion/core
```

styled is a way to create React components that have styles attached to them.

``` javascript/bash
npm install --save @emotion/styled
```

### React icons

```javascript/bash
npm install react-icons
```

### ID

```javascript/bash
npm install uuidv4
```

npm install react-star-rating-component --save
<!-- npm@6.14.6  on July 17-->