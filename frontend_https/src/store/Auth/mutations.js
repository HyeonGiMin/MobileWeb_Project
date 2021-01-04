import * as types from './multation_types'

export default {
    [types.UID] (state,uid){
        state.uid=uid
    },
    [types.ERROR_STATE] (state,errorState){
        state.errotState=errorState
    },
    [types.IS_AUTH] (state,isAuth){
        state.isAuth=isAuth
    },
    [types.JWT] (state,jwt){
        state.jwt=jwt
    },
    [types.EMAIL] (state,email){
        state.email=email
    }
}