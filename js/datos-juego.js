// Este archivo contiene todos los datos del juego: escenarios, situaciones y decisiones
const escenarios = [
  {
    id: "escuela",
    nombre: "Escuela",
    descripcion: "Un entorno educativo donde se forman los valores y relaciones sociales desde temprana edad.",
    situaciones: [
      {
        descripcion:
          "En tu clase hay un estudiante nuevo que viene de otro país y habla con acento. Algunos compañeros se burlan de él durante el recreo.",
        decisiones: [
          {
            texto: "Intervenir directamente, defender al estudiante y explicar a tus compañeros por qué su comportamiento es inapropiado.",
            impactoEquidad: 10, // Aumentado de 8 a 10
            impactoReputacion: 5, // Aumentado de 3 a 5
            explicacion:
              "Tu intervención directa no solo protege al estudiante de la discriminación inmediata, sino que también establece un precedente de respeto en el grupo. Al explicar por qué las burlas son inapropiadas, contribuyes a crear conciencia sobre la diversidad cultural y el respeto mutuo.",
          },
          {
            texto: "Acercarte al estudiante nuevo después y ofrecerle tu amistad, sin confrontar directamente a quienes se burlaban.",
            impactoEquidad: 5, // Aumentado de 3 a 5
            impactoReputacion: 7, // Aumentado de 5 a 7
            explicacion:
              "Tu apoyo ayuda al estudiante a sentirse menos aislado y le brinda un aliado en un entorno desconocido. Sin embargo, al no confrontar el comportamiento negativo, las burlas podrían continuar, manteniendo un ambiente hostil para él y otros estudiantes diversos en el futuro.",
          },
          {
            texto: "No intervenir para evitar problemas, pensando que no es tu responsabilidad.",
            impactoEquidad: -5,
            impactoReputacion: -3,
            explicacion:
              "Tu silencio se convierte en complicidad. El estudiante nuevo se siente aislado y sin apoyo, reforzando la idea de que ser diferente es motivo de exclusión. Este tipo de inacción permite que los comportamientos discriminatorios se normalicen en el entorno escolar.",
          },
          {
            texto: "Unirte a las burlas para encajar con el grupo y evitar ser el próximo objetivo.",
            impactoEquidad: -10,
            impactoReputacion: -8,
            explicacion:
              "Al unirte a las burlas, no solo perpetúas la discriminación sino que la intensificas. El estudiante experimenta una traición adicional al ver que incluso quienes podrían haberlo defendido eligen atacarlo. Tu acción refuerza la cultura de exclusión y puede causar daño psicológico duradero.",
          }
        ],
        datosInvestigacion: {
          titulo: "Datos sobre Acoso Escolar por Xenofobia",
          contenido: "Según el Ministerio de Educación de Colombia (2022), el 23% de los estudiantes migrantes venezolanos reportan haber sufrido discriminación en instituciones educativas. A nivel mundial, UNESCO indica que 1 de cada 3 estudiantes ha experimentado acoso escolar, siendo los estudiantes migrantes 2.5 veces más propensos a sufrirlo."
        }
      },
      {
        descripcion:
          "La escuela está organizando un evento deportivo, pero notas que una compañera con discapacidad motriz no ha sido considerada para participar en ninguna actividad.",
        decisiones: [
          {
            texto: "Hablar con los profesores para sugerir actividades inclusivas donde todos puedan participar según sus capacidades.",
            impactoEquidad: 10, // Aumentado de 8 a 10
            impactoReputacion: 7, // Aumentado de 5 a 7
            explicacion:
              "Tu iniciativa promueve un cambio estructural en cómo se organizan los eventos escolares. Al sugerir actividades inclusivas, no solo beneficias a tu compañera actual, sino que estableces un precedente para futuros eventos, creando un entorno más equitativo para todos los estudiantes con diferentes capacidades.",
          },
          {
            texto: "Invitar personalmente a la compañera a unirse a tu equipo, adaptando las reglas para que pueda participar.",
            impactoEquidad: 7, // Aumentado de 5 a 7
            impactoReputacion: 5, // Aumentado de 3 a 5
            explicacion:
              "Tu acción directa permite que tu compañera participe y se sienta incluida en esta ocasión específica. Sin embargo, al no abordar el problema a nivel institucional, la exclusión podría repetirse en futuros eventos si tú no estás presente para intervenir.",
          },
          {
            texto: "Pensar que es mejor así para no exponer a la compañera a una situación incómoda o difícil.",
            impactoEquidad: -5,
            impactoReputacion: -5,
            explicacion:
              "Aunque crees proteger a tu compañera, en realidad estás reforzando su exclusión. Esta decisión perpetúa la idea errónea de que las personas con discapacidad no pueden o no deben participar en actividades regulares, negándole la oportunidad de integrarse y disfrutar como los demás.",
          },
          {
            texto: "Sugerir que haga de 'árbitro' o 'cronometrista' para que 'participe' sin competir realmente.",
            impactoEquidad: -8,
            impactoReputacion: -4,
            explicacion:
              "Tu sugerencia, aunque bien intencionada, perpetúa la segregación. Asignar roles secundarios refuerza la idea de que las personas con discapacidad no pueden ser participantes plenos, sino solo observadores o asistentes, limitando sus oportunidades de experiencia deportiva real.",
          }
        ],
        datosInvestigacion: {
          titulo: "Inclusión Educativa en Colombia",
          contenido: "El DANE (2020) reporta que solo el 56% de las personas con discapacidad en edad escolar asisten a instituciones educativas en Colombia. La OMS indica que los niños con discapacidad tienen 10 veces menos probabilidades de asistir a la escuela y participar en actividades extracurriculares."
        }
      },
      {
        descripcion:
          "Durante un trabajo en grupo, un compañero de origen indígena propone una idea brillante, pero el resto del grupo la ignora. Minutos después, otro estudiante propone la misma idea y todos la aplauden.",
        decisiones: [
          {
            texto: "Señalar inmediatamente que la idea original vino del compañero indígena y que merece el reconocimiento.",
            impactoEquidad: 10, // Aumentado de 8 a 10
            impactoReputacion: 5, // Aumentado de 3 a 5
            explicacion:
              "Tu intervención corrige una injusticia en tiempo real y visibiliza un patrón discriminatorio que muchas veces pasa desapercibido. Al reconocer públicamente la autoría de la idea, no solo defiendes a tu compañero, sino que también educas al grupo sobre la importancia de escuchar y valorar todas las voces por igual.",
          },
          {
            texto: "Hablar en privado con el compañero indígena para expresarle que notaste lo sucedido y que valoras sus aportes.",
            impactoEquidad: 5, // Aumentado de 3 a 5
            impactoReputacion: 7, // Aumentado de 5 a 7
            explicacion:
              "Tu apoyo privado brinda consuelo a tu compañero y le muestra que no está solo, lo cual es valioso. Sin embargo, al no corregir la situación públicamente, se pierde la oportunidad de educar al grupo y se permite que continúe el patrón de invisibilización de sus contribuciones.",
          },
          {
            texto: "No decir nada, pensando que quizás no entendiste bien la situación o que no es tan importante.",
            impactoEquidad: -5,
            impactoReputacion: -3,
            explicacion:
              "Tu silencio normaliza la discriminación sutil. Tu compañero experimenta no solo la frustración de ver su idea apropiada por otro, sino también la sensación de que nadie nota o le importa esta injusticia, reforzando sentimientos de exclusión y desvalorización de sus aportes.",
          },
          {
            texto: "Pensar que tal vez la idea del segundo estudiante era mejor explicada y por eso tuvo más aceptación.",
            impactoEquidad: -9,
            impactoReputacion: -6,
            explicacion:
              "Al racionalizar la discriminación, contribuyes a perpetuar sesgos inconscientes. Tu compañero indígena no solo ve su idea apropiada, sino que también experimenta la invalidación de su experiencia discriminatoria, sintiendo que incluso sus aliados potenciales niegan la realidad del racismo que enfrenta.",
          }
        ],
        datosInvestigacion: {
          titulo: "Discriminación a Pueblos Indígenas en Educación",
          contenido: "Según el ONIC (2021), el 67% de estudiantes indígenas en Colombia reportan haber experimentado discriminación en instituciones educativas. UNESCO señala que los estudiantes indígenas tienen tasas de deserción escolar 3 veces mayores que el promedio nacional debido a factores discriminatorios."
        }
      }
    ],
  },
  {
    id: "trabajo",
    nombre: "Entorno Laboral",
    descripcion:
      "Una oficina donde las dinámicas de poder y las relaciones profesionales ponen a prueba tus valores éticos.",
    situaciones: [
      {
        descripcion:
          "Eres parte del comité que debe decidir a quién promover a un puesto de gerencia. Hay dos candidatos: un hombre con menos experiencia pero muy carismático, y una mujer más calificada pero menos extrovertida.",
        decisiones: [
          {
            texto: "Defender objetivamente las calificaciones de la candidata mujer y argumentar que la experiencia debe pesar más que el carisma.",
            impactoEquidad: 10, // Aumentado de 8 a 10
            impactoReputacion: 5, // Aumentado de 3 a 5
            explicacion:
              "Tu defensa basada en criterios objetivos ayuda a contrarrestar sesgos inconscientes que a menudo perjudican a las mujeres en entornos laborales. Al priorizar la experiencia y calificaciones, contribuyes a crear un proceso de selección más justo que valora el mérito por encima de características subjetivas como el carisma.",
          },
          {
            texto: "Proponer un proceso de evaluación más estructurado que minimice los sesgos subjetivos.",
            impactoEquidad: 7, // Aumentado de 5 a 7
            impactoReputacion: 7, // Aumentado de 5 a 7
            explicacion:
              "Tu propuesta aborda el problema de manera sistémica, lo que puede beneficiar no solo a esta candidata sino a futuros procesos de selección. Al implementar evaluaciones estructuradas, ayudas a reducir la influencia de sesgos inconscientes que suelen favorecer a ciertos perfiles sobre otros por razones no relacionadas con sus capacidades reales.",
          },
          {
            texto: "Apoyar al candidato hombre porque crees que su carisma lo hace mejor para un puesto de liderazgo.",
            impactoEquidad: -8,
            impactoReputacion: -3,
            explicacion:
              "Tu decisión perpetúa estereotipos de género que asocian el liderazgo con características tradicionalmente masculinas como el carisma y la extroversión. La candidata mujer pierde una oportunidad merecida, reforzando el 'techo de cristal' que dificulta el avance profesional de las mujeres en posiciones de liderazgo.",
          },
          {
            texto: "Sugerir que ninguno de los dos es adecuado y buscar candidatos externos para evitar tomar una decisión difícil.",
            impactoEquidad: -10,
            impactoReputacion: -8,
            explicacion:
              "Tu evasión de la decisión perpetúa la discriminación de manera indirecta. Al rechazar a ambos candidatos cuando hay una mujer claramente más calificada, contribuyes a mantener estructuras que favorecen la búsqueda externa sobre la promoción interna de mujeres talentosas.",
          }
        ],
        datosInvestigacion: {
          titulo: "Brecha de Género en Liderazgo Empresarial",
          contenido: "Según el DANE (2022), solo el 27% de cargos directivos en Colombia están ocupados por mujeres. McKinsey Global Institute reporta que las mujeres representan solo el 22% de posiciones de liderazgo senior a nivel mundial, a pesar de constituir el 47% de la fuerza laboral."
        }
      },
      {
        descripcion:
          "Escuchas a un compañero hacer comentarios inapropiados sobre la orientación sexual de otro colega cuando éste no está presente.",
        decisiones: [
          {
            texto: "Confrontar a tu compañero en el momento, explicando por qué sus comentarios son ofensivos e inapropiados.",
            impactoEquidad: 10, // Aumentado de 8 a 10
            impactoReputacion: 2, // Aumentado de 0 a 2
            explicacion:
              "Tu intervención inmediata envía un mensaje claro de que los comentarios discriminatorios no son aceptables en el entorno laboral. Aunque pueda generar tensión momentánea, contribuyes a crear un ambiente de trabajo más seguro y respetuoso para todos, especialmente para personas LGBTQ+ que a menudo enfrentan microagresiones similares.",
          },
          {
            texto: "Cambiar de tema sutilmente y luego hablar en privado con tu compañero sobre el respeto en el lugar de trabajo.",
            impactoEquidad: 5, // Aumentado de 3 a 5
            impactoReputacion: 5, // Aumentado de 3 a 5
            explicacion:
              "Tu enfoque evita la confrontación pública pero aún aborda el problema. La conversación privada puede ser efectiva para educar a tu compañero sin avergonzarlo, aunque el impacto inmediato es menor y otros presentes podrían interpretar tu cambio de tema como una aceptación tácita de los comentarios.",
          },
          {
            texto: "No decir nada para evitar conflictos, pensando que no es tu problema.",
            impactoEquidad: -5,
            impactoReputacion: -5,
            explicacion:
              "Tu silencio permite que continúe la discriminación. El colega ausente seguirá siendo objeto de comentarios despectivos, y el ambiente laboral se vuelve hostil para personas LGBTQ+. Al no intervenir, te conviertes en cómplice pasivo de la creación de un entorno de trabajo tóxico e irrespetuoso.",
          },
          {
            texto: "Reírte o hacer comentarios adicionales para encajar con el grupo y evitar ser visto como 'problemático'.",
            impactoEquidad: -11,
            impactoReputacion: -9,
            explicacion:
              "Al participar activamente en la discriminación, no solo perpetúas un ambiente laboral hostil sino que lo intensificas. Tu comportamiento contribuye a normalizar la homofobia en el lugar de trabajo y puede causar daño psicológico significativo al colega objetivo de los comentarios.",
          }
        ],
        datosInvestigacion: {
          titulo: "Discriminación LGBTI en el Trabajo",
          contenido: "Colombia Diversa (2021) reporta que el 64% de personas LGBTI han experimentado discriminación laboral en Colombia. La Organización Internacional del Trabajo indica que la discriminación por orientación sexual reduce la productividad empresarial en un 30% debido al estrés y ausentismo."
        }
      },
      {
        descripcion:
          "En una reunión importante, notas que las ideas de tus compañeras mujeres son constantemente interrumpidas o ignoradas, mientras que las de los hombres reciben atención inmediata.",
        decisiones: [
          {
            texto: "Intervenir diciendo: 'Creo que [nombre de la compañera] estaba haciendo un punto importante que no terminamos de escuchar' y cederle la palabra.",
            impactoEquidad: 10, // Aumentado de 8 a 10
            impactoReputacion: 7, // Aumentado de 5 a 7
            explicacion:
              "Tu intervención directa interrumpe el patrón de silenciamiento y visibiliza un problema común que enfrentan las mujeres en entornos profesionales. Al redirigir la atención hacia tu compañera, no solo le das la oportunidad de ser escuchada en ese momento, sino que también modelas un comportamiento más inclusivo para todos los presentes.",
          },
          {
            texto: "Hablar con el líder de la reunión después para señalar el patrón que observaste y sugerir técnicas más inclusivas.",
            impactoEquidad: 7, // Aumentado de 5 a 7
            impactoReputacion: 5, // Aumentado de 3 a 5
            explicacion:
              "Tu enfoque busca un cambio estructural en cómo se conducen las reuniones. Aunque no corrige la situación inmediata, puede tener un impacto positivo a largo plazo si el líder implementa prácticas más equitativas. Sin embargo, tus compañeras siguen experimentando la frustración de no ser escuchadas en esa reunión específica.",
          },
          {
            texto: "No decir nada, pensando que cada quien debe aprender a hacerse escuchar por sus propios medios.",
            impactoEquidad: -8,
            impactoReputacion: -5,
            explicacion:
              "Tu inacción perpetúa un ambiente laboral inequitativo. Las compañeras continúan enfrentando barreras sistemáticas para contribuir, lo que no solo afecta su desarrollo profesional y reconocimiento, sino que también priva al equipo de valiosas perspectivas e ideas que podrían enriquecer el proyecto o la discusión.",
          },
          {
            texto: "Pensar que las mujeres simplemente no están siendo lo suficientemente asertivas y que es su responsabilidad adaptarse.",
            impactoEquidad: -10,
            impactoReputacion: -6,
            explicacion:
              "Al culpar a las víctimas de la discriminación, perpetúas sesgos de género profundamente arraigados. Tu perspectiva ignora las barreras sistemáticas que enfrentan las mujeres y refuerza la idea de que deben cambiar su comportamiento natural para encajar en estructuras diseñadas por y para hombres.",
          }
        ],
        datosInvestigacion: {
          titulo: "Interrupción de Género en Reuniones",
          contenido: "Un estudio de la Universidad de los Andes (2021) encontró que las mujeres son interrumpidas 2.8 veces más que los hombres en reuniones corporativas en Colombia. Harvard Business Review reporta que las mujeres hablan 25% menos tiempo en reuniones mixtas debido a interrupciones constantes."
        }
      }
    ],
  },
  {
    id: "transporte",
    nombre: "Transporte Público",
    descripcion: "Un espacio compartido donde se manifiestan actitudes y comportamientos sociales cotidianos.",
    situaciones: [
      {
        descripcion:
          "En un autobús lleno, ves a una mujer embarazada de pie mientras un joven ocupa un asiento preferencial mirando su teléfono.",
        decisiones: [
          {
            texto: "Acercarte al joven y pedirle amablemente que ceda su asiento a la mujer embarazada.",
            impactoEquidad: 7, // Aumentado de 5 a 7
            impactoReputacion: 5, // Aumentado de 3 a 5
            explicacion:
              "Tu intervención directa y respetuosa resuelve una situación de inequidad inmediata. La mujer embarazada obtiene el asiento que necesita, y el joven toma conciencia de la importancia de respetar los asientos preferenciales. Tu acción también modela un comportamiento cívico para otros pasajeros presentes.",
          },
          {
            texto: "Ofrecer tu propio asiento a la mujer embarazada, aunque no estés en un asiento preferencial.",
            impactoEquidad: 5, // Aumentado de 3 a 5
            impactoReputacion: 7, // Aumentado de 5 a 7
            explicacion:
              "Tu gesto personal resuelve la necesidad inmediata de la mujer embarazada, mostrando empatía y consideración. Sin embargo, no aborda el problema de fondo: el mal uso de los asientos preferenciales. El joven continúa sin tomar conciencia de su responsabilidad en estos espacios compartidos.",
          },
          {
            texto: "No hacer nada, pensando que seguramente alguien más intervendrá.",
            impactoEquidad: -3,
            impactoReputacion: -3,
            explicacion:
              "Tu inacción contribuye al fenómeno conocido como 'difusión de responsabilidad', donde todos esperan que alguien más actúe. La mujer embarazada sigue de pie, enfrentando incomodidad y potenciales riesgos para su salud, mientras el uso inadecuado de los asientos preferenciales se normaliza.",
          },
          {
            texto: "Pensar que ella debería haber planificado mejor su viaje para evitar las horas pico.",
            impactoEquidad: -8,
            impactoReputacion: -6,
            explicacion:
              "Al culpar a la víctima, perpetúas una mentalidad que ignora las necesidades especiales de personas en condiciones vulnerables. Tu perspectiva refuerza la idea de que las mujeres embarazadas deben adaptarse a un sistema inequitativo en lugar de que la sociedad proporcione el apoyo necesario.",
          }
        ],
        datosInvestigacion: {
          titulo: "Embarazo y Transporte Público",
          contenido: "Según el Ministerio de Transporte de Colombia (2022), solo el 34% de mujeres embarazadas reportan recibir asientos preferenciales cuando los necesitan. La OMS indica que estar de pie por períodos prolongados durante el embarazo aumenta el riesgo de complicaciones en un 23%."
        }
      },
      {
        descripcion:
          "Observas que un grupo de pasajeros está haciendo comentarios despectivos sobre una persona de otra etnia que acaba de subir al transporte.",
        decisiones: [
          {
            texto: "Intervenir directamente, señalando que esos comentarios son racistas e inapropiados.",
            impactoEquidad: 10, // Aumentado de 8 a 10
            impactoReputacion: 2, // Aumentado de 0 a 2
            explicacion:
              "Tu intervención directa desafía el racismo en el momento que ocurre, enviando un mensaje claro de que tales comportamientos no son aceptables en espacios públicos. La persona afectada siente que no está sola frente a la discriminación, y los agresores reciben una retroalimentación inmediata sobre lo inapropiado de sus acciones.",
          },
          {
            texto: "Acercarte a la persona afectada para mostrar apoyo y hacer que se sienta menos aislada.",
            impactoEquidad: 7, // Aumentado de 5 a 7
            impactoReputacion: 5, // Aumentado de 3 a 5
            explicacion:
              "Tu gesto de solidaridad proporciona apoyo emocional directo a la persona que sufre la discriminación, mitigando en parte el impacto negativo de la experiencia. Sin embargo, al no confrontar a los agresores, el comportamiento racista continúa sin ser cuestionado públicamente.",
          },
          {
            texto: "Mantener la distancia para evitar problemas, pensando que la situación podría escalar.",
            impactoEquidad: -5,
            impactoReputacion: -3,
            explicacion:
              "Tu silencio por temor a las consecuencias permite que la discriminación continúe sin oposición. La persona afectada experimenta no solo los comentarios racistas directos, sino también la dolorosa realidad de que nadie a su alrededor está dispuesto a defenderla, intensificando su sensación de vulnerabilidad y aislamiento.",
          },
          {
            texto: "Estar de acuerdo silenciosamente con algunos comentarios porque has tenido 'experiencias similares' con personas de esa etnia.",
            impactoEquidad: -10,
            impactoReputacion: -8,
            explicacion:
              "Al validar internamente los comentarios racistas, contribuyes a perpetuar estereotipos dañinos y discriminación. Aunque no participes verbalmente, tu complicidad mental refuerza prejuicios que pueden influir en tus futuras interacciones y decisiones hacia personas de esa etnia.",
          }
        ],
        datosInvestigacion: {
          titulo: "Racismo en Espacios Públicos",
          contenido: "El Observatorio de Discriminación Racial (2021) reporta que el 47% de personas afrodescendientes en Colombia han experimentado discriminación en transporte público. A nivel mundial, la Agencia de Derechos Fundamentales de la UE indica que 1 de cada 3 personas de minorías étnicas ha sufrido acoso racial en espacios públicos."
        }
      },
      {
        descripcion:
          "Una persona con discapacidad visual intenta subir al transporte con su perro guía, pero el conductor le dice que no se permiten animales.",
        decisiones: [
          {
            texto: "Explicar respetuosamente al conductor que los perros guía están legalmente autorizados a acompañar a personas con discapacidad visual en el transporte público.",
            impactoEquidad: 10, // Aumentado de 8 a 10
            impactoReputacion: 7, // Aumentado de 5 a 7
            explicacion:
              "Tu intervención informada defiende los derechos legales de la persona con discapacidad visual y educa al conductor sobre las excepciones importantes a las reglas generales. Esta acción no solo resuelve la situación inmediata, sino que también puede prevenir incidentes similares en el futuro con este conductor.",
          },
          {
            texto: "Sugerir a la persona con discapacidad que muestre alguna identificación o documentación de su perro guía.",
            impactoEquidad: 0,
            impactoReputacion: 0,
            explicacion:
              "Tu sugerencia, aunque bien intencionada, pone la carga de la justificación en la persona con discapacidad, quien legalmente no está obligada a llevar documentación especial para su perro guía. Esta situación añade una barrera adicional y potencialmente humillante para alguien que ya enfrenta desafíos diarios para su movilidad.",
          },
          {
            texto: "No intervenir, pensando que no es tu lugar meterte en la aplicación de las reglas del transporte.",
            impactoEquidad: -8,
            impactoReputacion: -5,
            explicacion:
              "Tu inacción permite la discriminación contra una persona con discapacidad y la violación de sus derechos legales. La persona podría verse obligada a esperar otro transporte o buscar alternativas menos convenientes, enfrentando una barrera injusta para su movilidad e independencia.",
          },
          {
            texto: "Apoyar al conductor porque crees que las reglas deben aplicarse igual para todos sin excepciones.",
            impactoEquidad: -9,
            impactoReputacion: -7,
            explicacion:
              "Al apoyar la aplicación ciega de reglas sin considerar necesidades especiales, contribuyes activamente a la discriminación por discapacidad. Tu posición ignora que la verdadera equidad a veces requiere tratamiento diferenciado para garantizar igualdad de acceso y oportunidades.",
          }
        ],
        datosInvestigacion: {
          titulo: "Accesibilidad en Transporte Público",
          contenido: "Según el DANE (2020), solo el 12% del transporte público en Colombia cumple con estándares de accesibilidad. La Fundación ONCE reporta que el 68% de personas con discapacidad visual han enfrentado barreras de acceso en transporte público a nivel mundial."
        }
      }
    ],
  },
  {
    id: "redSocial",
    nombre: "Red Social",
    descripcion: "Un espacio virtual donde las interacciones pueden tener un impacto real en la vida de las personas.",
    situaciones: [
      {
        descripcion:
          "Eres moderador de un grupo en redes sociales y notas una publicación que contiene desinformación sobre un grupo minoritario.",
        decisiones: [
          {
            texto: "Eliminar la publicación, explicar las razones y compartir información verificada sobre el tema.",
            impactoEquidad: 10, // Aumentado de 8 a 10
            impactoReputacion: 5, // Aumentado de 3 a 5
            explicacion:
              "Tu acción decisiva evita la propagación de desinformación dañina y proporciona contexto educativo para todos los miembros del grupo. Al compartir información verificada, no solo eliminas el contenido problemático sino que también contribuyes a una comprensión más precisa y respetuosa sobre el grupo minoritario en cuestión.",
          },
          {
            texto: "Mantener la publicación pero añadir una nota aclarando que contiene información incorrecta.",
            impactoEquidad: 5, // Aumentado de 3 a 5
            impactoReputacion: 2, // Aumentado de 0 a 2
            explicacion:
              "Tu enfoque intenta equilibrar la libertad de expresión con la responsabilidad de la precisión. Sin embargo, la desinformación sigue visible y puede seguir influyendo en las percepciones, incluso con tu nota aclaratoria. Algunos miembros del grupo minoritario podrían sentirse desprotegidos al ver que contenido dañino sobre ellos permanece publicado.",
          },
          {
            texto: "No intervenir, argumentando que todos tienen derecho a expresar sus opiniones.",
            impactoEquidad: -8,
            impactoReputacion: -5,
            explicacion:
              "Tu inacción permite la difusión de información falsa que daña la imagen y perpetúa prejuicios contra un grupo ya vulnerable. Confundir desinformación con opinión legitima narrativas potencialmente peligrosas y crea un ambiente hostil para los miembros de ese grupo minoritario en tu comunidad virtual.",
          },
          {
            texto: "Compartir la publicación en otros grupos para 'generar debate' sobre el tema.",
            impactoEquidad: -13,
            impactoReputacion: -10,
            explicacion:
              "Al amplificar activamente la desinformación, te conviertes en un propagador de contenido dañino. Tu acción multiplica el alcance de información falsa y prejuiciosa, causando daño a mayor escala y contribuyendo significativamente a la discriminación contra el grupo minoritario afectado.",
          }
        ],
        datosInvestigacion: {
          titulo: "Desinformación y Discriminación Online",
          contenido: "Según el Centro de Estudios sobre Internet y Sociedad de Colombia (2022), el 67% de contenido discriminatorio en redes sociales contiene elementos de desinformación. Reuters Institute reporta que la desinformación sobre grupos minoritarios aumenta la discriminación offline en un 43%."
        }
      },
      {
        descripcion:
          "Ves que un amigo ha compartido un meme que perpetúa estereotipos dañinos sobre las mujeres y está recibiendo muchos 'likes' y comentarios de apoyo.",
        decisiones: [
          {
            texto: "Comentar públicamente explicando por qué el meme es problemático y cómo perpetúa estereotipos de género.",
            impactoEquidad: 8, // Aumentado de 6 a 8
            impactoReputacion: 4, // Aumentado de 2 a 4
            explicacion:
              "Tu comentario público desafía los estereotipos de género y educa tanto a tu amigo como a su audiencia sobre el impacto dañino de este tipo de contenido. Aunque puedas enfrentar críticas, contribuyes a elevar el nivel de conciencia sobre discriminación de género en tu círculo social digital.",
          },
          {
            texto: "Enviar un mensaje privado a tu amigo explicando tu preocupación sobre el contenido que compartió.",
            impactoEquidad: 5, // Aumentado de 3 a 5
            impactoReputacion: 6, // Aumentado de 4 a 6
            explicacion:
              "Tu aproximación privada puede ser efectiva para educar a tu amigo sin generar confrontación pública. Sin embargo, el contenido problemático sigue visible para todos sus seguidores, y la conversación educativa se limita a una sola persona en lugar de beneficiar a toda su audiencia.",
          },
          {
            texto: "Simplemente no interactuar con la publicación para no darle más visibilidad.",
            impactoEquidad: -4,
            impactoReputacion: -2,
            explicacion:
              "Tu silencio, aunque comprensible, permite que el contenido discriminatorio circule sin cuestionamiento. Los estereotipos de género se refuerzan sin oposición, y las mujeres en tu círculo social pueden sentirse invisibilizadas al ver que nadie desafía contenido que las afecta negativamente.",
          },
          {
            texto: "Darle 'like' al meme porque te parece gracioso, sin considerar sus implicaciones más profundas.",
            impactoEquidad: -9,
            impactoReputacion: -6,
            explicacion:
              "Al apoyar activamente contenido que perpetúa estereotipos de género, contribuyes a normalizar la discriminación hacia las mujeres. Tu interacción positiva con el contenido lo hace más visible para otros usuarios y refuerza la idea de que este tipo de 'humor' es socialmente aceptable.",
          }
        ],
        datosInvestigacion: {
          titulo: "Estereotipos de Género en Redes Sociales",
          contenido: "UN Women (2021) reporta que el 73% de mujeres han experimentado algún tipo de violencia online, incluyendo contenido que perpetúa estereotipos de género. Un estudio de la Universidad Nacional de Colombia encontró que los memes sexistas tienen 3 veces más probabilidades de volverse virales que contenido similar sin sesgos de género."
        }
      },
      {
        descripcion:
          "Observas que un influencer popular está promoviendo teorías conspirativas sobre las vacunas dirigidas específicamente a comunidades rurales e indígenas.",
        decisiones: [
          {
            texto: "Reportar la cuenta por difundir desinformación médica peligrosa y comentar con fuentes científicas verificadas.",
            impactoEquidad: 11, // Aumentado de 9 a 11
            impactoReputacion: 5, // Aumentado de 3 a 5
            explicacion:
              "Tu acción combate la desinformación médica que puede tener consecuencias graves para la salud pública, especialmente en comunidades ya vulnerables. Al proporcionar fuentes científicas, contribuyes a contrarrestar narrativas peligrosas que podrían disuadir a personas de acceder a atención médica esencial.",
          },
          {
            texto: "Compartir información científica verificada en tus propias redes para contrarrestar la desinformación.",
            impactoEquidad: 7, // Aumentado de 5 a 7
            impactoReputacion: 6, // Aumentado de 4 a 6
            explicacion:
              "Tu estrategia de proporcionar información correcta es valiosa para educar a tu audiencia. Sin embargo, no aborda directamente la fuente de desinformación, que continúa influyendo en comunidades vulnerables que pueden tener menos acceso a información científica verificada.",
          },
          {
            texto: "No hacer nada porque no quieres involucrarte en controversias políticas o científicas.",
            impactoEquidad: -6,
            impactoReputacion: -3,
            explicacion:
              "Tu inacción permite que continúe la difusión de desinformación médica peligrosa hacia comunidades ya marginadas. Al no intervenir, contribuyes pasivamente a perpetuar desigualdades en salud pública que afectan desproporcionadamente a poblaciones rurales e indígenas.",
          },
          {
            texto: "Compartir algunas de las publicaciones porque crees que 'hay algo de verdad' en las preocupaciones sobre las vacunas.",
            impactoEquidad: -13,
            impactoReputacion: -10,
            explicacion:
              "Al amplificar desinformación médica, te conviertes en cómplice de la propagación de contenido que puede causar daños reales a la salud pública. Tu acción contribuye directamente a perpetuar desconfianza médica en comunidades vulnerables, potencialmente poniendo vidas en riesgo.",
          }
        ],
        datosInvestigacion: {
          titulo: "Desinformación Médica y Comunidades Vulnerables",
          contenido: "La OPS (2022) reporta que las comunidades rurales e indígenas en Colombia tienen 40% menos acceso a información de salud verificada. Reuters Institute indica que la desinformación médica dirigida a grupos específicos aumenta las brechas de salud existentes en un 60%."
        }
      }
    ],
  },
  {
    id: "emergencias",
    nombre: "Sala de Emergencias",
    descripcion: "Un entorno médico donde las decisiones rápidas pueden verse influenciadas por sesgos inconscientes.",
    situaciones: [
      {
        descripcion:
          "Trabajas como personal médico y notas que un paciente afrodescendiente lleva más tiempo esperando atención que otros pacientes con síntomas similares que llegaron después.",
        decisiones: [
          {
            texto: "Revisar inmediatamente el sistema de triaje y asegurarte de que el paciente reciba la atención que corresponde según su condición médica.",
            impactoEquidad: 11, // Aumentado de 9 a 11
            impactoReputacion: 6, // Aumentado de 4 a 6
            explicacion:
              "Tu intervención directa corrige una potencial disparidad racial en la atención médica. Al priorizar la equidad en el tratamiento, no solo ayudas a este paciente específico sino que también estableces un precedente de atención médica justa y basada en necesidades clínicas reales.",
          },
          {
            texto: "Hablar discretamente con el supervisor sobre el patrón que observas para revisar los protocolos de atención.",
            impactoEquidad: 8, // Aumentado de 6 a 8
            impactoReputacion: 7, // Aumentado de 5 a 7
            explicacion:
              "Tu enfoque sistémico puede generar cambios a largo plazo en los protocolos hospitalarios. Sin embargo, el paciente actual sigue esperando más tiempo del necesario, y la intervención institucional puede tomar tiempo en implementarse.",
          },
          {
            texto: "Asumir que hay razones médicas válidas para la demora que no estás considerando.",
            impactoEquidad: -5,
            impactoReputacion: -4,
            explicacion:
              "Tu inacción permite que continúe un posible sesgo racial en la atención médica. Al no cuestionar disparidades evidentes en los tiempos de espera, contribuyes a normalizar un sistema que puede proporcionar atención desigual basada en características raciales en lugar de necesidades médicas.",
          },
          {
            texto: "Pensar que el paciente probablemente está exagerando sus síntomas o que puede esperar más tiempo.",
            impactoEquidad: -11,
            impactoReputacion: -9,
            explicacion:
              "Al aplicar estereotipos racistas sobre la percepción del dolor y la urgencia médica, perpetúas disparidades históricas en la atención sanitaria. Tu sesgo contribuye directamente a inequidades que pueden resultar en peores resultados de salud y experiencias traumáticas para pacientes de grupos minoritarios.",
          }
        ],
        datosInvestigacion: {
          titulo: "Disparidades Raciales en Atención Médica",
          contenido: "Un estudio del Ministerio de Salud de Colombia (2021) encontró que pacientes afrodescendientes esperan en promedio 23% más tiempo para recibir atención en emergencias. La Asociación Médica Americana reporta que los sesgos raciales en medicina resultan en diagnósticos tardíos y tratamientos inadecuados en el 40% de los casos."
        }
      },
      {
        descripcion:
          "Una mujer joven llega reportando dolor severo, pero escuchas a colegas comentar que 'probablemente está exagerando' o 'buscando medicamentos'.",
        decisiones: [
          {
            texto: "Abogar por una evaluación completa del dolor de la paciente y recordar a tus colegas sobre los sesgos de género en la percepción del dolor.",
            impactoEquidad: 10, // Aumentado de 8 a 10
            impactoReputacion: 6, // Aumentado de 4 a 6
            explicacion:
              "Tu intervención combate el sesgo de género en medicina que históricamente ha minimizado el dolor de las mujeres. Al abogar por una evaluación adecuada, no solo proteges a esta paciente sino que también educas a tu equipo sobre disparidades de género en la atención médica.",
          },
          {
            texto: "Realizar tu propia evaluación independiente de la paciente para asegurar que reciba atención adecuada.",
            impactoEquidad: 8, // Aumentado de 6 a 8
            impactoReputacion: 7, // Aumentado de 5 a 7
            explicacion:
              "Tu evaluación independiente proporciona una segunda opinión valiosa y asegura que la paciente reciba atención profesional. Sin embargo, no abordas el problema sistémico de sesgo de género que puede afectar a futuras pacientes con el mismo equipo médico.",
          },
          {
            texto: "Mantenerte al margen porque confías en el juicio de tus colegas más experimentados.",
            impactoEquidad: -6,
            impactoReputacion: -4,
            explicacion:
              "Tu deferencia hacia la 'experiencia' perpetúa sesgos de género en medicina que pueden resultar en diagnósticos erróneos o tratamientos inadecuados. La paciente puede no recibir la atención que necesita debido a estereotipos sobre cómo las mujeres expresan el dolor.",
          },
          {
            texto: "Estar de acuerdo con tus colegas porque has notado que las mujeres jóvenes 'tienden a dramatizar' sus síntomas.",
            impactoEquidad: -10,
            impactoReputacion: -8,
            explicacion:
              "Al reforzar estereotipos de género sobre la expresión del dolor, contribuyes activamente a disparidades médicas que han resultado históricamente en subdiagnóstico y subtratamiento de condiciones serias en mujeres. Tu sesgo puede tener consecuencias graves para la salud de la paciente.",
          }
        ],
        datosInvestigacion: {
          titulo: "Sesgo de Género en Evaluación del Dolor",
          contenido: "La Revista Médica Colombiana (2022) reporta que las mujeres esperan en promedio 16 minutos más que los hombres para recibir analgésicos en emergencias. A nivel internacional, estudios muestran que el dolor de las mujeres es subestimado en un 45% de los casos comparado con síntomas idénticos en hombres."
        }
      },
      {
        descripcion:
          "Un paciente adulto mayor llega con síntomas de confusión, y varios colegas asumen inmediatamente que es demencia senil sin realizar exámenes completos.",
        decisiones: [
          {
            texto: "Insistir en realizar un panel completo de exámenes para descartar causas tratables de confusión como infecciones o desequilibrios electrolíticos.",
            impactoEquidad: 11, // Aumentado de 9 a 11
            impactoReputacion: 7, // Aumentado de 5 a 7
            explicacion:
              "Tu insistencia en un diagnóstico diferencial completo combate el edadismo médico que a menudo asume que la confusión en adultos mayores es irreversible. Muchas causas de confusión son tratables, y tu enfoque puede literalmente salvar la función cognitiva y calidad de vida del paciente.",
          },
          {
            texto: "Sugerir que se realicen al menos algunos exámenes básicos antes de asumir un diagnóstico de demencia.",
            impactoEquidad: 6, // Aumentado de 4 a 6
            impactoReputacion: 5, // Aumentado de 3 a 5
            explicacion:
              "Tu sugerencia de exámenes básicos es un paso en la dirección correcta, pero puede no ser suficiente para detectar todas las causas reversibles de confusión. El paciente puede beneficiarse de una evaluación más exhaustiva que descarte completamente condiciones tratables.",
          },
          {
            texto: "Aceptar la evaluación inicial de tus colegas porque la demencia es común en adultos mayores.",
            impactoEquidad: -7,
            impactoReputacion: -5,
            explicacion:
              "Tu aceptación del diagnóstico prematuro perpetúa el edadismo médico que asume que el deterioro cognitivo es inevitable en la vejez. Esta actitud puede resultar en el paso por alto de condiciones tratables, privando al paciente de posibles tratamientos que podrían restaurar su función cognitiva.",
          },
          {
            texto: "Estar de acuerdo en que probablemente es demencia y que no vale la pena 'desperdiciar recursos' en exámenes extensos.",
            impactoEquidad: -13,
            impactoReputacion: -10,
            explicacion:
              "Al devaluar la vida y el potencial de recuperación de adultos mayores, perpetúas una forma grave de discriminación por edad en medicina. Tu actitud contribuye a un sistema que proporciona atención de menor calidad a personas mayores, negándoles oportunidades de diagnóstico y tratamiento que podrían ser transformadoras.",
          }
        ],
        datosInvestigacion: {
          titulo: "Edadismo en Diagnóstico Médico",
          contenido: "La Sociedad Colombiana de Geriatría (2021) reporta que el 60% de casos de confusión aguda en adultos mayores son diagnosticados erróneamente como demencia sin evaluación completa. La OMS indica que hasta el 40% de diagnósticos de 'demencia' en servicios de emergencia son en realidad condiciones reversibles."
        }
      }
    ],
  },
  {
    id: "familia",
    nombre: "Entorno Familiar",
    descripcion: "El núcleo social primario donde se forman valores y se establecen dinámicas que influyen en nuestra visión del mundo.",
    situaciones: [
      {
        descripcion:
          "Durante una reunión familiar, tu tío hace comentarios despectivos sobre los matrimonios entre personas del mismo sexo, y varios familiares asienten en acuerdo.",
        decisiones: [
          {
            texto: "Expresar respetuosamente tu desacuerdo y compartir información sobre los derechos y la dignidad de las personas LGBTQ+.",
            impactoEquidad: 9, // Aumentado de 7 a 9
            impactoReputacion: 4, // Aumentado de 2 a 4
            explicacion:
              "Tu intervención educativa en un entorno familiar puede ser particularmente efectiva para cambiar perspectivas, ya que viene de alguien conocido y respetado. Aunque pueda generar tensión familiar temporalmente, contribuyes a crear un ambiente más inclusivo para cualquier miembro LGBTQ+ presente o futuro en tu familia.",
          },
          {
            texto: "Cambiar de tema diplomaticamente para evitar conflictos familiares, pero hablar en privado con familiares más jóvenes después.",
            impactoEquidad: 5, // Aumentado de 3 a 5
            impactoReputacion: 6, // Aumentado de 4 a 6
            explicacion:
              "Tu estrategia evita confrontación directa mientras aún proporciona educación a miembros familiares más receptivos. Sin embargo, los comentarios discriminatorios quedan sin ser desafiados públicamente, y tu tío mantiene sus perspectivas sin ser cuestionado.",
          },
          {
            texto: "Mantenerte callado para preservar la armonía familiar, pensando que no es el momento ni el lugar.",
            impactoEquidad: -5,
            impactoReputacion: -3,
            explicacion:
              "Tu silencio por preservar la 'paz' familiar permite que la homofobia se normalice en tu entorno más íntimo. Cualquier miembro LGBTQ+ presente se siente abandonado, y los comentarios discriminatorios quedan validados por la falta de oposición.",
          },
          {
            texto: "Mostrar acuerdo con tu tío para mantener la unidad familiar y evitar ser visto como el 'problemático'.",
            impactoEquidad: -10,
            impactoReputacion: -8,
            explicacion:
              "Al apoyar activamente la discriminación en tu círculo familiar, refuerzas y legitimas la homofobia en el entorno donde se forman los valores fundamentales. Tu acción contribuye a perpetuar actitudes discriminatorias que pueden transmitirse a las próximas generaciones.",
          }
        ],
        datosInvestigacion: {
          titulo: "Discriminación Familiar hacia Personas LGBTQ+",
          contenido: "Colombia Diversa (2022) reporta que el 42% de jóvenes LGBTI experimentan rechazo familiar inicial. PFLAG International indica que las familias que reciben educación sobre diversidad sexual muestran un 70% de mejora en aceptación hacia miembros LGBTQ+ en el primer año."
        }
      },
      {
        descripcion:
          "Tu hermana está planeando su boda y excluye a su prima adoptiva de ser dama de honor porque 'no es realmente familia', a pesar de que crecieron juntas.",
        decisiones: [
          {
            texto: "Hablar con tu hermana sobre cómo la adopción crea vínculos familiares reales y el dolor que puede causar esta exclusión.",
            impactoEquidad: 9, // Aumentado de 7 a 9
            impactoReputacion: 6, // Aumentado de 4 a 6
            explicacion:
              "Tu intervención educativa puede ayudar a tu hermana a reconocer cómo sus acciones perpetúan la discriminación hacia personas adoptadas. Al abordar estas actitudes, contribuyes a validar y fortalecer los vínculos familiares reales que trascienden la biología.",
          },
          {
            texto: "Ofrecer apoyo emocional a tu prima adoptiva y asegurarle que tiene valor y lugar en la familia.",
            impactoEquidad: 6, // Aumentado de 4 a 6
            impactoReputacion: 7, // Aumentado de 5 a 7
            explicacion:
              "Tu apoyo directo proporciona consuelo importante a tu prima en un momento de dolor familiar. Sin embargo, no abordas la fuente del problema, y tu hermana mantiene actitudes que pueden continuar excluyendo y lastimando a miembros adoptados de la familia.",
          },
          {
            texto: "Mantenerte neutral porque es la boda de tu hermana y ella tiene derecho a elegir a sus damas de honor.",
            impactoEquidad: -4,
            impactoReputacion: -3,
            explicacion:
              "Tu neutralidad frente a la discriminación basada en el origen familiar normaliza la exclusión de personas adoptadas. Tu prima experimenta rechazo sin apoyo familiar, reforzando sentimientos de no pertenencia que pueden afectar su bienestar psicológico a largo plazo.",
          },
          {
            texto: "Estar de acuerdo con tu hermana porque entiendes que quiera tener solo 'familia de sangre' en roles importantes.",
            impactoEquidad: -9,
            impactoReputacion: -6,
            explicacion:
              "Al validar la discriminación basada en vínculos biológicos, perpetúas una jerarquía familiar tóxica que devalúa las relaciones adoptivas. Tu posición refuerza la idea de que las personas adoptadas son miembros familiares de 'segunda clase', causando daño emocional profundo.",
          }
        ],
        datosInvestigacion: {
          titulo: "Discriminación hacia Personas Adoptadas",
          contenido: "El Instituto Colombiano de Bienestar Familiar (2021) reporta que el 34% de personas adoptadas experimentan discriminación dentro de sus propias familias adoptivas. Estudios internacionales muestran que la exclusión familiar basada en adopción aumenta el riesgo de problemas de salud mental en un 45%."
        }
      },
      {
        descripcion:
          "En una reunión familiar, tu abuela hace comentarios racistas sobre la nueva novia afrodescendiente de tu primo, sugiriendo que 'no encaja' con la familia.",
        decisiones: [
          {
            texto: "Intervenir respetuosamente pero firmemente, explicando que el amor no tiene color y que todos merecen respeto en la familia.",
            impactoEquidad: 10, // Aumentado de 8 a 10
            impactoReputacion: 5, // Aumentado de 3 a 5
            explicacion:
              "Tu intervención directa pero respetuosa desafía el racismo intergeneracional y defiende la dignidad de la novia de tu primo. Aunque puede ser incómodo confrontar a un miembro mayor de la familia, estableces límites importantes contra la discriminación racial en tu entorno familiar.",
          },
          {
            texto: "Hablar en privado con tu abuela después para educarla sobre diversidad racial y el daño de sus comentarios.",
            impactoEquidad: 7, // Aumentado de 5 a 7
            impactoReputacion: 6, // Aumentado de 4 a 6
            explicacion:
              "Tu enfoque privado puede ser efectivo para educar sin avergonzar públicamente a tu abuela. Sin embargo, los comentarios racistas quedaron sin ser desafiados en el momento, y la novia de tu primo pudo haber experimentado dolor sin apoyo inmediato.",
          },
          {
            texto: "No decir nada porque tu abuela es mayor y 'es de otra generación' con diferentes valores.",
            impactoEquidad: -6,
            impactoReputacion: -4,
            explicacion:
              "Tu silencio por excusar el racismo como 'generacional' permite que la discriminación continúe sin consecuencias. La novia de tu primo se siente rechazada y sin apoyo familiar, mientras que los comentarios racistas se normalizan como 'tradición familiar'.",
          },
          {
            texto: "Estar secretamente de acuerdo con tu abuela porque también tienes dudas sobre relaciones interraciales.",
            impactoEquidad: -11,
            impactoReputacion: -9,
            explicacion:
              "Al albergar y validar sentimientos racistas, perpetúas la discriminación racial en el núcleo familiar. Tu actitud contribuye a crear un ambiente hostil para la pareja interracial y refuerza patrones de exclusión racial que pueden transmitirse a futuras generaciones.",
          }
        ],
        datosInvestigacion: {
          titulo: "Racismo en Relaciones Interraciales",
          contenido: "El Observatorio de Discriminación Racial de Colombia (2021) reporta que el 56% de parejas interraciales enfrentan discriminación de familiares. Un estudio de la Universidad Javeriana encontró que el apoyo familiar es el factor más importante para el éxito de relaciones interraciales, presente solo en el 32% de los casos."
        }
      }
    ],
  }
];