import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {ProfileStateTypeWithCallback} from "../../../redux/state";


export const MyPosts = (props: ProfileStateTypeWithCallback) => {
    let postsElement = props.postsData.map(
        (el) => <Post message={el.message} likeCount={el.likesCount} id={el.id}/>
    )

    let newPostEl = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        debugger
        props.dispatch(addPostAC())
    }
    const onPostChange = () => {
        if (newPostEl.current !== null) {
        let text = newPostEl.current.value
            // props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText:text})
            props.dispatch(updateNewPostTextAC(text))
        }
    }

    return <div className={s.postsBlock}>
        <h3>Posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostEl}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>
                    Add post
                </button>
            </div>
            <div>
                <button>
                    Remove
                </button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>
}