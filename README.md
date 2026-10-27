# Centro de Salud El Bosque

Web informativa independiente realizada con HTML5, CSS3 y JavaScript vanilla. No representa al SAS ni a la Junta de Andalucía. Sin despliegue, dependencias, compilación, cookies, analítica ni formularios.

## Uso
Abrir `index.html` con Live Server. También puede abrirse directamente; la copia al portapapeles requiere un contexto seguro (localhost o HTTPS) y permiso del navegador. Si no está disponible, se muestra el número para copiar manualmente.

## Archivos
- `index.html`: información, canales oficiales, contacto, ubicación, metadatos y JSON-LD de WebPage/Place.
- `css/style.css`: diseño responsive, estados de foco y movimiento reducido.
- `js/script.js`: menú móvil con Escape y gestión del foco; copia de teléfono con aviso accesible.
- `favicon.svg`: distintivo original no institucional.
- `img/`: reservada para futuras imágenes auténticas y autorizadas. No se utilizan fotografías ni recursos remotos.

## Fuentes y revisión — 27 de octubre de 2026
- Ficha facilitada del SAS: https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/el-sas/servicios-y-centros/informacion-por-centros/24453
  La consulta redirigió a una página de mantenimiento. El nombre, dirección (Avenida Diputación, s/n, 11670 El Bosque, Cádiz), teléfono 956 709 549 y horario lunes a viernes de 08:00 a 15:00 proceden del encargo; NO se han podido contrastar de nuevo directamente con la ficha. Se informa de esta limitación en la página y se marca el horario como pendiente de confirmación. Revisar antes de publicar. No se afirma dependencia sanitaria, servicios, personal ni atención presencial de urgencias.
- ClicSalud+: https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/clicsalud/
  Accesible durante la revisión. Confirma el acceso a cita de atención primaria y Salud Responde 955 545 060. No se ha solicitado ninguna cita ni introducido información personal.
- Teléfonos oficiales: https://www.juntadeandalucia.es/organismos/presidenciasanidadyemergencias/servicios/telefonos.html
  Corrobora Salud Responde 955 545 060, 061 y 112.
- Información sobre urgencias: https://www.juntadeandalucia.es/temas/salud/urgencias/urgencias.html
  Diferencia emergencias sanitarias 061 y emergencias generales 112. La web no ofrece consejo médico.
- Google Maps: enlace de búsqueda por nombre y dirección con `api=1`, sin coordenadas inventadas. La herramienta de consulta no pudo abrir Google Maps; queda pendiente comprobar visualmente el resultado y el destino.

## Diseño y accesibilidad
Paleta del encargo, sans serif de sistema y señalética abstracta original. Menú sin JavaScript visible por defecto, salto al contenido, landmarks semánticos, foco visible, enlaces descriptivos, botones de al menos 44 px y mensajes de copia anunciados con role=status. No hay animaciones de entrada ni contenido dependiente de ellas. Se respeta prefers-reduced-motion. Sin logotipos oficiales ni imágenes que simulen el centro.

Las reglas responsive contemplan móvil, tableta y escritorio; no se afirma certificación WCAG. No se incluye canonical ni og:url por no existir URL definitiva. Open Graph textual, sin imagen social ficticia. Los datos estructurados describen una página independiente y un lugar, sin atribuirle titularidad oficial.

## Validación realizada
- `node --check js/script.js`: sintaxis correcta.
- Revisión estática automatizada: referencias locales, destinos de anclas, IDs únicos, JSON-LD válido, teléfonos esperados, ausencia de formularios y de dependencias externas de ejecución.
- Comprobación de contraste de las combinaciones principales mediante fórmula WCAG.
- Consulta de enlaces oficiales mediante herramienta web, con las limitaciones anteriores.

## Comprobaciones pendientes en navegador
No hay navegador automatizable disponible en esta sesión. No se han ejecutado pruebas visuales a 375, 768, 1440 o 1920 px, ni pruebas con lector de pantalla. Revisar en esos tamaños: ausencia de desbordamientos, zoom al 200/400 %, teclado, menú móvil, Escape, salto al contenido, foco tras navegar, portapapeles y sus errores, enlaces tel, destino de Maps y preferencias de movimiento reducido. Confirmar accesibilidad con lector de pantalla y auditoría antes de publicar.
