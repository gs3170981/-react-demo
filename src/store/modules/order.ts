const type: string = 'order'
const data: object = {
    list: [
        // {
        //     id: '',
        //     name: '',
        //     price: ''
        // }
    ]
}

export default function (
    state: object = data,
    action: any
) {
    return action.type !== type ? state : Object.assign({}, state, action.param)
}
