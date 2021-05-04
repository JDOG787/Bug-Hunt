const axios = require("axios");

module.exports = {
    Query: {
        user: () => "JDOG787",
        login: async (_, {code}) => {
            const res = await axios.post(`https://github.com/login/oauth/access_token?client_secret=&client_id=f0fd634792e80e1960b0&code=${code}`)
            const token = res.data.split("&")[0].replace("access_token=", "");

            const userInfo = await axios.get("https://api.github.com/user", {
                headers: {
                  "Authorization": `token ${token}`
                }
            })

            console.log(userInfo);
            return "Hello"
        }
    }
};