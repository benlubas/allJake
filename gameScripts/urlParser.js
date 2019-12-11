const urlParser = url => {
  const vars = url.substr(url.indexOf("?") + 1).split("&");
  let jsonStr = "{";
  for (let l = 0; l < vars.length; l++) {
    const v = vars[l];
    // prettier-ignore
    jsonStr += `"${v.substr(0, v.indexOf("="))}":"${v.substr(v.indexOf("=") + 1)}"`;
    if (l < vars.length - 1) jsonStr += ",";
  }
  jsonStr += "}";
  return JSON.parse(jsonStr);
};
