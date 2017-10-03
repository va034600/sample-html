export default class TestAPI {
    static fetchUser(){
        return fetch("http://localhost:3000/webroot/test.json", {method: 'GET'})
    }
}