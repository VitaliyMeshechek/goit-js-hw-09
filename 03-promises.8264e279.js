!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var i=r("iU1Pc");function u(e,n){return new Promise((function(o,t){var r=Math.random()>.3;setTimeout((function(){d(u),r?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}var a={form:document.querySelector(".form"),btn:document.querySelector("button"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]')};function c(n){var o=n.position,t=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))}function l(n){var o=n.position,t=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))}function d(e){a.form.currenTarget=a.form.value;for(var n=a.delay.value,o=a.step.value,t=a.amount.value,r=0;r<t;r+=1)t>0&&(u(r,n).then(c).catch(l),r=n+o),e.preventDefault()}console.dir(a),a.form.addEventListener("submit",d)}();
//# sourceMappingURL=03-promises.8264e279.js.map