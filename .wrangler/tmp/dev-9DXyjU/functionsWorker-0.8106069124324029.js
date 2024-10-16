var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// .wrangler/tmp/bundle-AqXEsp/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
__name(checkURL, "checkURL");
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// .wrangler/tmp/pages-6lZfdS/functionsWorker-0.8106069124324029.mjs
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
var urls2 = /* @__PURE__ */ new Set();
function checkURL2(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls2.has(url.toString())) {
      urls2.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
__name(checkURL2, "checkURL");
__name2(checkURL2, "checkURL");
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL2(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});
async function onRequest(context) {
  const request = context.request;
  console.log("handleRequest", request);
  const country = request.cf?.country || "GB-ENG";
  const resultObject = {
    country,
    regionCode: request.cf?.regionCode || "N/A",
    cf: request.cf
  };
  const responseBody = JSON.stringify(resultObject);
  return new Response(responseBody, {
    headers: {
      "Content-Type": "application/json"
      // 'Access-Control-Allow-Origin': request.headers.get('origin') not required becuase it's a function same domain
    }
  });
}
__name(onRequest, "onRequest");
__name2(onRequest, "onRequest");
var Token = /* @__PURE__ */ __name(class {
  constructor(kind, input, begin, end, file) {
    this.kind = kind;
    this.input = input;
    this.begin = begin;
    this.end = end;
    this.file = file;
  }
  getText() {
    return this.input.slice(this.begin, this.end);
  }
  getPosition() {
    let [row, col] = [1, 1];
    for (let i = 0; i < this.begin; i++) {
      if (this.input[i] === "\n") {
        row++;
        col = 1;
      } else
        col++;
    }
    return [row, col];
  }
  size() {
    return this.end - this.begin;
  }
}, "Token");
__name2(Token, "Token");
var Drop = /* @__PURE__ */ __name(class {
  liquidMethodMissing(key) {
    return void 0;
  }
}, "Drop");
__name2(Drop, "Drop");
var toString$1 = Object.prototype.toString;
var toLowerCase = String.prototype.toLowerCase;
var hasOwnProperty = Object.hasOwnProperty;
function isString(value) {
  return typeof value === "string";
}
__name(isString, "isString");
__name2(isString, "isString");
function isFunction(value) {
  return typeof value === "function";
}
__name(isFunction, "isFunction");
__name2(isFunction, "isFunction");
function isPromise(val) {
  return val && isFunction(val.then);
}
__name(isPromise, "isPromise");
__name2(isPromise, "isPromise");
function isIterator(val) {
  return val && isFunction(val.next) && isFunction(val.throw) && isFunction(val.return);
}
__name(isIterator, "isIterator");
__name2(isIterator, "isIterator");
function escapeRegex(str) {
  return str.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
__name(escapeRegex, "escapeRegex");
__name2(escapeRegex, "escapeRegex");
function stringify(value) {
  value = toValue(value);
  if (isString(value))
    return value;
  if (isNil(value))
    return "";
  if (isArray(value))
    return value.map((x) => stringify(x)).join("");
  return String(value);
}
__name(stringify, "stringify");
__name2(stringify, "stringify");
function toEnumerable(val) {
  val = toValue(val);
  if (isArray(val))
    return val;
  if (isString(val) && val.length > 0)
    return [val];
  if (isIterable(val))
    return Array.from(val);
  if (isObject(val))
    return Object.keys(val).map((key) => [key, val[key]]);
  return [];
}
__name(toEnumerable, "toEnumerable");
__name2(toEnumerable, "toEnumerable");
function toArray(val) {
  val = toValue(val);
  if (isNil(val))
    return [];
  if (isArray(val))
    return val;
  return [val];
}
__name(toArray, "toArray");
__name2(toArray, "toArray");
function toValue(value) {
  return value instanceof Drop && isFunction(value.valueOf) ? value.valueOf() : value;
}
__name(toValue, "toValue");
__name2(toValue, "toValue");
function toNumber(value) {
  value = Number(value);
  return isNaN(value) ? 0 : value;
}
__name(toNumber, "toNumber");
__name2(toNumber, "toNumber");
function isNumber(value) {
  return typeof value === "number";
}
__name(isNumber, "isNumber");
__name2(isNumber, "isNumber");
function toLiquid(value) {
  if (value && isFunction(value.toLiquid))
    return toLiquid(value.toLiquid());
  return value;
}
__name(toLiquid, "toLiquid");
__name2(toLiquid, "toLiquid");
function isNil(value) {
  return value == null;
}
__name(isNil, "isNil");
__name2(isNil, "isNil");
function isUndefined(value) {
  return value === void 0;
}
__name(isUndefined, "isUndefined");
__name2(isUndefined, "isUndefined");
function isArray(value) {
  return toString$1.call(value) === "[object Array]";
}
__name(isArray, "isArray");
__name2(isArray, "isArray");
function isIterable(value) {
  return isObject(value) && Symbol.iterator in value;
}
__name(isIterable, "isIterable");
__name2(isIterable, "isIterable");
function forOwn(obj, iteratee) {
  obj = obj || {};
  for (const k in obj) {
    if (hasOwnProperty.call(obj, k)) {
      if (iteratee(obj[k], k, obj) === false)
        break;
    }
  }
  return obj;
}
__name(forOwn, "forOwn");
__name2(forOwn, "forOwn");
function last(arr) {
  return arr[arr.length - 1];
}
__name(last, "last");
__name2(last, "last");
function isObject(value) {
  const type = typeof value;
  return value !== null && (type === "object" || type === "function");
}
__name(isObject, "isObject");
__name2(isObject, "isObject");
function range(start, stop, step = 1) {
  const arr = [];
  for (let i = start; i < stop; i += step) {
    arr.push(i);
  }
  return arr;
}
__name(range, "range");
__name2(range, "range");
function padStart(str, length, ch = " ") {
  return pad(str, length, ch, (str2, ch2) => ch2 + str2);
}
__name(padStart, "padStart");
__name2(padStart, "padStart");
function padEnd(str, length, ch = " ") {
  return pad(str, length, ch, (str2, ch2) => str2 + ch2);
}
__name(padEnd, "padEnd");
__name2(padEnd, "padEnd");
function pad(str, length, ch, add) {
  str = String(str);
  let n = length - str.length;
  while (n-- > 0)
    str = add(str, ch);
  return str;
}
__name(pad, "pad");
__name2(pad, "pad");
function identify(val) {
  return val;
}
__name(identify, "identify");
__name2(identify, "identify");
function changeCase(str) {
  const hasLowerCase = [...str].some((ch) => ch >= "a" && ch <= "z");
  return hasLowerCase ? str.toUpperCase() : str.toLowerCase();
}
__name(changeCase, "changeCase");
__name2(changeCase, "changeCase");
function ellipsis(str, N) {
  return str.length > N ? str.slice(0, N - 3) + "..." : str;
}
__name(ellipsis, "ellipsis");
__name2(ellipsis, "ellipsis");
function caseInsensitiveCompare(a, b) {
  if (a == null && b == null)
    return 0;
  if (a == null)
    return 1;
  if (b == null)
    return -1;
  a = toLowerCase.call(a);
  b = toLowerCase.call(b);
  if (a < b)
    return -1;
  if (a > b)
    return 1;
  return 0;
}
__name(caseInsensitiveCompare, "caseInsensitiveCompare");
__name2(caseInsensitiveCompare, "caseInsensitiveCompare");
function argumentsToValue(fn) {
  return function(...args) {
    return fn.call(this, ...args.map(toValue));
  };
}
__name(argumentsToValue, "argumentsToValue");
__name2(argumentsToValue, "argumentsToValue");
function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
__name(escapeRegExp, "escapeRegExp");
__name2(escapeRegExp, "escapeRegExp");
var TRAIT = "__liquidClass__";
var LiquidError = /* @__PURE__ */ __name(class extends Error {
  constructor(err, token) {
    super(typeof err === "string" ? err : err.message);
    this.context = "";
    if (typeof err !== "string")
      Object.defineProperty(this, "originalError", { value: err, enumerable: false });
    Object.defineProperty(this, "token", { value: token, enumerable: false });
    Object.defineProperty(this, TRAIT, { value: "LiquidError", enumerable: false });
  }
  update() {
    Object.defineProperty(this, "context", { value: mkContext(this.token), enumerable: false });
    this.message = mkMessage(this.message, this.token);
    this.stack = this.message + "\n" + this.context + "\n" + this.stack;
    if (this.originalError)
      this.stack += "\nFrom " + this.originalError.stack;
  }
  static is(obj) {
    return (obj === null || obj === void 0 ? void 0 : obj[TRAIT]) === "LiquidError";
  }
}, "LiquidError");
__name2(LiquidError, "LiquidError");
var TokenizationError = /* @__PURE__ */ __name(class extends LiquidError {
  constructor(message, token) {
    super(message, token);
    this.name = "TokenizationError";
    super.update();
  }
}, "TokenizationError");
__name2(TokenizationError, "TokenizationError");
var ParseError = /* @__PURE__ */ __name(class extends LiquidError {
  constructor(err, token) {
    super(err, token);
    this.name = "ParseError";
    this.message = err.message;
    super.update();
  }
}, "ParseError");
__name2(ParseError, "ParseError");
var RenderError = /* @__PURE__ */ __name(class extends LiquidError {
  constructor(err, tpl) {
    super(err, tpl.token);
    this.name = "RenderError";
    this.message = err.message;
    super.update();
  }
  static is(obj) {
    return obj.name === "RenderError";
  }
}, "RenderError");
__name2(RenderError, "RenderError");
var LiquidErrors = /* @__PURE__ */ __name(class extends LiquidError {
  constructor(errors) {
    super(errors[0], errors[0].token);
    this.errors = errors;
    this.name = "LiquidErrors";
    const s = errors.length > 1 ? "s" : "";
    this.message = `${errors.length} error${s} found`;
    super.update();
  }
  static is(obj) {
    return obj.name === "LiquidErrors";
  }
}, "LiquidErrors");
__name2(LiquidErrors, "LiquidErrors");
var UndefinedVariableError = /* @__PURE__ */ __name(class extends LiquidError {
  constructor(err, token) {
    super(err, token);
    this.name = "UndefinedVariableError";
    this.message = err.message;
    super.update();
  }
}, "UndefinedVariableError");
__name2(UndefinedVariableError, "UndefinedVariableError");
var InternalUndefinedVariableError = /* @__PURE__ */ __name(class extends Error {
  constructor(variableName) {
    super(`undefined variable: ${variableName}`);
    this.name = "InternalUndefinedVariableError";
    this.variableName = variableName;
  }
}, "InternalUndefinedVariableError");
__name2(InternalUndefinedVariableError, "InternalUndefinedVariableError");
var AssertionError = /* @__PURE__ */ __name(class extends Error {
  constructor(message) {
    super(message);
    this.name = "AssertionError";
    this.message = message + "";
  }
}, "AssertionError");
__name2(AssertionError, "AssertionError");
function mkContext(token) {
  const [line, col] = token.getPosition();
  const lines = token.input.split("\n");
  const begin = Math.max(line - 2, 1);
  const end = Math.min(line + 3, lines.length);
  const context = range(begin, end + 1).map((lineNumber) => {
    const rowIndicator = lineNumber === line ? ">> " : "   ";
    const num = padStart(String(lineNumber), String(end).length);
    let text = `${rowIndicator}${num}| `;
    const colIndicator = lineNumber === line ? "\n" + padStart("^", col + text.length) : "";
    text += lines[lineNumber - 1];
    text += colIndicator;
    return text;
  }).join("\n");
  return context;
}
__name(mkContext, "mkContext");
__name2(mkContext, "mkContext");
function mkMessage(msg, token) {
  if (token.file)
    msg += `, file:${token.file}`;
  const [line, col] = token.getPosition();
  msg += `, line:${line}, col:${col}`;
  return msg;
}
__name(mkMessage, "mkMessage");
__name2(mkMessage, "mkMessage");
var TYPES = [0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 4, 4, 4, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 2, 8, 0, 0, 0, 0, 8, 0, 0, 0, 64, 0, 65, 0, 0, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 0, 0, 2, 2, 2, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
var WORD = 1;
var BLANK = 4;
var QUOTE = 8;
var INLINE_BLANK = 16;
var NUMBER = 32;
var SIGN = 64;
var PUNCTUATION = 128;
function isWord(char) {
  const code = char.charCodeAt(0);
  return code >= 128 ? !TYPES[code] : !!(TYPES[code] & WORD);
}
__name(isWord, "isWord");
__name2(isWord, "isWord");
TYPES[160] = TYPES[5760] = TYPES[6158] = TYPES[8192] = TYPES[8193] = TYPES[8194] = TYPES[8195] = TYPES[8196] = TYPES[8197] = TYPES[8198] = TYPES[8199] = TYPES[8200] = TYPES[8201] = TYPES[8202] = TYPES[8232] = TYPES[8233] = TYPES[8239] = TYPES[8287] = TYPES[12288] = BLANK;
TYPES[8220] = TYPES[8221] = PUNCTUATION;
function assert(predicate, message) {
  if (!predicate) {
    const msg = typeof message === "function" ? message() : message || `expect ${predicate} to be true`;
    throw new AssertionError(msg);
  }
}
__name(assert, "assert");
__name2(assert, "assert");
function assertEmpty(predicate, message = `unexpected ${JSON.stringify(predicate)}`) {
  assert(!predicate, message);
}
__name(assertEmpty, "assertEmpty");
__name2(assertEmpty, "assertEmpty");
var NullDrop = /* @__PURE__ */ __name(class extends Drop {
  equals(value) {
    return isNil(toValue(value));
  }
  gt() {
    return false;
  }
  geq() {
    return false;
  }
  lt() {
    return false;
  }
  leq() {
    return false;
  }
  valueOf() {
    return null;
  }
}, "NullDrop");
__name2(NullDrop, "NullDrop");
var EmptyDrop = /* @__PURE__ */ __name(class extends Drop {
  equals(value) {
    if (value instanceof EmptyDrop)
      return false;
    value = toValue(value);
    if (isString(value) || isArray(value))
      return value.length === 0;
    if (isObject(value))
      return Object.keys(value).length === 0;
    return false;
  }
  gt() {
    return false;
  }
  geq() {
    return false;
  }
  lt() {
    return false;
  }
  leq() {
    return false;
  }
  valueOf() {
    return "";
  }
}, "EmptyDrop");
__name2(EmptyDrop, "EmptyDrop");
var BlankDrop = /* @__PURE__ */ __name(class extends EmptyDrop {
  equals(value) {
    if (value === false)
      return true;
    if (isNil(toValue(value)))
      return true;
    if (isString(value))
      return /^\s*$/.test(value);
    return super.equals(value);
  }
}, "BlankDrop");
__name2(BlankDrop, "BlankDrop");
var ForloopDrop = /* @__PURE__ */ __name(class extends Drop {
  constructor(length, collection, variable) {
    super();
    this.i = 0;
    this.length = length;
    this.name = `${variable}-${collection}`;
  }
  next() {
    this.i++;
  }
  index0() {
    return this.i;
  }
  index() {
    return this.i + 1;
  }
  first() {
    return this.i === 0;
  }
  last() {
    return this.i === this.length - 1;
  }
  rindex() {
    return this.length - this.i;
  }
  rindex0() {
    return this.length - this.i - 1;
  }
  valueOf() {
    return JSON.stringify(this);
  }
}, "ForloopDrop");
__name2(ForloopDrop, "ForloopDrop");
var BlockDrop = /* @__PURE__ */ __name(class extends Drop {
  constructor(superBlockRender = () => "") {
    super();
    this.superBlockRender = superBlockRender;
  }
  /**
   * Provide parent access in child block by
   * {{ block.super }}
   */
  super() {
    return this.superBlockRender();
  }
}, "BlockDrop");
__name2(BlockDrop, "BlockDrop");
function isComparable(arg) {
  return arg && isFunction(arg.equals) && isFunction(arg.gt) && isFunction(arg.geq) && isFunction(arg.lt) && isFunction(arg.leq);
}
__name(isComparable, "isComparable");
__name2(isComparable, "isComparable");
var nil = new NullDrop();
var literalValues = {
  "true": true,
  "false": false,
  "nil": nil,
  "null": nil,
  "empty": new EmptyDrop(),
  "blank": new BlankDrop()
};
function createTrie(input) {
  const trie = {};
  for (const [name, data] of Object.entries(input)) {
    let node = trie;
    for (let i = 0; i < name.length; i++) {
      const c = name[i];
      node[c] = node[c] || {};
      if (i === name.length - 1 && isWord(name[i])) {
        node[c].needBoundary = true;
      }
      node = node[c];
    }
    node.data = data;
    node.end = true;
  }
  return trie;
}
__name(createTrie, "createTrie");
__name2(createTrie, "createTrie");
var __assign = /* @__PURE__ */ __name2(function() {
  __assign = Object.assign || /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  }, "__assign2"), "__assign");
  return __assign.apply(this, arguments);
}, "__assign");
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve2) {
      resolve2(value);
    });
  }
  __name(adopt, "adopt");
  __name2(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve2, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    __name2(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    __name2(rejected, "rejected");
    function step(result) {
      result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    __name2(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
__name(__awaiter, "__awaiter");
__name2(__awaiter, "__awaiter");
function toPromise(val) {
  return __awaiter(this, void 0, void 0, function* () {
    if (!isIterator(val))
      return val;
    let value;
    let done = false;
    let next = "next";
    do {
      const state = val[next](value);
      done = state.done;
      value = state.value;
      next = "next";
      try {
        if (isIterator(value))
          value = toPromise(value);
        if (isPromise(value))
          value = yield value;
      } catch (err) {
        next = "throw";
        value = err;
      }
    } while (!done);
    return value;
  });
}
__name(toPromise, "toPromise");
__name2(toPromise, "toPromise");
function toValueSync(val) {
  if (!isIterator(val))
    return val;
  let value;
  let done = false;
  let next = "next";
  do {
    const state = val[next](value);
    done = state.done;
    value = state.value;
    next = "next";
    if (isIterator(value)) {
      try {
        value = toValueSync(value);
      } catch (err) {
        next = "throw";
        value = err;
      }
    }
  } while (!done);
  return value;
}
__name(toValueSync, "toValueSync");
__name2(toValueSync, "toValueSync");
var rFormat = /%([-_0^#:]+)?(\d+)?([EO])?(.)/;
function daysInMonth(d) {
  const feb = isLeapYear(d) ? 29 : 28;
  return [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}
__name(daysInMonth, "daysInMonth");
__name2(daysInMonth, "daysInMonth");
function getDayOfYear(d) {
  let num = 0;
  for (let i = 0; i < d.getMonth(); ++i) {
    num += daysInMonth(d)[i];
  }
  return num + d.getDate();
}
__name(getDayOfYear, "getDayOfYear");
__name2(getDayOfYear, "getDayOfYear");
function getWeekOfYear(d, startDay) {
  const now = getDayOfYear(d) + (startDay - d.getDay());
  const jan1 = new Date(d.getFullYear(), 0, 1);
  const then = 7 - jan1.getDay() + startDay;
  return String(Math.floor((now - then) / 7) + 1);
}
__name(getWeekOfYear, "getWeekOfYear");
__name2(getWeekOfYear, "getWeekOfYear");
function isLeapYear(d) {
  const year = d.getFullYear();
  return !!((year & 3) === 0 && (year % 100 || year % 400 === 0 && year));
}
__name(isLeapYear, "isLeapYear");
__name2(isLeapYear, "isLeapYear");
function ordinal(d) {
  const date2 = d.getDate();
  if ([11, 12, 13].includes(date2))
    return "th";
  switch (date2 % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
__name(ordinal, "ordinal");
__name2(ordinal, "ordinal");
function century(d) {
  return parseInt(d.getFullYear().toString().substring(0, 2), 10);
}
__name(century, "century");
__name2(century, "century");
var padWidths = {
  d: 2,
  e: 2,
  H: 2,
  I: 2,
  j: 3,
  k: 2,
  l: 2,
  L: 3,
  m: 2,
  M: 2,
  S: 2,
  U: 2,
  W: 2
};
var padSpaceChars = new Set("aAbBceklpP");
function getTimezoneOffset(d, opts) {
  const nOffset = Math.abs(d.getTimezoneOffset());
  const h = Math.floor(nOffset / 60);
  const m = nOffset % 60;
  return (d.getTimezoneOffset() > 0 ? "-" : "+") + padStart(h, 2, "0") + (opts.flags[":"] ? ":" : "") + padStart(m, 2, "0");
}
__name(getTimezoneOffset, "getTimezoneOffset");
__name2(getTimezoneOffset, "getTimezoneOffset");
var formatCodes = {
  a: (d) => d.getShortWeekdayName(),
  A: (d) => d.getLongWeekdayName(),
  b: (d) => d.getShortMonthName(),
  B: (d) => d.getLongMonthName(),
  c: (d) => d.toLocaleString(),
  C: (d) => century(d),
  d: (d) => d.getDate(),
  e: (d) => d.getDate(),
  H: (d) => d.getHours(),
  I: (d) => String(d.getHours() % 12 || 12),
  j: (d) => getDayOfYear(d),
  k: (d) => d.getHours(),
  l: (d) => String(d.getHours() % 12 || 12),
  L: (d) => d.getMilliseconds(),
  m: (d) => d.getMonth() + 1,
  M: (d) => d.getMinutes(),
  N: (d, opts) => {
    const width = Number(opts.width) || 9;
    const str = String(d.getMilliseconds()).slice(0, width);
    return padEnd(str, width, "0");
  },
  p: (d) => d.getHours() < 12 ? "AM" : "PM",
  P: (d) => d.getHours() < 12 ? "am" : "pm",
  q: (d) => ordinal(d),
  s: (d) => Math.round(d.getTime() / 1e3),
  S: (d) => d.getSeconds(),
  u: (d) => d.getDay() || 7,
  U: (d) => getWeekOfYear(d, 0),
  w: (d) => d.getDay(),
  W: (d) => getWeekOfYear(d, 1),
  x: (d) => d.toLocaleDateString(),
  X: (d) => d.toLocaleTimeString(),
  y: (d) => d.getFullYear().toString().slice(2, 4),
  Y: (d) => d.getFullYear(),
  z: getTimezoneOffset,
  Z: (d, opts) => d.getTimeZoneName() || getTimezoneOffset(d, opts),
  "t": () => "	",
  "n": () => "\n",
  "%": () => "%"
};
formatCodes.h = formatCodes.b;
function strftime(d, formatStr) {
  let output = "";
  let remaining = formatStr;
  let match2;
  while (match2 = rFormat.exec(remaining)) {
    output += remaining.slice(0, match2.index);
    remaining = remaining.slice(match2.index + match2[0].length);
    output += format(d, match2);
  }
  return output + remaining;
}
__name(strftime, "strftime");
__name2(strftime, "strftime");
function format(d, match2) {
  const [input, flagStr = "", width, modifier, conversion] = match2;
  const convert = formatCodes[conversion];
  if (!convert)
    return input;
  const flags2 = {};
  for (const flag of flagStr)
    flags2[flag] = true;
  let ret = String(convert(d, { flags: flags2, width, modifier }));
  let padChar = padSpaceChars.has(conversion) ? " " : "0";
  let padWidth = width || padWidths[conversion] || 0;
  if (flags2["^"])
    ret = ret.toUpperCase();
  else if (flags2["#"])
    ret = changeCase(ret);
  if (flags2["_"])
    padChar = " ";
  else if (flags2["0"])
    padChar = "0";
  if (flags2["-"])
    padWidth = 0;
  return padStart(ret, padWidth, padChar);
}
__name(format, "format");
__name2(format, "format");
function getDateTimeFormat() {
  return typeof Intl !== "undefined" ? Intl.DateTimeFormat : void 0;
}
__name(getDateTimeFormat, "getDateTimeFormat");
__name2(getDateTimeFormat, "getDateTimeFormat");
var OneMinute = 6e4;
var ISO8601_TIMEZONE_PATTERN = /([zZ]|([+-])(\d{2}):(\d{2}))$/;
var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var monthNamesShort = monthNames.map((name) => name.slice(0, 3));
var dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
var dayNamesShort = dayNames.map((name) => name.slice(0, 3));
var LiquidDate = /* @__PURE__ */ __name(class {
  constructor(init, locale, timezone) {
    this.locale = locale;
    this.DateTimeFormat = getDateTimeFormat();
    this.date = new Date(init);
    this.timezoneFixed = timezone !== void 0;
    if (timezone === void 0) {
      timezone = this.date.getTimezoneOffset();
    }
    this.timezoneOffset = isString(timezone) ? LiquidDate.getTimezoneOffset(timezone, this.date) : timezone;
    this.timezoneName = isString(timezone) ? timezone : "";
    const diff = (this.date.getTimezoneOffset() - this.timezoneOffset) * OneMinute;
    const time = this.date.getTime() + diff;
    this.displayDate = new Date(time);
  }
  getTime() {
    return this.displayDate.getTime();
  }
  getMilliseconds() {
    return this.displayDate.getMilliseconds();
  }
  getSeconds() {
    return this.displayDate.getSeconds();
  }
  getMinutes() {
    return this.displayDate.getMinutes();
  }
  getHours() {
    return this.displayDate.getHours();
  }
  getDay() {
    return this.displayDate.getDay();
  }
  getDate() {
    return this.displayDate.getDate();
  }
  getMonth() {
    return this.displayDate.getMonth();
  }
  getFullYear() {
    return this.displayDate.getFullYear();
  }
  toLocaleString(locale, init) {
    if (init === null || init === void 0 ? void 0 : init.timeZone) {
      return this.date.toLocaleString(locale, init);
    }
    return this.displayDate.toLocaleString(locale, init);
  }
  toLocaleTimeString(locale) {
    return this.displayDate.toLocaleTimeString(locale);
  }
  toLocaleDateString(locale) {
    return this.displayDate.toLocaleDateString(locale);
  }
  getTimezoneOffset() {
    return this.timezoneOffset;
  }
  getTimeZoneName() {
    if (this.timezoneFixed)
      return this.timezoneName;
    if (!this.DateTimeFormat)
      return;
    return this.DateTimeFormat().resolvedOptions().timeZone;
  }
  getLongMonthName() {
    var _a;
    return (_a = this.format({ month: "long" })) !== null && _a !== void 0 ? _a : monthNames[this.getMonth()];
  }
  getShortMonthName() {
    var _a;
    return (_a = this.format({ month: "short" })) !== null && _a !== void 0 ? _a : monthNamesShort[this.getMonth()];
  }
  getLongWeekdayName() {
    var _a;
    return (_a = this.format({ weekday: "long" })) !== null && _a !== void 0 ? _a : dayNames[this.displayDate.getDay()];
  }
  getShortWeekdayName() {
    var _a;
    return (_a = this.format({ weekday: "short" })) !== null && _a !== void 0 ? _a : dayNamesShort[this.displayDate.getDay()];
  }
  valid() {
    return !isNaN(this.getTime());
  }
  format(options) {
    return this.DateTimeFormat && this.DateTimeFormat(this.locale, options).format(this.displayDate);
  }
  /**
   * Create a Date object fixed to it's declared Timezone. Both
   * - 2021-08-06T02:29:00.000Z and
   * - 2021-08-06T02:29:00.000+08:00
   * will always be displayed as
   * - 2021-08-06 02:29:00
   * regardless timezoneOffset in JavaScript realm
   *
   * The implementation hack:
   * Instead of calling `.getMonth()`/`.getUTCMonth()` respect to `preserveTimezones`,
   * we create a different Date to trick strftime, it's both simpler and more performant.
   * Given that a template is expected to be parsed fewer times than rendered.
   */
  static createDateFixedToTimezone(dateString, locale) {
    const m = dateString.match(ISO8601_TIMEZONE_PATTERN);
    if (m && m[1] === "Z") {
      return new LiquidDate(+new Date(dateString), locale, 0);
    }
    if (m && m[2] && m[3] && m[4]) {
      const [, , sign, hours, minutes] = m;
      const offset2 = (sign === "+" ? -1 : 1) * (parseInt(hours, 10) * 60 + parseInt(minutes, 10));
      return new LiquidDate(+new Date(dateString), locale, offset2);
    }
    return new LiquidDate(dateString, locale);
  }
  static getTimezoneOffset(timezoneName, date2) {
    const localDateString = date2.toLocaleString("en-US", { timeZone: timezoneName });
    const utcDateString = date2.toLocaleString("en-US", { timeZone: "UTC" });
    const localDate = new Date(localDateString);
    const utcDate = new Date(utcDateString);
    return (+utcDate - +localDate) / (60 * 1e3);
  }
}, "LiquidDate");
__name2(LiquidDate, "LiquidDate");
var Limiter = /* @__PURE__ */ __name(class {
  constructor(resource, limit2) {
    this.base = 0;
    this.message = `${resource} limit exceeded`;
    this.limit = limit2;
  }
  use(count) {
    count = toNumber(count);
    assert(this.base + count <= this.limit, this.message);
    this.base += count;
  }
  check(count) {
    count = toNumber(count);
    assert(count <= this.limit, this.message);
  }
}, "Limiter");
__name2(Limiter, "Limiter");
var DelimitedToken = /* @__PURE__ */ __name(class extends Token {
  constructor(kind, [contentBegin, contentEnd], input, begin, end, trimLeft2, trimRight2, file) {
    super(kind, input, begin, end, file);
    this.trimLeft = false;
    this.trimRight = false;
    const tl = input[contentBegin] === "-";
    const tr = input[contentEnd - 1] === "-";
    let l = tl ? contentBegin + 1 : contentBegin;
    let r = tr ? contentEnd - 1 : contentEnd;
    while (l < r && TYPES[input.charCodeAt(l)] & BLANK)
      l++;
    while (r > l && TYPES[input.charCodeAt(r - 1)] & BLANK)
      r--;
    this.contentRange = [l, r];
    this.trimLeft = tl || trimLeft2;
    this.trimRight = tr || trimRight2;
  }
  get content() {
    return this.input.slice(this.contentRange[0], this.contentRange[1]);
  }
}, "DelimitedToken");
__name2(DelimitedToken, "DelimitedToken");
var TagToken = /* @__PURE__ */ __name(class extends DelimitedToken {
  constructor(input, begin, end, options, file) {
    const { trimTagLeft, trimTagRight, tagDelimiterLeft, tagDelimiterRight } = options;
    const [valueBegin, valueEnd] = [begin + tagDelimiterLeft.length, end - tagDelimiterRight.length];
    super(TokenKind.Tag, [valueBegin, valueEnd], input, begin, end, trimTagLeft, trimTagRight, file);
    this.tokenizer = new Tokenizer(input, options.operators, file, this.contentRange);
    this.name = this.tokenizer.readTagName();
    this.tokenizer.assert(this.name, `illegal tag syntax, tag name expected`);
    this.tokenizer.skipBlank();
  }
  get args() {
    return this.tokenizer.input.slice(this.tokenizer.p, this.contentRange[1]);
  }
}, "TagToken");
__name2(TagToken, "TagToken");
var OutputToken = /* @__PURE__ */ __name(class extends DelimitedToken {
  constructor(input, begin, end, options, file) {
    const { trimOutputLeft, trimOutputRight, outputDelimiterLeft, outputDelimiterRight } = options;
    const valueRange = [begin + outputDelimiterLeft.length, end - outputDelimiterRight.length];
    super(TokenKind.Output, valueRange, input, begin, end, trimOutputLeft, trimOutputRight, file);
  }
}, "OutputToken");
__name2(OutputToken, "OutputToken");
var HTMLToken = /* @__PURE__ */ __name(class extends Token {
  constructor(input, begin, end, file) {
    super(TokenKind.HTML, input, begin, end, file);
    this.input = input;
    this.begin = begin;
    this.end = end;
    this.file = file;
    this.trimLeft = 0;
    this.trimRight = 0;
  }
  getContent() {
    return this.input.slice(this.begin + this.trimLeft, this.end - this.trimRight);
  }
}, "HTMLToken");
__name2(HTMLToken, "HTMLToken");
var NumberToken = /* @__PURE__ */ __name(class extends Token {
  constructor(input, begin, end, file) {
    super(TokenKind.Number, input, begin, end, file);
    this.input = input;
    this.begin = begin;
    this.end = end;
    this.file = file;
    this.content = Number(this.getText());
  }
}, "NumberToken");
__name2(NumberToken, "NumberToken");
var IdentifierToken = /* @__PURE__ */ __name(class extends Token {
  constructor(input, begin, end, file) {
    super(TokenKind.Word, input, begin, end, file);
    this.input = input;
    this.begin = begin;
    this.end = end;
    this.file = file;
    this.content = this.getText();
  }
}, "IdentifierToken");
__name2(IdentifierToken, "IdentifierToken");
var LiteralToken = /* @__PURE__ */ __name(class extends Token {
  constructor(input, begin, end, file) {
    super(TokenKind.Literal, input, begin, end, file);
    this.input = input;
    this.begin = begin;
    this.end = end;
    this.file = file;
    this.literal = this.getText();
    this.content = literalValues[this.literal];
  }
}, "LiteralToken");
__name2(LiteralToken, "LiteralToken");
var operatorPrecedences = {
  "==": 2,
  "!=": 2,
  ">": 2,
  "<": 2,
  ">=": 2,
  "<=": 2,
  "contains": 2,
  "not": 1,
  "and": 0,
  "or": 0
};
var operatorTypes = {
  "==": 0,
  "!=": 0,
  ">": 0,
  "<": 0,
  ">=": 0,
  "<=": 0,
  "contains": 0,
  "not": 1,
  "and": 0,
  "or": 0
  /* OperatorType.Binary */
};
var OperatorToken = /* @__PURE__ */ __name(class extends Token {
  constructor(input, begin, end, file) {
    super(TokenKind.Operator, input, begin, end, file);
    this.input = input;
    this.begin = begin;
    this.end = end;
    this.file = file;
    this.operator = this.getText();
  }
  getPrecedence() {
    const key = this.getText();
    return key in operatorPrecedences ? operatorPrecedences[key] : 1;
  }
}, "OperatorToken");
__name2(OperatorToken, "OperatorToken");
var PropertyAccessToken = /* @__PURE__ */ __name(class extends Token {
  constructor(variable, props, input, begin, end, file) {
    super(TokenKind.PropertyAccess, input, begin, end, file);
    this.variable = variable;
    this.props = props;
  }
}, "PropertyAccessToken");
__name2(PropertyAccessToken, "PropertyAccessToken");
var FilterToken = /* @__PURE__ */ __name(class extends Token {
  constructor(name, args, input, begin, end, file) {
    super(TokenKind.Filter, input, begin, end, file);
    this.name = name;
    this.args = args;
  }
}, "FilterToken");
__name2(FilterToken, "FilterToken");
var HashToken = /* @__PURE__ */ __name(class extends Token {
  constructor(input, begin, end, name, value, file) {
    super(TokenKind.Hash, input, begin, end, file);
    this.input = input;
    this.begin = begin;
    this.end = end;
    this.name = name;
    this.value = value;
    this.file = file;
  }
}, "HashToken");
__name2(HashToken, "HashToken");
var rHex = /[\da-fA-F]/;
var rOct = /[0-7]/;
var escapeChar = {
  b: "\b",
  f: "\f",
  n: "\n",
  r: "\r",
  t: "	",
  v: "\v"
};
function hexVal(c) {
  const code = c.charCodeAt(0);
  if (code >= 97)
    return code - 87;
  if (code >= 65)
    return code - 55;
  return code - 48;
}
__name(hexVal, "hexVal");
__name2(hexVal, "hexVal");
function parseStringLiteral(str) {
  let ret = "";
  for (let i = 1; i < str.length - 1; i++) {
    if (str[i] !== "\\") {
      ret += str[i];
      continue;
    }
    if (escapeChar[str[i + 1]] !== void 0) {
      ret += escapeChar[str[++i]];
    } else if (str[i + 1] === "u") {
      let val = 0;
      let j = i + 2;
      while (j <= i + 5 && rHex.test(str[j])) {
        val = val * 16 + hexVal(str[j++]);
      }
      i = j - 1;
      ret += String.fromCharCode(val);
    } else if (!rOct.test(str[i + 1])) {
      ret += str[++i];
    } else {
      let j = i + 1;
      let val = 0;
      while (j <= i + 3 && rOct.test(str[j])) {
        val = val * 8 + hexVal(str[j++]);
      }
      i = j - 1;
      ret += String.fromCharCode(val);
    }
  }
  return ret;
}
__name(parseStringLiteral, "parseStringLiteral");
__name2(parseStringLiteral, "parseStringLiteral");
var QuotedToken = /* @__PURE__ */ __name(class extends Token {
  constructor(input, begin, end, file) {
    super(TokenKind.Quoted, input, begin, end, file);
    this.input = input;
    this.begin = begin;
    this.end = end;
    this.file = file;
    this.content = parseStringLiteral(this.getText());
  }
}, "QuotedToken");
__name2(QuotedToken, "QuotedToken");
var RangeToken = /* @__PURE__ */ __name(class extends Token {
  constructor(input, begin, end, lhs, rhs, file) {
    super(TokenKind.Range, input, begin, end, file);
    this.input = input;
    this.begin = begin;
    this.end = end;
    this.lhs = lhs;
    this.rhs = rhs;
    this.file = file;
  }
}, "RangeToken");
__name2(RangeToken, "RangeToken");
var LiquidTagToken = /* @__PURE__ */ __name(class extends DelimitedToken {
  constructor(input, begin, end, options, file) {
    super(TokenKind.Tag, [begin, end], input, begin, end, false, false, file);
    this.tokenizer = new Tokenizer(input, options.operators, file, this.contentRange);
    this.name = this.tokenizer.readTagName();
    this.tokenizer.assert(this.name, "illegal liquid tag syntax");
    this.tokenizer.skipBlank();
    this.args = this.tokenizer.remaining();
  }
}, "LiquidTagToken");
__name2(LiquidTagToken, "LiquidTagToken");
var FilteredValueToken = /* @__PURE__ */ __name(class extends Token {
  constructor(initial, filters2, input, begin, end, file) {
    super(TokenKind.FilteredValue, input, begin, end, file);
    this.initial = initial;
    this.filters = filters2;
    this.input = input;
    this.begin = begin;
    this.end = end;
    this.file = file;
  }
}, "FilteredValueToken");
__name2(FilteredValueToken, "FilteredValueToken");
var polyfill = {
  now: () => Date.now()
};
function getPerformance() {
  return typeof global === "object" && global.performance || typeof window === "object" && window.performance || polyfill;
}
__name(getPerformance, "getPerformance");
__name2(getPerformance, "getPerformance");
var SimpleEmitter = /* @__PURE__ */ __name(class {
  constructor() {
    this.buffer = "";
  }
  write(html) {
    this.buffer += stringify(html);
  }
}, "SimpleEmitter");
__name2(SimpleEmitter, "SimpleEmitter");
var StreamedEmitter = /* @__PURE__ */ __name(class {
  constructor() {
    this.buffer = "";
    this.stream = null;
    throw new Error("streaming not supported in browser");
  }
}, "StreamedEmitter");
__name2(StreamedEmitter, "StreamedEmitter");
var KeepingTypeEmitter = /* @__PURE__ */ __name(class {
  constructor() {
    this.buffer = "";
  }
  write(html) {
    html = toValue(html);
    if (typeof html !== "string" && this.buffer === "") {
      this.buffer = html;
    } else {
      this.buffer = stringify(this.buffer) + stringify(html);
    }
  }
}, "KeepingTypeEmitter");
__name2(KeepingTypeEmitter, "KeepingTypeEmitter");
var Render = /* @__PURE__ */ __name(class {
  renderTemplatesToNodeStream(templates, ctx) {
    const emitter = new StreamedEmitter();
    Promise.resolve().then(() => toPromise(this.renderTemplates(templates, ctx, emitter))).then(() => emitter.end(), (err) => emitter.error(err));
    return emitter.stream;
  }
  *renderTemplates(templates, ctx, emitter) {
    if (!emitter) {
      emitter = ctx.opts.keepOutputType ? new KeepingTypeEmitter() : new SimpleEmitter();
    }
    const errors = [];
    for (const tpl of templates) {
      ctx.renderLimit.check(getPerformance().now());
      try {
        const html = yield tpl.render(ctx, emitter);
        html && emitter.write(html);
        if (emitter["break"] || emitter["continue"])
          break;
      } catch (e) {
        const err = LiquidError.is(e) ? e : new RenderError(e, tpl);
        if (ctx.opts.catchAllErrors)
          errors.push(err);
        else
          throw err;
      }
    }
    if (errors.length) {
      throw new LiquidErrors(errors);
    }
    return emitter.buffer;
  }
}, "Render");
__name2(Render, "Render");
var Expression = /* @__PURE__ */ __name(class {
  constructor(tokens) {
    this.postfix = [...toPostfix(tokens)];
  }
  *evaluate(ctx, lenient) {
    assert(ctx, "unable to evaluate: context not defined");
    const operands = [];
    for (const token of this.postfix) {
      if (isOperatorToken(token)) {
        const r = operands.pop();
        let result;
        if (operatorTypes[token.operator] === 1) {
          result = yield ctx.opts.operators[token.operator](r, ctx);
        } else {
          const l = operands.pop();
          result = yield ctx.opts.operators[token.operator](l, r, ctx);
        }
        operands.push(result);
      } else {
        operands.push(yield evalToken(token, ctx, lenient));
      }
    }
    return operands[0];
  }
  valid() {
    return !!this.postfix.length;
  }
}, "Expression");
__name2(Expression, "Expression");
function* evalToken(token, ctx, lenient = false) {
  if (!token)
    return;
  if ("content" in token)
    return token.content;
  if (isPropertyAccessToken(token))
    return yield evalPropertyAccessToken(token, ctx, lenient);
  if (isRangeToken(token))
    return yield evalRangeToken(token, ctx);
}
__name(evalToken, "evalToken");
__name2(evalToken, "evalToken");
function* evalPropertyAccessToken(token, ctx, lenient) {
  const props = [];
  for (const prop of token.props) {
    props.push(yield evalToken(prop, ctx, false));
  }
  try {
    if (token.variable) {
      const variable = yield evalToken(token.variable, ctx, lenient);
      return yield ctx._getFromScope(variable, props);
    } else {
      return yield ctx._get(props);
    }
  } catch (e) {
    if (lenient && e.name === "InternalUndefinedVariableError")
      return null;
    throw new UndefinedVariableError(e, token);
  }
}
__name(evalPropertyAccessToken, "evalPropertyAccessToken");
__name2(evalPropertyAccessToken, "evalPropertyAccessToken");
function evalQuotedToken(token) {
  return token.content;
}
__name(evalQuotedToken, "evalQuotedToken");
__name2(evalQuotedToken, "evalQuotedToken");
function* evalRangeToken(token, ctx) {
  const low = yield evalToken(token.lhs, ctx);
  const high = yield evalToken(token.rhs, ctx);
  return range(+low, +high + 1);
}
__name(evalRangeToken, "evalRangeToken");
__name2(evalRangeToken, "evalRangeToken");
function* toPostfix(tokens) {
  const ops = [];
  for (const token of tokens) {
    if (isOperatorToken(token)) {
      while (ops.length && ops[ops.length - 1].getPrecedence() > token.getPrecedence()) {
        yield ops.pop();
      }
      ops.push(token);
    } else
      yield token;
  }
  while (ops.length) {
    yield ops.pop();
  }
}
__name(toPostfix, "toPostfix");
__name2(toPostfix, "toPostfix");
function isTruthy(val, ctx) {
  return !isFalsy(val, ctx);
}
__name(isTruthy, "isTruthy");
__name2(isTruthy, "isTruthy");
function isFalsy(val, ctx) {
  val = toValue(val);
  if (ctx.opts.jsTruthy) {
    return !val;
  } else {
    return val === false || void 0 === val || val === null;
  }
}
__name(isFalsy, "isFalsy");
__name2(isFalsy, "isFalsy");
var defaultOperators = {
  "==": equals,
  "!=": (l, r) => !equals(l, r),
  ">": (l, r) => {
    if (isComparable(l))
      return l.gt(r);
    if (isComparable(r))
      return r.lt(l);
    return toValue(l) > toValue(r);
  },
  "<": (l, r) => {
    if (isComparable(l))
      return l.lt(r);
    if (isComparable(r))
      return r.gt(l);
    return toValue(l) < toValue(r);
  },
  ">=": (l, r) => {
    if (isComparable(l))
      return l.geq(r);
    if (isComparable(r))
      return r.leq(l);
    return toValue(l) >= toValue(r);
  },
  "<=": (l, r) => {
    if (isComparable(l))
      return l.leq(r);
    if (isComparable(r))
      return r.geq(l);
    return toValue(l) <= toValue(r);
  },
  "contains": (l, r) => {
    l = toValue(l);
    if (isArray(l))
      return l.some((i) => equals(i, r));
    if (isFunction(l === null || l === void 0 ? void 0 : l.indexOf))
      return l.indexOf(toValue(r)) > -1;
    return false;
  },
  "not": (v, ctx) => isFalsy(toValue(v), ctx),
  "and": (l, r, ctx) => isTruthy(toValue(l), ctx) && isTruthy(toValue(r), ctx),
  "or": (l, r, ctx) => isTruthy(toValue(l), ctx) || isTruthy(toValue(r), ctx)
};
function equals(lhs, rhs) {
  if (isComparable(lhs))
    return lhs.equals(rhs);
  if (isComparable(rhs))
    return rhs.equals(lhs);
  lhs = toValue(lhs);
  rhs = toValue(rhs);
  if (isArray(lhs)) {
    return isArray(rhs) && arrayEquals(lhs, rhs);
  }
  return lhs === rhs;
}
__name(equals, "equals");
__name2(equals, "equals");
function arrayEquals(lhs, rhs) {
  if (lhs.length !== rhs.length)
    return false;
  return !lhs.some((value, i) => !equals(value, rhs[i]));
}
__name(arrayEquals, "arrayEquals");
__name2(arrayEquals, "arrayEquals");
var Node = /* @__PURE__ */ __name(class {
  constructor(key, value, next, prev) {
    this.key = key;
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}, "Node");
__name2(Node, "Node");
var LRU = /* @__PURE__ */ __name(class {
  constructor(limit2, size2 = 0) {
    this.limit = limit2;
    this.size = size2;
    this.cache = {};
    this.head = new Node("HEAD", null, null, null);
    this.tail = new Node("TAIL", null, null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  write(key, value) {
    if (this.cache[key]) {
      this.cache[key].value = value;
    } else {
      const node = new Node(key, value, this.head.next, this.head);
      this.head.next.prev = node;
      this.head.next = node;
      this.cache[key] = node;
      this.size++;
      this.ensureLimit();
    }
  }
  read(key) {
    if (!this.cache[key])
      return;
    const { value } = this.cache[key];
    this.remove(key);
    this.write(key, value);
    return value;
  }
  remove(key) {
    const node = this.cache[key];
    node.prev.next = node.next;
    node.next.prev = node.prev;
    delete this.cache[key];
    this.size--;
  }
  clear() {
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
    this.cache = {};
  }
  ensureLimit() {
    if (this.size > this.limit)
      this.remove(this.tail.prev.key);
  }
}, "LRU");
__name2(LRU, "LRU");
function domResolve(root, path) {
  const base = document.createElement("base");
  base.href = root;
  const head = document.getElementsByTagName("head")[0];
  head.insertBefore(base, head.firstChild);
  const a = document.createElement("a");
  a.href = path;
  const resolved = a.href;
  head.removeChild(base);
  return resolved;
}
__name(domResolve, "domResolve");
__name2(domResolve, "domResolve");
function resolve(root, filepath, ext) {
  if (root.length && last(root) !== "/")
    root += "/";
  const url = domResolve(root, filepath);
  return url.replace(/^(\w+:\/\/[^/]+)(\/[^?]+)/, (str, origin, path) => {
    const last2 = path.split("/").pop();
    if (/\.\w+$/.test(last2))
      return str;
    return origin + path + ext;
  });
}
__name(resolve, "resolve");
__name2(resolve, "resolve");
function readFile(url) {
  return __awaiter(this, void 0, void 0, function* () {
    return new Promise((resolve2, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve2(xhr.responseText);
        } else {
          reject(new Error(xhr.statusText));
        }
      };
      xhr.onerror = () => {
        reject(new Error("An error occurred whilst receiving the response."));
      };
      xhr.open("GET", url);
      xhr.send();
    });
  });
}
__name(readFile, "readFile");
__name2(readFile, "readFile");
function readFileSync(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.send();
  if (xhr.status < 200 || xhr.status >= 300) {
    throw new Error(xhr.statusText);
  }
  return xhr.responseText;
}
__name(readFileSync, "readFileSync");
__name2(readFileSync, "readFileSync");
function exists(filepath) {
  return __awaiter(this, void 0, void 0, function* () {
    return true;
  });
}
__name(exists, "exists");
__name2(exists, "exists");
function existsSync(filepath) {
  return true;
}
__name(existsSync, "existsSync");
__name2(existsSync, "existsSync");
function dirname(filepath) {
  return domResolve(filepath, ".");
}
__name(dirname, "dirname");
__name2(dirname, "dirname");
var sep = "/";
var fs = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  resolve,
  readFile,
  readFileSync,
  exists,
  existsSync,
  dirname,
  sep
});
function defaultFilter(value, defaultValue, ...args) {
  value = toValue(value);
  if (isArray(value) || isString(value))
    return value.length ? value : defaultValue;
  if (value === false && new Map(args).get("allow_false"))
    return false;
  return isFalsy(value, this.context) ? defaultValue : value;
}
__name(defaultFilter, "defaultFilter");
__name2(defaultFilter, "defaultFilter");
function json(value, space = 0) {
  return JSON.stringify(value, null, space);
}
__name(json, "json");
__name2(json, "json");
function inspect(value, space = 0) {
  const ancestors = [];
  return JSON.stringify(value, function(_key, value2) {
    if (typeof value2 !== "object" || value2 === null)
      return value2;
    while (ancestors.length > 0 && ancestors[ancestors.length - 1] !== this)
      ancestors.pop();
    if (ancestors.includes(value2))
      return "[Circular]";
    ancestors.push(value2);
    return value2;
  }, space);
}
__name(inspect, "inspect");
__name2(inspect, "inspect");
function to_integer(value) {
  return Number(value);
}
__name(to_integer, "to_integer");
__name2(to_integer, "to_integer");
var raw = {
  raw: true,
  handler: identify
};
var misc = {
  default: defaultFilter,
  raw,
  jsonify: json,
  to_integer,
  json,
  inspect
};
var escapeMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&#34;",
  "'": "&#39;"
};
var unescapeMap = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&#34;": '"',
  "&#39;": "'"
};
function escape(str) {
  str = stringify(str);
  this.context.memoryLimit.use(str.length);
  return str.replace(/&|<|>|"|'/g, (m) => escapeMap[m]);
}
__name(escape, "escape");
__name2(escape, "escape");
function xml_escape(str) {
  return escape.call(this, str);
}
__name(xml_escape, "xml_escape");
__name2(xml_escape, "xml_escape");
function unescape(str) {
  str = stringify(str);
  this.context.memoryLimit.use(str.length);
  return str.replace(/&(amp|lt|gt|#34|#39);/g, (m) => unescapeMap[m]);
}
__name(unescape, "unescape");
__name2(unescape, "unescape");
function escape_once(str) {
  return escape.call(this, unescape.call(this, str));
}
__name(escape_once, "escape_once");
__name2(escape_once, "escape_once");
function newline_to_br(v) {
  const str = stringify(v);
  this.context.memoryLimit.use(str.length);
  return str.replace(/\r?\n/gm, "<br />\n");
}
__name(newline_to_br, "newline_to_br");
__name2(newline_to_br, "newline_to_br");
function strip_html(v) {
  const str = stringify(v);
  this.context.memoryLimit.use(str.length);
  return str.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<.*?>|<!--[\s\S]*?-->/g, "");
}
__name(strip_html, "strip_html");
__name2(strip_html, "strip_html");
var htmlFilters = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  escape,
  xml_escape,
  escape_once,
  newline_to_br,
  strip_html
});
var MapFS = /* @__PURE__ */ __name(class {
  constructor(mapping) {
    this.mapping = mapping;
    this.sep = "/";
  }
  exists(filepath) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.existsSync(filepath);
    });
  }
  existsSync(filepath) {
    return !isNil(this.mapping[filepath]);
  }
  readFile(filepath) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.readFileSync(filepath);
    });
  }
  readFileSync(filepath) {
    const content = this.mapping[filepath];
    if (isNil(content))
      throw new Error(`ENOENT: ${filepath}`);
    return content;
  }
  dirname(filepath) {
    const segments = filepath.split(this.sep);
    segments.pop();
    return segments.join(this.sep);
  }
  resolve(dir, file, ext) {
    file += ext;
    if (dir === ".")
      return file;
    const segments = dir.split(/\/+/);
    for (const segment of file.split(this.sep)) {
      if (segment === "." || segment === "")
        continue;
      else if (segment === "..") {
        if (segments.length > 1 || segments[0] !== "")
          segments.pop();
      } else
        segments.push(segment);
    }
    return segments.join(this.sep);
  }
}, "MapFS");
__name2(MapFS, "MapFS");
var defaultOptions = {
  root: ["."],
  layouts: ["."],
  partials: ["."],
  relativeReference: true,
  jekyllInclude: false,
  keyValueSeparator: ":",
  cache: void 0,
  extname: "",
  fs,
  dynamicPartials: true,
  jsTruthy: false,
  dateFormat: "%A, %B %-e, %Y at %-l:%M %P %z",
  locale: "",
  trimTagRight: false,
  trimTagLeft: false,
  trimOutputRight: false,
  trimOutputLeft: false,
  greedy: true,
  tagDelimiterLeft: "{%",
  tagDelimiterRight: "%}",
  outputDelimiterLeft: "{{",
  outputDelimiterRight: "}}",
  preserveTimezones: false,
  strictFilters: false,
  strictVariables: false,
  ownPropertyOnly: true,
  lenientIf: false,
  globals: {},
  keepOutputType: false,
  operators: defaultOperators,
  memoryLimit: Infinity,
  parseLimit: Infinity,
  renderLimit: Infinity
};
function normalize(options) {
  var _a, _b;
  if (options.hasOwnProperty("root")) {
    if (!options.hasOwnProperty("partials"))
      options.partials = options.root;
    if (!options.hasOwnProperty("layouts"))
      options.layouts = options.root;
  }
  if (options.hasOwnProperty("cache")) {
    let cache;
    if (typeof options.cache === "number")
      cache = options.cache > 0 ? new LRU(options.cache) : void 0;
    else if (typeof options.cache === "object")
      cache = options.cache;
    else
      cache = options.cache ? new LRU(1024) : void 0;
    options.cache = cache;
  }
  options = Object.assign(Object.assign(Object.assign({}, defaultOptions), options.jekyllInclude ? { dynamicPartials: false } : {}), options);
  if ((!options.fs.dirname || !options.fs.sep) && options.relativeReference) {
    console.warn("[LiquidJS] `fs.dirname` and `fs.sep` are required for relativeReference, set relativeReference to `false` to suppress this warning");
    options.relativeReference = false;
  }
  options.root = normalizeDirectoryList(options.root);
  options.partials = normalizeDirectoryList(options.partials);
  options.layouts = normalizeDirectoryList(options.layouts);
  options.outputEscape = options.outputEscape && getOutputEscapeFunction(options.outputEscape);
  if (!options.locale) {
    options.locale = (_b = (_a = getDateTimeFormat()) === null || _a === void 0 ? void 0 : _a().resolvedOptions().locale) !== null && _b !== void 0 ? _b : "en-US";
  }
  if (options.templates) {
    options.fs = new MapFS(options.templates);
    options.relativeReference = true;
    options.root = options.partials = options.layouts = ".";
  }
  return options;
}
__name(normalize, "normalize");
__name2(normalize, "normalize");
function getOutputEscapeFunction(nameOrFunction) {
  if (nameOrFunction === "escape")
    return escape;
  if (nameOrFunction === "json")
    return misc.json;
  assert(isFunction(nameOrFunction), "`outputEscape` need to be of type string or function");
  return nameOrFunction;
}
__name(getOutputEscapeFunction, "getOutputEscapeFunction");
__name2(getOutputEscapeFunction, "getOutputEscapeFunction");
function normalizeDirectoryList(value) {
  let list = [];
  if (isArray(value))
    list = value;
  if (isString(value))
    list = [value];
  return list;
}
__name(normalizeDirectoryList, "normalizeDirectoryList");
__name2(normalizeDirectoryList, "normalizeDirectoryList");
function whiteSpaceCtrl(tokens, options) {
  let inRaw = false;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (!isDelimitedToken(token))
      continue;
    if (!inRaw && token.trimLeft) {
      trimLeft(tokens[i - 1], options.greedy);
    }
    if (isTagToken(token)) {
      if (token.name === "raw")
        inRaw = true;
      else if (token.name === "endraw")
        inRaw = false;
    }
    if (!inRaw && token.trimRight) {
      trimRight(tokens[i + 1], options.greedy);
    }
  }
}
__name(whiteSpaceCtrl, "whiteSpaceCtrl");
__name2(whiteSpaceCtrl, "whiteSpaceCtrl");
function trimLeft(token, greedy) {
  if (!token || !isHTMLToken(token))
    return;
  const mask = greedy ? BLANK : INLINE_BLANK;
  while (TYPES[token.input.charCodeAt(token.end - 1 - token.trimRight)] & mask)
    token.trimRight++;
}
__name(trimLeft, "trimLeft");
__name2(trimLeft, "trimLeft");
function trimRight(token, greedy) {
  if (!token || !isHTMLToken(token))
    return;
  const mask = greedy ? BLANK : INLINE_BLANK;
  while (TYPES[token.input.charCodeAt(token.begin + token.trimLeft)] & mask)
    token.trimLeft++;
  if (token.input.charAt(token.begin + token.trimLeft) === "\n")
    token.trimLeft++;
}
__name(trimRight, "trimRight");
__name2(trimRight, "trimRight");
var Tokenizer = /* @__PURE__ */ __name(class {
  constructor(input, operators = defaultOptions.operators, file, range2) {
    this.input = input;
    this.file = file;
    this.rawBeginAt = -1;
    this.p = range2 ? range2[0] : 0;
    this.N = range2 ? range2[1] : input.length;
    this.opTrie = createTrie(operators);
    this.literalTrie = createTrie(literalValues);
  }
  readExpression() {
    return new Expression(this.readExpressionTokens());
  }
  *readExpressionTokens() {
    while (this.p < this.N) {
      const operator = this.readOperator();
      if (operator) {
        yield operator;
        continue;
      }
      const operand = this.readValue();
      if (operand) {
        yield operand;
        continue;
      }
      return;
    }
  }
  readOperator() {
    this.skipBlank();
    const end = this.matchTrie(this.opTrie);
    if (end === -1)
      return;
    return new OperatorToken(this.input, this.p, this.p = end, this.file);
  }
  matchTrie(trie) {
    let node = trie;
    let i = this.p;
    let info;
    while (node[this.input[i]] && i < this.N) {
      node = node[this.input[i++]];
      if (node["end"])
        info = node;
    }
    if (!info)
      return -1;
    if (info["needBoundary"] && isWord(this.peek(i - this.p)))
      return -1;
    return i;
  }
  readFilteredValue() {
    const begin = this.p;
    const initial = this.readExpression();
    this.assert(initial.valid(), `invalid value expression: ${this.snapshot()}`);
    const filters2 = this.readFilters();
    return new FilteredValueToken(initial, filters2, this.input, begin, this.p, this.file);
  }
  readFilters() {
    const filters2 = [];
    while (true) {
      const filter = this.readFilter();
      if (!filter)
        return filters2;
      filters2.push(filter);
    }
  }
  readFilter() {
    this.skipBlank();
    if (this.end())
      return null;
    this.assert(this.peek() === "|", `expected "|" before filter`);
    this.p++;
    const begin = this.p;
    const name = this.readIdentifier();
    if (!name.size()) {
      this.assert(this.end(), `expected filter name`);
      return null;
    }
    const args = [];
    this.skipBlank();
    if (this.peek() === ":") {
      do {
        ++this.p;
        const arg = this.readFilterArg();
        arg && args.push(arg);
        this.skipBlank();
        this.assert(this.end() || this.peek() === "," || this.peek() === "|", () => `unexpected character ${this.snapshot()}`);
      } while (this.peek() === ",");
    } else if (this.peek() === "|" || this.end())
      ;
    else {
      throw this.error('expected ":" after filter name');
    }
    return new FilterToken(name.getText(), args, this.input, begin, this.p, this.file);
  }
  readFilterArg() {
    const key = this.readValue();
    if (!key)
      return;
    this.skipBlank();
    if (this.peek() !== ":")
      return key;
    ++this.p;
    const value = this.readValue();
    return [key.getText(), value];
  }
  readTopLevelTokens(options = defaultOptions) {
    const tokens = [];
    while (this.p < this.N) {
      const token = this.readTopLevelToken(options);
      tokens.push(token);
    }
    whiteSpaceCtrl(tokens, options);
    return tokens;
  }
  readTopLevelToken(options) {
    const { tagDelimiterLeft, outputDelimiterLeft } = options;
    if (this.rawBeginAt > -1)
      return this.readEndrawOrRawContent(options);
    if (this.match(tagDelimiterLeft))
      return this.readTagToken(options);
    if (this.match(outputDelimiterLeft))
      return this.readOutputToken(options);
    return this.readHTMLToken([tagDelimiterLeft, outputDelimiterLeft]);
  }
  readHTMLToken(stopStrings) {
    const begin = this.p;
    while (this.p < this.N) {
      if (stopStrings.some((str) => this.match(str)))
        break;
      ++this.p;
    }
    return new HTMLToken(this.input, begin, this.p, this.file);
  }
  readTagToken(options) {
    const { file, input } = this;
    const begin = this.p;
    if (this.readToDelimiter(options.tagDelimiterRight) === -1) {
      throw this.error(`tag ${this.snapshot(begin)} not closed`, begin);
    }
    const token = new TagToken(input, begin, this.p, options, file);
    if (token.name === "raw")
      this.rawBeginAt = begin;
    return token;
  }
  readToDelimiter(delimiter, respectQuoted = false) {
    this.skipBlank();
    while (this.p < this.N) {
      if (respectQuoted && this.peekType() & QUOTE) {
        this.readQuoted();
        continue;
      }
      ++this.p;
      if (this.rmatch(delimiter))
        return this.p;
    }
    return -1;
  }
  readOutputToken(options = defaultOptions) {
    const { file, input } = this;
    const { outputDelimiterRight } = options;
    const begin = this.p;
    if (this.readToDelimiter(outputDelimiterRight, true) === -1) {
      throw this.error(`output ${this.snapshot(begin)} not closed`, begin);
    }
    return new OutputToken(input, begin, this.p, options, file);
  }
  readEndrawOrRawContent(options) {
    const { tagDelimiterLeft, tagDelimiterRight } = options;
    const begin = this.p;
    let leftPos = this.readTo(tagDelimiterLeft) - tagDelimiterLeft.length;
    while (this.p < this.N) {
      if (this.readIdentifier().getText() !== "endraw") {
        leftPos = this.readTo(tagDelimiterLeft) - tagDelimiterLeft.length;
        continue;
      }
      while (this.p <= this.N) {
        if (this.rmatch(tagDelimiterRight)) {
          const end = this.p;
          if (begin === leftPos) {
            this.rawBeginAt = -1;
            return new TagToken(this.input, begin, end, options, this.file);
          } else {
            this.p = leftPos;
            return new HTMLToken(this.input, begin, leftPos, this.file);
          }
        }
        if (this.rmatch(tagDelimiterLeft))
          break;
        this.p++;
      }
    }
    throw this.error(`raw ${this.snapshot(this.rawBeginAt)} not closed`, begin);
  }
  readLiquidTagTokens(options = defaultOptions) {
    const tokens = [];
    while (this.p < this.N) {
      const token = this.readLiquidTagToken(options);
      token && tokens.push(token);
    }
    return tokens;
  }
  readLiquidTagToken(options) {
    this.skipBlank();
    if (this.end())
      return;
    const begin = this.p;
    this.readToDelimiter("\n");
    const end = this.p;
    return new LiquidTagToken(this.input, begin, end, options, this.file);
  }
  error(msg, pos = this.p) {
    return new TokenizationError(msg, new IdentifierToken(this.input, pos, this.N, this.file));
  }
  assert(pred, msg, pos) {
    if (!pred)
      throw this.error(typeof msg === "function" ? msg() : msg, pos);
  }
  snapshot(begin = this.p) {
    return JSON.stringify(ellipsis(this.input.slice(begin, this.N), 32));
  }
  /**
   * @deprecated use #readIdentifier instead
   */
  readWord() {
    return this.readIdentifier();
  }
  readIdentifier() {
    this.skipBlank();
    const begin = this.p;
    while (!this.end() && isWord(this.peek()))
      ++this.p;
    return new IdentifierToken(this.input, begin, this.p, this.file);
  }
  readNonEmptyIdentifier() {
    const id = this.readIdentifier();
    return id.size() ? id : void 0;
  }
  readTagName() {
    this.skipBlank();
    if (this.input[this.p] === "#")
      return this.input.slice(this.p, ++this.p);
    return this.readIdentifier().getText();
  }
  readHashes(jekyllStyle) {
    const hashes = [];
    while (true) {
      const hash = this.readHash(jekyllStyle);
      if (!hash)
        return hashes;
      hashes.push(hash);
    }
  }
  readHash(jekyllStyle) {
    this.skipBlank();
    if (this.peek() === ",")
      ++this.p;
    const begin = this.p;
    const name = this.readNonEmptyIdentifier();
    if (!name)
      return;
    let value;
    this.skipBlank();
    const sep2 = isString(jekyllStyle) ? jekyllStyle : jekyllStyle ? "=" : ":";
    if (this.peek() === sep2) {
      ++this.p;
      value = this.readValue();
    }
    return new HashToken(this.input, begin, this.p, name, value, this.file);
  }
  remaining() {
    return this.input.slice(this.p, this.N);
  }
  advance(step = 1) {
    this.p += step;
  }
  end() {
    return this.p >= this.N;
  }
  readTo(end) {
    while (this.p < this.N) {
      ++this.p;
      if (this.rmatch(end))
        return this.p;
    }
    return -1;
  }
  readValue() {
    this.skipBlank();
    const begin = this.p;
    const variable = this.readLiteral() || this.readQuoted() || this.readRange() || this.readNumber();
    const props = this.readProperties(!variable);
    if (!props.length)
      return variable;
    return new PropertyAccessToken(variable, props, this.input, begin, this.p);
  }
  readScopeValue() {
    this.skipBlank();
    const begin = this.p;
    const props = this.readProperties();
    if (!props.length)
      return void 0;
    return new PropertyAccessToken(void 0, props, this.input, begin, this.p);
  }
  readProperties(isBegin = true) {
    const props = [];
    while (true) {
      if (this.peek() === "[") {
        this.p++;
        const prop = this.readValue() || new IdentifierToken(this.input, this.p, this.p, this.file);
        this.assert(this.readTo("]") !== -1, "[ not closed");
        props.push(prop);
        continue;
      }
      if (isBegin && !props.length) {
        const prop = this.readNonEmptyIdentifier();
        if (prop) {
          props.push(prop);
          continue;
        }
      }
      if (this.peek() === "." && this.peek(1) !== ".") {
        this.p++;
        const prop = this.readNonEmptyIdentifier();
        if (!prop)
          break;
        props.push(prop);
        continue;
      }
      break;
    }
    return props;
  }
  readNumber() {
    this.skipBlank();
    let decimalFound = false;
    let digitFound = false;
    let n = 0;
    if (this.peekType() & SIGN)
      n++;
    while (this.p + n <= this.N) {
      if (this.peekType(n) & NUMBER) {
        digitFound = true;
        n++;
      } else if (this.peek(n) === "." && this.peek(n + 1) !== ".") {
        if (decimalFound || !digitFound)
          return;
        decimalFound = true;
        n++;
      } else
        break;
    }
    if (digitFound && !isWord(this.peek(n))) {
      const num = new NumberToken(this.input, this.p, this.p + n, this.file);
      this.advance(n);
      return num;
    }
  }
  readLiteral() {
    this.skipBlank();
    const end = this.matchTrie(this.literalTrie);
    if (end === -1)
      return;
    const literal = new LiteralToken(this.input, this.p, end, this.file);
    this.p = end;
    return literal;
  }
  readRange() {
    this.skipBlank();
    const begin = this.p;
    if (this.peek() !== "(")
      return;
    ++this.p;
    const lhs = this.readValueOrThrow();
    this.p += 2;
    const rhs = this.readValueOrThrow();
    ++this.p;
    return new RangeToken(this.input, begin, this.p, lhs, rhs, this.file);
  }
  readValueOrThrow() {
    const value = this.readValue();
    this.assert(value, () => `unexpected token ${this.snapshot()}, value expected`);
    return value;
  }
  readQuoted() {
    this.skipBlank();
    const begin = this.p;
    if (!(this.peekType() & QUOTE))
      return;
    ++this.p;
    let escaped = false;
    while (this.p < this.N) {
      ++this.p;
      if (this.input[this.p - 1] === this.input[begin] && !escaped)
        break;
      if (escaped)
        escaped = false;
      else if (this.input[this.p - 1] === "\\")
        escaped = true;
    }
    return new QuotedToken(this.input, begin, this.p, this.file);
  }
  *readFileNameTemplate(options) {
    const { outputDelimiterLeft } = options;
    const htmlStopStrings = [",", " ", outputDelimiterLeft];
    const htmlStopStringSet = new Set(htmlStopStrings);
    while (this.p < this.N && !htmlStopStringSet.has(this.peek())) {
      yield this.match(outputDelimiterLeft) ? this.readOutputToken(options) : this.readHTMLToken(htmlStopStrings);
    }
  }
  match(word) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] !== this.input[this.p + i])
        return false;
    }
    return true;
  }
  rmatch(pattern) {
    for (let i = 0; i < pattern.length; i++) {
      if (pattern[pattern.length - 1 - i] !== this.input[this.p - 1 - i])
        return false;
    }
    return true;
  }
  peekType(n = 0) {
    return this.p + n >= this.N ? 0 : TYPES[this.input.charCodeAt(this.p + n)];
  }
  peek(n = 0) {
    return this.p + n >= this.N ? "" : this.input[this.p + n];
  }
  skipBlank() {
    while (this.peekType() & BLANK)
      ++this.p;
  }
}, "Tokenizer");
__name2(Tokenizer, "Tokenizer");
var ParseStream = /* @__PURE__ */ __name(class {
  constructor(tokens, parseToken) {
    this.handlers = {};
    this.stopRequested = false;
    this.tokens = tokens;
    this.parseToken = parseToken;
  }
  on(name, cb) {
    this.handlers[name] = cb;
    return this;
  }
  trigger(event, arg) {
    const h = this.handlers[event];
    return h ? (h.call(this, arg), true) : false;
  }
  start() {
    this.trigger("start");
    let token;
    while (!this.stopRequested && (token = this.tokens.shift())) {
      if (this.trigger("token", token))
        continue;
      if (isTagToken(token) && this.trigger(`tag:${token.name}`, token)) {
        continue;
      }
      const template = this.parseToken(token, this.tokens);
      this.trigger("template", template);
    }
    if (!this.stopRequested)
      this.trigger("end");
    return this;
  }
  stop() {
    this.stopRequested = true;
    return this;
  }
}, "ParseStream");
__name2(ParseStream, "ParseStream");
var TemplateImpl = /* @__PURE__ */ __name(class {
  constructor(token) {
    this.token = token;
  }
}, "TemplateImpl");
__name2(TemplateImpl, "TemplateImpl");
var Tag = /* @__PURE__ */ __name(class extends TemplateImpl {
  constructor(token, remainTokens, liquid) {
    super(token);
    this.name = token.name;
    this.liquid = liquid;
    this.tokenizer = token.tokenizer;
  }
}, "Tag");
__name2(Tag, "Tag");
var Hash = /* @__PURE__ */ __name(class {
  constructor(markup, jekyllStyle) {
    this.hash = {};
    const tokenizer = new Tokenizer(markup, {});
    for (const hash of tokenizer.readHashes(jekyllStyle)) {
      this.hash[hash.name.content] = hash.value;
    }
  }
  *render(ctx) {
    const hash = {};
    for (const key of Object.keys(this.hash)) {
      hash[key] = this.hash[key] === void 0 ? true : yield evalToken(this.hash[key], ctx);
    }
    return hash;
  }
}, "Hash");
__name2(Hash, "Hash");
function createTagClass(options) {
  return class extends Tag {
    constructor(token, tokens, liquid) {
      super(token, tokens, liquid);
      if (isFunction(options.parse)) {
        options.parse.call(this, token, tokens);
      }
    }
    *render(ctx, emitter) {
      const hash = yield new Hash(this.token.args, ctx.opts.keyValueSeparator).render(ctx);
      return yield options.render.call(this, ctx, emitter, hash);
    }
  };
}
__name(createTagClass, "createTagClass");
__name2(createTagClass, "createTagClass");
function isKeyValuePair(arr) {
  return isArray(arr);
}
__name(isKeyValuePair, "isKeyValuePair");
__name2(isKeyValuePair, "isKeyValuePair");
var Filter = /* @__PURE__ */ __name(class {
  constructor(name, options, args, liquid) {
    this.name = name;
    this.handler = isFunction(options) ? options : isFunction(options === null || options === void 0 ? void 0 : options.handler) ? options.handler : identify;
    this.raw = !isFunction(options) && !!(options === null || options === void 0 ? void 0 : options.raw);
    this.args = args;
    this.liquid = liquid;
  }
  *render(value, context) {
    const argv = [];
    for (const arg of this.args) {
      if (isKeyValuePair(arg))
        argv.push([arg[0], yield evalToken(arg[1], context)]);
      else
        argv.push(yield evalToken(arg, context));
    }
    return yield this.handler.apply({ context, liquid: this.liquid }, [value, ...argv]);
  }
}, "Filter");
__name2(Filter, "Filter");
var Value = /* @__PURE__ */ __name(class {
  /**
   * @param str the value to be valuated, eg.: "foobar" | truncate: 3
   */
  constructor(input, liquid) {
    this.filters = [];
    const token = typeof input === "string" ? new Tokenizer(input, liquid.options.operators).readFilteredValue() : input;
    this.initial = token.initial;
    this.filters = token.filters.map(({ name, args }) => new Filter(name, this.getFilter(liquid, name), args, liquid));
  }
  *value(ctx, lenient) {
    lenient = lenient || ctx.opts.lenientIf && this.filters.length > 0 && this.filters[0].name === "default";
    let val = yield this.initial.evaluate(ctx, lenient);
    for (const filter of this.filters) {
      val = yield filter.render(val, ctx);
    }
    return val;
  }
  getFilter(liquid, name) {
    const impl = liquid.filters[name];
    assert(impl || !liquid.options.strictFilters, () => `undefined filter: ${name}`);
    return impl;
  }
}, "Value");
__name2(Value, "Value");
var Output = /* @__PURE__ */ __name(class extends TemplateImpl {
  constructor(token, liquid) {
    var _a;
    super(token);
    const tokenizer = new Tokenizer(token.input, liquid.options.operators, token.file, token.contentRange);
    this.value = new Value(tokenizer.readFilteredValue(), liquid);
    const filters2 = this.value.filters;
    const outputEscape = liquid.options.outputEscape;
    if (!((_a = filters2[filters2.length - 1]) === null || _a === void 0 ? void 0 : _a.raw) && outputEscape) {
      filters2.push(new Filter(toString.call(outputEscape), outputEscape, [], liquid));
    }
  }
  *render(ctx, emitter) {
    const val = yield this.value.value(ctx, false);
    emitter.write(val);
  }
}, "Output");
__name2(Output, "Output");
var HTML = /* @__PURE__ */ __name(class extends TemplateImpl {
  constructor(token) {
    super(token);
    this.str = token.getContent();
  }
  *render(ctx, emitter) {
    emitter.write(this.str);
  }
}, "HTML");
__name2(HTML, "HTML");
var LookupType;
(function(LookupType2) {
  LookupType2["Partials"] = "partials";
  LookupType2["Layouts"] = "layouts";
  LookupType2["Root"] = "root";
})(LookupType || (LookupType = {}));
var Loader = /* @__PURE__ */ __name(class {
  constructor(options) {
    this.options = options;
    if (options.relativeReference) {
      const sep2 = options.fs.sep;
      assert(sep2, "`fs.sep` is required for relative reference");
      const rRelativePath = new RegExp(["." + sep2, ".." + sep2, "./", "../"].map((prefix) => escapeRegex(prefix)).join("|"));
      this.shouldLoadRelative = (referencedFile) => rRelativePath.test(referencedFile);
    } else {
      this.shouldLoadRelative = (_referencedFile) => false;
    }
    this.contains = this.options.fs.contains || (() => true);
  }
  *lookup(file, type, sync, currentFile) {
    const { fs: fs2 } = this.options;
    const dirs = this.options[type];
    for (const filepath of this.candidates(file, dirs, currentFile, type !== LookupType.Root)) {
      if (sync ? fs2.existsSync(filepath) : yield fs2.exists(filepath))
        return filepath;
    }
    throw this.lookupError(file, dirs);
  }
  *candidates(file, dirs, currentFile, enforceRoot) {
    const { fs: fs2, extname } = this.options;
    if (this.shouldLoadRelative(file) && currentFile) {
      const referenced = fs2.resolve(this.dirname(currentFile), file, extname);
      for (const dir of dirs) {
        if (!enforceRoot || this.contains(dir, referenced)) {
          yield referenced;
          break;
        }
      }
    }
    for (const dir of dirs) {
      const referenced = fs2.resolve(dir, file, extname);
      if (!enforceRoot || this.contains(dir, referenced)) {
        yield referenced;
      }
    }
    if (fs2.fallback !== void 0) {
      const filepath = fs2.fallback(file);
      if (filepath !== void 0)
        yield filepath;
    }
  }
  dirname(path) {
    const fs2 = this.options.fs;
    assert(fs2.dirname, "`fs.dirname` is required for relative reference");
    return fs2.dirname(path);
  }
  lookupError(file, roots) {
    const err = new Error("ENOENT");
    err.message = `ENOENT: Failed to lookup "${file}" in "${roots}"`;
    err.code = "ENOENT";
    return err;
  }
}, "Loader");
__name2(Loader, "Loader");
var Parser = /* @__PURE__ */ __name(class {
  constructor(liquid) {
    this.liquid = liquid;
    this.cache = this.liquid.options.cache;
    this.fs = this.liquid.options.fs;
    this.parseFile = this.cache ? this._parseFileCached : this._parseFile;
    this.loader = new Loader(this.liquid.options);
    this.parseLimit = new Limiter("parse length", liquid.options.parseLimit);
  }
  parse(html, filepath) {
    html = String(html);
    this.parseLimit.use(html.length);
    const tokenizer = new Tokenizer(html, this.liquid.options.operators, filepath);
    const tokens = tokenizer.readTopLevelTokens(this.liquid.options);
    return this.parseTokens(tokens);
  }
  parseTokens(tokens) {
    let token;
    const templates = [];
    const errors = [];
    while (token = tokens.shift()) {
      try {
        templates.push(this.parseToken(token, tokens));
      } catch (err) {
        if (this.liquid.options.catchAllErrors)
          errors.push(err);
        else
          throw err;
      }
    }
    if (errors.length)
      throw new LiquidErrors(errors);
    return templates;
  }
  parseToken(token, remainTokens) {
    try {
      if (isTagToken(token)) {
        const TagClass = this.liquid.tags[token.name];
        assert(TagClass, `tag "${token.name}" not found`);
        return new TagClass(token, remainTokens, this.liquid, this);
      }
      if (isOutputToken(token)) {
        return new Output(token, this.liquid);
      }
      return new HTML(token);
    } catch (e) {
      if (LiquidError.is(e))
        throw e;
      throw new ParseError(e, token);
    }
  }
  parseStream(tokens) {
    return new ParseStream(tokens, (token, tokens2) => this.parseToken(token, tokens2));
  }
  *_parseFileCached(file, sync, type = LookupType.Root, currentFile) {
    const cache = this.cache;
    const key = this.loader.shouldLoadRelative(file) ? currentFile + "," + file : type + ":" + file;
    const tpls = yield cache.read(key);
    if (tpls)
      return tpls;
    const task = this._parseFile(file, sync, type, currentFile);
    const taskOrTpl = sync ? yield task : toPromise(task);
    cache.write(key, taskOrTpl);
    try {
      return yield taskOrTpl;
    } catch (err) {
      cache.remove(key);
      throw err;
    }
  }
  *_parseFile(file, sync, type = LookupType.Root, currentFile) {
    const filepath = yield this.loader.lookup(file, type, sync, currentFile);
    return this.parse(sync ? this.fs.readFileSync(filepath) : yield this.fs.readFile(filepath), filepath);
  }
}, "Parser");
__name2(Parser, "Parser");
var TokenKind;
(function(TokenKind2) {
  TokenKind2[TokenKind2["Number"] = 1] = "Number";
  TokenKind2[TokenKind2["Literal"] = 2] = "Literal";
  TokenKind2[TokenKind2["Tag"] = 4] = "Tag";
  TokenKind2[TokenKind2["Output"] = 8] = "Output";
  TokenKind2[TokenKind2["HTML"] = 16] = "HTML";
  TokenKind2[TokenKind2["Filter"] = 32] = "Filter";
  TokenKind2[TokenKind2["Hash"] = 64] = "Hash";
  TokenKind2[TokenKind2["PropertyAccess"] = 128] = "PropertyAccess";
  TokenKind2[TokenKind2["Word"] = 256] = "Word";
  TokenKind2[TokenKind2["Range"] = 512] = "Range";
  TokenKind2[TokenKind2["Quoted"] = 1024] = "Quoted";
  TokenKind2[TokenKind2["Operator"] = 2048] = "Operator";
  TokenKind2[TokenKind2["FilteredValue"] = 4096] = "FilteredValue";
  TokenKind2[TokenKind2["Delimited"] = 12] = "Delimited";
})(TokenKind || (TokenKind = {}));
function isDelimitedToken(val) {
  return !!(getKind(val) & TokenKind.Delimited);
}
__name(isDelimitedToken, "isDelimitedToken");
__name2(isDelimitedToken, "isDelimitedToken");
function isOperatorToken(val) {
  return getKind(val) === TokenKind.Operator;
}
__name(isOperatorToken, "isOperatorToken");
__name2(isOperatorToken, "isOperatorToken");
function isHTMLToken(val) {
  return getKind(val) === TokenKind.HTML;
}
__name(isHTMLToken, "isHTMLToken");
__name2(isHTMLToken, "isHTMLToken");
function isOutputToken(val) {
  return getKind(val) === TokenKind.Output;
}
__name(isOutputToken, "isOutputToken");
__name2(isOutputToken, "isOutputToken");
function isTagToken(val) {
  return getKind(val) === TokenKind.Tag;
}
__name(isTagToken, "isTagToken");
__name2(isTagToken, "isTagToken");
function isQuotedToken(val) {
  return getKind(val) === TokenKind.Quoted;
}
__name(isQuotedToken, "isQuotedToken");
__name2(isQuotedToken, "isQuotedToken");
function isPropertyAccessToken(val) {
  return getKind(val) === TokenKind.PropertyAccess;
}
__name(isPropertyAccessToken, "isPropertyAccessToken");
__name2(isPropertyAccessToken, "isPropertyAccessToken");
function isRangeToken(val) {
  return getKind(val) === TokenKind.Range;
}
__name(isRangeToken, "isRangeToken");
__name2(isRangeToken, "isRangeToken");
function getKind(val) {
  return val ? val.kind : -1;
}
__name(getKind, "getKind");
__name2(getKind, "getKind");
var Context = /* @__PURE__ */ __name(class {
  constructor(env = {}, opts = defaultOptions, renderOptions = {}, { memoryLimit, renderLimit } = {}) {
    var _a, _b, _c, _d, _e;
    this.scopes = [{}];
    this.registers = {};
    this.sync = !!renderOptions.sync;
    this.opts = opts;
    this.globals = (_a = renderOptions.globals) !== null && _a !== void 0 ? _a : opts.globals;
    this.environments = isObject(env) ? env : Object(env);
    this.strictVariables = (_b = renderOptions.strictVariables) !== null && _b !== void 0 ? _b : this.opts.strictVariables;
    this.ownPropertyOnly = (_c = renderOptions.ownPropertyOnly) !== null && _c !== void 0 ? _c : opts.ownPropertyOnly;
    this.memoryLimit = memoryLimit !== null && memoryLimit !== void 0 ? memoryLimit : new Limiter("memory alloc", (_d = renderOptions.memoryLimit) !== null && _d !== void 0 ? _d : opts.memoryLimit);
    this.renderLimit = renderLimit !== null && renderLimit !== void 0 ? renderLimit : new Limiter("template render", getPerformance().now() + ((_e = renderOptions.renderLimit) !== null && _e !== void 0 ? _e : opts.renderLimit));
  }
  getRegister(key) {
    return this.registers[key] = this.registers[key] || {};
  }
  setRegister(key, value) {
    return this.registers[key] = value;
  }
  saveRegister(...keys) {
    return keys.map((key) => [key, this.getRegister(key)]);
  }
  restoreRegister(keyValues) {
    return keyValues.forEach(([key, value]) => this.setRegister(key, value));
  }
  getAll() {
    return [this.globals, this.environments, ...this.scopes].reduce((ctx, val) => __assign(ctx, val), {});
  }
  /**
   * @deprecated use `_get()` or `getSync()` instead
   */
  get(paths) {
    return this.getSync(paths);
  }
  getSync(paths) {
    return toValueSync(this._get(paths));
  }
  *_get(paths) {
    const scope = this.findScope(paths[0]);
    return yield this._getFromScope(scope, paths);
  }
  /**
   * @deprecated use `_get()` instead
   */
  getFromScope(scope, paths) {
    return toValueSync(this._getFromScope(scope, paths));
  }
  *_getFromScope(scope, paths, strictVariables = this.strictVariables) {
    if (isString(paths))
      paths = paths.split(".");
    for (let i = 0; i < paths.length; i++) {
      scope = yield readProperty(scope, paths[i], this.ownPropertyOnly);
      if (strictVariables && isUndefined(scope)) {
        throw new InternalUndefinedVariableError(paths.slice(0, i + 1).join("."));
      }
    }
    return scope;
  }
  push(ctx) {
    return this.scopes.push(ctx);
  }
  pop() {
    return this.scopes.pop();
  }
  bottom() {
    return this.scopes[0];
  }
  spawn(scope = {}) {
    return new Context(scope, this.opts, {
      sync: this.sync,
      globals: this.globals,
      strictVariables: this.strictVariables
    }, {
      renderLimit: this.renderLimit,
      memoryLimit: this.memoryLimit
    });
  }
  findScope(key) {
    for (let i = this.scopes.length - 1; i >= 0; i--) {
      const candidate = this.scopes[i];
      if (key in candidate)
        return candidate;
    }
    if (key in this.environments)
      return this.environments;
    return this.globals;
  }
}, "Context");
__name2(Context, "Context");
function readProperty(obj, key, ownPropertyOnly) {
  obj = toLiquid(obj);
  if (isNil(obj))
    return obj;
  if (isArray(obj) && key < 0)
    return obj[obj.length + +key];
  const value = readJSProperty(obj, key, ownPropertyOnly);
  if (value === void 0 && obj instanceof Drop)
    return obj.liquidMethodMissing(key);
  if (isFunction(value))
    return value.call(obj);
  if (key === "size")
    return readSize(obj);
  else if (key === "first")
    return readFirst(obj);
  else if (key === "last")
    return readLast(obj);
  return value;
}
__name(readProperty, "readProperty");
__name2(readProperty, "readProperty");
function readJSProperty(obj, key, ownPropertyOnly) {
  if (ownPropertyOnly && !hasOwnProperty.call(obj, key) && !(obj instanceof Drop))
    return void 0;
  return obj[key];
}
__name(readJSProperty, "readJSProperty");
__name2(readJSProperty, "readJSProperty");
function readFirst(obj) {
  if (isArray(obj))
    return obj[0];
  return obj["first"];
}
__name(readFirst, "readFirst");
__name2(readFirst, "readFirst");
function readLast(obj) {
  if (isArray(obj))
    return obj[obj.length - 1];
  return obj["last"];
}
__name(readLast, "readLast");
__name2(readLast, "readLast");
function readSize(obj) {
  if (hasOwnProperty.call(obj, "size") || obj["size"] !== void 0)
    return obj["size"];
  if (isArray(obj) || isString(obj))
    return obj.length;
  if (typeof obj === "object")
    return Object.keys(obj).length;
}
__name(readSize, "readSize");
__name2(readSize, "readSize");
var BlockMode;
(function(BlockMode2) {
  BlockMode2[BlockMode2["OUTPUT"] = 0] = "OUTPUT";
  BlockMode2[BlockMode2["STORE"] = 1] = "STORE";
})(BlockMode || (BlockMode = {}));
var abs = argumentsToValue(Math.abs);
var at_least = argumentsToValue(Math.max);
var at_most = argumentsToValue(Math.min);
var ceil = argumentsToValue(Math.ceil);
var divided_by = argumentsToValue((dividend, divisor, integerArithmetic = false) => integerArithmetic ? Math.floor(dividend / divisor) : dividend / divisor);
var floor = argumentsToValue(Math.floor);
var minus = argumentsToValue((v, arg) => v - arg);
var modulo = argumentsToValue((v, arg) => v % arg);
var times = argumentsToValue((v, arg) => v * arg);
function round(v, arg = 0) {
  v = toValue(v);
  arg = toValue(arg);
  const amp = Math.pow(10, arg);
  return Math.round(v * amp) / amp;
}
__name(round, "round");
__name2(round, "round");
function plus(v, arg) {
  v = toValue(v);
  arg = toValue(arg);
  return Number(v) + Number(arg);
}
__name(plus, "plus");
__name2(plus, "plus");
var mathFilters = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  abs,
  at_least,
  at_most,
  ceil,
  divided_by,
  floor,
  minus,
  modulo,
  times,
  round,
  plus
});
var url_decode = /* @__PURE__ */ __name2((x) => decodeURIComponent(stringify(x)).replace(/\+/g, " "), "url_decode");
var url_encode = /* @__PURE__ */ __name2((x) => encodeURIComponent(stringify(x)).replace(/%20/g, "+"), "url_encode");
var cgi_escape = /* @__PURE__ */ __name2((x) => encodeURIComponent(stringify(x)).replace(/%20/g, "+").replace(/[!'()*]/g, (c) => "%" + c.charCodeAt(0).toString(16).toUpperCase()), "cgi_escape");
var uri_escape = /* @__PURE__ */ __name2((x) => encodeURI(stringify(x)).replace(/%5B/g, "[").replace(/%5D/g, "]"), "uri_escape");
var rSlugifyDefault = /[^\p{M}\p{L}\p{Nd}]+/ug;
var rSlugifyReplacers = {
  "raw": /\s+/g,
  "default": rSlugifyDefault,
  "pretty": /[^\p{M}\p{L}\p{Nd}._~!$&'()+,;=@]+/ug,
  "ascii": /[^A-Za-z0-9]+/g,
  "latin": rSlugifyDefault,
  "none": null
};
function slugify(str, mode = "default", cased = false) {
  str = stringify(str);
  const replacer = rSlugifyReplacers[mode];
  if (replacer) {
    if (mode === "latin")
      str = removeAccents(str);
    str = str.replace(replacer, "-").replace(/^-|-$/g, "");
  }
  return cased ? str : str.toLowerCase();
}
__name(slugify, "slugify");
__name2(slugify, "slugify");
function removeAccents(str) {
  return str.replace(/[àáâãäå]/g, "a").replace(/[æ]/g, "ae").replace(/[ç]/g, "c").replace(/[èéêë]/g, "e").replace(/[ìíîï]/g, "i").replace(/[ð]/g, "d").replace(/[ñ]/g, "n").replace(/[òóôõöø]/g, "o").replace(/[ùúûü]/g, "u").replace(/[ýÿ]/g, "y").replace(/[ß]/g, "ss").replace(/[œ]/g, "oe").replace(/[þ]/g, "th").replace(/[ẞ]/g, "SS").replace(/[Œ]/g, "OE").replace(/[Þ]/g, "TH");
}
__name(removeAccents, "removeAccents");
__name2(removeAccents, "removeAccents");
var urlFilters = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  url_decode,
  url_encode,
  cgi_escape,
  uri_escape,
  slugify
});
var join = argumentsToValue(function(v, arg) {
  const array = toArray(v);
  const sep2 = isNil(arg) ? " " : stringify(arg);
  const complexity = array.length * (1 + sep2.length);
  this.context.memoryLimit.use(complexity);
  return array.join(sep2);
});
var last$1 = argumentsToValue((v) => isArray(v) ? last(v) : "");
var first = argumentsToValue((v) => isArray(v) ? v[0] : "");
var reverse = argumentsToValue(function(v) {
  const array = toArray(v);
  this.context.memoryLimit.use(array.length);
  return [...array].reverse();
});
function* sort(arr, property) {
  const values = [];
  const array = toArray(arr);
  this.context.memoryLimit.use(array.length);
  for (const item of array) {
    values.push([
      item,
      property ? yield this.context._getFromScope(item, stringify(property).split("."), false) : item
    ]);
  }
  return values.sort((lhs, rhs) => {
    const lvalue = lhs[1];
    const rvalue = rhs[1];
    return lvalue < rvalue ? -1 : lvalue > rvalue ? 1 : 0;
  }).map((tuple) => tuple[0]);
}
__name(sort, "sort");
__name2(sort, "sort");
function sort_natural(input, property) {
  const propertyString = stringify(property);
  const compare = property === void 0 ? caseInsensitiveCompare : (lhs, rhs) => caseInsensitiveCompare(lhs[propertyString], rhs[propertyString]);
  const array = toArray(input);
  this.context.memoryLimit.use(array.length);
  return [...array].sort(compare);
}
__name(sort_natural, "sort_natural");
__name2(sort_natural, "sort_natural");
var size = /* @__PURE__ */ __name2((v) => v && v.length || 0, "size");
function* map(arr, property) {
  const results = [];
  const array = toArray(arr);
  this.context.memoryLimit.use(array.length);
  for (const item of array) {
    results.push(yield this.context._getFromScope(item, stringify(property), false));
  }
  return results;
}
__name(map, "map");
__name2(map, "map");
function* sum(arr, property) {
  let sum2 = 0;
  const array = toArray(arr);
  for (const item of array) {
    const data = Number(property ? yield this.context._getFromScope(item, stringify(property), false) : item);
    sum2 += Number.isNaN(data) ? 0 : data;
  }
  return sum2;
}
__name(sum, "sum");
__name2(sum, "sum");
function compact(arr) {
  const array = toArray(arr);
  this.context.memoryLimit.use(array.length);
  return array.filter((x) => !isNil(toValue(x)));
}
__name(compact, "compact");
__name2(compact, "compact");
function concat(v, arg = []) {
  const lhs = toArray(v);
  const rhs = toArray(arg);
  this.context.memoryLimit.use(lhs.length + rhs.length);
  return lhs.concat(rhs);
}
__name(concat, "concat");
__name2(concat, "concat");
function push(v, arg) {
  return concat.call(this, v, [arg]);
}
__name(push, "push");
__name2(push, "push");
function unshift(v, arg) {
  const array = toArray(v);
  this.context.memoryLimit.use(array.length);
  const clone = [...array];
  clone.unshift(arg);
  return clone;
}
__name(unshift, "unshift");
__name2(unshift, "unshift");
function pop(v) {
  const clone = [...toArray(v)];
  clone.pop();
  return clone;
}
__name(pop, "pop");
__name2(pop, "pop");
function shift(v) {
  const array = toArray(v);
  this.context.memoryLimit.use(array.length);
  const clone = [...array];
  clone.shift();
  return clone;
}
__name(shift, "shift");
__name2(shift, "shift");
function slice(v, begin, length = 1) {
  v = toValue(v);
  if (isNil(v))
    return [];
  if (!isArray(v))
    v = stringify(v);
  begin = begin < 0 ? v.length + begin : begin;
  this.context.memoryLimit.use(length);
  return v.slice(begin, begin + length);
}
__name(slice, "slice");
__name2(slice, "slice");
function* where(arr, property, expected) {
  const values = [];
  arr = toArray(arr);
  this.context.memoryLimit.use(arr.length);
  const token = new Tokenizer(stringify(property)).readScopeValue();
  for (const item of arr) {
    values.push(yield evalToken(token, this.context.spawn(item)));
  }
  return arr.filter((_, i) => {
    if (expected === void 0)
      return isTruthy(values[i], this.context);
    return equals(values[i], expected);
  });
}
__name(where, "where");
__name2(where, "where");
function* where_exp(arr, itemName, exp) {
  const filtered = [];
  const keyTemplate = new Value(stringify(exp), this.liquid);
  const array = toArray(arr);
  this.context.memoryLimit.use(array.length);
  for (const item of array) {
    const value = yield keyTemplate.value(this.context.spawn({ [itemName]: item }));
    if (value)
      filtered.push(item);
  }
  return filtered;
}
__name(where_exp, "where_exp");
__name2(where_exp, "where_exp");
function* group_by(arr, property) {
  const map2 = /* @__PURE__ */ new Map();
  arr = toArray(arr);
  const token = new Tokenizer(stringify(property)).readScopeValue();
  this.context.memoryLimit.use(arr.length);
  for (const item of arr) {
    const key = yield evalToken(token, this.context.spawn(item));
    if (!map2.has(key))
      map2.set(key, []);
    map2.get(key).push(item);
  }
  return [...map2.entries()].map(([name, items]) => ({ name, items }));
}
__name(group_by, "group_by");
__name2(group_by, "group_by");
function* group_by_exp(arr, itemName, exp) {
  const map2 = /* @__PURE__ */ new Map();
  const keyTemplate = new Value(stringify(exp), this.liquid);
  arr = toArray(arr);
  this.context.memoryLimit.use(arr.length);
  for (const item of arr) {
    const key = yield keyTemplate.value(this.context.spawn({ [itemName]: item }));
    if (!map2.has(key))
      map2.set(key, []);
    map2.get(key).push(item);
  }
  return [...map2.entries()].map(([name, items]) => ({ name, items }));
}
__name(group_by_exp, "group_by_exp");
__name2(group_by_exp, "group_by_exp");
function* find(arr, property, expected) {
  const token = new Tokenizer(stringify(property)).readScopeValue();
  const array = toArray(arr);
  for (const item of array) {
    const value = yield evalToken(token, this.context.spawn(item));
    if (equals(value, expected))
      return item;
  }
}
__name(find, "find");
__name2(find, "find");
function* find_exp(arr, itemName, exp) {
  const predicate = new Value(stringify(exp), this.liquid);
  const array = toArray(arr);
  for (const item of array) {
    const value = yield predicate.value(this.context.spawn({ [itemName]: item }));
    if (value)
      return item;
  }
}
__name(find_exp, "find_exp");
__name2(find_exp, "find_exp");
function uniq(arr) {
  arr = toArray(arr);
  this.context.memoryLimit.use(arr.length);
  return [...new Set(arr)];
}
__name(uniq, "uniq");
__name2(uniq, "uniq");
function sample(v, count = 1) {
  v = toValue(v);
  if (isNil(v))
    return [];
  if (!isArray(v))
    v = stringify(v);
  this.context.memoryLimit.use(count);
  const shuffled = [...v].sort(() => Math.random() - 0.5);
  if (count === 1)
    return shuffled[0];
  return shuffled.slice(0, count);
}
__name(sample, "sample");
__name2(sample, "sample");
var arrayFilters = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  join,
  last: last$1,
  first,
  reverse,
  sort,
  sort_natural,
  size,
  map,
  sum,
  compact,
  concat,
  push,
  unshift,
  pop,
  shift,
  slice,
  where,
  where_exp,
  group_by,
  group_by_exp,
  find,
  find_exp,
  uniq,
  sample
});
function date(v, format2, timezoneOffset) {
  var _a, _b, _c;
  const size2 = ((_a = v === null || v === void 0 ? void 0 : v.length) !== null && _a !== void 0 ? _a : 0) + ((_b = format2 === null || format2 === void 0 ? void 0 : format2.length) !== null && _b !== void 0 ? _b : 0) + ((_c = timezoneOffset === null || timezoneOffset === void 0 ? void 0 : timezoneOffset.length) !== null && _c !== void 0 ? _c : 0);
  this.context.memoryLimit.use(size2);
  const date2 = parseDate(v, this.context.opts, timezoneOffset);
  if (!date2)
    return v;
  format2 = toValue(format2);
  format2 = isNil(format2) ? this.context.opts.dateFormat : stringify(format2);
  return strftime(date2, format2);
}
__name(date, "date");
__name2(date, "date");
function date_to_xmlschema(v) {
  return date.call(this, v, "%Y-%m-%dT%H:%M:%S%:z");
}
__name(date_to_xmlschema, "date_to_xmlschema");
__name2(date_to_xmlschema, "date_to_xmlschema");
function date_to_rfc822(v) {
  return date.call(this, v, "%a, %d %b %Y %H:%M:%S %z");
}
__name(date_to_rfc822, "date_to_rfc822");
__name2(date_to_rfc822, "date_to_rfc822");
function date_to_string(v, type, style) {
  return stringify_date.call(this, v, "%b", type, style);
}
__name(date_to_string, "date_to_string");
__name2(date_to_string, "date_to_string");
function date_to_long_string(v, type, style) {
  return stringify_date.call(this, v, "%B", type, style);
}
__name(date_to_long_string, "date_to_long_string");
__name2(date_to_long_string, "date_to_long_string");
function stringify_date(v, month_type, type, style) {
  const date2 = parseDate(v, this.context.opts);
  if (!date2)
    return v;
  if (type === "ordinal") {
    const d = date2.getDate();
    return style === "US" ? strftime(date2, `${month_type} ${d}%q, %Y`) : strftime(date2, `${d}%q ${month_type} %Y`);
  }
  return strftime(date2, `%d ${month_type} %Y`);
}
__name(stringify_date, "stringify_date");
__name2(stringify_date, "stringify_date");
function parseDate(v, opts, timezoneOffset) {
  let date2;
  const defaultTimezoneOffset = timezoneOffset !== null && timezoneOffset !== void 0 ? timezoneOffset : opts.timezoneOffset;
  const locale = opts.locale;
  v = toValue(v);
  if (v === "now" || v === "today") {
    date2 = new LiquidDate(Date.now(), locale, defaultTimezoneOffset);
  } else if (isNumber(v)) {
    date2 = new LiquidDate(v * 1e3, locale, defaultTimezoneOffset);
  } else if (isString(v)) {
    if (/^\d+$/.test(v)) {
      date2 = new LiquidDate(+v * 1e3, locale, defaultTimezoneOffset);
    } else if (opts.preserveTimezones && timezoneOffset === void 0) {
      date2 = LiquidDate.createDateFixedToTimezone(v, locale);
    } else {
      date2 = new LiquidDate(v, locale, defaultTimezoneOffset);
    }
  } else {
    date2 = new LiquidDate(v, locale, defaultTimezoneOffset);
  }
  return date2.valid() ? date2 : void 0;
}
__name(parseDate, "parseDate");
__name2(parseDate, "parseDate");
var dateFilters = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  date,
  date_to_xmlschema,
  date_to_rfc822,
  date_to_string,
  date_to_long_string
});
var rCJKWord = /[\u4E00-\u9FFF\uF900-\uFAFF\u3400-\u4DBF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF]/gu;
var rNonCJKWord = /[^\u4E00-\u9FFF\uF900-\uFAFF\u3400-\u4DBF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF\s]+/gu;
function append(v, arg) {
  assert(arguments.length === 2, "append expect 2 arguments");
  const lhs = stringify(v);
  const rhs = stringify(arg);
  this.context.memoryLimit.use(lhs.length + rhs.length);
  return lhs + rhs;
}
__name(append, "append");
__name2(append, "append");
function prepend(v, arg) {
  assert(arguments.length === 2, "prepend expect 2 arguments");
  const lhs = stringify(v);
  const rhs = stringify(arg);
  this.context.memoryLimit.use(lhs.length + rhs.length);
  return rhs + lhs;
}
__name(prepend, "prepend");
__name2(prepend, "prepend");
function lstrip(v, chars) {
  const str = stringify(v);
  this.context.memoryLimit.use(str.length);
  if (chars) {
    chars = escapeRegExp(stringify(chars));
    return str.replace(new RegExp(`^[${chars}]+`, "g"), "");
  }
  return str.replace(/^\s+/, "");
}
__name(lstrip, "lstrip");
__name2(lstrip, "lstrip");
function downcase(v) {
  const str = stringify(v);
  this.context.memoryLimit.use(str.length);
  return str.toLowerCase();
}
__name(downcase, "downcase");
__name2(downcase, "downcase");
function upcase(v) {
  const str = stringify(v);
  this.context.memoryLimit.use(str.length);
  return stringify(str).toUpperCase();
}
__name(upcase, "upcase");
__name2(upcase, "upcase");
function remove(v, arg) {
  const str = stringify(v);
  this.context.memoryLimit.use(str.length);
  return str.split(stringify(arg)).join("");
}
__name(remove, "remove");
__name2(remove, "remove");
function remove_first(v, l) {
  const str = stringify(v);
  this.context.memoryLimit.use(str.length);
  return str.replace(stringify(l), "");
}
__name(remove_first, "remove_first");
__name2(remove_first, "remove_first");
function remove_last(v, l) {
  const str = stringify(v);
  this.context.memoryLimit.use(str.length);
  const pattern = stringify(l);
  const index = str.lastIndexOf(pattern);
  if (index === -1)
    return str;
  return str.substring(0, index) + str.substring(index + pattern.length);
}
__name(remove_last, "remove_last");
__name2(remove_last, "remove_last");
function rstrip(str, chars) {
  str = stringify(str);
  this.context.memoryLimit.use(str.length);
  if (chars) {
    chars = escapeRegExp(stringify(chars));
    return str.replace(new RegExp(`[${chars}]+$`, "g"), "");
  }
  return str.replace(/\s+$/, "");
}
__name(rstrip, "rstrip");
__name2(rstrip, "rstrip");
function split(v, arg) {
  const str = stringify(v);
  this.context.memoryLimit.use(str.length);
  const arr = str.split(stringify(arg));
  while (arr.length && arr[arr.length - 1] === "")
    arr.pop();
  return arr;
}
__name(split, "split");
__name2(split, "split");
function strip(v, chars) {
  const str = stringify(v);
  this.context.memoryLimit.use(str.length);
  if (chars) {
    chars = escapeRegExp(stringify(chars));
    return str.replace(new RegExp(`^[${chars}]+`, "g"), "").replace(new RegExp(`[${chars}]+$`, "g"), "");
  }
  return str.trim();
}
__name(strip, "strip");
__name2(strip, "strip");
function strip_newlines(v) {
  const str = stringify(v);
  this.context.memoryLimit.use(str.length);
  return str.replace(/\r?\n/gm, "");
}
__name(strip_newlines, "strip_newlines");
__name2(strip_newlines, "strip_newlines");
function capitalize(str) {
  str = stringify(str);
  this.context.memoryLimit.use(str.length);
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
__name(capitalize, "capitalize");
__name2(capitalize, "capitalize");
function replace(v, pattern, replacement) {
  const str = stringify(v);
  this.context.memoryLimit.use(str.length);
  return str.split(stringify(pattern)).join(replacement);
}
__name(replace, "replace");
__name2(replace, "replace");
function replace_first(v, arg1, arg2) {
  const str = stringify(v);
  this.context.memoryLimit.use(str.length);
  return str.replace(stringify(arg1), arg2);
}
__name(replace_first, "replace_first");
__name2(replace_first, "replace_first");
function replace_last(v, arg1, arg2) {
  const str = stringify(v);
  this.context.memoryLimit.use(str.length);
  const pattern = stringify(arg1);
  const index = str.lastIndexOf(pattern);
  if (index === -1)
    return str;
  const replacement = stringify(arg2);
  return str.substring(0, index) + replacement + str.substring(index + pattern.length);
}
__name(replace_last, "replace_last");
__name2(replace_last, "replace_last");
function truncate(v, l = 50, o = "...") {
  const str = stringify(v);
  this.context.memoryLimit.use(str.length);
  if (str.length <= l)
    return v;
  return str.substring(0, l - o.length) + o;
}
__name(truncate, "truncate");
__name2(truncate, "truncate");
function truncatewords(v, words = 15, o = "...") {
  const str = stringify(v);
  this.context.memoryLimit.use(str.length);
  const arr = str.split(/\s+/);
  if (words <= 0)
    words = 1;
  let ret = arr.slice(0, words).join(" ");
  if (arr.length >= words)
    ret += o;
  return ret;
}
__name(truncatewords, "truncatewords");
__name2(truncatewords, "truncatewords");
function normalize_whitespace(v) {
  const str = stringify(v);
  this.context.memoryLimit.use(str.length);
  return str.replace(/\s+/g, " ");
}
__name(normalize_whitespace, "normalize_whitespace");
__name2(normalize_whitespace, "normalize_whitespace");
function number_of_words(input, mode) {
  const str = stringify(input);
  this.context.memoryLimit.use(str.length);
  input = str.trim();
  if (!input)
    return 0;
  switch (mode) {
    case "cjk":
      return (input.match(rCJKWord) || []).length + (input.match(rNonCJKWord) || []).length;
    case "auto":
      return rCJKWord.test(input) ? input.match(rCJKWord).length + (input.match(rNonCJKWord) || []).length : input.split(/\s+/).length;
    default:
      return input.split(/\s+/).length;
  }
}
__name(number_of_words, "number_of_words");
__name2(number_of_words, "number_of_words");
function array_to_sentence_string(array, connector = "and") {
  this.context.memoryLimit.use(array.length);
  switch (array.length) {
    case 0:
      return "";
    case 1:
      return array[0];
    case 2:
      return `${array[0]} ${connector} ${array[1]}`;
    default:
      return `${array.slice(0, -1).join(", ")}, ${connector} ${array[array.length - 1]}`;
  }
}
__name(array_to_sentence_string, "array_to_sentence_string");
__name2(array_to_sentence_string, "array_to_sentence_string");
var stringFilters = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  append,
  prepend,
  lstrip,
  downcase,
  upcase,
  remove,
  remove_first,
  remove_last,
  rstrip,
  split,
  strip,
  strip_newlines,
  capitalize,
  replace,
  replace_first,
  replace_last,
  truncate,
  truncatewords,
  normalize_whitespace,
  number_of_words,
  array_to_sentence_string
});
var filters = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, htmlFilters), mathFilters), urlFilters), arrayFilters), dateFilters), stringFilters), misc);
var AssignTag = /* @__PURE__ */ __name(class extends Tag {
  constructor(token, remainTokens, liquid) {
    super(token, remainTokens, liquid);
    this.key = this.tokenizer.readIdentifier().content;
    this.tokenizer.assert(this.key, "expected variable name");
    this.tokenizer.skipBlank();
    this.tokenizer.assert(this.tokenizer.peek() === "=", 'expected "="');
    this.tokenizer.advance();
    this.value = new Value(this.tokenizer.readFilteredValue(), this.liquid);
  }
  *render(ctx) {
    ctx.bottom()[this.key] = yield this.value.value(ctx, this.liquid.options.lenientIf);
  }
}, "AssignTag");
__name2(AssignTag, "AssignTag");
var MODIFIERS = ["offset", "limit", "reversed"];
var ForTag = /* @__PURE__ */ __name(class extends Tag {
  constructor(token, remainTokens, liquid, parser) {
    super(token, remainTokens, liquid);
    const variable = this.tokenizer.readIdentifier();
    const inStr = this.tokenizer.readIdentifier();
    const collection = this.tokenizer.readValue();
    if (!variable.size() || inStr.content !== "in" || !collection) {
      throw new Error(`illegal tag: ${token.getText()}`);
    }
    this.variable = variable.content;
    this.collection = collection;
    this.hash = new Hash(this.tokenizer.remaining(), liquid.options.keyValueSeparator);
    this.templates = [];
    this.elseTemplates = [];
    let p;
    const stream = parser.parseStream(remainTokens).on("start", () => p = this.templates).on("tag:else", (tag) => {
      assertEmpty(tag.args);
      p = this.elseTemplates;
    }).on("tag:endfor", (tag) => {
      assertEmpty(tag.args);
      stream.stop();
    }).on("template", (tpl) => p.push(tpl)).on("end", () => {
      throw new Error(`tag ${token.getText()} not closed`);
    });
    stream.start();
  }
  *render(ctx, emitter) {
    const r = this.liquid.renderer;
    let collection = toEnumerable(yield evalToken(this.collection, ctx));
    if (!collection.length) {
      yield r.renderTemplates(this.elseTemplates, ctx, emitter);
      return;
    }
    const continueKey = "continue-" + this.variable + "-" + this.collection.getText();
    ctx.push({ continue: ctx.getRegister(continueKey) });
    const hash = yield this.hash.render(ctx);
    ctx.pop();
    const modifiers = this.liquid.options.orderedFilterParameters ? Object.keys(hash).filter((x) => MODIFIERS.includes(x)) : MODIFIERS.filter((x) => hash[x] !== void 0);
    collection = modifiers.reduce((collection2, modifier) => {
      if (modifier === "offset")
        return offset(collection2, hash["offset"]);
      if (modifier === "limit")
        return limit(collection2, hash["limit"]);
      return reversed(collection2);
    }, collection);
    ctx.setRegister(continueKey, (hash["offset"] || 0) + collection.length);
    const scope = { forloop: new ForloopDrop(collection.length, this.collection.getText(), this.variable) };
    ctx.push(scope);
    for (const item of collection) {
      scope[this.variable] = item;
      yield r.renderTemplates(this.templates, ctx, emitter);
      if (emitter["break"]) {
        emitter["break"] = false;
        break;
      }
      emitter["continue"] = false;
      scope.forloop.next();
    }
    ctx.pop();
  }
}, "ForTag");
__name2(ForTag, "ForTag");
function reversed(arr) {
  return [...arr].reverse();
}
__name(reversed, "reversed");
__name2(reversed, "reversed");
function offset(arr, count) {
  return arr.slice(count);
}
__name(offset, "offset");
__name2(offset, "offset");
function limit(arr, count) {
  return arr.slice(0, count);
}
__name(limit, "limit");
__name2(limit, "limit");
var CaptureTag = /* @__PURE__ */ __name(class extends Tag {
  constructor(tagToken, remainTokens, liquid, parser) {
    super(tagToken, remainTokens, liquid);
    this.templates = [];
    this.variable = this.readVariableName();
    while (remainTokens.length) {
      const token = remainTokens.shift();
      if (isTagToken(token) && token.name === "endcapture")
        return;
      this.templates.push(parser.parseToken(token, remainTokens));
    }
    throw new Error(`tag ${tagToken.getText()} not closed`);
  }
  *render(ctx) {
    const r = this.liquid.renderer;
    const html = yield r.renderTemplates(this.templates, ctx);
    ctx.bottom()[this.variable] = html;
  }
  readVariableName() {
    const word = this.tokenizer.readIdentifier().content;
    if (word)
      return word;
    const quoted = this.tokenizer.readQuoted();
    if (quoted)
      return evalQuotedToken(quoted);
    throw this.tokenizer.error("invalid capture name");
  }
}, "CaptureTag");
__name2(CaptureTag, "CaptureTag");
var CaseTag = /* @__PURE__ */ __name(class extends Tag {
  constructor(tagToken, remainTokens, liquid, parser) {
    super(tagToken, remainTokens, liquid);
    this.branches = [];
    this.elseTemplates = [];
    this.value = new Value(this.tokenizer.readFilteredValue(), this.liquid);
    this.elseTemplates = [];
    let p = [];
    let elseCount = 0;
    const stream = parser.parseStream(remainTokens).on("tag:when", (token) => {
      if (elseCount > 0) {
        return;
      }
      p = [];
      const values = [];
      while (!token.tokenizer.end()) {
        values.push(token.tokenizer.readValueOrThrow());
        token.tokenizer.skipBlank();
        if (token.tokenizer.peek() === ",") {
          token.tokenizer.readTo(",");
        } else {
          token.tokenizer.readTo("or");
        }
      }
      this.branches.push({
        values,
        templates: p
      });
    }).on("tag:else", () => {
      elseCount++;
      p = this.elseTemplates;
    }).on("tag:endcase", () => stream.stop()).on("template", (tpl) => {
      if (p !== this.elseTemplates || elseCount === 1) {
        p.push(tpl);
      }
    }).on("end", () => {
      throw new Error(`tag ${tagToken.getText()} not closed`);
    });
    stream.start();
  }
  *render(ctx, emitter) {
    const r = this.liquid.renderer;
    const target = toValue(yield this.value.value(ctx, ctx.opts.lenientIf));
    let branchHit = false;
    for (const branch of this.branches) {
      for (const valueToken of branch.values) {
        const value = yield evalToken(valueToken, ctx, ctx.opts.lenientIf);
        if (equals(target, value)) {
          yield r.renderTemplates(branch.templates, ctx, emitter);
          branchHit = true;
          break;
        }
      }
    }
    if (!branchHit) {
      yield r.renderTemplates(this.elseTemplates, ctx, emitter);
    }
  }
}, "CaseTag");
__name2(CaseTag, "CaseTag");
var CommentTag = /* @__PURE__ */ __name(class extends Tag {
  constructor(tagToken, remainTokens, liquid) {
    super(tagToken, remainTokens, liquid);
    while (remainTokens.length) {
      const token = remainTokens.shift();
      if (isTagToken(token) && token.name === "endcomment")
        return;
    }
    throw new Error(`tag ${tagToken.getText()} not closed`);
  }
  render() {
  }
}, "CommentTag");
__name2(CommentTag, "CommentTag");
var RenderTag = /* @__PURE__ */ __name(class extends Tag {
  constructor(token, remainTokens, liquid, parser) {
    super(token, remainTokens, liquid);
    const tokenizer = this.tokenizer;
    this.file = parseFilePath(tokenizer, this.liquid, parser);
    this.currentFile = token.file;
    while (!tokenizer.end()) {
      tokenizer.skipBlank();
      const begin = tokenizer.p;
      const keyword = tokenizer.readIdentifier();
      if (keyword.content === "with" || keyword.content === "for") {
        tokenizer.skipBlank();
        if (tokenizer.peek() !== ":") {
          const value = tokenizer.readValue();
          if (value) {
            const beforeAs = tokenizer.p;
            const asStr = tokenizer.readIdentifier();
            let alias;
            if (asStr.content === "as")
              alias = tokenizer.readIdentifier();
            else
              tokenizer.p = beforeAs;
            this[keyword.content] = { value, alias: alias && alias.content };
            tokenizer.skipBlank();
            if (tokenizer.peek() === ",")
              tokenizer.advance();
            continue;
          }
        }
      }
      tokenizer.p = begin;
      break;
    }
    this.hash = new Hash(tokenizer.remaining(), liquid.options.keyValueSeparator);
  }
  *render(ctx, emitter) {
    const { liquid, hash } = this;
    const filepath = yield renderFilePath(this["file"], ctx, liquid);
    assert(filepath, () => `illegal file path "${filepath}"`);
    const childCtx = ctx.spawn();
    const scope = childCtx.bottom();
    __assign(scope, yield hash.render(ctx));
    if (this["with"]) {
      const { value, alias } = this["with"];
      scope[alias || filepath] = yield evalToken(value, ctx);
    }
    if (this["for"]) {
      const { value, alias } = this["for"];
      const collection = toEnumerable(yield evalToken(value, ctx));
      scope["forloop"] = new ForloopDrop(collection.length, value.getText(), alias);
      for (const item of collection) {
        scope[alias] = item;
        const templates = yield liquid._parsePartialFile(filepath, childCtx.sync, this["currentFile"]);
        yield liquid.renderer.renderTemplates(templates, childCtx, emitter);
        scope["forloop"].next();
      }
    } else {
      const templates = yield liquid._parsePartialFile(filepath, childCtx.sync, this["currentFile"]);
      yield liquid.renderer.renderTemplates(templates, childCtx, emitter);
    }
  }
}, "RenderTag");
__name2(RenderTag, "RenderTag");
function parseFilePath(tokenizer, liquid, parser) {
  if (liquid.options.dynamicPartials) {
    const file = tokenizer.readValue();
    tokenizer.assert(file, "illegal file path");
    if (file.getText() === "none")
      return;
    if (isQuotedToken(file)) {
      const templates2 = parser.parse(evalQuotedToken(file));
      return optimize(templates2);
    }
    return file;
  }
  const tokens = [...tokenizer.readFileNameTemplate(liquid.options)];
  const templates = optimize(parser.parseTokens(tokens));
  return templates === "none" ? void 0 : templates;
}
__name(parseFilePath, "parseFilePath");
__name2(parseFilePath, "parseFilePath");
function optimize(templates) {
  if (templates.length === 1 && isHTMLToken(templates[0].token))
    return templates[0].token.getContent();
  return templates;
}
__name(optimize, "optimize");
__name2(optimize, "optimize");
function* renderFilePath(file, ctx, liquid) {
  if (typeof file === "string")
    return file;
  if (Array.isArray(file))
    return liquid.renderer.renderTemplates(file, ctx);
  return yield evalToken(file, ctx);
}
__name(renderFilePath, "renderFilePath");
__name2(renderFilePath, "renderFilePath");
var IncludeTag = /* @__PURE__ */ __name(class extends Tag {
  constructor(token, remainTokens, liquid, parser) {
    super(token, remainTokens, liquid);
    const { tokenizer } = token;
    this["file"] = parseFilePath(tokenizer, this.liquid, parser);
    this["currentFile"] = token.file;
    const begin = tokenizer.p;
    const withStr = tokenizer.readIdentifier();
    if (withStr.content === "with") {
      tokenizer.skipBlank();
      if (tokenizer.peek() !== ":") {
        this.withVar = tokenizer.readValue();
      } else
        tokenizer.p = begin;
    } else
      tokenizer.p = begin;
    this.hash = new Hash(tokenizer.remaining(), liquid.options.jekyllInclude || liquid.options.keyValueSeparator);
  }
  *render(ctx, emitter) {
    const { liquid, hash, withVar } = this;
    const { renderer } = liquid;
    const filepath = yield renderFilePath(this["file"], ctx, liquid);
    assert(filepath, () => `illegal file path "${filepath}"`);
    const saved = ctx.saveRegister("blocks", "blockMode");
    ctx.setRegister("blocks", {});
    ctx.setRegister("blockMode", BlockMode.OUTPUT);
    const scope = yield hash.render(ctx);
    if (withVar)
      scope[filepath] = yield evalToken(withVar, ctx);
    const templates = yield liquid._parsePartialFile(filepath, ctx.sync, this["currentFile"]);
    ctx.push(ctx.opts.jekyllInclude ? { include: scope } : scope);
    yield renderer.renderTemplates(templates, ctx, emitter);
    ctx.pop();
    ctx.restoreRegister(saved);
  }
}, "IncludeTag");
__name2(IncludeTag, "IncludeTag");
var DecrementTag = /* @__PURE__ */ __name(class extends Tag {
  constructor(token, remainTokens, liquid) {
    super(token, remainTokens, liquid);
    this.variable = this.tokenizer.readIdentifier().content;
  }
  render(context, emitter) {
    const scope = context.environments;
    if (!isNumber(scope[this.variable])) {
      scope[this.variable] = 0;
    }
    emitter.write(stringify(--scope[this.variable]));
  }
}, "DecrementTag");
__name2(DecrementTag, "DecrementTag");
var CycleTag = /* @__PURE__ */ __name(class extends Tag {
  constructor(token, remainTokens, liquid) {
    super(token, remainTokens, liquid);
    this.candidates = [];
    const group = this.tokenizer.readValue();
    this.tokenizer.skipBlank();
    if (group) {
      if (this.tokenizer.peek() === ":") {
        this.group = group;
        this.tokenizer.advance();
      } else
        this.candidates.push(group);
    }
    while (!this.tokenizer.end()) {
      const value = this.tokenizer.readValue();
      if (value)
        this.candidates.push(value);
      this.tokenizer.readTo(",");
    }
    this.tokenizer.assert(this.candidates.length, () => `empty candidates: "${token.getText()}"`);
  }
  *render(ctx, emitter) {
    const group = yield evalToken(this.group, ctx);
    const fingerprint = `cycle:${group}:` + this.candidates.join(",");
    const groups = ctx.getRegister("cycle");
    let idx = groups[fingerprint];
    if (idx === void 0) {
      idx = groups[fingerprint] = 0;
    }
    const candidate = this.candidates[idx];
    idx = (idx + 1) % this.candidates.length;
    groups[fingerprint] = idx;
    return yield evalToken(candidate, ctx);
  }
}, "CycleTag");
__name2(CycleTag, "CycleTag");
var IfTag = /* @__PURE__ */ __name(class extends Tag {
  constructor(tagToken, remainTokens, liquid, parser) {
    super(tagToken, remainTokens, liquid);
    this.branches = [];
    let p = [];
    parser.parseStream(remainTokens).on("start", () => this.branches.push({
      value: new Value(tagToken.args, this.liquid),
      templates: p = []
    })).on("tag:elsif", (token) => {
      assert(!this.elseTemplates, "unexpected elsif after else");
      this.branches.push({
        value: new Value(token.args, this.liquid),
        templates: p = []
      });
    }).on("tag:else", (tag) => {
      assertEmpty(tag.args);
      assert(!this.elseTemplates, "duplicated else");
      p = this.elseTemplates = [];
    }).on("tag:endif", function(tag) {
      assertEmpty(tag.args);
      this.stop();
    }).on("template", (tpl) => p.push(tpl)).on("end", () => {
      throw new Error(`tag ${tagToken.getText()} not closed`);
    }).start();
  }
  *render(ctx, emitter) {
    const r = this.liquid.renderer;
    for (const { value, templates } of this.branches) {
      const v = yield value.value(ctx, ctx.opts.lenientIf);
      if (isTruthy(v, ctx)) {
        yield r.renderTemplates(templates, ctx, emitter);
        return;
      }
    }
    yield r.renderTemplates(this.elseTemplates || [], ctx, emitter);
  }
}, "IfTag");
__name2(IfTag, "IfTag");
var IncrementTag = /* @__PURE__ */ __name(class extends Tag {
  constructor(token, remainTokens, liquid) {
    super(token, remainTokens, liquid);
    this.variable = this.tokenizer.readIdentifier().content;
  }
  render(context, emitter) {
    const scope = context.environments;
    if (!isNumber(scope[this.variable])) {
      scope[this.variable] = 0;
    }
    const val = scope[this.variable];
    scope[this.variable]++;
    emitter.write(stringify(val));
  }
}, "IncrementTag");
__name2(IncrementTag, "IncrementTag");
var LayoutTag = /* @__PURE__ */ __name(class extends Tag {
  constructor(token, remainTokens, liquid, parser) {
    super(token, remainTokens, liquid);
    this.file = parseFilePath(this.tokenizer, this.liquid, parser);
    this["currentFile"] = token.file;
    this.args = new Hash(this.tokenizer.remaining(), liquid.options.keyValueSeparator);
    this.templates = parser.parseTokens(remainTokens);
  }
  *render(ctx, emitter) {
    const { liquid, args, file } = this;
    const { renderer } = liquid;
    if (file === void 0) {
      ctx.setRegister("blockMode", BlockMode.OUTPUT);
      yield renderer.renderTemplates(this.templates, ctx, emitter);
      return;
    }
    const filepath = yield renderFilePath(this.file, ctx, liquid);
    assert(filepath, () => `illegal file path "${filepath}"`);
    const templates = yield liquid._parseLayoutFile(filepath, ctx.sync, this["currentFile"]);
    ctx.setRegister("blockMode", BlockMode.STORE);
    const html = yield renderer.renderTemplates(this.templates, ctx);
    const blocks = ctx.getRegister("blocks");
    if (blocks[""] === void 0)
      blocks[""] = (parent, emitter2) => emitter2.write(html);
    ctx.setRegister("blockMode", BlockMode.OUTPUT);
    ctx.push(yield args.render(ctx));
    yield renderer.renderTemplates(templates, ctx, emitter);
    ctx.pop();
  }
}, "LayoutTag");
__name2(LayoutTag, "LayoutTag");
var BlockTag = /* @__PURE__ */ __name(class extends Tag {
  constructor(token, remainTokens, liquid, parser) {
    super(token, remainTokens, liquid);
    this.templates = [];
    const match2 = /\w+/.exec(token.args);
    this.block = match2 ? match2[0] : "";
    while (remainTokens.length) {
      const token2 = remainTokens.shift();
      if (isTagToken(token2) && token2.name === "endblock")
        return;
      const template = parser.parseToken(token2, remainTokens);
      this.templates.push(template);
    }
    throw new Error(`tag ${token.getText()} not closed`);
  }
  *render(ctx, emitter) {
    const blockRender = this.getBlockRender(ctx);
    if (ctx.getRegister("blockMode") === BlockMode.STORE) {
      ctx.getRegister("blocks")[this.block] = blockRender;
    } else {
      yield blockRender(new BlockDrop(), emitter);
    }
  }
  getBlockRender(ctx) {
    const { liquid, templates } = this;
    const renderChild = ctx.getRegister("blocks")[this.block];
    const renderCurrent = /* @__PURE__ */ __name2(function* (superBlock, emitter) {
      ctx.push({ block: superBlock });
      yield liquid.renderer.renderTemplates(templates, ctx, emitter);
      ctx.pop();
    }, "renderCurrent");
    return renderChild ? (superBlock, emitter) => renderChild(new BlockDrop(() => renderCurrent(superBlock, emitter)), emitter) : renderCurrent;
  }
}, "BlockTag");
__name2(BlockTag, "BlockTag");
var RawTag = /* @__PURE__ */ __name(class extends Tag {
  constructor(tagToken, remainTokens, liquid) {
    super(tagToken, remainTokens, liquid);
    this.tokens = [];
    while (remainTokens.length) {
      const token = remainTokens.shift();
      if (isTagToken(token) && token.name === "endraw")
        return;
      this.tokens.push(token);
    }
    throw new Error(`tag ${tagToken.getText()} not closed`);
  }
  render() {
    return this.tokens.map((token) => token.getText()).join("");
  }
}, "RawTag");
__name2(RawTag, "RawTag");
var TablerowloopDrop = /* @__PURE__ */ __name(class extends ForloopDrop {
  constructor(length, cols, collection, variable) {
    super(length, collection, variable);
    this.length = length;
    this.cols = cols;
  }
  row() {
    return Math.floor(this.i / this.cols) + 1;
  }
  col0() {
    return this.i % this.cols;
  }
  col() {
    return this.col0() + 1;
  }
  col_first() {
    return this.col0() === 0;
  }
  col_last() {
    return this.col() === this.cols;
  }
}, "TablerowloopDrop");
__name2(TablerowloopDrop, "TablerowloopDrop");
var TablerowTag = /* @__PURE__ */ __name(class extends Tag {
  constructor(tagToken, remainTokens, liquid, parser) {
    super(tagToken, remainTokens, liquid);
    const variable = this.tokenizer.readIdentifier();
    this.tokenizer.skipBlank();
    const predicate = this.tokenizer.readIdentifier();
    const collectionToken = this.tokenizer.readValue();
    if (predicate.content !== "in" || !collectionToken) {
      throw new Error(`illegal tag: ${tagToken.getText()}`);
    }
    this.variable = variable.content;
    this.collection = collectionToken;
    this.args = new Hash(this.tokenizer.remaining(), liquid.options.keyValueSeparator);
    this.templates = [];
    let p;
    const stream = parser.parseStream(remainTokens).on("start", () => p = this.templates).on("tag:endtablerow", () => stream.stop()).on("template", (tpl) => p.push(tpl)).on("end", () => {
      throw new Error(`tag ${tagToken.getText()} not closed`);
    });
    stream.start();
  }
  *render(ctx, emitter) {
    let collection = toEnumerable(yield evalToken(this.collection, ctx));
    const args = yield this.args.render(ctx);
    const offset2 = args.offset || 0;
    const limit2 = args.limit === void 0 ? collection.length : args.limit;
    collection = collection.slice(offset2, offset2 + limit2);
    const cols = args.cols || collection.length;
    const r = this.liquid.renderer;
    const tablerowloop = new TablerowloopDrop(collection.length, cols, this.collection.getText(), this.variable);
    const scope = { tablerowloop };
    ctx.push(scope);
    for (let idx = 0; idx < collection.length; idx++, tablerowloop.next()) {
      scope[this.variable] = collection[idx];
      if (tablerowloop.col0() === 0) {
        if (tablerowloop.row() !== 1)
          emitter.write("</tr>");
        emitter.write(`<tr class="row${tablerowloop.row()}">`);
      }
      emitter.write(`<td class="col${tablerowloop.col()}">`);
      yield r.renderTemplates(this.templates, ctx, emitter);
      emitter.write("</td>");
    }
    if (collection.length)
      emitter.write("</tr>");
    ctx.pop();
  }
}, "TablerowTag");
__name2(TablerowTag, "TablerowTag");
var UnlessTag = /* @__PURE__ */ __name(class extends Tag {
  constructor(tagToken, remainTokens, liquid, parser) {
    super(tagToken, remainTokens, liquid);
    this.branches = [];
    this.elseTemplates = [];
    let p = [];
    let elseCount = 0;
    parser.parseStream(remainTokens).on("start", () => this.branches.push({
      value: new Value(tagToken.args, this.liquid),
      test: isFalsy,
      templates: p = []
    })).on("tag:elsif", (token) => {
      if (elseCount > 0) {
        p = [];
        return;
      }
      this.branches.push({
        value: new Value(token.args, this.liquid),
        test: isTruthy,
        templates: p = []
      });
    }).on("tag:else", () => {
      elseCount++;
      p = this.elseTemplates;
    }).on("tag:endunless", function() {
      this.stop();
    }).on("template", (tpl) => {
      if (p !== this.elseTemplates || elseCount === 1) {
        p.push(tpl);
      }
    }).on("end", () => {
      throw new Error(`tag ${tagToken.getText()} not closed`);
    }).start();
  }
  *render(ctx, emitter) {
    const r = this.liquid.renderer;
    for (const { value, test, templates } of this.branches) {
      const v = yield value.value(ctx, ctx.opts.lenientIf);
      if (test(v, ctx)) {
        yield r.renderTemplates(templates, ctx, emitter);
        return;
      }
    }
    yield r.renderTemplates(this.elseTemplates, ctx, emitter);
  }
}, "UnlessTag");
__name2(UnlessTag, "UnlessTag");
var BreakTag = /* @__PURE__ */ __name(class extends Tag {
  render(ctx, emitter) {
    emitter["break"] = true;
  }
}, "BreakTag");
__name2(BreakTag, "BreakTag");
var ContinueTag = /* @__PURE__ */ __name(class extends Tag {
  render(ctx, emitter) {
    emitter["continue"] = true;
  }
}, "ContinueTag");
__name2(ContinueTag, "ContinueTag");
var EchoTag = /* @__PURE__ */ __name(class extends Tag {
  constructor(token, remainTokens, liquid) {
    super(token, remainTokens, liquid);
    this.tokenizer.skipBlank();
    if (!this.tokenizer.end()) {
      this.value = new Value(this.tokenizer.readFilteredValue(), this.liquid);
    }
  }
  *render(ctx, emitter) {
    if (!this.value)
      return;
    const val = yield this.value.value(ctx, false);
    emitter.write(val);
  }
}, "EchoTag");
__name2(EchoTag, "EchoTag");
var LiquidTag = /* @__PURE__ */ __name(class extends Tag {
  constructor(token, remainTokens, liquid, parser) {
    super(token, remainTokens, liquid);
    const tokens = this.tokenizer.readLiquidTagTokens(this.liquid.options);
    this.templates = parser.parseTokens(tokens);
  }
  *render(ctx, emitter) {
    yield this.liquid.renderer.renderTemplates(this.templates, ctx, emitter);
  }
}, "LiquidTag");
__name2(LiquidTag, "LiquidTag");
var InlineCommentTag = /* @__PURE__ */ __name(class extends Tag {
  constructor(tagToken, remainTokens, liquid) {
    super(tagToken, remainTokens, liquid);
    if (tagToken.args.search(/\n\s*[^#\s]/g) !== -1) {
      throw new Error("every line of an inline comment must start with a '#' character");
    }
  }
  render() {
  }
}, "InlineCommentTag");
__name2(InlineCommentTag, "InlineCommentTag");
var tags = {
  assign: AssignTag,
  "for": ForTag,
  capture: CaptureTag,
  "case": CaseTag,
  comment: CommentTag,
  include: IncludeTag,
  render: RenderTag,
  decrement: DecrementTag,
  increment: IncrementTag,
  cycle: CycleTag,
  "if": IfTag,
  layout: LayoutTag,
  block: BlockTag,
  raw: RawTag,
  tablerow: TablerowTag,
  unless: UnlessTag,
  "break": BreakTag,
  "continue": ContinueTag,
  echo: EchoTag,
  liquid: LiquidTag,
  "#": InlineCommentTag
};
var Liquid = /* @__PURE__ */ __name(class {
  constructor(opts = {}) {
    this.renderer = new Render();
    this.filters = {};
    this.tags = {};
    this.options = normalize(opts);
    this.parser = new Parser(this);
    forOwn(tags, (conf, name) => this.registerTag(name, conf));
    forOwn(filters, (handler, name) => this.registerFilter(name, handler));
  }
  parse(html, filepath) {
    const parser = new Parser(this);
    return parser.parse(html, filepath);
  }
  _render(tpl, scope, renderOptions) {
    const ctx = scope instanceof Context ? scope : new Context(scope, this.options, renderOptions);
    return this.renderer.renderTemplates(tpl, ctx);
  }
  render(tpl, scope, renderOptions) {
    return __awaiter(this, void 0, void 0, function* () {
      return toPromise(this._render(tpl, scope, Object.assign(Object.assign({}, renderOptions), { sync: false })));
    });
  }
  renderSync(tpl, scope, renderOptions) {
    return toValueSync(this._render(tpl, scope, Object.assign(Object.assign({}, renderOptions), { sync: true })));
  }
  renderToNodeStream(tpl, scope, renderOptions = {}) {
    const ctx = new Context(scope, this.options, renderOptions);
    return this.renderer.renderTemplatesToNodeStream(tpl, ctx);
  }
  _parseAndRender(html, scope, renderOptions) {
    const tpl = this.parse(html);
    return this._render(tpl, scope, renderOptions);
  }
  parseAndRender(html, scope, renderOptions) {
    return __awaiter(this, void 0, void 0, function* () {
      return toPromise(this._parseAndRender(html, scope, Object.assign(Object.assign({}, renderOptions), { sync: false })));
    });
  }
  parseAndRenderSync(html, scope, renderOptions) {
    return toValueSync(this._parseAndRender(html, scope, Object.assign(Object.assign({}, renderOptions), { sync: true })));
  }
  _parsePartialFile(file, sync, currentFile) {
    return new Parser(this).parseFile(file, sync, LookupType.Partials, currentFile);
  }
  _parseLayoutFile(file, sync, currentFile) {
    return new Parser(this).parseFile(file, sync, LookupType.Layouts, currentFile);
  }
  _parseFile(file, sync, lookupType, currentFile) {
    return new Parser(this).parseFile(file, sync, lookupType, currentFile);
  }
  parseFile(file, lookupType) {
    return __awaiter(this, void 0, void 0, function* () {
      return toPromise(new Parser(this).parseFile(file, false, lookupType));
    });
  }
  parseFileSync(file, lookupType) {
    return toValueSync(new Parser(this).parseFile(file, true, lookupType));
  }
  *_renderFile(file, ctx, renderFileOptions) {
    const templates = yield this._parseFile(file, renderFileOptions.sync, renderFileOptions.lookupType);
    return yield this._render(templates, ctx, renderFileOptions);
  }
  renderFile(file, ctx, renderFileOptions) {
    return __awaiter(this, void 0, void 0, function* () {
      return toPromise(this._renderFile(file, ctx, Object.assign(Object.assign({}, renderFileOptions), { sync: false })));
    });
  }
  renderFileSync(file, ctx, renderFileOptions) {
    return toValueSync(this._renderFile(file, ctx, Object.assign(Object.assign({}, renderFileOptions), { sync: true })));
  }
  renderFileToNodeStream(file, scope, renderOptions) {
    return __awaiter(this, void 0, void 0, function* () {
      const templates = yield this.parseFile(file);
      return this.renderToNodeStream(templates, scope, renderOptions);
    });
  }
  _evalValue(str, scope) {
    const value = new Value(str, this);
    const ctx = scope instanceof Context ? scope : new Context(scope, this.options);
    return value.value(ctx);
  }
  evalValue(str, scope) {
    return __awaiter(this, void 0, void 0, function* () {
      return toPromise(this._evalValue(str, scope));
    });
  }
  evalValueSync(str, scope) {
    return toValueSync(this._evalValue(str, scope));
  }
  registerFilter(name, filter) {
    this.filters[name] = filter;
  }
  registerTag(name, tag) {
    this.tags[name] = isFunction(tag) ? tag : createTagClass(tag);
  }
  plugin(plugin) {
    return plugin.call(this, Liquid);
  }
  express() {
    const self = this;
    let firstCall = true;
    return function(filePath, ctx, callback) {
      if (firstCall) {
        firstCall = false;
        const dirs = normalizeDirectoryList(this.root);
        self.options.root.unshift(...dirs);
        self.options.layouts.unshift(...dirs);
        self.options.partials.unshift(...dirs);
      }
      self.renderFile(filePath, ctx).then((html) => callback(null, html), callback);
    };
  }
}, "Liquid");
__name2(Liquid, "Liquid");
async function onRequest2(context) {
  const engine = new Liquid();
  const template = `
    <h3>Hello {{ name | capitalize }}</h3>
     <p>You are connected using the browser:  {{ foo }}.</p>
     `;
  const userAgent = context.request.headers.get("User-Agent");
  try {
    const html = await engine.parseAndRender(template, { name: "zephan", foo: userAgent });
    return new Response(html, {
      headers: {
        "Content-Type": "text/html"
      }
    });
  } catch (e) {
    return new Response(`error: ${e}`, {
      status: 500,
      headers: {
        "Content-Type": "text/plain"
      }
    });
  }
}
__name(onRequest2, "onRequest2");
__name2(onRequest2, "onRequest");
var routes = [
  {
    routePath: "/dynamic-display",
    mountPath: "/",
    method: "",
    middlewares: [],
    modules: [onRequest]
  },
  {
    routePath: "/hello-liquid",
    mountPath: "/",
    method: "",
    middlewares: [],
    modules: [onRequest2]
  }
];
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
__name(lexer, "lexer");
__name2(lexer, "lexer");
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = /* @__PURE__ */ __name2(function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  }, "tryConsume");
  var mustConsume = /* @__PURE__ */ __name2(function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  }, "mustConsume");
  var consumeText = /* @__PURE__ */ __name2(function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  }, "consumeText");
  var isSafe = /* @__PURE__ */ __name2(function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  }, "isSafe");
  var safePattern = /* @__PURE__ */ __name2(function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  }, "safePattern");
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
__name(parse, "parse");
__name2(parse, "parse");
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
__name(match, "match");
__name2(match, "match");
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = /* @__PURE__ */ __name2(function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    }, "_loop_1");
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path, index, params };
  };
}
__name(regexpToFunction, "regexpToFunction");
__name2(regexpToFunction, "regexpToFunction");
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
__name(escapeString, "escapeString");
__name2(escapeString, "escapeString");
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
__name(flags, "flags");
__name2(flags, "flags");
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }
  return path;
}
__name(regexpToRegexp, "regexpToRegexp");
__name2(regexpToRegexp, "regexpToRegexp");
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
__name(arrayToRegexp, "arrayToRegexp");
__name2(arrayToRegexp, "arrayToRegexp");
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
__name(stringToRegexp, "stringToRegexp");
__name2(stringToRegexp, "stringToRegexp");
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
__name(tokensToRegexp, "tokensToRegexp");
__name2(tokensToRegexp, "tokensToRegexp");
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}
__name(pathToRegexp, "pathToRegexp");
__name2(pathToRegexp, "pathToRegexp");
var escapeRegex2 = /[.+?^${}()|[\]\\]/g;
function* executeRequest(request) {
  const requestPath = new URL(request.url).pathname;
  for (const route of [...routes].reverse()) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex2, "\\$&"), {
      end: false
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex2, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult) {
      for (const handler of route.middlewares.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: mountMatchResult.path
        };
      }
    }
  }
  for (const route of routes) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex2, "\\$&"), {
      end: true
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex2, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult && route.modules.length) {
      for (const handler of route.modules.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: matchResult.path
        };
      }
      break;
    }
  }
}
__name(executeRequest, "executeRequest");
__name2(executeRequest, "executeRequest");
var pages_template_worker_default = {
  async fetch(originalRequest, env, workerContext) {
    let request = originalRequest;
    const handlerIterator = executeRequest(request);
    let data = {};
    let isFailOpen = false;
    const next = /* @__PURE__ */ __name2(async (input, init) => {
      if (input !== void 0) {
        let url = input;
        if (typeof input === "string") {
          url = new URL(input, request.url).toString();
        }
        request = new Request(url, init);
      }
      const result = handlerIterator.next();
      if (result.done === false) {
        const { handler, params, path } = result.value;
        const context = {
          request: new Request(request.clone()),
          functionPath: path,
          next,
          params,
          get data() {
            return data;
          },
          set data(value) {
            if (typeof value !== "object" || value === null) {
              throw new Error("context.data must be an object");
            }
            data = value;
          },
          env,
          waitUntil: workerContext.waitUntil.bind(workerContext),
          passThroughOnException: () => {
            isFailOpen = true;
          }
        };
        const response = await handler(context);
        if (!(response instanceof Response)) {
          throw new Error("Your Pages function should return a Response");
        }
        return cloneResponse(response);
      } else if ("ASSETS") {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      } else {
        const response = await fetch(request);
        return cloneResponse(response);
      }
    }, "next");
    try {
      return await next();
    } catch (error) {
      if (isFailOpen) {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      }
      throw error;
    }
  }
};
var cloneResponse = /* @__PURE__ */ __name2((response) => (
  // https://fetch.spec.whatwg.org/#null-body-status
  new Response(
    [101, 204, 205, 304].includes(response.status) ? null : response.body,
    response
  )
), "cloneResponse");
var drainBody = /* @__PURE__ */ __name2(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
__name2(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name2(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = pages_template_worker_default;
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
__name2(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
__name2(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");
__name2(__facade_invoke__, "__facade_invoke__");
var __Facade_ScheduledController__ = /* @__PURE__ */ __name(class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
}, "__Facade_ScheduledController__");
__name2(__Facade_ScheduledController__, "__Facade_ScheduledController__");
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name2(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name2(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
__name2(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
__name2(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody2 = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default2 = drainBody2;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError2(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError2(e.cause)
  };
}
__name(reduceError2, "reduceError");
var jsonError2 = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError2(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default2 = jsonError2;

// .wrangler/tmp/bundle-AqXEsp/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__2 = [
  middleware_ensure_req_body_drained_default2,
  middleware_miniflare3_json_error_default2
];
var middleware_insertion_facade_default2 = middleware_loader_entry_default;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__2 = [];
function __facade_register__2(...args) {
  __facade_middleware__2.push(...args.flat());
}
__name(__facade_register__2, "__facade_register__");
function __facade_invokeChain__2(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__2(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__2, "__facade_invokeChain__");
function __facade_invoke__2(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__2(request, env, ctx, dispatch, [
    ...__facade_middleware__2,
    finalMiddleware
  ]);
}
__name(__facade_invoke__2, "__facade_invoke__");

// .wrangler/tmp/bundle-AqXEsp/middleware-loader.entry.ts
var __Facade_ScheduledController__2 = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__2)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
__name(__Facade_ScheduledController__2, "__Facade_ScheduledController__");
function wrapExportedHandler2(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__2(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__2(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler2, "wrapExportedHandler");
function wrapWorkerEntrypoint2(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__2(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__2(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint2, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY2;
if (typeof middleware_insertion_facade_default2 === "object") {
  WRAPPED_ENTRY2 = wrapExportedHandler2(middleware_insertion_facade_default2);
} else if (typeof middleware_insertion_facade_default2 === "function") {
  WRAPPED_ENTRY2 = wrapWorkerEntrypoint2(middleware_insertion_facade_default2);
}
var middleware_loader_entry_default2 = WRAPPED_ENTRY2;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__2 as __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default2 as default
};
//# sourceMappingURL=functionsWorker-0.8106069124324029.js.map
