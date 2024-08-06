# Utiliser une image Node.js officielle comme image de base
FROM node:18

# Définir le répertoire de travail
WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers
COPY . .

# Construire l'application
RUN npm run build

# Exposer le port
EXPOSE 5173

# Commande pour démarrer l'application
CMD ["npm", "run", "dev"]