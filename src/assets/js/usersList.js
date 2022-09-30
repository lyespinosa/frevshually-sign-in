let usersList[]

function addUser(name, lastName, email, password, birthday, gender, userName){
    let newUser = {
        name : name,
        lastName : lastName,
        email : email,
        password : password,
        birthday : birthday,
        gender : gender,
        userName : userName 
    }
    usersList.push(newUser)
}

export default userList