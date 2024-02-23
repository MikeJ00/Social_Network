import React from "react";
import styles from './FormsControls.module.css'

// type FormContolType = {
//     input:string
//     label:string
//     type:string
//     children:React.ReactNode
//     meta:{
//         touched:boolean
//         error:string
//         warning:string
//     }
// }
const FormControl = (props:any)  => {
    const {input, meta,children, ...restProps} = props
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            <span>
                {hasError && <span>{meta.error}</span>}
            </span>
        </div>
    )
}
export const Textarea = (props: any) => {
    const {input, meta,child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}
export const Input = (props: any) => {
    const {input, meta,child, ...restProps} = props;
    return <FormControl {...props}> <input {...input} {...restProps} /></FormControl>
}

// export const Textarea = ({input, meta, ...props}) => {
//     debugger
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
//             <div>
//                 <textarea {...props} {...input}/>
//             </div>
//             <span>
//                 {hasError && <span>{meta.error}</span>}
//             </span>
//         </div>
//     )
// }

// export const Input = ({input, meta, ...props}) => {
//     debugger
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
//             <div>
//                 <input {...props} {...input}/>
//             </div>
//             <span>
//                 {hasError && <span>{meta.error}</span>}
//             </span>
//         </div>
//     )
// }