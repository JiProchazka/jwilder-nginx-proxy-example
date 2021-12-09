# Instructions

### HOSTS file

Put `127.0.0.1 testt.dev.localhost testt2.dev.localhost` to a HOSTS file (on Windows 10: `C:\Windows\System32\drivers\etc\hosts`)

## Run

`$ docker compose up -d`

Hook up to _testt_ server:

`$ docker exec -it testt.dev.localhost /bin/bash`

Then in container run the server:

`$ node server`

It should be accessible on `http://testt.dev.localhost/api` now.

Open naother console and hookup to _testt2_ server:

`$ docker exec -it testt2.dev.localhost /bin/bash`

In the container run the server:

`$ node server`

You should be able to see json on `http://testt2.dev.localhost/api`.

And now the _testt_ container should be able to see the _testt2_ container as well:

`http://testt.dev.localhost/api-proxy` should return the response from the `http://testt2.dev.localhost/api` enriched by the `{ proxy: true }`.
