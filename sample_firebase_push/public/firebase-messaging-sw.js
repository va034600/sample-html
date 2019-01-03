self.addEventListener("push", function(event) {
    if (Notification.permission == "granted") {
        console.log("Recieved", event);
        event.waitUntil(
            self.registration.showNotification("タイトル1", {
                    body: `本文: ${event.data.json().notification.body}`
                })
        );
    }
});

self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    clients.openWindow("/");
}, false);

