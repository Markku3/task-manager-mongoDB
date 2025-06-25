# 05 – Ylläpito-ohjeet

## 1. Käyttäjien ja tehtävien hallinta

- **Käyttäjät:**  
  Käyttäjät voivat rekisteröityä ja hallita omia tehtäviään. Tarvittaessa voit poistaa käyttäjiä suoraan tietokannasta (MongoDB, tai GDPR -sivulla olevaan sähköpostiin yhteyttä).
- **Tehtävät:**  
  Tehtävien lisääminen, muokkaaminen ja poistaminen tapahtuu sovelluksen käyttöliittymässä. Jos tehtäviä tarvitsee muokata suoraan, käytä MongoDB:n hallintatyökaluja (MongoBD Compass).

## 2. Tietokannan ylläpito

- **Varmuuskopiot:**  
  Ota säännöllisesti varmuuskopiot MongoDB-tietokannasta. Esim:
  ```bash
  mongodump --db naytto --out varmuuskopiot/
  ```
- **Palautus:**  
  Tarvittaessa voit palauttaa varmuuskopion:
  ```bash
  mongorestore --db naytto varmuuskopiot/naytto/
  ```

## 3. Sovelluksen päivitykset

- **Riippuvuudet:**  
  Päivitä npm-paketit säännöllisesti:
  ```bash
  npm update
  ```
- **Tietoturva:**  
  Seuraa Node.js:n, Expressin ja MongoDB:n tietoturvapäivityksiä.  
  Tarkista haavoittuvuudet:
  ```bash
  npm audit
  ```

## 4. Suorituskyky ja valvonta

- **Lokit:**  
  Tarkista palvelimen lokit mahdollisten virheiden varalta.
- **Palvelimen tila:**  
  Seuraa palvelimen muistia ja prosessorikuormaa (esim. palveluntarjoajan hallintapaneeli).

## 5. Yleiset ylläpitotoimet

- **Säännöllinen testaus:**  
  Testaa sovelluksen perustoiminnot (kirjautuminen, tehtävien hallinta) säännöllisesti.
- **Varmuuskopiot:**  
  Tee varmuuskopiot sekä tietokannasta että sovelluskoodista.
- **Päivitykset:**  
  Pidä sovelluksen riippuvuudet ja käyttöjärjestelmä ajan tasalla.
- **Turvallisuus:**  
<<<<<<< HEAD
  Varmista, että salasanat tallennetaan hash-muodossa ja että palvelin on suojattu ulkopuolisilta hyökkäyksiltä (esim. palomuuri, HTTPS).
=======
  Varmista, että salasanat tallennetaan hash-muodossa ja että palvelin on suojattu ulkopuolisilta hyökkäyksiltä (esim. palomuuri, HTTPS).
>>>>>>> f34c93c17d941052ef26a16eb9f06b0bc2b2f4d4
