# SEO — Vision Adéquate

Ce document décrit ce qui a été mis en place, les mots-clés visés, et les
étapes à faire manuellement pour lancer l'indexation Google.

---

## 1. Ce qui a été fait dans le code

| Élément | Avant | Après |
|---|---|---|
| Titres de page | 1 seul titre pour tout le site | 24 titres uniques |
| Fiches produits indexables | 0 | 19, prérendues au build |
| Description | 1 seule, générique | 1 par page, rédigée par intention |
| URL canonique | absente | sur chaque page |
| `sitemap.xml` | absent | généré, 24 URLs |
| `robots.txt` | absent | généré, pointe vers le sitemap |
| Données structurées | aucune | établissement, produits, prestations, fil d'Ariane |
| H1 | manquant sur 2 pages | présent sur toutes |

**Aucun changement visuel.** Les métadonnées sont ajoutées par des layouts
serveur qui enveloppent les pages existantes sans les modifier.

### Fichiers ajoutés

- `src/lib/seo.ts` — constantes du site et générateurs de données structurées
- `src/components/seo/JsonLd.tsx` — injection du JSON-LD
- `src/app/sitemap.ts`, `src/app/robots.ts`
- `src/app/{catalogue,tarifs,portfolio,devis}/layout.tsx` — métadonnées par page
- `src/app/catalogue/[id]/layout.tsx` — métadonnées et JSON-LD par produit

---

## 2. Stratégie de mots-clés

> Le connecteur Semrush n'était pas disponible dans cette session. Les cibles
> ci-dessous viennent de l'analyse des concurrents réellement positionnés en
> première page et des intentions de recherche observées. À affiner avec les
> volumes exacts une fois Semrush ou la Search Console connectée.

### Niveau 1 — gagnable rapidement (1 à 3 mois)

Requêtes précises, peu concurrentielles, à forte intention d'achat. C'est là
que les 19 fiches produits vont travailler.

- `location sony fx3`, `louer sony fx3`, `location sony a7iv`, `location a7s iii`
- `location dji mini 4 pro`, `location dji rs3`, `location osmo pocket 3`
- `location objectif sony 24-70 gm`, `location dji mic 2`
- `location matériel vidéo val d'oise`, `location caméra 95`
- `location matériel photo garges-lès-gonesse`

Chaque fiche cible déjà sa requête : le titre est
`Location <Marque Modèle> — <prix>€/jour en Val-d'Oise (95)`.

### Niveau 2 — gagnable à moyen terme (3 à 6 mois), forte valeur

Le mariage rapporte beaucoup plus par client que la location. La concurrence
locale est réelle mais atteignable.

- `photographe mariage val d'oise`, `vidéaste mariage 95`
- `photographe mariage sarcelles`, `photographe mariage garges-lès-gonesse`
- `tarif photographe mariage val d'oise`
- `photographe et vidéaste mariage île-de-france`

La page `/tarifs` cible ces requêtes et publie les prix — un avantage réel,
la plupart des concurrents ne les affichent pas.

### Niveau 3 — jeu long (6 à 12 mois et plus)

- `location matériel vidéo paris`, `location caméra paris`

Ces requêtes sont tenues par Kashoot Loc, Proframe, Visual Impact et
Lightyshare, qui ont des années d'ancienneté et beaucoup de liens entrants.
Le travail technique seul ne suffira pas : il faudra des backlinks et du
contenu. Viser d'abord les niveaux 1 et 2, qui convertissent mieux.

---

## 3. Lancer l'indexation Google — à faire manuellement

Ces étapes demandent l'accès à tes comptes, je ne peux pas les faire à ta place.

### Étape 1 — Google Search Console

1. Aller sur https://search.google.com/search-console
2. Ajouter une propriété de type **Domaine** : `visionadequate.fr`
   (couvre `www` et non-`www` d'un coup)
3. Valider par enregistrement DNS chez ton registrar (Google fournit la ligne TXT)

**Alternative** si le DNS est compliqué : choisir « Préfixe d'URL »
`https://www.visionadequate.fr`, prendre la méthode « balise HTML », puis
ajouter le code dans Vercel comme variable d'environnement :

```bash
vercel env add NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
```

Le code est déjà câblé dans `src/app/layout.tsx` — il suffit de redéployer.

### Étape 2 — Soumettre le sitemap

Dans Search Console → **Sitemaps** → saisir `sitemap.xml` → Envoyer.

Vérifier d'abord qu'il répond bien :
https://www.visionadequate.fr/sitemap.xml

### Étape 3 — Demander l'indexation des pages prioritaires

Search Console → **Inspection de l'URL** → coller l'URL → « Demander une
indexation ». À faire pour, dans l'ordre :

1. `https://www.visionadequate.fr/`
2. `https://www.visionadequate.fr/catalogue`
3. `https://www.visionadequate.fr/tarifs`
4. `https://www.visionadequate.fr/portfolio`
5. Les 3 ou 4 fiches produits les plus recherchées (FX3, A7IV, Mini 4 Pro)

Le reste sera découvert via le sitemap. Compter 3 à 14 jours.

### Étape 4 — Google Business Profile (le plus rentable en local)

C'est **l'action au meilleur rapport effort/résultat** pour du référencement
local. Sans fiche, tu n'apparais pas dans le encart carte de Google.

1. https://www.google.com/business → créer la fiche « Vision Adéquate »
2. Catégorie principale : *Service de location de matériel audiovisuel*
   Catégories secondaires : *Photographe*, *Photographe de mariage*
3. Zone desservie : Garges-lès-Gonesse, Sarcelles, Villiers-le-Bel,
   Val-d'Oise, Île-de-France
4. Ajouter le site, des photos du matériel et du portfolio
5. **Demander des avis à tes anciens clients mariage** — c'est le premier
   facteur de classement local

### Étape 5 — Bing (rapide, souvent négligé)

https://www.bing.com/webmasters — importer directement depuis Search Console,
puis soumettre le même sitemap.

---

## 4. Ce qui limite encore le référencement

Points identifiés pendant l'audit, à traiter quand tu veux :

1. **Pas de numéro de téléphone sur le site.** Le nom, l'adresse et le
   téléphone (NAP) doivent être identiques sur le site et sur Google Business
   Profile — c'est un signal local fort. Les données structurées sont prêtes à
   l'accueillir dans `src/lib/seo.ts`.

2. **Pas d'adresse de rue publiée.** Seule la commune est déclarée. Si tu as
   une adresse professionnelle, l'ajouter renforce le SEO local.

3. **Le H1 de la page d'accueil est « La Norme Absolue ».** Beau, mais il ne
   contient aucun mot-clé. Le titre de l'onglet et les descriptions
   compensent. Le changer serait un gain, mais c'est une décision éditoriale
   qui t'appartient — je n'y ai pas touché.

4. **La page `/devis` se rend entièrement côté client.** Google voit une page
   vide avant l'exécution du JavaScript. Peu grave pour une page de
   formulaire, mais à savoir.

5. **Aucun backlink.** C'est le vrai frein pour les requêtes concurrentielles.
   Pistes concrètes : annuaires mariage (Mariages.net, Zankyou), profils
   Lightyshare/Gearbooker pointant vers le site, partenariats avec des
   salles de réception du 95.

---

## 5. Suivi

Après 2 à 4 semaines, dans Search Console → **Performances** :

- Quelles requêtes rapportent des impressions ?
- Quelles pages sont en position 5 à 15 ? Ce sont elles qu'il faut pousser
  en priorité, un petit gain les fait basculer en première page.

Vérifier aussi **Indexation → Pages** que les 24 URLs sont bien indexées.

Pour valider les données structurées :
https://search.google.com/test/rich-results
