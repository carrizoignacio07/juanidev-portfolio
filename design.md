# Design Document — JuaniDev Portfolio

> Documento de diseño técnico básico. Describe la arquitectura, la estructura y las decisiones
> actuales del proyecto tal como se encuentran en el código. Las secciones o datos que no se
> pueden deducir del repositorio están marcados con `⚠️ PENDIENTE` para completarlos manualmente.

| Campo | Valor |
| --- | --- |
| Proyecto | JuaniDev Portfolio (Ignacio Carrizo) |
| Versión del documento | 0.1 |
| Última actualización | 2026-11-03 |
| Autor | ⚠️ PENDIENTE (confirmar: Ignacio Carrizo / JuaniDev) |
| Estado | En desarrollo |

---

## 1. Visión general

Portfolio personal full-stack que muestra proyectos, tecnologías, agradecimientos y un formulario
de contacto. El repositorio es un **monorepo npm** con dos workspaces independientes:

- **`frontend`**: SPA en React + Vite + Tailwind CSS.
- **`backend`**: API REST en Node.js + Express que actúa como capa de acceso a **Supabase**.

En producción ambos servicios se despliegan en **Vercel** y se enrutan mediante los `rewrites`
definidos en `vercel.json`: `/api/*` va al backend y el resto al frontend.

### Objetivo del producto

⚠️ PENDIENTE: describir en 2–3 líneas el objetivo principal (por ejemplo: "servir como carta de
presentación profesional para conseguir empleo como desarrollador full-stack").

### Público objetivo

⚠️ PENDIENTE: reclutadores, clientes, otros desarrolladores, etc.

---

## 2. Alcance

### Incluido actualmente

- Página de inicio (placeholder).
- Listado de proyectos y vista de detalle por `id` (detalle aún placeholder).
- Listado de tecnologías.
- Listado de agradecimientos.
- Página de contacto con formulario (solo UI, sin envío).
- Navegación con React Router, footer con redes sociales y botón "scroll to top".
- API de solo lectura sobre cuatro tablas de Supabase.

### Fuera de alcance (por ahora)

⚠️ PENDIENTE: confirmar qué queda explícitamente fuera (panel de administración, autenticación,
blog, i18n, analytics, etc.).

---

## 3. Stack tecnológico

### Frontend

| Tecnología | Versión | Uso |
| --- | --- | --- |
| React | ^19.2.4 | Librería de UI |
| React DOM | ^19.2.4 | Renderizado |
| React Router DOM | ^7.14.1 | Enrutado SPA (`BrowserRouter`, `Routes`) |
| Vite | ^8.0.4 | Bundler y dev server |
| Tailwind CSS | ^4.3.3 | Estilos utilitarios (`@tailwindcss/vite`) |
| React Icons | ^5.6.0 | Iconos (Font Awesome / Simple Icons) |
| Formik | ^2.4.9 | Declarada pero **sin uso actual** |
| Babel + React Compiler | ^1.0.0 / ^0.2.2 | Optimización del compilador de React |
| ESLint + Prettier | ^9 / ^3 | Linting y formato |

### Backend

| Tecnología | Versión | Uso |
| --- | --- | --- |
| Node.js | >= 22 | Runtime (definido en `package.json` raíz) |
| Express | ^5.3.0 | Framework HTTP |
| Supabase JS | ^2.118.0 | Cliente de base de datos |
| `@supabase/server` | ^1.9.2 | Dependencia declarada ⚠️ PENDIENTE: confirmar si se usa |
| Helmet | ^8.3.0 | Cabeceras de seguridad |
| CORS | ^2.8.6 | Configurado con `'*'` |
| dotenv | ^18.0.9 | Variables de entorno |

### Infraestructura

| Servicio | Uso |
| --- | --- |
| Supabase | Base de datos PostgreSQL y API de datos |
| Vercel | Hosting de frontend y backend como servicios separados |
| GitHub Actions | ⚠️ PENDIENTE: el README lo menciona, pero no existe `.github/workflows` en el repo |

---

## 4. Arquitectura

```text
┌──────────────────────────────┐
│           Navegador          │
└──────────────┬───────────────┘
               │ HTTPS
               ▼
┌──────────────────────────────┐
│            Vercel            │
│  /api/*  ───────────────┐    │
│  resto   ──────────┐    │    │
└────────────────────┼────┼────┘
                     │    │
        ┌────────────▼┐  ┌▼─────────────┐
        │  Frontend   │  │   Backend    │
        │ React + Vite│  │ Express (API)│
        └─────────────┘  └──────┬───────┘
                                │ @supabase/supabase-js
                                ▼
                         ┌─────────────┐
                         │  Supabase   │
                         │ PostgreSQL  │
                         └─────────────┘
```

### Flujo de una petición

1. El usuario navega a una ruta del frontend.
2. La página llama a `fetchHttp(endpoint, setLoading, setState)`.
3. `fetchHttp` hace `GET` a la API y actualiza el estado local.
4. Express recibe la petición, consulta Supabase y responde JSON.
5. La página renderiza tarjetas (`Card`, `TechCard`, `ThanksCard`).

> **Nota:** en desarrollo, `vite.config.js` define un proxy `/api → http://localhost:3000`, pero
> `fetchHttp` usa una URL absoluta de producción hardcodeada. Ver deuda técnica en la sección 11.

---

## 5. Estructura del repositorio

```text
.
├── backend/
│   ├── config/
│   │   └── supabase.js          # Cliente Supabase + validación de env vars
│   ├── middleware/
│   │   └── onlyGetMw.js         # Rechaza métodos != GET con 405
│   ├── routes/
│   │   ├── projectsR.js         # GET /api/projects y /api/projects/:id
│   │   ├── technologiesR.js     # GET /api/technologies y /:id
│   │   ├── thanksR.js           # GET /api/thanks y /:id
│   │   └── coursesR.js          # GET /api/courses y /:id
│   ├── supabase/
│   │   ├── config.toml          # Configuración de Supabase CLI
│   │   └── migrations/          # ⚠️ PENDIENTE: vacío actualmente
│   ├── .env                     # Local (ignorado por git)
│   └── index.js                 # Entry point de Express
├── frontend/
│   ├── public/
│   │   └── favicon.ico.png
│   ├── src/
│   │   ├── assets/              # Imágenes de proyectos
│   │   ├── components/          # Componentes reutilizables
│   │   ├── context/             # Contexto de tema
│   │   ├── helpers/
│   │   │   └── fetchHttp.js     # Cliente HTTP
│   │   ├── pages/               # Vistas por ruta
│   │   ├── routes/
│   │   │   └── AppRoutes.jsx    # Definición de rutas
│   │   ├── styles.css           # Entrada de Tailwind
│   │   ├── App.jsx              # Layout raíz
│   │   └── main.jsx             # Bootstrap + BrowserRouter
│   ├── index.html
│   └── vite.config.js
├── package.json                 # Workspaces y scripts raíz
├── vercel.json                  # Servicios y rewrites
└── README.md
```

---

## 6. Frontend

### 6.1 Rutas

| Ruta | Componente | Estado |
| --- | --- | --- |
| `/` | `HomePage` | Placeholder |
| `/about` | `AboutPage` | Placeholder |
| `/projects` | `ProjectsPage` | Consume API |
| `/projects/:id` | `ProjectPage` | Placeholder (solo muestra el id) |
| `/technologies` | `TechnlogiesPage` | Consume API |
| `/thanks` | `ThanksPage` | Consume API |
| `/contact` | `ContactPage` | Formulario sin lógica |
| `*` | `NotFoundPage` | Placeholder |

### 6.2 Componentes

| Componente | Responsabilidad |
| --- | --- |
| `App` | Layout: `ThemeProvider`, `Header`, `main` con rutas, `ScrollButton`, `Footer` |
| `Header` | Logo + nombre + `NavBar` |
| `NavBar` | Enlaces de navegación y botón de descarga de CV |
| `Footer` | Iconos de redes sociales |
| `Card` | Tarjeta de proyecto con imagen, descripción y botones Demo/GitHub |
| `TechCard` | Tarjeta de tecnología (nombre, categoría, imagen) |
| `ThanksCard` | Tarjeta de agradecimiento con enlaces |
| `ContactForm` | Formulario visual (nombre, email, mensaje) |
| `ScrollButton` | Botón fijo para volver arriba |
| `LinksRRSS` | Lista de redes sociales — **no se usa actualmente** |
| `ThemeProvider` / `ThemeContext` | Estado de tema (`light` por defecto) — **sin toggle ni aplicación de estilos** |

### 6.3 Gestión de estado y datos

- Estado local con `useState` + `useEffect` en cada página.
- Sin librería de estado global ni React Query/SWR.
- `fetchHttp` centraliza las peticiones y maneja `loading` y errores.
- No hay manejo visual de errores: si la petición falla, la promesa se rechaza y se registra en consola.

### 6.4 Estilos

- Tailwind CSS v4 importado desde `src/styles.css`.
- Paleta actual observada (no formalizada):
  - Azul principal: `blue-400` / `blue-500` / `blue-600` / `blue-700`.
  - Acentos: `blue-200`, `blue-300`, `sky-100`.
  - Fondo: `gray-100`.
- Tipografía: `font-mono` en el logo; el resto usa la fuente por defecto.
- Layout: grids de 3 columnas (`grid-cols-3`) sin breakpoints responsive.
- ⚠️ PENDIENTE: definir design tokens (colores, tipografía, espaciados), breakpoints y guidelines
  de responsive/accessibilidad.

---

## 7. Backend

### 7.1 Endpoints

Todos son de solo lectura (`GET`) y devuelven JSON.

| Método | Ruta | Descripción | Respuesta |
| --- | --- | --- | --- |
| `GET` | `/` | Health check básico | `Hello World!` (texto) |
| `GET` | `/api/projects` | Lista de proyectos ordenada por `id` | `200` array |
| `GET` | `/api/projects/:id` | Proyecto por id | `200` array (o vacío) |
| `GET` | `/api/technologies` | Lista de tecnologías | `200` array |
| `GET` | `/api/technologies/:id` | Tecnología por id | `200` array (o vacío) |
| `GET` | `/api/thanks` | Lista de agradecimientos | `200` array |
| `GET` | `/api/thanks/:id` | Agradecimiento por id | `200` array (o vacío) |
| `GET` | `/api/courses` | Lista de cursos | `200` array |
| `GET` | `/api/courses/:id` | Curso por id | `200` array (o vacío) |

### 7.2 Middleware y seguridad

- `helmet()` aplica cabeceras de seguridad por defecto.
- `cors('*')` permite cualquier origen ⚠️ PENDIENTE: restringir a dominios propios en producción.
- `onlyGetMw` devuelve `405` con cabecera `Allow: GET` para cualquier otro método.
- Las variables de entorno se validan al arrancar: si faltan `SUPABASE_URL` o
  `SUPABASE_PUBLISHABLE_KEY`, el proceso lanza un error.

### 7.3 Manejo de errores

- Los errores de Supabase se registran con `console.error` y se responde
  `500 { error: 'Failed to fetch ...' }`.
- No hay middleware global de errores, logging estructurado ni validación de parámetros.
- ⚠️ PENDIENTE: definir contrato de errores y códigos de respuesta (por ejemplo, `404` cuando
  `:id` no existe).

---

## 8. Modelo de datos

Inferido a partir de las consultas `select` del backend. Los tipos y restricciones no están
versionados en el repositorio.

### `projects`

| Columna | Tipo | Notas |
| --- | --- | --- |
| `id` | ⚠️ PENDIENTE (probable `uuid` o `bigint`) | PK |
| `title` | ⚠️ PENDIENTE (probable `text`) | |
| `description` | ⚠️ PENDIENTE (probable `text`) | |
| `github_url` | ⚠️ PENDIENTE (probable `text`) | |
| `demo_url` | ⚠️ PENDIENTE (probable `text`) | |
| `image_url` | ⚠️ PENDIENTE (probable `text`) | |
| `created_at` | ⚠️ PENDIENTE (probable `timestamptz`) | |

### `technologies`

| Columna | Tipo | Notas |
| --- | --- | --- |
| `id` | ⚠️ PENDIENTE | PK |
| `name` | ⚠️ PENDIENTE | |
| `category` | ⚠️ PENDIENTE | |
| `icon` | ⚠️ PENDIENTE | El frontend espera `image`, no `icon` |

### `thanks_to`

| Columna | Tipo | Notas |
| --- | --- | --- |
| `id` | ⚠️ PENDIENTE | PK |
| `creator` | ⚠️ PENDIENTE | |
| `about` | ⚠️ PENDIENTE | |
| `img` | ⚠️ PENDIENTE | |
| `github_url` | ⚠️ PENDIENTE | |
| `about_url` | ⚠️ PENDIENTE | Usado como enlace "View" (icono YouTube) |

### `courses`

| Columna | Tipo | Notas |
| --- | --- | --- |
| `id` | ⚠️ PENDIENTE | PK |
| `title` | ⚠️ PENDIENTE | |
| `url` | ⚠️ PENDIENTE | |

### Políticas de acceso (RLS)

⚠️ PENDIENTE: documentar las políticas RLS de cada tabla. Los commits mencionan problemas de RLS,
pero no hay migraciones versionadas en `backend/supabase/migrations/`.

---

## 9. Configuración y entornos

### Variables de entorno (backend)

| Variable | Obligatoria | Descripción |
| --- | --- | --- |
| `SUPABASE_URL` | Sí | URL del proyecto Supabase |
| `SUPABASE_PUBLISHABLE_KEY` | Sí | Clave pública (anon/publishable) |
| `PORT` | No | Puerto del servidor (por defecto `3000`) |

El archivo `backend/.env` es local y está ignorado por git.

### Scripts

Desde la raíz:

| Comando | Acción |
| --- | --- |
| `npm run dev` | Frontend + backend en paralelo |
| `npm run dev:frontend` | Solo Vite |
| `npm run dev:backend` | Solo Express (`node --watch`) |
| `npm run build` | Build del frontend |
| `npm run lint` | ESLint del frontend |

### Entornos

| Entorno | Frontend | Backend |
| --- | --- | --- |
| Desarrollo | `vite` (proxy `/api → localhost:3000`) | `localhost:3000` |
| Producción | Vercel (`frontend`) | Vercel (`backend`) |

⚠️ PENDIENTE: documentar URLs de producción, dominios personalizados y gestión de secretos.

---

## 10. Despliegue

- `vercel.json` declara dos servicios: `backend` (Express) y `frontend` (Vite).
- Rewrites: `/api/(.*)` → backend; `/(.*)` → frontend.
- El backend consulta Supabase directamente (sin bindings entre servicios).
- Variables `SUPABASE_URL` y `SUPABASE_PUBLISHABLE_KEY` deben configurarse en Vercel.
- El README menciona un workflow de GitHub Actions para PRs y deploys a `main`, pero
  **no existe** `.github/workflows` en el repositorio. ⚠️ PENDIENTE: crear o corregir la
  documentación/CI.

---

## 11. Estado actual y deuda técnica

Problemas detectados al revisar el código (útiles como backlog):

1. **URL de API hardcodeada** en `fetchHttp.js` (`https://backend-juanidev-portfolio.vercel.app/api/`).
   El proxy de Vite no se usa y no hay separación dev/prod.
2. **Desajuste de campos en proyectos**: el backend devuelve `id` y `github_url`; el frontend usa
   `project._id` y `project.urlGithub`, por lo que el enlace de detalle y GitHub quedan vacíos.
3. **Desajuste en tecnologías**: el backend devuelve `icon`; `TechnlogiesPage` pasa `tech.image`.
4. **Falta `key`** en el `map` de `ProjectsPage`.
5. **Páginas placeholder**: `Home`, `About`, `ProjectPage`, `NotFoundPage`.
6. **Formulario de contacto sin lógica** y sin endpoint en el backend.
7. **Formik declarado sin uso**.
8. **Tema sin implementar**: `ThemeContext` existe, pero no hay toggle ni cambio de clases.
9. **`LinksRRSS` sin usar**.
10. **Botón "My Resume"** usa `Link` con `href` a un favicon; el comportamiento de descarga no es correcto.
11. **Sin responsive**: grids fijos de 3 columnas sin breakpoints.
12. **Sin tests**: el script `test` del backend es un placeholder.
13. **Sin migraciones versionadas** ni documentación del esquema/RLS.
14. **CORS abierto a `*`** y sin rate limiting.
15. **Endpoint `courses` sin uso en el frontend**.
16. **Health check** devuelve texto plano en `/`.

---

## 12. Decisiones abiertas

⚠️ PENDIENTE: completar con las respuestas del autor.

- ¿Cuál es el objetivo principal del portfolio y el público al que apunta?
- ¿Se planea panel de administración o los datos se gestionan directamente en Supabase?
- ¿El formulario de contacto debe enviar emails, guardar en Supabase o integrarse con un servicio
  externo (Resend, EmailJS, Formspree)?
- ¿Se implementará modo oscuro? ¿Con Tailwind `dark:` o variables CSS?
- ¿Se migrará el fetching a TanStack Query u otra librería?
- ¿Se agregará i18n (español/inglés)?
- ¿Qué estrategia de testing se adoptará (Vitest, Testing Library, Playwright)?
- ¿Se restaurará el CI/CD con GitHub Actions?
- ¿Cuál será el dominio final y la política CORS?
- ¿Se versionarán las migraciones de Supabase en el repo?

---

## 13. Próximos pasos sugeridos

1. Corregir los desajustes de campos (`_id`/`id`, `urlGithub`/`github_url`, `image`/`icon`).
2. Centralizar la URL de la API con variables de entorno (`VITE_API_URL`).
3. Implementar las páginas placeholder y el flujo de contacto.
4. Definir y aplicar el sistema de diseño (tokens, responsive, accesibilidad).
5. Versionar el esquema y las políticas RLS en `backend/supabase/migrations/`.
6. Añadir tests y CI.

---

## 14. Glosario

| Término | Definición |
| --- | --- |
| SPA | Single Page Application; el frontend renderiza rutas sin recargar la página. |
| RLS | Row Level Security de PostgreSQL/Supabase. |
| Workspace | Paquete npm independiente dentro de un monorepo. |
| Rewrite | Regla de Vercel que redirige una ruta a un servicio. |
