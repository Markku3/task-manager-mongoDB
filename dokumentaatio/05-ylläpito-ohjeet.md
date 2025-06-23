# 05 – Ylläpito-ohjeet

Tässä ohjeessa kerrotaan, miten tehtävienhallintasovellusta ylläpidetään ja pidetään toimivana. Ohjeet on suunnattu sovelluksen ylläpitäjälle tai kehittäjälle.

---

## 1. Käyttäjien ja tehtävien hallinta

- **Käyttäjät:**  
  Käyttäjät voivat rekisteröityä ja hallita omia tehtäviään. Tarvittaessa voit poistaa käyttäjiä suoraan tietokannasta (MongoDB).
- **Tehtävät:**  
  Tehtävien lisääminen, muokkaaminen ja poistaminen tapahtuu sovelluksen käyttöliittymässä. Jos tehtäviä tarvitsee muokata suoraan, käytä MongoDB:n hallintatyökaluja.

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
  Seuraa palvelimen muistia ja prosessorikuormaa (esim. `htop` tai palveluntarjoajan hallintapaneeli).
- **Analytiikka:**  
  Voit liittää Google Analyticsin tai muun analytiikkatyökalun käyttöliittymään, jos haluat seurata käyttöä.

## 5. Yleiset ylläpitotoimet

- **Säännöllinen testaus:**  
  Testaa sovelluksen perustoiminnot (kirjautuminen, tehtävien hallinta) säännöllisesti.
- **Varmuuskopiot:**  
  Tee varmuuskopiot sekä tietokannasta että sovelluskoodista.
- **Päivitykset:**  
  Pidä sovelluksen riippuvuudet ja käyttöjärjestelmä ajan tasalla.
- **Turvallisuus:**  
  Varmista, että salasanat tallennetaan hash-muodossa ja että palvelin on suojattu ulkopuolisilta hyökkäyksiltä (esim. palomuuri, HTTPS).

---

**Lisätietoa ja apua:**

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express Documentation](https://expressjs.com/)
- [GitHub Issues](https://github.com/) – raportoi ongelmat ja seuraa kehitystä

Näiden ohjeiden avulla voit ylläpitää tehtävienhallintasovellusta ja varmistaa sen
