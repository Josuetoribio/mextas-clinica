# ClinicaMextas — Design System

Marca ficticia de demostración: **ClinicaMextas**, una clínica privada premium (México — Monterrey / San Pedro Garza García / CDMX / Guadalajara). El sitio es un producto demostrativo desarrollado por **Mextas** (la agencia). Las dos marcas son independientes: ClinicaMextas es el producto; Mextas solo firma el pie de página ("Diseñado y desarrollado por Mextas").

## Fuentes recibidas
- `assets/reference/homepage-reference.png` — mockup de homepage completo. **Única referencia de dirección artística.** No hay código fuente ni archivo Figma.
- `assets/photos/recepcion.png` — fotografía de recepción (hero / instalaciones).
- `assets/photos/doctor-cardiologia.png`, `doctor-traumatologia.png`, `doctora-ginecologia.png`, `doctora-pediatria.png` — retratos de médicos.
- No se entregó repositorio, Figma, ni archivos de fuentes.

## Estado
Fundaciones (tokens + paleta + tipografía) escritas. Componentes, cards de especímenes y UI kit pendientes.

---

## CONTENT FUNDAMENTALS

**Idioma:** español de México, 100 %. Nunca lorem ipsum.

**Persona:** la clínica habla en **primera persona plural** ("combinamos", "contamos con") y se dirige al paciente de **tú** ("Cuidado médico que te acompaña", "Cada paciente es único"). El "usted" se siente distante y no se usa.

**Tono:** cálido-institucional. Cercano sin ser coloquial; preciso sin ser clínico-frío. La calidez viene del enfoque en la persona, no de signos de exclamación.

**Casing:**
- Titulares editoriales en *sentence case*, con punto final cuando son frase completa: *"Cuidado médico que te acompaña en cada etapa."*
- Eyebrows en **MAYÚSCULAS** con tracking amplio y color dorado: `TU SALUD, NUESTRA PRIORIDAD`, `NUESTRAS ESPECIALIDADES`, `NUESTRO EQUIPO`, `AGENDA TU CITA`.
- Etiquetas de UI y botones en sentence case: *"Agendar cita"*, *"Conocer especialidades"*, *"Ver perfil"*.

**Longitudes:** titular hero 6–10 palabras en 2–3 líneas. Subtítulo 20–35 palabras. Descripción de card 4–9 palabras ("Resultados rápidos y confiables", "Detectamos a tiempo, cuidamos tu salud").

**Reglas médicas de copy (obligatorias):**
- Nunca prometer resultados: prohibido "garantizamos", "te curamos", "detectamos cualquier enfermedad".
- Nunca diagnosticar ni sugerir diagnóstico al usuario.
- Las citas son **solicitudes**, no reservas confirmadas: "Tu solicitud de cita fue registrada correctamente".
- Datos sensibles: no pedirlos. Solo nombre, teléfono, correo y motivo general.
- Convenios/aseguradoras siempre etiquetados como "Ejemplo de convenio" / información demostrativa.

**Emoji:** nunca. Ni en UI, ni en contenido, ni en el blog.

**Vibe en una frase:** una recepcionista excelente — te reconoce, te explica con calma y no te vende nada.

---

## VISUAL FOUNDATIONS

### Color
Tres familias y nada más. Verde profundo institucional (`--green-800 #173327`) para tipografía display, superficies invertidas y el botón primario. Neutros cálidos marfil/crema (`--ivory-100 #F9F6F0` página, blanco puro solo en cards) que dan el aire de clínica boutique y evitan el blanco quirúrgico. Dorado ámbar (`--gold-600 #B98F45`) **exclusivamente como detalle**: eyebrows, iconografía lineal, subrayado del ítem activo en el nav, estrellas de testimonio, acentos de 1–2 px. El dorado nunca rellena un botón ni una superficie grande. Negro suave (`--ink-900 #1A1A18`) nunca es negro puro. Máximo dos fondos por vista: marfil y blanco; el verde profundo aparece una sola vez por página (banda de indicadores o footer).

### Tipografía
Pareja editorial: **Playfair Display** (serif de contraste moderado) para titulares y números grandes — presencia editorial, peso 400, tracking ligeramente negativo, line-height 1.08. **Manrope** para toda la interfaz: nav, botones, body, labels, datos. Los eyebrows son Manrope 12 px, 600, tracking 0.16em, mayúsculas, dorado. El body nunca baja de 13.5 px. Los números de los indicadores de confianza (10+, 25K+) van en Playfair, no en sans — es lo que les da el carácter institucional.
> Sustitución: no se entregaron archivos de fuente. Playfair Display y Manrope son los equivalentes de Google Fonts más cercanos a la referencia. **Si existen fuentes de marca reales, envíalas y las reemplazo.**

### Espacio y layout
Contenedor 1280 px, gutters de 24 px (48 en desktop amplio). Secciones separadas por 96 px verticales; el aire es el material principal. Escala de espaciado 4 → 128. Composición editorial: bandas horizontales a ancho completo alternando marfil / blanco, con el contenido en rejilla de 12 columnas. Las secciones se delimitan por cambio de fondo o por una hairline, nunca por sombras.

### Fondos e imagen
Fotografía grande y protagonista: el hero es media pantalla de imagen a sangre por el borde derecho, esquinas ligeramente redondeadas del lado interior. Nada de patrones, texturas, ruido ni gradientes decorativos. El único gradiente permitido es una protección sutil marfil→transparente donde el texto se monta sobre foto. Paleta fotográfica: **cálida**, luz natural difusa, maderas claras, verdes vivos de plantas, sin saturación alta ni contraste duro. Los retratos médicos son de cuerpo medio, bata blanca, fondo neutro claro, mirada a cámara, expresión amable — nunca poses forzadas ni stock genérico.

### Bordes, radios y sombras
Radios pequeños: 6–10 px en cards y campos, 6 px en botones, 14–20 px solo en contenedores grandes de imagen. Nada de pill salvo chips de filtro. Hairlines de `#E7E1D6` a 1 px hacen casi todo el trabajo de separación. Sombras extremadamente suaves y tintadas en cálido (`0 8px 24px rgba(26,26,24,.06)`); la mayoría de las cards en reposo llevan solo borde, y ganan sombra al hover. Nunca sombra dura ni sombra interior.

### Estados
- **Hover card:** elevación +4 px de sombra y `translateY(-2px)`, 240 ms, `cubic-bezier(.22,.61,.36,1)`. El borde se tiñe ligeramente de dorado.
- **Hover botón primario:** verde un paso más profundo (`--green-900`). Nunca opacidad.
- **Hover botón secundario/ghost:** fondo marfil `--ivory-200`.
- **Hover link:** color pasa a dorado.
- **Press:** `scale(.985)`, 140 ms. Sin cambio de color adicional.
- **Focus:** anillo dorado de 2 px con offset 2 px — visible siempre, es requisito de accesibilidad.
- **Activo en nav:** subrayado dorado de 2 px bajo el ítem.

### Movimiento
Sutil y caro. Entradas: fade + 16 px de subida, 720 ms, `cubic-bezier(.16,1,.3,1)`, en stagger de 80 ms. Transiciones de estado 140–240 ms. Contadores animados en los indicadores de confianza. Carruseles con deslizamiento suave y autoplay lento (6 s). Nada de bounce, spring exagerado, parallax fuerte ni rotaciones. `prefers-reduced-motion` desactiva todo.

### Transparencia y blur
Casi ausentes. Solo dos usos: el header sticky (marfil al 92 % con `backdrop-filter: blur(12px)` y hairline inferior) y el fondo de los modales (`rgba(18,39,31,.45)`). Nada de glassmorphism en cards.

### Cards
Blanco puro, radio 10 px, borde hairline, sin sombra en reposo, padding 24–32 px. Las cards de especialidad son cuadradas con icono lineal dorado centrado arriba y etiqueta en dos líneas. Las cards de médico son foto a sangre en la parte superior + bloque de texto centrado (nombre / especialidad / cédula). Altura uniforme por fila, siempre.

---

## ICONOGRAPHY

La referencia usa un set **lineal, trazo fino (~1.5 px), esquinas redondeadas, monocromo dorado**, dibujado dentro de una caja de 24 px y presentado a 28–32 px. Iconos siempre acompañados de etiqueta; nunca solos como única señal.

No se entregó set de iconos ni fuente de iconos. **Sustitución declarada: [Lucide](https://lucide.dev) vía CDN** — coincide en trazo lineal y terminaciones redondeadas. Configuración: `stroke-width: 1.5`, `color: var(--gold-600)`, tamaño 24/28/32. Mapeo previsto: estetoscopio → `stethoscope`, pediatría → `baby`, cardiología → `heart-pulse`, laboratorio → `flask-conical`, imagenología → `scan`, urgencias → `siren`, nutrición → `apple`, ubicación → `map-pin`, teléfono → `phone`, cita → `calendar-days`.

**Sin emoji. Sin caracteres unicode como iconos. Sin SVG dibujado a mano.**

**Logo:** las fuentes no incluyen un archivo de logo; la marca aparece únicamente incrustada en el mockup de referencia. No se reconstruyó. Donde va la marca se usa el wordmark tipográfico "CLINICAMEXTAS" en Playfair Display con tracking amplio y bajada "CLÍNICA PRIVADA" en Manrope mayúsculas. **Envía el SVG del logo para reemplazarlo.**


---

## COMPONENTS

Primitivas reutilizables en `components/`. Todas leen los tokens de `styles.css` y no dependen de librerías externas.

**`components/core/`** — Button, Badge, Chip, Card, Eyebrow, SectionHeading
**`components/forms/`** — Field, Input, Select, Checkbox, RadioGroup
**`components/patterns/`** — SpecialtyCard, DoctorCard, StatBlock, Accordion, StepIndicator, TimeSlotPicker, Modal

No se entregó inventario de componentes (ni Figma ni código), por lo que el set se derivó de lo que el mockup de referencia muestra y de las vistas que el brief exige. **Adiciones intencionales:** `StepIndicator` y `TimeSlotPicker` no aparecen en el mockup pero el asistente de solicitud de cita los necesita; `Modal` cubre modal, drawer y lightbox con un solo componente.

## UI KITS

`ui_kits/website/` — recreación interactiva del sitio de ClinicaMextas (home completa, directorio médico con filtros, página de especialidad, sedes, asistente de cita de 8 pasos, buscador global, cookies). Ver su `README.md`. Datos ficticios centralizados en `data.js`.

## Índice del proyecto
- `styles.css` — punto de entrada; solo `@import`.
- `tokens/` — colors, typography, spacing, elevation, base.
- `guidelines/` — 15 cards de especímenes (Colors, Type, Spacing, Brand).
- `components/` — primitivas + una card por directorio.
- `assets/photos/` — recepción y 4 retratos médicos. `assets/reference/` — mockup original.
- `ui_kits/website/` — UI kit del sitio.
- `readme.md` — esta guía. `SKILL.md` — invocación como Agent Skill.
