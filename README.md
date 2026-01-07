# Huawei UM840 Evolution
[![Deploy to GitHub Pages](https://github.com/manuelm3z/UM840/actions/workflows/deploy-gh-pages.yml/badge.svg)](https://manuelm3z.github.io/UM840/)

UM840 es un proyecto **experimental y visual**, enfocado principalmente en **CSS moderno**. La idea es explorar, probar y pulir conceptos de diseño visual como gradientes, tipografía, layout y composición, manteniendo el stack lo más simple posible.

El proyecto está deployado y accesible públicamente:
👉 [https://manuelm3z.github.io/UM840/](https://manuelm3z.github.io/UM840/)

---

## 🎯 Objetivo del proyecto

* Explorar **CSS moderno** (gradients, layout, responsive design)
* Construir una base visual limpia y minimalista
* Servir como **playground** para experimentar con estilos antes de escalar a algo más grande
* Tener un proyecto pequeño, rápido de iterar y fácil de mantener

No es una app compleja ni un producto terminado. Es intencionalmente simple.

---

## 🧱 Stack

* **HTML**
* **CSS / SCSS** (foco principal del proyecto)
* **Vite** como bundler
* **pnpm** como package manager
* **Github Pages** para el deploy

No se usa ningún framework de JavaScript por decisión de diseño.

---

## 📁 Estructura del proyecto

```text
src/
  styles/
    main.scss        # Punto de entrada de estilos
    _variables.scss  # Variables CSS / SCSS (colores, spacing, etc.)
    _layout.scss
    _base.scss       # Reset y estilos base
    _artwork.scss

index.html           # Markup principal
```

La estructura prioriza claridad y separación de responsabilidades dentro de CSS.

---

## 🎨 Enfoque en CSS

Este proyecto pone énfasis en:

* Gradientes lineales y radiales
* Uso de `clamp()` para tipografía fluida
* Layouts simples pero escalables
* Buen contraste y jerarquía visual
* CSS moderno sin dependencias innecesarias

El objetivo no es soportar navegadores antiguos, sino escribir CSS actual y expresivo.

---

## 🚀 Scripts

```bash
pnpm i         # Instalar dependencias
pnpm dev       # Levantar entorno local
pnpm build     # Build de producción
pnpm preview   # Preview del build
```

---

## 🌍 Deploy

El proyecto está desplegado en **Github Pages** y se actualiza automáticamente con cada cambio en la rama principal.

URL pública:
[https://manuelm3z.github.io/UM840/](https://manuelm3z.github.io/UM840/)

---
