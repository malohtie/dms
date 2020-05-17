const prefixUrl = '/v1/auth/'

export default {
    //login and setup user state
    login({commit}, payload) {
        return new Promise((resolve, reject) => {
            this.$http.post(prefixUrl + 'login', {
                'username': payload.username,
                'password': payload.password,
                'remember': payload.remember
            }).then(({data}) => {
                if (data.status) {
                    commit('setUserData', data.user)
                    resolve({'status': true})
                }
                reject({'message': 'Check your credentials and try again'})
            }).catch((error) => {
                reject({'message': error.message})
            })
        })
    },
    //logout
    logout({commit}) {
        return new Promise((resolve) => {
            this.$http.post(prefixUrl + 'logout').finally(() => {
                commit('clearUserData')
                resolve()
            })
        })
    },
    //check if logged
    check({commit}) {
        return new Promise((resolve, reject) => {
            this.$http.get(prefixUrl + 'user').then(({data}) => {
                commit('setUserData', data)
                resolve();
            }).catch(() => {
                commit('clearUserData')
                reject()
            })

        })
    }
}
