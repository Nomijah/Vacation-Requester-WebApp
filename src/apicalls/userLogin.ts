import axios from 'axios';

const userLogin = (loginCredentials : {email:string, password:string}) => {
    axios.post(`https://localhost:7016/Authentication/Login`, 
    JSON.stringify(loginCredentials), 
    {headers:{"Content-Type": "application/json",},
    withCredentials : true,})
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
            console.log(err);
        })
    };

    export default userLogin;