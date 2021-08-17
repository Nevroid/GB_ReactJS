import profileReducer from '../store/reducers/profileReducer'



describe('Profile age-name set test', () => {
  it('should return object with "age" & "name" updated', () => {
    const initialState = {      
      name: 'John Doe',
      age: 100      
    }
    const action = {
      payload: {
        name: 'Henry VIII',
        age: 55,
      },
      type: 'PROFILE_SET_DATA'
    }
    const expectation = {      
      name: 'Henry VIII',
      age: 55
    }
    expect(profileReducer(initialState, action)).toEqual(expectation);

  })
})

describe('Profile "isAuthed" flag change', () => {
  it('should return object with "isAuthed" flag "true"', () => {
    const initialState = {
      isAuthed: false
    }
    const action = {
      payload: {
        isAuthed: true
      },
      type: 'PROFILE_SET_ISAUTHED'
    }
    const expectation = {
      isAuthed: true
    }
    expect(profileReducer(initialState, action)).toEqual(expectation)
  })
})