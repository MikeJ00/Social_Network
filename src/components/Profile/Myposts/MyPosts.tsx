import React, {ChangeEvent, useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {MyPostsTypeLesson43} from "../../../redux/store";


export const MyPosts = (props: MyPostsTypeLesson43) => {
    let postsElement = props.postsData.map(
        (el) => <Post message={el.message} likeCount={el.likesCount} id={el.id}/>
    )

    const onClickAddPost = () => {
        debugger
        props.addPost(props.newPostText)
    }
    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
            props.PostChange(e.currentTarget.value)
        }

    return <div className={s.postsBlock}>
        <h3>Posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onClickAddPost}>
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