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

## Graafinen linjaus

- **Ydinarvot:** Selkeys, helppokäyttöisyys, moderni/futuristimem ilme
- **Väripaletti:** Tumma pohja, korostevärit tehtävien tilan mukaan
- **Typografia:** Selkeät ja helposti luettavat fontit
- **Kuvakkeet:** Yksinkertaiset ikonit tehtävien tilan ja toimintojen ilmaisemiseen

## Jatkokehitysideat

- Tehtävien deadline ja muistutukset
- Tehtävien priorisointi ja kategorisointi
- Synkronointi mobiililaitteiden kanssa
- Kehittyneempi tietoturva-aspekt (esim. XSS)

## Haasteet ja niiden ratkaisut

- **Käytettävyys:** Selkeä käyttöliittymä ja ohjeet
- **Tietoturva:** Salasanojen suojaus ja säännölliset päivitykset
- **Tekniset ongelmat:** Testaus eri laitteilla ja selainympäristöissä

## Esteettömyys ja käytettävyys

- Riittävä kontrasti ja selkeät värit
- Kaikki toiminnot käytettävissä näppäimistöllä
- Responsiivinen ulkoasu eri laitteille
- Selkeät painikkeet ja lomakkeet

## Tietoturva

- Salasanojen hashays bcryptillä
- Istuntopohjainen autentikointi
- Tietokantakyselyiden suojaus
- Säännölliset päivitykset ja varmuuskopiot

## Käyttötapaukset

**Käyttötapaus 1:**  
Opiskelija lisää tenttiin liittyviä tehtäviä ja merkitsee ne tehdyiksi valmistautuessaan kokeeseen.

**Käyttötapaus 2:**  
Työntekijä hallitsee työtehtäviään ja seuraa, mitkä tehtävät ovat vielä kesken.

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