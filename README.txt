AMANDE — Sitio institucional SEO (HTML estático)

DOMINIO PRINCIPAL: https://www.amandesub.com.ar
TIENDA: https://shop.amandesub.com.ar
HOSTING: Cloudflare Workers (static assets)
BRANCH DE TRABAJO: seo/conversion-multipage

================================================================================
1) CLOUDFLARE WORKERS — CONFIG DEL REPO
================================================================================
Archivos clave:
- wrangler.jsonc     → Worker estático + bloque "previews" (requerido por CI)
- _redirects         → 301 SEO (productos/categorías viejas → shop)
- robots.txt, sitemap.xml, index.html, assets/, páginas */

No hay build step: assets.directory = "./" (raíz del repo).

Workers Builds (recomendado):
- Deploy command:  npx wrangler deploy
- Preview command: npx wrangler preview
- El error "missing previews block" se resuelve con "previews": {} en wrangler.jsonc.

Local:
  npx wrangler deploy          # producción (requiere auth)
  npx wrangler preview         # preview de la branch
  python3 -m http.server       # solo vista local sin redirects CF

================================================================================
2) DNS / DOMINIO (dashboard Cloudflare)
================================================================================
- Custom domain del Worker: www.amandesub.com.ar
- Apex amandesub.com.ar → www: configurar redirect en Cloudflare
  (SSL/TLS o Bulk Redirects). _redirects NO hace redirects a nivel dominio.
- HTTPS: Full (strict) recomendado.

================================================================================
3) DESPUÉS DEL DEPLOY — VERIFICACIONES
================================================================================
A. Abrí:
   https://www.amandesub.com.ar/
   https://amandesub.com.ar/          → 301 a https://www... (DNS/CF)
   https://www.amandesub.com.ar/sitemap.xml
   https://www.amandesub.com.ar/robots.txt
   https://www.amandesub.com.ar/contacto/
   https://www.amandesub.com.ar/personaliza-tu-producto/

B. Redirect SEO → shop:
   https://www.amandesub.com.ar/productos/mate-personalizado/
   → https://shop.amandesub.com.ar/productos/mate-personalizado/

================================================================================
4) GOOGLE SEARCH CONSOLE (obligatorio)
================================================================================
1. Verificá https://www.amandesub.com.ar/ (y si podés, también shop).
2. Envíá el sitemap: https://www.amandesub.com.ar/sitemap.xml
3. Pedí indexación de las páginas nuevas.
4. Revisá 404: URLs viejas de productos en www deben figurar como 301.

================================================================================
5) TIENDA NUBE (obligatorio para no diluir SEO)
================================================================================
1. Dominio primario de la tienda = shop.amandesub.com.ar
   (canonicals/schema NO deben apuntar a www).
2. En el tema/menú, linkeá a https://www.amandesub.com.ar/
3. Revisá titles/meta de categorías clave.
4. En GSC de shop: enviá el sitemap de Tienda Nube.

================================================================================
6) GOOGLE ANALYTICS 4
================================================================================
1. Creá GA4 y copiá el Measurement ID (G-XXXXXXXXXX).
2. Editá assets/analytics-config.js:
     window.AMANDE_GA4_ID = "G-ABC123XYZ";
3. Eventos: cta_shop y cta_whatsapp (clicks a shop / wa.me).

================================================================================
7) REDES (recomendado)
================================================================================
- Sin local físico: no publiques dirección en Google Business ni redes.
- Contacto: WhatsApp +54 11 2507-8414 · amande.subli@gmail.com
- Instagram bio → https://www.amandesub.com.ar/

================================================================================
8) ESTRUCTURA DEL SITIO
================================================================================
/                              Home institucional
/regalos-personalizados/       Intención comercial regalos
/impresion-3d/                 Impresión 3D / deco
/regalos-empresas/             B2B / merchandising (CTA WhatsApp)
/personaliza-tu-producto/      Recupera URL indexada + embudo a shop
/nosotros/                     Confianza (ex /mas/quienes-somos1/)
/contacto/                     Contacto online (recupera URL indexada)

Compras: shop.amandesub.com.ar
Consultas a medida / empresas: WhatsApp +54 11 2507-8414

================================================================================
9) NOTAS
================================================================================
- HTML/CSS/JS sin build. CSS: assets/site.css · JS: assets/site.js
- Rutas relativas para preview local de archivos.
- Schema: Organization (online), áreaServida Buenos Aires / Argentina.
- .htaccess ya no se usa (era Apache); los 301 viven en _redirects.
