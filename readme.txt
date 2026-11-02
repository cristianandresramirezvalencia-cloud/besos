================================================================================
 BESITOS ESCONDIDOS — SITIO WEB LOCAL Y RECURSOS
 Proyecto Pedagógico Productivo
================================================================================

DESCRIPCIÓN DEL PROYECTO
--------------------------------------------------------------------------------
Sitio web oficial, moderno, minimalista y responsive para la marca empresarial
"BESITOS ESCONDIDOS", especializada en la elaboración y comercialización de snacks
fritos artesanales rellenos de queso y bocadillo de guayaba.

El proyecto ha sido desarrollado bajo los requerimientos estrictos de ejecución
100% OFFLINE / LOCAL:
- Cero dependencias externas o CDNs.
- Cero peticiones de red a APIs, bases de datos o servicios en la nube.
- Iconografía vectorial SVG integrada directamente en código HTML/CSS.
- Gráficas y animaciones construidas puramente con HTML5, CSS3 y JavaScript vanilla.
- Rutas de imágenes y videos locales relativas.


ESTRUCTURA DE ARCHIVOS Y DIRECTORIOS
--------------------------------------------------------------------------------
/besitos-escondidos
│
├── index.html                    -> Página web principal con las 5 secciones
│
├── css/
│   └── styles.css                -> Hoja de estilos (paleta de color, tipografía y responsive)
│
├── js/
│   └── script.js                 -> Lógica interactiva (menú móvil, animaciones, formulario)
│
├── assets/
│   ├── images/
│   │   ├── logo.png              -> Logo oficial de Besitos Escondidos
│   │   ├── producto-1.jpg        -> Fotografía principal del producto (Hero y Producto)
│   │   ├── producto-2.jpg        -> Fotografía de detalle / relleno fundido
│   │   ├── ingredientes.jpg      -> Fotografía de materias primas
│   │   ├── storytelling-cover.jpg-> Portada para el video de historia
│   │   ├── ilustracion-corazon.jpg -> Ilustración gráfica de la marca
│   │   └── producto-galeria.jpg  -> Fotografía complementaria del snack
│   │
│   └── videos/
│       └── storytelling.mp4      -> Video "La historia detrás de cada Besito"
│
└── README.txt                    -> Guía de uso y especificaciones técnicas


CÓMO EJECUTAR EL PROYECTO LOCALMENTE
--------------------------------------------------------------------------------
Opción A (Doble clic - Directo en el navegador):
  1. Abre la carpeta del proyecto.
  2. Haz doble clic sobre el archivo "index.html".
  3. Se abrirá inmediatamente en tu navegador web predeterminado (Chrome, Edge,
     Firefox, Safari, Opera).

Opción B (Servidor local ligero - Recomendado para videos MP4 locales):
  Algunos navegadores bloquean la reproducción de archivos de video locales por
  políticas de seguridad de archivos (CORS local). Para una experiencia fluida:
  1. Abre una terminal dentro de la carpeta del proyecto.
  2. Ejecuta cualquiera de estos comandos:
     - Con Python:
         python -m http.server 8080
       (Luego abre en el navegador: http://localhost:8080)
     - Con Node.js / npx:
         npx serve
       (Luego abre el enlace que indique la consola)


REEMPLAZO Y ACTUALIZACIÓN DE IMÁGENES Y VIDEO
--------------------------------------------------------------------------------
Las imágenes ya han sido organizadas y enlazadas en "assets/images/". Si deseas
actualizarlas en el futuro, solo debes reemplazar los archivos manteniendo los
nombres asignados o modificar el atributo `src` dentro de `index.html`:

- Logo de la marca:             ./assets/images/logo.png
- Foto principal del snack:     ./assets/images/producto-1.jpg
- Detalle del relleno:          ./assets/images/producto-2.jpg
- Foto de ingredientes:         ./assets/images/ingredientes.jpg
- Portada del video:            ./assets/images/storytelling-cover.jpg
- Video MP4 de Storytelling:    ./assets/videos/storytelling.mp4

* NOTA SOBRE EL VIDEO:
Si el archivo "storytelling.mp4" no se encuentra en "assets/videos/", el reproductor
mostrará automáticamente un aviso elegante que dice:
"Próximamente: nuestra historia en video". En cuanto copies tu archivo MP4 con ese
nombre, el reproductor de video se activará automáticamente.


PALETA DE COLOR APLICADA
--------------------------------------------------------------------------------
- Rojo Principal:     #A52A35 (Botones principales, acentos y llamados a la acción)
- Rojo Oscuro:        #721C24 (Títulos principales, encabezados y contrastes)
- Rosado Suave:       #D9828B (Decoraciones sutiles, citas y detalles visuales)
- Café Oscuro:        #3B2418 (Textos de lectura, fondos de footer y gastronomía)
- Café Caramelo:      #A96532 (Subtítulos, bordes y etiquetas temáticas)
- Dorado:             #D9A441 (Pequeños acentos, números de pasos y estrellas)
- Crema Suave:        #FFF4E1 (Fondos cálidos alternos de secciones)
- Crema Claro:        #FFFBF5 (Fondos de tarjetas y contenedores limpios)
- Blanco:             #FFFFFF (Espacios de respiro, tarjetas y contraste)
- Azul Cielo Oscuro:  #243B53 (Color de contraste moderado en bloques financieros)


CAMPOS CON INFORMACIÓN PENDIENTE
--------------------------------------------------------------------------------
Siguiendo las instrucciones de fidelidad a los datos suministrados en el proyecto,
los campos cuyos datos específicos no estaban en el documento base se han marcado
como:
  "[Información pendiente de completar]"
Puedes editarlos en cualquier momento dentro de "index.html" en la sección de Ficha
Técnica y en los bloques correspondientes del Modelo Canvas.


FORMULARIO Y REDES SOCIALES
--------------------------------------------------------------------------------
- Formulario de Contacto: No realiza envíos a servidores remotos. Al hacer clic en
  "ENVIAR MENSAJE", valida los campos y despliega un mensaje en pantalla:
  "¡Gracias por contactar a Besitos Escondidos!"
- Redes Sociales: Los botones de Instagram, Facebook y WhatsApp se presentan de forma
  elegante con el distintivo "Próximamente", preparados para insertar los enlaces
  definitivos cuando estén disponibles.

================================================================================
