import 'whatwg-fetch'

export function GET(url: string) {
    let result: any = fetch(url, {
        mode: "cors",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    return result
}
export function POST(url: string, paramsObj: object) {
    let result: any = fetch(url, {
        method: 'post',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: ((obj: any) => {
            let result: any = ''
            let item: any
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