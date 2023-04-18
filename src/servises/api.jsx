import axios from "axios";

export const instance = axios.create({
  baseURL: "https://64399a0d90cd4ba563ea4cb1.mockapi.io",
});
export const getUsers = async () => {
  try {
    const { users } = await instance.get("/users");
    console.log("getUsers ~ users:", users);
    return users;
  } catch (error) {
    throw error;
  }
    
};