# Taller 04 — ReactAcademy con rutas

Solución del Taller 04 de la Semana 9: **Rutas y Navegación**.

## Requisitos implementados

- `BrowserRouter` en `src/main.jsx`.
- `Routes` y `Route` en `src/App.jsx`.
- Vistas separadas dentro de `src/views/`.
- Componentes reutilizables dentro de `src/components/`.
- Navbar visible en todas las rutas.
- Navegación interna con `Link` y `NavLink` de React Router, sin `<a href>`.
- Rutas:
  - `/` — inicio.
  - `/cursos` — cursos.
  - `/nosotros` — nosotros.
  - `/login` — formulario de interfaz.
  - `*` — página 404.
- En `/login`:
  - El botón permanece deshabilitado mientras falte correo o contraseña.
  - Después de enviar, correo y contraseña quedan deshabilitados.
  - No hay backend ni autenticación real.
- `node_modules` está excluido con `.gitignore`.

## Cómo ejecutar el proyecto

Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
npm run dev
```

Vite mostrará una URL local, normalmente:

```text
http://localhost:5173
```

## Probar la versión de producción

```bash
npm run build
npm run preview
```

## Subir a GitHub

Crea primero un repositorio vacío en GitHub. Luego, desde esta carpeta:

```bash
git init
git add -A
git commit -m "feat: taller 04 con React Router"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
git push -u origin main
```

No subas `node_modules`. El archivo `.gitignore` ya lo excluye.
