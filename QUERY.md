# Esempi di query 

## Leggo tutti i dati da timeline

`rowid` lo trasformo in `id`

```sql
SELECT rowid AS id, * FROM timeline;
```

## Leggo solo una riga con `rowid` = 4

```sql
SELECT rowid AS id, * FROM timeline WHERE rowid = 4
```

## Elimino la riga con `rowid` = 4

```sql
DELETE FROM timeline WHERE rowid = 4
```

## Inserisco una riga con dei valori

```sql
INSERT INTO timeline VALUES (2024, "ACME2", "admin", "blabla", "https://papion.it")
```

## Aggiorno alcuni campi di una riga con `rowid` = 75

```sql
UPDATE timeline SET year = 2025, company = "Bianchi" WHERE rowid = 75
```