localhost:3030
Endpoint for Message service: localhost:3030/messages


Creating Our First Message

With the server running let's create our first message by sending a POST request to our message service at http://localhost:3030/messages. You can use any REST client like Postman or via CURL like this:

$ curl 'http://localhost:3030/messages/' -H 'Content-Type: application/json' --data-binary '{ "text": "Hello Feathers!" }'

Open the console, then go to localhost:3030 and you will see the new message. Those events also work for REST calls. Try running the command below and you will see a new message show up your browser's console.

$ curl 'http://localhost:3030/messages/' -H 'Content-Type: application/json' --data-binary '{ "text": "Hello again!" }'
