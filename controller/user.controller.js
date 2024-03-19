const { response, request } = require ('express');

const usersGet = (req = request, res = response)=>{
    const {name, email, password} = req.query;
    res.json({
        name,
        email,
        password,
        msg: 'succesfully '
    });
}

const usersPost = (req = request, res = response)=>{
    const {name, age}= req.body;

    res.json({

        msg: 'succesfully post',
        name,
        age
    });

}

module.exports = {
    usersGet,
    usersPost
}