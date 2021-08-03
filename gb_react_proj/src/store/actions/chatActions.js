export const CHAT_ADD_MSG = 'CHAT_ADD_MSG'

export const chatAddMsg = (id, author, text) => ({
    type: CHAT_ADD_MSG,
    payload: {
        id,
        author,
        text
    }

})