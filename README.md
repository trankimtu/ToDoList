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
```import { TableModule } from 'primeng/table';``` and ```TableModule``` in imports array<br>
Pass ```todos``` array to the value property of ```p-table```<br>
Define ```todos``` array in ```app.component.ts```<br>
```
    todos = [
    {
      id: 1,
      task: 'first dodo',
      completed: true
    },
    {
      id: 2,
      task: 'second dodo',
      completed: false
    },
  ]
```
Use ```let-todo``` to load each object of array todos
Output ```{{ todo.task }}``` to browser for testing

## D. Add PrimeNG Checkbox component
```import { CheckboxModule } from 'primeng/checkbox';``` and ```CheckboxModule``` in imports array<br>
CheckboxModule is a form element which leads to
```import { FormsModule } from '@angular/forms'; // for ngModel``` and ```FormsModule``` in imports array<br>
Bind ```[(ngModel)]``` to ```todo.completed```

## E. Add PrimeNG check button component
```import { ButtonModule } from 'primeng/checkbox';``` and ```ButtonModule``` in imports array<br>

