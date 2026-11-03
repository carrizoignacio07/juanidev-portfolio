# Spec — JuaniDev Portfolio

| Campo                   | Valor                                                                 |
| ----------------------- | --------------------------------------------------------------------- |
| Proyecto                | JuaniDev Portfolio                                                    |
| Autor / titular         | Ignacio Carrizo (JuaniDev)                                            |
| Versión del documento   | 0.1                                                                   |
| Fecha                   | 2026-11-03                                                            |
| Estado                  | En desarrollo                                                         |
| Repositorio             | [Link Github](https://github.com/carrizoignacio07/juanidev-portfolio) |
| Documentos relacionados | `README.md`, `design.md`                                              |

---

## 1. Resumen

Portfolio personal full-stack que muestra proyectos, tecnologías y agradecimientos, e incluye una
página de contacto. Está organizado como **monorepo npm** con dos workspaces:

- **`frontend`**: SPA con React 19, Vite y Tailwind CSS v4.
- **`backend`**: API REST de solo lectura con Node.js, Express 5 y Supabase como base de datos.

En producción ambos servicios se despliegan en **Vercel** y se enrutan con los `rewrites` de
`vercel.json`: `/api/*` hacia el backend y el resto hacia el frontend.

### Objetivo del producto

Presentarme a la industria IT para conseguir empleo como desarrollador full-stack.

### Público objetivo

Reclutadores, clientes, otros desarrolladores, etc.

---

## 2. Alcance

### Incluido actualmente

- Navegación SPA con React Router (`/`, `/about`, `/projects`, `/technologies`, `/thanks`, `/contact`).
- Listado de proyectos desde la API y ruta de detalle por `id` (detalle aún placeholder).
- Listado de tecnologías desde la API.
- Listado de agradecimientos desde la API.
- Formulario de contacto visual (sin lógica de envío).
- Header con navegación, footer con redes sociales y botón "scroll to top".
- API de solo lectura sobre las tablas `projects`, `technologies`, `thanks_to` y `courses`.

### Fuera de alcance (por ahora)

⚠️ PENDIENTE: confirmar qué queda explícitamente fuera. Candidatos: panel de administración,
autenticación, blog, i18n, analytics, tests, CI/CD.

---

## 3. Stack tecnológico

### Frontend

| Tecnología             | Versión          | Uso                        |
| ---------------------- | ---------------- | -------------------------- |
| React / React DOM      | ^19.2.4          | Librería de UI             |
| React Router DOM       | ^7.14.1          | Enrutado SPA               |
| Vite                   | ^8.0.4           | Bundler y dev server       |
| Tailwind CSS           | ^4.3.3           | Estilos utilitarios        |
| React Icons            | ^5.6.0           | Iconos                     |
| Formik                 | ^2.4.9           | Declarada, sin uso actual  |
| Babel + React Compiler | ^7.29.0 / ^1.0.0 | Compilación y optimización |
| ESLint + Prettier      | ^9 / ^3          | Linting y formato          |

### Backend

| Tecnología  | Versión  | Uso                      |
| ----------- | -------- | ------------------------ |
| Node.js     | >= 22    | Runtime                  |
| Express     | ^5.3.0   | Framework HTTP           |
| Supabase JS | ^2.118.0 | Cliente de base de datos |
| Helmet      | ^8.3.0   | Cabeceras de seguridad   |
| CORS        | ^2.8.6   | Habilitado con `'*'`     |
| dotenv      | ^18.0.9  | Variables de entorno     |

### Infraestructura

| Servicio       | Uso                                                                                |
| -------------- | ---------------------------------------------------------------------------------- |
| Supabase       | Base de datos PostgreSQL                                                           |
| Vercel         | Hosting de frontend y backend como servicios separados                             |
| GitHub Actions | ⚠️ PENDIENTE: el README lo menciona, pero no existe `.github/workflows` en el repo |

---

## 4. Arquitectura

```text
Navegador
   │ HTTPS
   ▼
Vercel
   ├── /api/*  ──► Backend (Express) ──► Supabase (PostgreSQL)
   └── resto   ──► Frontend (React + Vite)
```

### Flujo de datos

1. El usuario navega a una ruta del frontend.
2. La página llama a `fetchHttp(endpoint, setLoading, setState)`.
3. `fetchHttp` hace `GET` a la API y actualiza el estado local.
4. Express consulta Supabase y responde JSON.
5. La página renderiza tarjetas (`Card`, `TechCard`, `ThanksCard`).

> **Nota:** en desarrollo `vite.config.js` define un proxy `/api → http://localhost:3000`, pero
> `fetchHttp.js` usa una URL absoluta de producción hardcodeada.

---

## 5. Estructura del repositorio

```text
.
├── backend/
│   ├── config/supabase.js       # Cliente Supabase + validación de env vars
│   ├── middleware/onlyGetMw.js  # Rechaza métodos != GET con 405
│   ├── routes/                  # projectsR, technologiesR, thanksR, coursesR
│   ├── supabase/                # config.toml + migrations (vacío)
│   └── index.js                 # Entry point de Express
├── frontend/
│   ├── public/                  # favicon
│   ├── src/
│   │   ├── assets/              # Imágenes de proyectos
│   │   ├── components/          # Componentes reutilizables
│   │   ├── context/             # Contexto de tema
│   │   ├── helpers/fetchHttp.js # Cliente HTTP
│   │   ├── pages/               # Vistas por ruta
│   │   ├── routes/AppRoutes.jsx # Definición de rutas
│   │   ├── App.jsx              # Layout raíz
│   │   └── main.jsx             # Bootstrap + BrowserRouter
│   └── vite.config.js
├── package.json                 # Workspaces y scripts raíz
├── vercel.json                  # Servicios y rewrites
├── README.md
└── design.md
```

---

## 6. Frontend

### Rutas

| Ruta            | Componente        | Estado                             |
| --------------- | ----------------- | ---------------------------------- |
| `/`             | `HomePage`        | Placeholder                        |
| `/about`        | `AboutPage`       | Placeholder                        |
| `/projects`     | `ProjectsPage`    | Consume API                        |
| `/projects/:id` | `ProjectPage`     | Placeholder (solo muestra el `id`) |
| `/technologies` | `TechnlogiesPage` | Consume API                        |
| `/thanks`       | `ThanksPage`      | Consume API                        |
| `/contact`      | `ContactPage`     | Formulario sin lógica              |
| `*`             | `NotFoundPage`    | Placeholder                        |

### Componentes principales

| Componente                       | Responsabilidad                                                    |
| -------------------------------- | ------------------------------------------------------------------ |
| `App`                            | Layout: `ThemeProvider`, `Header`, rutas, `ScrollButton`, `Footer` |
| `Header`                         | Logo + nombre + `NavBar`                                           |
| `NavBar`                         | Enlaces de navegación y botón "My Resume"                          |
| `Footer`                         | Enlaces a LinkedIn, GitHub, Facebook, Twitter e Instagram          |
| `Card`                           | Tarjeta de proyecto con imagen, descripción y botones Demo/GitHub  |
| `TechCard`                       | Tarjeta de tecnología (nombre, categoría, imagen)                  |
| `ThanksCard`                     | Tarjeta de agradecimiento con enlaces                              |
| `ContactForm`                    | Formulario visual (nombre, email, mensaje)                         |
| `ScrollButton`                   | Botón fijo para volver arriba                                      |
| `LinksRRSS`                      | Componente de redes sociales no usado actualmente                  |
| `ThemeProvider` / `ThemeContext` | Tema `light` por defecto, sin toggle ni aplicación de estilos      |

### Estado y estilos

- Estado local con `useState` + `useEffect` en cada página.
- Sin librería de estado global ni de fetching (React Query/SWR).
- Tailwind CSS v4 importado desde `src/styles.css` (`@import "tailwindcss";`).
- Paleta observada: azules (`blue-400`, `blue-500`, `blue-600`, `blue-700`), acentos `sky-100`
  y fondo `gray-100`.
- Layout con grids fijos de 3 columnas, sin breakpoints responsive.
- ⚠️ PENDIENTE: definir design tokens, breakpoints y guidelines de accesibilidad.

---

## 7. Backend

### Endpoints

Todos son de solo lectura (`GET`) y devuelven JSON.

| Método | Ruta                    | Descripción                                  |
| ------ | ----------------------- | -------------------------------------------- |
| `GET`  | `/`                     | Health check (`Hello World!` en texto plano) |
| `GET`  | `/api/projects`         | Lista de proyectos ordenada por `id`         |
| `GET`  | `/api/projects/:id`     | Proyecto por `id` (array, puede estar vacío) |
| `GET`  | `/api/technologies`     | Lista de tecnologías ordenada por `id`       |
| `GET`  | `/api/technologies/:id` | Tecnología por `id`                          |
| `GET`  | `/api/thanks`           | Lista de agradecimientos ordenada por `id`   |
| `GET`  | `/api/thanks/:id`       | Agradecimiento por `id`                      |
| `GET`  | `/api/courses`          | Lista de cursos ordenada por `id`            |
| `GET`  | `/api/courses/:id`      | Curso por `id`                               |

### Middleware y seguridad

- `helmet()` aplica cabeceras de seguridad por defecto.
- `cors('*')` permite cualquier origen ⚠️ PENDIENTE: restringir a dominios propios en producción.
- `onlyGetMw` responde `405` con cabecera `Allow: GET` para cualquier otro método.
- Las variables de entorno se validan al arrancar: si faltan `SUPABASE_URL` o
  `SUPABASE_PUBLISHABLE_KEY`, el proceso lanza un error.

### Manejo de errores

- Los errores de Supabase se registran con `console.error` y se responde
  `500 { error: 'Failed to fetch ...' }`.
- No hay middleware global de errores, logging estructurado ni validación de parámetros.
- ⚠️ PENDIENTE: definir el contrato de errores (por ejemplo, `404` cuando el `id` no existe).

---

## 8. Modelo de datos

Inferido a partir de las consultas `select` del backend. Los tipos y restricciones no están
versionados en el repositorio.

### `projects`

| Columna       | Tipo                                      | Notas |
| ------------- | ----------------------------------------- | ----- |
| `id`          | ⚠️ PENDIENTE (probable `uuid` o `bigint`) | PK    |
| `title`       | ⚠️ PENDIENTE (probable `text`)            |       |
| `description` | ⚠️ PENDIENTE (probable `text`)            |       |
| `github_url`  | ⚠️ PENDIENTE (probable `text`)            |       |
| `demo_url`    | ⚠️ PENDIENTE (probable `text`)            |       |
| `image_url`   | ⚠️ PENDIENTE (probable `text`)            |       |
| `created_at`  | ⚠️ PENDIENTE (probable `timestamptz`)     |       |

### `technologies`

| Columna    | Tipo         | Notas                                 |
| ---------- | ------------ | ------------------------------------- |
| `id`       | ⚠️ PENDIENTE | PK                                    |
| `name`     | ⚠️ PENDIENTE |                                       |
| `category` | ⚠️ PENDIENTE |                                       |
| `icon`     | ⚠️ PENDIENTE | El frontend espera `image`, no `icon` |

### `thanks_to`

| Columna      | Tipo         | Notas                                    |
| ------------ | ------------ | ---------------------------------------- |
| `id`         | ⚠️ PENDIENTE | PK                                       |
| `creator`    | ⚠️ PENDIENTE |                                          |
| `about`      | ⚠️ PENDIENTE |                                          |
| `img`        | ⚠️ PENDIENTE |                                          |
| `github_url` | ⚠️ PENDIENTE |                                          |
| `about_url`  | ⚠️ PENDIENTE | Usado como enlace "View" (icono YouTube) |

### `courses`

| Columna | Tipo         | Notas                           |
| ------- | ------------ | ------------------------------- |
| `id`    | ⚠️ PENDIENTE | PK                              |
| `title` | ⚠️ PENDIENTE |                                 |
| `url`   | ⚠️ PENDIENTE | Endpoint sin uso en el frontend |

### Políticas de acceso (RLS)

⚠️ PENDIENTE: documentar las políticas RLS de cada tabla. No hay migraciones versionadas en
`backend/supabase/migrations/`.

---

## 9. Configuración y entornos

### Variables de entorno (backend)

| Variable                   | Obligatoria | Descripción                              |
| -------------------------- | ----------- | ---------------------------------------- |
| `SUPABASE_URL`             | Sí          | URL del proyecto Supabase                |
| `SUPABASE_PUBLISHABLE_KEY` | Sí          | Clave pública (anon/publishable)         |
| `PORT`                     | No          | Puerto del servidor (por defecto `3000`) |

El archivo `backend/.env` es local y está ignorado por git.

### Scripts (desde la raíz)

| Comando                | Acción                         |
| ---------------------- | ------------------------------ |
| `npm run dev`          | Frontend + backend en paralelo |
| `npm run dev:frontend` | Solo Vite                      |
| `npm run dev:backend`  | Solo Express (`node --watch`)  |
| `npm run build`        | Build del frontend             |
| `npm run lint`         | ESLint del frontend            |

### Entornos

| Entorno    | Frontend                             | Backend                     |
| ---------- | ------------------------------------ | --------------------------- |
| Desarrollo | Vite (proxy `/api → localhost:3000`) | `http://localhost:3000`     |
| Producción | Vercel (servicio `frontend`)         | Vercel (servicio `backend`) |

⚠️ PENDIENTE: documentar URLs de producción, dominio personalizado y gestión de secretos.

---

## 10. Despliegue

- `vercel.json` declara dos servicios: `backend` (Express) y `frontend` (Vite).
- Rewrites: `/api/(.*)` → backend; `/(.*)` → frontend.
- El backend consulta Supabase directamente, sin bindings entre servicios.
- Variables `SUPABASE_URL` y `SUPABASE_PUBLISHABLE_KEY` deben configurarse en Vercel.
- El README menciona un workflow de GitHub Actions, pero no existe `.github/workflows`.
  ⚠️ PENDIENTE: crear el workflow o corregir la documentación.

---

## 11. Estado actual y deuda técnica

1. URL de API hardcodeada en `fetchHttp.js`; el proxy de Vite no se usa.
2. Desajuste de campos en proyectos: el backend devuelve `id`/`github_url` y el frontend usa
   `project._id`/`project.urlGithub`.
3. Desajuste en tecnologías: el backend devuelve `icon` y el frontend usa `tech.image`.
4. Falta `key` en el `map` de `ProjectsPage`.
5. Páginas placeholder: `Home`, `About`, `ProjectPage` y `NotFoundPage`.
6. Formulario de contacto sin lógica ni endpoint en el backend.
7. Formik declarado sin uso.
8. Tema sin implementar (sin toggle ni cambio de clases).
9. `LinksRRSS` sin usar.
10. Botón "My Resume" apunta a un favicon; el comportamiento de descarga no es correcto.
11. Sin diseño responsive (grids fijos de 3 columnas).
12. Sin tests (el script `test` del backend es un placeholder).
13. Sin migraciones versionadas ni documentación del esquema/RLS.
14. CORS abierto a `*` y sin rate limiting.
15. Endpoint `courses` sin uso en el frontend.
16. Health check devuelve texto plano en `/`.

---

## 12. Requisitos no funcionales

⚠️ PENDIENTE: completar.

- **Rendimiento:** ⚠️ PENDIENTE (objetivos de carga, Core Web Vitals).
- **Accesibilidad:** ⚠️ PENDIENTE (nivel WCAG objetivo, navegación por teclado, contraste).
- **Compatibilidad:** ⚠️ PENDIENTE (navegadores y dispositivos soportados).
- **SEO:** ⚠️ PENDIENTE (metadatos, Open Graph, sitemap).
- **Seguridad:** ⚠️ PENDIENTE (CORS, rate limiting, secretos).
- **Testing:** ⚠️ PENDIENTE (herramientas y cobertura mínima).
- **Internacionalización:** ⚠️ PENDIENTE (¿español, inglés o ambos?).

---

## 13. Preguntas abiertas

- [ ] ¿Cuál es el objetivo principal del portfolio y a quién apunta?
- [ ] ¿Se planea un panel de administración o los datos se gestionan directamente en Supabase?
- [ ] ¿El formulario de contacto debe enviar emails, guardar en Supabase o integrarse con un
      servicio externo (Resend, EmailJS, Formspree)?
- [ ] ¿Se implementará modo oscuro? ¿Con Tailwind `dark:` o variables CSS?
- [ ] ¿Se migrará el fetching a TanStack Query u otra librería?
- [ ] ¿Se agregará i18n (español/inglés)?
- [ ] ¿Qué estrategia de testing se adoptará (Vitest, Testing Library, Playwright)?
- [ ] ¿Se restaurará el CI/CD con GitHub Actions?
- [ ] ¿Cuál será el dominio final y la política CORS?
- [ ] ¿Se versionarán las migraciones de Supabase en el repositorio?

---

## 14. Próximos pasos sugeridos

1. Corregir los desajustes de campos (`_id`/`id`, `urlGithub`/`github_url`, `image`/`icon`).
2. Centralizar la URL de la API con variables de entorno (`VITE_API_URL`).
3. Implementar las páginas placeholder y el flujo de contacto.
4. Definir y aplicar el sistema de diseño (tokens, responsive, accesibilidad).
5. Versionar el esquema y las políticas RLS en `backend/supabase/migrations/`.
6. Añadir tests y CI.
