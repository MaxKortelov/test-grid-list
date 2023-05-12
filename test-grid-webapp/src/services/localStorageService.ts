export function setCookie(name: string, info: string, date?: Date) {
  if (!date) {
    const d = new Date();
    d.setHours(d.getHours() + 1);
    date = d;
  }
  document.cookie = `${name}=${info}; expires=${date}`;
}

export function getCookie(cName: string) {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded.split("; ");
  let res;
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  });
  return res;
}
