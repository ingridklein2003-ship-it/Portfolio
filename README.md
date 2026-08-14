# Klein Design, portfolio

Kildekoden til [kleindesign.dk](https://www.kleindesign.dk).
Statisk site i HTML, CSS og JavaScript uden byggetrin. Hostes på Vercel,
som bygger automatisk ved push til `main`.

Siden er bygget som et skrivebord på computer og som en hjemmeskærm på telefon.
Mapperne åbner i vinduer, og projekterne vises inde i samme vindue med en
tilbageknap.

## Struktur

```
index.html              Hele siden: skrivebord, vinduer, cases, tegnebræt, spil
data-sprog.js           Alle engelske oversættelser
data-nyheder.js         Nyhedswidgeten
data-galleri.js         Billedwidgeten
img/                    Billeder (webp)
img/bg/b-3.webp         Baggrunden
video/                  Video
app-koeberguiden/       Klikbar prototype, kører i en ramme på casen
app-wordfestival/       Klikbar prototype
app-friendfinder/       Klikbar prototype
Ingrid-Klein-CV-UDKAST.pdf
gemt-til-senere/        Kode der er taget ud, men skal bruges igen
```

## Sådan retter du indhold uden at røre koden

Se `LÆS-MIG.md`.

## Grene

`main` er det der ligger på kleindesign.dk.
Lav nye ting på en gren og flet ind i `main`, når det er klar.
