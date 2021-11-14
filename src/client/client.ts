import axios from "axios";

export function createClient(baseURL: string) {
    return axios.create({ 
        baseURL,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "User-Agent": "nobs"
        }
    });
}