# Nyt design, arbejdsversion

Åbn `index.html`. Det er skrivebordsversionen.

## Sådan retter du indhold uden at røre koden

**Nyheder** ligger i `data-nyheder.js`
Nyeste opslag øverst. `type` kan være `projekt`, `karriere` eller `note`
(det styrer prikkens farve). `dato` skrives som ÅÅÅÅ-MM-DD.

**Billedwidget** ligger i `data-galleri.js`
Listen over billeder der ruller på skrivebordet.

**CV** ligger i `Ingrid-Klein-CV-UDKAST.pdf`
Erstat filen med dit rigtige CV, samme filnavn.

**App-ikoner** ligger i `img/ikon-word.png`, `img/ikon-friendfinder.png`,
`img/ikon-koeberguiden.png`. Erstat med dine egne, 512×512 px.

**Baggrunde** ligger i `img/bg/bg-1.webp` til `bg-6.webp`
plus en `-min.webp` udgave af hver til vælgeren (højreklik på skrivebordet).

## Hvad der virker

- Mapper og apps åbner i vinduer der kan flyttes, skaleres og lukkes
- KøberGuiden kører som ægte prototype i telefonen (`app-koeberguiden/`)
- Tegnebrættet gemmer som PNG
- Widgets kan flyttes og skaleres
- Højreklik skifter baggrund

## Endnu ikke lavet

- Word Festival og Friend Finder mangler klikbare prototyper
- Ikonet til Word Festival er et midlertidigt udkast
- Mobilvisningen er grov og skal gennemgås
