# 03 – Työnvaiheet

Tässä osiossa kuvataan tehtävienhallintasovelluksen toteutuksen päävaiheet ja eteneminen. Työvaiheet on jaettu viikoittaisiin osioihin, sillä suunnittelin työskenteleväni joka päivä vähintään 5h aktiivisesti projektin parissa. Jokaisessa vaiheessa on kerrottu tärkeimmät tehtävät ja ratkaisut.

## Vaihe 1: Suunnittelu (viikko 1)

**Vaatimusten määrittely:**  
Määriteltiin sovelluksen ydintoiminnot: käyttäjätunnukset, tehtävien lisääminen, muokkaus, poisto ja merkitseminen tehdyksi. Päätin käyttää Node.js:ää, Expressiä ja MongoDB:tä (MondoDB Compass).

**Visuaalisen ilmeen suunnittelu:**  
Luotiin moderni ja selkeä ulkoasu. Värimaailmaksi valittiin tummat sävyt ja neon-korostukset. Fontit ja ikonit valittiin tukemaan selkeyttä ja käytettävyyttä.

**Sivustorakenteen suunnittelu:**  
Määriteltiin sivut: kirjautuminen, tehtävälista, henkilökohtaiset tiedot ja ohjesivut. Suunniteltiin navigaatio ja responsiivinen rakenne.

---

## Vaihe 2: Kehitysympäristön valmistelu (viikko 2)

**Projektin alustus:**  
Luotiin Node.js-projekti, asennettiin tarvittavat riippuvuudet (Express, MongoDB, EJS, bcrypt).  
Määriteltiin kansiorakenne ja otettiin käyttöön versionhallinta (Git).

**Perusrunko:**  
Rakennettiin ensimmäinen versio backendistä ja frontendistä. Testattiin yhteys MongoDB-tietokantaan.

---

## Vaihe 3: Toiminnallisuuksien toteutus (viikko 3)

**Käyttäjähallinta:**  
Toteutettiin rekisteröityminen, kirjautuminen ja istunnon hallinta. Salasanat tallennetaan hash-muodossa.

**Tehtävien CRUD:**  
Rakennettiin tehtävien lisääminen, muokkaus, poisto ja merkitseminen tehdyksi.  
Toteutettiin käyttäjäkohtaiset tehtävälistat (eli todot).

**Käyttöliittymä:**  
Rakennettiin responsiivinen käyttöliittymä EJS:llä ja CSS:llä. Lisättiin hamburger-valikko ja tehtävälistan suodatus.

---

## Vaihe 4: Testaus ja optimointi (viikko 4)

**Toiminnallisuuksien testaus:**  
Testattiin kaikki toiminnot eri selaimilla ja laitteilla. Korjattiin löydetyt virheet.

**Käytettävyys ja esteettömyys:**  
Parannettiin kontrasteja, fonttikokoja ja näppäimistöyhteensopivuutta.

**Tietoturva:**  
Varmistettiin salasanojen hashays, sessioiden suojaus ja tietoturvakäytännöt.

---

## Vaihe 5: Julkaisu ja seuranta (viikko 5)

**Julkaisu:**  
Sovellus siirrettiin pilvipalvelimelle ja otettiin käyttöön.

**Käyttöönotto ja ohjeistus:**  
Kirjoitettiin käyttö- ja ylläpito-ohjeet. Käyttäjille tarjottiin tuki ja ohjeistus.

**Seuranta:**  
Aloitettiin sovelluksen käytön seuranta ja käyttäjäpalautteen kerääminen.

---

## Yhteenveto

Projektin toteutus eteni suunnitelman mukaisesti vaihe vaiheelta. Suunnitteluvaiheessa määriteltiin selkeät tavoitteet ja toiminnot, joiden pohjalta kehitys eteni. Kehitysvaiheessa keskityttiin ydintoimintoihin ja käyttöliittymän selkeyteen. Testausvaiheessa varmistettiin toimivuus ja tietoturva. Julkaisun jälkeen sovellusta seurataan ja kehitetään edelleen käyttäjäpalautteen perusteella.
