### To Create New Model using ng

ng generate interface models/book --type=model

### To Create New Component using ng

ng generate component book

# Using `[(ngModel)]` in Angular

## Why Do We Need `FormsModule`?

The `[(ngModel)]` directive is part of Angular's **FormsModule**, which provides support for template-driven forms and two-way data binding. To use `[(ngModel)]` in your components, you must import `FormsModule` in your Angular application's `app.module.ts`. Without this, Angular will not recognize the `ngModel` directive and you'll encounter errors

