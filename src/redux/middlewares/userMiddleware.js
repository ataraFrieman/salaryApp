import { actions } from '../actions/action';
import { HttpKnowMeUser } from '../../config/axios'
import { getDataFromCookie } from '../../application/cookie'
import keys from '../../config/env/keys';

export const getKnowMeUser = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_KNOW_ME_USER') {
        return new Promise(async (resolve, reject) => {
            // if (getDataFromCookie(keys.JWT)) {
                HttpKnowMeUser.get(`/userInKnowMe`)
                    .then(res => {
                        dispatch(actions.setUser(res.data))
                        resolve()
                    })
                    .catch(() => {
                        reject()
                    })
        }) 
       
    };
    return next(action);
}
