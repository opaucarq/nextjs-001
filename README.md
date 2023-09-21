# Proyecto de Usuarios con Next.js

Este proyecto utiliza Next.js para mostrar información de 6 usuarios y permite ver el detalle de cada usuario. A continuación, se describen las principales características y aspectos del proyecto.

## Rutas en Next.js

El enrutamiento se gestiona a través de las rutas de Next.js. Las rutas principales del proyecto incluyen:

- `/`: Página principal que muestra la lista de usuarios.
- `/users/[id]`: Página de detalle de usuario que muestra la información detallada de un usuario específico.

## Layout

Se utiliza un diseño común en todas las páginas para mantener la coherencia visual en todo el sitio.

## Metadata

Los metadatos de la aplicación, como el título y la descripción, se gestionan de manera adecuada para una mejor optimización de SEO.

## Fonts

Se incorporan fuentes personalizadas para mejorar la estética de la aplicación.

## Not Found

Se ha implementado una página personalizada para manejar rutas no encontradas (404).

## React Server Components

Este proyecto utiliza React Server Components para manejar la renderización del lado del servidor de manera eficiente.

## Fetch Data

La información de los usuarios se obtiene mediante solicitudes a una API externa o se almacena en un archivo JSON local. Asegúrate de proporcionar detalles sobre cómo se obtiene y almacena la información en tu proyecto.

## Loading Page

Se muestra una página de carga mientras se obtiene la información de los usuarios, brindando una experiencia de usuario más fluida.

## Params

El enrutamiento dinámico se utiliza para mostrar los detalles de un usuario específico. La información del usuario se pasa a través de los parámetros de la URL.

## Suspense

Suspense se utiliza para cargar de manera eficiente los datos necesarios para cada página.

## Import Alias

Se han configurado alias de importación para facilitar el acceso a los archivos y componentes del proyecto.

## CSS y TailwindCSS

Se utiliza Tailwind CSS para el estilo de la aplicación. Asegúrate de proporcionar detalles sobre cómo se integra Tailwind CSS en tu proyecto.

## Ejecutar la Aplicación

Asegúrate de tener Node.js instalado en tu sistema. Luego, sigue estos pasos para ejecutar la aplicación:

1. Clona este repositorio: `git clone <URL_del_repositorio>`
2. Entra en el directorio del proyecto: `cd nextjs-001`
3. Instala las dependencias: `npm install`
4. Ejecuta la aplicación: `npm run dev`

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

¡Disfruta explorando la información de los usuarios!
