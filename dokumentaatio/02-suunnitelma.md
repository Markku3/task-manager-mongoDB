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

## Aikataulu

| Viikko | Vaihe                | Tehtävät                                 |
|--------|----------------------|------------------------------------------|
| 1      | Suunnittelu          | Vaatimusten ja ulkoasun määrittely       |
| 2      | Kehitys              | Backend ja frontend perustoiminnot       |
| 3      | Testaus ja optimointi| Käytettävyys- ja tietoturvatestaus       |
| 4      | Julkaisu             | Dokumentointi ja käyttöönotto
