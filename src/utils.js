export function login({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'ayan' && password === 'briones') {
        resolve()
      } else {
        reject()
      }
    }, 1000)
  })
}
