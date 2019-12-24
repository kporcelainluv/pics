import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 6cc9f8f58fbf3cacfd8dbe8f1812de9d6201f8670c3433cae932f3d8c25ac0d4"
  }
});
