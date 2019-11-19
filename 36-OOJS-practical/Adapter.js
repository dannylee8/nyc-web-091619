
class Adapter {
    constructor(api) {
        this.api = api
    }

    getRequest() {
        return fetch(this.api).then(function (resp) { return resp.json() })
    }
}