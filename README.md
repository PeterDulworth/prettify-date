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

console.log(prettydate.format(new Date()));
console.log(prettydate.format(new Date(new Date() - 1 * 1000)));
console.log(prettydate.format(new Date(new Date() - 2 * 1000)));
console.log(prettydate.format(new Date(new Date() - 60 * 1000)));
console.log(prettydate.format(new Date(new Date() - 2 * 60 * 1000)));
console.log(prettydate.format(new Date(new Date() - 60 * 60 * 1000)));
console.log(prettydate.format(new Date(new Date() - 2 * 60 * 60 * 1000)));
console.log(prettydate.format(new Date(new Date() - 24 * 60 * 60 * 1000)));
console.log(prettydate.format(new Date(new Date() - 2 * 24 * 60 * 60 * 1000)));
console.log(prettydate.format(new Date(new Date() - 30 * 24 * 60 * 60 * 1000)));
console.log(prettydate.format(new Date(new Date() - 2 * 30 * 24 * 60 * 60 * 1000)));
console.log(prettydate.format(new Date(new Date() - 365 * 24 * 60 * 60 * 1000)));
console.log(prettydate.format(new Date(new Date() - 2 * 365 * 24 * 60 * 60 * 1000)));
```

### Example Output:

- just now
- 1 minute ago
- 2 minutes ago
- 1 hour ago
- 2 hours ago
- yesterday
- 2 days ago
- 1 month ago
- 2 months ago
- 1 year ago
- 2 years ago
