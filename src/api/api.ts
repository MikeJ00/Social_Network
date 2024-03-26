import axios from "axios";

const baseUrl = "https://social-network.samuraijs.com/api/1.0/"

let instance = axios.create({
    baseURL: baseUrl,
    withCredentials: true
})
export const userAPI = {
    getUsers(currentPage: number, totalUsersCount: number) {
        debugger
        return instance.get(`users?page=${currentPage}&count=${totalUsersCount}`)
            .then(res => {
                debugger
                return res.data
            })
    },
    setUsersProfile(userId: number) {
        console.warn("Obsolute method.Please profileApi object")
        return profileAPI.setUsersProfile(userId)
    },
    deleteFollow(id: number) {
        return instance.delete(`follow/${id}`)
    },
    addFollow(id: number) {
        return instance.post(`follow/${id}`)
    },
}
export const securityAPI = {
    getCaptcha() {
        return instance.get(`/security/get-captcha-url`)
    }
}
export const profileAPI = {
    setUsersProfile(userId: number) {
        debugger
        return instance.get(`profile/` + userId)
            .then(res => {
                console.log(res.data)
                return res
            })
    },
    getStatusOfUser(userId: number) {
        debugger
        return instance.get(`/profile/status/${userId}`)
            .then(res => {
                debugger
                console.log(res.data)
                return res
            })
    },
    updateStatus(status: string) {
        return instance.put(`/profile/status`, {status: status})
    },
    savePhoto(photoFile: string) {
        debugger
        let formData = new FormData()
        formData.append("image", photoFile)
        return instance.put(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
}
export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(res => {
                return res
            })
    },
    loginMe(email: string, password: string, rememberMe: boolean, captcha = null) {
        return instance.post(`/auth/login`, {email, password, rememberMe, captcha})
    },
    logOut() {
        return instance.delete(`/auth/login`)
    }
}

// axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
//     {withCredentials: true})
//     .then(res => {
//         debugger
//         console.log(res.data)
//         if (res.data.resultCode === 0) {
//             props.unFollowClick(u.id)
//         }
// axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
//     withCredentials: true
// })
//     .then(res => {
//         debugger
//         console.log(res.data)
//         if (res.data.resultCode === 0) {
//             let {id, email, Login} = res.data.data
//             this.props.setAuthUserDataAC(id, email, Login)
//         }
//     })
// }

// axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
//     .then(res=>{
//         this.props.setUserProfile(res.data)
//         debugger
//         console.log(res.data)
//     })
// }

