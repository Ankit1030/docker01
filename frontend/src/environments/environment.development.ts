const port = 3200;
const serverip1 = "13.201.115.173"
// export const env  = {
//     port : port,
//     backendUrl:`/api`,
//     socketUrl : `/api`,
// }
export const env  = {
    port : port,
    backendUrl:`http://${serverip1}:${port}/api`,
    socketUrl : `ws://${serverip1}:${port}/api`,
}

// http://16.171.176.28/