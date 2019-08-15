
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
      return instence.get(`profile/${userId}`)
      
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