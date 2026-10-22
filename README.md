# JuaniDev Portfolio

Monorepo npm con dos paquetes independientes:

- `frontend`: portfolio en React y Vite.
- `backend`: API en Node.js y Express.

## Requisitos

- Node.js 22 o superior.
- npm incluido con Node.js.

## Instalación

Desde la raíz del repositorio, instala todas las dependencias del monorepo:

```sh
npm install
```

Ejecuta los comandos desde la raíz para que npm use los workspaces y el lockfile compartido.

## Desarrollo

```sh
npm run dev           # Frontend en modo desarrollo
npm run dev:frontend   # Frontend
npm run dev:backend    # API
```

La API carga sus variables de entorno desde `backend/.env`. Configura `SUPABASE_URL` y `SUPABASE_PUBLISHABLE_KEY` allí antes de iniciar el backend.

## Validación y build

```sh
npm run lint
npm run build
```

Los comandos `lint` y `build` se ejecutan en el workspace del frontend.

## Deploy a Vercel

El monorepo se despliega como un único proyecto: Vercel sirve el frontend y publica `/api/projects` como función serverless.

Al importar el repositorio en Vercel, configura:

- **Root Directory**: raíz del repositorio (`.`).
- **Install Command**: `npm ci`.
- **Build Command**: `npm run build`.
- **Output Directory**: `frontend/dist`.
- Variables de entorno `SUPABASE_URL` y `SUPABASE_PUBLISHABLE_KEY` para los entornos que uses (Production, Preview y Development).

El workflow de GitHub Actions también construye los pull requests a `main` y despliega a producción en cada push a `main`. Para usarlo, configura los secretos `VERCEL_TOKEN`, `VERCEL_ORG_ID` y `VERCEL_PROJECT_ID` en **Settings > Secrets and variables > Actions**.
