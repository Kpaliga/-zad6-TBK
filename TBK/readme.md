Nazwa sieci (kpaliga-net). Klient przy uruchomieniu wysyła zapytanie na adres kontenera serwera. 

```
docker build -t server .    
docker build -t client .               

docker network create test-net

docker run -d --name server --network kpaliga-net -p 9000 server
docker run -d --name client --network kpaliga-net -p 3000 client
```
