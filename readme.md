# NodeJS : League of Legends

Ceci est un projet NodeJS qui permet de récupérer des champions de League of Legends, d'en ajouter, de les modifier et de les supprimer.
Il est possible de s'inscrire et de se connecter pour pouvoir effectuer ces actions.

### Technologies utilisées
- NodeJS
- Express
- Prisma
- Bcrypt
- JsonWebToken
- BodyParser

### Installation
1. Cloner le projet
2. Installer les dépendances avec `npm i`
3. Copier le fichier `.env.example` en `.env` et remplir les informations
4. Lancer le projet avec `npm start`

### Commandes
- `npm start` : Lance le serveur
- `npm run dev` : Lance le serveur en mode développement
- `npm run seed` : Rempli la base de données avec des données de test contenues dans le fichier `champions.json`

### Routes
- `GET /champions` : Récupère tous les champions
- `GET /champions/:id` : Récupère un champion par son id
- `POST /champions` : Ajoute un champion
- `PUT /champions/:id` : Modifie un champion
- `DELETE /champions/:id` : Supprime un champion
- `POST /auth/login` : Connecte un utilisateur
- `POST /auth/signup` : Inscrit un utilisateur

### Dossiers et fichiers
- `back` : Contient le code du serveur
- `front` : Contient le code du frontend
- `controllers` : Contient les contrôleurs
- `routes` : Contient les routes
- `prisma` : Contient les fichiers de configuration de Prisma
- `index.js` : Fichier principal du serveur
- `champions.json` : Fichier de données de test
- `router.js` : Fichier de configuration des routes