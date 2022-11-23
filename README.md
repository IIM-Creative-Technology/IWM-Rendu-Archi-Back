# Architecture
Samir CHALAL / Léa DE AMORIM

## Lancer le projet
```sh
> git clone git@github.com:IIM-Creative-Technology/IWM-Rendu-Archi-Back.git
> cd IWM-Rendu-Archi-Back
> npm install
```

```sh
> npm run dev
```

## API

### Clients
| Method | Path            | Description                                       |
| ------ | --------------- | ------------------------------------------------- |
| GET    | `/clients`      | Récupérer tous les clients.                       |
| GET    | `/clients/<id>` | Récupérer un client via son `<id>`.               |
| POST   | `/clients/new`  | Ajouter un client.                                |
| PUT    | `/clients/<id>` | Editer un client via son `<id>`.                  |
| DELETE | `/clients/<id>` | Supprimer un client via son `<id>`.               |

### Documents
| Method | Path                 | Description                                       |
| ------ | -------------------- | ------------------------------------------------- |
| GET    | `/documents`         | Récupérer tous les documents.                     |
| GET    | `/documents/<id>`    | Récupérer un documents via son `<id>`.            |
| POST   | `/documents/upload`  | Télécharger un document.                          |
| DELETE | `/documents/<id>`    | Supprimer un document via son `<id>`.             |
