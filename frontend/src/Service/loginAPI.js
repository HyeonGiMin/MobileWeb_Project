import axios from 'axios'

const getUserInfo = (uid, password) => {
    return axios.post('/api/user/login', {
        params: {
            'uid': uid,
            'password': password
        }
    })
}



export default {
    async login (uid, password) {
        try {

            const getUserInfoPromise = await getUserInfo(uid, password)
            const [userInfoResponse] = await Promise.all([getUserInfoPromise])
            axios.defaults.headers.common['Authorization'] = userInfoResponse.data.jwt // Json Web Token을 request header에 넣는다
            if (userInfoResponse.data.length === 0) return 'noAuth'
            return userInfoResponse
        } catch (err) {
            console.error(err)
        }
    }
}