# Flyvero

Web MVP de comparador de vuelos, hoteles, coches y paquetes preparada para presentación comercial y flujo de afiliación.

## Archivos principales

- `index.html`: pagina principal.
- `results.html`: pagina de resultados.
- `styles.css`: estilos visuales.
- `app.js`: interaccion del buscador.
- `assets/`: imagenes y logo.
- `privacidad.html`, `cookies.html`, `afiliados.html`, `terminos.html`: paginas legales basicas.

## Afiliacion

Los enlaces de resultados usan actualmente un identificador de demostracion (`flyvero_demo`) dentro de `app.js`.
Cuando Booking u otro proveedor entregue el ID real, cambia ese valor en la funcion `partnerUrl`.

Los precios mostrados son orientativos hasta confirmar disponibilidad en el proveedor final.

## Subida a GitHub

Sube esta carpeta como proyecto principal. Las carpetas `data/` y `tools/` estan ignoradas porque son archivos auxiliares pesados y no hacen falta para la web publicada.

## Vercel

Configuracion recomendada:

- Framework Preset: Other
- Build Command: vacio
- Output Directory: `.`
