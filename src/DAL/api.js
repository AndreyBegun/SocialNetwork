
import instence from "./axios-instance";

export const usersApi = {

  getUsers(currentPage, pageSize) {
    return instence.get(`users?count=${pageSize}&page=${currentPage}`)
      .then(response => {
        return response.data;
      });
  },

  follow(userId) {
    return instence.post(`follow/${userId}`)
  },

  unfollow(userId) {
    return instence.delete(`follow/${userId}`)                 
    },
    getProfile(userId) {
      console.warn('Obsolete method. Please pfileApi object.')
      return profileApi.getProfile(userId)
      
    }
 
}

export const profileApi = {
  getProfile(userId) {
    return instence.get(`profile/${userId}`)
  },
  getStatus(userId) {
    return instence.get(`profile/status/${userId}`)
  },
  updateStatus(status){
    return instence.put(`profile/status`, {status: status})
  }

}
export const authApi = {

  login(email, password, rememberMe) {
    return instence.post('auth/login', {
      email: email,
      password: password,
      rememberMe: rememberMe
    })
  },
  me(){
    return instence.get('auth/me')
  },
  logout(){
    return instence.post('auth/logout')
  }
}