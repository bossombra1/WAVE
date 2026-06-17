# Wave CI

Ce projet est une réplique (clone) de la page officielle de **Wave Côte d'Ivoire**. Il s'agit d'une application web développée avec **Vue 3** et **Vite**, structurée selon les principes de l'**Atomic Design** pour garantir une architecture modulaire et maintenable.

## 🚀 À propos du projet

L'application présente deux parcours utilisateurs distincts :
- **Personal** : L'offre grand public pour les utilisateurs individuels.
- **Business** : L'offre professionnelle pour les entreprises (B2B).

## 🏗️ Architecture Technique

Le projet suit une organisation hiérarchique stricte :
- **Atomes** : Composants de base (boutons, titres, logos).
- **Molécules** : Combinaisons d'atomes (cartes de fonctionnalités, menus).
- **Organismes** : Sections complètes (Hero, Navbar, Footer, Features).
- **Templates** : Structures de mise en page (DefaultLayout, BusinessLayout).
- **Pages** : Vues finales assemblant les templates et les données.

### Navigation
Le projet n'utilise pas de routeur externe. La navigation est gérée dynamiquement via un système d'événements Vue (`Maps`) et un rendu conditionnel dans `App.vue` (`<component :is="..." />`).

## 🛠️ Stack Technique
- **Framework** : Vue 3
- **Build Tool** : Vite
- **Architecture** : Atomic Design

## 📂 Structure des dossiers
- `src/components/` : Composants atomiques.
- `src/pages/` : Vues principales (`HomePage`, `BusinessPage`).
- `src/data/` : Fichiers de données statiques (features, stats, partenaires).

## 📦 Installation

1. Cloner le dépôt :
   ```bash
   git clone [https://github.com/bossombra1/WAVE.git](https://github.com/bossombra1/WAVE.git)