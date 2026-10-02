# UI kit — Sitio web de ClinicaMextas

Recreación interactiva del sitio de la clínica, construida sobre las primitivas de `components/`.

## Archivos
- `index.html` — app completa: navegación entre vistas, buscador global (⌘K), banner de cookies, botón de WhatsApp, back-to-top y CSS responsive (1440 / 1080 / 720).
- `data.js` — **todos los datos ficticios** (`window.CM_DATA`): clínica, especialidades, médicos, servicios, sedes, FAQ, testimonios, artículos. Reemplazar por una API no requiere tocar la UI.
- `Chrome.jsx` — Header sticky, menú móvil fullscreen, Footer, Wordmark, `Icon` (Lucide), `Section`, `Reveal` (scroll animation), `Counter`.
- `Home.jsx` — Hero, TrustBar, QuickActions, SpecialtiesGrid, Doctors, Services, Stats + testimonios, Emergency, FAQ, Blog, Contacto.
- `Booking.jsx` — asistente de solicitud de cita de 8 pasos con calendario, horarios y pantalla de confirmación con folio.
- `Directory.jsx` — directorio médico con filtros, perfil de médico en modal, página de especialidad, todas las especialidades, página de sedes.
- `Pages.jsx` — instalaciones (galería + lightbox con ← →, teclado y swipe), tecnología médica, check-ups (3 paquetes + solicitud de información con loading/éxito), teasers de la home (check-ups, instalaciones, primera visita + horarios).
- `Patients.jsx` — información para pacientes (9 categorías en tabs), artículo individual con especialidad/médico relacionados, urgencias, páginas legales (privacidad, términos, cookies, accesibilidad).

## Rutas navegables
Inicio → Especialidades → Cardiología → Dr. Alejandro Garza → Solicitar cita → sede → fecha → horario → datos → confirmación.
Inicio → Sedes → San Pedro → Ver médicos → perfil → cita.
Inicio → Blog → artículo → especialidad relacionada → médico → cita.
Footer → cualquier página legal o de pacientes.
Buscador (⌘K): "cardio" devuelve especialidad, médico, servicio y artículo.

## Notas
- Todos los datos son demostrativos. Las citas son **solicitudes**, nunca reservas confirmadas.
- El mapa es un mockup SVG estilizado, no Google Maps.
- Fotografías en `assets/photos/`. Aún sin foto propia: sala de espera, áreas de recuperación, fachada y tecnología médica (muestran marcador "Fotografía por agregar").
