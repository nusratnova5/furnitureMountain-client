import { useEffect, useState } from "react"

const useAdmin = email =>{
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);

    useEffect( () => {
        fetch(`https://resale-market-server-side-nusratnova5.vercel.app/users/admin/${email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setIsAdmin(data.isAdmin);
            setIsAdminLoading(false);
        })
    }, [email])
    return [isAdmin, isAdminLoading];
}

export default useAdmin;