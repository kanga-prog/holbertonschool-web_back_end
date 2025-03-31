
# **README - Structures de données JavaScript et Programmation fonctionnelle**

## **Ressources**

Lisez ou regardez les ressources suivantes pour vous aider à compléter ce projet :

- **Array**
- **Typed Array**
- **Set Data Structure**
- **Map Data Structure**
- **WeakMap**

## **Objectifs d'apprentissage**

À la fin de ce projet, vous devez être capable d'expliquer les concepts suivants à n'importe qui, sans avoir à consulter Google :

- **Comment utiliser `map`, `filter` et `reduce` sur les tableaux**
- **Les tableaux typés (Typed Arrays)**
- **Les structures de données Set, Map et WeakMap**

## **Exigences**

- Tous vos fichiers doivent être interprétés/compilés sur **Ubuntu 20.04 LTS** en utilisant **Node.js 20.x.x** et **npm 9.x.x**
- Éditeurs autorisés : **vi**, **vim**, **emacs**, **Visual Studio Code**
- Tous vos fichiers doivent se terminer par une nouvelle ligne
- Un fichier **`README.md`** à la racine du dossier du projet est obligatoire
- Votre code doit utiliser l'extension **.js**
- Votre code sera testé avec **Jest** en utilisant la commande `npm run test`
- Votre code sera vérifié avec **ESLint** pour vérifier le style et la syntaxe
- Votre code doit passer tous les tests et respecter la configuration ESLint. Vous pouvez vérifier l'ensemble du projet avec `npm run full-test`
- Toutes vos fonctions doivent être **exportées**

## **Installation et Configuration**

### 1. **Installer Node.js 20.x.x**

Tout d'abord, installez Node.js (dans votre répertoire personnel) :

```bash
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Vérifiez l'installation :

```bash
$ nodejs -v
v20.15.1
$ npm -v
10.7.0
```

### 2. **Installer Jest, Babel et ESLint**

Dans votre répertoire de projet, installez les dépendances suivantes :

#### **Installer Jest** :

```bash
npm install --save-dev jest
```

#### **Installer Babel** :

```bash
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

#### **Installer ESLint** :

```bash
npm install --save-dev eslint
```

### 3. **Fichiers de Configuration**

Assurez-vous que les fichiers de configuration suivants sont présents dans votre répertoire de projet :

- **`package.json`** : Ce fichier contient toutes les dépendances et scripts du projet.
- **`babel.config.js`** : Configure Babel pour transpiler le code.
- **`.eslintrc.js`** : Configure ESLint pour le linting de votre code.

### 4. **Installer les dépendances**

Une fois que vous avez ajouté vos fichiers de configuration et votre code, exécutez cette commande pour installer toutes les dépendances :

```bash
npm install
```

## **Tests**

- **Testez votre code** : Vous pouvez exécuter les tests avec la commande suivante :

```bash
npm run test
```

- **Test complet** : Pour vérifier l'ensemble de votre projet, exécutez :

```bash
npm run full-test
```

## **Informations supplémentaires**

- Assurez-vous que toutes vos fonctions sont exportées pour pouvoir être testées.
- Votre code doit être bien structuré et suivre les meilleures pratiques, y compris l'utilisation de concepts de programmation fonctionnelle comme `map`, `filter` et `reduce`.
- Veillez à configurer correctement ESLint afin de garantir que votre code respecte les règles de syntaxe et de style.
