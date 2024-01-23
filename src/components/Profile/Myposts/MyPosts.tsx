import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ProfileType} from "../../../redux/state";

export const MyPosts = (props: ProfileType) => {


    let postsElement = props.postsData.map(
        (el) => <Post message={el.message} likeCount={el.likesCount} id={el.id}/>
    )
    return <div className={s.postsBlock}>
        <h3>Posts</h3>
        <div>
            <div>
                <textarea>
            </textarea>
            </div>
            <div>
                <button>
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
            {postsElement}
        </div>
    </div>
}