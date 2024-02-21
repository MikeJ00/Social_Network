import React, {ChangeEvent, useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {MyPostsTypeLesson43} from "../../../redux/store";
import {Field, reduxForm} from "redux-form";


export const MyPosts = (props: MyPostsTypeLesson43) => {
    let postsElement = props.postsData.map(
        (el) => <Post message={el.message} likeCount={el.likesCount} id={el.id} key={el.id}/>
    )

    // const onClickAddPost = () => {
    //     debugger
    //     props.addPost(props.newPostText)
    // }
    // const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     props.PostChange(e.currentTarget.value)
    // }
    const addNewPost = (values:any) => {
        console.log(values.newPostText)
       props.addPost(values.newPostText)
    }

    return <div className={s.postsBlock}>
        <h3>Posts</h3>
        <div>
            <ReduxAddPostForm onSubmit={addNewPost}/>
        </div>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>
}
const AddPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name="newPostText" placeholder={"add New Post"} />
                {/*<textarea onChange={onPostChange}*/}
                {/*          value={props.newPostText}/>*/}
            </div>
            <div>
                <button>
                    Send new post
                </button>
            </div>
        </form>
    )
}

const ReduxAddPostForm = reduxForm({
    form:'addPostForm'
})(AddPostForm)