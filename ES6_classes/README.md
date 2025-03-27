Métaprogrammation et symboles - Projet README
Ressources
Lire ou regarder :

Cours

Métaprogrammation

Objectifs d'apprentissage
À la fin de ce projet, vous devriez être capable d’expliquer les concepts suivants sans avoir besoin de les rechercher :

Comment définir une classe

Comment ajouter des méthodes à une classe

Pourquoi et comment ajouter une méthode statique à une classe

Comment étendre une classe à partir d'une autre

Métaprogrammation et symboles

Exigences
Votre projet sera exécuté dans l'environnement suivant :

Ubuntu 20.04 LTS

Node.js 20.xx et npm 9.xx

Éditeurs autorisés
Vous pouvez utiliser les éditeurs suivants pour votre code :

vi

vigueur

emacs

Visual Studio Code

Exigences supplémentaires
Tous les fichiers doivent se terminer par une nouvelle ligne.

Un README.mdfichier doit être inclus à la racine du dossier du projet.

Votre code doit avoir l' .jsextension.

Le code sera testé à l'aide de Jest et vous pourrez exécuter les tests à l'aide de npm run test.

Le code sera analysé avec ESLint . Assurez-vous que votre code passe tous les tests d'analyse.

Vous pouvez exécuter cette procédure npm run full-testpour vérifier que l'ensemble du projet réussit à la fois les tests et le linting.

Installation
Installer NodeJS 20.xx
Tout d’abord, dans votre répertoire personnel, exécutez :

frapper

Photocopieuse
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
Vérifiez l'installation de Node.js et npm :

frapper

Photocopieuse
$ nodejs -v
v20.15.1

$ npm -v
10.7.0
Installer Jest, Babel et ESLint
Dans votre répertoire de projet, installez les dépendances nécessaires :

Installer Jest :

frapper

Photocopieuse
npm install --save-dev jest
Installer Babel pour l'intégration Jest :

frapper

Photocopieuse
npm install --save-dev babel-jest @babel/core @babel/preset-env
Installer ESLint pour le linting :

frapper

Photocopieuse
npm install --save-dev eslint
Fichiers de configuration
package.json
Ce fichier est nécessaire pour gérer les dépendances et les scripts du projet.

babel.config.js
Ce fichier est utilisé pour configurer Babel afin d'assurer la compatibilité avec la syntaxe JavaScript moderne.

.eslintrc.js
Ce fichier contient la configuration ESLint qui applique les règles de qualité et de style du code.

Installer les dépendances
Après avoir créé le package.json, n'oubliez pas d'exécuter :

frapper

Photocopieuse
$ npm install
Cela installera toutes les dépendances répertoriées dans le package.json.

Tâches
Les tâches de ce projet vous guideront dans l'apprentissage de la mise en œuvre de techniques de métaprogrammation en JavaScript, ainsi que dans la compréhension du fonctionnement des symboles et des classes en JavaScript moderne. Vous devrez définir des classes, ajouter des méthodes, créer des méthodes statiques et explorer des concepts avancés de métaprogrammation. Assurez-vous de terminer chaque tâche et de valider votre code à l'aide des commandes de test et de linting fournies.

