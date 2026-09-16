# MC-VITRES — Site vitrine

Refonte du site vitrine de **MC-VITRES**, entreprise de nettoyage (vitres, locaux, hottes
professionnelles) basée à Graveson (30), à destination des particuliers et des professionnels.

🌐 **[Voir le site en ligne](https://estelle-pratlong-dev.github.io/mc-vitres-v2/)**

---

## Le projet en bref

Une première version du site existait sous WordPress, lourde à maintenir pour une activité aux
besoins simples : présenter les prestations, la zone d'intervention et les moyens de contact.
L'objectif de la refonte était de repartir sur une base **statique et légère**, plus rapide et
plus facile à héberger, sans sacrifier une identité visuelle soignée.

## Fonctionnalités

- **Page unique** présentant l'entreprise, ses prestations, sa zone d'intervention et ses
  coordonnées.
- **Navigation avec défilement fluide** et mise en évidence de la section active au scroll.
- **Interface responsive**, pensée mobile d'abord (le premier point de contact des clients).

## Choix techniques notables

- **Aucune dépendance à un back-office** : le contenu étant stable, un site statique évite la
  complexité (et les risques de sécurité) d'un CMS pour un besoin qui n'en justifie pas un.
- **En-têtes de sécurité et CSP stricte** définis via `.htaccess`, malgré l'hébergement statique —
  a nécessité de remplacer le menu mobile de Bootstrap (qui anime sa hauteur en style inline) par
  une bascule CSS pure, pour ne pas affaiblir la politique de sécurité.
- **Identité visuelle reprise de la charte existante** de l'entreprise (carte de visite, supports
  imprimés) plutôt qu'un choix arbitraire, pour rester cohérent sur tous les supports.
- **Référencement** : données structurées (Schema.org LocalBusiness), Open Graph, sitemap, page
  404 personnalisée.
- **jQuery et le JS de Bootstrap retirés** : le site ne s'en servait plus (menu mobile déjà passé
  en CSS pur pour la CSP), les garder n'aurait fait qu'ajouter du poids et une dépendance externe
  inutile. Le défilement fluide passe par `scroll-behavior`/`scroll-margin-top` en CSS natif.

## Stack

HTML5 · CSS3 · JavaScript vanilla · Bootstrap 5 (CSS uniquement) · Font Awesome · Git

## À propos

Projet réalisé pour **MC-VITRES** à partir d'un besoin réel d'entreprise : reprendre le contenu
et l'objectif du site existant tout en proposant une nouvelle conception technique et visuelle.
