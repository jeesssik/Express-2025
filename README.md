# 🧪 API Básica con Express.js

Este proyecto contiene ejemplos **muy simples** para entender cómo funciona **Express.js**, un framework para construir APIs y servidores web con Node.js.

Está pensado como material de referencia para estudiantes que están empezando a trabajar con APIs REST y herramientas como **Postman**.

---

## 📦 ¿Qué es Express?

[Express.js](https://expressjs.com/) es un framework para **Node.js** que simplifica la creación de servidores y APIs.  
Permite manejar rutas, peticiones HTTP y middlewares de forma sencilla y rápida.

---

## ✅ ¿Para qué se usa Express?

- Crear **APIs RESTful** (GET, POST, PUT, DELETE)
- Servir **páginas web**
- Manejar **formularios**
- Conectarse con bases de datos
- Agregar middlewares para seguridad, logs, autenticación, etc.

---

## 🚀 Cómo correr los ejemplos

### 1. Cloná o descargá el repo

```bash
git clone https://github.com/jeesssik/Express-2025.git
cd Express-2025
y luego entrá a la carpeta del proyecto que quieras probar
```

### 2. Instalá las dependencias
```bash
¿
npm install
```
### 3. Ejecutá la API
```bash
node index.js
```

El servidor va a estar corriendo en:
👉 http://localhost:3000

---
## 📁 Ejemplo incluido: API de nombres
Una API super simple con un array de nombres en memoria. Podés:

* Ver todos los nombres → GET /nombres

* Agregar un nombre → POST /nombres

* Editar un nombre por índice → PUT /nombres/:indice

* Borrar un nombre por índice → DELETE /nombres/:indice

---

 ## Probar con Postman
Este repo incluye una colección de Postman (api-nombres.postman_collection.json) que podés importar directamente para probar todos los endpoints.

### 📥 ¿Cómo importar?
* Abrí Postman

* Hacé clic en Import

* Elegí el archivo api-nombres.postman_collection.json

* Ejecutá las peticiones
