class Request {
    constructor(method, uri, version, message
                , response = undefined, fulfilled = false) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = response;
        this.fulfilled = fulfilled;
    }
}

let request = new Request('GET', 'http://google.com', 'HTTP/1.1', 'HelloWorld');
console.log(request);