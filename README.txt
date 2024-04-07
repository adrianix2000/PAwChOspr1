Polecenie do budowy kontenera:
docker build --build-arg VERSION=1.0.0 -t zadanie5 .

Polecenie do uruchomienia konetnera wraz z przekierowaniem portów:
docker run -it -p 7777:80 --name lab5 zadanie5

Polecenie do sprawdzenia poprawności działania kontenera:
docker ps | grep lab5
