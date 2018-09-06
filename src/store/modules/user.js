const type = 'user'
const data = {
    name: ''
}

export default function (state = data, action) {
    return action.type !== type ? state : Object.assign({}, state, action.param)
}
