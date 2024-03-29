# prettify-date

> Convert a javascript Date object to a human readable string.

[![npm package](https://img.shields.io/npm/v/prettify-date.svg?color=1497ff)](npm)
[![npm downloads](https://img.shields.io/npm/dw/prettify-date.svg?color=3d138d)](npm)

If in last 1 minute return `just now`.

If in last 1 hour return number of minutes e.g. `10 min`.

If in last 24 hrs return number of hours `4 hrs`.

Otherwise return in format: Month Day at Time AM/PM

e.g. `November 15th at 10:35 AM`.

Note: date must be a date object (new Date()).

## Install

```
npm install --save prettify-date
```

## Use

```javascript
const prettifyDate = require('prettify-date');

const secToMs = ms => 1000 * ms;
const minToMs = m => 60 * secToMs(m);
const hrToMs = hr => 60 * minToMs(hr);
const dayToMs = d => 24 * hrToMs(d);
const secAgo = s => new Date(new Date() - secToMs(s));
const minAgo = m => new Date(new Date() - minToMs(m));
const hrAgo = hr => new Date(new Date() - hrToMs(hr));
const dayAgo = d => new Date(new Date() - dayToMs(d));

console.log(prettifyDate.format(secAgo(0)));
console.log(prettifyDate.format(secAgo(1)));
console.log(prettifyDate.format(secAgo(59)));
console.log(prettifyDate.format(minAgo(1)));
console.log(prettifyDate.format(minAgo(59)));
console.log(prettifyDate.format(hrAgo(1)));
console.log(prettifyDate.format(hrAgo(23)));
console.log(prettifyDate.format(dayAgo(1)));
console.log(prettifyDate.format(dayAgo(2)));
console.log(prettifyDate.format(dayAgo(10)));
console.log(prettifyDate.format(dayAgo(100)));
```

### Example Output:

- just now
- just now
- just now
- 1 min
- 59 mins
- 1 hr
- 23 hrs
- yesterday
- December 1 at 2:02 AM
- November 23 at 2:02 AM
- August 25 at 3:02 AM
