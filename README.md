# TerrePlus — React + JavaScript

Migración web del proyecto Expo/React Native a React 19.2.8 con JavaScript. No contiene TypeScript, Expo, React Native ni Axios.

## Ejecutar

```bash
npm install
npm run dev
```

La aplicación apunta por defecto al gateway local `http://localhost:8080/api`. Para cambiar la API, ajuste `VITE_API_URL` en `.env`.

## Funcionalidades preservadas

- Registro e inicio/cierre de sesión, con token en `localStorage` y encabezado `x-access-token`.
- Registro, historial, consulta y estimación de terrenos mediante los mismos endpoints.
- Mapa de OpenStreetMap/Leaflet para seleccionar y visualizar ubicaciones.
- Estadísticas del dashboard.
- Consulta, edición y carga de imagen de perfil a Cloudinary.
