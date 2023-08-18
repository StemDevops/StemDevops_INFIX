class UserContext{
    constructor(){
        this.user = null;
    }
    setUser(userId){
        this.userId = userId;
    }
    getUser(){
        return this.userId;
    }
}
module.exports = new UserContext();