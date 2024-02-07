import React from "react";
import s from './Post.module.css'

type PostType = {
    id:string | number
    message:string
    likeCount:number | undefined
}

export const Post = (props:PostType) => {
    return (
        <div className={s.item}>
            <img alt="it is your post" src="https://i.pinimg.com/474x/fc/c2/d4/fcc2d40025a84c9bf357b58898215556.jpg">
            </img>
            {props.message}
            <div>
                <span>{props.likeCount} </span>
            </div>
        </div>
    )
}
