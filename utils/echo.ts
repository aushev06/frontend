import Echo from "laravel-echo";
import pusher from "pusher-js";

if (typeof window !== "undefined") {
    // @ts-ignore
    window.Pusher = pusher;
}

export const echo = () => {
    return new Echo({
        broadcaster: "pusher",
        key: "b7cf3da93e80dff2db63",
        cluster: "ap2",
    });
};
