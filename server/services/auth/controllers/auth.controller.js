import { getAuth } from "firebase-admin/auth";

export const login = async (req, res) => {
    try{
        const {token} = req.body
        const decoded = getAuth().verifyIdToken(token);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
}