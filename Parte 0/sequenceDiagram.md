sequenceDiagram
    participant navegador
    participant servidor

    navegador->>servidor: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    Note right of navegador: El servidor almacena la nota nueva.

    navegador->>servidor: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate servidor
    servidor-->>navegador: the HTML file
    deactivate servidor

    navegador->>servidor: GET https://studies.cs.helsinki.fi/exampleapp/notes.css
    activate servidor
    servidor-->>navegador: the CSS file
    deactivate servidor

    navegador->>servidor: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate servidor
    servidor->>navegador: the JS file
    deactivate servidor

    Note right of navegador: El navegador ajecuta el código JS.

    navegador->>servidor: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate servidor
    servidor->>navegador: the JSON file data
    deactivate servidor

    Note right of navegador: El navegador recarga la página con la lista actualizada.