# Rotte dell'applicazione

## GET /timeline

**Risposta**

**Status Code**: `200`

**Body**:

Se non ci sono elementi

```json
[]
```

Se ci sono elementi

```json
[
    {
        "id": 1,
        "year": 2025,
        "company": "ACME",
        "role": "Sviluppatore Junior",
        "description": "Lorem ipsum dolor sit amet, in Lorem duis veniam laborum ipsum nulla proident",
        "link": "https://google.com"
    },
    {
        "id": 2,
        "year": 2024,
        "company": "SIGMA",
        "role": "Sviluppatore Senior",
        "description": "Lorem ipsum dolor sit amet, in Lorem duis veniam laborum ipsum nulla proident",
        "link": "https://google.com"
    }
]
```

## GET /timeline/:id

**Risposta**, esempio per `/timeline/2`

Se c'è l'oggetto

**Status code**: `200`

**Body**:

```json
{
    "id": 2,
    "year": 2024,
    "company": "SIGMA",
    "role": "Sviluppatore Senior",
    "description": "Lorem ipsum dolor sit amet, in Lorem duis veniam laborum ipsum nulla proident",
    "link": "https://google.com"
}
```

Se non c'è

**Status code**: `404`

**Body**:

Senza un body oppure `null` oppure

```json 
{
    "message": "la risorsa cercata non esiste",
    "status": 404
}

```


## POST /timeline

Invio

```json
{
    "year": 2024,
    "company": "SIGMA",
    "role": "Sviluppatore Senior",
    "description": "Lorem ipsum dolor sit amet, in Lorem duis veniam laborum ipsum nulla proident",
    "link": "https://google.com"
}
```

Risposta 

Se tutto ok 

**Status Code**: `201`

**Body**:

```json
{
    "id": 12,
    "year": 2024,
    "company": "SIGMA",
    "role": "Sviluppatore Senior",
    "description": "Lorem ipsum dolor sit amet, in Lorem duis veniam laborum ipsum nulla proident",
    "link": "https://google.com",
    "created": "2025-04-02"
}
```

Se non vanno i bene i dati

**Status Code**: `406`


## PUT /timeline/:id

Invio

```json
{
    "year": 2024,
    "company": "SIGMA modificato",
    "role": "Sviluppatore Senior",
    "description": "Lorem ipsum dolor sit amet, in Lorem duis veniam laborum ipsum nulla proident",
    "link": "https://google.com"
}
```

Se tutto ok 

**Status Code**: `200` oppure `202`

**Body**:

```json
{
    "id": 12,
    "year": 2024,
    "company": "SIGMA",
    "role": "Sviluppatore Senior",
    "description": "Lorem ipsum dolor sit amet, in Lorem duis veniam laborum ipsum nulla proident",
    "link": "https://google.com",
    "created": "2025-04-02"
}
```

- Se sbaglio ID **Status Code**: `404`
- Se sbaglio il contenuto **Status Code**: `406`

## PATCH /timeline/:id

Invio

```json
{
    "year": 2023
}
```

Se tutto ok 

**Status Code**: `201`

**Body**:

```json
{
    "id": 12,
    "year": 2024,
    "company": "SIGMA",
    "role": "Sviluppatore Senior",
    "description": "Lorem ipsum dolor sit amet, in Lorem duis veniam laborum ipsum nulla proident",
    "link": "https://google.com",
    "created": "2025-04-02"
}
```

- Se sbaglio ID **Status Code**: `404`
- Se sbaglio il contenuto **Status Code**: `406`

## DELETE /timeline/:id

Non invio dati

- Se tutto ok **Status Code**: `200` oppure `204`
- Se sbaglio ID **Status Code**: `404`