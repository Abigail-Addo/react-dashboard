import { createContext, useContext, useEffect, useState } from "react"

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {

    const [admin, setAdmin] = useState([''])
    const [token, setToken] = useState([''])
    const [auth, setAuth] = useState(false)

    const login = (admin) => {
        if (admin.id) {
            const randomToken = Array.from({ length: 32 }, () =>
                Math.random().toString(36)[2]
            ).join('');
            setToken(randomToken);
            localStorage.setItem("token", randomToken);

            let Admin = JSON.stringify(admin);
            setAdmin(Admin);
            setAuth(true)
            localStorage.setItem("admin", Admin);
            return
        }
    }

    const logout = () => {
        // setCurrentUser(null)
        setAdmin(null);
        setToken(null)
        setAuth(false)
        localStorage.removeItem("token");
        localStorage.removeItem("admin");
    }

    useEffect(() => {
        const localToken = localStorage.getItem("token");
        if (localToken && localToken.length > 0) {
            setAuth(true);
        } else {
            setAuth(false);
            console.log("user not authenticated")
        }
    }, [admin, setToken]);

    const info = {
        auth,
        setAuth,
        token,
        setToken,
        admin,
        setAdmin,
        login,
        logout,
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    )
}


// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return useContext(AuthContext)
}
