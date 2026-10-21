# Festalbum: sådan opretter du en ny kunde

Albummet er én skabelon til alle kunder. Hver kunde er én række i Supabase-projektet
**event-album** (`nnpswsaydjlabwtnewoc`), tabellen `public.albums`.

- Gæsternes side: `https://www.kleindesign.dk/album/<slug>`
- QR-kort til print: `https://www.kleindesign.dk/album/kort.html?a=<slug>` → vælg A6 eller 4 pr. A4 → Print → Gem som PDF
- Demo: `/album/demo` (upload og hilsner er slået fra)

## Ny kunde

Kør i Supabase → SQL Editor (ret navne, dato, tekster og koder):

```sql
insert into public.albums (slug, view_code, admin_code, config) values (
  'anna-og-jonas',            -- kun små bogstaver, tal og bindestreg
  'hyggelig2027',             -- kode til at SE albummet (gives til gæster, hvis I vil)
  'kun-til-brudeparret-x7',   -- admin-kode: se, slette, zip og gøre synligt for alle
  $${
    "names": ["Anna", "Jonas"],
    "dateText": "14. juni 2027",
    "intro": "Har du taget billeder eller små videoer i dag, må du meget gerne dele dem her. Så kan Anna og Jonas altid se tilbage på en smuk dag med familie og venner.",
    "note": {"text": "Kære gæster\n\n…", "from": "Kærlig hilsen Anna og Jonas"},
    "tasks": ["Brudeparret, når de ikke ser det", "En skål", "Hele dit bord på ét billede"],
    "footer": "Stort tillykke, Anna og Jonas",
    "zipName": "Anna-og-Jonas-bryllup.zip",
    "cardText": "Del dine billeder og videoer fra dagen",
    "theme": {"paper": "#EFE8DD", "ink": "#161514", "line": "#DDD4C6", "soft": "#E4DBCD"}
  }$$::jsonb
);
```

- Én person (fx en fødselsdag): `"names": ["Mia fylder 30"]`.
- `note`, `tasks` og `theme` kan udelades. Uden `tasks` vises der ingen fotojagt.

## Efter festen

```sql
update public.albums set uploads_open = false where slug = 'anna-og-jonas';
```

Så kan der ikke deles mere, men albummet kan stadig ses med koden. Brudeparret downloader alt
som zip med admin-koden (knappen vises, når albummet åbnes med admin-koden).

## Plads

Gratisplanen i Supabase har 1 GB lager i alt og maks. 50 MB pr. fil. Det rækker til nogle få
fester med mest billeder. Ved flere kunder eller mange videoer: opgradér projektet til Pro
(100 GB), eller slet gamle albums, når kunden har downloadet alt.
