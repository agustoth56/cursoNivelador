# Como Correr la WebApp
Esta WebApp nos va a permitir recibir un mensaje correspondiente al metodo que elijamos utilizar (siendo GET o POST las opciones) para luego recibir los resultados con una vaquita y un "pop up" arriba de ella con el mensaje que nos quiera decir.

Instrucciones:

Teniendo previamente instalado el NodeJS y en un directorio tener la carpeta "node_modules" dentro:

1- Copiaremos al directorio donde tenemos la carpeta "node_modules" todos los archivos que se encuentran en este directorio llamado "server".

2- Vamos a instalar las extensiones "express" y "cowsay".

    2.1- Ingresamos a una consola de comandos y nos posicionamos donde tenemos nuestra WebApp (directorios, archivos, etc.)
  
    2.2- Luego escribimos el script *npm install express* para instalar la extension express.
  
    2.3- Luego escribimos el script *npm install cowsay* para instalar la extension cowsay.
    
3- En la consola de comandos escribiremos el script *node server.js* siendo *server.js* el nombre del archivo donde se encuentra esta WebApp.
  
4- Ingresaremos al Postman (previamente instalado en nuestro PC).

5- Una vez dentro del Postman vamos a ingresar en el campo donde se nos solicita una URL la IP o el Hostname junto con el puerto donde está alojada nuestra WebApp que en nuestro caso es "localhost:8080" o "127.0.0.1:8080".

6- Luego vamos a elegir que metodo utilizaremos para obtener resultados siendo GET o POST las opciones para esta WebApp.

7- Al darle "Send" en la parte inferior nos va a mostrar el mensaje correspondiente al metodo que elegimos anteriormente.

