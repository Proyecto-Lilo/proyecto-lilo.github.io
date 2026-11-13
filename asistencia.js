// Contenido del apartado «Asistencia» de Proyecto Lilo.
// TODO sale de la «Guía para cuidadores/as de colonias felinas» de la Asociación Chema y su Manada y la
// Federación Dean (2024). Si una duda no está aquí, la página no se la inventa: ofrece preguntar a Chema.
// Para añadir una respuesta: copia un bloque de `preguntas`, ponle un id nuevo, su tema y sus palabras clave.
// En `respuesta`, cada elemento de la lista es un párrafo; un párrafo que empieza por «- » se pinta como punto.

const ASISTENCIA = {
  temas: [
    { id: 'encontrado', icono: '🐈', titulo: 'Me he encontrado un gato' },
    { id: 'colonia', icono: '🍽️', titulo: 'Cuido una colonia' },
    { id: 'cer', icono: '✂️', titulo: 'Esterilización (método CER)' },
    { id: 'vecinos', icono: '🏘️', titulo: 'Problemas con vecinos' },
    { id: 'maltrato', icono: '⚠️', titulo: 'Envenenamiento y maltrato' },
    { id: 'ayuntamiento', icono: '🏛️', titulo: 'El ayuntamiento y la ley' },
    { id: 'modelos', icono: '📄', titulo: 'Modelos de escritos' },
  ],

  preguntas: [
    /* ---------------------------------------------------------------- Me he encontrado un gato */
    {
      id: 'encontrado-sano', tema: 'encontrado', fuente: 14,
      pregunta: 'Me he encontrado un gato en la calle y parece que está bien. ¿Qué hago?',
      claves: 'encontrado encontre gato calle callejero sano bien perdido abandonado que hago recoger',
      respuesta: [
        'Primero mírale las orejas: si tiene una marca o muesca en una de ellas, pertenece a una colonia controlada y ya está esterilizado.',
        'Si no tiene marca:',
        '- Llama al Ayuntamiento del municipio donde está para informar del sitio donde está el gato.',
        '- Si no te cogen el teléfono (por ejemplo, por la hora), llama a la Policía Local o al 112. Es muy importante: así podrás demostrar que intentaste que se hicieran cargo de su obligación de recogerlo.',
        '- Si no lo consigues, busca una protectora de la zona.',
        '- Si nadie se hace cargo, recógelo en tu casa en una habitación separada para que esté tranquilo.',
        '- Cuando puedas, llévalo a un veterinario del mismo municipio para que mire si tiene chip y lo revise. Dile que lo encontraste en la calle para que lo ponga en su informe.',
        'Después puedes reclamar al Ayuntamiento los gastos del veterinario y de la comida: los animales sin dueño son, por ley, responsabilidad del ayuntamiento.',
      ],
    },
    {
      id: 'encontrado-mal', tema: 'encontrado', fuente: 14,
      pregunta: 'He encontrado un gato herido, enfermo o atropellado. ¿Qué hago?',
      claves: 'herido enfermo atropellado sangre desnutrido delgado mal estado urgencia grave accidente',
      respuesta: [
        'No hay que perder tiempo. Intenta localizar a alguien en el Ayuntamiento, la Policía Local o una protectora de la zona.',
        'Si nadie se hace cargo:',
        '- Haz fotos del sitio y del gato.',
        '- Llévalo lo antes posible a un veterinario. Dile que es un gato callejero y que no te han ayudado quienes tenían que hacerlo (ayuntamiento, policía local).',
        '- Dale todos los datos para que haga constar en su informe si ha sido un atropello, si está enfermo y su diagnóstico.',
        '- Si no se queda ingresado (o cuando le den el alta), llévalo a tu casa a una habitación separada para que esté tranquilo.',
        'Una vez a salvo, puedes reclamar al Ayuntamiento los gastos veterinarios y de comida. Tienes un modelo de reclamación en «Modelos de escritos».',
        'Y si quieres que Chema lo sepa, rellena un aviso en la pestaña Rescates.',
      ],
      modelo: 'gastos-veterinarios',
    },
    {
      id: 'encontrado-crias', tema: 'encontrado', fuente: 14,
      pregunta: 'He visto una gata embarazada o una gata con sus gatitos en la calle.',
      claves: 'embarazada prenada gatitos crias camada bebes mama madre parto cachorros',
      respuesta: [
        'Según la guía, una gata embarazada o una mamá con sus gatitos es un caso en el que no hay que perder tiempo, igual que un gato herido o enfermo.',
        '- Intenta localizar a alguien en el Ayuntamiento, la Policía Local o una protectora de la zona.',
        '- Si nadie se hace cargo, haz fotos del sitio y de los gatos y llévalos lo antes posible a un veterinario, contándole que son callejeros y que no te han ayudado.',
        '- Después, ponlos en una habitación separada de tu casa para que estén tranquilos.',
        'Los gastos se los puedes reclamar al Ayuntamiento. Y puedes avisar a Chema desde la pestaña Rescates.',
      ],
      modelo: 'gastos-veterinarios',
    },
    {
      id: 'marca-oreja', tema: 'encontrado', fuente: 3,
      pregunta: '¿Cómo sé si un gato callejero está esterilizado?',
      claves: 'esterilizado castrado operado marca oreja muesca corte triangulo saber',
      respuesta: [
        'Tras la esterilización, el veterinario le hace una pequeña marca triangular (muesca) en la punta de una oreja. Según el sexo o el criterio del veterinario puede ser en una oreja o en la otra.',
        'La muesca se hace con la anestesia de la operación, así que no le duele.',
        'Si un gato callejero tiene esa marca, pertenece a una colonia controlada y ya está esterilizado.',
      ],
    },
    {
      id: 'nadie-ayuda', tema: 'encontrado', fuente: 14,
      pregunta: 'He llamado al Ayuntamiento y a la Policía Local y nadie se hace cargo del gato.',
      claves: 'nadie ayuda no contestan no cogen telefono policia local 112 protectora no se hacen cargo',
      respuesta: [
        'Primero, si el Ayuntamiento no contesta, llama a la Policía Local o al 112: así queda constancia de que intentaste que se hicieran cargo.',
        'Si tampoco funciona, busca una protectora de la zona. Si nadie se hace cargo, recógelo en tu casa en una habitación separada y llévalo al veterinario del mismo municipio, contándole que lo encontraste en la calle y que no te han ayudado.',
        'Guarda las facturas y el informe: el Ayuntamiento tiene la obligación de cuidar de los animales sin dueño de su municipio y puedes reclamarle los gastos con el modelo de «Modelos de escritos».',
      ],
      modelo: 'gastos-veterinarios',
    },
    {
      id: 'gastos-quien-paga', tema: 'encontrado', fuente: 14,
      pregunta: 'He pagado el veterinario de un gato callejero. ¿Puedo recuperar el dinero?',
      claves: 'pagar pagado dinero factura veterinario recuperar devolver reclamar gastos reembolso',
      respuesta: [
        'Sí, puedes reclamarlo al Ayuntamiento del municipio donde encontraste al gato: los animales sin dueño son, por ley, responsabilidad del ayuntamiento, y también puedes reclamar los gastos de comida.',
        'Para que la reclamación tenga fuerza, guarda la factura y el informe del veterinario (en el que conste que es un gato encontrado en la calle) y que avisaste al Ayuntamiento o a la Policía Local y no se hicieron cargo.',
        'Tienes el modelo de reclamación en «Modelos de escritos».',
      ],
      modelo: 'gastos-veterinarios',
    },

    /* ------------------------------------------------------------------- Cuido una colonia */
    {
      id: 'que-es-colonia', tema: 'colonia', fuente: 1,
      pregunta: '¿Qué es una colonia de gatos?',
      claves: 'que es colonia felina gatos comunitarios grupo callejeros definicion',
      respuesta: [
        'Una colonia felina es un grupo de gatos comunitarios (también llamados callejeros). Su hogar es el sitio donde viven, que puede ser un espacio privado o público de un municipio.',
        'En una colonia los gatos deberían estar:',
        '- En buenas condiciones de higiene y salud.',
        '- Censados en el municipio e identificados.',
        '- Marcados en una oreja cuando están esterilizados.',
        '- Cuidados (comida, agua, cobijo y veterinario).',
        '- Protegidos y respetados por la gente y por las autoridades.',
        'Con el método CER (captura, esterilización y retorno) la colonia puede vivir controlada en número, salud y bienestar.',
      ],
    },
    {
      id: 'que-es-cuidador', tema: 'colonia', fuente: 2,
      pregunta: '¿Qué hace un cuidador o cuidadora de colonia?',
      claves: 'cuidador cuidadora colonia que hace funciones responsable tareas',
      respuesta: [
        'Es la persona que alimenta y cuida de una colonia de gatos que viven libres.',
        'Un cuidador responsable no solo da de comer: también desparasita, cuida y protege a los gatos, limpia la zona de la colonia y explica a los vecinos la importancia de la gestión ética.',
      ],
    },
    {
      id: 'como-alimentar', tema: 'colonia', fuente: 4,
      pregunta: '¿Cómo tengo que dar de comer a una colonia?',
      claves: 'comida alimentar dar de comer pienso comida humeda latas agua comederos bebederos horario',
      respuesta: [
        '- Pon la comida siempre a la misma hora: los gatos saldrán a «la hora de comer» y así sabrás cuántos son, lo que ayuda a organizar capturas y esterilizaciones.',
        '- El alimento principal debe ser pienso seco, y el agua siempre limpia.',
        '- Da comida húmeda como complemento: sin agua fresca, comer solo pienso seco puede darles problemas de riñón. Pero se la tienen que comer al momento y hay que retirar lo que sobre, para evitar olores y quejas.',
        '- Limpia comederos y bebederos cada vez que los rellenes.',
        '- Nunca sobras de comida: hay que darles alimento adecuado.',
      ],
    },
    {
      id: 'donde-comederos', tema: 'colonia', fuente: 4,
      pregunta: '¿Dónde pongo los comederos?',
      claves: 'donde comederos sitio lugar punto alimentacion fijos esconder discreto',
      respuesta: [
        'Si se puede, en alto y apartados de la calle; si no, que no queden muy a la vista de la gente.',
        'El punto de comida tiene que estar protegido del paso de coches, personas y perros, ser discreto para que los gatos coman tranquilos y estar siempre limpio.',
        'Los comederos fijos en sitios discretos y protegidos ayudan al cuidador: se puede dejar más pienso y volver cada dos o tres días en vez de cada día, pero hay que limpiarlos a menudo.',
        'Si vas a instalar casetas o comederos permanentes en la calle, normalmente necesitas autorización del Ayuntamiento (mira «¿Cómo me hago alimentador de una colonia?»).',
      ],
    },
    {
      id: 'carnet-alimentador', tema: 'colonia', fuente: 9,
      pregunta: '¿Cómo me hago alimentador de una colonia? ¿Necesito carnet?',
      claves: 'carnet alimentador gestor registrar colonia permiso autorizacion apuntarme oficial',
      respuesta: [
        'Tienes que ir al Ayuntamiento del municipio donde viven los gatos.',
        'Si son varios gatos en la misma zona, hay que registrarlos como colonia. El Ayuntamiento irá a evaluar y fotografiar la zona y los gatos y, si es un sitio seguro, te dará unas pautas obligatorias (pueden autorizar casetas, comederos y bebederos permanentes). Te darán el carnet de esa colonia y te comprometes a alimentarlos, mantener la zona limpia y seguir las pautas.',
        '- Cada colonia tiene un carnet de GESTOR/A, que puede nombrar a dos ALIMENTADORES/AS que le sustituyan.',
        '- Si son pocos gatos o están en varias zonas, puedes pedir el carnet de ALIMENTADOR/A del municipio: te permite alimentarlos sin que un vecino pueda denunciarte ni la Policía Local sancionarte.',
        'Según la guía, solo los alimentadores con carnet pueden alimentar gatos comunitarios.',
        'Tienes un modelo para pedir la autorización de la colonia en «Modelos de escritos».',
      ],
      modelo: 'autorizacion-colonia',
    },
    {
      id: 'obligaciones-ayto-colonia', tema: 'colonia', fuente: 9,
      pregunta: 'Mi colonia está registrada. ¿Qué tiene que poner el Ayuntamiento?',
      claves: 'registrada ayuntamiento obligacion pienso vacunas chip veterinario pagar colonia registrada',
      respuesta: [
        'Una vez registrada la colonia, el Ayuntamiento tiene la obligación de darle pienso y la atención sanitaria necesaria: vacunas, esterilizaciones, desparasitaciones y microchips.',
        'Si los gatos no están esterilizados, el Ayuntamiento debe empezar por ley el método CER.',
        'La guía avisa de que esto no se cumple en muchos municipios. Si te toca pagarlo a ti, puedes pedir al Ayuntamiento ayuda o el reembolso con el modelo de «Modelos de escritos».',
      ],
      modelo: 'ayuda-alimentacion',
    },
    {
      id: 'prohibir-alimentar', tema: 'colonia', fuente: 4,
      pregunta: '¿Me pueden prohibir dar de comer a los gatos de la calle?',
      claves: 'prohibir prohibido multa sancion denunciar alimentar dar de comer legal ilegal quitar comida',
      respuesta: [
        'Según la guía, los gatos tienen derecho a ser alimentados y ninguna prohibición de alimentar a los gatos de la calle es legal, siempre que se haga de forma limpia y responsable.',
        'Los gatos de colonias están protegidos por el Código Penal, y quitarles la comida es un acto de maltrato sancionado por ley.',
        'Aun así, la guía recomienda tener el carnet de alimentador del Ayuntamiento: con él ningún vecino puede denunciarte ni la Policía Local sancionarte.',
      ],
    },
    {
      id: 'veterinario-colonia', tema: 'colonia', fuente: 4,
      pregunta: '¿Qué cuidados veterinarios necesita una colonia?',
      claves: 'veterinario desparasitar parasitos pulgas diarrea vacunas cuidados salud enfermo colonia',
      respuesta: [
        'Además de comida y esterilización, hay que darles los cuidados veterinarios necesarios y seguir la colonia a largo plazo.',
        '- Lo primero e indispensable es desparasitarlos de forma periódica, por dentro y por fuera: evita muchas enfermedades y molestias, como las diarreas.',
        '- Hay que actuar rápido si un gato se hiere o enferma.',
        '- Se recomienda aprovechar la anestesia de la esterilización para desparasitarlos de la forma más completa posible.',
      ],
    },

    /* ----------------------------------------------------------------- Esterilización (CER) */
    {
      id: 'que-es-cer', tema: 'cer', fuente: 3,
      pregunta: '¿Qué es el método CER?',
      claves: 'cer ces captura esterilizacion retorno metodo que es significa',
      respuesta: [
        'CER significa Capturar, Esterilizar y Retornar. Se capturan los gatos de la colonia, se esterilizan y se devuelven a su sitio.',
        'Es el mejor sistema que hay para controlar de forma ética el número de gatos de las colonias urbanas, y está considerado un método científico.',
      ],
    },
    {
      id: 'por-que-esterilizar', tema: 'cer', fuente: 3,
      pregunta: '¿Por qué hay que esterilizar a los gatos de la calle?',
      claves: 'por que esterilizar castrar reproducir camadas celo superpoblacion muchos gatos',
      respuesta: [
        'Porque se reproducen muy rápido. Una gata puede quedarse preñada desde los 4-6 meses, el embarazo dura 64-69 días y cada camada ronda los 4 gatitos. Con tres camadas al año, una sola gata tiene unos 12 gatitos, y la mitad serán hembras que a los cuatro meses ya pueden quedarse preñadas.',
        'Sin control, en pocos años una colonia se convierte en un problema grande.',
        'Además, esterilizar machos y hembras reduce el estrés y las enfermedades infecciosas. La recomendación es esterilizar al 75 % de la colonia para controlar su número.',
      ],
    },
    {
      id: 'como-cer', tema: 'cer', fuente: 4,
      pregunta: '¿Cómo se hace el CER? ¿A qué gatos se esteriliza?',
      claves: 'como se hace cer capturar jaula anestesia cuantos meses crias edad operacion',
      respuesta: [
        'Se capturan todos los gatos «visibles» de cada colonia: machos, hembras y las crías a partir de los 5 meses.',
        'Se esterilizan con cirugía y anestesia general. Con esa misma anestesia se les hace la muesca en la oreja (indolora) que indica que ya están esterilizados, y se recomienda desparasitarlos a fondo.',
        'Después se devuelven a su colonia.',
      ],
    },
    {
      id: 'quien-paga-cer', tema: 'cer', fuente: 3,
      pregunta: '¿Quién paga la esterilización de los gatos de la calle?',
      claves: 'quien paga esterilizacion esterilizar castrar coste cuesta cuanto precio dinero cer ayuntamiento presupuesto gratis',
      respuesta: [
        'Todos los ayuntamientos de España deben aplicar legalmente el método CER, aunque cada uno lo interpreta a su manera y muchos ponen excusas como la falta de presupuesto.',
        'Para que el Ayuntamiento intervenga y pague las esterilizaciones, normalmente hace falta que una asociación o voluntarios le informen de las colonias que hay y de que necesitan esterilizarse.',
        'Las colonias tienen derechos recogidos en el Código Penal y el Ayuntamiento es responsable de su bienestar. Tienes un modelo para pedirle el CER en «Modelos de escritos».',
      ],
      modelo: 'convenio-cer',
    },
    {
      id: 'sin-cer', tema: 'cer', fuente: 7,
      pregunta: 'En mi pueblo no se hace el CER. ¿Qué puedo hacer?',
      claves: 'pueblo municipio no hay cer no hacen no existe conseguir pedir promover implantar',
      respuesta: [
        'Hay que promoverlo: el Ayuntamiento debe conocer el CER, el Manifiesto Felino y el Decálogo de los Derechos del Gato Callejero. Se le puede explicar cómo cumplir con su obligación de gestionar los animales de la calle, y llevarle un proyecto CER por escrito multiplica las opciones.',
        'Para el CER hace falta:',
        '- Personas voluntarias que capturen, devuelvan y atiendan cada día la colonia.',
        '- Medios para guardar, trasladar y limpiar el material de captura y alojar bien a los gatos el menor tiempo posible.',
        '- Que el Ayuntamiento lo pague.',
        '- Respaldo legal: actualizar la ordenanza o, si ya contempla el CER, hacerla cumplir.',
        'Tienes un modelo de solicitud al Ayuntamiento en «Modelos de escritos».',
      ],
      modelo: 'convenio-cer',
    },

    /* ----------------------------------------------------------------- Problemas con vecinos */
    {
      id: 'vecinos-trato', tema: 'vecinos', fuente: 4,
      pregunta: 'Un vecino se queja de que alimento a los gatos. ¿Cómo lo hablo?',
      claves: 'vecino vecina queja molesta enfado discutir insultos hablar convencer conflicto',
      respuesta: [
        'La guía insiste en ser siempre cordial, incluso ante insultos: el futuro de los gatos depende de cómo se comporte el cuidador. Hay que evitar discutir y apostar por el diálogo.',
        'Explícale qué es la gestión ética (alimentar con horario, esterilizar, mantener limpio). El rechazo suele venir del desconocimiento, y la mayoría de los vecinos lo entiende rápido y acaba reconociendo el trabajo bien hecho.',
        'Si hay intimidación, amenazas o envenenamientos, contacta enseguida con una asociación de confianza y con las autoridades (policía, ayuntamiento) para denunciarlo.',
      ],
    },
    {
      id: 'vecinos-ratas', tema: 'vecinos', fuente: 5,
      pregunta: 'Dicen que la comida de los gatos atrae a las ratas.',
      claves: 'ratas ratones roedores atrae atraer atraigo comida plaga vecino vecinos queja',
      respuesta: [
        'Es una de las quejas más habituales. Los gatos son depredadores naturales y, aunque estén bien alimentados, su instinto mantiene a las ratas lejos.',
        'Ayuda mucho no dejar comida a la vista: poner las bandejas a una hora fija, dejar que coman y retirarlas.',
      ],
    },
    {
      id: 'vecinos-muchos', tema: 'vecinos', fuente: 5,
      pregunta: 'Se quejan de que hay demasiados gatos en la zona.',
      claves: 'demasiados muchos gatos zona cantidad superpoblacion',
      respuesta: [
        'Las colonias de gatos forman parte de nuestras ciudades y del ecosistema. Lo fundamental es esterilizar los gatos de las colonias para controlar su número, mantener el equilibrio y evitar el sufrimiento de las crías en la calle.',
      ],
    },
    {
      id: 'vecinos-bandejas', tema: 'vecinos', fuente: 5,
      pregunta: 'Se quejan de que hay bandejas de comida por todas partes.',
      claves: 'bandejas platos comida suciedad sucio olor limpieza restos',
      respuesta: [
        'El cuidador no debe dejar las bandejas de comida y agua a la vista: es lógico que provoque quejas.',
        'Por eso conviene acostumbrar a los gatos a un horario: poner las bandejas, dejarles comer y retirarlas después.',
      ],
    },
    {
      id: 'vecinos-ruido', tema: 'vecinos', fuente: 5,
      pregunta: 'Se quejan de que los gatos hacen ruido por la noche.',
      claves: 'ruido noche maullidos peleas celo molestan dormir',
      respuesta: [
        'Precisamente por eso se cuida la colonia: alimentándola se sabe cuántos gatos hay, se pueden esterilizar y dar en adopción los que se pueda, para que con el tiempo haya menos.',
      ],
    },
    {
      id: 'vecinos-duermen', tema: 'vecinos', fuente: 5,
      pregunta: 'Los gatos duermen en terrazas o en fincas de gente que no quiere.',
      claves: 'duermen terraza finca jardin casetas refugio dormir particulares',
      respuesta: [
        'La mejor solución es instalar casetas en un sitio donde puedan descansar sin molestar: tranquilo y seguro.',
        'Hay que limpiar y desinfectar las casetas a menudo.',
      ],
    },

    /* --------------------------------------------------------------- Envenenamiento y maltrato */
    {
      id: 'veneno', tema: 'maltrato', fuente: 6,
      pregunta: 'Creo que están envenenando a los gatos de una colonia. ¿Qué hago?',
      claves: 'veneno envenenamiento envenenado envenenan matar muertos toxico intoxicado',
      respuesta: [
        'Envenenar animales a propósito es un delito (artículo 340 bis del Código Penal) y un delito contra la salud pública.',
        '- Llama al 112, mejor que a otro número porque las llamadas quedan grabadas, y pide que vaya la autoridad para tomar pruebas.',
        '- Avisa al Ayuntamiento, que es responsable de la seguridad y la salud en la calle.',
        '- Avisa también a quien cuida la colonia y al servicio municipal de recogida de animales.',
        '- Si el gato está vivo, llévalo al veterinario urgentemente. Busca qué ha podido tragar: ayuda a darle el antídoto.',
        '- Si ha muerto con señales de envenenamiento, pide una necropsia y un análisis toxicológico.',
        'Si se confirma que fue a propósito, denúncialo (tienes el modelo en «Modelos de escritos»), contacta con protectoras y avisa a los vecinos de que hay veneno: es un peligro para todos, sobre todo para niños pequeños y otros animales.',
      ],
      modelo: 'denuncia-maltrato',
    },
    {
      id: 'maltrato-denunciar', tema: 'maltrato', fuente: 13,
      pregunta: '¿Cómo denuncio un maltrato animal?',
      claves: 'denunciar denuncia denuncio maltrato maltratar pegar pega golpear abandono crueldad seprona guardia civil',
      respuesta: [
        'Lo mejor es denunciar por escrito, con todos los detalles y el máximo de pruebas: fotos, vídeos, testigos…',
        'La forma más fuerte de conseguir pruebas es llamar a la Guardia Civil (SEPRONA, 062, gratuito) para que vayan y levanten acta, que tiene valor de prueba.',
        'La denuncia administrativa es gratis: solo hace falta redactarla y registrarla en el Ayuntamiento u organismo competente. Se usa cuando se incumple una ordenanza municipal, una ley autonómica de protección animal o una ley estatal (como la Ley 7/2023). La sanción la pone el alcalde u otra autoridad.',
        'Tienes el modelo de denuncia en «Modelos de escritos».',
      ],
      modelo: 'denuncia-maltrato',
    },
    {
      id: 'maltrato-pruebas', tema: 'maltrato', fuente: 13,
      pregunta: '¿Qué pruebas necesito para denunciar un maltrato?',
      claves: 'pruebas fotos videos testigos datos recoger demostrar denuncia',
      respuesta: [
        'Si el SEPRONA (062) no puede ir en ese momento, recoge tú los datos:',
        '- El lugar donde ocurre el maltrato.',
        '- La fecha y la hora exactas en que lo viste.',
        '- Nombre y dirección de quien lo hace o, si no los sabes, cualquier dato que ayude a identificarle.',
        '- Nombre y dirección de los testigos, si los hay.',
        '- Una descripción detallada de lo que pasa.',
        '- Fotos con fecha y vídeos con día y hora. Si el maltrato es continuo, grábalo varios días.',
        '- Todos los documentos que tengas: actas, informes veterinarios, publicidad si es un negocio…',
        '- Si puedes, las leyes o normas que crees que se incumplen.',
      ],
      modelo: 'denuncia-maltrato',
    },

    /* ---------------------------------------------------------------- El ayuntamiento y la ley */
    {
      id: 'ley-7-2023', tema: 'ayuntamiento', fuente: 0,
      pregunta: '¿Qué dice la Ley 7/2023 sobre los gatos de la calle?',
      claves: 'ley 7/2023 bienestar animal derechos normativa legal ley animales nueva ley',
      respuesta: [
        'La Ley 7/2023, de 28 de marzo, de Protección de los Derechos y el Bienestar de los Animales, entró en vigor el 29 de septiembre de 2023.',
        'Regula las colonias felinas en sus artículos 38 a 42: corresponde a los ayuntamientos gestionar los gatos comunitarios con Programas de Gestión de Colonias Felinas.',
        'Desde entonces, los ayuntamientos son responsables de la salud, la alimentación y el bienestar de los animales sin dueño de su municipio, y está prohibido sacrificar animales sanos.',
        'La guía avisa de que, a día de hoy, muchos voluntarios y asociaciones aún no reciben las ayudas que deberían.',
      ],
    },
    {
      id: 'ayto-obligaciones', tema: 'ayuntamiento', fuente: 12,
      pregunta: '¿Qué obligaciones tiene el Ayuntamiento con los animales sin dueño?',
      claves: 'ayuntamiento obligaciones responsable recogida urgencia 24 horas centro proteccion animal',
      respuesta: [
        'Los animales sin dueño son, por ley, responsabilidad de los ayuntamientos, que deben gestionarlos de forma ética.',
        'Según la guía (artículos 22, 38, 39 y 40 de la Ley 7/2023), el Ayuntamiento debe:',
        '- Recoger los animales perdidos y abandonados y alojarlos en un centro de protección animal.',
        '- Tener un servicio de urgencia de recogida y atención veterinaria disponible las 24 horas.',
        '- Gestionar los gatos comunitarios con un Programa de Gestión de Colonias Felinas.',
        'Si no lo hace, puedes reclamarle: tienes los modelos en «Modelos de escritos».',
      ],
    },
    {
      id: 'ayto-no-hace-nada', tema: 'ayuntamiento', fuente: 11,
      pregunta: 'Mi ayuntamiento no ayuda con la colonia y lo pago todo yo.',
      claves: 'ayuntamiento no hace nada no ayuda pago yo ayuda economica subvencion dinero colonia',
      respuesta: [
        'Si tienes carnet de gestor o alimentador de una colonia, puedes pedir al Ayuntamiento que se haga cargo de los gastos de comida y atención veterinaria, o que te devuelva lo que has pagado.',
        'Guarda todas las facturas y comprobantes con fecha (pienso, desparasitaciones, vacunas, microchips, enfermedades).',
        'Tienes el modelo de solicitud en «Modelos de escritos». Si en tu municipio ni siquiera se hace el CER, también hay un modelo para pedirlo.',
      ],
      modelo: 'ayuda-alimentacion',
    },
    {
      id: 'sacrificio', tema: 'ayuntamiento', fuente: 8,
      pregunta: '¿Pueden sacrificar a los gatos de una colonia?',
      claves: 'sacrificar sacrificio matar eutanasia perrera eliminar',
      respuesta: [
        'No. Según la guía, está prohibido sacrificar animales sanos, tanto por el Código Penal como por la Ley 7/2023.',
        'Los ayuntamientos están obligados a gestionar de forma ética a los animales sin dueño, y el método CER es la forma de reducir la población sin hacerles daño.',
      ],
    },

    /* -------------------------------------------------------------------- Modelos de escritos */
    {
      id: 'modelos-lista', tema: 'modelos', fuente: 0,
      pregunta: '¿Qué modelos de escritos hay y para qué sirve cada uno?',
      claves: 'modelo modelos escrito plantilla formulario documento carta solicitud',
      respuesta: [
        'La guía trae cinco modelos para presentar en el Ayuntamiento. Rellena los huecos con tus datos:',
        '- Solicitud de CER: para pedir que el Ayuntamiento esterilice las colonias.',
        '- Autorización de colonia: para registrar una colonia gestionada con el método CER.',
        '- Ayuda para comida y veterinario de una colonia: si tienes carnet y pagas tú los gastos.',
        '- Reclamación de gastos veterinarios: si has llevado al veterinario a un gato de la calle.',
        '- Denuncia administrativa por maltrato animal.',
        'Ábrelos más abajo, en este mismo apartado.',
      ],
    },
  ],

  modelos: [
    {
      id: 'convenio-cer', fuente: 8,
      titulo: 'Solicitud de control de colonias felinas por el método CER',
      texto: `Att. D./Dña. [Alcalde/sa y Concejal/a responsable del Bienestar Animal]
Ayuntamiento de [municipio]

Asunto: Solicitud de control de colonias felinas por método C.E.R.

En [lugar], a [día] de [mes] de [año].

Muy señor/a mío/a:

Como usted bien sabrá, la nueva Ley 7/2023, de 28 de marzo, de Protección de los Derechos y el Bienestar de los Animales, que entró en vigor el 29 de septiembre, regula en sus artículos 38 a 42 las colonias felinas, estableciendo que «corresponde a las entidades locales la gestión de los gatos comunitarios, a cuyos efectos deberán desarrollar Programas de Gestión de Colonias Felinas».

La necesidad de la gestión ética de las colonias viene marcada por cuestiones de Salud Pública (Ley 7/1985, de 2 de abril, Reguladora de las Bases del Régimen Local, artículo 25.2.j) y el establecimiento de una convivencia responsable gatos/humanos en las ciudades.

Los gatos que encontramos en la vía pública (gatos comunitarios) son gatos que llevan una vida saludable en libertad, pero con un lugar fijo, generalmente una colonia, con el que existe una vinculación, un equilibrio de grupo y sobre el que ejerce un efecto protector. Tanto el gato comunitario como el que vive en una casa son animales domésticos de compañía que comparten el mismo genoma y deben gozar de igual protección.

El método CER (Captura-Esterilización-Retorno) es el único método para la disminución de la población felina de forma ética, al tiempo que se garantiza el bienestar animal, por el cual los gatos de colonias felinas son capturados, esterilizados y retornados a su lugar de origen. Se aplican buenas prácticas de gestión, alimentación y refugio; los gatos se identifican, desparasitan, vacunan y están supervisados veterinariamente.

En cuanto a la posibilidad de llevarlo a cabo por cuestión presupuestaria, le informo de que los animales sin dueño son por ley responsabilidad de los ayuntamientos y que, por tanto, están obligados a gestionarlos de forma ética, estando prohibido el sacrificio de animales sanos tanto por el Código Penal como por la Ley 7/2023.

El hecho de que los animales proliferen incontroladamente puede hacer que algunos habitantes de su municipio tomen medidas por su cuenta, envenenando animales o matándolos de cualquier otra manera, lo cual este Ayuntamiento debe evitar y perseguir, para cumplir con su responsabilidad y evitar incurrir en el ilícito del artículo 408 del Código Penal.

Por ello, solicito que, atendiendo a sus obligaciones, su Ayuntamiento dé los pasos necesarios e implemente la partida presupuestaria necesaria para implantar el método C.E.R. en su municipio.

Para cualquier duda o consulta, quedo a su disposición en el teléfono [teléfono] y en el correo [correo].

Reciba un cordial saludo,

Fdo.: [nombre y firma]`,
    },
    {
      id: 'autorizacion-colonia', fuente: 10,
      titulo: 'Solicitud de autorización de colonia felina gestionada por el método CER',
      texto: `SOLICITUD DE AUTORIZACIÓN DE COLONIA FELINA EN EL MUNICIPIO DE [municipio] GESTIONADA POR EL MÉTODO CES/CER

Fecha: [fecha]

La persona o personas abajo firmantes, como solicitantes responsables, solicitan al Ayuntamiento de [municipio] la autorización de la colonia, que será gestionada por el método CER, y cuyas características y ubicación se describen en este documento.

SOLICITANTE(S) RESPONSABLE(S): nombre, apellidos, DNI, correo electrónico, teléfono y domicilio.
[...]

COLABORADORES/AS ALIMENTADORES/AS DE LA COLONIA: nombre, apellidos, correo electrónico, teléfono y domicilio. Indicar también la persona que será el/la gestor/a responsable de la colonia.
[...]

¿PERTENECE EL/LA SOLICITANTE A ALGUNA ASOCIACIÓN PROTECTORA DE ANIMALES REGISTRADA? En caso afirmativo, indicar la persona que pertenece, el nombre de la asociación y el municipio donde está registrada.
[...]

DESCRIPCIÓN DE LA COLONIA
Ubicación (dirección postal completa y cualquier referencia que facilite la ubicación exacta de la colonia):
[...]

Número de animales en el momento de la solicitud (si algunos son cachorros, citarlo):
[...]

¿Los animales están esterilizados en el momento de la solicitud?  SÍ / NO

DECLARACIÓN RESPONSABLE DE SOLICITANTE(S)
Los abajo firmantes solicitan al Ayuntamiento de [municipio] la autorización de la colonia felina descrita en este mismo documento como colonia gestionada por el método CER.

En caso de recibir dicha autorización por parte del Ayuntamiento, los solicitantes alimentadores y gestores se comprometen a cumplir con todo lo estipulado en el documento «Protocolo de Autorización y Gestión de Colonias Felinas, por el método CER, en el municipio de [municipio]».

NOMBRES Y FIRMAS:
[...]`,
    },
    {
      id: 'ayuda-alimentacion', fuente: 11,
      titulo: 'Solicitud de ayuda para alimentación y atención sanitaria de una colonia felina',
      texto: `A LA ATENCIÓN DEL EXCELENTÍSIMO/A ALCALDE/SA DE [municipio]
AL CONCEJAL/A DE [concejalía]

D./Dña. [nombre y apellidos], con DNI [número], con domicilio a efectos de comunicaciones en la calle [dirección], población de [población], provincia de [provincia], correo electrónico [correo] y teléfono [teléfono], con carnet registrado de GESTOR/A o ALIMENTADOR/A DE LAS COLONIAS FELINAS identificadas como [identificación de la colonia],

EXPONE:

1. Que se encarga de la alimentación y atención sanitaria de dicha colonia, que reside en el municipio de [municipio], y es, por lo tanto, el Ayuntamiento de dicho municipio la entidad que debe garantizar sus derechos.

2. Que si el Ayuntamiento de [municipio] no se hace cargo de los gastos de dicha colonia está incumpliendo la normativa y puede ser, por tanto, denunciado y sancionado por tales hechos.

3. Que desde la fecha [fecha] he asumido el esfuerzo económico de la alimentación/atención sanitaria de dichos gatos comunitarios y he velado por su salud en la medida de mis posibilidades.
[Detallar aquí los importes y comprobantes, con sus fechas, de los gastos de alimentación y atención sanitaria: desparasitaciones, vacunaciones, microchip, enfermedades…]

4. Que en todo momento he mostrado mi mejor disposición por atender las carencias en cuanto a atención al bienestar animal que presenta el Ayuntamiento de [municipio], con absoluta discreción y buena voluntad.

5. Que no tendría que hacerme cargo de dichos gastos de alimentación/medicación/atención sanitaria de estos gatos si el Ayuntamiento de [municipio] hubiese implantado ya un adecuado sistema de atención a los animales abandonados que se encuentran en el municipio (de obligado cumplimiento para todos los ayuntamientos), acompañado de una asignación presupuestaria para dicha alimentación y atención sanitaria. Esfuerzo y coste que, insisto, corresponde al Ayuntamiento de [municipio] y que este elude de forma injustificable.

FUNDAMENTOS DE DERECHO

Son de aplicación los artículos 38, 39 y 40 de la Ley 7/2023, de 28 de marzo, de protección de los derechos y el bienestar de los animales.

Dicha ley establece que corresponde a las entidades locales la gestión de los gatos comunitarios, a cuyos efectos deberán desarrollar Programas de Gestión de Colonias Felinas.

La citada ley entró en vigor el 29 de septiembre de 2023 y, por lo tanto, los ayuntamientos deben cumplir con sus obligaciones desde esa fecha.

Los animales sin dueño son, por ley, responsabilidad de los ayuntamientos, que están obligados a gestionarlos de forma ética, estando prohibido el sacrificio de animales sanos por el Código Penal y por la Ley 7/2023.

Este Ayuntamiento debe cumplir con su responsabilidad y evitar incurrir en el ilícito de los artículos 340 bis a 340 quinquies del Código Penal.

Ya hay sentencias condenatorias a varios ayuntamientos por no atender a sus obligaciones de gestión de gatos comunitarios, además de las costas judiciales por su omisión del deber de hacerse cargo de los animales abandonados residentes en sus municipios.

SOLICITA

Se tenga por presentada la presente reclamación de los gastos asumidos por la alimentación/atención sanitaria de la colonia identificada como [identificación] del municipio, se admita y, en su virtud y previos los trámites reglamentarios correspondientes, resuelva expresamente en el sentido de acceder a lo solicitado y se me reembolse la cantidad económica que tuve que afrontar por los gastos que, en derecho, deberían haber sido abonados por el Ayuntamiento de [municipio].

En [lugar], a [día] de [mes] de [año].

Fdo.: [nombre y firma]`,
    },
    {
      id: 'gastos-veterinarios', fuente: 12,
      titulo: 'Reclamación de gastos veterinarios ante el Ayuntamiento',
      texto: `A LA ATENCIÓN DEL EXCMO./A ALCALDE/SA DE [municipio]
A LA CONCEJALÍA RESPONSABLE DEL BIENESTAR ANIMAL

[Nombre y apellidos], titular del DNI número [número], con domicilio a efectos de comunicaciones en [dirección], correo electrónico [correo] y teléfono [teléfono], actuando en defensa de los intereses que le son propios, ante el Excelentísimo Ayuntamiento de [municipio], Concejalía de [concejalía], comparece y, como mejor proceda, DICE:

Que presenta reclamación de los gastos asumidos por la atención de un gato comunitario, obligación que corresponde al Ayuntamiento por ley, basándose en los siguientes

HECHOS

Primero: [Describir dónde fue recogido, la hora, la fecha y el lugar.]

Segundo: Que, avisados tanto el Ayuntamiento como la Policía Local, me comunican que no se hacen cargo del gato recogido.

Tercero: Que, dada la urgencia de atención veterinaria, lo traslado a la clínica [nombre de la clínica], donde se le practican las atenciones necesarias, ascendiendo el importe de la consulta y las pruebas a [importe] € (adjunto factura e informe veterinario).

Cuarto: Que se trata de un gato comunitario que reside en el municipio de [municipio] y que, por tanto, goza de unos derechos que el Ayuntamiento no está garantizando y que son de obligado cumplimiento.

Quinto: Que el Ayuntamiento de [municipio] está incumpliendo la normativa y puede ser, por tanto, denunciado y sancionado por tales hechos.

FUNDAMENTOS DE DERECHO

Son de aplicación los artículos 22, 38, 39 y 40 de la Ley 7/2023, de 28 de marzo, de protección de los derechos y el bienestar de los animales, que obligan a los ayuntamientos a la recogida de animales extraviados y abandonados y su alojamiento en un centro de protección animal. Para ello deberán contar con un servicio de urgencia para la recogida y atención veterinaria de estos animales, disponible las veinticuatro horas del día. Esta gestión podrá realizarse directamente por los servicios municipales competentes o por entidades privadas, sin perjuicio de que, siempre que sea posible, se realice en colaboración con entidades de protección animal. También establece que corresponde a las entidades locales la gestión de los gatos comunitarios, a cuyos efectos deberán desarrollar Programas de Gestión de Colonias Felinas.

La citada ley entró en vigor el 29 de septiembre de 2023 y, por lo tanto, los ayuntamientos deben cumplir con sus obligaciones desde esa fecha.

Los animales sin dueño son, por ley, responsabilidad de los ayuntamientos, que están obligados a gestionarlos de forma ética, estando prohibido el sacrificio de animales sanos por el Código Penal y por la Ley 7/2023.

Este Ayuntamiento debe cumplir con su responsabilidad y evitar incurrir en el ilícito de los artículos 408 y 340 quater del Código Penal.

Ya hay sentencias condenatorias a varios ayuntamientos por no atender a sus obligaciones de gestión de gatos comunitarios.

SOLICITO

Se tenga por presentada la presente reclamación, se admita y, en su virtud y previos los trámites reglamentarios correspondientes, resuelva expresamente en el sentido de acceder a lo solicitado y se me reembolse la cantidad económica que tuve que afrontar por los gastos veterinarios que, en derecho, debería haber abonado el Ayuntamiento de [municipio].

En [lugar], a [día] de [mes] de [año].

Fdo.: [nombre y firma]`,
    },
    {
      id: 'denuncia-maltrato', fuente: 13,
      titulo: 'Denuncia administrativa por maltrato animal',
      texto: `[ORGANISMO AL QUE SE DIRIGE: AYUNTAMIENTO U ÓRGANO COMPETENTE]

[Nombre y apellidos del denunciante], mayor de edad, vecino/a de [localidad], con domicilio en [dirección] y con NIF número [número], actuando en nombre propio / como representante de [nombre de la entidad de protección animal], según documento acreditativo que se adjunta, comparezco ante este organismo y, como mejor proceda en Derecho,

DIGO

Que por medio del presente escrito formulo DENUNCIA por incumplimiento de [normativa infringida], [si se conoce: contra nombre y apellidos del denunciado y otros datos] y frente a todos aquellos que pudieran resultar responsables tras el expediente sancionador que se instruya y resuelva, por los hechos que se detallan a continuación:

HECHOS

I. En fecha [fecha], [descripción de los hechos y las circunstancias en que ocurrieron: lugar, personas involucradas, acciones contra los animales, etc., ordenando los datos cronológicamente y de la forma más simple posible].

II. La conducta del denunciado incumple lo establecido en [citar la ordenanza del Ayuntamiento]. La conducta denunciada también infringe las obligaciones impuestas en [citar la legislación autonómica/estatal].

III. Como prueba de estos hechos adjunto al presente escrito las siguientes pruebas: [documentos enumerados: fotografías, vídeos, testimonios, etc.].

IV. La competencia para el inicio y tramitación del expediente sancionador por los hechos denunciados corresponde a [órgano], al que me dirijo, de conformidad con lo establecido en [norma], sin perjuicio de la competencia para su resolución, conforme a [norma].

Por todo lo expuesto,

SE SOLICITA

Se admita el presente escrito y la documentación gráfica adjunta (fotografías que se unen como documentos enumerados del [n.º] al [n.º]), se tenga por formulada la denuncia por los hechos descritos y, en su virtud, se ordene la incoación de un expediente sancionador por incumplimiento de [normativa] contra la/s persona/s denunciada/s, con imposición de las sanciones pertinentes.

En su caso:
- Se decomise al/los animal/es maltratado/s para procurarle/s unas condiciones de cuidado, protección y bienestar de acuerdo con la normativa aplicable.
- Se me dé traslado de las actuaciones practicadas en el expediente que se instruya, como parte interesada.
- Se lleven a cabo las actuaciones necesarias para evitar la vulneración del ordenamiento jurídico y, en concreto, que se intensifique la actividad inspectora de [órgano administrativo] para prevenir la comisión de actos infractores como el que se ha detallado en la presente denuncia.

En [lugar], a [día] de [mes] de [año].

Fdo.: [nombre y firma]`,
    },
  ],
};
