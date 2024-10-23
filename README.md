URL Base
bash
Copiar código
http://localhost:3000/api
📑 Endpoints de Autenticación
1. Registrar un nuevo usuario
URL: /session/register
Método: POST
Descripción: Crea una nueva cuenta de usuario.
Ejemplo de Cuerpo de Solicitud:
json
Copiar código
{
    "first_name": "John",
    "last_name": "Doe",
    "email": "john_doe@email.com",
    "age": 99,
    "password": "123"
}
2. Iniciar sesión
URL: /session/login
Método: POST
Descripción: Inicia sesión con una cuenta de usuario existente.
Ejemplo de Cuerpo de Solicitud:
json
Copiar código
{
    "email": "john_doe@email.com",
    "password": "123"
}
🛒 Endpoints de Productos
1. Crear un nuevo producto
URL: /products/
Método: POST
Autorización: Solo Admin
Descripción: Agrega un nuevo producto al catálogo.
Ejemplo de Cuerpo de Solicitud:
json
Copiar código
{
    "name": "producto 1",
    "price": 10,
    "stock": 99
}
2. Actualizar stock de un producto
URL: /products/:pid/stock
Método: PUT
Autorización: Solo Admin
Descripción: Actualiza la cantidad de stock de un producto específico.
Parámetros de Ruta:
:pid - El ID del producto
3. Eliminar un producto
URL: /products/:pid
Método: DELETE
Autorización: Solo Admin
Descripción: Elimina un producto del catálogo.
Parámetros de Ruta:
:pid - El ID del producto
4. Obtener todos los productos
URL: /products
Método: GET
Autorización: Pública
Descripción: Obtén la lista completa de productos.
5. Obtener producto por ID
URL: /products/:pid
Método: GET
Autorización: Pública
Descripción: Obtén los detalles de un producto específico.
Parámetros de Ruta:
:pid - El ID del producto
🛒 Endpoints de Carrito (Requiere Autorización)
1. Obtener carrito por ID
URL: /session/cart/:cid
Método: GET
Autorización: Usuario
Descripción: Obtén el contenido de un carrito específico.
Parámetros de Ruta:
:cid - El ID del carrito
2. Agregar un producto al carrito
URL: /session/cart/:cid
Método: POST
Autorización: Usuario
Descripción: Agrega un producto al carrito.
Ejemplo de Cuerpo de Solicitud:
json
Copiar código
{
    "productId": "productId desde mongo",
    "quantity": 2
}
Parámetros de Ruta:
:cid - El ID del carrito
3. Completar compra
URL: /session/cart/:cid/purchase
Método: POST
Autorización: Usuario
Descripción: Finaliza la compra de todos los artículos en el carrito.
Parámetros de Ruta:
:cid - El ID del carrito
