# prettify-date

Convert a javascript Date object to a human readable string.

If in last 1 minute return `'just now'`.

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

const str = prettifyDate.format(new Date().getTime());
```
