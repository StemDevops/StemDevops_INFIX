const bcrypt = require("bcrypt")
const mockPrisma = require("../mockDatabase/mockPrisma")
const {
    createUser,
    comparePassword,
    getUserData,
  } = require("../src/api/services/userService.js")
jest.mock('@prisma/client',()=>{
    return mockPrisma

})

describe("User Service",()=>{
    describe("createUser",()=>{
        it("should create a user",async()=>{
            const username = "test_username"
            const password = "test_password"
            const userType = "test_user_type"
            const universal_id = "test_id"
            const newUser = await createUser(username,password,userType,universal_id)
            expect(newUser).toEqual({
                username:"test_username",
                password_hash:bcrypt.hashSync("test_password",10),
                user_type:"test_user_type",
                universal_id:"test_id",
                points:0,
            })
        })
    })
    describe("comparePassword",()=>{
        it("should return true if password matches",async()=>{
            const password = "test_password"
            const hash = bcrypt.hashSync("test_password",10)
            const match = await comparePassword(password,hash)
            expect(match).toEqual(true)
        })
        it("should return false if password does not match",async()=>{
            const password = "test_password"
            const hash = bcrypt.hashSync("wrong_password",10)
            const match = await comparePassword(password,hash)
            expect(match).toEqual(false)
        })
    })
    describe("getUserData",()=>{
        it("should return user data if user exists",async()=>{
            const universal_id = "test_id"
            const userData = await getUserData(universal_id)
            expect(userData).toEqual({
                universal_id:"test_id",
                username:"test_username",
                password_hash:bcrypt.hashSync("test_password",10),
                user_type:"test_user_type",
                points:0,
            })
        })
        it("should return null if user does not exist",async()=>{
            const universal_id = "wrong_id"
            const userData = await getUserData(universal_id)
            expect(userData).toEqual(null)
        })
    })
})


