import { getMessaging, getToken } from "firebase/messaging";

// Get registration token. Initially this makes a network call, once. retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();
getToken(messaging, { vapidKey: 'BGAn6s9ghJpueOZ_0ZJ3kspE-BdQ9tAuVKGtLK_TXJyWIU5e3175PadIKbfLj5AnqIz-FaE-ADRqeUWdsK6wn4w' }).then((currentToken) => {
    if (currentToken) {
        // Send the token to your server and update the 
    }
})