const { response, request } = require ('express');
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();


const addUser = async (req = request, res = response) => {

    const { username, password, email } = req.body;
    const result = await prisma.users.create({
        data: { username, 
                password
        }
    }).catch((e)=> {
        return e.message;
    }).finally(async() => {
        await prisma.$disconnect();
    });

    res.json(result);

};

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