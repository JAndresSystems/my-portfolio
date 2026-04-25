# Documentación del Proyecto: Portfolio Jairo Andrés

Este documento explica cómo funciona el proyecto y cómo puedes realizar los cambios más comunes.

## 1. Estructura del Proyecto

El proyecto está construido con **React 18**, **Vite**, **Tailwind CSS** y **Framer Motion** para animaciones.

- `src/`: Contiene todo el código fuente.
  - `App.tsx`: Punto de entrada principal que organiza las secciones.
  - `constants.tsx`: **El archivo más importante**. Aquí es donde vive toda la información (textos, proyectos, habilidades, experiencia).
  - `components/`: Contiene los archivos individuales de cada sección (Hero, Proyectos, Experiencia, etc.).
  - `AppContext.tsx`: Maneja el estado global, como el idioma (Español/Inglés).
  - `index.css`: Estilos globales y configuración de temas (Claro/Oscuro).

---

## 2. Cómo cambiar la Foto de Perfil

Actualmente se muestra un icono por defecto. Sigue estos pasos para poner tu foto:

1. **Sube tu imagen**: Pon tu archivo de imagen (ej: `foto-jairo.jpg`) en la carpeta `public/`.
2. **Edita el código**: Abre el archivo `src/components/Hero.tsx`.
3. Busca el comentario que dice `¿Quieres cambiar tu foto?`.
4. Descomenta la línea `<img src="/foto-jairo.jpg" ... />` y asegúrate de que el nombre del archivo coincida con el que subiste.

---

## 3. Cómo cambiar las Imágenes de los Proyectos

Los proyectos se definen en `src/constants.tsx`. He añadido un campo `image` para que puedas usar imágenes reales:

1. **Sube las imágenes**: Pon las capturas de pantalla de tus proyectos en la carpeta `public/`.
2. **Edita constants.tsx**: Busca la constante `PROJECTS`.
3. En el proyecto que desees cambiar, pon la ruta de la imagen en el campo `image`:
   ```typescript
   {
     title: 'LegalMind AI',
     image: '/captura-legalmind.png', // Añade la ruta aquí
     ...
   }
   ```
4. Si el campo `image` está vacío, el sistema mostrará automáticamente el icono configurado.

---

## 4. Cómo cambiar Textos y Traducciones

Todo el contenido textual está centralizado en `src/constants.tsx` dentro del objeto `TRANSLATIONS`.

- Si quieres cambiar algo en español, busca la sección `es: { ... }`.
- Si quieres cambiar algo en inglés, busca la sección `en: { ... }`.
- Simplemente cambia el valor de la propiedad correspondiente (ej: `hero.description`) y guarda el archivo.

---

## 5. Cómo añadir nuevas Habilidades o Experiencia

- **Habilidades**: Edita las constantes `LENGUAJES`, `FRAMEWORKS`, `DEVOPS_CLOUDS` o `DATABASES` en `constants.tsx`. Puedes usar iconos de la librería `lucide-react`.
- **Experiencia**: Añade un nuevo objeto al array `EXPERIENCE` en `constants.tsx`. Recuerda añadir las balas de texto tanto para `es` como para `en`.

---

## 6. Colores y Estilos

El proyecto utiliza **Tailwind CSS**. Los colores principales se definen en `src/index.css` a través de variables de entorno de Tailwind y clases de utilidad.
- El color de "acento" (cian/azul) se puede buscar como `text-accent` o `bg-accent`.

---

## 7. Flujo de Funcionamiento (Carga)

1. `main.tsx` renderiza `App.tsx` envuelto en `AppProvider`.
2. `AppProvider` carga las traducciones de `constants.tsx` según el idioma del navegador.
3. `App.tsx` organiza los componentes, los cuales leen su contenido directamente de `AppContext` o `constants.tsx`.
4. Al hacer scroll, las animaciones de `motion` (Framer Motion) se activan gracias a la propiedad `whileInView`.



## 🛠️ Requisitos Previos (Prerequisites)

Antes de comenzar, asegúrate de tener instalado lo siguiente:
- **Node.js**: Versión 18.0 o superior (Recomendado LTS).
- **npm**: Viene instalado con Node.js.

## 🚀 Instalación y Uso (Setup)

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repo.git
   cd nombre-del-repo
