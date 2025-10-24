BarieCarlos-backend-BA

Este proyecto permite interactuar con la API de FakeStore desde la terminal usando Node.js. Podés consultar, crear y eliminar productos mediante comandos específicos.

## Requisitos

1. Tener Node.js instalado
2. Ejecutar:
   npm init -y
3. En package.json agregar:
   "type": "module"
4. En package.json dentro de "scripts":
   "scripts": {
   "start": "node index.js"
   }

## Comandos disponibles

Obtener todos los productos
**npm run start GET products**

---

Obtener un producto específico por ID
**npm run start GET products/`<id>`**
Ejemplo:
npm run start GET products/5

---

Crear un nuevo producto
**npm run start POST products "`<title>`" `<price>` "`<category>`"**
Ejemplo:
npm run start POST products "Camiseta TechLab" 299 "ropa"

---

Eliminar un producto por ID
**npm run start DELETE products/`<id>`**
Ejemplo:
npm run start DELETE products/7

## ⚠️ Validaciones

- El recurso debe ser "products", de lo contrario se mostrará "Recurso no válido".
- Si faltan parámetros en POST o DELETE, se mostrará un mensaje de error explicando el uso correcto.
- Si el método no es reconocido, se mostrará: "Método no reconocido. Usa GET, POST o DELETE."
