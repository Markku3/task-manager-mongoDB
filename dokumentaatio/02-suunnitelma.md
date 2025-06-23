# 02 – Suunnitelma projektin toteuttamiseksi

## Asiakkaan tarpeet ja suunnittelun raamit

**Miksi palvelu luodaan?**  
Tehtävienhallintasovellus kehitetään, jotta käyttäjät voivat hallita ja seurata omia tehtäviään yhdessä paikassa. Tavoitteena on vähentää hajanaista tehtävienhallintaa eri välineissä ja parantaa arjen sekä projektien organisointia.

**Kohderyhmä**  
Sovellus on suunnattu opiskelijoille, työntekijöille ja kaikille, jotka haluavat hallita tehtäviään tehokkaasti.

**Aiemmat ratkaisut ja muutos**  
Aiemmin tehtäviä hallittiin paperilla, muistilapuilla tai useissa eri sovelluksissa. Uusi sovellus keskittää kaiken yhteen paikkaan ja mahdollistaa tehtävien reaaliaikaisen seurannan.

## Tavoitteet

- Vähentää manuaalista työmäärää ja unohtuneita tehtäviä
- Parantaa tehtävien hallintaa ja seurantaa
- Tarjota helppokäyttöinen ja luotettava työkalu arjen organisointiin

## Toiminnallisuudet ja tekniset ratkaisut

- Käyttäjätunnukset ja kirjautuminen
- Tehtävien lisääminen, muokkaaminen, poistaminen ja merkitseminen tehdyksi (CRUD)
- Käyttäjäkohtaiset tehtävälistat
- Responsiivinen ja selkeä käyttöliittymä  
**Tekniikat:** Node.js, Express, MongoDB, EJS, CSS

## Graafinen linjaus

- Moderni ja minimalistinen ulkoasu
- Väripaletti: tummat sävyt, neon-värit korostuksina
- Selkeät fontit ja ikonit

## Jatkokehitysideat

- Tehtävien priorisointi ja deadline-toiminnot
- Ilmoitukset ja muistutukset
- Tehtävien jakaminen muiden käyttäjien kanssa

## Esteettömyys ja käytettävyys

- Hyvä kontrasti ja selkeät fontit
- Kaikki toiminnot käytettävissä näppäimistöllä
- Responsiivinen eri laitteille

## Tietoturva

- Salasanojen hashays bcryptillä
- Istuntokohtainen kirjautuminen
- Säännölliset päivitykset ja varmuuskopiot

## Käyttötapaukset

**Käyttötapaus 1:**  
Opiskelija lisää tenttiin liittyviä tehtäviä ja merkitsee ne tehdyiksi valmistautuessaan kokeeseen.

**Käyttötapaus 2:**  
Työntekijä hallitsee työtehtäviään ja seuraa, mitkä tehtävät ovat vielä kesken.

## Haasteet ja niiden ratkaisut

- **Käytettävyys:** Selkeä käyttöliittymä ja ohjeet
- **Tietoturva:** Salasanojen suojaus ja säännölliset päivitykset
- **Tekniset ongelmat:** Testaus eri laitteilla ja selainympäristöissä

# Suunnitelma projektin toteuttamiseksi

## Asiakkaan tarpeet ja suunnittelun raamit

### Miksi palvelu luodaan?

To do -sovellus luodaan, jotta käyttäjät voivat hallita arjen ja työn tehtäviään yhdessä paikassa helposti ja turvallisesti. Monet käyttävät paperilappuja, muistikirjoja tai hajanaisia sovelluksia, mikä tekee tehtävien hallinnasta sekavaa ja tehotonta. Sovellus keskittää kaikki tehtävät yhteen näkymään ja mahdollistaa niiden tehokkaan hallinnan.

### Kohderyhmä

Kohderyhmänä ovat kaikki, jotka haluavat hallita omia tehtäviään digitaalisesti – opiskelijat, työntekijät, yrittäjät ja arjen kiireiset ihmiset.

### Aiemmat ratkaisut ja muutos

**Nykytila:** Käyttäjät hallitsevat tehtäviään eri sovelluksissa, paperilla tai muistilapuilla. Tämä johtaa helposti tehtävien unohtamiseen ja tehottomaan ajankäyttöön.

**Uusi ratkaisu:** To do -sovellus kokoaa kaikki tehtävät yhteen paikkaan, mahdollistaa niiden muokkaamisen, merkitsemisen tehdyksi ja poistamisen sekä tarjoaa selkeän ja responsiivisen käyttöliittymän.

## Tavoitteet

Sovelluksen tavoitteena on:

1. **Vähentää arjen kaaosta:**
   - Keskittää kaikki tehtävät yhteen paikkaan.
   - Mahdollistaa tehtävien nopean lisäämisen, muokkaamisen ja poistamisen.
   - Vähentää unohduksia ja parantaa ajanhallintaa.

2. **Parantaa käyttäjäkokemusta:**
   - Tarjota selkeä ja helppokäyttöinen käyttöliittymä.
   - Mahdollistaa tehtävien merkitseminen tehdyksi ja niiden erottelu aktiivisiin ja valmiisiin.

3. **Turvallisuus ja yksityisyys:**
   - Käyttäjäkohtainen kirjautuminen ja omien tehtävien näkymä.
   - Tietojen tallennus turvallisesti tietokantaan.

## Toiminnallisuudet ja tekniset ratkaisut

**Käyttäjäpuolen toiminnot:**

- Rekisteröityminen ja kirjautuminen
- Tehtävien lisääminen, muokkaaminen, merkitseminen tehdyksi ja poistaminen
- Aktiivisten ja valmiiden tehtävien erottelu
- Käyttäjäkohtainen tehtävälista

**Tekniset ratkaisut:**

- **Backend:** Node.js & Express
- **Tietokanta:** MongoDB
- **Frontend:** EJS, HTML, CSS, JavaScript
- **Autentikointi:** express-session ja bcrypt
- **Responsiivisuus:** CSS

| Toiminnallisuus | Tekninen toteutus | Syy |
|---|---|---|
| Tehtävien hallinta | REST API, MongoDB | Tehokas ja turvallinen tiedonhallinta |
| Käyttäjäautentikointi | express-session, bcrypt | Turvallinen kirjautuminen |
| Responsiivinen UI | CSS, EJS | Toimii eri laitteilla |

## Graafinen linjaus

- **Ydinarvot:** Selkeys, helppokäyttöisyys, moderni/futuristimem ilme
- **Väripaletti:** Tumma pohja, korostevärit tehtävien tilan mukaan
- **Typografia:** Selkeät ja helposti luettavat fontit
- **Kuvakkeet:** Yksinkertaiset ikonit tehtävien tilan ja toimintojen ilmaisemiseen

## Jatkokehitysideat

- Tehtävien deadline ja muistutukset
- Tehtävien priorisointi ja kategorisointi
- Synkronointi mobiililaitteiden kanssa

## Esteettömyys ja käytettävyys

- Riittävä kontrasti ja selkeät värit
- Kaikki toiminnot käytettävissä näppäimistöllä
- Selkeät painikkeet ja lomakkeet

## Tietoturva

- Salasanojen hashays bcryptillä
- Istuntopohjainen autentikointi
- Tietokantakyselyiden suojaus
- Säännölliset päivitykset ja varmuuskopiot

## Käyttötapaukset

### Käyttötapaus 1: Opiskelija

Opiskelija haluaa hallita kurssitehtäviään. Hän kirjautuu sovellukseen, lisää tehtäviä, merkitsee ne tehdyksi ja poistaa valmistuneet tehtävät.

### Käyttötapaus 2: Työntekijä

Työntekijä käyttää sovellusta työtehtävien hallintaan. Hän voi muokata tehtäviä, jakaa ne aktiivisiin ja valmiisiin sekä tarkastella tehtävähistoriaa.

## Haasteiden tunnistus

- Käyttäjien tietoturva ja yksityisyys
- Käyttöliittymän selkeys ja saavutettavuus
- Tietojen tallennuksen luotettavuus

## Aikataulu

| Viikko | Vaihe | Tehtävät |
|---|---|---|
| 1 | Suunnittelu | Vaatimusten määrittely, ulkoasun suunnittelu |
| 2 | Frontend | Käyttöliittymä, tehtävien hallinta |
| 3 | Backend | Tietokanta, API, autentikointi |
| 4 | Testaus | Toiminnallisuuksien testaus, bugikorjaukset |
| 5 | Dokumentointi | Käyttöohjeet, ylläpito, yms viimeistelyt


## 🗓 Gantt-kaavio (viikkotasolla)

![Gantt-kaavio](../kuvat/gantt_kuva_viikkotasolla.png)
