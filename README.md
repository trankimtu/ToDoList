# ToDoList

## Setup
### Install primeng, primeicons, primeflex
```
  npm i primeng primeicons primeflex
```
Check package.json to know if they installed or not
```
    "primeflex": "^3.3.1",
    "primeicons": "^6.0.1",
    "primeng": "^16.5.0",
```
### Add styles
In angular.json, under styles section, add
```
    "styles": [
        "src/styles.css",
        "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
        "node_modules/primeng/resources/primeng.min.css",
        "node_modules/primeflex/primeflex.css",
        "node_modules/primeicons/primeicons.css"
      ],
```
