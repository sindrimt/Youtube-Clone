export const formatTime = (time: string | any) => {
  // Reassignment of time gotten from API
  time = new Date(time.slice(0, -1));

  // Some constants for time measurements
  const msToHours = 1000 * 3600;

  const hours = (Date.now() - time) / msToHours;

  const minutes = msToHours / 60;
  const day = 24;
  const week = 168;
  const month = 730;
  const year = 8765;

  // Converts time from upload to now in a nice format
  if (hours < 1) {
    time = Math.floor((Date.now() - time) / minutes);
    time += time > 1 ? " minutter" : " minutt";
  } else if (hours >= 1 && hours < 24) {
    time = Math.floor((Date.now() - time) / msToHours);
    time += time > 1 ? " timer" : " time";
  } else if (hours >= day && hours < week) {
    time = Math.floor((Date.now() - time) / (msToHours * day)) + " døgn";
  } else if (hours >= week && hours < month) {
    time = Math.floor((Date.now() - time) / (msToHours * week));
    time += time > 1 ? " uker" : " uke";
  } else if (hours >= month && hours < year) {
    time = Math.floor((Date.now() - time) / (msToHours * month));
    time += time > 1 ? " måneder" : " måned";
  } else {
    time = Math.floor((Date.now() - time) / (msToHours * year)) + " år";
  }
  return time;
};

export const formatViews = (views: number | any) => {
  var unitlist = ["", "k", "mill."];
  let sign = Math.sign(views);
  let unit = 0;
  while (Math.abs(views) > 1000) {
    unit = unit + 1;
    views = Math.floor(Math.abs(views) / 100) / 10;
  }
  // Removes the decimal if unit is K
  if (unitlist[unit] == "k") {
    views = Math.trunc(views) + "k";
  } else {
    views = sign * views + " " + unitlist[unit];
    // Converts to string and replaces . with ,
    views = views.toString().replace(".", ",");
  }
  return views;
};

export const convertTime = (dur: any) => {
  if (dur.includes("D")) {
    return "> 24h";
  }
  let match = dur.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

  match = match?.slice(1).map(function (x: any) {
    if (x != null) {
      return x.replace(/\D/, "");
    }
  });

  const hours = parseInt(match[0]) || 0;
  const minutes = parseInt(match[1]) || 0;
  const seconds = parseInt(match[2]) || 0;

  const secs = hours * 3600 + minutes * 60 + seconds;

  if (secs >= 3600) {
    let shortTime = new Date(secs * 1000).toISOString().substr(11, 8);
    let shortTimeSplit = shortTime.split(":");

    return `${shortTimeSplit[0].substring(1)}:${shortTimeSplit[1]}:${shortTimeSplit[2]}`;
  } else {
    let shortTime = new Date(secs * 1000).toISOString().substr(14, 5);
    let shortTimeSplit = shortTime.split(":");

    if (parseInt(shortTimeSplit[0]) < 10) {
      return `${shortTimeSplit[0].substring(1)}:${shortTimeSplit[1]}`;
    } else {
      return new Date(secs * 1000).toISOString().substr(14, 5);
    }
  }
};
