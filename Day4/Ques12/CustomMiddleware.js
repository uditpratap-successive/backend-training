//12.Build middleware that adds a custom header to every response. Allow the header value to be configurable.
const customHeaderMiddleware = (req, res, next) => {
    const headerName = req.headers['key'];
    const headerValue = req.headers['value'];

    // Check if headerName and headerValue are present
    if (headerName && headerValue) {
        res.setHeader(headerName, headerValue);
    }

    next();
};

module.exports = customHeaderMiddleware;
