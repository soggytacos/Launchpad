export const generateHours = () => {
  return Array.from(Array(24).keys()).map(v => {
    v = ''+v;
    if (v.length === 1) v = `0${v}`;
    return v;
  })
}

export const generateMinutes = () => {
  return Array.from(Array(60).keys()).map(v => {
    v = ''+v;
    if (v.length === 1) v = `0${v}`;
    return v;
  })
}
