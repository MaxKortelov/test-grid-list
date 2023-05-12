export function setCookie(name: string, info: string, date?: Date): void {
  if (!date) {
    const d = new Date();
    d.setHours(d.getHours() + 6);
    date = d;
  }
  document.cookie = `${name}=${info}; path=/; expires=${date}`;
}

export function getCookie(cName: string): string {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded.split("; ");
  let res = "";
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  });
  return res;
}

export function eraseCookie(name: string): void {
  document.cookie = name + "=; path=/; Max-Age=-99999";
}
