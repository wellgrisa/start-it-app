export function getFormData (refs) {
  let payload = {};

  for (let ref in refs) {
    if (!refs[ref].getValue) continue;

    payload[ref] = refs[ref].getValue();
  }

  return payload;
}

export function isFormFullFilled (refs) {
  for (let ref in refs) {
    if (refs[ref].getValue && !refs[ref].getValue()) return false;
  }
  return true;
}

export function getUser(){
  return JSON.parse(localStorage.user);
}

export function setUser(user){
  return localStorage.setItem('user', JSON.stringify(user));
}
