# Documentación de la API

## Descripción del Proyecto

Esta API proporciona funcionalidades para la autenticación de usuarios, gestión de productos y operaciones de carrito. A continuación se presenta una lista de los endpoints disponibles, categorizados por funcionalidad. Asegúrate de manejar la autorización para ciertas rutas.

## URL Base

http://localhost:3000/api

---

## 📑 **Endpoints de Autenticación**

### 1. **Registrar un nuevo usuario**

- **URL:** `/session/register`
- **Método:** `POST`
- **Descripción:** Crea una nueva cuenta de usuario.
- **Ejemplo de Cuerpo de Solicitud:**
  ```json
  {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john_doe@email.com",
    "age": 99,
    "password": "123"
  }
  ```

### 2. **Iniciar sesión**

- **URL:** `/session/login`
- **Método:** `POST`
- **Descripción:** Crea una nueva cuenta de usuario.
- **Ejemplo de Cuerpo de Solicitud:**

  ```json
  {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john_doe@email.com",
    "age": 99,
    "password": "123"
  }
  ```

  ***

## 🛒 **Endpoints de Productos**

### 1. **Crear un nuevo producto**

- **URL:** `/products/`
- **Método:** `POST`
- **autorización:** Solo Admin
- **Descripción:** Crea una nueva cuenta de usuario.
- **Ejemplo de Cuerpo de Solicitud:**

  ```json
  {
    "name": "producto 1",
    "price": 10,
    "stock": 99
  }
  ```

### 2. **Actualizar stock de un producto**

- **URL:** `/products/:pid/stock`
- **Método:** `PUT`
- **autorización:** Solo Admin
- **Descripción:** Actualiza la cantidad de stock de un producto específico.
- **Parámetros de la rta:**
  - `:pid` - El ID del producto.

### 3. **Eliminar un producto**

- **URL:** `/products/:pid/`
- **Método:** `DELETE`
- **autorización:** Solo Admin
- **Descripción:** Elimina un producto específico.
- **Parámetros de la rta:**
  - `:pid` - El ID del producto.

### 4. **Obtener todos los productos**

- **URL:** `/products`
- **Método:** `GET`
- **autorización:** Pública.
- **Descripción:** Obtén la lista completa de productos.

### 5. **Obtener producto por ID**

- **URL:** `/products/:pid`
- **Método:** `GET`
- **autorización:** Pública.
- **Descripción:** Obtén los detalles de un producto específico.
- **Parámetros de Ruta:**
  - `:pid` - El ID del producto.

## 🛒 **Endpoints de Carrito (Requiere Autorización)**

### 1. **Obtener producto por ID**

- **URL:** `/session/cart/:cid`
- **Método:** `GET`
- **autorización:** Usuario.
- **Descripción:** Obtén el contenido de un carrito específico.
- **Parámetros de Ruta:**
  - `:cid` - El ID del carrito.

### 2. **Agregar un producto al carrito**

- **URL:** `/session/cart/:cid`
- **Método:** `POST`
- **autorización:** Usuario.
- **Descripción:** Agrega un producto al carrito.
- **Ejemplo de Cuerpo de Solicitud:**

  ```json
  {
    "productId": "productId desde mongo",
    "quantity": 2
  }
  ```
- **Parámetros de Ruta:**
  - `:cid` - El ID del carrito.

### 3. **Eliminar un producto del carrito**

- **URL:** `/session/cart/:cid/products/pid`
- **Método:** `POST`
- **autorización:** Usuario.
- **Descripción:** Agrega un producto al carrito.
- **Parámetros de Ruta:**
  - `:cid` - El ID del carrito.
  - `:pid` - El ID del producto.

### 4. **Completar compra**

- **URL:** `/session/cart/:cid/purchase`
- **Método:** `POST`
- **autorización:** Usuario.
- **Descripción:** Finaliza la compra de todos los artículos en el carrito.
- **Parámetros de Ruta:**
  - `:cid` - El ID del carrito.

