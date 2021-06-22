# Como correr la WebApp Dockerizada
Esta WebApp nos va a permitir recibir un mensaje correspondiente al metodo que elijamos utilizar (siendo GET o POST las opciones) para luego recibir los resultados con una vaquita y un "pop up" arriba de ella con el mensaje que nos quiera decir pero esta vez va a ser a traves de una imagen dockerizada de esta WebApp


Instrucciones:

Teniendo previamente instalado el Docker:

1- Vamos a crearnos una imagen para poder reproducir esta WebApp ingresando en una consola de comandos (cualquiera sea su preferencia) vamos a situarnos en la carpeta donde tenemos todos los archivos para crear la WebApp y vamos a copiar el siguiente script "docker build . -t  <usuario-docker>/<nombre-de-la-imagen>".
Luego con esto ya tenemos creada la imagen con nuestra WebApp, ahora solo falta correrla para ponerla a funcionar.
  
2- Para poner a funcionar esta imagen dockerizada vamos a ingresar el siguiente script en la consola "docker run -p 5554:8080 -d <usuario-docker>/<nombre-de-la-imagen>" siendo el nombre de la imagen el mismo que ingresamos anteriormente para crearla.
  
3- Ingresaremos al Postman (previamente instalado en nuestro PC).
  
4- Una vez dentro del Postman vamos a ingresar en el campo donde se nos solicita una URL la IP o el Hostname junto con el puerto donde está alojada nuestra WebApp que en nuestro caso es "localhost:5554" o "127.0.0.1:5554" (el puerto 5554 fue el que elegimos cuando iniciamos la imagen).
  
5- Luego vamos a elegir que metodo utilizaremos para obtener resultados siendo GET o POST las opciones para esta WebApp.
  
6- Al darle "Send" en la parte inferior nos va a mostrar el mensaje correspondiente al metodo que elegimos anteriormente.

