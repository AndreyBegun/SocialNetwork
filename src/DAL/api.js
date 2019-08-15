
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
    }
}

export const profileApi = {
  getProfile(userId) {
    return instence.get(`profile/${userId}`)
      .then(response => {
        return response
      });
  }
}