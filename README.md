# ToDoList

## A. Setup
### I. Install primeng, primeicons, primeflex
```
  npm i primeng primeicons primeflex
```
Check package.json to know if they installed or not
```
    "primeflex": "^3.3.1",
    "primeicons": "^6.0.1",
    "primeng": "^16.5.0",
```
### II. Add styles
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
## B. Add PrimeNG Card component
### I. In ```app.module.ts``` add 
``` import { CardModule } from 'primeng/card';``` and ```CardModule``` in imports array<br>
### II. html file
Copy and paste primeNG template to html file
If running ng serve, need to restart to see the style apply<br>
Make the p-card class w-6 to make it 60% width and change title to "Todo"

## C. Add PrimeNG Table component
