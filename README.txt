AMANDE — Sitio institucional SEO (HTML estático)

DOMINIO PRINCIPAL: https://www.amandesub.com.ar
TIENDA: https://shop.amandesub.com.ar
BRANCH DE TRABAJO: seo/conversion-multipage

================================================================================
1) QUÉ SUBIR AL HOSTING (raíz pública: public_html / www)
================================================================================
- index.html
- .htaccess
- robots.txt
- sitemap.xml
- assets/  (completa)
- Carpetas con su index.html:
  regalos-personalizados/
  impresion-3d/
  regalos-empresas/
  personaliza-tu-producto/
  nosotros/
  contacto/

IMPORTANTE: subí también el archivo .htaccess (a veces el FTP lo oculta).

================================================================================
2) DESPUÉS DE SUBIR — VERIFICACIONES TÉCNICAS
================================================================================
A. Abrí:
   https://www.amandesub.com.ar/
   https://amandesub.com.ar/          → debe redirigir 301 a https://www...
   https://www.amandesub.com.ar/sitemap.xml  → debe verse el XML (NO error 500)
   https://www.amandesub.com.ar/robots.txt
   https://www.amandesub.com.ar/contacto/
   https://www.amandesub.com.ar/personaliza-tu-producto/

B. Si sitemap.xml sigue en 500:
   - Confirmá que el archivo se subió a la raíz
   - En cPanel, evitá reglas viejas de Tienda Nube que intercepten .xml
   - El .htaccess ya fuerza MIME application/xml para .xml

C. Probá un redirect viejo → shop, por ejemplo:
   https://www.amandesub.com.ar/productos/mate-personalizado/
   debe ir a https://shop.amandesub.com.ar/productos/mate-personalizado/

================================================================================
3) GOOGLE SEARCH CONSOLE (obligatorio)
================================================================================
1. Verificá la propiedad https://www.amandesub.com.ar/ (y si podés, también shop).
2. Envíá el sitemap: https://www.amandesub.com.ar/sitemap.xml
3. Usá “Inspección de URLs” en las páginas nuevas y pedí indexación.
4. Revisá “Páginas” / 404: las URLs viejas de productos en www deberían
   aparecer como redireccionadas (301), no como 404.

================================================================================
4) TIENDA NUBE (obligatorio para no diluir SEO)
================================================================================
1. Dominio primario de la tienda = shop.amandesub.com.ar
   (los canonical y schema NO deben apuntar a www).
2. En el tema/menú de la tienda, linkeá a:
   https://www.amandesub.com.ar/  (sitio institucional / quiénes somos)
3. Revisá titles y meta descriptions de categorías clave:
   Personalizá tu producto, Deco/Hogar, etc.
4. En GSC de shop: enviá el sitemap que genera Tienda Nube.

================================================================================
5) GOOGLE ANALYTICS 4
================================================================================
1. Creá una propiedad GA4 y copiá el Measurement ID (G-XXXXXXXXXX).
2. Editá UN solo archivo: assets/analytics-config.js
     window.AMANDE_GA4_ID = "G-ABC123XYZ";
3. Eventos automáticos al hacer click:
   - cta_shop (enlaces a shop.amandesub.com.ar)
   - cta_whatsapp (enlaces a wa.me)

================================================================================
6) GOOGLE BUSINESS PROFILE + REDES (recomendado)
================================================================================
- Creá/reclamá el perfil con NAP idéntico al schema:
  AMANDE · Victorica 253, El Palomar, Morón, Buenos Aires
  Tel: +54 11 2507-8414 · amande.subli@gmail.com
- Categorías sugeridas: tienda de regalos / servicio de impresión
- Instagram bio → https://www.amandesub.com.ar/ (no solo shop)

================================================================================
7) ESTRUCTURA DEL SITIO
================================================================================
/                              Home institucional
/regalos-personalizados/       Intención comercial regalos
/impresion-3d/                 Intención impresión 3D / deco
/regalos-empresas/             B2B / merchandising (CTA WhatsApp)
/personaliza-tu-producto/      Recupera URL indexada + embudo a shop
/nosotros/                     Confianza (ex /mas/quienes-somos1/)
/contacto/                     NAP + mapa (recupera URL indexada)

Compras: shop.amandesub.com.ar
Consultas a medida / empresas: WhatsApp +54 11 2507-8414

================================================================================
8) NOTAS
================================================================================
- HTML/CSS/JS sin build. CSS: assets/site.css · JS: assets/site.js
- No se incluyen precios (los administra Tienda Nube).
- Código postal 1684 usado en schema LocalBusiness (El Palomar); si tu CP
  exacto es otro, actualizalo en el JSON-LD de todas las páginas.
