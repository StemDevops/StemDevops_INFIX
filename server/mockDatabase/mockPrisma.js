const bycrypt =require("bcrypt")
const mockCredentials= {
    findFirst:jest.fn(),
    create:jest.fn(),
}

const mockPrisma = {
    credentials:mockCredentials,
}
const mockUserData = {
    universal_id:"test_id",
    username:"test_username",
    password_hash:bycrypt.hashSync("test_password",10),
    user_type:"test_user_type",
    points:0,
}

mockPrisma.credentials.create.mockImplementation(async({data})=>{
    return mockUserData
})

mockPrisma.credentials.findFirst.mockImplementation(async({where})=>{
    
        if(where.universal_id==="test_id"){
            return mockUserData
        }
        else{
            return null
        }
    
})

module.exports = mockPrisma 