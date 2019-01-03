参考

https://github.com/firebase/quickstart-js/tree/master/messaging

```
curl -X POST -H "Authorization: key=<SERVER_KEY>" -H "Content-Type: application/json" -d '{
  "notification": {
    "title": "Portugal vs. Denmark",
    "body": "5 to 1"
  },
  "to": "<TOKEN>"
}' "https://fcm.googleapis.com/fcm/send"
```
