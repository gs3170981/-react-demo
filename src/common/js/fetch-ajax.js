import 'whatwg-fetch'

export function GET(url) {
    let result = fetch(url, {
        credentails: 'include',
        mode: "cors",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    return result
}
export function POST(url, paramsObj) {
    var result = fetch(url, {
        method: 'post',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: ((obj) => {
            var result = ''
            var item
            for (item in obj) {
                result += '&' + item + '=' + encodeURIComponent(obj[item])
            }
            if (result) {
                result = result.slice(1)
            }
            return result
        })(paramsObj)
    })
    return result
}