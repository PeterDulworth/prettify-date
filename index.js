/**
 * If in last hour: x mins e.g. 10 min
 * If in last 24 hrs: x hrs e.g. 4 hrs
 * Else: Month Day at Time AM/PM: e.g. November 15th at 10:35 AM
 *
 * Note: date must be a date object (new Date(x)).
 */
exports.format(date) = function() {
  const secondsSince = Math.floor((new Date() - date) / 1000);
  const secPerDay = 86400;
  const secPerHour = 3600;
  const secPerMin = 60;

  // time is over a day old
  if (secondsSince > secPerDay) {
    const monthOptions = {
      month: 'long',
      day: 'numeric',
    };

    const hourOptions = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };

    const monthDay = date.toLocaleString('en-US', monthOptions);
    const hrMin = date.toLocaleString('en-US', hourOptions);
    return `${monthDay} at ${hrMin}`;
  }

  // time is over an hour old
  if (secondsSince > secPerHour) {
    const hoursSince = Math.floor(secondsSince / 3600);
    return `${hoursSince} hr${hoursSince > 1 ? 's' : ''}`;
  }

  // time is over a minute old
  if (secondsSince > secPerMin) {
    const minutesSince = Math.floor(secondsSince / 60);
    return `${minutesSince} min${minutesSince > 1 ? 's' : ''}`;
  }

  // if it was posted in the last minute
  else {
    return 'just now';
  }
};
