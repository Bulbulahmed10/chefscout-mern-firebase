
const setUserRole = async (user) => {
    try {

        const req = await fetch('https://chefscout.vercel.app/api/user', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })

        const res = await req.json();
        return res;
    } catch (error) {
        return error
    }

};

const getUserRole = async (user) => {
    try {
        const req = await fetch(`https://chefscout.vercel.app/api/user/${user.uid}`)
        const res = await req.json();
        return res;
    } catch (error) {
        console.log(error);
    }
};

const updateUserRole = async (uid,role) => {
    try {
        const req = await fetch(`https://chefscout.vercel.app/api/user/${uid}`,{
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({role})
        })

        const res = await req.json();
    
        return res;

    }
    catch (error) {
        console.log(error);
    }
}


export {
    setUserRole,
    getUserRole,
    updateUserRole
};