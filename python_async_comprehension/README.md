Projet de générateur asynchrone
Ce projet implémente une coroutine asynchrone qui génère une séquence de nombres aléatoires entre 0 et 10. La coroutine attend 1 seconde à chaque itération avant de générer un nouveau nombre. Le script principal exécute cette coroutine et affiche la liste des nombres générés.

Description
Le projet contient une coroutine async_generator qui :

S'exécute pendant 10 itérations.

À chaque itération, attend 1 seconde de manière asynchrone.

Génère un nombre flottant aléatoire compris entre 0 et 10.

Renvoie ce nombre à chaque itération avec yield.

Technologies utilisées
Python 3.7+

asyncio : pour la gestion asynchrone des tâches.

random: pour la génération de nombres aléatoires.

Installation
Clonez ce dépôt sur votre machine locale :

frapper

Photocopieuse

Modificateur
git clone https://github.com/votre-utilisateur/async-generator.git
Assurez-vous d'avoir Python 3.7+ installé. Vous pouvez vérifier la version de Python en exécutant la commande suivante :

frapper

Photocopieuse

Modificateur
python3 --version
Si vous utilisez un environnement virtuel (optionnel mais recommandé) :

frapper

Photocopieuse

Modificateur
python3 -m venv venv
source venv/bin/activate  # Sur Linux/Mac
venv\Scripts\activate     # Sur Windows
Installez les dépendances (si nécessaire) :

frapper

Photocopieuse

Modificateur
pip install -r requirements.txt
Utilisation
Exécutez le script principal 0-main.py pour observer le comportement de la coroutine async_generator :

frapper

Photocopieuse

Modificateur
python3 0-main.py
Le programme attendra 1 seconde pour chaque nombre généré et affichera une liste des 10 nombres générés.

Exemple de sortie
frapper

Photocopieuse

Modificateur
[4.403136952967102, 6.9092712604587465, 6.293445466782645, 4.549663490048418, 4.1326571686139015,