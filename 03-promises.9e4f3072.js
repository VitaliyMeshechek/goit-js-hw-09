!function(){function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},o.parcelRequired7c6=r);var i=r("iU1Pc"),l=null,u=null,a=null;function c(e,o){return new Promise((function(n,t){var r=Math.random()>.3;setTimeout((function(){r?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}function f(o){var n=o.position,t=o.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))}function d(o){var n=o.position,t=o.delay;e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(e){e.preventDefault(),l=Number(e.target.delay.value),u=Number(e.target.step.value),a=Number(e.target.amount.value);for(var o=1;o<=a;o+=1)c(o,l).then(f).catch(d),l+=u;console.log(l),console.log(u),console.log(a)}))}();
//# sourceMappingURL=03-promises.9e4f3072.js.map
