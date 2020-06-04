# Template Tag Loader
A template tag loader for Webpack.

Working with web components? Want to have modular templates for your components? Already using Webpack? Have I got 
something nifty for you.

### Installation

Add the module as a dependency in your project.
 
```shell script
yarn add --dev template-tag-loader
````

Then configure Webpack
```javascript
module.exports = {
    //...
    module: {
        rules: [
            {
                test: /\.template.html$/,
                use: 'template-tag-loader',
                exclude: /node_modules/,
            }
        ],
    },
    // ...
};
```

Now in your code, you can import template HTML!

### Use Case

Let's say you're building web components. Writing html templates to provide substance for those components can be a real
chore. You can embed the template tag into the HTML document and access it via `document.getElementById`, but that 
creates an air-gap between the Javascript and the template it depends on. It *can* work, but doesn't scale easily.

You can also write the template tag as a string directly in the Javascript. It brings the template closer to the code
that depends on it, sure. But it's also big and dumb and ugly. It also doesn't play nicely with your code editor.

Using this loader, you can separate the template code into a separate file, and import it directly into the Javascript
that relies on it.

Consider an example where we have a template `component.template.html` in the same directory as the web component 
definition that depends on it.

```html
<template>
    <h1>Ford... you're turning into a penguin. Stop it.</h1>
</template>
```

```javascript
import template from './component.template.html';
export default class Component extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.element = this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}
```
Now you get syntax highlighting for your html, and your Javascript. Nice!

### Caveats

This is purpose built for what I was interested in seeing happen at the time. More features may come, they also may not.
Reach out if you use this.
