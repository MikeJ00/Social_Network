import {addPostAC, deletePostAC, profileReducer, setStatusAC} from "./profile-reducer";

let startState = {
    postsData: [
        {id: "1", message: "Hi, how are you, man?", likesCount: 2},
        {id: "2", message: "Okay", likesCount: 9},
        {id: "3", message: "ZZZZZ", likesCount: 18},
    ],
    profile: null,
    status: "Hello guys"
}
it('new post should be added', () => {
    //1. test data
    //2.add action
    let action = addPostAC("new text was add")
    let newState = profileReducer(startState, action)
    //3.expected
    expect(newState.postsData.length).toBe(4)
    expect(newState.postsData[3].message).toBe("new text was add")
})
it('status should be change', () => {
    //1. test data

    //2.add action
    let action = setStatusAC("ws")
    let newState = profileReducer(startState, action)
    //3.expected
    expect(newState.status).toBe("ws")
})
it('length should be decrement', () => {
    //1. test data

    //2.add action
    let action = deletePostAC(1)
    let newState = profileReducer(startState, action)
    //3.expected
    expect(newState.postsData.length).toBe(2)
    expect(newState.postsData[0].message).toBe("Okay")
})
