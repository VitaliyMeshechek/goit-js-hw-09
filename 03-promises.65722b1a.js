function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},l=o.parcelRequired7c6;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var l={id:e,exports:{}};return n[e]=l,o.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},o.parcelRequired7c6=l);var r=l("eWCmQ");let i=null,u=null,a=null;function s(e,o){return new Promise(((n,t)=>{const l=Math.random()>.3;setTimeout((()=>{l?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}function d({position:o,delay:n}){e(r).Notify.success(`✅ Fulfilled promise ${o} in ${n}ms`)}function f({position:o,delay:n}){e(r).Notify.failure(`❌ Rejected promise ${o} in ${n}ms`)}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(e){e.preventDefault(),i=Number(e.target.delay.value),u=Number(e.target.step.value),a=Number(e.target.amount.value);for(let e=1;e<=a;e+=1)s(e,i).then(d).catch(f),i+=u;console.log(i),console.log(u),console.log(a)}));
//# sourceMappingURL=03-promises.65722b1a.js.map
