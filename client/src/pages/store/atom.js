import { atom, selector } from "recoil";
import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const ActiveAtom = atom({
    key: "ActiveAtom",
    default: "welcome"
});

export const userAtom = atom({
    key: "userAtom",
    default: selector({
        key: "userAtomselector",
        get: async () => {
            const response = await axios.get(`${API_BASE_URL}/api/users/userdetails`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            });
            return response.data;
        }
    })
})