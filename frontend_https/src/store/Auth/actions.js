import {UID, IS_AUTH, ERROR_STATE,JWT,EMAIL} from './multation_types'
import api from '../../Service'



let setJWT = ({commit}, data) => {
    commit(JWT, data)

}
let setEMAIL = ({commit}, data) => {
    commit(EMAIL, data)

}

let setUID = ({commit}, data) => {
    commit(UID, data)

}
let setErrorState = ({commit}, data) => {
    commit(ERROR_STATE, data)
}

let setIsAuth = ({commit}, data) => {
    commit(IS_AUTH, data)
}

// 백엔드에서 반환한 결과값을 가지고 로그인 성공 실패 여부를 vuex에 넣어준다.
let processResponse = (store, loginResponse) => {
    switch (loginResponse.data.status) {
        case 500:
            setErrorState(store, 'Wrong ID or Password')
            setIsAuth(store, false)
            break
        default:
            setUID(store, loginResponse.data.uid)
            setErrorState(store, '')
            setEMAIL(store,loginResponse.data.email)
            setJWT(store,loginResponse.data.jwt);
            setIsAuth(store, true)
    }
}

export default {
    async login (store, {uid, password}) {
        let loginResponse = await api.login(uid, password)
        processResponse(store, loginResponse)
        return store.getters.getIsAuth  // 로그인 결과를 리턴한다
    }
}