import { createContext, useState } from 'react';
export const authContext = createContext(null);

function AuthContextProvider(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    const login = (user) => {
        setIsAuthenticated(true);
        setUser(user);
    }

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
    }


    return (
        <authContext.Provider value={{ isAuthenticated,  user, login, logout}}>
            {props.children}
        </authContext.Provider>
    );
}

export default AuthContextProvider;