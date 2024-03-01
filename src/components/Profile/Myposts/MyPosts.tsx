import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {MyPostsTypeLesson43} from "../../../redux/store";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


// export class MyPosts extends React.PureComponent<MyPostsTypeLesson43> {
// componentDidMount() {
//     setTimeout(()=>{
//         this.setState({a:12})
//     },3000)
// }
//
// shouldComponentUpdate(nextProps: Readonly<MyPostsTypeLesson43>, nextState: Readonly<{}>, nextContext: any): boolean {
//     return nextProps != this.props || nextState != this.state
// }
export const MyPosts = React.memo((props: MyPostsTypeLesson43) => {
    console.log("render MyPosts")
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
    const addNewPost = (values: any) => {
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
})

let maxLength10 = maxLengthCreator(10)
const AddPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name="newPostText"
                       placeholder={"add New Post"}
                       validate={[required, maxLength10]}/>
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
    form: 'addPostForm'
})(AddPostForm)