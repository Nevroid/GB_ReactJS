export const CHAT_ADD_MSG = 'CHAT_ADD_MSG'

export const chatAddMsg = (data) => ({
    type: CHAT_ADD_MSG,
    payload: {
        data
    }

})