![Alt text](src/assets/appScreens/appScreen3.png)
![Alt text](src/assets/appScreens/appScreen2.png)
![Alt text](src/assets/appScreens/appScreen1.png)

```sh
ng new picShare --style=scss --skip-tests

```

# Good practices : 
## Bad :

```html
  <img src="{{ imageUrl }}" alt="{{ title }}">
  ``` 
## Good :
 ```html 
  <img [src]="imageUrl" [alt]="title">
  ```  
## Bad :
```ts
export class FaceSnap {
  title: string;
  description: string;
  createdDate: Date;
  snaps: number;
  imageUrl: string;
  
  constructor(title: string, description: string, imageUrl: string, createdDate: Date, snaps: number) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.createdDate = createdDate;
    this.snaps = snaps;
  }
}
```
## Good :
  ```ts
  export class FaceSnap {
  constructor(public title: string,
              public description: string,
              public imageUrl: string,
              public createdDate: Date,
              public snaps: number) {
  }
}
  ```



  # Theory :
  ## Directives :

1. Structural Directives :

Structural directives modify the structure of the DOM by adding or removing HTML elements based on certain conditions or values. Structural directives are prefixed with an asterisk (*).
Examples: `*ngIf, *ngFor, *ngSwitch`.

2. Attribute Directives :

Attribute directives modify the appearance or behavior of HTML elements by adding, modifying, or removing attributes or CSS classes.
Examples: `[ngClass], [ngStyle], [ngModel], [ngIf], [ngFor]`.

3. Component Directives:

Component directives allow you to include custom components in a template. They are used to encapsulate the logic and appearance of a part of the application.
Example: `<app-my-component></app-my-component>` (where app-my-component is the component selector).

## Scrolling Methods :
1. ``` this.scroller.scrollToAnchor("targetRed"): ```

Uses ViewportScroller, which may be preferable if you want better control over scrolling in your Angular application.
Suitable for instant scrolling to a specific element without smooth animation.


2. ``` document.getElementById("targetGreen").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" }): ```


Uses the standard DOM API, which can be simpler and more straightforward in some cases.
Allows smooth scrolling to the specified element with animation.

3. ``` this.router.navigate([], { fragment: "targetBlue" }): ```

Uses the Angular router to handle scrolling during fragment-based URL navigation.
Useful if you're using URL fragments for navigation and want the router to automatically handle scrolling.