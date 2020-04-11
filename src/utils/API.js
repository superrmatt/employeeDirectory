import axios from "axios";

export default {
  // Gets all users and where the api we are inputing to use
  getUsers: function() {

    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};