const prettifyDate = require('./index');

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
