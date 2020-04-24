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
    this.dispatchEvent(new Event("ChangeCount"));
  },

  get count() {
    return Number(this.getAttribute("count"));
  },
  set count(newValue) {
    this.setAttribute("count", newValue);
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
