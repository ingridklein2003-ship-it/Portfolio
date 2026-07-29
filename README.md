# Klein Design — portfolio

Kildekoden til [kleindesign.dk](https://www.kleindesign.dk).
Statisk site i HTML, CSS og JavaScript. Hostes på Vercel, som bygger
automatisk ved push.

## Struktur

```
index.html              Forside
projekter.html          Projektoversigt med filtre og modaler
case-koeberguiden.html  Dedikeret case-side
univers.html            Skitsebøgerne
priser.html             Prisliste
css/style.css           Alt styling
js/main.js              Navigation, mobilmenu, scroll-tilstand
img/                    Billeder (webp)
video/                  Video
```

## Branches

- `main` — det der ligger live på kleindesign.dk
- `nyt-design` — arbejde på det nye udtryk, ligger under `/nyt/`

## Bemærk om billeder

Billederne i `img/` er tunge — flere er over 5 MB. Det bør optimeres,
før der lægges mere til. Ingen billeder på et site behøver overstige
ca. 300 kB.
