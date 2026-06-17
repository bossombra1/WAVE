<<<<<<< HEAD
# Wave CI - Présentation du projet

## 1. Présentation générale
Ce projet est une landing page Vue 3 / Vite pour une application de type mobile money, avec deux parcours principaux :
- **Personal** : page grand public qui présente l’offre Wave pour les utilisateurs individuels.
- **Business** : page destinée aux professionnels qui souhaitent utiliser Wave en mode B2B.

Le projet utilise une organisation inspirée de l’**Atomic Design** pour rendre les composants modulaires et réutilisables.

## 2. Architecture du projet
La structure principale du dossier `src/` est :
- `src/App.vue` : point d’entrée de l’application. Il contient la logique de navigation entre les pages.
- `src/pages/` : pages de niveau supérieur, dont `HomePage.vue` (Personal) et `BusinessPage.vue` (Business).
- `src/components/` : composants Vue organisés selon l’Atomic Design :
  - `atoms/` : éléments les plus simples, comme `BaseButton`, `BaseHeading`, `BaseText`, `TheLogo`.
  - `molecules/` : combinaisons de plusieurs atomes, par exemple `FeatureCard`, `NavMenu`, `StoreButtons`.
  - `organisms/` : sections composées de plusieurs molécules/atomes, comme `HeroSection`, `BusinessHeroSection`, `TheNavbar`.
  - `templates/` : gabarits de page qui structurent la page complète, comme `DefaultLayout.vue` et `BusinessLayout.vue`.
- `src/data/` : fichiers de données statiques qui alimentent les sections (features, partenaires, statistiques, businessFeatures, etc.).

## 3. Atomic Design dans ce projet
L’Atomic Design applique un découpage hiérarchique :
- **Atomes** : composants très basiques, sans logique métier, utilisés partout.
- **Molécules** : combinaisons simples d’atomes pour former un bloc fonctionnel.
- **Organismes** : sections ou zones complètes de la page qui rassemblent des molécules et des atomes.
- **Templates** : structures qui organisent la page entière, encadrant les organismes.
- **Pages** : vues finales qui assemblent les templates et les organismes avec les données.

Cette structure permet de réutiliser un même composant dans plusieurs pages tout en gardant un code propre et maintenable.

## 4. Pages `Personal` et `Business`
### 4.1. `HomePage.vue` (Personal)
- C’est la page principale du parcours grand public.
- Elle utilise le template `DefaultLayout.vue`.
- Elle inclut trois organismes :
  - `HeroSection.vue`
  - `FeaturesSection.vue`
  - `TestimonialsSection.vue`
- Chaque organisme utilise des atomes et des molécules :
  - `HeroSection` emploie `BaseHeading`, `BaseText`, `StoreButtons`, `PhoneMockup`.
  - `FeaturesSection` utilise `BaseHeading`, `FeatureCard`, plus des données importées depuis `src/data/features.js`.

### 4.2. `BusinessPage.vue` (Business)
- C’est la page principale du parcours B2B.
- Elle utilise le template `BusinessLayout.vue`.
- Elle inclut quatre organismes :
  - `BusinessHeroSection.vue`
  - `PartnersStrip.vue`
  - `BusinessFeaturesSection.vue`
  - `BusinessCtaSection.vue`
- `BusinessPage.vue` importe des données structurées depuis :
  - `src/data/stats.js`
  - `src/data/partners.js`
  - `src/data/businessFeatures.js`
- Ces données sont ensuite passées en props aux organismes :
  - `BusinessHeroSection :stats="businessStats"`
  - `PartnersStrip :partners="businessPartners"`
  - `BusinessFeaturesSection :features="businessFeatures"`

## 5. Comment les pages sont appelées entre elles
La navigation ne passe pas par un routeur externe :
- `src/App.vue` contient un `ref` `currentPage` et effectue un rendu dynamique avec `<component :is="..." />`.
- Selon la valeur de `currentPage`, il affiche `HomePage`, `BusinessPage`, `AboutPage`, `CareersPage`, `BlogIndex`, ou `BlogPost`.
- Quand une page ou une navbar déclenche une navigation, elle émet un événement `navigate`.

Flux de navigation :
1. `TheNavbar.vue` détecte un clic et appelle `emit('navigate', '<page>')`.
2. Le layout parent (`DefaultLayout` ou `BusinessLayout`) relaie l’événement vers la page.
3. La page relaie l’événement vers `App.vue` avec `$emit('navigate', $event)`.
4. `App.vue` met à jour `currentPage` et recharge la vue correspondante.

Exemple de mapping :
- `/business` ou `business` → `BusinessPage`
- `about` ou `/about` → `AboutPage`
- `blog` ou `/blog` → `BlogIndex`
- autre valeur → `HomePage`

## 6. Fichiers principaux et leurs interactions
### `src/App.vue`
- Rôle : racine de l’application.
- Gère l’état de navigation `currentPage` et le rendu conditionnel des pages.
- Contient `keep-alive` pour conserver l’état des pages lors des changements.

### `src/pages/HomePage.vue`
- Rôle : page Personal.
- Utilise `DefaultLayout.vue`.
- Émet l’événement `navigate` vers `App.vue`.

### `src/pages/BusinessPage.vue`
- Rôle : page Business.
- Utilise `BusinessLayout.vue`.
- Importe et passe des données métiers aux organismes.
- Émet l’événement `navigate` vers `App.vue`.

### `src/components/templates/DefaultLayout.vue`
- Rôle : layout standard pour le parcours Personal.
- Contient `TheAnnouncementBar`, `TheNavbar`, `<slot />`, `TheFooter`.
- Réémet les événements `navigate` du navbar vers la page suivante.

### `src/components/templates/BusinessLayout.vue`
- Rôle : layout Business.
- Même logique que `DefaultLayout`, mais avec un style et une structure dédiés.
- Contient `TheAnnouncementBar`, `TheNavbar`, la zone `main`, et `TheFooter`.

### `src/components/organisms/TheNavbar.vue`
- Rôle : barre de navigation partagée.
- Utilise `NavMenu` et `TheLogo`.
- Convertit les liens en événements `navigate` pour `App.vue`.

### `src/components/organisms/TheFooter.vue`
- Rôle : pied de page global.
- Affiche les liens de `footerColumns` et les badges des stores.

### `src/components/organisms/HeroSection.vue`
- Rôle : écran d’accueil du parcours Personal.
- Assemble des atomes et une molécule (`StoreButtons`).

### `src/components/organisms/BusinessHeroSection.vue`
- Rôle : section d’introduction du parcours Business.
- Reçoit des données `stats` et affiche un visuel métier.

### `src/components/organisms/BusinessFeaturesSection.vue`
- Rôle : présente les fonctionnalités Business.
- Reçoit une prop `features` pour générer des blocs dynamiques.
- Illustre bien le principe d’organisme qui transforme des données en UI.

## 7. Conclusion
Le projet illustre une organisation claire autour de deux parcours principaux :
- `HomePage.vue` pour le contenu Personal,
- `BusinessPage.vue` pour le contenu Business.

L’Atomic Design permet de maintenir une séparation nette entre :
- composants de base (`atoms`),
- blocs fonctionnels (`molecules`),
- sections riches (`organisms`),
- pages structurées (`templates`),
- et les pages finales (`pages`).

Le système de navigation utilise des événements Vue natifs, ce qui évite l’ajout d’un routeur externe tout en gardant un rendu fluide entre `HomePage` et `BusinessPage`.
=======
# WAVE
clone de la page officielle de Wave Côte d'ivoire
>>>>>>> 346c61b08c0b32c013a0d69df916c0ed26cb6663
