export const PROFILE_SET_DATA = 'PROFILE_SET_DATA'

export const profileSetData = (name, age) => ({
    type: PROFILE_SET_DATA,
    payload: {
        name,
        age
    }
})