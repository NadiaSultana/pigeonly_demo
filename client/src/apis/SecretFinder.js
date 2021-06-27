import axios from "axios";

export default axios.create({
    baseURL:"http://localhost:5000/api/secret",
    method: "GET",
    headers: { 'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.token }
});
