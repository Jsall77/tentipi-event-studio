# Tentipi Event Studio

Stratus 72 med WallFlex och Tentipis eventinredning. Granskningsversion 2026-11-02.

Planerad GitHub Pages-adress: https://jsall77.github.io/tentipi-event-studio/ . Driftstatus anges separat i PUBLICATION.json; en adress i dokumentationen bevisar inte publicering.

## Funktioner

- Samma konfiguration i 3D exteriör, invändig vy och ortografisk planvy.
- Nio individuella sektioner: nedfälld duk, uppfällt brätte, WallFlex duk eller WallFlex fönster. Mittpartier öppnas/stängs med knapp eller direkt klick.
- Beige/naturvit duk; dag/kväll; genomskärning; bildexport och helskärm.
- Tentipis bord och bänkar 150/200 samt Bamse max. Dra, rotera, duplicera, radera eller ange exakta X/Z-koordinater. Placerade möbler kan också väljas med tangentbord.
- Möbleringsförslag, Eventmatta Sand, ljusslingesystem med automatisk EU-adapter i sammanställningen.
- Ångra/gör om, lokal autosparning, projektimport/export och delningslänk som bevarar utförande och placering.
- Utskrift/PDF via webbläsarens dialog, bildexport och textunderlag för offertförfrågan.

## Produkternas korrekthet

Ytterdimensioner och verifierade möbelmått följer tillverkarens underlag. Modellens nio huvudstänger ersätter inte officiell CAD; det finns ingen mittmast. Stratus har olika profil med nedfällda sidor och uppfällt brätte. WallFlex har tre partier med upprullningsbar mittdel. Trädörr erbjuds inte som beställningsartikel i Sverige. Midfill/LinkFlex för flera tält ingår inte i denna första version.

Detaljgeometri, stomplacering, WallFlex-bredder, infästningar, tygdeformation och ljusplacering är visuellt tolkade. Bamse max använder tillverkarens angivna mått 150 × 120 × 80 cm, med illustrativa konstruktionsdetaljer. Måttens axeldefinition och tillbehörsutförande behöver bekräftas. De geometriska placeringstesterna upptäcker rektangulära möbelöverlappningar och påminner om vägg/stomme; de verifierar inte utrymning, förankring, vind, snö, brand eller säkerhetsavstånd.

83/132 m² är tillverkarens täckta ytor, inte en beräkning från den förenklade niokantiga modellen. Kapacitetsuppgifter används inte som automatisk tillåten personkapacitet. Vikt- och byggtidsuppgifter skiljer mellan webbsida och produktblad och har inte blandats ihop. Se research/stratus72.txt och research/event-catalog.txt.

## Beställning och Shopify

GitHub-versionen är en statisk förhandsversion. Den tar inte emot betalningar och skapar inga Shopifyordrar. Produktpriser som anges som 0 i katalogen betyder offertpris, inte gratis. Inga priser eller bindande komponentlistor har hittats på. Kunden kan kopiera/hämta sitt underlag och öppna Tentipis officiella produktsida för att begära offert. Ingen automatisk överföring till Tentipis befintliga offertsystem påstås.

integration/shopify innehåller en separat sektion och instruktioner för inbäddning och Shopifys kontaktformulär. Den måste installeras i ett opublicerat Tentipitema och testas där. Den har inte installerats i någon butik. Slutlig produkt-/variantmappning, mottagare, frakt, moms och offert-/orderprocess ska fastställas med Tentipi. Återförsäljar- och personuppgifter samlas inte in i GitHub-appen. Delningslänkar innehåller endast konfigurationen; projekten finns i den egna webbläsaren, inte i en gemensam serverdatabas.

## Utveckling

Källan finns i src/. model.mjs innehåller katalog, validering, placering och sammanställning; scene.mjs bygger 3D; app.mjs kopplar gränssnitt och export. Node 22+:

```sh
npm install
npm test
npm run build
python3 -m http.server 5193 --directory dist
```

På byggdatorn användes redan installerade exakta Three.js 0.186.1 / esbuild 0.28.2 eftersom npm saknades i den tillgängliga körmiljön. Den lokala node_modules-symlänken ingår inte i källpaketet. En ny utvecklingsmiljö installerar beroendena från package.json. Build genererar publicerbara filer i dist/. GitHub-repot har den byggda webbversionen i roten och en separat källkods-ZIP för vidareutveckling.

## Granskning och begränsningar

Tre agenter genomförde produktresearch, katalogresearch och referensstudier. Modellen och Shopify-överföringen har 29 automatiserade testfall för validering, felaktiga importer, tillbehörsberoenden, WallFlex-övergångar, kollisioner och delningsrundtur. Granskningsanmärkningar och rättningar finns under qa/.

Webbläsartest omfattar modellstart, färg, WallFlex 360°, mittparti, möblering, exakta koordinater, rotation, vybyte, sparning över omladdning, delad konfiguration med fortsatta ändringar och 390 px mobil utan horisontell överflytning. Exakt fysisk produktmatchning, touch på en fysisk mobil, PDF-filens alla läsarprogram och skarp Shopifykontakt/checkout återstår. Någon tillverkarverifierad konstruktions- eller produktionsmodell levereras inte.

## Bilder och licenser

Originalbilder och logotyp kommer från Tentipis offentliga produktsidor och tillhör Tentipi och respektive fotograf. Great Ocean Tipis / Tony Evans krediteras för exteriörfotot; detaljerade URL:er, krediter och hashvärden finns i asset-sources.json. Ingen öppen återanvändningslicens har identifierats. Rättigheter ska klareras av Tentipi inför kommersiell lansering. Produktbilderna används som referens i denna användarbeställda granskning. Inga modellbilder har skapats med generativ AI.

Three.js används under MIT; THREE-LICENSE.txt följer med. Google Fonts laddas externt med systemtypsnitt som reserv. Övrig kod eller varumärkesmaterial ges inte automatiskt samma licens.

## Geometry and environment update — 2 November 2026

Continuous canopy boundaries verified across all 512 raised/lowered combinations, shared WallFlex eaves and closed glazing. The owner clarified that loose lifting poles stand vertically on the ground, at 90 degrees, and are installed only beside raised sides. They are visibly distinct from the thin sloping guy ropes. This supersedes the earlier interpretation of above-ground diagonal lifting supports. Extra secondary pole positions are not invented in the customer model; current assembly documentation is still required for production validation.

Studio plus summer, autumn, winter and desert are selectable. Outdoor panoramas are locally hosted 1k HDR photographs from Poly Haven under CC0; metadata and checksums are in `dist/assets/environment-sources.json`. Lazy loading, caching and a procedural fallback preserve use if an image fails. Environment selection is stored in the project and share URL; it is not a billable product. Project geometry is not a surveyed scene or a site approval.

Additional fixes: safe transactional edits, blank-coordinate validation, duplication near the supported coordinate boundaries, SVG keyboard focus, reduced-motion camera transitions, floor polygon alignment and portrait plan camera fitting.

Final presentation uses a conventional panorama sphere and separately tiled ground textures to avoid radial stretching in elevated orbit views. Additional secondary-pole assembly positions and the precise fabric pattern remain unverified. 29 automated tests pass; browser QA includes mixed canopy states and 390px mobile plan layout.

Latest details: direct canvas clicks raise/lower sides; the ventilation hood opens above a real roof-neck aperture and closes with overlap. A separate canvas zipper entrance on side 04 opens/closes when that canvas side is lowered. Its exact dimensions and placement are illustrative, not a new saleable SKU. A muted olive-green reinforcement strip follows the fabric hem, including mixed raised/lowered sides and moving entrance flaps. All three choices persist in project/share state (the reinforcement strip is a visual construction detail, not an option).

Closed canvas entrance: continuous fabric meets at a raised zipper tape with visible interlocking teeth and pull. The open slit/triangular edge seams are shown only while the entrance is open. Zipper hardware remains illustrative.

Vent hood mechanism: the upper attachment stays fixed at 6.8m. Pull cords raise the lower hem while the cloth gathers into radial and concentric folds; closing releases it back down over the roof neck. Animation deforms the surface and rim rather than translating the hood. Reduced-motion settings skip the animation. Cord routing and detailed fabric folds remain illustrative.

Download developer source: [Tentipi-Event-Studio-kallkod.zip](Tentipi-Event-Studio-kallkod.zip)
