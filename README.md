Basic CD cataloging TypeScript CLI program

First real attempt at an unguided project writing a program from scratch. Wouldn't actually recommend anyone uses this lol

Requires the use of postgresql, with a DATABASE_URL field in .env to function.

help: lists commands with descriptions

add: adds CD to database by prompting one field at a time

advadd: accepts flags (ex: --album "Toxicity") to add CD to database. Requires at least artist and album to run.

list: Lists all CDs in database when no arguments provided, lists filtered results when provided with any of the same flags from advadd, with the inclusion of the --decade flag.




Next step of the project is implementing Discog API integration to allow barcode scanning for adding CDs to database.
