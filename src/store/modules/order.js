const type = 'order'
const data = {
    list: [
        // {
        //     id: '',
        //     name: '',
        //     price: ''
        // }
    ]
}

export default function (state = data, action) {
    return action.type !== type ? state : Object.assign({}, state, action.param)
}
