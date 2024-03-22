import axios from "axios";


async function getData() {
    const url = "http://localhost:4100/emps";
    return axios.get(url).then(responseData => responseData.data);
}

export {getData};