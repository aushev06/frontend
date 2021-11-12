import Echo from "laravel-echo"
import io from 'socket.io-client';
import {API_URL} from "../core/axios";

if (typeof window !== "undefined") {
    // @ts-ignore
    window.io = io;
}

export const echo = () => {
    return new Echo({
        broadcaster: 'socket.io',
        host: API_URL + ':6001',

    })
}
