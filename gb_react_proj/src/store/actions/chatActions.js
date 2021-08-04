export const CHAT_ADD_MSG = 'CHAT_ADD_MSG'
export const CHAT_DELETE_CHAT = 'CHAT_DELETE_CHAT'

export const chatAddMsg = (data) => ({
    type: CHAT_ADD_MSG,
    payload: {
        data
    }

})
export const deleteChat = (data) => ({
    type: CHAT_DELETE_CHAT,
    payload: {
        data
    }

})
