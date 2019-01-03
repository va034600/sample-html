if ('serviceWorker' in navigator) {
    navigator.serviceWorker
         //ファイル名は「firebase-messaging-sw.js」ßに固定
        .register('/firebase-messaging-sw.js')
        .then(function (registration) {
            // 登録成功
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }).catch(function (err) {
            // 登録失敗 :(
            console.log('ServiceWorker registration failed: ', err);
    });
}

var firebase = require('firebase');

var config = {
    apiKey: "<apiKey>",
    authDomain: "<authDomain>",
    databaseURL: "<databaseURL>",
    projectId: "<projectId>",
    storageBucket: "<storageBucket>",
    messagingSenderId: "<messagingSenderId>"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.requestPermission().then(function () {
    console.log('Notification permission granted.');
    messaging.getToken().then(function (currentToken) {
        if (currentToken) {
            var tokenText = document.querySelector("#token-text");
            tokenText.value = currentToken;
        } else {
            console.log('No Instance ID token available. Request permission to generate one.');
        }
    }).catch(function (err) {
        console.log('An error occurred while retrieving token. ', err);
    });
}).catch(function (err) {
    console.log('Unable to get permission to notify.', err);
});
