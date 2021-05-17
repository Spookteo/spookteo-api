# Spouk-teo API

## Utilisation

### Authentification
Pour accéder à l'API vous aurez besoin d'un compte. Pour se faire, contactez nous à l'addresse anthony.quere@lacatholille.fr.

Vos credentials contiennent un nom d'utilisateur et un mot de passe.

Vous devrez indiquer **pour chaque requête** vos identifiants dans le header :

```
X-Access-User: <username>
X-Access-Key: <key>
```


### Ajouter un record

```
POST : https://spookteo-api.herokuapp.com/api/v0/records
Body :
[
    {
        "date": "2021-04-02",
        "pressure": 1,
        "temperature": [10, 11, 12],
        "hygrometry": 2,
        "brightness": 3
    },
    {
        "date": "2021-04-03",
        "pressure": 4,
        "temperature": [13, 14, 15],
        "hygrometry": 5,
        "brightness": 6
    }
]

Reponse :
{
    "status": "ok",
    "data": {
        "records": [
            {
                "_id": "60a26fb5bee79e2ad2c93744",
                "temperature": [
                    10,
                    11,
                    12
                ],
                "date": "2021-04-02",
                "brightness": 3,
                "pressure": 1,
                "hygrometry": 2,
                "username": "testuser"
            },
            {
                "_id": "60a26fb5bee79e2ad2c93745",
                "temperature": [
                    13,
                    14,
                    15
                ],
                "date": "2021-04-03",
                "brightness": 6,
                "pressure": 4,
                "hygrometry": 5,
                "username": "testuser"
            }
        ]
    }
}
```

### Récupérer des records

```
GET : https://spookteo-api.herokuapp.com/api/v0/records
Parametres de reqête optionel :
    - user [string] un nom d'utilisateur pour filtrer les resultats (ex: https://spookteo-api.herokuapp.com/api/v0/records?user=testuser)

Reponse :
{
    "status": "ok",
    "data": {
        "records": [
            {
                "_id": "60a26fb5bee79e2ad2c93744",
                "temperature": [
                    10,
                    11,
                    12
                ],
                "date": "2021-04-02",
                "brightness": 3,
                "pressure": 1,
                "hygrometry": 2,
                "user": "testuser"
            },
            {
                "_id": "60a26fb5bee79e2ad2c93745",
                "temperature": [
                    13,
                    14,
                    15
                ],
                "date": "2021-04-03",
                "brightness": 6,
                "pressure": 4,
                "hygrometry": 5,
                "user": "testuser"
            }
        ]
    }
}
```



