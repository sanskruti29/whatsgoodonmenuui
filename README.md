This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

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

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



======================= Docker ==================  
After making any changes, update following command with new version number.
Execute to build the image and push it:  
````
docker build -t menuui:v1 .  
````
You can run the image locally using
````
docker run --name menuuidocker --rm -p 8080:8080 menuui:v1
Note: Container exposes 8080 and is mapped to local port 8080
````
You can browse the website at:
````
curl http://localhost:8880
````
See all running docker containers using:
````
docker ps
````
To stop running container
````
docker stop menuuidocker
````
======================= Docker ==================  
======================= Docker Prod ==================  
````
docker build -f DockerfileProd -t gcr.io/kubegcp-256806/menu-ui:v1 .    
docker push gcr.io/kubegcp-256806/menu-ui:v1  
docker run --name menuuidocker --rm -p 8080:8080 gcr.io/kubegcp-256806/menu-ui:v1  
Note: Container exposes 8080 and is mapped to local port 8880
docker stop menuuidocker  
````
======================= Docker Prod ==================  
======================= Kubernetese Prod ==================  
To create required google managed certs, execute
```` 
kubectl apply -f k8s/menu-ui-menu-coderprabhu-cert.yaml  
````
To remove all k8s objects, execute
````
kubectl delete -f k8s/menu-ui-backend-service.yaml  
kubectl delete -f k8s/menu-ui-deployment.yaml  
````
When code is updated update the deployment yaml with new 
container image versions.
To create or update the k8s deployment
````
kubectl apply -f k8s/menu-ui-deployment.yaml  
kubectl apply -f k8s/menu-ui-backend-service.yaml  
````
For Ingress/Load Balancer, following command from https://github.com/CoderPraBhu/coderprabhu-k8s is applied. 
It includes following: 
````
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
````
````
kubectl apply -f coderprabhu-ingress.yaml
kubectl describe ingress coderprabhu-ingress
````
Additional commands:  
````
kubectl describe managedcertificate menucoderprabhudotcommanagedcert
kubectl get deployment menu-ui-web
kubectl describe deployment menu-ui-web
kubectl get service menu-ui-backend
kubectl describe service menu-ui-backend
````
======================= Kubernetese Prod ==================  