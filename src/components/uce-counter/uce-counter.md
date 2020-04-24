---
title: <uce-counter/>
description: Counter created with Uce, its interaction is complete, managing to reactively work the state of "count" as property and attribute of the component
group: Components
---

# {{page.title}}

> {{page.description}}

## Component

```js
import { define } from "uce";
import style from "./uce-counter.css";

define("uce-counter", {
  attachShadow: { mode: "open" },
  init() {
    this.render();
  },
  observedAttributes: ["count"],
  attributeChanged(name, oldValue, newValue) {
    this.render();
    this.dispatchEvent(new Event("ChangeCount")); // dispatches ChangeCount event at every count change, for subscription of side effects
  },
  // create the getter property for count
  get count() {
    return Number(this.getAttribute("count")); // normalize the property as numeric
  },
  set count(newValue) {
    this.setAttribute("count", newValue); // reflects the value of the property as an attribute
  },
  render() {
    this.html`
      <style>${style}</style>
      <button onclick="${() => this.count--}">-</button>
      <span>${this.count}</span>
      <button onclick="${() => this.count++}">+</button>
    `;
  },
});
```

## Demo

<uce-counter count="100"></uce-counter>

```html
<uce-counter count="100"></uce-counter>
```

## Properties

| Prop/Attr | Description            | Type   | Reflect | Event       | Default Value |
| --------- | ---------------------- | ------ | ------- | ----------- | ------------- |
| count     | current value of count | Number | String  | ChangeCount | 0             |

## Sizes

```bash
FILES               GZIP    BROTLI
atomico-counter.js  3.21KB  2.85KB
uce-counter.js      3.69KB  3.31KB
                    6.90KB  6.16KB
```

> Size generated with bundle-cl(Rollup+Terser).

<script type="module" src="uce-counter.js"><script>
