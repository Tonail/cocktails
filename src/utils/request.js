import 'whatwg-fetch'

function checkStatus(response) {
  // console.log('check status', response.json())
  debugger
  if (response.status >= 200 && response.status < 300) {
    return response.json()
  } else if (response.status === 402 || response.status === 409) {
    return response
  } else if (response.status === 406) {
    return response.json()
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

/**
 * Requests a URL, returning a promise
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           The response data
 */
export default async function request(url, options) {
  let merged = Object.assign(
    {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    },
    options
  )
  const response = await fetch(url, merged)
  const checkedRes = await checkStatus(response)
  return checkedRes
}