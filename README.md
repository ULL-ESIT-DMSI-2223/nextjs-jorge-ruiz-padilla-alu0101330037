# Informe práctica Introduction to Next.js

- [Informe práctica Introduction to Next.js](#informe-práctica-introduction-to-nextjs)
  - [Código del fichero de la API para el generador de nombres Pets.js](#código-del-fichero-de-la-api-para-el-generador-de-nombres-petsjs)
  - [Código del fichero Index.js](#código-del-fichero-indexjs)
  - [Código del fichero de la API para el generador de imágenes](#código-del-fichero-de-la-api-para-el-generador-de-imágenes)
  - [Código del fichero de la API para la página 404](#código-del-fichero-de-la-api-para-la-página-404)
  - [Despliegue en Netlify](#despliegue-en-netlify)
  - [Despliegue en Vercel](#despliegue-en-vercel)
  - [Ejercicios REST](#ejercicios-rest)
  - [Ejercicios Dynamic Routes](#ejercicios-dynamic-routes)

## Código del fichero de la API para el generador de nombres Pets.js
Este fichero será el encargado de almacenar el código para que junto al fichero generate.js se pueda llevar a cabo la función de poner nombres a mascotas

![Pets_JS](/docs/images/PetJS.png)

![Pets_name](/docs/images/GenerateJS_nombres.png)

Tras implementar este código la pagina quedará así

![Pets](/docs/images/Pet.png)

## Código del fichero Index.js
Este fichero se convertirá en el menú principal de nuestro sitio, desde aquí podremos acceder a las distintas cosas que se nos exija

![Index_JS](/docs/images/IndexJS.png)

Tras implementar este código la pagina quedará así

![Index](/docs/images/Index.png)

## Código del fichero de la API para el generador de imágenes
Este es el fichero que he implementado por mi cuenta y es el que junto con Image_Generator van a mostrar la imagen que se crea con el input que pone el usuario

![Image_JS](/docs/images/ImageJS.png)

![Image_gen](/docs/images/GenerateJS_imagenes.png)
Para este fichero hay que tener en cuenta que tenemos que **actualizar la version de openai** a la 3.1.0 y cuando lo hagamos tenemos que tener en cuenta que el fichero **.env que creamos al principio se eliminará** por lo que tendremos que volver a hacer la copia del mismo como al comienzo de la practica y **volver a poner el API KEY** para que no nos salte error de permisos


Su visualización por pantalla es tal que así

![Image](/docs/images/Image.png)

## Código del fichero de la API para la página 404
Este fichero contiene el código de la implementación de l página que sustituye al 404 original

![404JS](/docs/images/404JS.png)

Aquí es donde podemos observar su visualización

![404](/docs/images/404.png)

## Despliegue en Netlify
Después de seguir las indicaciones dadas, poniendo el repositorio en publico y dandole a netlify acceso a nuestro repositorio tenemos por fin desplegado nuestro sitio en Netlify

![Despliegue_1](/docs/images/Despliegue_Netlify.png)

## Despliegue en Vercel
Tras hacer el registro en Vercel, desplegamos el sitio y cada vez que hagamos un push se actualizará allí tambien automáticamente

![Despliegue_2](/docs/images/Despliegue_Vercel.png)

## Ejercicios REST

To get all models

![Ejercicio_1](/docs/images/Rest_1.png)

To get info of a model

![Ejercicio_2](/docs/images/Rest_2.png)

To get a cute image

![Ejercicio_3](/docs/images/Rest_3.png)

To get a completion

![Ejercicio_4](/docs/images/Rest_4.png)

To get a moderation

![Ejercicio_5](/docs/images/Rest_5.png)

## Ejercicios Dynamic Routes
Tras haber terminado todos los ejercicios de la sección de Dynamic Routes aparecerá la siguiente puntuación

![Ejercicios completados](/docs/images/Dynamic_Routes_exercises_done%20.png)