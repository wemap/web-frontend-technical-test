# Test App Movie - Web

Wemap - Tous droits réservés - Les maquettes ainsi que les documents relatifs au test sont la propriété privée de la société SAS Wemap.


## Avant de commencer

Vous trouverez les maquettes dans le dossier `mockups` :
1) Home.png
2) Detail-view.png
3) My-selection.png

Dans ce test, pas de pression mais on aura certaines exigences :) notamment sur :
- les technologies utilisées;
- la segmentation en composants réutilisables;
- la propreté du code;
- la logique d’intégration;
- le bon respect du cahier des charges et des maquettes.
- l’ajout d’une logique de sélection / désélectionner les films.

Gardez bien à l'esprit qu'il convient de réaliser **uniquement** les pages décritent dans les maquettes. Inutile de développer des fonctionnalités supplémentaires, elles ne seront pas prises en compte.

## Images et icônes

- Les affiches de film se trouvent dans le dossier `assets/covers`;
- Les portraits des comédiens se trouvent dans le dossier `assets/actors`;
- Les icônes se trouvent dans le dossier `assets/icons`.

## Données

La liste des films est contenue dans le fichier `movies.json`. Le but n'étant pas d'implémenter un échange client/serveur, vous pouvez initialiser votre application avec le contenu de ce fichier à l'aide d'un `import` ou `require` (le copier / coller fonctionne aussi bien que plus sale).

## Contraintes

- L'application doit être développée en ReactJs avec l'architecture Flux ou Redux;
- L'application doit être compilée avec webpack (début de fichier de configuration vous est fourni);
- Le style de l'application doit être réalisé à l'aide de fichiers CSS ou bien en utilisant une bibliothèque de style inline (`styled-component` par exemple);
- L'application doit être entièrement responsive et ainsi s'adapter à la largeur de l'écran.

- Il **n'est pas demandé** d'implémenter une quelconque solution de stockage de la sélection de l'utilisateur. Pas de base de données ou de système de fichier, la sélection de l'utilisateur doit être vidée à chaque refresh de la page.

## Cahier des charges

### Écran d'accueil

L'écran d'accueil affiche tout d'abord un film mis en avant, désigné par son champ `isPromoted`. Un bouton permet d'ajouter directement ce film à la sélection de l'utilisateur.
Sous ceci, la liste de tous les autres films est affichée. Pour chaque film, un bouton permet d'ajouter/supprimer le film à la selection de l'utilisateur.

En cliquant sur l'affiche d'un film ou sur son titre, l'utilisateur accède à la fiche détaillée du film.

### Fiche d'un film

La fiche d'un film est composée de :
- l'affiche du film;
- son titre;
- son type (fictif, vous pouvez le mettre en dur);
- sa durée (en dur);
- ses notes (en dur);
- son synopsis (en dur);
- un bouton permettant d'ajouter le film à la sélection de l'utilisateur.
- une icône de partage est présente à côté. **On ne vous demande pas d'implémenter le partage** mais simplement d'afficher l'icône.


Un bouton "retour" permet de revenir à l'écran d'accueil.

### Ma sélection

En cliquant sur le bouton `Ma sélection` du bandeau du bas, l'utilisateur accède à sa sélection de films.
Pour chaque film, on vous demande d'afficher le titre, l'affiche du film ainsi qu'un bouton permettant de supprimer le film de la sélection.

## Livrables attendues

Il est attendu de vous un accès vers un fork fonctionnel de ce dépôt github.
