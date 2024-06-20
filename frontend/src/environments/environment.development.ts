const port = 3000;

export const env  = {
    port : port,
    backendUrl:`http://localhost:${port}/api`,
    socketUrl : `ws://localhost:${port}/api`,
}

// http://16.171.176.28/