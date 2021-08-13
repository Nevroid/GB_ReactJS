export const PROFILE_SET_DATA = 'PROFILE_SET_DATA'
export const PROFILE_SET_ISAUTHED = 'PROFILE_SET_ISAUTHED'

export const profileSetData = (name, age) => ({
    type: PROFILE_SET_DATA,
    payload: {
        name,
        age
    }
})

export const profileSetIsAuthed = (isAuthed) => ({
    type: PROFILE_SET_ISAUTHED,
    payload: {
        isAuthed
    }
})