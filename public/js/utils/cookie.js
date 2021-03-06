export function getCookie(cookieName) {
    const cookieString = document.cookie.split(';').filter((item) => item.includes(cookieName))[0];
    const cookieValue = cookieString.split("=")[1];
    return cookieValue;
}

export function setCookie(cookieName, cookieValue, expireDay) {
  const d = new Date();
  d.setTime(d.getTime() + expireDay * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  const domain = "path=/";
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";" + domain;
}

export function checkCookie(cookieName) {
  if (
    document.cookie
      .split(";")
      .some((item) => item.trim().startsWith(cookieName + "="))
  ) {
    return true;
  }
  return false;
}

