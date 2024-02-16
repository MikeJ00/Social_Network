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
        debugger
        return instance.get(`profile/` + userId)
            .then(res => {
                console.log(res.data)
                return res
            })
    },
    authMe() {
        return instance.get(`auth/me`)
            .then(res => {
                return res.data
            })
    },
    deleteFollow(id: number) {
        return instance.delete(`follow/${id}`)
    },
    addFollow(id: number) {
        return instance.post(`follow/${id}`)
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
//             let {id, email, login} = res.data.data
//             this.props.setAuthUserDataAC(id, email, login)
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

