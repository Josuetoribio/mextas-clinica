// Datos de demostración de ClinicaMextas. Reemplazables por una API real sin tocar la UI.
window.CM_DATA = {
  clinic:{name:'ClinicaMextas',tagline:'Clínica privada',phone:'(81) 1234 5678',email:'hola@clinicamextas.mx',
    address:'Av. San Pedro 123, Col. Del Valle, San Pedro Garza García, N.L.',
    hours:[['Lunes — Viernes','7:00 AM — 8:00 PM'],['Sábado','8:00 AM — 2:00 PM'],['Domingo','Cerrado']]},
  trust:[['Atención personalizada','Cada paciente es único'],['Especialistas certificados','Calidad y confianza'],['Tecnología de vanguardia','Diagnósticos más precisos'],['Instalaciones de primer nivel','Espacios pensados para ti']],
  stats:[['10+','Años de experiencia'],['25K+','Pacientes atendidos'],['30+','Especialidades'],['5','Sedes en el país']],
  specialties:[
    {slug:'medicina-general',name:'Medicina General',icon:'stethoscope'},
    {slug:'pediatria',name:'Pediatría',icon:'baby'},
    {slug:'ginecologia',name:'Ginecología',icon:'person-standing'},
    {slug:'cardiologia',name:'Cardiología',icon:'heart-pulse'},
    {slug:'dermatologia',name:'Dermatología',icon:'scan-face'},
    {slug:'traumatologia',name:'Traumatología',icon:'bone'},
    {slug:'nutricion',name:'Nutrición',icon:'apple'},
    {slug:'neurologia',name:'Neurología',icon:'brain'},
    {slug:'oftalmologia',name:'Oftalmología',icon:'eye'},
    {slug:'endocrinologia',name:'Endocrinología',icon:'activity'},
    {slug:'medicina-interna',name:'Medicina Interna',icon:'clipboard-plus'},
    {slug:'otorrinolaringologia',name:'Otorrinolaringología',icon:'ear'}],
  doctors:[
    {id:'garza',name:'Dr. Alejandro Garza',specialty:'Cardiología',sub:'Cardiología preventiva',license:'1234567',years:16,photo:'../../assets/photos/doctor-cardiologia.png',location:'San Pedro',languages:['Español','Inglés'],mode:'Presencial y virtual',
     slots:{Lunes:['10:30 AM','12:00 PM','4:30 PM'],Martes:['9:00 AM','11:30 AM']}},
    {id:'lopez',name:'Dra. Mariana López',specialty:'Ginecología',sub:'Ginecología y obstetricia',license:'2345678',years:12,photo:'../../assets/photos/doctora-ginecologia.png',location:'Monterrey',languages:['Español'],mode:'Presencial',
     slots:{Lunes:['9:00 AM','1:00 PM'],Miércoles:['10:00 AM','11:00 AM','5:00 PM']}},
    {id:'herrera',name:'Dr. Daniel Herrera',specialty:'Traumatología',sub:'Ortopedia deportiva',license:'3456789',years:9,photo:'../../assets/photos/doctor-traumatologia.png',location:'San Pedro',languages:['Español','Inglés'],mode:'Presencial',
     slots:{Martes:['8:30 AM','12:30 PM'],Jueves:['9:30 AM','4:00 PM']}},
    {id:'martinez',name:'Dra. Sofía Martínez',specialty:'Pediatría',sub:'Pediatría del desarrollo',license:'4567890',years:11,photo:'../../assets/photos/doctora-pediatria.png',location:'Guadalajara',languages:['Español'],mode:'Presencial y virtual',
     slots:{Miércoles:['8:00 AM','10:30 AM'],Viernes:['11:00 AM','3:30 PM','5:00 PM']}}],
  services:[
    {name:'Laboratorio clínico',icon:'flask-conical',photo:'../../assets/photos/laboratorio.png',desc:'Resultados rápidos y confiables',detail:'Química sanguínea, biometría, perfiles hormonales y estudios de seguimiento con entrega digital.'},
    {name:'Imagenología',icon:'scan',photo:'../../assets/photos/imagenologia.png',desc:'Tecnología avanzada en diagnóstico',detail:'Ultrasonido, rayos X y densitometría interpretados por médicos radiólogos.'},
    {name:'Chequeos preventivos',icon:'shield-check',desc:'Detectamos a tiempo, cuidamos tu salud',detail:'Paquetes Esencial, Integral y Ejecutivo con seguimiento posterior.'},
    {name:'Urgencias',icon:'siren',desc:'Atención cuando más lo necesitas',detail:'Servicio de urgencias con valoración inmediata. Si es una emergencia, llama al 911.'},
    {name:'Vacunación',icon:'syringe',desc:'Protección para ti y tu familia',detail:'Esquemas infantiles y de adulto con cartilla digital.'},
    {name:'Atención domiciliaria',icon:'house-plus',desc:'Cuidado profesional en tu hogar',detail:'Visita médica programada dentro del área metropolitana.'}],
  locations:[
    {id:'sanpedro',name:'Sede San Pedro',city:'San Pedro Garza García, N.L.',address:'Av. San Pedro 123, Col. Del Valle',phone:'(81) 1234 5678',specialties:12,parking:'Estacionamiento con valet',access:'Acceso para silla de ruedas'},
    {id:'monterrey',name:'Sede Monterrey Centro',city:'Monterrey, N.L.',address:'Av. Constitución 840, Centro',phone:'(81) 2345 6789',specialties:9,parking:'Estacionamiento propio',access:'Acceso para silla de ruedas'},
    {id:'cdmx',name:'Sede Polanco',city:'Ciudad de México',address:'Av. Presidente Masaryk 210, Polanco',phone:'(55) 3456 7890',specialties:11,parking:'Estacionamiento con valet',access:'Elevadores y rampas'},
    {id:'gdl',name:'Sede Providencia',city:'Guadalajara, Jal.',address:'Av. Pablo Neruda 2916, Providencia',phone:'(33) 4567 8901',specialties:8,parking:'Estacionamiento propio',access:'Acceso para silla de ruedas'}],
  faqs:[
    {question:'¿Cómo puedo agendar una cita?',answer:'Desde el botón “Agendar cita” del encabezado. Completas los pasos y recepción confirma la disponibilidad por teléfono o correo.'},
    {question:'¿Puedo elegir médico?',answer:'Sí. En el directorio médico puedes filtrar por especialidad y sede, y solicitar cita directamente con el especialista que prefieras.'},
    {question:'¿Atienden pacientes nuevos?',answer:'Sí. Si es tu primera visita, te recomendamos revisar la sección “Primera visita” para saber qué llevar.'},
    {question:'¿Qué debo llevar a mi primera consulta?',answer:'Identificación oficial, estudios previos si los tienes y la lista de medicamentos que tomas actualmente.'},
    {question:'¿Puedo cancelar o cambiar mi cita?',answer:'Sí, contactando a recepción con al menos 12 horas de anticipación.'},
    {question:'¿Qué métodos de pago aceptan?',answer:'Tarjeta de crédito y débito, transferencia y efectivo. La información de convenios es demostrativa.'},
    {question:'¿Atienden urgencias?',answer:'Contamos con servicio de urgencias en sedes seleccionadas. Ante una emergencia que ponga en riesgo la vida, llama al 911.'}],
  testimonials:[
    {quote:'Desde recepción hasta la consulta, todo el proceso fue muy claro y amable.',author:'Laura M.'},
    {quote:'Me explicaron cada paso con calma y sin prisa. Salí entendiendo mi seguimiento.',author:'Ricardo T.'},
    {quote:'Las instalaciones son impecables y la atención fue puntual.',author:'Ana Sofía R.'}],
  articles:[
    {title:'¿Por qué son importantes los chequeos preventivos?',cat:'Prevención',read:'4 min',photo:'../../assets/photos/blog-chequeos.png'},
    {title:'¿Cuándo acudir con un cardiólogo?',cat:'Cardiología',read:'5 min',photo:'../../assets/photos/blog-cardiologo.png'},
    {title:'Salud infantil: revisiones importantes por edad',cat:'Pediatría',read:'6 min',photo:'../../assets/photos/blog-salud-infantil.png'},
    {title:'Alimentación y bienestar: hábitos sostenibles',cat:'Nutrición',read:'4 min',photo:'../../assets/photos/blog-alimentacion.png'}]
};
// ---- Datos ampliados (instalaciones, tecnología, check-ups, convenios, artículos) ----
window.CM_DATA.articles.push(
  {title:'Cuidados preventivos para adultos',cat:'Prevención',read:'5 min',photo:'../../assets/photos/blog-adultos.png'},
  {title:'Salud de la piel: hábitos de cuidado diario',cat:'Dermatología',read:'4 min',photo:'../../assets/photos/blog-piel.png'},
  {title:'¿Qué esperar de una primera consulta?',cat:'Bienestar',read:'3 min',photo:'../../assets/photos/blog-primera-consulta.png'});
Object.assign(window.CM_DATA,{
  facilities:[
    {name:'Recepción',icon:'door-open',photo:'../../assets/photos/recepcion.png',desc:'Un espacio luminoso donde te recibimos, confirmamos tu cita y resolvemos cualquier duda antes de pasar a consulta.'},
    {name:'Consultorios',icon:'stethoscope',photo:'../../assets/photos/consultorios.png',desc:'Consultorios amplios y privados, equipados para valoración clínica y pensados para conversar sin prisa.'},
    {name:'Sala de espera',icon:'armchair',desc:'Mobiliario cómodo, luz natural y pantallas con el orden de atención para que sepas cuánto falta.'},
    {name:'Laboratorio clínico',icon:'flask-conical',photo:'../../assets/photos/laboratorio.png',desc:'Toma de muestras en cubículos individuales y procesamiento con control de calidad interno.'},
    {name:'Imagenología',icon:'scan',photo:'../../assets/photos/imagenologia.png',desc:'Salas de ultrasonido, rayos X y densitometría con vestidores privados.'},
    {name:'Áreas de recuperación',icon:'bed',desc:'Espacios tranquilos para observación posterior a estudios o procedimientos ambulatorios.'},
    {name:'Espacio infantil',icon:'toy-brick',photo:'../../assets/photos/espacio-infantil.png',desc:'Un rincón pensado para que niñas y niños esperen con calma junto a sus familias.'},
    {name:'Fachada',icon:'building-2',desc:'Sede San Pedro: acceso a nivel de calle, estacionamiento con valet y señalización clara.'},
    {name:'Tecnología médica',icon:'cpu',desc:'Equipos de diagnóstico con mantenimiento programado y registro digital de resultados.'}],
  technology:[
    ['microscope','Diagnóstico clínico','Consultorios equipados para exploración física completa, toma de signos vitales y electrocardiograma en consulta.'],
    ['flask-conical','Laboratorio','Análisis clínicos de rutina y especializados, con resultados disponibles en formato digital y explicados por tu médico.'],
    ['scan','Imagenología','Ultrasonido, rayos X digital y densitometría ósea, interpretados por médicos radiólogos.'],
    ['activity','Monitoreo','Monitoreo de signos vitales durante estudios y en áreas de recuperación, supervisado por personal de enfermería.'],
    ['monitor-smartphone','Herramientas digitales','Solicitud de citas en línea, recordatorios por correo y acceso a resultados desde cualquier dispositivo.'],
    ['folder-heart','Expediente y seguimiento','Expediente clínico electrónico compartido entre especialistas para dar continuidad a tu atención.']],
  checkups:[
    {id:'esencial',name:'Check-up Esencial',tag:'Para evaluación preventiva general.',duration:'2 horas aprox.',for:'Adultos que buscan una revisión anual de su estado general de salud.',
     includes:['Consulta de medicina general','Biometría hemática','Química sanguínea de 6 elementos','Examen general de orina','Signos vitales y medidas corporales','Entrega de resultados con explicación médica'],
     prep:['Ayuno de 8 a 10 horas','Identificación oficial','Lista de medicamentos actuales']},
    {id:'integral',name:'Check-up Integral',tag:'Evaluación más amplia.',duration:'3 a 4 horas aprox.',for:'Adultos a partir de 40 años o con antecedentes familiares que requieren una revisión más completa.',
     includes:['Todo lo incluido en Esencial','Perfil de lípidos','Perfil tiroideo','Electrocardiograma','Radiografía de tórax','Valoración nutricional','Consulta de seguimiento'],
     prep:['Ayuno de 10 a 12 horas','Ropa cómoda','Estudios previos, si los tienes']},
    {id:'ejecutivo',name:'Check-up Ejecutivo',tag:'Evaluación integral en una sola visita.',duration:'Una mañana (5 horas aprox.)',for:'Pacientes que requieren una evaluación integral coordinada en una sola visita.',
     includes:['Todo lo incluido en Integral','Valoración cardiológica','Prueba de esfuerzo, según indicación médica','Ultrasonido abdominal','Valoración oftalmológica','Coordinador de visita y área de espera privada'],
     prep:['Ayuno de 12 horas','Ropa y calzado deportivo','Agendar con 48 horas de anticipación']}],
  insurers:['Aseguradora Horizonte','Seguros Alba','Grupo Vital','Protección Norte','MedPlus Seguros','Confía Salud'],
  articleBodies:[
    {spec:'medicina-general',doc:'garza',intro:'Un chequeo preventivo permite conocer tu estado de salud cuando te sientes bien, no solo cuando algo te preocupa. Es una oportunidad para conversar con tu médico y planear tu cuidado.',
     sections:[['Qué es un chequeo preventivo','Es una evaluación programada que combina consulta, exploración física y estudios básicos. Su objetivo es identificar factores de riesgo y darte recomendaciones personalizadas.'],['Con qué frecuencia hacerlo','La frecuencia depende de tu edad, tus antecedentes y tu estilo de vida. Tu médico te indicará qué estudios son adecuados para ti y cada cuánto repetirlos.'],['Cómo prepararte','Pregunta si requieres ayuno, lleva tus estudios previos y anota tus dudas. Una consulta preparada aprovecha mejor el tiempo.']]},
    {spec:'cardiologia',doc:'garza',intro:'La cardiología se ocupa de la salud del corazón y los vasos sanguíneos. Muchas personas acuden por prevención, por indicación de su médico general o para dar seguimiento a un tratamiento.',
     sections:[['Cuándo considerar una valoración','Si tu médico te lo recomienda, si tienes antecedentes familiares de enfermedad cardiovascular o si deseas una evaluación preventiva, una consulta con cardiología puede orientarte.'],['Qué sucede en la consulta','El especialista revisa tu historia clínica, realiza una exploración y puede solicitar estudios como electrocardiograma o perfil de lípidos.'],['Importante','Si presentas un síntoma repentino o intenso, no esperes una cita: llama al servicio de emergencias de tu localidad.']]},
    {spec:'pediatria',doc:'martinez',intro:'Las revisiones pediátricas acompañan el crecimiento y desarrollo de niñas y niños. Son también un espacio para resolver dudas de madres, padres y cuidadores.',
     sections:[['Revisiones del niño sano','Durante los primeros años, las consultas periódicas permiten seguir peso, talla y desarrollo, y mantener al día el esquema de vacunación.'],['Qué llevar','La cartilla de vacunación, estudios previos y una lista de preguntas. Anotar observaciones de casa ayuda mucho al pediatra.'],['Un espacio para preguntar','No hay preguntas menores. La consulta es el momento adecuado para hablar de alimentación, sueño o hábitos.']]},
    {spec:'nutricion',doc:null,intro:'La alimentación influye en cómo te sientes cada día. Un acompañamiento nutricional busca hábitos sostenibles, no soluciones rápidas.',
     sections:[['Hábitos antes que dietas','Los cambios pequeños y constantes suelen ser más fáciles de mantener que los planes restrictivos.'],['La consulta nutricional','Incluye una valoración de tus hábitos, medidas corporales y objetivos, para construir un plan adaptado a tu rutina.'],['Seguimiento','Las consultas de seguimiento permiten ajustar el plan según tu evolución y tus necesidades.']]},
    {spec:'medicina-interna',doc:null,intro:'En la vida adulta, la prevención ayuda a mantener la salud a largo plazo. Conocer tus factores de riesgo es el primer paso.',
     sections:[['Revisiones periódicas','Tu médico puede recomendarte estudios según tu edad y antecedentes, como perfil de lípidos o glucosa.'],['Estilo de vida','Actividad física regular, descanso suficiente y alimentación equilibrada forman parte de cualquier plan preventivo.'],['Continuidad','Tener un médico de cabecera facilita el seguimiento y la coordinación con otros especialistas.']]},
    {spec:'dermatologia',doc:null,intro:'La piel cambia con la edad, el clima y los hábitos. Un cuidado diario sencillo ayuda a mantenerla en buen estado.',
     sections:[['Protección solar','Usar protector solar a diario, incluso en días nublados, es uno de los hábitos más recomendados por dermatología.'],['Rutina básica','Limpieza suave, hidratación y protección. No es necesario usar muchos productos.'],['Cuándo consultar','Si notas cambios en un lunar o en tu piel que te preocupan, agenda una valoración con un especialista.']]},
    {spec:'medicina-general',doc:null,intro:'Tu primera consulta en ClinicaMextas empieza antes de llegar: te ayudamos a prepararla para que sea clara y sin contratiempos.',
     sections:[['Antes','Recibirás un correo con la confirmación de tu solicitud y recomendaciones según tu especialidad.'],['Durante','Tu médico dedicará tiempo a escucharte, revisar tus antecedentes y explicarte los siguientes pasos.'],['Después','Recibirás indicaciones por escrito y, si aplica, la programación de estudios o de tu siguiente consulta.']]}]
});