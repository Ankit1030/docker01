const port = 3000;
const serverip1 = "13.233.19.123"
// export const env  = {
//     port : port,
//     backendUrl:`/api`,
//     socketUrl : `/api`,
// }
export const env  = {
    port : port,
    backendUrl:`http://${serverip1}:${port}`,
    socketUrl : `ws://${serverip1}:${port}`,
}

// http://16.171.176.28/