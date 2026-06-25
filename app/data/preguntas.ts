export interface QuestionItem {
  country: string;
  question: string;
  answer: string;
  options: string[];
}


// Falta grupo suiza egipto y austria (no estan las de austria)

/*
export const QUESTIONS_DB: QuestionItem[] = [
  // ==========================================
  // ARGENTINA (ARG)
  // ==========================================
  {
    "country": "Argentina",
    "question": "ARG-1 | ¿En qué estadio Argentina ganó su primer Mundial en 1978?",
    "answer": "estadio monumental",
    "options": ["Estadio José Amalfitani", "Estadio Monumental", "Estadio Gigante de Arroyito", "Estadio Mario Kempes"]
  },
  {
    "country": "Argentina",
    "question": "ARG-2 | ¿Quién convirtió el primer gol de Argentina en el Mundial de 1986?",
    "answer": "josé luis brown",
    "options": ["Diego Maradona", "Jorge Valdano", "Oscar Ruggeri", "José Luis Brown"]
  },
  {
    "country": "Argentina",
    "question": "ARG-3 | ¿Cómo le fue a Argentina en el Mundial 2002?",
    "answer": "no pasó la fase de grupos",
    "options": ["No pasó la fase de grupos", "Campeón", "Eliminado en Octavos de Final", "No clasificó"]
  },
  {
    "country": "Argentina",
    "question": "ARG-4 | ¿Cuál fue el único Mundial en el que Argentina defendió el título como campeón vigente?",
    "answer": "italia 1990",
    "options": ["México 1986", "Italia 1990", "Francia 1998", "Sudáfrica 2010"]
  },
  {
    "country": "Argentina",
    "question": "ARG-5 | ¿Quién hizo el gol de Argentina en la final del Mundial 2014?",
    "answer": "ningún argentino convirtió",
    "options": ["Lionel Messi", "Gonzalo Higuaín", "Sergio Agüero", "Ningún argentino convirtió"]
  },
  {
    "country": "Argentina",
    "question": "ARG-6 | ¿Contra qué país debutó Lionel Messi en un Mundial?",
    "answer": "serbia y montenegro",
    "options": ["Costa de Marfil", "Serbia y Montenegro", "Alemania", "Países Bajos"]
  },
  {
    "country": "Argentina",
    "question": "ARG-7 | ¿Qué arquero argentino fue figura en la tanda de penales contra Países Bajos en Qatar 2022?",
    "answer": "emiliano martínez",
    "options": ["Sergio Romero", "Franco Armani", "Emiliano Martínez", "Gerónimo Rulli"]
  },
  {
    "country": "Argentina",
    "question": "ARG-8 | ¿Cuál de estos jugadores NO fue campeón mundial con Argentina en 2022?",
    "answer": "giovani lo celso",
    "options": ["Ángel Di María", "Paulo Dybala", "Giovani Lo Celso", "Julián Álvarez"]
  },
  {
    "country": "Argentina",
    "question": "ARG-9 | ¿Qué ocurrió el 25 de Mayo de 1810?",
    "answer": "se formó la primera junta",
    "options": ["Se declaró la independencia", "Asumió el primer presidente", "Se formó la Primera Junta", "Se sancionó la Constitución"]
  },
  {
    "country": "Argentina",
    "question": "ARG-10 | ¿En qué provincia se declaró la Independencia Argentina?",
    "answer": "tucumán",
    "options": ["Córdoba", "Buenos Aires", "Mendoza", "Tucumán"]
  },
  {
    "country": "Argentina",
    "question": "ARG-11 | ¿Quién fue the director supremo de las Provincias Unidas y organizó el Congreso de Tucumán?",
    "answer": "juan martín de pueyrredón",
    "options": ["Manuel Belgrano", "Gervasio Posadas", "Juan Martín de Pueyrredón", "Bernardino Rivadavia"]
  },
  {
    "country": "Argentina",
    "question": "ARG-12 | ¿Cuál fue el nombre original de Argentina en la época colonial?",
    "answer": "virreinato del río de la plata",
    "options": ["Virreinato del Río de la Plata", "Provincias Unidas del Sur", "Confederación Argentina", "República Federal del Plata"]
  },
  {
    "country": "Argentina",
    "question": "ARG-13 | ¿Quién creó la bandera argentina?",
    "answer": "manuel belgrano",
    "options": ["José de San Martín", "Manuel Belgrano", "Mariano Moreno", "Domingo Sarmiento"]
  },
  {
    "country": "Argentina",
    "question": "ARG-14 | ¿En qué batalla fue derrotado definitivamente Juan Manuel de Rosas?",
    "answer": "caseros",
    "options": ["Cepeda", "Pavón", "Caseros", "San Lorenzo"]
  },
  {
    "country": "Argentina",
    "question": "ARG-15 | ¿Cuál fue el primer presidente constitucional de Argentina?",
    "answer": "bernardino rivadavia",
    "options": ["Julio A. Roca", "Bartolomé Mitre", "Bernardino Rivadavia", "Nicolás Avellaneda"]
  },
  {
    "country": "Argentina",
    "question": "ARG-16 | ¿Cuál es la provincia argentina con mayor superficie?",
    "answer": "santa cruz",
    "options": ["Buenos Aires", "Chubut", "Santa Cruz", "Mendoza"]
  },
  {
    "country": "Argentina",
    "question": "ARG-17 | ¿Qué río sirve de límite natural entre Argentina y Uruguay?",
    "answer": "río uruguay",
    "options": ["Río Paraná", "Río Uruguay", "Río Salado", "Río Pilcomayo"]
  },
  {
    "country": "Argentina",
    "question": "ARG-18 | ¿Cuál es la capital de la provincia de Tierra del Fuego?",
    "answer": "ushuaia",
    "options": ["Río Grande", "Tolhuin", "Ushuaia", "Caleta Olivia"]
  },
  {
    "country": "Argentina",
    "question": "ARG-19 | ¿Qué provincia argentina NO tiene salida al mar?",
    "answer": "neuquén",
    "options": ["Río Negro", "Chubut", "Neuquén", "Santa Cruz"]
  },
  {
    "country": "Argentina",
    "question": "ARG-20 | ¿Cuál es el cerro más alto de América?",
    "answer": "aconcagua",
    "options": ["Lanín", "Fitz Roy", "Mercedario", "Aconcagua"]
  },
  {
    "country": "Argentina",
    "question": "ARG-21 | ¿En qué provincia se encuentran las Cataratas del Iguazú?",
    "answer": "misiones",
    "options": ["Corrientes", "Chaco", "Misiones", "Formosa"]
  },
  {
    "country": "Argentina",
    "question": "ARG-22 | ¿Cuál es el lago más grande de Argentina?",
    "answer": "lago argentino",
    "options": ["Lago Nahuel Huapi", "Lago Argentino", "Lago Viedma", "Lago Fagnano"]
  },
  {
    "country": "Argentina",
    "question": "ARG-23 | ¿Qué provincia argentina limita con más países?",
    "answer": "salta",
    "options": ["Salta", "Jujuy", "Misiones", "Mendoza"]
  },
  {
    "country": "Argentina",
    "question": "ARG-24 | ¿Cuál es la ciudad más austral del mundo reconocida oficialmente?",
    "answer": "ushuaia",
    "options": ["Río Gallegos", "Punta Arenas", "Ushuaia", "Puerto Madryn"]
  },
  {
    "country": "Argentina",
    "question": "ARG-25 | ¿Qué provincia argentina produce mayor cantidad de vino?",
    "answer": "mendoza",
    "options": ["San Juan", "Mendoza", "La Rioja", "Neuquén"]
  },
  {
    "country": "Argentina",
    "question": "ARG-26 | Quién convirtió el gol para la clasificación contra Nigeria en el mundial 2018?",
    "answer": "marcos rojo",
    "options": ["Marcos Rojo", "lionel messi", "sergio aguero", "Dario Benedetto"]
  },
  {
    "country": "Argentina",
    "question": "ARG-27 | ¿Cuánto mide la Copa Mundial de la FIFA?",
    "answer": "36,8 cm",
    "options": ["34,5 cm", "36,8 cm", "38,1cm", "30,30 cm"]
  },
  {
    "country": "Argentina",
    "question": "ARG-28 | ¿Cuánto pesa la Copa Mundial de la FIFA?",
    "answer": "6,175 kg",
    "options": ["4,805 kg", "6,175 kg", "7,355 kg", "6,500 kg"]
  },
  {
    "country": "Argentina",
    "question": "ARG-29 | ¿Quién convirtió el gol de Argentina en la defeat 2-1 ante Países Bajos en los cuartos de final del Mundial 1998?",
    "answer": "claudio caniggia",
    "options": ["Gabriel Batistuta", "Claudio López", "Claudio Caniggia", "Diego Maradona"]
  },
  {
    "country": "Argentina",
    "question": "ARG-30 | ¿Quién era el capitán de Argentina en el Mundial de Francia 1998?",
    "answer": "gabriel batistuta",
    "options": ["Gabriel Batistuta", "Diego Simeone", "Roberto Ayala", "Lionel Scaloni"]
  },
  {
    "country": "Argentina",
    "question": "ARG-31 | ¿Cómo terminó el partido entre Argentina e Inglaterra en octavos de final del Mundial 1998?",
    "answer": "2-2 y ganó argentina por penales",
    "options": ["2-1 Argentina", "2-2 y ganó Argentina por penales", "1-1 y ganó Inglaterra por penales", "2-2 y ganó Inglaterra por penales"]
  },
  {
    "country": "Argentina",
    "question": "ARG-32 | ¿Quién convirtió el penal decisivo ante Inglaterra en 1998?",
    "answer": "javier zanetti",
    "options": ["Ariel Ortega", "Javier Zanetti", "Hernán Crespo", "Gabriel Batistuta"]
  },
  {
    "country": "Argentina",
    "question": "ARG-33 | ¿Quién hizo el histórico gol tras la jugada preparada ante Inglaterra en 1998?",
    "answer": "javier zanetti",
    "options": ["Gabriel Batistuta", "Javier Zanetti", "Claudio López", "Hernán Crespo"]
  },
  {
    "country": "Argentina",
    "question": "ARG-34 | ¿Quién fue el capitán de Argentina en el Mundial 2002?",
    "answer": "gabriel batistuta",
    "options": ["Juan Pablo Sorín", "Gabriel Batistuta", "Javier Zanetti", "Juan Román Riquelme"]
  },
  {
    "country": "Argentina",
    "question": "ARG-35 | ¿Qué selección eliminó a Argentina del Mundial 2002?",
    "answer": "suecia",
    "options": ["Suecia", "Inglaterra", "Nigeria", "Uruguay"]
  },
  {
    "country": "Argentina",
    "question": "ARG-36 | ¿Cómo salió el partido entre Argentina y Suecia en 2002?",
    "answer": "1-1",
    "options": ["2-1 Suecia", "1-1", "0-0"]
  },
  {
    "country": "Argentina",
    "question": "ARG-37 | ¿Quién convirtió el único gol argentino ante Suecia en 2002?",
    "answer": "hernán crespo",
    "options": ["Hernán Crespo", "Batistuta", "Verón"]
  },
  {
    "country": "Argentina",
    "question": "ARG-38 | ¿Quién era el capitán argentino en Alemania 2006?",
    "answer": "roberto ayala",
    "options": ["Roberto Ayala", "Sorín", "Crespo"]
  },
  {
    "country": "Argentina",
    "question": "ARG-39 | ¿Cómo terminó Argentina vs México en 2006?",
    "answer": "2-1 argentina",
    "options": ["2-1 Argentina", "1-0 Argentina", "3-1 Argentina"]
  },
  {
    "country": "Argentina",
    "question": "ARG-40 | ¿Qué selección eliminó a Argentina en cuartos de final del Mundial 2006?",
    "answer": "alemania",
    "options": ["Italia", "Alemania", "Brasil"]
  },
  {
    "country": "Argentina",
    "question": "ARG-41 | ¿Quién era el arquero titular de Argentina en Sudáfrica 2010?",
    "answer": "sergio romero",
    "options": ["Sergio Romero", "Mariano Andújar", "Juan Pablo Carrizo"]
  },
  {
    "country": "Argentina",
    "question": "ARG-42 | ¿Quién convirtió el primer gol argentino en el Mundial 2010?",
    "answer": "gabriel heinze",
    "options": ["Gonzalo Higuaín", "Gabriel Heinze", "Carlos Tévez"]
  },
  {
    "country": "Argentina",
    "question": "ARG-43 | ¿Cómo terminó Argentina vs Alemania en cuartos de final de 2010?",
    "answer": "4-0 alemania",
    "options": ["3-0 Alemania", "4-0 Alemania", "2-0 Alemania"]
  },
  {
    "country": "Argentina",
    "question": "ARG-44 | ¿Quién era el capitán argentino en Brasil 2014?",
    "answer": "lionel messi",
    "options": ["Javier Mascherano", "Ángel Di María", "Lionel Messi"]
  },
  {
    "country": "Argentina",
    "question": "ARG-45 | ¿Quién convirtió el gol de la victoria ante Irán en 2014?",
    "answer": "messi",
    "options": ["Agüero", "Messi", "Di María"]
  },
  {
    "country": "Argentina",
    "question": "ARG-46 | ¿Cómo terminó la semifinal entre Argentina y Países Bajos en 2014?",
    "answer": "0-0 y ganó argentina por penales",
    "options": ["1-0 Argentina", "0-0 y ganó Argentina por penales", "2-1 Argentina"]
  },
  {
    "country": "Argentina",
    "question": "ARG-47 | ¿Quién atajó dos penales en la semifinal de 2014?",
    "answer": "romero",
    "options": ["Romero", "Lux", "Andújar"]
  },
  {
    "country": "Argentina",
    "question": "ARG-48 | ¿Quién hizo el gol ante Suiza en octavos de final de 2014?",
    "answer": "di maría",
    "options": ["Messi", "Higuaín", "Di María"]
  },
  {
    "country": "Argentina",
    "question": "ARG-49 | ¿Quién era el capitán argentino en Rusia 2018?",
    "answer": "lionel messi",
    "options": ["Javier Mascherano", "Lionel Messi", "Nicolás Otamendi"]
  },
  {
    "country": "Argentina",
    "question": "ARG-50 | ¿Cómo terminó Argentina vs Francia en octavos de final de 2018?",
    "answer": "4-3 francia",
    "options": ["4-3 Francia", "3-2 Francia", "2-1 Francia"]
  },
  {
    "country": "Argentina",
    "question": "ARG-51 | ¿Quién convirtió un golazo de volea ante Francia en 2018?",
    "answer": "di maría",
    "options": ["Di María", "Pavón", "Messi"]
  },
  {
    "country": "Argentina",
    "question": "ARG-52 | ¿Quién marcó el primer gol de Argentina ante Nigeria en 2018?",
    "answer": "messi",
    "options": ["Messi", "Agüero", "Higuaín"]
  },
  {
    "country": "Argentina",
    "question": "ARG-53 | ¿Quién fue el capitán argentino en Qatar 2022?",
    "answer": "messi",
    "options": ["Otamendi", "Messi", "Di María"]
  },
  {
    "country": "Argentina",
    "question": "ARG-54 | ¿Quién convirtió el primer gol argentino en Qatar 2022?",
    "answer": "messi",
    "options": ["Julián Álvarez", "Messi", "Lautaro Martínez"]
  },
  {
    "country": "Argentina",
    "question": "ARG-55 | ¿Quién hizo los dos goles de Argentina en la semifinal ante Croacia en 2022?",
    "answer": "messi y julián álvarez",
    "options": ["Messi y Julián Álvarez", "Messi y Lautaro Martínez", "Julián Álvarez y Enzo Fernández"]
  },
  {
    "country": "Argentina",
    "question": "ARG-56 | ¿Quién realizó la recordada atajada a Kolo Muani en la final de Qatar 2022?",
    "answer": "emiliano martínez",
    "options": ["Nicolás Otamendi", "Emiliano Martínez", "Cristian Romero"]
  },
  {
    "country": "Argentina",
    "question": "ARG-57 | ¿Quién convirtió el gol ante México en la fase de grupos de Qatar 2022 que abrió el marcador?",
    "answer": "messi",
    "options": ["Enzo Fernández", "Messi", "Mac Allister"]
  },
  {
    "country": "Argentina",
    "question": "ARG-58 | ¿Quién fue el goleador argentino en el Mundial 2006?",
    "answer": "hernán crespo",
    "options": ["Hernán Crespo", "Messi", "Tévez"]
  },
  {
    "country": "Argentina",
    "question": "ARG-59 | ¿Qué número de camiseta utilizó Lionel Messi en su debut mundialista en 2006?",
    "answer": "19",
    "options": ["18", "19", "21"]
  },
  {
    "country": "Argentina",
    "question": "ARG-60 | ¿Qué jugador argentino convirtió el último penal de la serie ante Inglaterra en los octavos de final del Mundial 1998?",
    "answer": "javier zanetti",
    "options": ["Diego Simeone", "Javier Zanetti", "Hernán Crespo"]
  },
  {
    "country": "Argentina",
    "question": "ARG-61 | ¿Quién asistió a Maxi Rodríguez en el recordado gol ante México en los octavos de final de Alemania 2006?",
    "answer": "juan román riquelme",
    "options": ["Juan Román Riquelme", "Lionel Messi", "Carlos Tévez"]
  },
  {
    "country": "Argentina",
    "question": "ARG-62 | ¿Quién fue el único jugador argentino que convirtió su penal en la definición ante Alemania en cuartos de final del Mundial 2006?",
    "answer": "esteban cambiasso",
    "options": ["Roberto Ayala", "Esteban Cambiasso", "Julio Cruz"]
  },
  {
    "country": "Argentina",
    "question": "ARG-63 | ¿Qué selección eliminó a Argentina en cuartos de final en dos Mundiales consecutivos (2006 y 2010)?",
    "answer": "alemania",
    "options": ["Italia", "Alemania", "Brasil"]
  },
  {
    "country": "Argentina",
    "question": "ARG-64 | ¿Quién dio la asistencia para el gol de Ángel Di María ante Suiza en los octavos de final del Mundial 2014?",
    "answer": "lionel messi",
    "options": ["Gonzalo Higuaín", "Lionel Messi", "Ezequiel Lavezzi"]
  },
  {
    "country": "Argentina",
    "question": "ARG-65 | ¿Qué jugador argentino convirtió el penal que clasificó a Argentina a la final del Mundial 2014 frente a Países Bajos?",
    "answer": "maxi rodríguez",
    "options": ["Lionel Messi", "Sergio Agüero", "Maxi Rodríguez"]
  },
  {
    "country": "Argentina",
    "question": "ARG-66 | ¿Contra qué selección Lionel Messi disputó su primer partido como titular en una Copa del Mundo?",
    "answer": "países bajos",
    "options": ["Serbia y Montenegro", "Países Bajos", "c) Nigeria"]
  },
  {
    "country": "Argentina",
    "question": "ARG-67 | ¿Quién fue el capitán de Argentina en el partido ante Serbia y Montenegro, donde Argentina ganó 6-0 en 2006?",
    "answer": "juan pablo sorín",
    "options": ["Juan Pablo Sorín", "Roberto Ayala", "Javier Zanetti"]
  },
  {
    "country": "Argentina",
    "question": "ARG-68 | ¿Qué arquero argentino atajó el penal de Wesley Sneijder en la semifinal del Mundial 2014?",
    "answer": "sergio romero",
    "options": ["Sergio Romero", "Mariano Andújar", "Nahuel Guzmán"]
  },
  {
    "country": "Argentina",
    "question": "ARG-69 | ¿Qué jugador argentino provocó el penal cometido por Ousmane Dembélé en la final del Mundial 2022?",
    "answer": "ángel di maría",
    "options": ["Julián Álvarez", "Ángel Di María", "Alexis Mac Allister"]
  },
  {
    "country": "Argentina",
    "question": "ARG-70 | ¿Que marca de camisetas uso la seleccion argentina en el mundial 1986?",
    "answer": "le coq sportif",
    "options": ["Le Coq Sportif", "Adidas", "Topper"]
  },
  {
    "country": "Argentina",
    "question": "ARG-71 | ¿A Cuantos jugadores ingleses gambeteo Diego Armando Maradona antes de convertir el gol historico?",
    "answer": "cinco",
    "options": ["Cuatro", "Cinco", "Tres"]
  },
  {
    "country": "Argentina",
    "question": "ARG-72 | ¿Contra que equipo erro el penal Lionel Andres Messi en el mundial de qatar 2022?",
    "answer": "polonia",
    "options": ["Polonia", "Arabia", "Mexico"]
  },
  {
    "country": "Argentina",
    "question": "ARG-73 | ¿Que jugador de la seleccion Argentina hizo un agujero en la camiseta para poner un dedo debido a la lesion ocurrida en pleno partido en el mundial 1986?",
    "answer": "jose luis brown",
    "options": ["Oscar Ruggeri", "Claudio Caniggia", "Jose Luis Brown"]
  },
  {
    "country": "Argentina",
    "question": "ARG-74 | ¿Cuantos toques dio la seleccion argentina antes de hacer el gol a francia en el mundial 2022?",
    "answer": "cinco",
    "options": ["Cinco", "Siete", "Cuatro"]
  },
  {
    "country": "Argentina",
    "question": "ARG-75 | ¿En que mundial se utilizo la pelota reconocida como Gauchito?",
    "answer": "gauchito",
    "options": ["FulecoGauchito", "Juanito"]
  },
  {
    "country": "Argentina",
    "question": "ARG-76 | ¿Con que pais compartio argentina en el grupo del mundial 2014?",
    "answer": "nigeria, iran y bosnia herzegovina",
    "options": ["Nigeria, Iran y Bosnia Herzegovina", "Nigeria, Iran y Belgica", "Nigeria, Iran y Suiza."]
  },


  // ==========================================
  // Grupo A Linea 472 - 
  // ==========================================

  {
    "country": "Colombia",
    "question": "COL-1 | Cual es la Flor Nacional de Colombia?",
    "answer": "la orquídea",
    "options": ["La Rosa", "La Orquídea", "El clavel"]
  },
  {
    "country": "Colombia",
    "question": "COL-2 | ¿A qué ciudad se le conoce como \"La ciudad de la eterna primavera\"?",
    "answer": "medellin",
    "options": ["Medellin", "Cartagena", "Bogota"]
  },
  {
    "country": "Colombia",
    "question": "COL-3 | Cuales son los dos grandes cuerpos de agua que bañan las costas de Colombia?",
    "answer": "oceano pacifico y atlantico (mar caribe)",
    "options": ["Oceano Pacifico y Atlantico (mar caribe)", "Oceano Atlantico (mar caribe) y Mar Rojo", "Oceano Pacifico y Oceano Indico"]
  },
  {
    "country": "Colombia",
    "question": "COL-4 | Cual es el Arbol nacional de Colombia?",
    "answer": "palma de cera",
    "options": ["El Roble", "El Cedro", "Palma de Cera"]
  },
  {
    "country": "Colombia",
    "question": "COL-5 | Quien es el autor de la Novela \"Cien años de soledad\"?",
    "answer": "gabriel garcia marquez",
    "options": ["Alvaro Mutis", "Gabriel Garcia Marquez", "Mario Vargas Llosa"]
  },
  {
    "country": "Colombia",
    "question": "COL-6 | Como se compone la division politica de Colombia?",
    "answer": "1 distrito capital y 32 departamentos",
    "options": ["1 distrito capital y 42 departamentos", "1 distrito capital y 30 departamentos", "1 distrito capital y 32 departamentos"]
  },
  {
    "country": "Colombia",
    "question": "COL-7 | Cual es el deporte nacional por ley en colombia?",
    "answer": "tejo",
    "options": ["Tejo", "Ciclismo", "Futbol"]
  },
  {
    "country": "Colombia",
    "question": "COL-8 | En que año gano la seleccion de Futbol Masculino de Colombia su primera copa America?",
    "answer": "2001",
    "options": ["1993", "2001", "2014"]
  },
  {
    "country": "Colombia",
    "question": "COL-9 | ¿A qué selección derrotó Colombia con el histórico marcador de 5-0 en las eliminatorias al Mundial de 1994?",
    "answer": "argentina",
    "options": ["Argentina", "Brasil", "Chile"]
  },
  {
    "country": "Colombia",
    "question": "COL-10 | ¿Quién es el jugador con más partidos disputados en la historia de la Copa América representando a Colombia?",
    "answer": "carlos el pibe valderrama",
    "options": ["James Rodriguez", "Carlos el pibe Valderrama", "Radamel Falcao"]
  },
  {
    "country": "Colombia",
    "question": "COL-11 | ¿Quién es actualmente el máximo goleador histórico de la Selección Colombia masculina de mayores?",
    "answer": "radamel falcao",
    "options": ["Luis Díaz", "James Rodriguez", "Radamel Falcao"]
  },
  {
    "country": "Colombia",
    "question": "COL-12 | Con que paises compartio grupo en el mundia 2014 colombia?",
    "answer": "grecia - costa de marfil - japon",
    "options": ["Grecia - Costa de Marfil - Japon", "Grecia - Gana - EEUU", "Holanda - Costa de Marfil - Japon"]
  },
  {
    "country": "Colombia",
    "question": "COL-13 | ¿Qué representa el color amarillo en la bandera de colombia?",
    "answer": "la riqueza del suelo, el sol y la soberania",
    "options": ["Los dos oceanos que bañan sus costas", "La riqueza del suelo, el sol y la soberania", "La paz y la Justicia"]
  },
  {
    "country": "Colombia",
    "question": "COL-14 | En que grupo participo en el mundial de Rusia 2018?",
    "answer": "h",
    "options": ["A", "D", "H"]
  },
  {
    "country": "Colombia",
    "question": "COL-15 | Quien es el actual presindente de Colombia?",
    "answer": "gustavo pedro urrego",
    "options": ["Gustavo Pedro Uribe", "Gustavo Pedro Urrego", "Gustavo Pedro Quinteros"]
  },
  {
    "country": "Colombia",
    "question": "COL-16 | Contra que pais quedo eliminado en el mundial 2018?",
    "answer": "inglaterrra",
    "options": ["Holanda", "Francia", "Inglaterrra"]
  },
  {
    "country": "Colombia",
    "question": "COL-17 | Marca actual de la camiseta de Colombia ?",
    "answer": "adidas",
    "options": ["Puma", "Adidas", "Nike"]
  },
  {
    "country": "Colombia",
    "question": "COL-18 | Cual es el rio mas largo de colombia?",
    "answer": "rio magdalena",
    "options": ["Rio Cauca", "Rio Putumayo", "Rio Magdalena"]
  },
  {
    "country": "Colombia",
    "question": "COL-19 | En que ciudad colombiana nacio el famoso pintor Fernado Botero ?",
    "answer": "medellin",
    "options": ["Medellin", "Cali", "Bogota"]
  },
  {
    "country": "Colombia",
    "question": "COL-20 | Quien fue el primer presidente de la Republica de la Gran Colombia en 1819?",
    "answer": "simón bolivar",
    "options": ["Antonio Nariño", "Simón Bolivar", "Rafael Nuñez"]
  },
  {
    "country": "Colombia",
    "question": "COL-21 | ¿Cuál es el sistema montañoso que atraviesa Colombia y se divide en tres cordilleras al entrar al país?",
    "answer": "codillera de los andes",
    "options": ["Codillera de los Andes", "Cordillera de los Alpes", "Montes de Maria"]
  },
  {
    "country": "Colombia",
    "question": "COL-22 | ¿Cuál es el ave nacional de Colombia, que también aparece en el escudo del país?",
    "answer": "el condor de los andes",
    "options": ["El flamenco", "El aguila Arpía", "El condor de los Andes"]
  },
  {
    "country": "Colombia",
    "question": "COL-23 | ¿Cómo se le llama a la bebida fermentada a base de maíz que era sagrada para los indígenas y aún se consume en el centro del país?",
    "answer": "chicha",
    "options": ["Aguardiente", "Chicha", "Canelazo"]
  },
  {
    "country": "Colombia",
    "question": "COL-24 | ¿Cuál es el instrumento nacional de Colombia?",
    "answer": "triple",
    "options": ["El Ukelele", "El Cuatro", "Triple"]
  },
  {
    "country": "Colombia",
    "question": "COL-25 | ¿Cuál es el actual director técnico de la Selección Colombia?",
    "answer": "nestor lorenzo",
    "options": ["Nestor Lorenzo", "Jose Pekerman", "Reinaldo Rueda"]
  },
  {
    "country": "Colombia",
    "question": "COL-26 | ¿Cuál es la capital de Colombia?",
    "answer": "bogotá",
    "options": ["Cartagena", "Bogotá", "Medellín"]
  },
  {
    "country": "Colombia",
    "question": "COL-27 | ¿En que zona de Colombia crecen las palmeras de cera, las más altas del mundo?",
    "answer": "el valle de cocora",
    "options": ["El Valle de Cocora", "La selva Amazonica", "La sierra nevada de Santa Marta"]
  },
  {
    "country": "Colombia",
    "question": "COL-28 | ¿Qué línea imaginaria pasa por el extremo sur de Colombia?",
    "answer": "línea del ecuador",
    "options": ["Meridiano de Greenwich", "Trópico de Cáncer", "Línea del Ecuador"]
  },
  {
    "country": "Colombia",
    "question": "COL-29 | De cuantos mundiales participo la Seleccion de Colombia?",
    "answer": "6",
    "options": ["5", "6", "4"]
  },
  {
    "country": "Colombia",
    "question": "COL-30 | Cual fue la primer copa del mundo de la que participó la Selección de Colombiana?",
    "answer": "1962",
    "options": ["1962", "1990", "1994"]
  },
  {
    "country": "Colombia",
    "question": "COL-31 | Cuantas copas del mundo gano la Seleccion de Colombia?",
    "answer": "0",
    "options": ["1", "0", "2"]
  },
  {
    "country": "Colombia",
    "question": "COL-32 | Cual es el mejor puesto que logro la Seleccion Colombiana de Futbol Masculino en un mundial?",
    "answer": "5to lugar",
    "options": ["3er Lugar", "7mo Lugar", "5to Lugar"]
  },

  {
    "country": "Colombia",
    "question": "COL-33 | ¿Quién es el máximo goleador de Colombia en la historia de los Mundiales?",
    "answer": "james rodríguez",
    "options": ["Radamel Falcao", "Faustino Asprilla", "James Rodríguez", "Carlos Valderrama"]
  },
  {
    "country": "Colombia",
    "question": "COL-34 | ¿Cuántos goles convirtió James Rodríguez en el Mundial de Brasil 2014?",
    "answer": "6",
    "options": ["5", "6", "7", "8"]
  },
  {
    "country": "Colombia",
    "question": "COL-35 | ¿Qué director técnico llevó a Colombia a los cuartos de final del Mundial 2014, la mejor actuación de su historia?",
    "answer": "josé pékerman",
    "options": ["Francisco Maturana", "José Pékerman", "Hernán Darío Gómez", "Reinaldo Rueda"]
  },
  {
    "country": "Colombia",
    "question": "COL-36 | ¿Contra qué selección anotó James Rodríguez el gol que ganó el Premio Puskás 2014?",
    "answer": "uruguay",
    "options": ["Brasil", "Uruguay", "Costa de Marfil", "Grecia"]
  },
  {
    "country": "Colombia",
    "question": "COL-37 | ¿Quién es el jugador colombiano con más asistencias en Mundiales?",
    "answer": "carlos valderrama",
    "options": ["Freddy Rincón", "Carlos Valderrama", "James Rodríguez", "Juan Cuadrado"]
  },
  {
    "country": "Colombia",
    "question": "COL-38 | ¿Qué jugador colombiano marcó el primer gol de Colombia en la historia de los Mundiales?",
    "answer": "marcos coll",
    "options": ["Carlos Valderrama", "Bernardo Redín", "Marcos Coll", "Arnoldo Iguarán"]
  },
  {
    "country": "Colombia",
    "question": "COL-39 | ¿En qué Mundial Colombia alcanzó por primera vez los cuartos de final?",
    "answer": "brasil 2014",
    "options": ["Italia 1990", "Francia 1998", "Brasil 2014", "Rusia 2018"]
  },
  {
    "country": "Colombia",
    "question": "COL-40 | ¿Qué selección eliminó a Colombia en los cuartos de final de Brasil 2014?",
    "answer": "brasil",
    "options": ["Alemania", "Países Bajos", "Argentina", "Brasil"]
  },
  {
    "country": "Colombia",
    "question": "COL-41 | ¿Quién fue el capitán de Colombia durante gran parte del Mundial de Italia 1990?",
    "answer": "carlos valderrama",
    "options": ["René Higuita", "Leonel Álvarez", "Carlos Valderrama", "Freddy Rincón"]
  },
  {
    "country": "Colombia",
    "question": "COL-42 | ¿Qué arquero colombiano realizó el famoso “escorpión” años después de su participación mundialista?",
    "answer": "rené higuita",
    "options": ["David Ospina", "Miguel Calero", "René Higuita", "Faryd Mondragón"]
  },
  {
    "country": "Colombia",
    "question": "COL-43 | ¿Qué futbolista colombiano se convirtió en el jugador más veterano en disputar un Mundial al ingresar ante Japón en 2014?",
    "answer": "faryd mondragón",
    "options": ["René Higuita", "Mario Yepes", "Faryd Mondragón", "Óscar Córdoba"]
  },
  {
    "country": "Colombia",
    "question": "COL-44 | ¿Quién dio la asistencia para el histórico gol de Freddy Rincón ante Alemania en Italia 1990?",
    "answer": "carlos valderrama",
    "options": ["Leonel Álvarez", "Carlos Valderrama", "Bernardo Redín", "Antony de Ávila"]
  },
  {
    "country": "Colombia",
    "question": "COL-45 | ¿Cuántas veces participó Colombia en Mundiales masculinos hasta 2022?",
    "answer": "6",
    "options": ["5", "6", "7", "8"]
  },
  {
    "country": "Colombia",
    "question": "COL-46 | ¿Qué jugador colombiano fue Botín de Oro del Mundial 2014?",
    "answer": "james rodríguez",
    "options": ["Teófilo Gutiérrez", "Juan Cuadrado", "James Rodríguez", "Jackson Martínez"]
  },
  {
    "country": "Colombia",
    "question": "COL-47 | ¿Cuál fue el mejor resultado de Colombia en una fase de grupos mundialista?",
    "answer": "ganar los tres partidos en 2014",
    "options": ["Ganar los tres partidos en 2014", "Ganar dos partidos en 1990", "Empatar los tres partidos en 1998", "Ganar dos partidos en 2018"]
  },
  {
    "country": "Colombia",
    "question": "COL-48 | ¿Quién fue el máximo asistidor de Colombia en el Mundial 2014?",
    "answer": "juan cuadrado",
    "options": ["James Rodríguez", "Juan Cuadrado", "Pablo Armero", "Teófilo Gutiérrez"]
  },
  {
    "country": "Colombia",
    "question": "COL-49 | ¿Qué selección derrotó a Colombia por penales en octavos de final de Rusia 2018?",
    "answer": "inglaterra",
    "options": ["Inglaterra", "Suecia", "Bélgica", "Croacia"]
  },
  {
    "country": "Colombia",
    "question": "COL-50 | ¿Qué jugador anotó el empate agónico ante Inglaterra en el minuto 93 de Rusia 2018?",
    "answer": "yerry mina",
    "options": ["James Rodríguez", "Radamel Falcao", "Yerry Mina", "Juan Cuadrado"]
  },
  {
    "country": "Colombia",
    "question": "COL-51 | ¿Quién fue el entrenador de Colombia en el Mundial de Rusia 2018?",
    "answer": "josé pékerman",
    "options": ["José Pékerman", "Reinaldo Rueda", "Néstor Lorenzo", "Hernán Darío Gómez"]
  },
  {
    "country": "Colombia",
    "question": "COL-52 | ¿Qué colombiano fue elegido en el equipo ideal del Mundial 2014?",
    "answer": "james rodríguez",
    "options": ["Mario Yepes", "David Ospina", "James Rodríguez", "Carlos Sánchez"]
  },

  //============================
  // Japon
  //============================

  {
    "country": "Japón",
    "question": "JAP-1 | Que representa el circulo central en la bandera de Japon?",
    "answer": "el sol naciente",
    "options": ["La luna llena", "El sol naciente", "La tierra fértil"]
  },
  {
    "country": "Japón",
    "question": "JAP-2 | Cual es la montaña mas alta y emblematica de Japon?",
    "answer": "monte fuji",
    "options": ["Monte Takào", "Monte aso", "Monte Fuji"]
  },
  {
    "country": "Japón",
    "question": "JAP-3 | Como se llamaba los guerreros de la antigua noblesa militar de Japon ?",
    "answer": "samurài",
    "options": ["Samurài", "Ninja", "Ronin"]
  },
  {
    "country": "Japón",
    "question": "JAP-4 | Cual es la moneda oficial de Japon?",
    "answer": "yen",
    "options": ["Won", "Yuan", "Yen"]
  },
  {
    "country": "Japón",
    "question": "JAP-5 | El arte Japones de doblar papel para formar figuras se conoce como ?",
    "answer": "origami",
    "options": ["Bonsai", "Origami", "Haiku"]
  },
  {
    "country": "Japón",
    "question": "JAP-6 | Cual es la capital de Japon ?",
    "answer": "tokio",
    "options": ["Tokio", "Osaka", "Kioto"]
  },
  {
    "country": "Japón",
    "question": "JAP-7 | Cual es la flor nacional oficial y emblema de la flia Imperial de Japon?",
    "answer": "crisantemo (kiku)",
    "options": ["Cerezo", "Crisantemo (Kiku)", "Rosa"]
  },
  {
    "country": "Japón",
    "question": "JAP-8 | En que grupo participo en el mundial 2014?",
    "answer": "c",
    "options": ["A", "F", "C"]
  },
  {
    "country": "Japón",
    "question": "JAP-9 | Contra que pais quedo eliminado en el mundial 2022?",
    "answer": "croacia",
    "options": ["Croacia", "Holanda", "Francia"]
  },
  {
    "country": "Japón",
    "question": "JAP-10 | Contra que pais disputara su primer partido en el mundial 2026?",
    "answer": "paises bajos (holanda)",
    "options": ["Tunez", "Suecia", "Paises Bajos (Holanda)"]
  },
  {
    "country": "Japón",
    "question": "JAP-11 | Quien es el entrenador actual de Japon ?",
    "answer": "hajime moriyasu",
    "options": ["Hajime Moriyasu", "Renn Moriyasu", "Masao Moriyasu"]
  },
  {
    "country": "Japón",
    "question": "JAP-12 | Cual es la marca de la camiseta de Japon ?",
    "answer": "adidas",
    "options": ["Puma", "Nike", "Adidas"]
  },
  {
    "country": "Japón",
    "question": "JAP-13 | Con que paises compartio el grupo E en el mundial  2010?",
    "answer": "dinamarca, holanda y camerun",
    "options": ["holanda, suecia, camerun", "Dinamarca, Holanda y Camerun", "Uruguay, Nigeria, Dinamarca"]
  },
  {
    "country": "Japón",
    "question": "JAP-14 | Cuantas copas del Mundo gano la seleccion de Japon?",
    "answer": "0",
    "options": ["0", "1", "2"]
  },
  {
    "country": "Japón",
    "question": "JAP-15 | Cual fue la instancia mas importante que logro Japon en una Copa del Mundo?",
    "answer": "8vos de final",
    "options": ["4tos de Final", "8vos de Final", "Semifinal"]
  },
  {
    "country": "Japón",
    "question": "JAP-16 | De cuantas copas del mundo participo la Selección de Japon?",
    "answer": "8",
    "options": ["8", "7", "6"]
  },
  {
    "country": "Japón",
    "question": "JAP-17 | En que año clasifico por primera vez la Selección de Japon a una Copa del Mundo?",
    "answer": "1998",
    "options": ["1970", "1994", "1998"]
  },
  {
    "country": "Japón",
    "question": "JAP-18 | Quien es el Capitan de la Seleccion de Japon?",
    "answer": "wataro endo",
    "options": ["Wataro Endo", "Takumi Minamino", "Maya Yoshida"]
  },
  {
    "country": "Japón",
    "question": "JAP-19 | ¿Contra qué equipo perdió Japón en los octavos de final de la Copa Mundial 2002?",
    "answer": "turquia",
    "options": ["Mexico", "Turquia", "EEUU"]
  },
  {
    "country": "Japón",
    "question": "JAP-20 | ¿Cuántas islas principales forman aproximadamente el territorio japonés?",
    "answer": "4",
    "options": ["3", "4", "5"]
  },
  {
    "country": "Japón",
    "question": "JAP-21 | ¿Qué acción se considera de mala educación en público en Japón?",
    "answer": "sonarse la nariz",
    "options": ["Sonarse la Nariz", "Usar Lentes de Sol", "Leer el periodico"]
  },
  {
    "country": "Japón",
    "question": "JAP-22 | ¿Cómo se llama el tren bala japonés?",
    "answer": "shinkansen",
    "options": ["Maglev", "Shinkansen", "Yamato"]
  },
  {
    "country": "Japón",
    "question": "JAP-23 | ¿Qué ciudad japonesa fue destruida por una bomba atómica en 1945 junto con Nagasaki?",
    "answer": "hiroshima",
    "options": ["Hiroshima", "Osaka", "Kyoto"]
  },
  {
    "country": "Japón",
    "question": "JAP-24 | ¿Cuál es el deporte nacional tradicional de Japón?",
    "answer": "sumo",
    "options": ["Karate", "Judo", "Sumo"]
  },
  {
    "country": "Japón",
    "question": "JAP-25 | ¿Qué océano baña las costas de Japón?",
    "answer": "pacífico",
    "options": ["Índico", "Pacífico", "Atlántico"]
  },
  {
    "country": "Japón",
    "question": "JAP-26 | ¿Cuál es el famoso pez venenoso considerado un manjar en Japón?",
    "answer": "fugu",
    "options": ["Atún rojo", "Fugu", "Pez espada"]
  },
  {
    "country": "Japón",
    "question": "JAP-27 | ¿Cómo se llama el sistema de escritura japonés utilizado para palabras extranjeras?",
    "answer": "katakana",
    "options": ["Hiragana", "Kanji", "Katakana"]
  },
  {
    "country": "Japón",
    "question": "JAP-28 | ¿Qué selección derrotó Japón en el Mundial 2022 causando una gran sorpresa?",
    "answer": "alemania",
    "options": ["Francia", "Alemania", "Brasil"]
  },
  {
    "country": "Japón",
    "question": "JAP-29 | ¿Qué jugador japonés es considerado uno de los más importantes de la historia reciente y jugó en el AC Milan?",
    "answer": "keisuke honda",
    "options": ["Shinji Okazaki", "Keisuke Honda", "Hidetoshi Nakata"]
  },
  {
    "country": "Japón",
    "question": "JAP-30 | ¿Cuál es el nombre del emperador actual de Japón?",
    "answer": "naruhito",
    "options": ["Naruhito", "Akihito", "Hirohito"]
  },
  {
    "country": "Japón",
    "question": "JAP-31 | ¿Qué ciudad japonesa es famosa por sus miles de templos y tradición histórica?",
    "answer": "kyoto",
    "options": ["Sapporo", "Kyoto", "Kobe"]
  },
  {
    "country": "Japón",
    "question": "JAP-32 | ¿Qué empresa japonesa desarrolló el videojuego Mario Bros?",
    "answer": "nintendo",
    "options": ["Sega", "Nintendo", "Sony", "Bandai Namco"]
  },
  {
    "country": "Japón",
    "question": "JAP-33 | ¿Cuál es la empresa japonesa creadora de la consola PlayStation?",
    "answer": "sony",
    "options": ["Panasonic", "Sony", "Toshiba"]
  },
  {
    "country": "Japón",
    "question": "JAP-34 | ¿Qué país organizó junto con Japón el Mundial de fútbol 2002?",
    "answer": "corea del sur",
    "options": ["China", "Corea del Sur", "Australia"]
  },
  {
    "country": "Japón",
    "question": "JAP-35 | ¿Cómo se llama el bosque japonés conocido por el florecimiento de los cerezos?",
    "answer": "sakura forest",
    "options": ["Sakura Forest", "Kamakura", "Fuji Garden"]
  },
  {
    "country": "Japón",
    "question": "JAP-36 | ¿Quién es el máximo goleador de Japón en la historia de los Mundiales de fútbol?",
    "answer": "keisuke honda",
    "options": ["Shinji Okazaki", "Keisuke Honda", "Hidetoshi Nakata", "Takumi Minamino"]
  },
  {
    "country": "Japón",
    "question": "JAP-37 | ¿Cuántos goles marcó Keisuke Honda en Copas del Mundo?",
    "answer": "4",
    "options": ["3", "4", "5", "6"]
  },
  {
    "country": "Japón",
    "question": "JAP-38 | ¿Quién es el director técnico que llevó a Japón a los octavos de final en el Mundial de Qatar 2022 tras vencer a Alemania y España?",
    "answer": "hajime moriyasu",
    "options": ["Takeshi Okada", "Akira Nishino", "Hajime Moriyasu", "Zico"]
  },
  {
    "country": "Japón",
    "question": "JAP-39 | ¿Qué jugador japonés participó directamente en 7 de los últimos 9 goles de Japón en Mundiales, sumando goles y asistencias?",
    "answer": "keisuke honda",
    "options": ["Shinji Kagawa", "Keisuke Honda", "Yuya Osako", "Junichi Inamoto"]
  },
  {
    "country": "Japón",
    "question": "JAP-40 | ¿Cuántas asistencias registró Keisuke Honda en los Mundiales según las estadísticas destacadas por FIFA y la prensa internacional?",
    "answer": "3",
    "options": ["1", "2", "3", "4"]
  },
  {
    "country": "Japón",
    "question": "JAP-41 | ¿Qué futbolista japonés se convirtió en el primero de su país en marcar goles en tres Mundiales consecutivos?",
    "answer": "keisuke honda",
    "options": ["Shinji Okazaki", "Hidetoshi Nakata", "Keisuke Honda", "Shinji Kagawa"]
  },

  //-----------------------------
  // Inglaterra
  //-----------------------------

  {
    "country": "Inglaterra",
    "question": "ING-1 | ¿Qué selección eliminó a Inglaterra en cuartos del Mundial 1986?",
    "answer": "argentina",
    "options": ["Brasil", "Argentina", "Francia"]
  },
  {
    "country": "Inglaterra",
    "question": "ING-2 | ¿Quién era el capitán inglés en el Mundial 2006?",
    "answer": "david beckham",
    "options": ["David Beckham", "Steven Gerrard", "Frank Lampard"]
  },
  {
    "country": "Inglaterra",
    "question": "ING-3 | ¿Qué jugador inglés fue expulsado ante Portugal en el Mundial 2006?",
    "answer": "wayne rooney",
    "options": ["Wayne Rooney", "Beckham", "Owen"]
  },
  {
    "country": "Inglaterra",
    "question": "ING-4 | ¿Contra qué país quedó eliminado Inglaterra en semifinales del Mundial 2018?",
    "answer": "croacia",
    "options": ["Francia", "Croacia", "Bélgica"]
  },
  {
    "country": "Inglaterra",
    "question": "ING-5 | ¿Cuál fue la mejor actuación de Inglaterra en mundiales después del mundial de 1966?",
    "answer": "semifinalista",
    "options": ["Campeón", "Finalista", "Semifinalista"]
  },
  {
    "country": "Inglaterra",
    "question": "ING-6 | ¿Quién es el máximo goleador histórico de Inglaterra?",
    "answer": "harry kane",
    "options": ["Wayne Rooney", "Harry Kane", "Gary Lineker"]
  },
  {
    "country": "Inglaterra",
    "question": "ING-7 | ¿Qué entrenador dirigió a Inglaterra en el Mundial 2022?",
    "answer": "gareth southgate",
    "options": ["Gareth Southgate", "Fabio Capello", "Sven-Göran Eriksson"]
  },
  {
    "country": "Inglaterra",
    "question": "ING-8 | ¿Contra qué selección quedó eliminada Inglaterra en el Mundial 2022?",
    "answer": "francia",
    "options": ["Marruecos", "Francia", "Portugal"]
  },
  {
    "country": "Inglaterra",
    "question": "ING-9 | ¿Qué famoso grupo musical nació en Liverpool?",
    "answer": "the beatles",
    "options": ["Queen", "The Beatles", "ABBA"]
  },
  {
    "country": "Inglaterra",
    "question": "ING-10 | ¿Cómo se llama la residencia oficial de la monarquía británica en Londres?",
    "answer": "buckingham palace",
    "options": ["Windsor Castle", "Buckingham Palace", "Westminster"]
  },
  {
    "country": "Inglaterra",
    "question": "ING-11 | ¿Qué universidad inglesa es una de las más antiguas y prestigiosas del mundo?",
    "answer": "oxford",
    "options": ["Harvard", "Oxford", "Salamanca"]
  },
  {
    "country": "Inglaterra",
    "question": "ING-12 | ¿Cuál es el deporte creado en Inglaterra que luego se convirtió en el fútbol moderno?",
    "answer": "football association",
    "options": ["Rugby", "Cricket", "Football Association"]
  },
  {
    "country": "Inglaterra",
    "question": "ING-13 | ¿Qué famoso naturalista inglés desarrolló la teoría de la evolución?",
    "answer": "darwin",
    "options": ["Darwin", "Pasteur", "Tesla"]
  },
  {
    "country": "Inglaterra",
    "question": "ING-14 | ¿Cuál es el punto más alto de Inglaterra?",
    "answer": "scafell pike",
    "options": ["Ben Nevis", "Scafell Pike", "Snowdon"]
  },
  {
    "country": "Inglaterra",
    "question": "ING-15 | ¿Cuál es la tercer ciudad mas poblada de Inglaterra?",
    "answer": "Manchester",
    "options": ["Manchester", "Liverpool", "Birmingham"]
  },
  {
    "country": "Inglaterra",
    "question": "ING-16 | ¿Qué número utilizaba David Beckham en gran parte de su carrera con Inglaterra?",
    "answer": "7",
    "options": ["7", "10", "23"]
  },
  {
    "country": "Inglaterra",
    "question": "ING-17 | ¿Qué famoso físico inglés formuló las leyes del movimiento?",
    "answer": "isaac newton",
    "options": ["Isaac Newton", "Stephen Hawking", "Faraday"]
  },
  {
    "country": "Inglaterra",
    "question": "ING-18 | ¿Cuál es el nombre del himno no oficial más tradicional del fútbol inglés?",
    "answer": "three lions",
    "options": ["Rule Britannia", "God Save the King", "Three Lions"]
  },
  {
    "country": "Inglaterra",
    "question": "ING-19 | ¿Qué país comparte frontera terrestre con Inglaterra?",
    "answer": "gales",
    "options": ["Irlanda", "Escocia", "Gales"]
  },
  {
    "country": "Inglaterra",
    "question": "ING-20 | ¿Qué arquero inglés fue expulsado en el Mundial 2010 tras un grave error ante Alemania?",
    "answer": "robert green",
    "options": ["Joe Hart", "David James", "Robert Green"]
  },
  {
    "country": "Inglaterra",
    "question": "ING-21 | ¿Qué inventor inglés perfeccionó la máquina de vapor durante la Revolución Industrial?",
    "answer": "james watt",
    "options": ["James Watt", "Graham Bell", "Edison"]
  },
  {
    "country": "Inglaterra",
    "question": "ING-22 | ¿Cuál es el ave símbolo del club inglés Liverpool FC?",
    "answer": "cormorán (liver bird)",
    "options": ["Halcón", "Cormorán (Liver Bird)", "Águila"]
  },
  {
    "country": "Inglaterra",
    "question": "ING-23 | ¿Cuál es la flor nacional de Inglaterra?",
    "answer": "rosa tudor",
    "options": ["Rosa Mosqueta", "Rosa Divina", "Rosa Tudor"]
  },
  {
    "country": "Inglaterra",
    "question": "ING-24 | ¿Qué famoso torneo de tenis se juega en Inglaterra?",
    "answer": "wimbledon",
    "options": ["Roland Garros", "Wimbledon", "US Open"]
  },
  {
    "country": "Inglaterra",
    "question": "ING-25 | ¿En qué mundial Inglaterra goleó por 6-1 a Panamá?",
    "answer": "2018",
    "options": ["2022", "2018", "2010"]
  },
  {
    "country": "Inglaterra",
    "question": "ING-26 | ¿Qué científico inglés es reconocido por descubrir la penicilina?",
    "answer": "fleming",
    "options": ["Fleming", "Darwin", "Newton"]
  },
  {
    "country": "Inglaterra",
    "question": "ING-27 | ¿Qué ciudad inglesa es conocida por su importante industria universitaria y tecnológica, junto con Oxford?",
    "answer": "cambridge",
    "options": ["Cambridge", "Bristol", "Leeds"]
  },

  // ==========================================
  // FRANCIA 1210
  // ==========================================

  {
    "country": "Francia",
    "question": "FRA-1 | ¿Cuál es la capital de Francia?",
    "answer": "parís",
    "options": ["Marsella", "Lyon", "París"]
  },
  {
    "country": "Francia",
    "question": "FRA-2 | ¿Qué representan tradicionalmente los tres colores de la bandera de Francia?",
    "answer": "libertad, igualdad y fraternidad",
    "options": ["Libertad, Igualdad y Fraternidad", "Paz, Trabajo y Justicia", "Tierra, Mar y Cielo", "Monarquía, Iglesia y Ejército"]
  },
  {
    "country": "Francia",
    "question": "FRA-3 | ¿En qué año Francia ganó su primer Mundial de fútbol?",
    "answer": "1998",
    "options": ["1994", "1998", "2006"]
  },
  {
    "country": "Francia",
    "question": "FRA-4 | ¿Qué jugador francés fue expulsado en la final del Mundial 2006?",
    "answer": "zinedine zidane",
    "options": ["Thierry Henry", "Didier Deschamps", "Zinedine Zidane"]
  },
  {
    "country": "Francia",
    "question": "FRA-5 | ¿Contra qué selección ganó Francia la final del Mundial 1998?",
    "answer": "brasil",
    "options": ["Brasil", "Italia", "Alemania"]
  },
  {
    "country": "Francia",
    "question": "FRA-6 | ¿Quién fue el entrenador de Francia campeón en 2018?",
    "answer": "didier deschamps",
    "options": ["Didier Deschamps", "Raymond Domenech", "Laurent Blanc"]
  },
  {
    "country": "Francia",
    "question": "FRA-7 | ¿Qué jugador marcó dos goles en la final del Mundial 1998?",
    "answer": "zinedine zidane",
    "options": ["David Trezeguet", "Zinedine Zidane", "Youri Djorkaeff"]
  },
  {
    "country": "Francia",
    "question": "FRA-8 | ¿En qué país se disputó el Mundial que ganó Francia en 2018?",
    "answer": "rusia",
    "options": ["Rusia", "Qatar", "Alemania"]
  },
  {
    "country": "Francia",
    "question": "FRA-9 | ¿Qué arquero francés fue campeón del mundo en 2018?",
    "answer": "hugo lloris",
    "options": ["Hugo Lloris", "Fabien Barthez", "Steve Mandanda"]
  },
  {
    "country": "Francia",
    "question": "FRA-10 | ¿Cuál es el apodo de la selección francesa?",
    "answer": "les bleus",
    "options": ["La Roja", "Les Bleus", "Gli Azzurri"]
  },
  {
    "country": "Francia",
    "question": "FRA-11 | ¿Qué jugador francés ganó el Balón de Oro en 1998?",
    "answer": "zinedine zidane",
    "options": ["Thierry Henry", "Zinedine Zidane", "Patrick Vieira"]
  },
  {
    "country": "Francia",
    "question": "FRA-12 | ¿En qué Mundial Francia fue anfitriona y campeona?",
    "answer": "1998",
    "options": ["1998", "1986", "2018"]
  },
  {
    "country": "Francia",
    "question": "FRA-13 | ¿Qué selección eliminó a Francia en el Mundial 2014?",
    "answer": "alemania",
    "options": ["Alemania", "Argentina", "Brasil"]
  },
  {
    "country": "Francia",
    "question": "FRA-14 | ¿Quién anotó el gol de oro para Francia en la final de la Euro 2000?",
    "answer": "david trezeguet",
    "options": ["David Trezeguet", "Thierry Henry", "Zinedine Zidane"]
  },
  {
    "country": "Francia",
    "question": "FRA-15 | ¿Qué jugador joven destacó con Francia en el Mundial 2018?",
    "answer": "kylian mbappé",
    "options": ["Kylian Mbappé", "Karim Benzema", "Antoine Griezmann"]
  },
  {
    "country": "Francia",
    "question": "FRA-16 | ¿Cuántos Mundiales ha ganado Francia hasta 2026?",
    "answer": "2",
    "options": ["1", "2", "3"]
  },
  {
    "country": "Francia",
    "question": "FRA-17 | ¿Qué selección venció a Francia en la final del Mundial 2022?",
    "answer": "argentina",
    "options": ["Croacia", "Argentina", "Brasil"]
  },
  {
    "country": "Francia",
    "question": "FRA-18 | ¿Quién fue capitán de Francia en el Mundial 2018?",
    "answer": "hugo lloris",
    "options": ["Paul Pogba", "Hugo Lloris", "Raphaël Varane"]
  },
  {
    "country": "Francia",
    "question": "FRA-19 | ¿Qué francés ganó la Bota de Oro del Mundial 1958?",
    "answer": "just fontaine",
    "options": ["Michel Platini", "Just Fontaine", "Jean Tigana"]
  },
  {
    "country": "Francia",
    "question": "FRA-20 | ¿Cuántos goles marcó Just Fontaine en el Mundial 1958?",
    "answer": "13",
    "options": ["10", "13", "15"]
  },
  {
    "country": "Francia",
    "question": "FRA-21 | ¿Qué país organizó el Mundial 1998?",
    "answer": "francia",
    "options": ["Italia", "Francia", "EEUU"]
  },
  {
    "country": "Francia",
    "question": "FRA-22 | ¿Quién marcó un hat-trick en la final del Mundial 2022 para Francia?",
    "answer": "kylian mbappé",
    "options": ["Antoine Griezmann", "Kylian Mbappé", "Olivier Giroud"]
  },
  {
    "country": "Francia",
    "question": "FRA-23 | ¿Cuál es la segunda ciudad mas poblada de Francia?",
    "answer": "Marsella",
    "options": ["Marsella", "Lyon", "París"]
  },
  {
    "country": "Francia",
    "question": "FRA-24 | ¿Qué torre famosa se encuentra en París?",
    "answer": "torre eiffel",
    "options": ["Torre de Pisa", "Torre Eiffel", "Big Ben"]
  },
  {
    "country": "Francia",
    "question": "FRA-25 | ¿En qué año comenzó la Revolución Francesa?",
    "answer": "1789",
    "options": ["1789", "1812", "1914"]
  },
  {
    "country": "Francia",
    "question": "FRA-26 | ¿Quién fue el emperador francés derrotado en Waterloo?",
    "answer": "napoleón bonaparte",
    "options": ["Luis XIV", "Napoleón Bonaparte", "Carlos Magno"]
  },
  {
    "country": "Francia",
    "question": "FRA-27 | ¿Qué río atraviesa París?",
    "answer": "sena",
    "options": ["Danubio", "Sena", "Loira"]
  },
  {
    "country": "Francia",
    "question": "FRA-28 | ¿Cuál es el lema de Francia?",
    "answer": "libertad, igualdad y fraternidad",
    "options": ["Orden y Progreso", "Libertad, Igualdad y Fraternidad", "Paz y Honor"]
  },
  {
    "country": "Francia",
    "question": "FRA-29 | ¿Qué museo famoso alberga la Mona Lisa?",
    "answer": "museo del louvre",
    "options": ["Museo del Prado", "Museo Británico", "Museo del Louvre"]
  },
  {
    "country": "Francia",
    "question": "FRA-30 | ¿Qué rey francés era conocido como el Rey Sol?",
    "answer": "luis xiv",
    "options": ["Luis XIV", "Luis XVI", "Enrique IV"]
  },
  {
    "country": "Francia",
    "question": "FRA-31 | ¿Cuál es el segundo idioma mas hablado en Francia?",
    "answer": "arabe",
    "options": ["Arabe", "Italiano", "Ingles"]
  },
  {
    "country": "Francia",
    "question": "FRA-32 | ¿Qué evento histórico ocurrió el 14 de julio de 1789?",
    "answer": "la toma de la bastilla",
    "options": ["La toma de la Bastilla", "La coronación de Napoleón", "La firma del Tratado de Versalles"]
  },
  {
    "country": "Francia",
    "question": "FRA-33 | ¿Qué famoso arco se encuentra en París?",
    "answer": "arco del triunfo",
    "options": ["Arco de Tito", "Arco del Triunfo", "Puerta de Brandeburgo"]
  },
  {
    "country": "Francia",
    "question": "FRA-34 | ¿Qué región francesa es famosa por su vino espumoso?",
    "answer": "champaña",
    "options": ["Normandía", "Champaña", "Bretaña"]
  },
  {
    "country": "Francia",
    "question": "FRA-35 | ¿Quién escribió 'Los Miserables'?",
    "answer": "victor hugo",
    "options": ["Victor Hugo", "Alexandre Dumas", "Voltaire"]
  },
  {
    "country": "Francia",
    "question": "FRA-36 | ¿Qué famosa catedral sufrió un incendio en 2019?",
    "answer": "notre dame",
    "options": ["Sagrada Familia", "Notre Dame", "Basílica del Sacré-Cœur"]
  },
  {
    "country": "Francia",
    "question": "FRA-37 | ¿Cuál es el plato francés hecho con caracoles?",
    "answer": "escargots",
    "options": ["Ratatouille", "Escargots", "Fondue"]
  },
  {
    "country": "Francia",
    "question": "FRA-38 | ¿Qué tratado puso fin a la Primera Guerra Mundial?",
    "answer": "tratado de versalles",
    "options": ["Tratado de Roma", "Tratado de Versalles", "Tratado de París"]
  },
  {
    "country": "Francia",
    "question": "FRA-39 | ¿Qué ciudad francesa es conocida por el Festival de Cine?",
    "answer": "cannes",
    "options": ["Niza", "Cannes", "Burdeos"]
  },
  {
    "country": "Francia",
    "question": "FRA-40 | ¿Qué reina francesa fue ejecutada durante la Revolución Francesa?",
    "answer": "maría antonieta",
    "options": ["Catalina de Médici", "María Antonieta", "Josefina"]
  },
  {
    "country": "Francia",
    "question": "FRA-41 | ¿Qué escritor francés creó 'El Principito'?",
    "answer": "antoine de saint-exupéry",
    "options": ["Jean-Paul Sartre", "Antoine de Saint-Exupéry", "Albert Camus"]
  },
  {
    "country": "Francia",
    "question": "FRA-42 | ¿Cuál es la montaña más alta de Francia y Europa Occidental?",
    "answer": "monte blanco",
    "options": ["Pirineos", "Monte Blanco", "Alpes Julianos"]
  },
  {
    "country": "Francia",
    "question": "FRA-43 | ¿Cómo se llama el primer himno nacional de Francia?",
    "answer": "la marsellesa",
    "options": ["El Elíseo", "La Marsellesa", "La Bonaparte"]
  },

  //===========================
  // Canada
  //===========================
  {
    "country": "Canadá",
    "question": "CAN-1 | ¿Cuál es la capital de Canadá?",
    "answer": "ottawa",
    "options": ["Toronto", "Ottawa", "Vancouver"]
  },
  {
    "country": "Canadá",
    "question": "CAN-2 | ¿Qué hoja aparece en la bandera canadiense?",
    "answer": "hoja de arce",
    "options": ["Hoja de roble", "Hoja de arce", "Hoja de pino"]
  },
  {
    "country": "Canadá",
    "question": "CAN-3 | ¿Cuál es el idioma más hablado en Canadá?",
    "answer": "inglés",
    "options": ["Francés", "Alemán", "Inglés"]
  },
  {
    "country": "Canadá",
    "question": "CAN-4 | ¿Qué deporte es considerado el más tradicional en Canadá?",
    "answer": "hockey sobre hielo",
    "options": ["Béisbol", "Hockey sobre hielo", "Rugby"]
  },
  {
    "country": "Canadá",
    "question": "CAN-5 | ¿Qué océano está al este de Canadá?",
    "answer": "atlántico",
    "options": ["Pacífico", "Índico", "Atlántico"]
  },
  {
    "country": "Canadá",
    "question": "CAN-6 | ¿Cuál es la moneda oficial de Canadá?",
    "answer": "dólar canadiense",
    "options": ["Euro", "Peso canadiense", "Dólar canadiense"]
  },
  {
    "country": "Canadá",
    "question": "CAN-7 | ¿Qué animal aparece en la moneda de 5 centavos canadiense?",
    "answer": "castor",
    "options": ["Oso", "Castor", "Lobo"]
  },
  {
    "country": "Canadá",
    "question": "CAN-8 | ¿Cuál es la ciudad más grande de Canadá?",
    "answer": "toronto",
    "options": ["Montreal", "Toronto", "Calgary"]
  },
  {
    "country": "Canadá",
    "question": "CAN-9 | ¿Qué cataratas famosas comparte Canadá con EEUU?",
    "answer": "niágara",
    "options": ["Iguazú", "Victoria", "Niágara"]
  },
  {
    "country": "Canadá",
    "question": "CAN-10 | ¿Cuál es el segundo idioma oficial de Canadá?",
    "answer": "francés",
    "options": ["Italiano", "Francés", "Portugués"]
  },
  {
    "country": "Canadá",
    "question": "CAN-11 | ¿Qué provincia canadiense es mayoritariamente francófona?",
    "answer": "quebec",
    "options": ["Ontario", "Alberta", "Quebec"]
  },
  {
    "country": "Canadá",
    "question": "CAN-12 | ¿Cuál es la tercera ciudad más poblada de Canadá?",
    "answer": "calgary",
    "options": ["Ottawa", "Calgary", "Edmonton"]
  },
  {
    "country": "Canadá",
    "question": "CAN-13 | ¿Cuál es el animal nacional de Canadá?",
    "answer": "castor",
    "options": ["Águila", "Castor", "Reno"]
  },
  {
    "country": "Canadá",
    "question": "CAN-14 | ¿Qué famoso cantante nació en Canadá?",
    "answer": "justin bieber",
    "options": ["Ed Sheeran", "Justin Bieber", "Bruno Mars"]
  },
  {
    "country": "Canadá",
    "question": "CAN-15 | ¿Qué famoso jarabe produce Canadá en gran cantidad?",
    "answer": "jarabe de arce",
    "options": ["Chocolate", "Frutilla", "Jarabe de arce"]
  },
  {
    "country": "Canadá",
    "question": "CAN-16 | ¿Cuál es la montaña más alta de Canadá?",
    "answer": "monte logan",
    "options": ["Everest", "Aconcagua", "Monte Logan"]
  },
  {
    "country": "Canadá",
    "question": "CAN-17 | ¿Qué selección ganó más medallas olímpicas en hockey sobre hielo?",
    "answer": "canadá",
    "options": ["Brasil", "España", "Canadá"]
  },
  {
    "country": "Canadá",
    "question": "CAN-18 | ¿Qué ciudad canadiense fue sede de los Juegos Olímpicos de Invierno 2010?",
    "answer": "vancouver",
    "options": ["Ottawa", "Vancouver", "Winnipeg"]
  },
  {
    "country": "Canadá",
    "question": "CAN-19 | ¿Con qué país comparte Canadá la frontera más larga del mundo?",
    "answer": "estados unidos",
    "options": ["México", "Rusia", "EEUU"]
  },
  {
    "country": "Canadá",
    "question": "CAN-20 | ¿Qué famoso parque nacional canadiense está en las Montañas Rocosas?",
    "answer": "banff",
    "options": ["Yellowstone", "Yosemite", "Banff"]
  },
  {
    "country": "Canadá",
    "question": "CAN-21 | ¿En qué año participó Canadá por primera vez en un Mundial de fútbol?",
    "answer": "1986",
    "options": ["1986", "1984", "1990"]
  },
  {
    "country": "Canadá",
    "question": "CAN-22 | ¿Cuántas veces ha clasificado Canadá a la Copa Mundial?",
    "answer": "4",
    "options": ["2", "3", "4"]
  },
  {
    "country": "Canadá",
    "question": "CAN-23 | ¿Quién fue el entrenador de Canadá en el Mundial de 1986?",
    "answer": "tony waiters",
    "options": ["Tony Waiters", "Stephen Hart", "John Herdman"]
  },
  {
    "country": "Canadá",
    "question": "CAN-24 | ¿Cuál es la mejor posición que ha alcanzado Canadá en un Mundial masculino?",
    "answer": "fase de grupos",
    "options": ["Cuartos de final", "Octavos de final", "Fase de grupos"]
  },
  {
    "country": "Canadá",
    "question": "CAN-25 | ¿En qué Mundial participó Canadá después de una pausa de más de 30 años?",
    "answer": "2022",
    "options": ["1994", "2022", "2018"]
  },
  {
    "country": "Canadá",
    "question": "CAN-26 | ¿Cuántos goles anotó Canadá en total en el Mundial 1986?",
    "answer": "0",
    "options": ["2", "0", "1"]
  },
  {
    "country": "Canadá",
    "question": "CAN-27 | ¿Quién fue el capitán de Canadá en su primer Mundial?",
    "answer": "bruce wilson",
    "options": ["Paul James", "Bruce Wilson", "Dale Mitchell"]
  },
  {
    "country": "Canadá",
    "question": "CAN-28 | ¿En qué continente se jugó la primera participación de Canadá en un Mundial?",
    "answer": "américa del norte",
    "options": ["Europa", "América del Norte", "Asia"]
  },
  {
    "country": "Canadá",
    "question": "CAN-29 | ¿Cuál fue el resultado del primer partido de Canadá en un Mundial?",
    "answer": "0-1",
    "options": ["1-1", "0-0", "0-1"]
  },
  {
    "country": "Canadá",
    "question": "CAN-30 | ¿Quién es el segundo máximo goleador histórico de la selección de fútbol masculino de Canadá?",
    "answer": "cyle larin",
    "options": ["Cyle Larin", "Jonathan David", "Lucas Cavallini"]
  },
  {
    "country": "Canadá",
    "question": "CAN-31 | ¿Como salio el primer partido de Canadá en Qatar 2022?",
    "answer": "1 a 0 perdio",
    "options": ["1 a 0 perdio", "0 a 0 ampato", "1 a 0 gano"]
  },
  {
    "country": "Canadá",
    "question": "CAN-32 | ¿Cuántos goles de penal anotó Jonathan David el máximo goleador histórico de la selección masculina de Canadá?",
    "answer": "8",
    "options": ["3", "6", "8"]
  },
  {
    "country": "Canadá",
    "question": "CAN-33 | ¿Contra qué país jugó Canadá su último partido en el Mundial 1986?",
    "answer": "unión soviética",
    "options": ["Uruguay", "Francia", "Unión Soviética"]
  },
  {
    "country": "Canadá",
    "question": "CAN-34 | ¿Contra qué selección obtuvo Canadá su primer punto en la historia de los Mundiales?",
    "answer": "marruecos",
    "options": ["Bélgica", "Croacia", "Marruecos"]
  },
  {
    "country": "Canadá",
    "question": "CAN-35 | ¿Cuántas veces ha Canadá enfrentado a México en Copas Mundiales masculinas?",
    "answer": "0",
    "options": ["1", "0", "2"]
  },
  {
    "country": "Canadá",
    "question": "CAN-36 | ¿Cuantos goles marco Canada en el mundial Qatar 2022?",
    "answer": "2",
    "options": ["1", "2", "3"]
  },
  {
    "country": "Canadá",
    "question": "CAN-37 | ¿Cuál fue el marcador del partido entre Canadá y Francia en 1986?",
    "answer": "0-1",
    "options": ["0-1", "1-1", "1-2"]
  },
  {
    "country": "Canadá",
    "question": "CAN-38 | ¿Quién fue el portero titular de Canadá en el Mundial de 1986?",
    "answer": "paul dolan",
    "options": ["Paul Dolan", "Terry Dunfield", "Craig Forrest"]
  },
  {
    "country": "Canadá",
    "question": "CAN-39 | ¿Quién fue el entrenador de Canadá en Qatar 2022?",
    "answer": "John Herdman",
    "options": ["John Herdman", "Mauro Biello", "George O'Connor"]
  },
  {
    "country": "Canadá",
    "question": "CAN-40 | ¿Cuál fue el resultado general de Canadá en la fase de grupos del Mundial 1986?",
    "answer": "tres derrotas",
    "options": ["Un empate y dos derrotas", "Tres derrotas", "Dos derrotas y un empate"]
  },

  //==========================
  // Uruguay
  //==========================

  {
    "country": "Uruguay",
    "question": "URU-1 | ¿En qué año se disputó el primer Mundial organizado y ganado por Uruguay?",
    "answer": "1930",
    "options": ["1924", "1930", "1934"]
  },
  {
    "country": "Uruguay",
    "question": "URU-2 | ¿Quién fue el capitán de Uruguay en la final de 1930 contra Argentina?",
    "answer": "josé nasazzi",
    "options": ["José Nasazzi", "Héctor Scarone", "José Leandro Andrade"]
  },
  {
    "country": "Uruguay",
    "question": "URU-3 | ¿Cuál fue el resultado final de la final de 1930 entre Uruguay y Argentina?",
    "answer": "4-2",
    "options": ["2-1", "3-2", "4-2"]
  },
  {
    "country": "Uruguay",
    "question": "URU-4 | ¿Cómo se conoce popularmente al último partido de Brasil 1950?",
    "answer": "el maracanazo",
    "options": ["El Centenariazo", "El Maracanazo", "La Hazaña de Río"]
  },
  {
    "country": "Uruguay",
    "question": "URU-5 | ¿Quién anotó el gol de la victoria definitiva (2-1) contra Brasil en 1950?",
    "answer": "alcides ghiggia",
    "options": ["Juan Alberto Schiaffino", "Alcides Ghiggia", "Obdulio Varela"]
  },
  {
    "country": "Uruguay",
    "question": "URU-6 | ¿Quién era el capitán y líder espiritual de la selección en 1950?",
    "answer": "obdulio varela",
    "options": ["Obdulio Varela", "Roque Máspoli", "Schubert Gambetta"]
  },
  {
    "country": "Uruguay",
    "question": "URU-7 | ¿A qué selección goleó Uruguay 8-0 en el Mundial de 1950?",
    "answer": "bolivia",
    "options": ["Bolivia", "Escocia", "Chile"]
  },
  {
    "country": "Uruguay",
    "question": "URU-8 | ¿En qué puesto quedó Uruguay en el Mundial de Suiza 1954?",
    "answer": "cuarto",
    "options": ["Tercero", "Cuarto", "Segundo"]
  },
  {
    "country": "Uruguay",
    "question": "URU-9 | ¿Contra qué selección jugó el famoso partido de cuartos en Sudáfrica 2010?",
    "answer": "ghana",
    "options": ["Corea del Sur", "Ghana", "Países Bajos"]
  },
  {
    "country": "Uruguay",
    "question": "URU-10 | ¿Quién fue elegido como el Mejor Jugador (Balón de Oro) de Sudáfrica 2010?",
    "answer": "diego forlán",
    "options": ["Luis Suárez", "Edinson Cavani", "Diego Forlán"]
  },
  {
    "country": "Uruguay",
    "question": "URU-11 | ¿Quién fue el DT de Uruguay en 1990, 2010, 2014 y 2018?",
    "answer": "óscar washington tabárez",
    "options": ["Óscar Washington Tabárez", "Jorge Fossati", "Víctor Púa"]
  },
  {
    "country": "Uruguay",
    "question": "URU-12 | ¿Cuántos goles anotó Diego Forlán en el Mundial de Sudáfrica 2010?",
    "answer": "5",
    "options": ["4", "5", "6"]
  },
  {
    "country": "Uruguay",
    "question": "URU-13 | ¿Quién recibió la tarjeta roja más rápida de los mundiales (56 seg) en 1986?",
    "answer": "josé batista",
    "options": ["José Batista", "Enzo Francescoli", "Nelson Gutiérrez"]
  },
  {
    "country": "Uruguay",
    "question": "URU-14 | ¿Cuál es el máximo goleador histórico de Uruguay en Mundiales (8 goles)?",
    "answer": "oscar míguez",
    "options": ["Luis Suárez", "Oscar Míguez", "Diego Forlán"]
  },
  {
    "country": "Uruguay",
    "question": "URU-15 | ¿En qué Mundial Uruguay volvió a semis después de 40 años?",
    "answer": "sudáfrica 2010",
    "options": ["Alemania 2006", "Sudáfrica 2010", "Brasil 2014"]
  },
  {
    "country": "Uruguay",
    "question": "URU-16 | ¿Quién hizo los dos goles en la victoria 2-1 ante Inglaterra en 2014?",
    "answer": "luis suárez",
    "options": ["Diego Godín", "Luis Suárez", "Edinson Cavani"]
  },
  {
    "country": "Uruguay",
    "question": "URU-17 | ¿En qué puesto terminó Uruguay en el Mundial de México 1970?",
    "answer": "cuarto",
    "options": ["Segundo", "Tercero", "Cuarto"]
  },
  {
    "country": "Uruguay",
    "question": "URU-18 | ¿Quién era la figura de Uruguay en los Mundiales de 1986 y 1990?",
    "answer": "enzo francescoli",
    "options": ["Rubén Sosa", "Enzo Francescoli", "Carlos Aguilera"]
  },
  {
    "country": "Uruguay",
    "question": "URU-19 | ¿Contra qué país debutó Uruguay ganando 1-0 en Rusia 2018?",
    "answer": "egipto",
    "options": ["Egipto", "Arabia", "Rusia"]
  },
  {
    "country": "Uruguay",
    "question": "URU-20 | ¿Cuántas estrellas tiene el escudo de la AUF por títulos mundiales?",
    "answer": "4",
    "options": ["2", "3", "4"]
  },
  {
    "country": "Uruguay",
    "question": "URU-21 | ¿Cuál es el punto más alto de Uruguay?",
    "answer": "cerro catedral",
    "options": ["Cerro del Verdún", "Cerro Catedral", "Cerro de las Ánimas"]
  },
  {
    "country": "Uruguay",
    "question": "URU-22 | ¿Quién es considerado el \"Prócer de la Patria\" en Uruguay?",
    "answer": "josé gervasio artigas",
    "options": ["José Gervasio Artigas", "Juan Antonio Lavalleja", "Manuel Oribe"]
  },
  {
    "country": "Uruguay",
    "question": "URU-23 | ¿En qué departamento se encuentran las Grutas del Palacio?",
    "answer": "flores",
    "options": ["Durazno", "Flores", "San José"]
  },
  {
    "country": "Uruguay",
    "question": "URU-24 | ¿Cuál es la flor nacional de Uruguay?",
    "answer": "ceibo",
    "options": ["Margarita", "Ceibo", "Clavel"]
  },
  {
    "country": "Uruguay",
    "question": "URU-25 | ¿Quién es el autor de la famosa obra \"La cumparsita\"?",
    "answer": "gerardo matos rodríguez",
    "options": ["Gerardo Matos Rodríguez", "Carlos Gardel", "Julio Sosa"]
  },
  {
    "country": "Uruguay",
    "question": "URU-26 | ¿En qué año se juró la primera Constitución de Uruguay?",
    "answer": "1830",
    "options": ["1825", "1830", "1811"]
  },
  {
    "country": "Uruguay",
    "question": "URU-27 | ¿Cuál es el departamento más pequeño de Uruguay en superficie?",
    "answer": "montevideo",
    "options": ["Montevideo", "Canelones", "Maldonado"]
  },
  {
    "country": "Uruguay",
    "question": "URU-28 | ¿Qué ave es considerada el Ave Nacional de Uruguay?",
    "answer": "tero",
    "options": ["Hornero", "Tero", "Cardenal"]
  },
  {
    "country": "Uruguay",
    "question": "URU-29 | ¿Cómo se llama el río que cruza Uruguay de este a oeste y divide al país en dos?",
    "answer": "río negro",
    "options": ["Río Santa Lucía", "Río Negro", "Río Yi"]
  },
  {
    "country": "Uruguay",
    "question": "URU-30 | ¿Quién fue el primer presidente de la República Oriental del Uruguay?",
    "answer": "fructuoso rivera",
    "options": ["Fructuoso Rivera", "Manuel Oribe", "Joaquín Suárez"]
  },
  {
    "country": "Uruguay",
    "question": "URU-31 | ¿Cuál es el puerto más profundo de Uruguay?",
    "answer": "puerto de montevideo",
    "options": ["Puerto de Montevideo", "Puerto de La Paloma", "Puerto de Fray Bentos"]
  },
  {
    "country": "Uruguay",
    "question": "URU-32 | ¿Qué religioso y naturalista fundó la Biblioteca Nacional de Uruguay?",
    "answer": "dámaso antonio larrañaga",
    "options": ["Dámaso Antonio Larrañaga", "Jacinto Vera", "José Pedro Varela"]
  },
  {
    "country": "Uruguay",
    "question": "URU-33 | ¿En qué departamento se encuentra el Cerro Arequita?",
    "answer": "lavalleja",
    "options": ["Maldonado", "Rocha", "Lavalleja"]
  },
  {
    "country": "Uruguay",
    "question": "URU-34 | ¿Quién fue el impulsor de la reforma escolar en Uruguay en el siglo XIX?",
    "answer": "josé pedro varela",
    "options": ["Domingo Faustino Sarmiento", "José Pedro Varela", "José Enrique Rodó"]
  },
  {
    "country": "Uruguay",
    "question": "URU-35 | ¿Cuál es el departamento uruguayo famoso por sus piedras semipreciosas (Amatistas)?",
    "answer": "artigas",
    "options": ["Artigas", "Rivera", "Tacuarembó"]
  },

  // ==========================================
  // BRASIL
  // ==========================================
  {
    country: "Brasil",
    question: "BRA-01 | ¿En qué año Brasil ganó su primer Mundial?",
    answer: "1958",
    options: ["1950", "1958", "1962"],
  },
  {
    country: "Brasil",
    question: "BRA-02 | ¿Quién fue el máximo goleador de Brasil en el Mundial 2002?",
    answer: "ronaldo nazário",
    options: ["Ronaldinho", "Rivaldo", "Ronaldo Nazário"],
  },
  {
    country: "Brasil",
    question: "BRA-03 | ¿En qué año Brasil declaró su independencia?",
    answer: "1822",
    options: ["1810", "1830", "1822"],
  },
  {
    country: "Brasil",
    question: "BRA-04 | ¿Cuál fue la capital de Brasil antes de Brasilia?",
    answer: "río de janeiro",
    options: ["Río de Janeiro", "Salvador", "Sao Paulo"],
  },
  {
    country: "Brasil",
    question: "BRA-05 | ¿Qué océano baña las costas de Brasil?",
    answer: "atlántico",
    options: ["Pacífico", "Atlántico", "Caribe"],
  },
  {
    country: "Brasil",
    question: "BRA-06 | ¿Quién proclamó la independencia de Brasil?",
    answer: "pedro i",
    options: ["Pedro I", "Pedro II", "Getúlio Vargas"],
  },
  {
    country: "Brasil",
    question: "BRA-07 | ¿Qué sistema político tuvo Brasil durante gran parte del siglo XIX?",
    answer: "monarquía imperial",
    options: ["República federal", "Monarquía imperial", "Dictadura militar"],
  },
  {
    country: "Brasil",
    question: "BRA-08 | ¿Cuál es el río más caudaloso del mundo y atraviesa Brasil?",
    answer: "amazonas",
    options: ["Paraná", "Orinoco", "Amazonas"],
  },
  {
    country: "Brasil",
    question: "BRA-09 | ¿Con cuántos países limita Brasil?",
    answer: "10",
    options: ["7", "9", "10"],
  },
  {
    country: "Brasil",
    question: "BRA-10 | ¿Cuál es el punto más alto de Brasil?",
    answer: "pico da neblina",
    options: ["Pico da Neblina", "Pan de Azúcar", "Cristo Redentor"],
  },
  {
    country: "Brasil",
    question: "BRA-11 | ¿Qué altura aproximada tiene el cerro Pan de Azúcar?",
    answer: "396 mts",
    options: ["396 mts", "400 mts", "386 mts"],
  },
  {
    country: "Brasil",
    question: "BRA-12 | ¿Contra qué selección perdió Brasil la final del Mundial 1950 en el famoso “Maracanazo”?",
    answer: "uruguay",
    options: ["Argentina", "Uruguay", "Alemania"],
  },
  {
    country: "Brasil",
    question: "BRA-13 | ¿Qué jugador brasileño fue conocido como “O Rei”?",
    answer: "pelé",
    options: ["Zico", "Romário", "Pelé"],
  },
  {
    country: "Brasil",
    question: "BRA-14 | ¿Qué ave tropical es símbolo frecuente de Brasil?",
    answer: "tucán",
    options: ["Tucán", "Cóndor", "Flamenco"],
  },
  {
    country: "Brasil",
    question: "BRA-15 | ¿Qué selección eliminó a Brasil en el Mundial 2006?",
    answer: "francia",
    options: ["Alemania", "Francia", "Italia"],
  },
  {
    country: "Brasil",
    question: "BRA-16 | ¿Cuál es la danza tradicional de Brasil?",
    answer: "samba",
    options: ["Samba", "Capoeira", "Murga"],
  },
  {
    country: "Brasil",
    question: "BRA-17 | ¿Cuánto mide la superficie terrestre del territorio nacional de Brasil?",
    answer: "8.515.767 - 8.550.000",
    options: ["8.415.767 - 8.500.000", "8.515.767 - 8.550.000", "8.715.767 - 8.950.000"],
  },
  {
    country: "Brasil",
    question: "BRA-18 | ¿En qué minuto hizo el gol Argentina en la final de la Copa América 2021?",
    answer: "22",
    options: ["22", "20", "24"],
  },
  {
    country: "Brasil",
    question: "BRA-19 | ¿Quién fue el máximo goleador de Brasil en Qatar 2022?",
    answer: "richarlison",
    options: ["Vinicius Jr", "Neymar", "Richarlison"],
  },
  {
    country: "Brasil",
    question: "BRA-20 | ¿Quién fue el máximo asistidor del Mundial 2002 'Corea-Japón' para Brasil?",
    answer: "ronaldinho",
    options: ["Ronaldinho", "Rivaldo", "Cafu"],
  },
  {
    country: "Brasil",
    question: "BRA-21 | ¿Qué jugador festejaba acunando a un bebé en sus goles del Mundial 1994?",
    answer: "bebeto",
    options: ["Viola", "Bebeto", "Romario"],
  },
  {
    country: "Brasil",
    question: "BRA-22 | ¿Qué selección derrotó a Brasil por 7-1 en las semifinales del Mundial 2014?",
    answer: "alemania",
    options: ["Argentina", "Alemania", "Francia"],
  },
  {
    country: "Brasil",
    question: "BRA-23 | ¿Cuál es la ciudad más poblada de Brasil?",
    answer: "são paulo",
    options: ["Río de Janeiro", "Brasilia", "São Paulo"],
  },
  {
    country: "Brasil",
    question: "BRA-24 | ¿Qué famoso autódromo brasileño lleva el nombre de José Carlos Pace?",
    answer: "interlagos",
    options: ["Interlagos", "Monza", "Imola"],
  },
  {
    country: "Brasil",
    question: "BRA-25 | ¿Qué jugador brasileño convirtió los dos goles en la final del Mundial 2002?",
    answer: "ronaldo nazário",
    options: ["Rivaldo", "Ronaldinho", "Ronaldo Nazário"],
  },
  {
    country: "Brasil",
    question: "BRA-26 | ¿Cuál es el bioma más grande de Brasil?",
    answer: "amazonia",
    options: ["Cerrado", "Pantanal", "Amazonia"],
  },
  {
    country: "Brasil",
    question: "BRA-27 | ¿Qué selección eliminó a Brasil en cuartos de final del Mundial 2010?",
    answer: "países bajos",
    options: ["Países Bajos", "Alemania", "Francia"],
  },
  {
    country: "Brasil",
    question: "BRA-28 | ¿Qué futbolista brasileño fue expulsado en la semifinal del Mundial 1962 y luego suspendido?",
    answer: "garrincha",
    options: ["Garrincha", "Pelé", "Jairzinho"],
  },
  {
    country: "Brasil",
    question: "BRA-29 | ¿Qué ciudad brasileña fue sede de la final del Mundial 2014?",
    answer: "río de janeiro",
    options: ["São Paulo", "Río de Janeiro", "Brasilia"],
  },
  {
    country: "Brasil",
    question: "BRA-30 | ¿Cuál es el nombre del estadio más grande e histórico de Brasil?",
    answer: "maracaná",
    options: ["Morumbí", "Mineirão", "Maracaná"],
  },
  {
    country: "Brasil",
    question: "BRA-31 | ¿Qué jugador brasileño ganó el Balón de Oro en 2007?",
    answer: "kaká",
    options: ["Kaká", "Ronaldinho", "Rivaldo"],
  },
  {
    country: "Brasil",
    question: "BRA-32 | ¿Brasil,a qué país eliminó en semifinales por penales en Francia 1998?",
    answer: "holanda",
    options: ["Holanda", "Inglaterra", "Croacia"],
  },
  {
    country: "Brasil",
    question: "BRA-33 | ¿Qué famoso arquitecto diseñó gran parte de Brasilia?",
    answer: "oscar niemeyer",
    options: ["Oscar Niemeyer", "Antoni Gaudí", "Le Corbusier"],
  },
  {
    country: "Brasil",
    question: "BRA-34 | ¿Qué selección enfrentó Brasil en su debut del Mundial 2014?",
    answer: "croacia",
    options: ["Croacia", "Serbia", "México"],
  },
  {
    country: "Brasil",
    question: "BRA-35 | ¿Cuál es el nombre del carnaval más famoso de Brasil?",
    answer: "carnaval de río de janeiro",
    options: ["Carnaval de Salvador", "Carnaval de Recife", "Carnaval de Río de Janeiro"],
  },
  {
    country: "Brasil",
    question: "BRA-36 | ¿Qué jugador brasileño usó la camiseta número 10 en los Mundiales 1958, 1962, 1966 y 1970?",
    answer: "pelé",
    options: ["Garrincha", "Pelé", "Tostão"],
  },
  {
    country: "Brasil",
    question: "BRA-37 | ¿Qué estado brasileño es famoso por las Cataratas del Iguazú?",
    answer: "paraná",
    options: ["Paraná", "Amazonas", "Bahía"],
  },
  {
    country: "Brasil",
    question: "BRA-38 | ¿Qué selección eliminó a Brasil en el Mundial de Qatar 2022?",
    answer: "croacia",
    options: ["Croacia", "Argentina", "Francia"],
  },
  {
    country: "Brasil",
    question: "BRA-39 | ¿Qué jugador brasileño era apodado “Fenómeno”?",
    answer: "ronaldo nazário",
    options: ["Ronaldinho", "Ronaldo Nazário", "Adriano"],
  },
  {
    country: "Brasil",
    question: "BRA-40 | ¿Qué famoso estilo musical nació en las favelas de Río de Janeiro?",
    answer: "funk carioca",
    options: ["Tango", "Funk carioca", "Cumbia"],
  },
  {
    country: "Brasil",
    question: "BRA-41 | ¿Qué ciudad brasileña es conocida como la “Ciudad Maravillosa”?",
    answer: "río de janeiro",
    options: ["São Paulo", "Río de Janeiro", "Salvador"],
  },
  {
    country: "Brasil",
    question: "BRA-42 | ¿Cuál es la cuarta ciudad mas poblada de Brasil?",
    answer: "salvador",
    options: ["Salvador", "Brasilia", "Río de Janeiro"],
  },
  {
    country: "Brasil",
    question: "BRA-43 | ¿Qué jugador brasileño convirtió el penal definitivo ante Italia en la final del Mundial 1994?",
    answer: "dunga",
    options: ["Romário", "Branco", "Dunga"],
  },
  {
    country: "Brasil",
    question: "BRA-44 | ¿Qué selección venció a Brasil en la final olímpica masculina de fútbol en Londres 2012?",
    answer: "méxico",
    options: ["México", "Argentina", "España"],
  },
  {
    country: "Brasil",
    question: "BRA-45 | ¿Qué científico brasileño es considerado pionero de la aviación?",
    answer: "santos dumont",
    options: ["Santos Dumont", "Ayrton Senna", "Carlos Chagas"],
  },

  // ==========================================
  // MARRUECOS
  // ==========================================
  {
    country: "Marruecos",
    question: "MAR-01 | ¿En qué Mundial Marruecos logró por primera vez superar la fase de grupos?",
    answer: "1896",
    options: ["1970", "1986", "1998"],
  },
  {
    country: "Marruecos",
    question: "MAR-02 | ¿Qué selección terminó segunda detrás de Marruecos en el grupo del Mundial 1986?",
    answer: "polonia",
    options: ["Inglaterra", "Polonia", "Portugal"],
  },
  {
    country: "Marruecos",
    question: "MAR-03 | ¿Contra qué país consiguió Marruecos su primera victoria en los Mundiales?",
    answer: "portugal",
    options: ["Portugal", "Escocia", "Bélgica"],
  },
  {
    country: "Marruecos",
    question: "MAR-04 | ¿Qué jugador marroquí convirtió el histórico gol ante Portugal en 1986?",
    answer: "abdelrazak khairi",
    options: ["Aziz Bouderbala", "Abdelrazak Khairi", "Salaheddine Bassir"],
  },
  {
    country: "Marruecos",
    question: "MAR-05 | ¿Qué país eliminó a Marruecos en octavos del Mundial 1986?",
    answer: "alemania occidental",
    options: ["Francia", "Alemania Occidental", "Brasil"],
  },
  {
    country: "Marruecos",
    question: "MAR-06 | ¿Qué futbolista marroquí jugó para Bayern Munich y fue figura en los años 90?",
    answer: "mustapha hadji",
    options: ["Mustapha Hadji", "Hakim Ziyech", "Naybet"],
  },
  {
    country: "Marruecos",
    question: "MAR-07 | ¿Cuál es la segunda ciudad mas poblada de Marruecos?",
    answer: "tanger",
    options: ["Casablanca", "Tanger", "Fest"],
  },
  {
    country: "Marruecos",
    question: "MAR-08 | ¿Qué marroquí ganó el Balón de Oro africano en 1998?",
    answer: "mustapha hadji",
    options: ["Naybet", "Mustapha Hadji", "Bassir"],
  },
  {
    country: "Marruecos",
    question: "MAR-09 | ¿Cuál es el puerto africano más cercano a Europa?",
    answer: "tánger",
    options: ["Casablanca", "Tánger", "Agadir"],
  },
  {
    country: "Marruecos",
    question: "MAR-10 | ¿Qué ciudad marroquí fue capital del protectorado francés?",
    answer: "rabat",
    options: ["Fez", "Rabat", "Marrakech"],
  },
  {
    country: "Marruecos",
    question: "MAR-11 | ¿Qué dinastía gobierna actualmente Marruecos?",
    answer: "alauita",
    options: ["Otomana", "Alauita", "Fatimi"],
  },
  {
    country: "Marruecos",
    question: "MAR-12 | ¿Qué país comparte una frontera terrestre oficialmente reconocida con Marruecos?",
    answer: "argelia",
    options: ["Egipto", "Argelia", "Libia"],
  },
  {
    country: "Marruecos",
    question: "MAR-13 | ¿Qué territorio del sur mantiene un conflicto histórico con Marruecos?",
    answer: "sahara occidental",
    options: ["Somalilandia", "Sahara Occidental", "Puntlandia"],
  },
  {
    country: "Marruecos",
    question: "MAR-14 | ¿Qué selección europea eliminó a Marruecos en el Mundial 1998 pese a que venció 3-0 a Escocia?",
    answer: "noruega",
    options: ["Noruega", "Bélgica", "Alemania"],
  },
  {
    country: "Marruecos",
    question: "MAR-15 | ¿Qué arquero marroquí jugó en el Sevilla FC y ganó la Europa League?",
    answer: "bono",
    options: ["Bono", "Munir", "El Kajoui"],
  },
  {
    country: "Marruecos",
    question: "MAR-16 | ¿Qué jugador marroquí nació en España y eligió representar a Marruecos?",
    answer: "achraf hakimi",
    options: ["Achraf Hakimi", "Sofiane Boufal", "Nayef Aguerd"],
  },
  {
    country: "Marruecos",
    question: "MAR-17 | ¿Qué marroquí fue figura en el Chelsea FC antes del Mundial 2022?",
    answer: "ziyech",
    options: ["Hakimi", "Ziyech", "Ounahi"],
  },
  {
    country: "Marruecos",
    question: "MAR-18 | ¿Qué selecciones africanas habían llegado más lejos (Cuartos) antes de Marruecos en un Mundial?",
    answer: "camerún y senegal",
    options: ["Camerún y Senegal", "Ghana y Nigeria", "Egipto y Argelia"],
  },
  {
    country: "Marruecos",
    question: "MAR-19 | ¿Qué ciudad marroquí es considerada uno de los centros espirituales del islam en África?",
    answer: "fez",
    options: ["Fez", "Casablanca", "Tánger"],
  },
  {
    country: "Marruecos",
    question: "MAR-20 | ¿Cuál es el idioma utilizado tradicionalmente por los pueblos amazigh?",
    answer: "bereber",
    options: ["Bereber", "Urdu", "Persa"],
  },
  {
    country: "Marruecos",
    question: "MAR-21 | ¿Qué cordillera marroquí separa zonas húmedas del Sahara?",
    answer: "atlas",
    options: ["Atlas", "Pirineos", "Cáucaso"],
  },
  {
    country: "Marruecos",
    question: "MAR-22 | ¿Qué corriente oceánica influye en el clima atlántico de Marruecos?",
    answer: "corriente de canarias",
    options: ["Corriente del Golfo", "Corriente de Canarias", "Corriente de Humboldt"],
  },
  {
    country: "Marruecos",
    question: "MAR-23 | ¿Qué ciudad marroquí fue famosa por ser punto clave de espionaje durante la Segunda Guerra Mundial?",
    answer: "casablanca",
    options: ["Casablanca", "Agadir", "Rabat"],
  },
  {
    country: "Marruecos",
    question: "MAR-24 | ¿Qué conferencia histórica de 1943 reunió a Roosevelt y Churchill en Marruecos?",
    answer: "conferencia de casablanca",
    options: ["Conferencia de Yalta", "Conferencia de Casablanca", "Conferencia de Potsdam"],
  },
  {
    country: "Marruecos",
    question: "MAR-25 | ¿Qué famoso viajero marroquí recorrió más kilómetros que Marco Polo según muchos historiadores?",
    answer: "ibn battuta",
    options: ["Ibn Battuta", "Averroes", "Ibn Sina"],
  },
  {
    country: "Marruecos",
    question: "MAR-26 | ¿Qué selección derrotó a Marruecos en la fase de grupos del Mundial 2022?",
    answer: "ninguna",
    options: ["Bélgica", "Ninguna", "Croacia"],
  },
  {
    country: "Marruecos",
    question: "MAR-27 | ¿Qué futbolista marroquí fue elegido mejor jugador joven africano en 2022?",
    answer: "azzedine ounahi",
    options: ["Azzedine Ounahi", "En-Nesyri", "Amallah"],
  },
  {
    country: "Marruecos",
    question: "MAR-28 | ¿Quien es el segundo goleador historico de la seleccion Marruecos",
    answer: "ayoub el kaabi",
    options: ["Ayoub El Kaabi", "Ahmed Faras", "Hakim Ziyech"],
  },
  {
    country: "Marruecos",
    question: "MAR-29 | ¿Qué ciudad marroquí posee una de las universidades más antiguas del mundo islámico?",
    answer: "fez",
    options: ["Fez", "Marrakech", "Tánger"],
  },
  {
    country: "Marruecos",
    question: "MAR-30 | ¿Cómo se llama esa universidad histórica fundada en el siglo IX?",
    answer: "al quaraouiyine",
    options: ["Al Quaraouiyine", "Al Azhar", "Medina Royal"],
  },
  {
    country: "Marruecos",
    question: "MAR-31 | ¿Qué color representa tradicionalmente al islam en la bandera marroquí?",
    answer: "verde",
    options: ["Azul", "Verde", "Negro"],
  },
  {
    country: "Marruecos",
    question: "MAR-32 | ¿Qué jugador marroquí anotó contra Canadá en el Mundial 2022?",
    answer: "ziyech",
    options: ["Hakimi", "Ziyech", "Bono"],
  },
  {
    country: "Marruecos",
    question: "MAR-33 | ¿Qué marroquí jugó en el Paris Saint-Germain y en el Inter Milan?",
    answer: "hakimi",
    options: ["Hakimi", "Mazraoui", "Ounahi"],
  },
  {
    country: "Marruecos",
    question: "MAR-34 | ¿Qué famoso plato marroquí se cocina en recipiente de barro cónico?",
    answer: "tajín",
    options: ["Couscous", "Tajín", "Falafel"],
  },
  {
    country: "Marruecos",
    question: "MAR-35 | ¿Qué bebida tradicional marroquí se sirve comúnmente con menta?",
    answer: "té verde",
    options: ["Café turco", "Té verde", "Mate"],
  },
  {
    country: "Marruecos",
    question: "MAR-36 | ¿Qué país venció a Marruecos en el Mundial 1994 con gol de Jürgen Klinsmann?",
    answer: "alemania",
    options: ["Alemania", "Bélgica", "Suecia"],
  },
  {
    country: "Marruecos",
    question: "MAR-37 | ¿Qué jugador marroquí convirtió un gol ante España en el Mundial 2018?",
    answer: "boutaib",
    options: ["Boutaib", "Hakimi", "Ziyech"],
  },
  {
    country: "Marruecos",
    question: "MAR-38 | ¿Qué ciudad marroquí fue destruida parcialmente por un terremoto en 1960?",
    answer: "agadir",
    options: ["Agadir", "Fez", "Rabat"],
  },
  {
    country: "Marruecos",
    question: "MAR-39 | ¿Qué mineral es uno de los recursos estratégicos más importantes de Marruecos?",
    answer: "fosfato",
    options: ["Litio", "Fosfato", "Uranio"],
  },
  {
    country: "Marruecos",
    question: "MAR-40 | ¿Qué estrecho marítimo conecta el océano Atlántico con el mar Mediterráneo frente a Marruecos?",
    answer: "gibraltar",
    options: ["Ormuz", "Gibraltar", "Malaca"],
  },
  {
    country: "Marruecos",
    question: "MAR-41 | ¿Qué marroquí fue capitán histórico de la selección y jugó en el Deportivo La Coruña?",
    answer: "naybet",
    options: ["Naybet", "Hadji", "Amrabat"],
  },
  {
    country: "Marruecos",
    question: "MAR-42 | ¿Qué selección africana compartió grupo con Marruecos en Qatar 2022?",
    answer: "ninguna",
    options: ["Senegal", "Túnez", "Ninguna"],
  },
  {
    country: "Marruecos",
    question: "MAR-43 | ¿Qué famoso jardín de Marrakech perteneció al diseñador Yves Saint Laurent?",
    answer: "jardín majorelle",
    options: ["Jardín Majorelle", "Jardín Imperial", "Jardín Atlas"],
  },
  {
    country: "Marruecos",
    question: "MAR-44 | ¿Qué ciudad marroquí fue conocida históricamente como puerta comercial hacia Europa?",
    answer: "tánger",
    options: ["Tánger", "Fez", "Meknes"],
  },
  {
    country: "Marruecos",
    question: "MAR-45 | ¿Qué famoso mercado tradicional recibe el nombre de “zoco” en Marruecos?",
    answer: "mercado árabe tradicional",
    options: ["Mercado árabe tradicional", "Centro comercial moderno", "Puerto pesquero"],
  },
  {
    country: "Marruecos",
    question: "MAR-46 | ¿Qué país derrotó a Marruecos en el partido por el tercer puesto del Mundial 2022?",
    answer: "croacia",
    options: ["Croacia", "Argentina", "Francia"],
  },

  // ==========================================
  // CROACIA
  // ==========================================
  {
    country: "Croacia",
    question: "CRO-01 | ¿En qué año Croacia se independizó oficialmente de Yugoslavia?",
    answer: "1991",
    options: ["1989", "1991", "1995"],
  },
  {
    country: "Croacia",
    question: "CRO-02 | ¿Cuál es la capital de Croacia?",
    answer: "zagreb",
    options: ["Split", "Dubrovnik", "Zagreb"],
  },
  {
    country: "Croacia",
    question: "CRO-03 | ¿Qué mar baña la costa croata?",
    answer: "mar adriático",
    options: ["Mar Negro", "Mar Adriático", "Mar Egeo"],
  },
  {
    country: "Croacia",
    question: "CRO-04 | ¿Qué selección eliminó a Croacia en semifinales del Mundial 1998?",
    answer: "francia",
    options: ["Francia", "Brasil", "Alemania"],
  },
  {
    country: "Croacia",
    question: "CRO-05 | ¿Qué puesto obtuvo Croacia en su primer Mundial como país independiente en 1998?",
    answer: "tercer puesto",
    options: ["Campeón", "Subcampeón", "Tercer puesto"],
  },
  {
    country: "Croacia",
    question: "CRO-06 | ¿Quién fue el máximo goleador del Mundial 1998 representando a Croacia?",
    answer: "davor šuker",
    options: ["Luka Modrić", "Davor Šuker", "Boban"],
  },
  {
    country: "Croacia",
    question: "CRO-07 | ¿Qué futbolista croata ganó el Balón de Oro en 2018?",
    answer: "luka modrić",
    options: ["Ivan Rakitić", "Luka Modrić", "Mario Mandžukić"],
  },
  {
    country: "Croacia",
    question: "CRO-08 | ¿Qué selección derrotó a Croacia en la final del Mundial 2018?",
    answer: "francia",
    options: ["Argentina", "Francia", "Alemania"],
  },
  {
    country: "Croacia",
    question: "CRO-09 | ¿Qué jugador croata convirtió el gol en contra en la final del Mundial 2018?",
    answer: "mandžukić",
    options: ["Lovren", "Perišić", "Mandžukić"],
  },
  {
    country: "Croacia",
    question: "CRO-10 | ¿Qué selección eliminó a Croacia en semifinales de Qatar 2022?",
    answer: "argentina",
    options: ["Francia", "Argentina", "Marruecos"],
  },
  {
    country: "Croacia",
    question: "CRO-11 | ¿Qué puesto obtuvo Croacia en el Mundial 2022?",
    answer: "tercero",
    options: ["Segundo", "Tercero", "Cuarto"],
  },
  {
    country: "Croacia",
    question: "CRO-12 | ¿Qué jugador croata es considerado el máximo referente histórico moderno de la selección?",
    answer: "modrić",
    options: ["Rakitić", "Modrić", "Kovačić"],
  },
  {
    country: "Croacia",
    question: "CRO-13 | ¿Qué club español tuvo durante años a Luka Modrić como figura?",
    answer: "real madrid",
    options: ["Barcelona", "Atlético Madrid", "Real Madrid"],
  },
  {
    country: "Croacia",
    question: "CRO-14 | ¿Cuál es la moneda oficial actual de Croacia desde 2023?",
    answer: "euro",
    options: ["Kuna", "Euro", "Dinar"],
  },
  {
    country: "Croacia",
    question: "CRO-15 | ¿Qué moneda utilizaba Croacia antes del euro?",
    answer: "kuna",
    options: ["Corona", "Kuna", "Peso croata"],
  },
  {
    country: "Croacia",
    question: "CRO-16 | ¿Qué ciudad croata es famosa por aparecer en la serie “Game of Thrones”?",
    answer: "dubrovnik",
    options: ["Zagreb", "Dubrovnik", "Rijeka"],
  },
  {
    country: "Croacia",
    question: "CRO-17 | ¿Qué cordillera atraviesa parte del territorio croata?",
    answer: "alpes dináricos",
    options: ["Alpes Dináricos", "Andes", "Pirineos"],
  },
  {
    country: "Croacia",
    question: "CRO-18 | ¿Qué emperador romano nació en territorio de la actual Croacia?",
    answer: "diocleciano",
    options: ["Nerón", "Diocleciano", "Augusto"],
  },
  {
    country: "Croacia",
    question: "CRO-19 | ¿En qué ciudad croata se encuentra el Palacio de Diocleciano?",
    answer: "split",
    options: ["Split", "Zagreb", "Zadar"],
  },
  {
    country: "Croacia",
    question: "CRO-20 | ¿Qué país derrotó a Croacia en la Eurocopa 1996?",
    answer: "alemania",
    options: ["Alemania", "Francia", "Italia"],
  },
  {
    country: "Croacia",
    question: "CRO-21 | ¿Qué futbolista croata convirtió ante Argentina en el Mundial 2018?",
    answer: "modrić",
    options: ["Perišić", "Modrić", "Kramarić"],
  },
  {
    country: "Croacia",
    question: "CRO-22 | ¿Qué arquero croata fue figura en Qatar 2022?",
    answer: "livaković",
    options: ["Livaković", "Subašić", "Pletikosa"],
  },
  {
    country: "Croacia",
    question: "CRO-23 | ¿Qué selección eliminó a Brasil frente a Croacia en Qatar 2022?",
    answer: "croacia",
    options: ["Argentina", "Croacia", "Países Bajos"],
  },
  {
    country: "Croacia",
    question: "CRO-24 | ¿Quién convirtió el penal decisivo ante Brasil en Qatar 2022?",
    answer: "oršić",
    options: ["Modrić", "Petković", "Oršić"],
  },
  {
    country: "Croacia",
    question: "CRO-25 | ¿Qué país compartía históricamente unión política con Croacia dentro de Yugoslavia?",
    answer: "serbia",
    options: ["Hungría", "Serbia", "Austria"],
  },
  {
    country: "Croacia",
    question: "CRO-26 | ¿Qué idioma oficial se habla en Croacia?",
    answer: "croata",
    options: ["Serbio", "Croata", "Esloveno"],
  },
  {
    country: "Croacia",
    question: "CRO-27 | ¿Qué religión es predominante en Croacia?",
    answer: "católica",
    options: ["Ortodoxa", "Católica", "Musulmana"],
  },
  {
    country: "Croacia",
    question: "CRO-28 | ¿Qué científico nacido en la actual Croacia desarrolló avances fundamentales en electricidad?",
    answer: "nikola tesla",
    options: ["Nikola Tesla", "Einstein", "Edison"],
  },
  {
    country: "Croacia",
    question: "CRO-29 | ¿En qué región nació Nikola Tesla?",
    answer: "lika",
    options: ["Lika", "Dalmacia", "Istria"],
  },
  {
    country: "Croacia",
    question: "CRO-30 | ¿Qué famoso inventor croata diseñó la primera lapicera mecánica moderna?",
    answer: "slavoljub penkala",
    options: ["Slavoljub Penkala", "Tesla", "Ruđer Bošković"],
  },
  {
    country: "Croacia",
    question: "CRO-31 | ¿Qué color NO aparece en la bandera croata?",
    answer: "verde",
    options: ["Azul", "Verde", "Rojo"],
  },
  {
    country: "Croacia",
    question: "CRO-32 | ¿Qué símbolo destaca en el centro de la bandera croata?",
    answer: "escudo ajedrezado",
    options: ["Águila", "Escudo ajedrezado", "León"],
  },
  {
    country: "Croacia",
    question: "CRO-33 | ¿Qué ciudad croata es el principal puerto del país?",
    answer: "rijeka",
    options: ["Split", "Rijeka", "Dubrovnik"],
  },
  {
    country: "Croacia",
    question: "CRO-34 | ¿Qué selección eliminó a Croacia en la Euro 2008 por penales?",
    answer: "turquía",
    options: ["Turquía", "España", "Alemania"],
  },
  {
    country: "Croacia",
    question: "CRO-35 | ¿Qué futbolista croata jugó en el FC Barcelona y ganó la Champions League?",
    answer: "rakitić",
    options: ["Rakitić", "Kovačić", "Olić"],
  },
  {
    country: "Croacia",
    question: "CRO-36 | ¿Qué selección venció a Croacia en semifinales del Mundial 2022?",
    answer: "argentina",
    options: ["Francia", "Argentina", "Marruecos"],
  },
  {
    country: "Croacia",
    question: "CRO-37 | ¿Qué jugador croata anotó el empate ante Brasil en Qatar 2022?",
    answer: "petković",
    options: ["Petković", "Modrić", "Perišić"],
  },
  {
    country: "Croacia",
    question: "CRO-38 | ¿Qué famoso parque nacional croata es Patrimonio de la Humanidad por sus lagos?",
    answer: "plitvice",
    options: ["Plitvice", "Krka", "Paklenica"],
  },
  {
    country: "Croacia",
    question: "CRO-39 | ¿Qué ciudad croata fue bombardeada durante la Guerra de Independencia en 1991?",
    answer: "dubrovnik",
    options: ["Dubrovnik", "Split", "Pula"],
  },
  {
    country: "Croacia",
    question: "CRO-40 | ¿Qué científico croata destacó en astronomía y matemáticas durante el siglo XVIII?",
    answer: "bošković",
    options: ["Bošković", "Penkala", "Tesla"],
  },
  {
    country: "Croacia",
    question: "CRO-41 | ¿Qué país derrotó a Croacia en la final de la UEFA Nations League 2023?",
    answer: "españa",
    options: ["Italia", "España", "Francia"],
  },
  {
    country: "Croacia",
    question: "CRO-42 | ¿Qué jugador croata fue capitán en los Mundiales 2018 y 2022?",
    answer: "modrić",
    options: ["Perišić", "Modrić", "Lovren"],
  },
  {
    country: "Croacia",
    question: "CRO-43 | ¿Qué selección enfrentó Croacia en su debut mundialista de 1998?",
    answer: "jamaica",
    options: ["Jamaica", "Argentina", "Alemania"],
  },
  {
    country: "Croacia",
    question: "CRO-44 | ¿Qué famoso cantante croata representó al país en Eurovisión 2024 con “Rim Tim Tagi Dim”?",
    answer: "baby lasagna",
    options: ["Baby Lasagna", "Severina", "Thompson"],
  },
  {
    country: "Croacia",
    question: "CRO-45 | ¿Qué región costera croata es famosa por sus más de mil islas?",
    answer: "dalmacia",
    options: ["Dalmacia", "Slavonia", "Baranja"],
  },
  {
    country: "Croacia",
    question: "CRO-46 | ¿Qué selección eliminó a Croacia en el Mundial 2014?",
    answer: "méxico",
    options: ["México", "Brasil", "Camerún"],
  },
  {
    country: "Croacia",
    question: "CRO-47 | ¿Qué jugador croata fue expulsado en la final del Mundial 2018?",
    answer: "ninguno",
    options: ["Ninguno", "Lovren", "Vida"],
  },
  {
    country: "Croacia",
    question: "CRO-48 | ¿Qué país limita al este con Croacia?",
    answer: "serbia",
    options: ["Italia", "Serbia", "Austria"],
  },

  // ==========================================
  // ESPAÑA
  // ==========================================
  {
    country: "España",
    question: "ESP-01 | ¿Cuál es la capital de España?",
    answer: "madrid",
    options: ["Barcelona", "Madrid", "Sevilla"],
  },
  {
    country: "España",
    question: "ESP-02 | ¿En qué continente se encuentra España?",
    answer: "europa",
    options: ["Europa", "África", "Asia"],
  },
  {
    country: "España",
    question: "ESP-03 | ¿Qué cordillera montañosa separa a España de Francia?",
    answer: "los pirineos",
    options: ["Los Alpes", "Los Pirineos", "Los Apeninos"],
  },
  {
    country: "España",
    question: "ESP-04 | ¿Cuál es el río más largo que atraviesa la península ibérica?",
    answer: "tajo",
    options: ["Guadalquivir", "Ebro", "Tajo"],
  },
  {
    country: "España",
    question: "ESP-05 | ¿Qué moneda oficial se utiliza en España desde el año 2002?",
    answer: "euro",
    options: ["Peseta", "Euro", "Franco"],
  },
  {
    country: "España",
    question: "ESP-06 | ¿Quién escribió la célebre novela 'Don Quijote de la Mancha'?",
    answer: "miguel de cervantes",
    options: ["Miguel de Cervantes", "Federico García Lorca", "Lope de Vega"],
  },
  {
    country: "España",
    question: "ESP-07 | ¿En qué año ganó la selección española su primer Mundial de fútbol?",
    answer: "2010",
    options: ["2006", "2010", "2014"],
  },
  {
    country: "España",
    question: "ESP-08 | ¿Cómo se llama el actual Rey de España?",
    answer: "felipe vi",
    options: ["Juan Carlos I", "Felipe VI", "Alfonso XIII"],
  },
  {
    country: "España",
    question: "ESP-09 | ¿Cuál es el nombre del himno nacional de España?",
    answer: "la marcha real",
    options: ["La Marsellesa", "El Himno de Riego", "La Marcha Real"],
  },
  {
    country: "España",
    question: "ESP-10 | ¿Qué famoso pintor español es el autor de 'Las Meninas'?",
    answer: "diego velázquez",
    options: ["Diego Velázquez", "Francisco de Goya", "Salvador Dalí"],
  },
  {
    country: "España",
    question: "ESP-11 | ¿Qué estrecho separa a España de Marruecos (África)?",
    answer: "estrecho de gibraltar",
    options: ["Estrecho de Magallanes", "Estrecho de Gibraltar", "Estrecho de Bering"],
  },
  {
    country: "España",
    question: "ESP-12 | ¿Cómo se llaman las islas españolas situadas en el Océano Atlántico?",
    answer: "islas canarias",
    options: ["Islas Baleares", "Islas Canarias", "Islas Azores"],
  },
  {
    country: "España",
    question: "ESP-13 | ¿Qué artistba español lideró el movimiento cubista y pintó el 'Guernica'?",
    answer: "pablo picasso",
    options: ["Joan Miró", "Salvador Dalí", "Pablo Picasso"],
  },
  {
    country: "España",
    question: "ESP-14 | ¿Cuál es el idioma oficial de todo el Estado español?",
    answer: "castellano",
    options: ["Catalán", "Castellano", "Gallego"],
  },
  {
    country: "España",
    question: "ESP-15 | ¿Qué acontecimiento histórico comenzó en España en 1492?",
    answer: "el primer viaje a américa",
    options: ["El primer viaje a América", "La Revolución Francesa", "La Primera Guerra Mundial"],
  },
  {
    country: "España",
    question: "ESP-16 | ¿Qué ciudad española es famosa por la obra inacabada de la Sagrada Familia?",
    answer: "barcelona",
    options: ["Valencia", "Barcelona", "Granada"],
  },
  {
    country: "España",
    question: "ESP-17 | ¿Qué tipo de gobierno tiene España actualmente?",
    answer: "monarquía parlamentaria",
    options: ["República", "Monarquía Parlamentaria", "Dictadura"],
  },
  {
    country: "España",
    question: "ESP-18 | ¿Cuál es el nombre del plato típico hecho de arroz, azafrán y mariscos?",
    answer: "paella",
    options: ["Paella", "Gazpacho", "Tortilla"],
  },
  {
    country: "España",
    question: "ESP-19 | ¿Quién fue el médico español premiado con el Nobel por sus estudios sobre neuronas?",
    answer: "santiago ramón y cajal",
    options: ["Santiago Ramón y Cajal", "Severo Ochoa", "Isaac Peral"],
  },
  {
    country: "España",
    question: "ESP-20 | ¿Contra qué selección jugó España la final del Mundial 2010?",
    answer: "países bajos",
    options: ["Alemania", "Países Bajos", "Brasil"],
  },
  {
    country: "España",
    question: "ESP-21 | ¿Quién anotó el gol que le dio el título a España en la final de 2010?",
    answer: "andrés iniesta",
    options: ["Xavi Hernández", "David Villa", "Andrés Iniesta"],
  },
  {
    country: "España",
    question: "ESP-22 | ¿Quién era el director técnico de España en el Mundial de Sudáfrica 2010?",
    answer: "vicente del bosque",
    options: ["Luis Aragonés", "Vicente del Bosque", "Pep Guardiola"],
  },
  {
    country: "España",
    question: "ESP-23 | ¿Quién era el capitán y portero de España en el Mundial 2010?",
    answer: "iker casillas",
    options: ["Iker Casillas", "Víctor Valdés", "Pepe Reina"],
  },
  {
    country: "España",
    question: "ESP-24 | ¿En qué Mundial fue España el país anfitrión (organizador)?",
    answer: "1982",
    options: ["1978", "1982", "1990"],
  },
  {
    country: "España",
    question: "ESP-25 | ¿Quién es el máximo goleador de España en la historia de los Mundiales?",
    answer: "david villa",
    options: ["Raúl González", "David Villa", "Fernando Torres"],
  },
  {
    country: "España",
    question: "ESP-26 | ¿Contra qué selección debutó España en el Mundial 2010 perdiendo 1-0?",
    answer: "suiza",
    options: ["Suiza", "Chile", "Honduras"],
  },
  {
    country: "España",
    question: "ESP-27 | ¿A qué selección venció España en semifinales de 2010 con gol de cabeza de Puyol?",
    answer: "alemania",
    options: ["Argentina", "Alemania", "Paraguay"],
  },
  {
    country: "España",
    question: "ESP-28 | ¿Cómo se llamaba la mascota oficial del Mundial de España 1982?",
    answer: "naranjito",
    options: ["Juanito", "Naranjito", "Piqué"],
  },
  {
    country: "España",
    question: "ESP-29 | ¿Qué jugador español recibió el 'Guante de Oro' al mejor portero en 2010?",
    answer: "iker casillas",
    options: ["Iker Casillas", "Santiago Cañizares", "Andoni Zubizarreta"],
  },
  {
    country: "España",
    question: "ESP-30 | ¿En qué puesto quedó España en el Mundial de Brasil 1950 (su mejor puesto antes de 2010)?",
    answer: "cuarto",
    options: ["Segundo", "Tercero", "Cuarto"],
  },
  {
    country: "España",
    question: "ESP-31 | ¿Quién fue el entrenador de España en el polémico Mundial de Corea-Japón 2002?",
    answer: "josé antonio camacho",
    options: ["José Antonio Camacho", "Luis Enrique", "Javier Clemente"],
  },
  {
    country: "España",
    question: "ESP-32 | ¿Contra qué país quedó eliminada España por penales en el Mundial de Qatar 2022?",
    answer: "marruecos",
    options: ["Marruecos", "Francia", "Croacia"],
  },
  {
    country: "España",
    question: "ESP-33 | ¿Cuántas finales de Copa del Mundo ha jugado España en su historia?",
    answer: "1",
    options: ["2", "1", "3"],
  },
  {
    country: "España",
    question: "ESP-34 | ¿A qué selección goleó España 7-0 en su debut en el Mundial de Qatar 2022?",
    answer: "costa rica",
    options: ["Costa Rica", "Japón", "Alemania"],
  },
  {
    country: "España",
    question: "ESP-35 | ¿En qué Mundial España defendía el título y quedó eliminada en primera ronda?",
    answer: "brasil 2014",
    options: ["Sudáfrica 2010", "Brasil 2014", "Rusia 2018"],
  },
  {
    country: "España",
    question: "ESP-36 | ¿Quién fue el goleador de España en el Mundial de México 1986 con 5 goles?",
    answer: "emilio butragueño",
    options: ["Emilio Butragueño", "Míchel", "Julio Salinas"],
  },
  {
    country: "España",
    question: "ESP-37 | ¿Qué selección eliminó a España en el Mundial de Rusia 2018 por penales?",
    answer: "rusia",
    options: ["Italia", "Rusia", "Portugal"],
  },
  {
    country: "España",
    question: "ESP-38 | ¿Cómo se llama el famoso género musical y de danza originario de Andalucía?",
    answer: "flamenco",
    options: ["Fado", "Flamenco", "Jota"],
  },
  {
    country: "España",
    question: "ESP-39 | ¿Cuál es el principal río que desemboca en el Mar Mediterráneo?",
    answer: "ebro",
    options: ["Tajo", "Guadalquivir", "Ebro"],
  },
  {
    country: "España",
    question: "ESP-40 | ¿Quién es el santo patrón de España?",
    answer: "santiago apóstol",
    options: ["San Pedro", "Santiago Apóstol", "San Antonio"],
  },
  {
    country: "España",
    question: "ESP-41 | ¿Qué árbol es fundamental para la producción de aceite de oliva en España?",
    answer: "olivo",
    options: ["Roble", "Olivo", "Pino"],
  },
  {
    country: "España",
    question: "ESP-42 | ¿Cuál es el archipiélago español situado en el Mar Mediterráneo?",
    answer: "islas baleares",
    options: ["Islas Baleares", "Islas Canarias", "Islas Azores"],
  },
  {
    country: "España",
    question: "ESP-43 | ¿Qué instrumento es el protagonista absoluto de la música tradicional española?",
    answer: "guitarra española",
    options: ["Arpa", "Guitarra española", "Violín"],
  },
  {
    country: "España",
    question: "ESP-44 | ¿Cuál es el ave rapaz más emblemática y protegida de los cielos españoles?",
    answer: "águila imperial ibérica",
    options: ["Halcón peregrino", "Águila imperial ibérica", "Buitre leonado"],
  },
  {
    country: "España",
    question: "ESP-45 | ¿Qué famosa ruta de peregrinación religiosa termina en Galicia?",
    answer: "camino de santiago",
    options: ["Camino de Santiago", "Vía Crucis", "Ruta del Rocío"],
  },
  {
    country: "España",
    question: "ESP-46 | ¿Cuál es la flor más asociada a los patios andaluces y el flamenco?",
    answer: "geranio",
    options: ["Orquídea", "Geranio", "Tulipán"],
  },
  {
    country: "España",
    question: "ESP-47 | ¿Cuál es el nombre del famoso festival de música y danza que se celebra en Valencia?",
    answer: "las fallas",
    options: ["Las Fallas", "San Fermín", "La Tomatina"],
  },
  {
    country: "España",
    question: "ESP-48 | ¿Qué animal es el símbolo de la ciudad de Madrid (junto a un madroño)?",
    answer: "el oso",
    options: ["El León", "El Oso", "El Toro"],
  },
  {
    country: "España",
    question: "ESP-49 | ¿Aproximadamente cuántos habitantes tiene España actualmente?",
    answer: "48 millones",
    options: ["30 millones", "48 millones", "65 millones"],
  },
  {
    country: "España",
    question: "ESP-50 | ¿Cuál es la ciudad más poblada de España?",
    answer: "madrid",
    options: ["Barcelona", "Madrid", "Valencia"],
  },
  {
    country: "España",
    question: "ESP-51 | ¿Qué archipiélago tiene más habitantes?",
    answer: "islas canarias",
    options: ["Islas Baleares", "Islas Canarias", "Islas Cíes"],
  },
  {
    country: "España",
    question: "ESP-52 | ¿Cuál es la principal religión que profesa la población española?",
    answer: "catolicismo",
    options: ["Catolicismo", "Islam", "Protestantismo"],
  },
  {
    country: "España",
    question: "ESP-53 | ¿Qué ciudad del sur de España supera los 600.000 habitantes?",
    answer: "sevilla",
    options: ["Sevilla", "Granada", "Córdoba"],
  },

  // ==========================================
  // ESTADOS UNIDOS
  // ==========================================
  {
    country: "EEUU",
    question: "USA-01 | ¿Cuál es la capital de los EEUU?",
    answer: "washington d.c.",
    options: ["Nueva York", "Washington D.C.", "Los Ángeles"],
  },
  {
    country: "EEUU",
    question: "USA-02 | ¿En qué ciudad se encuentra la Estatua de la Libertad?",
    answer: "nueva york",
    options: ["Nueva York", "Miami", "San Francisco"],
  },
  {
    country: "EEUU",
    question: "USA-03 | ¿Quién fue el primer presidente de los EEUU?",
    answer: "george washington",
    options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson"],
  },
  {
    country: "EEUU",
    question: "USA-04 | ¿Cuál es el estado más grande en extensión territorial?",
    answer: "alaska",
    options: ["Texas", "Alaska", "California"],
  },
  {
    country: "EEUU",
    question: "USA-05 | ¿Cuántas estrellas tiene la bandera actual de EE. UU.?",
    answer: "50",
    options: ["13", "48", "50"],
  },
  {
    country: "EEUU",
    question: "USA-06 | ¿Qué moneda oficial se utiliza en todo el país?",
    answer: "dólar",
    options: ["Libra", "Dólar", "Euro"],
  },
  {
    country: "EEUU",
    question: "USA-07 | ¿En qué fecha se celebra el Día de la Independencia?",
    answer: "4 de julio",
    options: ["4 de julio", "25 de diciembre", "31 de octubre"],
  },
  {
    country: "EEUU",
    question: "USA-08 | ¿Cuál es la ciudad más poblada de EEUU?",
    answer: "nueva york",
    options: ["Chicago", "Houston", "Nueva York"],
  },
  {
    country: "EEUU",
    question: "USA-09 | ¿Qué deporte es conocido como el 'pasatiempo nacional'?",
    answer: "béisbol",
    options: ["Fútbol Americano", "Béisbol", "Baloncesto"],
  },
  {
    country: "EEUU",
    question: "USA-10 | ¿Cuál es el río más largo del país?",
    answer: "misuri",
    options: ["Misuri", "Misisipi", "Colorado"],
  },
  {
    country: "EEUU",
    question: "USA-11 | ¿En qué estado se encuentra el parque temático Disney World?",
    answer: "florida",
    options: ["California", "Florida", "Georgia"],
  },
  {
    country: "EEUU",
    question: "USA-12 | ¿Cuál es el edificio que sirve como residencia al presidente?",
    answer: "la casa blanca",
    options: ["El Capitolio", "El Pentágono", "La Casa Blanca"],
  },
  {
    country: "EEUU",
    question: "USA-13 | ¿En qué estado se encuentra la ciudad de Hollywood?",
    answer: "california",
    options: ["Nevada", "California", "Florida"],
  },
  {
    country: "EEUU",
    question: "USA-14 | ¿Cuál es el nombre del himno nacional de EE. UU.?",
    answer: "the star-spangled banner",
    options: ["The Star-Spangled Banner", "God Save the Queen", "Amazing Grace"],
  },
  {
    country: "EEUU",
    question: "USA-15 | ¿Qué cordillera atraviesa el oeste del país de norte a sur?",
    answer: "las montañas rocosas",
    options: ["Los Andes", "Las Montañas Rocosas", "Los Alpes"],
  },
  {
    country: "EEUU",
    question: "USA-16 | ¿En qué ciudad se encuentra el famoso puente 'Golden Gate'?",
    answer: "san francisco",
    options: ["San Francisco", "Seattle", "San Diego"],
  },
  {
    country: "EEUU",
    question: "USA-17 | ¿Cuántas franjas (rojas y blancas) tiene la bandera?",
    answer: "13",
    options: ["10", "13", "50"],
  },
  {
    country: "EEUU",
    question: "USA-18 | ¿Quién fue el primer hombre en pisar la Luna (misión de la NASA)?",
    answer: "neil armstrong",
    options: ["Neil Armstrong", "Buzz Aldrin", "John Glenn"],
  },
  {
    country: "EEUU",
    question: "USA-19 | ¿Cuál es el nombre del sistema de montañas del este de EE. UU.?",
    answer: "apalaches",
    options: ["Apalaches", "Sierra Nevada", "Cascadas"],
  },
  {
    country: "EEUU",
    question: "USA-20 | ¿Cuál es el animal nacional de los EEUU?",
    answer: "águila calva",
    options: ["Oso Grizzly", "Águila Calva", "Bisonte"],
  },
  {
    country: "EEUU",
    question: "USA-21 | ¿Qué empresa fundó Steve Jobs en un garaje de California?",
    answer: "apple",
    options: ["Microsoft", "Google", "Apple"],
  },
  {
    country: "EEUU",
    question: "USA-22 | ¿En qué ciudad se firmó la Declaración de Independencia?",
    answer: "filadelfia",
    options: ["Boston", "Filadelfia", "Washington"],
  },
  {
    country: "EEUU",
    question: "USA-23 | ¿Cuál es el género musical nacido en EE. UU. a finales del siglo XIX?",
    answer: "jazz",
    options: ["Jazz", "Reggae", "Flamenco"],
  },
  {
    country: "EEUU",
    question: "USA-24 | ¿Qué océano baña la costa oeste de EEUU?",
    answer: "océano pacífico",
    options: ["Océano Atlántico", "Océano Pacífico", "Océano Ártico"],
  },
  {
    country: "EEUU",
    question: "USA-25 | ¿Cuál es la festividad donde se come pavo tradicionalmente?",
    answer: "acción de gracias",
    options: ["Navidad", "Acción de Gracias", "Pascua"],
  },
  {
    country: "EEUU",
    question: "USA-26 | ¿Cómo se llama el gran cañón situado en el estado de Arizona?",
    answer: "gran cañón",
    options: ["Cañón del Colorado", "Gran Cañón", "Cañón del Sil"],
  },
  {
    country: "EEUU",
    question: "USA-27 | ¿En qué estado se encuentran las islas de origen volcánico?",
    answer: "hawái",
    options: ["Hawái", "Florida", "Puerto Rico"],
  },
  {
    country: "EEUU",
    question: "USA-28 | ¿Qué presidente abolió la esclavitud tras la Guerra Civil?",
    answer: "abraham lincoln",
    options: ["Abraham Lincoln", "Theodore Roosevelt", "John F. Kennedy"],
  },
  {
    country: "EEUU",
    question: "USA-29 | ¿En qué puesto quedó EE. UU. en el primer Mundial (1930), su mejor marca histórica?",
    answer: "tercer puesto",
    options: ["Segundo", "Tercer puesto", "Cuarto"],
  },
  {
    country: "EEUU",
    question: "USA-30 | ¿En qué año fue EEUU el país anfitrión (organizador) del Mundial?",
    answer: "1994",
    options: ["1986", "1990", "1994"],
  },
  {
    country: "EEUU",
    question: "USA-31 | ¿Quién era el capitán y figura defensiva de EE. UU. en el Mundial de 1994?",
    answer: "tony meola",
    options: ["Tony Meola", "Alexi Lalas", "Marcelo Balboa"],
  },
  {
    country: "EEUU",
    question: "USA-32 | ¿A qué selección venció EE. UU. en 1994 con el famoso autogol de Andrés Escobar?",
    answer: "colombia",
    options: ["Brasil", "Colombia", "Suiza"],
  },
  {
    country: "EEUU",
    question: "USA-33 | ¿En qué Mundial llegó EE. UU. por última vez a Cuartos de Final?",
    answer: "2002",
    options: ["1994", "1998", "2002"],
  },
  {
    country: "EEUU",
    question: "USA-34 | ¿Qué selección eliminó a EE. UU. en los Cuartos de Final del Mundial 2002?",
    answer: "alemania",
    options: ["Brasil", "Alemania", "España"],
  },
  {
    country: "EEUU",
    question: "USA-35 | ¿Quién es el máximo goleador de EE. UU. en la historia de los Mundiales (5 goles)?",
    answer: "landon donovan",
    options: ["Landon Donovan", "Clint Dempsey", "Christian Pulisic"],
  },
  {
    country: "EEUU",
    question: "USA-36 | ¿Quién es el único estadounidense en anotar en tres Mundiales distintos?",
    answer: "clint dempsey",
    options: ["Landon Donovan", "Clint Dempsey", "Brian McBride"],
  },
  {
    country: "EEUU",
    question: "USA-37 | ¿Cómo se llamó la mascota oficial del Mundial de EEUU 1994?",
    answer: "striker",
    options: ["Juanito", "Striker", "Footix"],
  },
  {
    country: "EEUU",
    question: "USA-38 | ¿En qué estadio se jugó la gran final del Mundial de EE. UU. 1994?",
    answer: "rose bowl",
    options: ["Rose Bowl", "Giants Stadium", "Cotton Bowl"],
  },
  {
    country: "EEUU",
    question: "USA-39 | ¿A qué selección africana eliminó EE. UU. en el Mundial de 2014 en fase de grupos?",
    answer: "ghana",
    options: ["Ghana", "Nigeria", "Camerún"],
  },
  {
    country: "EEUU",
    question: "USA-40 | ¿Quién fue el portero de EE. UU. que hizo récord de 16 atajadas contra Bélgica en 2014?",
    answer: "tim howard",
    options: ["Brad Friedel", "Kasey Keller", "Tim Howard"],
  },
  {
    country: "EEUU",
    question: "USA-41 | ¿En qué Mundial EEUU no logró clasificar (siendo una gran sorpresa)?",
    answer: "2018",
    options: ["2010", "2014", "2018"],
  },
  {
    country: "EEUU",
    question: "USA-42 | ¿Quién anotó el gol de la victoria ante Irán en el Mundial de Qatar 2022?",
    answer: "christian pulisic",
    options: ["Christian Pulisic", "Timothy Weah", "Weston McKennie"],
  },
  {
    country: "EEUU",
    question: "USA-43 | ¿Contra qué selección empató EE. UU. 1-1 en el debut de Qatar 2022?",
    answer: "gales",
    options: ["Inglaterra", "Gales", "Irán"],
  },
  {
    country: "EEUU",
    question: "USA-44 | ¿Cuántos países organizarán el Mundial 2026 junto a EEUU?",
    answer: "2 (méxico y canadá)",
    options: ["1", "2 (México y Canadá)", "3"],
  },

  // ==========================================
  // ECUADOR
  // ==========================================
  {
    country: "Ecuador",
    question: "ECU-01 | ¿Cuál es la capital de Ecuador?",
    answer: "quito",
    options: ["Guayaquil", "Quito", "Cuenca"],
  },
  {
    country: "Ecuador",
    question: "ECU-02 | ¿En qué año se independizó Ecuador de la Gran Colombia?",
    answer: "1830",
    options: ["1822", "1830", "1809"],
  },
  {
    country: "Ecuador",
    question: "ECU-03 | ¿Cuál es el volcán activo más alto de Ecuador?",
    answer: "cotopaxi",
    options: ["Chimborazo", "Cotopaxi", "Pichincha"],
  },
  {
    country: "Ecuador",
    question: "ECU-04 | ¿Cómo se llama la moneda oficial de Ecuador desde el año 2000?",
    answer: "dólar estadounidense",
    options: ["Sucre", "Peso", "Dólar estadounidense"],
  },
  {
    country: "Ecuador",
    question: "ECU-05 | ¿Qué ciudad es conocida como la 'Perla del Pacífico'?",
    answer: "guayaquil",
    options: ["Manta", "Guayaquil", "Esmeraldas"],
  },
  {
    country: "Ecuador",
    question: "ECU-06 | ¿Quién es el autor de la novela 'Huasipungo'?",
    answer: "jorge icaza",
    options: ["Jorge Icaza", "Juan León Mera", "Medardo Ángel Silva"],
  },
  {
    country: "Ecuador",
    question: "ECU-07 | ¿A qué archipiélago pertenecen las famosas tortugas gigantes?",
    answer: "islas galápagos",
    options: ["Islas Baleares", "Islas Galápagos", "Islas Canarias"],
  },
  {
    country: "Ecuador",
    question: "ECU-08 | ¿Cuál es la montaña más alejada del centro de la Tierra (ubicada en Ecuador)?",
    answer: "chimborazo",
    options: ["Everest", "Cayambe", "Chimborazo"],
  },
  {
    country: "Ecuador",
    question: "ECU-09 | ¿Qué festividad ecuatoriana es famosa en la ciudad de Ambato?",
    answer: "fiesta de la fruta y de las flores",
    options: ["Fiesta de la Fruta y de las Flores", "Carnaval de Guaranda", "La Mama Negra"],
  },
  {
    country: "Ecuador",
    question: "ECU-10 | ¿Cuál es el río más largo de la cuenca amazónica que nace en Ecuador?",
    answer: "río napo",
    options: ["Río Napo", "Río Guayas", "Río Pastaza"],
  },
  {
    country: "Ecuador",
    question: "ECU-11 | ¿Cuál es el plato típico que consiste en una sopa de pescado y yuca?",
    answer: "encebollado",
    options: ["Ceviche", "Encebollado", "Locro"],
  },
  {
    country: "Ecuador",
    question: "ECU-12 | ¿Qué presidente ecuatoriano impulsó la construcción del ferrocarril trasandino?",
    answer: "eloy alfaro",
    options: ["Eloy Alfaro", "Gabriel García Moreno", "José María Velasco Ibarra"],
  },
  {
    country: "Ecuador",
    question: "ECU-13 | ¿Cuántas regiones naturales tiene Ecuador continental?",
    answer: "3",
    options: ["2", "3", "4"],
  },
  {
    country: "Ecuador",
    question: "ECU-14 | ¿Qué ciudad es famosa por su catedral de cúpulas azules?",
    answer: "cuenca",
    options: ["Loja", "Cuenca", "Riobamba"],
  },
  {
    country: "Ecuador",
    question: "ECU-15 | ¿Quién escribió la letra del Himno Nacional del Ecuador?",
    answer: "juan león mera",
    options: ["Antonio Neumane", "Juan León Mera", "Benito Juárez"],
  },
  {
    country: "Ecuador",
    question: "ECU-16 | ¿Qué provincia es conocida como la 'Provincia de los Lagos'?",
    answer: "imbabura",
    options: ["Imbabura", "Pichincha", "Azuay"],
  },
  {
    country: "Ecuador",
    question: "ECU-17 | ¿Cuál es el principal producto de exportación no petrolero de Ecuador?",
    answer: "banano",
    options: ["Flores", "Banano", "Cacao"],
  },
  {
    country: "Ecuador",
    question: "ECU-18 | ¿Qué cultura precolombina es famosa por sus figuras llamadas 'Venus'?",
    answer: "cultura valdivia",
    options: ["Cultura Valdivia", "Cultura Chorrera", "Cultura Machalilla"],
  },
  {
    country: "Ecuador",
    question: "ECU-19 | ¿En qué ciudad se encuentra el monumento a la Mitad del Mundo?",
    answer: "quito",
    options: ["Latacunga", "Quito", "Ibarra"],
  },
  {
    country: "Ecuador",
    question: "ECU-20 | ¿Qué naturalista inglés visitó las Galápagos para desarrollar su teoría de la evolución?",
    answer: "charles darwin",
    options: ["Isaac Newton", "Charles Darwin", "Gregor Mendel"],
  },
  {
    country: "Ecuador",
    question: "ECU-21 | ¿En qué año clasificó Ecuador a su primer Mundial?",
    answer: "corea-japón 2002",
    options: ["Francia 1998", "Corea-Japón 2002", "Alemania 2006"],
  },
  {
    country: "Ecuador",
    question: "ECU-22 | ¿Quién era el DT de Ecuador en su debut mundialista?",
    answer: "hernán darío gómez",
    options: ["Hernán Darío Gómez", "Luis Fernando Suárez", "Reinaldo Rueda"],
  },
  {
    country: "Ecuador",
    question: "ECU-23 | ¿Contra qué selección debutó Ecuador en 2002?",
    answer: "italia",
    options: ["Italia", "México", "Croacia"],
  },
  {
    country: "Ecuador",
    question: "ECU-24 | ¿Quién marcó el primer gol de Ecuador en un Mundial?",
    answer: "agustín delgado",
    options: ["Jaime Iván Kaviedes", "Agustín Delgado", "Carlos Tenorio"],
  },
  {
    country: "Ecuador",
    question: "ECU-25 | ¿A qué selección venció Ecuador para lograr su primer triunfo?",
    answer: "croacia",
    options: ["Croacia", "Polonia", "Costa Rica"],
  },
  {
    country: "Ecuador",
    question: "ECU-26 | ¿En qué Mundial Ecuador llegó por primera vez a Octavos?",
    answer: "alemania 2006",
    options: ["Corea-Japón 2002", "Alemania 2006", "Brasil 2014"],
  },
  {
    country: "Ecuador",
    question: "ECU-27 | ¿Quién marcó el primer gol del triunfo ante Polonia en 2006?",
    answer: "carlos tenorio",
    options: ["Carlos Tenorio", "Enner Valencia", "Felipe Caicedo"],
  },
  {
    country: "Ecuador",
    question: "ECU-28 | ¿Qué selección eliminó a Ecuador en los Octavos de 2006?",
    answer: "inglaterra",
    options: ["Alemania", "Brasil", "Inglaterra"],
  },
  {
    country: "Ecuador",
    question: "ECU-29 | ¿Cuál fue el resultado del partido inaugural Qatar vs Ecuador?",
    answer: "0 - 2",
    options: ["0 - 1", "0 - 2", "1 - 2"],
  },
  {
    country: "Ecuador",
    question: "ECU-30 | ¿Quién es el máximo goleador histórico de Ecuador en Mundiales?",
    answer: "enner valencia",
    options: ["Agustín Delgado", "Enner Valencia", "Édison Méndez"],
  },
  {
    country: "Ecuador",
    question: "ECU-31 | ¿Cuántos goles marcó Enner Valencia en el Mundial 2014?",
    answer: "3",
    options: ["2", "3", "4"],
  },
  {
    country: "Ecuador",
    question: "ECU-32 | ¿Quién fue el DT en el Mundial de Brasil 2014?",
    answer: "reinaldo rueda",
    options: ["Gustavo Alfaro", "Reinaldo Rueda", "Sixto Vizuete"],
  },
  {
    country: "Ecuador",
    question: "ECU-33 | ¿En qué estadio debutó Ecuador en el Mundial de Qatar 2022?",
    answer: "estadio al bayt",
    options: ["Estadio Lusail", "Estadio Al Bayt", "Estadio 974"],
  },
  {
    country: "Ecuador",
    question: "ECU-34 | ¿Qué jugador ecuatoriano marcó en dos Mundiales distintos?",
    answer: "agustín delgado",
    options: ["Agustín Delgado", "Ulises de la Cruz", "Antonio Valencia"],
  },
  {
    country: "Ecuador",
    question: "ECU-35 | ¿A qué selección africana enfrentó Ecuador en Qatar 2022?",
    answer: "senegal",
    options: ["Ghana", "Camerún", "Senegal"],
  },
  {
    country: "Ecuador",
    question: "ECU-36 | ¿Contra qué equipo empató Ecuador en la fase de grupos de 2014?",
    answer: "francia",
    options: ["Suiza", "Francia", "Honduras"],
  },
  {
    country: "Ecuador",
    question: "ECU-37 | ¿Quién era el capitán de Ecuador en el Mundial 2006?",
    answer: "iván hurtado",
    options: ["Iván Hurtado", "Álex Aguinaga", "Giovanny Espinoza"],
  },
  {
    country: "Ecuador",
    question: "ECU-38 | ¿Cuántos puntos sumó Ecuador en la fase de grupos de 2022?",
    answer: "4 puntos",
    options: ["3 puntos", "4 puntos", "6 puntos"],
  },
  {
    country: "Ecuador",
    question: "ECU-39 | ¿Quién fue el DT que llevó a Ecuador a Qatar 2022?",
    answer: "gustavo alfaro",
    options: ["Jorge Célico", "Gustavo Alfaro", "Jordi Cruyff"],
  },

  // ==========================================
  // ALEMANIA
  // ==========================================
  {
    country: "Alemania",
    question: "ALE-01 | ¿Cuántos títulos mundiales tiene Alemania en total?",
    answer: "4",
    options: ["3", "4", "5"],
  },
  {
    country: "Alemania",
    question: "ALE-02 | ¿Quién es el máximo goleador histórico de los Mundiales?",
    answer: "miroslav klose",
    options: ["Gerd Müller", "Miroslav Klose", "Thomas Müller"],
  },
  {
    country: "Alemania",
    question: "ALE-03 | ¿A qué selección venció Alemania en la final de Italia 1990?",
    answer: "argentina",
    options: ["Argentina", "Brasil", "Italia"],
  },
  {
    country: "Alemania",
    question: "ALE-04 | ¿En qué año fue Alemania anfitriona por primera vez?",
    answer: "1974",
    options: ["1974", "2006", "1934"],
  },
  {
    country: "Alemania",
    question: "ALE-05 | ¿Quién marcó el gol de la victoria en la final de Brasil 2014?",
    answer: "mario götze",
    options: ["Bastian Schweinsteiger", "Mario Götze", "Mesut Özil"],
  },
  {
    country: "Alemania",
    question: "ALE-06 | ¿Cuál fue el histórico resultado contra Brasil en 2014?",
    answer: "7 - 1",
    options: ["5 - 0", "4 - 1", "7 - 1"],
  },
  {
    country: "Alemania",
    question: "ALE-07 | ¿Qué jugador alemán tiene el récord de más partidos jugados?",
    answer: "lothar matthäus",
    options: ["Lothar Matthäus", "Philipp Lahm", "Manuel Neuer"],
  },
  {
    country: "Alemania",
    question: "ALE-08 | ¿Quién era el DT en el Mundial de Alemania 2006?",
    answer: "jürgen klinsmann",
    options: ["Joachim Löw", "Jürgen Klinsmann", "Franz Beckenbauer"],
  },
  {
    country: "Alemania",
    question: "ALE-09 | ¿En qué Mundial Alemania quedó fuera en fase de grupos por 1ra vez?",
    answer: "rusia 2018",
    options: ["Sudáfrica 2010", "Rusia 2018", "Qatar 2022"],
  },
  {
    country: "Alemania",
    question: "ALE-10 | ¿Contra quién perdió la final de 1966 con un gol fantasma?",
    answer: "inglaterra",
    options: ["Inglaterra", "Francia", "Países Bajos"],
  },
  {
    country: "Alemania",
    question: "ALE-11 | ¿Quién ganó el Mundial como jugador (1974) y como DT (1990)?",
    answer: "franz beckenbauer",
    options: ["Rudi Völler", "Franz Beckenbauer", "Jürgen Klinsmann"],
  },
  {
    country: "Alemania",
    question: "ALE-12 | ¿Cuántos goles marcó Miroslav Klose en Mundiales?",
    answer: "16",
    options: ["14", "15", "16"],
  },
  {
    country: "Alemania",
    question: "ALE-13 | ¿Qué selección derrotó a Alemania en la final de 2002?",
    answer: "brasil",
    options: ["Brasil", "Francia", "Argentina"],
  },
  {
    country: "Alemania",
    question: "ALE-14 | ¿Quién era el portero titular en el título de 1974?",
    answer: "sepp maier",
    options: ["Sepp Maier", "Oliver Kahn", "Jens Lehmann"],
  },
  {
    country: "Alemania",
    question: "ALE-15 | ¿En qué año ganó Alemania su segundo título mundial?",
    answer: "1974",
    options: ["1954", "1966", "1974"],
  },
  {
    country: "Alemania",
    question: "ALE-16 | ¿Quién fue el goleador alemán en el Mundial 2010?",
    answer: "thomas müller",
    options: ["Thomas Müller", "Lukas Podolski", "Mario Gómez"],
  },
  {
    country: "Alemania",
    question: "ALE-17 | ¿A qué país venció Alemania para el 3er puesto en 2006?",
    answer: "portugal",
    options: ["Portugal", "Uruguay", "España"],
  },
  {
    country: "Alemania",
    question: "ALE-18 | ¿Qué marca de ropa ha vestido a Alemania históricamente?",
    answer: "adidas",
    options: ["Nike", "Adidas", "Puma"],
  },
  {
    country: "Alemania",
    question: "ALE-19 | ¿Cuál es la capital de Alemania?",
    answer: "berlín",
    options: ["Múnich", "Hamburgo", "Berlín"],
  },
  {
    country: "Alemania",
    question: "ALE-20 | ¿Cuál es el río más largo que transcurre por Alemania?",
    answer: "rin",
    options: ["Rin", "Danubio", "Elba"],
  },
  {
    country: "Alemania",
    question: "ALE-21 | ¿En qué ciudad se celebra anualmente el Oktoberfest?",
    answer: "múnich",
    options: ["Berlín", "Múnich", "Frankfurt"],
  },
  {
    country: "Alemania",
    question: "ALE-22 | ¿Cuál es la montaña más alta de Alemania?",
    answer: "zugspitze",
    options: ["Zugspitze", "Watzmann", "Feldberg"],
  },
  {
    country: "Alemania",
    question: "ALE-23 | ¿Cuántos estados federados (Bundesländer) tiene el país?",
    answer: "16",
    options: ["12", "14", "16"],
  },
  {
    country: "Alemania",
    question: "ALE-24 | ¿Quién fue el primer Canciller de la Alemania unificada en 1990?",
    answer: "helmut kohl",
    options: ["Helmut Kohl", "Gerhard Schröder", "Angela Merkel"],
  },
  {
    country: "Alemania",
    question: "ALE-25 | ¿Cuál es la ciudad financiera más importante del país?",
    answer: "frankfurt",
    options: ["Stuttgart", "Colonia", "Frankfurt"],
  },
  {
    country: "Alemania",
    question: "ALE-26 | ¿Qué marca de autos tiene su sede principal en Wolfsburgo?",
    answer: "volkswagen",
    options: ["BMW", "Volkswagen", "Mercedes-Benz"],
  },
  {
    country: "Alemania",
    question: "ALE-27 | ¿En qué año cayó el Muro de Berlín?",
    answer: "1989",
    options: ["1987", "1988", "1989"],
  },
  {
    country: "Alemania",
    question: "ALE-28 | ¿Qué famoso compositor nació en Bonn en 1770?",
    answer: "beethoven",
    options: ["Bach", "Beethoven", "Brahms"],
  },
  {
    country: "Alemania",
    question: "ALE-29 | ¿Cómo se llama la famosa autopista alemana sin límite de velocidad?",
    answer: "autobahn",
    options: ["Autobahn", "Bundesstraße", "Schnellweg"],
  },
  {
    country: "Alemania",
    question: "ALE-30 | ¿Cuál es el puerto marítimo más grande de Alemania?",
    answer: "hamburgo",
    options: ["Bremen", "Hamburgo", "Kiel"],
  },
  {
    country: "Alemania",
    question: "ALE-31 | ¿Qué inventó el alemán Johannes Gutenberg?",
    answer: "la imprenta",
    options: ["El motor", "La imprenta", "El telescopio"],
  },
  {
    country: "Alemania",
    question: "ALE-32 | ¿Qué científico alemán desarrolló la Teoría de la Relatividad?",
    answer: "albert einstein",
    options: ["Albert Einstein", "Max Planck", "Werner Heisenberg"],
  },
  {
    country: "Alemania",
    question: "ALE-33 | ¿Cuál es el edificio del parlamento alemán en Berlín?",
    answer: "reichstag",
    options: ["Reichstag", "Bundestag", "Rathaus"],
  },
  {
    country: "Alemania",
    question: "ALE-34 | ¿Con cuántos países tiene frontera Alemania?",
    answer: "9",
    options: ["7", "9", "11"],
  },
  {
    country: "Alemania",
    question: "ALE-35 | ¿Cuál es el bosque más famoso del suroeste alemán?",
    answer: "selva negra",
    options: ["Bosque Bávaro", "Selva Negra", "Bosque de Turingia"],
  },

  // ==========================================
  // BÉLGICA
  // ==========================================
  {
    country: "Bélgica",
    question: "BEL-01 | ¿Cuál es la capital de Bélgica?",
    answer: "bruselas",
    options: ["Brujas", "Bruselas", "Amberes"],
  },
  {
    country: "Bélgica",
    question: "BEL-02 | ¿Qué ciudad belga alberga la sede principal de la Unión Europea?",
    answer: "bruselas",
    options: ["Gante", "Bruselas", "Lieja"],
  },
  {
    country: "Bélgica",
    question: "BEL-03 | ¿Qué selección eliminó a Bélgica en semifinales del Mundial 1986?",
    answer: "argentina",
    options: ["Argentina", "Alemania", "Francia"],
  },
  {
    country: "Bélgica",
    question: "BEL-04 | ¿Quién convirtió los dos goles ante Bélgica en la semifinal del Mundial 1986?",
    answer: "diego maradona",
    options: ["Jorge Burruchaga", "Diego Maradona", "Valdano"],
  },
  {
    country: "Bélgica",
    question: "BEL-05 | ¿Qué puesto logró Bélgica en el Mundial 2018?",
    answer: "tercero",
    options: ["Segundo", "Tercero", "Campeón"],
  },
  {
    country: "Bélgica",
    question: "BEL-06 | ¿Qué selección eliminó a Bélgica en semifinales del Mundial 2018?",
    answer: "francia",
    options: ["Francia", "Croacia", "Brasil"],
  },
  {
    country: "Bélgica",
    question: "BEL-07 | ¿Qué jugador belga ganó el premio al mejor arquero del Mundial 2018?",
    answer: "courtois",
    options: ["Courtois", "Lukaku", "Hazard"],
  },
  {
    country: "Bélgica",
    question: "BEL-08 | ¿Qué selección eliminó a Bélgica en cuartos del Mundial 2022?",
    answer: "ninguna, quedó afuera en grupos",
    options: ["Croacia", "Ninguna, quedó afuera en grupos", "Marruecos"],
  },
  {
    country: "Bélgica",
    question: "BEL-09 | ¿Qué selección derrotó a Bélgica en fase de grupos del Mundial 2022?",
    answer: "marruecos",
    options: ["Canadá", "Marruecos", "Croacia"],
  },
  {
    country: "Bélgica",
    question: "BEL-10 | ¿Qué futbolista belga es el máximo goleador histórico de su selección?",
    answer: "romelu lukaku",
    options: ["Eden Hazard", "Romelu Lukaku", "Kevin De Bruyne"],
  },
  {
    country: "Bélgica",
    question: "BEL-11 | ¿Qué mediocampista belga fue figura del Manchester City?",
    answer: "de bruyne",
    options: ["Fellaini", "De Bruyne", "Witsel"],
  },
  {
    country: "Bélgica",
    question: "BEL-12 | ¿Qué arquero belga juega o jugó en el Real Madrid?",
    answer: "courtois",
    options: ["Mignolet", "Courtois", "Casteels"],
  },
  {
    country: "Bélgica",
    question: "BEL-13 | ¿Qué selección eliminó a Bélgica en la Eurocopa 2020?",
    answer: "italia",
    options: ["Italia", "Portugal", "Francia"],
  },
  {
    country: "Bélgica",
    question: "BEL-14 | ¿Qué jugador belga convirtió el gol de la victoria ante Brasil en el Mundial 2018?",
    answer: "de bruyne",
    options: ["Lukaku", "De Bruyne", "Hazard"],
  },
  {
    country: "Bélgica",
    question: "BEL-15 | ¿Qué selección derrotó a Bélgica en octavos del Mundial 1990?",
    answer: "inglaterra",
    options: ["Inglaterra", "Alemania", "España"],
  },
  {
    country: "Bélgica",
    question: "BEL-16 | ¿Quién convirtió el gol agónico para Inglaterra ante Bélgica en 1990?",
    answer: "david platt",
    options: ["Lineker", "David Platt", "Beardsley"],
  },
  {
    country: "Bélgica",
    question: "BEL-17 | ¿Qué arquero belga ganó el premio Lev Yashin en el Mundial 1994?",
    answer: "michel preud’homme",
    options: ["Pfaff", "Michel Preud’homme", "Courtois"],
  },
  {
    country: "Bélgica",
    question: "BEL-18 | ¿Qué selección eliminó a Bélgica en el Mundial 2002?",
    answer: "brasil",
    options: ["Brasil", "Turquía", "Japón"],
  },
  {
    country: "Bélgica",
    question: "BEL-19 | ¿Qué polémica jugada anulada sufrió Bélgica ante Brasil en 2002?",
    answer: "gol de wilmots anulado",
    options: ["Penal no cobrado", "Gol de Wilmots anulado", "Expulsión de Courtois"],
  },
  {
    country: "Bélgica",
    question: "BEL-20 | ¿Qué jugador belga fue capitán durante gran parte de la 'generación dorada'?",
    answer: "hazard",
    options: ["Hazard", "Lukaku", "Kompany"],
  },
  {
    country: "Bélgica",
    question: "BEL-21 | ¿Qué defensor belga fue símbolo del Manchester City?",
    answer: "kompany",
    options: ["Alderweireld", "Vertonghen", "Kompany"],
  },
  {
    country: "Bélgica",
    question: "BEL-22 | ¿Qué selección eliminó a Bélgica en cuartos del Mundial 2014?",
    answer: "argentina",
    options: ["Argentina", "Países Bajos", "Alemania"],
  },
  {
    country: "Bélgica",
    question: "BEL-23 | ¿Quién convirtió el gol argentino ante Bélgica en el Mundial 2014?",
    answer: "higuain",
    options: ["Messi", "Higuáin", "Di María"],
  },
  {
    country: "Bélgica",
    question: "BEL-24 | ¿Qué famoso circuito de Fórmula 1 se encuentra en Bélgica?",
    answer: "spa-francorchamps",
    options: ["Monza", "Spa-Francorchamps", "Silverstone"],
  },
  {
    country: "Bélgica",
    question: "BEL-25 | ¿Qué ciudad belga es famosa por sus diamantes?",
    answer: "amberes",
    options: ["Amberes", "Brujas", "Namur"],
  },
  {
    country: "Bélgica",
    question: "BEL-26 | ¿Qué idioma NO es oficial en Bélgica?",
    answer: "italiano",
    options: ["Alemán", "Francés", "Italiano"],
  },
  {
    country: "Bélgica",
    question: "BEL-27 | ¿Qué tres idiomas oficiales tiene Bélgica?",
    answer: "francés, neerlandés y alemán",
    options: ["Francés, neerlandés y alemán", "Inglés, francés y alemán", "Neerlandés, español y francés"],
  },
  {
    country: "Bélgica",
    question: "BEL-28 | ¿Qué rey de Bélgica estuvo vinculado al dominio del Congo en el siglo XIX?",
    answer: "leopoldo ii",
    options: ["Leopoldo II", "Alberto I", "Balduino"],
  },
  {
    country: "Bélgica",
    question: "BEL-29 | ¿Qué ciudad belga es conocida como 'la Venecia del Norte'?",
    answer: "brujas",
    options: ["Brujas", "Lieja", "Bruselas"],
  },
  {
    country: "Bélgica",
    question: "BEL-30 | ¿Qué delantero belga jugó en el Chelsea FC y en el Inter Milan?",
    answer: "lukaku",
    options: ["Lukaku", "Benteke", "Origi"],
  },
  {
    country: "Bélgica",
    question: "BEL-31 | ¿Qué jugador belga marcó un golazo ante Japón en el Mundial 2018 en una contra histórica?",
    answer: "chadli",
    options: ["Chadli", "Lukaku", "Hazard"],
  },
  {
    country: "Bélgica",
    question: "BEL-32 | ¿Qué selección asiática sufrió esa remontada 3-2 ante Bélgica en 2018?",
    answer: "japón",
    options: ["Corea del Sur", "Japón", "Arabia"],
  },
  {
    country: "Bélgica",
    question: "BEL-33 | ¿Qué jugador belga convirtió el gol más rápido del Mundial 2022 hasta octavos?",
    answer: "batshuayi",
    options: ["Batshuayi", "Lukaku", "Trossard"],
  },
  {
    country: "Bélgica",
    question: "BEL-34 | ¿Qué selección compartió grupo con Bélgica y Croacia en Qatar 2022?",
    answer: "marruecos y canadá",
    options: ["Marruecos y Canadá", "Japón y Canadá", "Serbia y Marruecos"],
  },
  {
    country: "Bélgica",
    question: "BEL-35 | ¿Qué ciudad belga alberga el famoso Atomium?",
    answer: "bruselas",
    options: ["Bruselas", "Brujas", "Amberes"],
  },
  {
    country: "Bélgica",
    question: "BEL-36 | ¿Qué científico belga recibió el Nobel por el descubrimiento del Big Bang como teoría cosmológica?",
    answer: "georges lemaître",
    options: ["Georges Lemaître", "Einstein", "Bohr"],
  },
  {
    country: "Bélgica",
    question: "BEL-37 | ¿Qué selección eliminó a Bélgica en la Eurocopa 2016?",
    answer: "gales",
    options: ["Gales", "Portugal", "Italia"],
  },
  {
    country: "Bélgica",
    question: "BEL-38 | ¿Qué futbolista galés brilló especialmente en ese partido ante Bélgica?",
    answer: "hal robson-kanu",
    options: ["Bale", "Ramsey", "Hal Robson-Kanu"],
  },
  {
    country: "Bélgica",
    question: "BEL-39 | ¿Qué jugador belga fue famoso por sus tiros libres y jugó en el Manchester City?",
    answer: "kevin de bruyne",
    options: ["Kevin De Bruyne", "Fellaini", "Mertens"],
  },
  {
    country: "Bélgica",
    question: "BEL-40 | ¿Qué artista belga creó 'Las aventuras de Tintín'?",
    answer: "hergé",
    options: ["Hergé", "Magritte", "Simenon"],
  },
  {
    country: "Bélgica",
    question: "BEL-41 | ¿Qué pintor surrealista belga realizó 'Esto no es una pipa'?",
    answer: "rené magritte",
    options: ["Rubens", "René Magritte", "Van Eyck"],
  },
  {
    country: "Bélgica",
    question: "BEL-42 | ¿Qué selección eliminó a Bélgica del Mundial 1994?",
    answer: "alemania",
    options: ["Alemania", "Países Bajos", "Arabia"],
  },
  {
    country: "Bélgica",
    question: "BEL-43 | ¿Qué jugador belga fue elegido mejor jugador joven del Mundial 2014?",
    answer: "ninguno",
    options: ["Origi", "Hazard", "Ninguno"],
  },
  {
    country: "Bélgica",
    question: "BEL-44 | ¿Qué país limita al sur con Bélgica?",
    answer: "francia",
    options: ["Alemania", "Francia", "Russia"],
  },
  {
    country: "Bélgica",
    question: "BEL-45 | ¿Qué río importante atraviesa Bélgica y pasa por ciudades como Lieja y Namur?",
    answer: "mosa (meuse)",
    options: ["Danubio", "Mosa (Meuse)", "Sena"],
  },
  {
    country: "Bélgica",
    question: "BEL-46 | ¿Cuál es el punto más alto de Bélgica?",
    answer: "signal de botrange",
    options: ["Signal de Botrange", "Monte Valserberg", "Pico Ardenas"],
  },
  {
    country: "Bélgica",
    question: "BEL-47 | ¿Qué región natural belga es conocida por sus bosques y relieve montañoso?",
    answer: "ardenas",
    options: ["Flandes", "Ardenas", "Brabante"],
  },
  {
    country: "Bélgica",
    question: "BEL-48 | ¿Con qué dos países comparte Bélgica una frontera marítima en el mar del Norte?",
    answer: "francia y países bajos",
    options: ["Francia y Países Bajos", "Alemania y Dinamarca", "Reino Unido y Noruega"],
  },
  {
    country: "Bélgica",
    question: "BEL-49 | ¿Qué ciudad belga está más cerca del puerto europeo de Rotterdam y es clave para el comercio internacional?",
    answer: "amberes",
    options: ["Brujas", "Amberes", "Charleroi"],
  },

  // ==========================================
  // PARAGUAY
  // ==========================================
  {
    country: "Paraguay",
    question: "PAR-01 | ¿Cuál es la capital de Paraguay?",
    answer: "asunción",
    options: ["Encarnación", "Asunción", "Ciudad del Este"],
  },
  {
    country: "Paraguay",
    question: "PAR-02 | ¿Qué idioma es cooficial junto al español en Paraguay?",
    answer: "guaraní",
    options: ["Quechua", "Guaraní", "Aymara"],
  },
  {
    country: "Paraguay",
    question: "PAR-03 | ¿Qué río divide Paraguay en región Oriental y Occidental?",
    answer: "paraguay",
    options: ["Paraná", "Paraguay", "Pilcomayo"],
  },
  {
    country: "Paraguay",
    question: "PAR-04 | ¿Qué país NO limita con Paraguay?",
    answer: "chile",
    options: ["Chile", "Bolivia", "Brasil"],
  },
  {
    country: "Paraguay",
    question: "PAR-05 | ¿Cuál es la moneda oficial paraguaya?",
    answer: "guaraní",
    options: ["Peso", "Guaraní", "Real"],
  },
  {
    country: "Paraguay",
    question: "PAR-06 | ¿Qué guerra enfrentó Paraguay contra Argentina, Brasil y Uruguay?",
    answer: "guerra de la triple alianza",
    options: ["Guerra del Pacífico", "Guerra de la Triple Alianza", "Guerra del Chaco"],
  },
  {
    country: "Paraguay",
    question: "PAR-07 | ¿Qué presidente paraguayo lideró el país durante la Guerra de la Triple Alianza?",
    answer: "francisco solano lópez",
    options: ["Stroessner", "Francisco Solano López", "Rodríguez de Francia"],
  },
  {
    country: "Paraguay",
    question: "PAR-08 | ¿Qué conflicto enfrentó a Paraguay y Bolivia entre 1932 y 1935?",
    answer: "guerra del chaco",
    options: ["Guerra del Acre", "Guerra del Chaco", "Guerra de Misiones"],
  },
  {
    country: "Paraguay",
    question: "PAR-09 | ¿Qué dictador gobernó Paraguay entre 1954 y 1989?",
    answer: "alfredo stroessner",
    options: ["Pinochet", "Alfredo Stroessner", "Videla"],
  },
  {
    country: "Paraguay",
    question: "PAR-10 | ¿Cuál es la represa hidroeléctrica compartida con Brasil?",
    answer: "itaipú",
    options: ["Yacyretá", "Itaipú", "Salto Grande"],
  },
  {
    country: "Paraguay",
    question: "PAR-11 | ¿Qué represa comparte Paraguay con Argentina?",
    answer: "yacyretá",
    options: ["Itaipú", "Yacyretá", "Corpus Christi"],
  },
  {
    country: "Paraguay",
    question: "PAR-12 | ¿Qué ciudad paraguaya es famosa por el comercio de frontera con Brasil?",
    answer: "ciudad del este",
    options: ["Pilar", "Ciudad del Este", "Encarnación"],
  },
  {
    country: "Paraguay",
    question: "PAR-13 | ¿Qué famoso salto de agua se encuentra cerca de Paraguay?",
    answer: "iguazú",
    options: ["Niágara", "Iguazú", "Victoria"],
  },
  {
    country: "Paraguay",
    question: "PAR-14 | ¿Cuál es la región natural más extensa del oeste paraguayo?",
    answer: "chaco",
    options: ["Patagonia", "Chaco", "Pampa"],
  },
  {
    country: "Paraguay",
    question: "PAR-15 | ¿Qué clima predomina en gran parte del Chaco paraguayo?",
    answer: "semiárido y caluroso",
    options: ["Polar", "Semiárido y caluroso", "Mediterráneo"],
  },
  {
    country: "Paraguay",
    question: "PAR-16 | ¿Qué árbol y producto tradicional paraguayo se usa para el tereré y mate?",
    answer: "yerba mate",
    options: ["Cedro", "Yerba mate", "Algarrobo"],
  },
  {
    country: "Paraguay",
    question: "PAR-17 | ¿Qué bebida típica paraguaya se consume fría?",
    answer: "tereré",
    options: ["Mate", "Tereré", "Aloja"],
  },
  {
    country: "Paraguay",
    question: "PAR-18 | ¿Qué instrumento musical es símbolo del folclore paraguayo?",
    answer: "arpa paraguaya",
    options: ["Bandoneón", "Arpa paraguaya", "Charango"],
  },
  {
    country: "Paraguay",
    question: "PAR-19 | ¿Qué género musical paraguayo fue creado por José Asunción Flores?",
    answer: "guarania",
    options: ["Chamamé", "Guarania", "Samba"],
  },
  {
    country: "Paraguay",
    question: "PAR-20 | ¿Qué ciudad paraguaya es conocida por sus ruinas jesuíticas?",
    answer: "encarnación",
    options: ["Encarnación", "Concepción", "Villarrica"],
  },
  {
    country: "Paraguay",
    question: "PAR-21 | ¿Qué religión es mayoritaria en Paraguay?",
    answer: "católica",
    options: ["Protestante", "Católica", "Judía"],
  },
  {
    country: "Paraguay",
    question: "PAR-22 | ¿Qué país colonizó el territorio paraguayo?",
    answer: "españa",
    options: ["Portugal", "España", "Francia"],
  },
  {
    country: "Paraguay",
    question: "PAR-23 | ¿Cuál es el principal río utilizado para la navegación comercial paraguaya?",
    answer: "paraguay",
    options: ["Pilcomayo", "Paraguay", "Bermejo"],
  },
  {
    country: "Paraguay",
    question: "PAR-24 | ¿Qué color NO aparece en la bandera paraguaya?",
    answer: "verde",
    options: ["Verde", "Azul", "Rojo"],
  },
  {
    country: "Paraguay",
    question: "PAR-25 | ¿Qué característica única tiene la bandera de Paraguay?",
    answer: "tiene dos escudos distintos en cada lado",
    options: ["Tiene dos escudos distintos en cada lado", "Tiene cuatro colores", "Tiene forma cuadrada"],
  },
  {
    country: "Paraguay",
    question: "PAR-26 | ¿Qué ciudad paraguaya es famosa por el carnaval más importante del país?",
    answer: "encarnación",
    options: ["Encarnación", "Pilar", "Luque"],
  },
  {
    country: "Paraguay",
    question: "PAR-27 | ¿Qué animal típico del Chaco paraguayo es uno de los felinos más grandes de América?",
    answer: "yaguareté",
    options: ["Puma", "Yaguareté", "Ocelote"],
  },
  {
    country: "Paraguay",
    question: "PAR-28 | ¿Qué importante humedal comparte Paraguay con Brasil y Bolivia?",
    answer: "pantanal",
    options: ["Pantanal", "Everglades", "Esteros del Iberá"],
  },
  {
    country: "Paraguay",
    question: "PAR-29 | ¿Qué científico paraguayo fue pionero en bacteriología en Sudamérica?",
    answer: "andrés barbero",
    options: ["Andrés Barbero", "Ramón Carrillo", "Carlos Finlay"],
  },
  {
    country: "Paraguay",
    question: "PAR-30 | ¿Qué ciudad paraguaya está frente a Posadas, Argentina?",
    answer: "encarnación",
    options: ["Pedro Juan Caballero", "Encarnación", "Pilar"],
  },
  {
    country: "Paraguay",
    question: "PAR-31 | ¿Qué puente une Encarnación con Posadas?",
    answer: "san roque gonzález de santa cruz",
    options: ["Puente de la Integración", "San Roque González de Santa Cruz", "General Belgrano"],
  },
  {
    country: "Paraguay",
    question: "PAR-32 | ¿Qué selección eliminó a Paraguay en octavos del Mundial 1998?",
    answer: "francia",
    options: ["Francia", "Alemania", "Nigeria"],
  },
  {
    country: "Paraguay",
    question: "PAR-33 | ¿Qué futbolista francés convirtió el gol de oro ante Paraguay en 1998?",
    answer: "laurent blanc",
    options: ["Zidane", "Laurent Blanc", "Henry"],
  },
  {
    country: "Paraguay",
    question: "PAR-34 | ¿Cuál fue la mejor actuación de Paraguay en los Mundiales?",
    answer: "cuartos de final",
    options: ["Final", "Cuartos de final", "Semifinales"],
  },
  {
    country: "Paraguay",
    question: "PAR-35 | ¿En qué Mundial Paraguay alcanzó los cuartos de final?",
    answer: "2010",
    options: ["1998", "2010", "2006"],
  },
  {
    country: "Paraguay",
    question: "PAR-36 | ¿Qué selección eliminó a Paraguay en el Mundial 2010?",
    answer: "españa",
    options: ["Alemania", "España", "Países Bajos"],
  },
  {
    country: "Paraguay",
    question: "PAR-37 | ¿Qué arquero paraguayo fue famoso por patear tiros libres y penales?",
    answer: "chilavert",
    options: ["Villar", "Chilavert", "Bobadilla"],
  },
  {
    country: "Paraguay",
    question: "PAR-38 | ¿Qué selección eliminó a Paraguay en el Mundial 2002?",
    answer: "alemania",
    options: ["Alemania", "Inglaterra", "Dinamarca"],
  },
  {
    country: "Paraguay",
    question: "PAR-39 | ¿Qué jugador paraguayo erró un penal ante España en Sudáfrica 2010?",
    answer: "cardozo",
    options: ["Cardozo", "Santa Cruz", "Barrios"],
  },
  {
    country: "Paraguay",
    question: "PAR-40 | ¿Qué selección dejó afuera a Paraguay rumbo a Rusia 2018?",
    answer: "perú",
    options: ["Chile", "Perú", "Ecuador"],
  },
  {
    country: "Paraguay",
    question: "PAR-41 | ¿Qué delantero paraguayo jugó en el Bayern Munich?",
    answer: "santa cruz",
    options: ["Santa Cruz", "Cardozo", "Benítez"],
  },
  {
    country: "Paraguay",
    question: "PAR-42 | ¿En qué Mundial la selección de Paraguay llegó por primera vez a cuartos de final?",
    answer: "sudáfrica 2010",
    options: ["México 1986", "Sudáfrica 2010", "Francia 1998", "Alemania 2006"],
  },
  {
    country: "Paraguay",
    question: "PAR-43 | ¿Con qué selecciónes empató con Paraguay en el Mundial 2010?",
    answer: "italia, nueva zelanda",
    options: ["Italia, Nueva zelanda", "España, Italia", "Alemania, Nueva zelanda"],
  },
  {
    country: "Paraguay",
    question: "PAR-44 | ¿Qué jugador paraguayo anotó el gol que eliminó a Japón en octavos de final del Mundial 2010 en la definición por penales?",
    answer: "óscar cardozo",
    options: ["Roque Santa Cruz", "Nelson Haedo Valdez", "Óscar Cardozo", "Lucas Barrios"],
  },
  {
    country: "Paraguay",
    question: "PAR-45 | ¿Qué jugador paraguayo fue capitán en el Mundial 2010?",
    answer: "justo villar",
    options: ["Justo Villar", "Santa Cruz", "Barreto"],
  },

  // ==========================================
  // ARABIA SAUDITA
  // ==========================================
  {
    country: "Arabia",
    question: "ARA-01 | ¿Cuál es la capital de Arabia?",
    answer: "riad",
    options: ["Yeda", "Medina", "Riad", "Dammam"],
  },
  {
    country: "Arabia",
    question: "ARA-02 | ¿Qué ciudad saudita es considerada el lugar más sagrado del islam?",
    answer: "la meca",
    options: ["Doha", "La Meca", "Mascate", "Kuwait"],
  },
  {
    country: "Arabia",
    question: "ARA-03 | ¿Qué color predomina en la bandera saudita?",
    answer: "verde",
    options: ["Azul", "Verde", "Negro", "Blanco"],
  },
  {
    country: "Arabia",
    question: "ARA-04 | ¿Qué símbolo aparece en la bandera de Arabia además del texto islámico?",
    answer: "una espada",
    options: ["Un águila", "Una luna", "Una espada", "Una estrella"],
  },
  {
    country: "Arabia",
    question: "ARA-05 | ¿Cuál es la moneda oficial saudita?",
    answer: "riyal saudita",
    options: ["Dinar", "Riyal saudita", "Dirham", "Peso saudita"],
  },
  {
    country: "Arabia",
    question: "ARA-06 | ¿Qué desierto ocupa gran parte del territorio saudita?",
    answer: "rub al-jali",
    options: ["Sahara", "Rub al-Jali", "Gobi", "Kalahari"],
  },
  {
    country: "Arabia",
    question: "ARA-07 | ¿Qué significa 'Rub al-Jali'?",
    answer: "barrio vacío",
    options: ["Mar de arena", "Desierto infinito", "Barrio vacío", "Tierra roja"],
  },
  {
    country: "Arabia",
    question: "ARA-08 | ¿Qué mar baña la costa oeste saudita?",
    answer: "mar rojo",
    options: ["Mar Negro", "Mar Rojo", "Mar Caspio", "Mar Mediterráneo"],
  },
  {
    country: "Arabia",
    question: "ARA-09 | ¿Qué golfo limita al este con Arabia?",
    answer: "golfo pérsico",
    options: ["Golfo de México", "Golfo de Omán", "Golfo Pérsico", "Golfo de Bengala"],
  },
  {
    country: "Arabia",
    question: "ARA-10 | ¿Cuál es la principal riqueza económica de Arabia?",
    answer: "petróleo",
    options: ["Turismo", "Café", "Petróleo", "Litio"],
  },
  {
    country: "Arabia",
    question: "ARA-11 | ¿Qué empresa petrolera saudita es una de las más valiosas del mundo?",
    answer: "saudi aramco",
    options: ["Shell", "Saudi Aramco", "Petrobras", "Chevron"],
  },
  {
    country: "Arabia",
    question: "ARA-12 | ¿Qué religión es oficial en Arabia?",
    answer: "islam",
    options: ["Judaísmo", "Islam", "Cristianismo", "Hinduismo"],
  },
  {
    country: "Arabia",
    question: "ARA-13 | ¿Qué rama del islam predomina en Arabia?",
    answer: "sunita",
    options: ["Chiita", "Sunita", "Ortodoxa", "Sufí"],
  },
  {
    country: "Arabia",
    question: "ARA-14 | ¿Qué familia gobierna Arabia?",
    answer: "al saud",
    options: ["Al Khalifa", "Al Saud", "Al Sabah", "Al Rashid"],
  },
  {
    country: "Arabia",
    question: "ARA-15 | ¿Qué sistema político tiene Arabia?",
    answer: "monarquía absoluta",
    options: ["República", "Monarquía absoluta", "Monarquía parlamentaria", "Federación"],
  },
  {
    country: "Arabia",
    question: "ARA-16 | ¿Qué idioma es oficial en Arabia?",
    answer: "árabe",
    options: ["Persa", "Árabe", "Turco", "Urdu"],
  },
  {
    country: "Arabia",
    question: "ARA-17 | ¿Cuál es aproximadamente la población saudita?",
    answer: "37 millones",
    options: ["15 millones", "25 millones", "37 millones", "70 millones"],
  },
  {
    country: "Arabia",
    question: "ARA-18 | ¿Qué ciudad recibe millones de peregrinos musulmanes cada año?",
    answer: "la meca",
    options: ["Taif", "Medina", "La Meca", "Tabuk"],
  },
  {
    country: "Arabia",
    question: "ARA-19 | ¿Cómo se llama la peregrinación islámica a La Meca?",
    answer: "hajj",
    options: ["Eid", "Hajj", "Ramadan", "Zakat"],
  },
  {
    country: "Arabia",
    question: "ARA-20 | ¿Qué ciudad saudita es famosa por el comercio y su puerto sobre el Mar Rojo?",
    answer: "yeda",
    options: ["Yeda", "Medina", "Abha", "Najran"],
  },
  {
    country: "Arabia",
    question: "ARA-21 | ¿Qué megaproyecto futurista impulsa Arabia?",
    answer: "neom",
    options: ["Palm City", "NEOM", "Desert Vision", "Green Arabia"],
  },
  {
    country: "Arabia",
    question: "ARA-22 | ¿Qué estructura futurista forma parte de NEOM?",
    answer: "the line",
    options: ["The Circle", "The Wall", "The Line", "The Sky"],
  },
  {
    country: "Arabia",
    question: "ARA-23 | ¿Qué príncipe saudita impulsó el plan 'Visión 2030'?",
    answer: "mohammed bin salman",
    options: ["Faisal", "Mohammed bin Salman", "Abdullah", "Khalid"],
  },
  {
    country: "Arabia",
    question: "ARA-24 | ¿Cuál es el objetivo principal de 'Visión 2030'?",
    answer: "reducir la dependencia del petróleo",
    options: ["Expandir el territorio", "Reducir la dependencia del petróleo", "Cambiar la capital", "Eliminar el turismo"],
  },
  {
    country: "Arabia",
    question: "ARA-25 | ¿En qué Mundial debutó Selección de fútbol de Arabia?",
    answer: "estados unidos 1994",
    options: ["Italia 1990", "EEUU 1994", "Francia 1998", "Corea-Japón 2002"],
  },
  {
    country: "Arabia",
    question: "ARA-26 | ¿Hasta qué instancia llegó Arabia en el Mundial 1994?",
    answer: "octavos de final",
    options: ["Cuartos", "Semifinal", "Octavos de final", "Final"],
  },
  {
    country: "Arabia",
    question: "ARA-27 | ¿Qué jugador saudita marcó un histórico gol contra Bélgica en 1994?",
    answer: "saeed al-owairan",
    options: ["Sami Al-Jaber", "Saeed Al-Owairan", "Salem Al-Dawsari", "Nawaf Al-Temyat"],
  },
  {
    country: "Arabia",
    question: "ARA-28 | ¿Qué selección eliminó a Arabia en octavos de final en 1994?",
    answer: "suecia",
    options: ["Alemania", "Brasil", "Suecia", "Italia"],
  },
  {
    country: "Arabia",
    question: "ARA-29 | ¿Qué selección sorprendió Arabia en el Mundial Qatar 2022?",
    answer: "argentina",
    options: ["Francia", "Brasil", "Argentina", "Portugal"],
  },
  {
    country: "Arabia",
    question: "ARA-30 | ¿Qué futbolista convirtió el gol decisivo ante Argentina en 2022?",
    answer: "salem al-dawsari",
    options: ["Al-Shehri", "Salem Al-Dawsari", "Al-Buraikan", "Al-Faraj"],
  },
  {
    country: "Arabia",
    question: "ARA-31 | ¿Qué entrenador dirigió a Arabia en Qatar 2022?",
    answer: "hervé renard",
    options: ["Jorge Sampaoli", "Marcelo Bielsa", "Hervé Renard", "Didier Deschamps"],
  },
  {
    country: "Arabia",
    question: "ARA-32 | ¿Qué futbolista saudita jugó en el La Liga con el Villarreal?",
    answer: "salem al-dawsari",
    options: ["Sami Al-Jaber", "Salem Al-Dawsari", "Majed Abdullah", "Al-Qahtani"],
  },
  {
    country: "Arabia",
    question: "ARA-33 | ¿Quién es considerado uno de los máximos ídolos del fútbol saudita?",
    answer: "sami al-jaber",
    options: ["Salem Al-Dawsari", "Sami Al-Jaber", "Nawaf Al-Abed", "Yasser Al-Qahtani"],
  },
  {
    country: "Arabia",
    question: "ARA-34 | ¿Qué futbolista saudita convirtió goles en cuatro Mundiales distintos?",
    answer: "sami al-jaber",
    options: ["Salem Al-Dawsari", "Sami Al-Jaber", "Al-Owairan", "Al-Faraj"],
  },
  {
    country: "Arabia",
    question: "ARA-35 | ¿Qué club saudita contrató a Cristiano Ronaldo en 2023?",
    answer: "al-nassr",
    options: ["Al-Hilal", "Al-Ittihad", "Al-Nassr", "Al-Ahli"],
  },
  {
    country: "Arabia",
    question: "ARA-36 | ¿Qué club saudita ganó varias veces la Liga de Campeones de Asia?",
    answer: "al-hilal",
    options: ["Al-Hilal", "Damac", "Abha", "Al-Fateh"],
  },
  {
    country: "Arabia",
    question: "ARA-37 | ¿Qué cantante saudita es muy reconocido en el mundo árabe?",
    answer: "mohamed abdo",
    options: ["Mohamed Abdo", "Amr Diab", "Fairuz", "Nancy Ajram"],
  },
  {
    country: "Arabia",
    question: "ARA-38 | ¿Qué instrumento tradicional árabe es común en Arabia?",
    answer: "oud",
    options: ["Banjo", "Oud", "Violonchelo", "Flauta dulce"],
  },
  {
    country: "Arabia",
    question: "ARA-39 | ¿Cómo se llama la danza tradicional saudita con espadas?",
    answer: "ardah",
    options: ["Dabke", "Ardah", "Flamenco", "Zar"],
  },
  {
    country: "Arabia",
    question: "ARA-40 | ¿Qué animal es típico de los desiertos sauditas?",
    answer: "camello",
    options: ["Reno", "Camello", "Panda", "Alpaca"],
  },
  {
    country: "Arabia",
    question: "ARA-41 | ¿Qué ciudad saudita alberga la tumba del profeta Mahoma?",
    answer: "medina",
    options: ["Yeda", "Medina", "Riad", "Taif"],
  },
  {
    country: "Arabia",
    question: "ARA-42 | ¿Qué torre icónica se encuentra en Riad?",
    answer: "kingdom centre",
    options: ["Burj Khalifa", "Kingdom Centre", "Torre de Pisa", "Torre Azadi"],
  },
  {
    country: "Arabia",
    question: "ARA-43 | ¿Qué país organizará el Copa Mundial de la FIFA 2034?",
    answer: "arabia saudita",
    options: ["Australia", "España", "Arabia", "Marruecos"],
  },
  {
    country: "Arabia",
    question: "ARA-44 | ¿Qué continente integra Arabia?",
    answer: "asia",
    options: ["África", "Europa", "Asia", "Oceanía"],
  },
  {
    country: "Arabia",
    question: "ARA-45 | ¿Qué país limita al norte con Arabia?",
    answer: "jordania",
    options: ["Jordania", "India", "Egipto", "Siria"],
  },
  {
    country: "Arabia",
    question: "ARA-46 | ¿Qué ciudad saudita es conocida como la 'puerta de La Meca'?",
    answer: "yeda",
    options: ["Yeda", "Medina", "Tabuk", "Dammam"],
  },
  {
    country: "Arabia",
    question: "ARA-47 | ¿Qué rey saudita da nombre a un importante aeropuerto internacional?",
    answer: "fahd",
    options: ["Fahd", "Saud", "Faisal", "Khalid"],
  },
  {
    country: "Arabia",
    question: "ARA-48 | ¿Qué país derrotó 8-0 a Arabia en el Mundial 2002?",
    answer: "alemania",
    options: ["Alemania", "Brasil", "Francia", "España"],
  },
  {
    country: "Arabia",
    question: "ARA-49 | ¿Qué selección empató 0-0 con Arabia en el Mundial 1994?",
    answer: "holanda",
    options: ["Marruecos", "Países Bajos", "EEUU", "Holanda"],
  },

  // ==========================================
  // PAÍSES BAJOS
  // ==========================================
  {
    country: "Países Bajos",
    question: "PAI-01 | ¿Cuál es la capital de Países Bajos?",
    answer: "ámsterdam",
    options: ["Róterdam", "Ámsterdam", "Utrecht", "Einfhoven"],
  },
  {
    country: "Países Bajos",
    question: "PAI-02 | ¿Qué ciudad neerlandesa es sede del gobierno y la monarquía?",
    answer: "la haya",
    options: ["Maastricht", "Groningen", "La Haya", "Haarlem"],
  },
  {
    country: "Países Bajos",
    question: "PAI-03 | ¿Qué color identifica históricamente a la selección neerlandesa de fútbol?",
    answer: "naranja",
    options: ["Azul", "Rojo", "Naranja", "Blanco"],
  },
  {
    country: "Países Bajos",
    question: "PAI-04 | ¿Por qué la selección de Países Bajos usa el color naranja?",
    answer: "por la casa de orange-nassau",
    options: ["Por su bandera", "Por la Casa de Orange-Nassau", "Por un río histórico", "Por su ejército"],
  },
  {
    country: "Países Bajos",
    question: "PAI-05 | ¿Cuál es el idioma oficial principal de Países Bajos?",
    answer: "neerlandés/holandes",
    options: ["Alemán", "Francés", "Neerlandés/Holandes", "Flamenco"],
  },
  {
    country: "Países Bajos",
    question: "PAI-06 | ¿Qué mar limita con Países Bajos?",
    answer: "mar del norte",
    options: ["Mar Negro", "Mar Báltico", "Mar del Norte", "Mar Rojo"],
  },
  {
    country: "Países Bajos",
    question: "PAI-07 | ¿Qué porcentaje aproximado del territorio neerlandés está bajo el nivel del mar?",
    answer: "26%",
    options: ["5%", "12%", "26%", "60%"],
  },
  {
    country: "Países Bajos",
    question: "PAI-08 | ¿Cómo se llaman las barreras y muros que protegen al país del agua?",
    answer: "diques",
    options: ["Murallas", "Diques", "Acueductos", "Fortines"],
  },
  {
    country: "Países Bajos",
    question: "PAI-09 | ¿Qué flor es símbolo mundial de Países Bajos?",
    answer: "tulipán",
    options: ["Rosa", "Tulipán", "Lavanda", "Margarita"],
  },
  {
    country: "Países Bajos",
    question: "PAI-10 | ¿Qué ciudad neerlandesa es famosa por sus canales y bicicletas?",
    answer: "ámsterdam",
    options: ["Arnhem", "Ámsterdam", "Delft", "Breda"],
  },
  {
    country: "Países Bajos",
    question: "PAI-11 | ¿Qué pintor neerlandés creó 'La noche estrellada'?",
    answer: "van gogh",
    options: ["Rembrandt", "Vermeer", "Van Gogh", "Mondrian"],
  },
  {
    country: "Países Bajos",
    question: "PAI-12 | ¿Qué famoso pintor neerlandés creó 'La ronda de noche'?",
    answer: "rembrandt",
    options: ["Van Gogh", "Rembrandt", "Rubens", "Monet"],
  },
  {
    country: "Países Bajos",
    question: "PAI-13 | ¿Qué sistema político tiene Países Bajos?",
    answer: "monarquía constitucional",
    options: ["República federal", "Monarquía constitucional", "Monarquía absoluta", "Dictadura parlamentaria"],
  },
  {
    country: "Países Bajos",
    question: "PAI-14 | ¿Quién es actualmente el rey de Países Bajos?",
    answer: "willem-alexander (guillermo)",
    options: ["Fernando II", "Willem-Alexander (Guillermo)", "Felipe", "Máxima"],
  },
  {
    country: "Países Bajos",
    question: "PAI-15 | ¿Qué reina nacida en Argentina forma parte de la monarquía neerlandesa?",
    answer: "máxima zorreguieta",
    options: ["Juliana", "Beatriz", "Máxima Zorreguieta", "Sofía"],
  },
  {
    country: "Países Bajos",
    question: "PAI-16 | ¿Qué ciudad neerlandesa posee uno de los puertos más grandes del mundo?",
    answer: "róterdam",
    options: ["Utrecht", "Eindhoven", "Róterdam", "Zwolle"],
  },
  {
    country: "Países Bajos",
    question: "PAI-17 | ¿Qué inventor neerlandés ayudó al desarrollo del telescopio?",
    answer: "hans lippershey",
    options: ["Galileo", "Hans Lippershey", "Newton", "Edison"],
  },
  {
    country: "Países Bajos",
    question: "PAI-18 | ¿Qué animal marino es protegido en el mar de Wadden, patrimonio natural compartido por Países Bajos?",
    answer: "foca",
    options: ["Delfín", "Foca", "Morsa", "Pingüino"],
  },
  {
    country: "Países Bajos",
    question: "PAI-19 | ¿Qué producto lácteo neerlandés es famoso mundialmente?",
    answer: "queso",
    options: ["Yogur", "Queso", "Crema", "Manteca"],
  },
  {
    country: "Países Bajos",
    question: "PAI-20 | ¿Qué ciudad da nombre a un famoso tipo de queso neerlandés?",
    answer: "gouda",
    options: ["Alkmaar", "Gouda", "Delft", "Breda"],
  },
  {
    country: "Países Bajos",
    question: "PAI-21 | ¿En qué Mundial debutó oficialmente Selección de fútbol de Países Bajos?",
    answer: "1934",
    options: ["1930", "1934", "1938", "1950"],
  },
  {
    country: "Países Bajos",
    question: "PAI-22 | ¿Cuántas finales de Mundial perdió Países Bajos?",
    answer: "3",
    options: ["1", "2", "3", "4"],
  },
  {
    country: "Países Bajos",
    question: "PAI-23 | ¿Contra qué selección perdió la final del Mundial 1974?",
    answer: "alemania occidental",
    options: ["Brasil", "Alemania Occidental", "Argentina", "Italia"],
  },
  {
    country: "Países Bajos",
    question: "PAI-24 | ¿Quién era la gran figura neerlandesa en el Mundial 1974?",
    answer: "johan cruyff",
    options: ["Marco van Basten", "Johan Cruyff", "Ruud Gullit", "Dennis Bergkamp"],
  },
  {
    country: "Países Bajos",
    question: "PAI-25 | ¿Qué estilo revolucionario impulsó Johan Cruyff?",
    answer: "fútbol total",
    options: ["Catenaccio", "Fútbol total", "Tiki-taka", "Juego directo"],
  },
  {
    country: "Países Bajos",
    question: "PAI-26 | ¿Contra qué selección perdió Países Bajos la final de Argentina 1978?",
    answer: "argentina",
    options: ["Brasil", "Alemania", "Argentina", "Francia"],
  },
  {
    country: "Países Bajos",
    question: "PAI-27 | ¿Contra qué selección debutó Selección de fútbol de Países Bajos en el Mundial 2006?",
    answer: "serbia y montenegro",
    options: ["Serbia y Montenegro", "Argentina", "Costa de Marfil", "México"],
  },
  {
    country: "Países Bajos",
    question: "PAI-28 | ¿Quién marcó el gol de volea para Países Bajos en la final de la Euro 1988?",
    answer: "marco van basten",
    options: ["Gullit", "Rijkaard", "Van Persie", "Marco van Basten"],
  },
  {
    country: "Países Bajos",
    question: "PAI-29 | ¿Qué selección venció Países Bajos en la final de la Eurocopa 1988?",
    answer: "unión soviética",
    options: ["España", "Unión Soviética", "Alemania", "Italia"],
  },
  {
    country: "Países Bajos",
    question: "PAI-30 | ¿Qué delantero neerlandés hizo uno de los goles más famosos contra Argentina en Francia 1998?",
    answer: "bergkamp",
    options: ["Van Nistelrooy", "Bergkamp", "Kluivert", "Davids"],
  },
  {
    country: "Países Bajos",
    question: "PAI-31 | ¿Qué jugador neerlandés era apodado 'El Tulipán de Utrecht'?",
    answer: "marco van basten",
    options: ["Gullit", "Cruyff", "Marco van Basten", "Seedorf"],
  },
  {
    country: "Países Bajos",
    question: "PAI-32 | ¿Qué arquero neerlandés atajó dos penales contra Costa Rica en Brasil 2014?",
    answer: "krul",
    options: ["Van der Sar", "Krul", "Cillessen", "Stekelenburg"],
  },
  {
    country: "Países Bajos",
    question: "PAI-33 | ¿Qué entrenador neerlandés reemplazó al arquero antes de los penales en 2014?",
    answer: "louis van gaal",
    options: ["Rijkaard", "Hiddink", "Louis van Gaal", "Koeman"],
  },
  {
    country: "Países Bajos",
    question: "PAI-34 | ¿Qué selección eliminó a Países Bajos en semifinales del Mundial 2014?",
    answer: "argentina",
    options: ["Brasil", "Alemania", "Argentina", "Francia"],
  },
  {
    country: "Países Bajos",
    question: "PAI-35 | ¿Quién erró el PRIMER penal neerlandés en la semifinal del Mundial 2014?",
    answer: "vlaar",
    options: ["Sneijder", "Vlaar", "Robben", "Kuyt"],
  },
  {
    country: "Países Bajos",
    question: "PAI-36 | ¿Qué futbolista neerlandés fue famoso por su velocidad y gambeta entre 2010 y 2014?",
    answer: "robben",
    options: ["Davids", "Robben", "Seedorf", "Stam"],
  },
  {
    country: "Países Bajos",
    question: "PAI-37 | ¿Qué jugador neerlandés convirtió un recordado cabezazo de palomita ante España en 2014?",
    answer: "van persie",
    options: ["Kuyt", "Huntelaar", "Van Persie", "Depay"],
  },
  {
    country: "Países Bajos",
    question: "PAI-38 | ¿Qué resultado obtuvo Países Bajos contra España en el Mundial 2014?",
    answer: "5-1",
    options: ["2-1", "3-2", "5-1", "4-0"],
  },
  {
    country: "Países Bajos",
    question: "PAI-39 | ¿Qué ciudad neerlandesa es famosa por la fabricación de cerámica azul?",
    answer: "delft",
    options: ["Delft", "Utrecht", "Breda", "Tilburg"],
  },
  {
    country: "Países Bajos",
    question: "PAI-40 | ¿Qué medio de transporte es símbolo cultural de Países Bajos?",
    answer: "bicicleta",
    options: ["Moto", "Tranvía", "Bicicleta", "Subte"],
  },
  {
    country: "Países Bajos",
    question: "PAI-41 | ¿Qué río importante atraviesa Países Bajos?",
    answer: "rin",
    options: ["Amazonas", "Rin", "Danubio", "Nilo"],
  },
  {
    country: "Países Bajos",
    question: "PAI-42 | ¿Qué filósofo neerlandés del siglo XVII escribió sobre ética y racionalismo?",
    answer: "spinoza",
    options: ["Sócrates", "Descartes", "Spinoza", "Kant"],
  },
  {
    country: "Países Bajos",
    question: "PAI-43 | ¿Qué científico neerlandés ganó el Nobel y dio nombre a una fuerza eléctrica?",
    answer: "lorentz",
    options: ["Tesla", "Lorentz", "Edison", "Maxwell"],
  },
  {
    country: "Países Bajos",
    question: "PAI-44 | ¿Qué jugador neerlandés fue Balón de Oro en 1987, 1989 y 1992?",
    answer: "van basten",
    options: ["Gullit", "Rijkaard", "Van Basten", "Bergkamp"],
  },
  {
    country: "Países Bajos",
    question: "PAI-45 | ¿Qué entrenador llevó a Países Bajos a la final del Mundial 2010?",
    answer: "bert van marwijk",
    options: ["Koeman", "Van Gaal", "Bert van Marwijk", "Hiddink"],
  },
  {
    country: "Países Bajos",
    question: "PAI-46 | ¿Contra qué selección perdió Países Bajos la final del Mundial 2010?",
    answer: "españa",
    options: ["Alemania", "España", "Brasil", "Uruguay"],
  },
  {
    country: "Países Bajos",
    question: "PAI-47 | ¿Qué jugador neerlandés recibió una patada famosa en la final del Mundial 2010?",
    answer: "xabi alonso",
    options: ["Iniesta", "Xavi", "Xabi Alonso", "Villa"],
  },
  {
    country: "Países Bajos",
    question: "PAI-48 | ¿Qué futbolista neerlandés fue expulsado en la final de 2010 por una violenta entrada?",
    answer: "heitinga",
    options: ["Sneijder", "Nigel de Jong", "Heitinga", "Van Bommel"],
  },
  {
    country: "Países Bajos",
    question: "PAI-49 | ¿Qué ciudad neerlandesa alberga el museo de Van Gogh?",
    answer: "ámsterdam",
    options: ["Eindhoven", "Utrecht", "Ámsterdam", "Haarlem"],
  },
  {
    country: "Países Bajos",
    question: "PAI-50 | ¿Qué selección eliminó a Países Bajos en Qatar 2022 por penales?",
    answer: "argentina",
    options: ["Brasil", "Croacia", "Francia", "Argentina"],
  },

  // ==========================================
  // MÉXICO
  // ==========================================
  {
    country: "México",
    question: "MEX-01 | ¿Cuál es la capital de México?",
    answer: "ciudad de méxico",
    options: ["Guadalajara", "Monterrey", "Ciudad de México", "Puebla"],
  },
  {
    country: "México",
    question: "MEX-02 | ¿Qué colores tiene la bandera mexicana?",
    answer: "verde, blanco y rojo",
    options: ["Azul, blanco y rojo", "Verde, blanco y rojo", "Amarillo, verde y azul", "Blanco y rojo"],
  },
  {
    country: "México",
    question: "MEX-03 | ¿Qué animal aparece en el escudo de México?",
    answer: "águila",
    options: ["Cóndor", "Águila", "Jaguar", "Puma"],
  },
  {
    country: "México",
    question: "MEX-04 | ¿Sobre qué está parada el águila del escudo mexicano?",
    answer: "un cactus",
    options: ["Un cactus", "Una roca", "Una montaña", "Un árbol"],
  },
  {
    country: "México",
    question: "MEX-05 | ¿Qué civilización construyó Chichén Itzá?",
    answer: "maya",
    options: ["Azteca", "Maya", "Inca", "Olmeca"],
  },
  {
    country: "México",
    question: "MEX-06 | ¿Qué famosa pirámide se encuentra en Chichén Itzá?",
    answer: "kukulkán",
    options: ["Pirámide del Sol", "Kukulkán", "Templo Mayor", "Teotihuacán"],
  },
  {
    country: "México",
    question: "MEX-07 | ¿Qué ciudad mexicana es conocida por sus playas y turismo internacional?",
    answer: "cancún",
    options: ["Toluca", "Cancún", "León", "Querétaro"],
  },
  {
    country: "México",
    question: "MEX-08 | ¿Qué océano se encuentra al oeste de México?",
    answer: "pacífico",
    options: ["Atlántico", "Índico", "Pacífico", "Ártico"],
  },
  {
    country: "México",
    question: "MEX-09 | ¿Qué golfo se encuentra al este de México?",
    answer: "golfo de méxico",
    options: ["Golfo de Panamá", "Golfo de California", "Golfo de México", "Golfo Pérsico"],
  },
  {
    country: "México",
    question: "MEX-10 | ¿Qué idioma oficial tiene México a nivel federal?",
    answer: "no tiene idioma oficial único",
    options: ["Español únicamente", "Español y maya", "No tiene idioma oficial único", "Náhuatl"],
  },
  {
    country: "México",
    question: "MEX-11 | ¿Qué moneda se utiliza en México?",
    answer: "peso mexicano",
    options: ["Peso mexicano", "Dólar mexicano", "Quetzal", "Bolívar"],
  },
  {
    country: "México",
    question: "MEX-12 | ¿Qué comida mexicana es Patrimonio Cultural Inmaterial de la Humanidad?",
    answer: "cocina tradicional mexicana",
    options: ["Pizza", "Cocina tradicional mexicana", "Hamburguesa", "Sushi"],
  },
  {
    country: "México",
    question: "MEX-13 | ¿Qué picante es muy usado en la gastronomía mexicana?",
    answer: "chile",
    options: ["Wasabi", "Ají amarillo", "Chile", "Curry"],
  },
  {
    country: "México",
    question: "MEX-14 | ¿Qué celebración mexicana honra a los difuntos?",
    answer: "día de los muertos",
    options: ["Carnaval", "Día de los Muertos", "Año Nuevo Azteca", "Pascua Maya"],
  },
  {
    country: "México",
    question: "MEX-15 | ¿Qué artista mexicana fue famosa por sus autorretratos?",
    answer: "frida kahlo",
    options: ["Selena", "Frida Kahlo", "Sor Juana", "María Félix"],
  },
  {
    country: "México",
    question: "MEX-16 | ¿Qué muralista mexicano pintó grandes obras sociales e históricas?",
    answer: "diego rivera",
    options: ["Picasso", "Diego Rivera", "Dalí", "Botero"],
  },
  {
    country: "México",
    question: "MEX-17 | ¿Qué famoso luchador mexicano utilizaba máscara plateada?",
    answer: "el santo",
    options: ["Blue Demon", "El Santo", "Huracán Ramírez", "Mil Máscaras"],
  },
  {
    country: "México",
    question: "MEX-18 | ¿Qué ciudad mexicana alberga el estadio Azteca?",
    answer: "ciudad de méxico",
    options: ["Monterrey", "Puebla", "Ciudad de México", "Guadalajara"],
  },
  {
    country: "México",
    question: "MEX-19 | ¿Qué estadio fue sede de dos finales de Mundial?",
    answer: "azteca",
    options: ["Maracaná", "Azteca", "Monumental", "Wembley"],
  },
  {
    country: "México",
    question: "MEX-20 | ¿Qué jugador marcó el 'Gol del Siglo' en el estadio Azteca en 1986?",
    answer: "diego maradona",
    options: ["Pelé", "Ronaldo", "Diego Maradona", "Platini"],
  },
  {
    country: "México",
    question: "MEX-21 | ¿En qué años México organizó la Copa Mundial de la FIFA antes de 2026?",
    answer: "1970 y 1986",
    options: ["1966 y 1994", "1970 y 1986", "1958 y 1978", "1982 y 1990"],
  },
  {
    country: "México",
    question: "MEX-22 | ¿Qué selección ganó el Mundial 1970 en México?",
    answer: "brasil",
    options: ["Alemania", "Argentina", "Brasil", "Italia"],
  },
  {
    country: "México",
    question: "MEX-23 | ¿Qué selección ganó el Mundial 1986 disputado en México?",
    answer: "argentina",
    options: ["Alemania", "Brasil", "Argentina", "Francia"],
  },
  {
    country: "México",
    question: "MEX-24 | ¿Cuál es el apodo de la selección mexicana de fútbol?",
    answer: "el tri",
    options: ["La Roja", "El Tri", "Los Azules", "Los Charros"],
  },
  {
    country: "México",
    question: "MEX-25 | ¿Qué arquero mexicano fue figura en los Mundiales de 2014 y 2018?",
    answer: "ochoa",
    options: ["Campos", "Ochoa", "Corona", "Talavera"],
  },
  {
    country: "México",
    question: "MEX-26 | ¿Qué arquero mexicano usaba uniformes muy coloridos en los años 90?",
    answer: "campos",
    options: ["Ochoa", "Campos", "Carbajal", "Corona"],
  },
  {
    country: "México",
    question: "MEX-27 | ¿Qué selección eliminó a México en octavos del Mundial 2014?",
    answer: "países bajos",
    options: ["Alemania", "Países Bajos", "Argentina", "Brasil"],
  },
  {
    country: "México",
    question: "MEX-28 | ¿Qué neerlandés convirtió el penal decisivo ante México en 2014?",
    answer: "huntelaar",
    options: ["Robben", "Sneijder", "Huntelaar", "Van Persie"],
  },
  {
    country: "México",
    question: "MEX-29 | ¿Qué jugador mexicano anotó contra Alemania en el Mundial 2018?",
    answer: "lozano",
    options: ["Chicharito", "Lozano", "Guardado", "Jiménez"],
  },
  {
    country: "México",
    question: "MEX-30 | ¿Qué selección derrotó México 1-0 en Rusia 2018?",
    answer: "alemania",
    options: ["Francia", "Brasil", "Alemania", "Portugal"],
  },
  {
    country: "México",
    question: "MEX-31 | ¿Qué delantero mexicano es apodado 'Chicharito'?",
    answer: "javier hernández",
    options: ["Hugo Sánchez", "Javier Hernández", "Cuauhtémoc Blanco", "Rafa Márquez"],
  },
  {
    country: "México",
    question: "MEX-32 | ¿Qué defensor mexicano jugó cinco Mundiales?",
    answer: "márquez",
    options: ["Guardado", "Márquez", "Torrado", "Salcido"],
  },
  {
    country: "México",
    question: "MEX-33 | ¿Qué jugador mexicano realizó un penal 'LA PICO' famoso en Francia 1998?",
    answer: "cuauhtémoc blanco",
    options: ["Borgetti", "Cuauhtémoc Blanco", "Hernández", "Márquez"],
  },
  {
    country: "México",
    question: "MEX-34 | ¿Qué animal típico mexicano es símbolo nacional junto al águila?",
    answer: "serpiente",
    options: ["Jaguar", "Serpiente", "Puma", "Lobo"],
  },
  {
    country: "México",
    question: "MEX-35 | ¿Qué península mexicana separa el Golfo de México del Caribe?",
    answer: "yucatán",
    options: ["Yucatán", "California", "Sonora", "Oaxaca"],
  },
  {
    country: "México",
    question: "MEX-36 | ¿Qué cantante mexicano es conocido como 'El Sol de México'?",
    answer: "luis miguel",
    options: ["Juan Gabriel", "Luis Miguel", "Vicente Fernández", "Marco Antonio Solís"],
  },
  {
    country: "México",
    question: "MEX-37 | ¿Qué género musical es tradicional de México?",
    answer: "mariachi",
    options: ["Tango", "Mariachi", "Samba", "Flamenco"],
  },
  {
    country: "México",
    question: "MEX-38 | ¿Qué instrumento es típico en los mariachis?",
    answer: "trompeta",
    options: ["Gaita", "Trompeta", "Arpa paraguaya", "Bandoneón"],
  },
  {
    country: "México",
    question: "MEX-39 | ¿Qué volcán mexicano es uno de los más famosos?",
    answer: "popocatépetl",
    options: ["Everest", "Popocatépetl", "Aconcagua", "Vesubio"],
  },
  {
    country: "México",
    question: "MEX-40 | ¿Qué civilización fundó Tenochtitlán?",
    answer: "azteca",
    options: ["Maya", "Azteca", "Inca", "Tolteca"],
  },
  {
    country: "México",
    question: "MEX-41 | ¿Qué país limita al norte con México?",
    answer: "estados unidos",
    options: ["Canadá", "Guatemala", "EEUU", "Belice"],
  },
  {
    country: "México",
    question: "MEX-42 | ¿Qué luchador mexicano popularizó la 'hurracarrana'?",
    answer: "huracán ramírez",
    options: ["El Santo", "Huracán Ramírez", "Blue Demon", "Mil Máscaras"],
  },
  {
    country: "México",
    question: "MEX-43 | ¿Qué mexicano fue presidente y símbolo de la Revolución Mexicana?",
    answer: "pancho villa",
    options: ["Pancho Villa", "Bolívar", "Perón", "San Martín"],
  },
  {
    country: "México",
    question: "MEX-44 | ¿Qué país compartirá con México la organización del Mundial 2026?",
    answer: "estados unidos y canadá",
    options: ["Brasil y Argentina", "España y Portugal", "EEUU y Canadá", "Colombia y Perú"],
  },
  {
    country: "México",
    question: "MEX-45 | ¿Qué lago rodeaba originalmente a la ciudad de Tenochtitlán?",
    answer: "lago texcoco",
    options: ["Lago Titicaca", "Lago Texcoco", "Lago Chapala", "Lago Atitlán"],
  },
  {
    country: "México",
    question: "MEX-46 | ¿Qué dios azteca estaba relacionado con el sol y la guerra?",
    answer: "huitzilopochtli",
    options: ["Quetzalcóatl", "Tláloc", "Huitzilopochtli", "Tezcatlipoca"],
  },
  {
    country: "México",
    question: "MEX-47 | ¿Qué pueblo indígena fue enemigo de los aztecas y ayudó a Hernán Cortés en la conquista?",
    answer: "tlaxcaltecas",
    options: ["Mayas", "Olmecas", "Tlaxcaltecas", "Incas"],
  },

  // ==========================================
  // SUIZA (SUI)
  // ==========================================
  {
    country: "Suiza",
    question: "SUI-1 | ¿Cuál es la capital de Suiza?",
    answer: "berna",
    options: ["Zúrich", "Ginebra", "Berna", "Lausana"],
  },
  {
    country: "Suiza",
    question: "SUI-2 | ¿Qué ciudad suiza es sede de muchas organizaciones internacionales?",
    answer: "ginebra",
    options: ["Lucerna", "Basilea", "Ginebra", "Lugano"],
  },
  {
    country: "Suiza",
    question: "SUI-3 | ¿Qué colores tiene la bandera de Suiza?",
    answer: "rojo y blanco",
    options: ["Azul y blanco", "Rojo y blanco", "Negro y rojo", "Verde y blanco"],
  },
  {
    country: "Suiza",
    question: "SUI-4 | Según las estimaciones más recientes, ¿cuántos habitantes tiene aproximadamente Suiza?",
    answer: "9 millones",
    options: ["13 millones", "7 millones", "9 millones", "11 millones"],
  },
  {
    country: "Suiza",
    question: "SUI-5 | ¿Qué símbolo aparece en la bandera suiza?",
    answer: "cruz blanca",
    options: ["León", "Cruz blanca", "Águila", "Estrella"],
  },
  {
    country: "Suiza",
    question: "SUI-6 | ¿Qué cadena montañosa ocupa gran parte de Suiza?",
    answer: "alpes",
    options: ["Andes", "Alpes", "Himalaya", "Pirineos"],
  },
  {
    country: "Suiza",
    question: "SUI-7 | ¿Cuál es una de las montañas más famosas de Suiza?",
    answer: "matterhorn / el monte cervino",
    options: ["Everest", "Aconcagua", "Matterhorn / El Monte Cervino", "Monmatheu / El Monte Serrito"],
  },
  {
    country: "Suiza",
    question: "SUI-8 | ¿Qué famoso tren panorámico cruza los Alpes suizos se hace llamar el tren expreso más lento del mundo?",
    answer: "glacier express",
    options: ["Orient Express", "Glacier Express", "Eurostar", "Bullet Train"],
  },
  {
    country: "Suiza",
    question: "SUI-9 | ¿Qué tipo de sistema político tiene Suiza?",
    answer: "democracia federal semidirecta",
    options: ["Monarquía parlamentaria", "Democracia federal semidirecta", "Dictadura militar", "República presidencialista"],
  },
  {
    country: "Suiza",
    question: "SUI-10 | ¿Cuál es el cuarto idioma oficial suizo despues del aleman, suizo, italiano?",
    answer: "romanche",
    options: ["Romanche", "Catalán", "Flamenco", "Euskera"],
  },
  {
    country: "Suiza",
    question: "SUI-11 | ¿Qué moneda utiliza Suiza?",
    answer: "franco suizo",
    options: ["Euro", "Franco suizo", "Corona", "Libra"],
  },
  {
    country: "Suiza",
    question: "SUI-12 | ¿Qué ciudad es considerada el centro financiero más importante de Suiza?",
    answer: "zúrich",
    options: ["Berna", "Zúrich", "Friburgo", "Davos"],
  },
  {
    country: "Suiza",
    question: "SUI-13 | ¿Qué organización internacional tiene sede en Ginebra?",
    answer: "onu",
    options: ["OTAN", "ONU", "Mercosur", "FIFA"],
  },
  {
    country: "Suiza",
    question: "SUI-14 | ¿En qué ciudad está la sede de FIFA?",
    answer: "zúrich",
    options: ["Basilea", "Berna", "Zúrich", "Lausana"],
  },
  {
    country: "Suiza",
    question: "SUI-15 | ¿Qué organización olímpica tiene sede en Lausana?",
    answer: "coi",
    options: ["UEFA", "COI", "Conmebol", "ATP"],
  },
  {
    country: "Suiza",
    question: "SUI-16 | En Suiza, el presidente del país ocupa el cargo durante:",
    answer: "1 año",
    options: ["8 años", "4 años", "1 año", "5 años"],
  },
  {
    country: "Suiza",
    question: "SUI-17 | ¿En qué guerra mundial Suiza mantuvo neutralidad?",
    answer: "en ambas",
    options: ["Solo en la Primera", "Solo en la Segunda", "En ambas"],
  },
  {
    country: "Suiza",
    question: "SUI-18 | ¿Qué invento asociado al ejército suizo se volvió famoso mundialmente?",
    answer: "navaja suiza",
    options: ["Linterna LED", "Navaja suiza", "Brújula", "Cantimplora"],
  },
  {
    country: "Suiza",
    question: "SUI-19 | ¿Qué producto alimenticio suizo es reconocido mundialmente?",
    answer: "chocolate",
    options: ["Sushi", "Chocolate", "Tacos", "Paella"],
  },
  {
    country: "Suiza",
    question: "SUI-20 | ¿Qué marca de chocolate nació en Suiza?",
    answer: "lindt",
    options: ["Hershey’s", "Lindt", "Milka", "Snickers"],
  },
  {
    country: "Suiza",
    question: "SUI-21 | ¿Qué científico vivió gran parte de su vida en Suiza, cerca de 20 años?",
    answer: "einstein",
    options: ["Newton", "Einstein", "Galileo", "Darwin"],
  },
  {
    country: "Suiza",
    question: "SUI-22 | ¿En qué ciudad suiza trabajó Albert Einstein cuando desarrolló parte de su teoría?",
    answer: "berna",
    options: ["Berna", "Zúrich", "Basilea", "Lugano"],
  },
  {
    country: "Suiza",
    question: "SUI-23 | ¿Qué lago comparte Suiza con Francia?",
    answer: "lemán",
    options: ["Titicaca", "Lemán", "Victoria", "Como"],
  },
  {
    country: "Suiza",
    question: "SUI-24 | ¿Qué ciudad suiza es famosa por su festival de jazz?",
    answer: "montreux",
    options: ["Davos", "Montreux", "Lugano", "Basilea"],
  },
  {
    country: "Suiza",
    question: "SUI-25 | ¿Qué famoso tenista suizo ganó 20 Grand Slams?",
    answer: "roger federer",
    options: ["Nadal", "Djokovic", "Roger Federer", "Wawrinka"],
  },
  {
    country: "Suiza",
    question: "SUI-26 | ¿Qué ciudad vio nacer a Roger Federer?",
    answer: "basilea",
    options: ["Basilea", "Ginebra", "Berna", "Lausana"],
  },
  {
    country: "Suiza",
    question: "SUI-27 | ¿Qué rival derrotó a Federer en la final de Wimbledon 2008?",
    answer: "nadal",
    options: ["Djokovic", "Murray", "Nadal", "Sampras"],
  },
  {
    country: "Suiza",
    question: "SUI-28 | ¿Qué selección eliminó a Selección de fútbol de Suiza en octavos del Mundial 2006?",
    answer: "ucrania",
    options: ["Francia", "Ucrania", "Brasil", "España"],
  },
  {
    country: "Suiza",
    question: "SUI-29 | ¿Qué hecho curioso ocurrió con Suiza en el Mundial 2006?",
    answer: "no recibió goles en todo el torneo",
    options: ["No hizo goles", "No recibió goles en todo el torneo", "Ganó todos los partidos", "Llegó a semifinales"],
  },
  {
    country: "Suiza",
    question: "SUI-30 | ¿Qué selección eliminó a Suiza en el Mundial 2014?",
    answer: "argentina",
    options: ["Francia", "Bélgica", "Argentina", "Brasil"],
  },
  {
    country: "Suiza",
    question: "SUI-31 | ¿Quién marcó el gol agónico para Argentina contra Suiza en 2014?",
    answer: "di maría",
    options: ["Higuaín", "Messi", "Di María", "Agüero"],
  },
  {
    country: "Suiza",
    question: "SUI-32 | ¿Quién fue el entrenador de Suiza en el Mundial de Brasil 2014?",
    answer: "ottmar hitzfeld",
    options: ["Vladimir Petković", "Ottmar Hitzfeld", "Murat Yakin", "Köbi Kuhn"],
  },
  {
    country: "Suiza",
    question: "SUI-33 | ¿Qué jugador suizo es famoso por su potente zurda y origen kosovar?",
    answer: "shaqiri",
    options: ["Lichtsteiner", "Xhaka", "Shaqiri", "Frei"],
  },
  {
    country: "Suiza",
    question: "SUI-34 | ¿Quién fue el máximo goleador de Suiza en el Mundial de Brasil 2014?",
    answer: "xherdan shaqiri",
    options: ["Granit Xhaka", "Haris Seferović", "Xherdan Shaqiri", "Josip Drmić"],
  },
  {
    country: "Suiza",
    question: "SUI-35 | ¿Qué dupla de defensores centrales fue la más utilizada por Suiza en el Mundial 2014?",
    answer: "fabian schär y steve von bergen",
    options: ["Manuel Akanji y Elvedi", "Fabian Schär y Steve von Bergen", "Djourou y Senderos", "Lichtsteiner y Rodríguez"],
  },
  {
    country: "Suiza",
    question: "SUI-36 | ¿Cuál fue la dupla central que más partidos jugó como titular para Suiza en el Mundial 2018?",
    answer: "manuel akanji y fabian schär",
    options: ["Manuel Akanji y Fabian Schär", "Johan Djourou y Senderos", "Lichtsteiner y Rodríguez", "Xhaka y Behrami"],
  },
  {
    country: "Suiza",
    question: "SUI-37 | ¿Qué famoso reloj de lujo es de origen suizo?",
    answer: "rolex",
    options: ["Casio", "Rolex", "Timex", "Seiko"],
  },
  {
    country: "Suiza",
    question: "SUI-38 | ¿Qué defensor suizo convirtió un gol ante Ecuador en el Mundial 2014?",
    answer: "haris seferović",
    options: ["Ricardo Rodríguez", "Fabian Schär", "Haris Seferović", "Stephan Lichtsteiner"],
  },
  {
    country: "Suiza",
    question: "SUI-39 | ¿Qué instrumento típico alpino se relaciona con Suiza?",
    answer: "alphorn",
    options: ["Bandoneón", "Alphorn", "Gaita", "Sitar"],
  },
  {
    country: "Suiza",
    question: "SUI-40 | ¿Qué deporte de invierno es muy popular en Suiza?",
    answer: "esquí",
    options: ["Surf", "Esquí", "Rugby", "Cricket"],
  },
  {
    country: "Suiza",
    question: "SUI-41 | ¿Qué ciudad suiza es famosa por el Foro Económico Mundial?",
    answer: "davos",
    options: ["Davos", "Basilea", "Berna", "Lugano"],
  },
  {
    country: "Suiza",
    question: "SUI-42 | ¿Qué río importante nace en los Alpes suizos?",
    answer: "rin",
    options: ["Amazonas", "Rin", "Nilo", "Yangtsé"],
  },
  {
    country: "Suiza",
    question: "SUI-43 | ¿Qué famoso puente cubierto está en Lucerna?",
    answer: "kapellbrücke",
    options: ["Golden Gate", "Kapellbrücke", "Tower Bridge", "Rialto"],
  },
  {
    country: "Suiza",
    question: "SUI-44 | ¿Qué animal es símbolo frecuente de los Alpes suizos?",
    answer: "cabra montés",
    options: ["Canguro", "Cabra montés", "Camello", "Tigre segoz"],
  },
  {
    country: "Suiza",
    question: "SUI-45 | ¿Qué capitán histórico de Suiza disputó los Mundiales 2006, 2010 y 2014?",
    answer: "stephan lichtsteiner",
    options: ["Granit Xhaka", "Stephan Lichtsteiner", "Valon Behrami", "Xherdan Shaqiri"],
  },
  {
    country: "Suiza",
    question: "SUI-46 | ¿Qué plato típico suizo consiste en queso derretido compartido?",
    answer: "fondue",
    options: ["Raclette", "Fondue", "Rösti", "Goulash"],
  },
  {
    country: "Suiza",
    question: "SUI-47 | ¿Qué ciudad suiza limita casi con Francia y Alemania al mismo tiempo?",
    answer: "basilea",
    options: ["Basilea", "Davos", "Sion", "Friburgo"],
  },
  {
    country: "Suiza",
    question: "SUI-48 | ¿Qué país derrotó a Suiza 5-2 en el Mundial 2022?",
    answer: "portugal",
    options: ["Serbia", "Brasil", "Portugal", "Francia"],
  },
  {
    country: "Suiza",
    question: "SUI-49 | ¿Qué figura portuguesa hizo un hat-trick ante Suiza en Qatar 2022?",
    answer: "gonçalo ramos",
    options: ["Cristiano Ronaldo", "Bruno Fernandes", "Gonçalo Ramos", "João Félix"],
  },
  {
    country: "Suiza",
    question: "SUI-50 | ¿Qué selección eliminó a Suiza en octavos del Mundial 2022?",
    answer: "portugal",
    options: ["España", "Portugal", "Marruecos", "Croacia"],
  },

  // ==========================================
  // EGIPTO (EGY)
  // ==========================================
  {
    country: "Egipto",
    question: "EGY-1 | ¿Cuál es la capital de Egipto?",
    answer: "el cairo",
    options: ["Alejandría", "Giza", "El Cairo", "Luxor"],
  },
  {
    country: "Egipto",
    question: "EGY-2 | ¿Qué río atraviesa gran parte de Egipto?",
    answer: "nilo",
    options: ["Amazonas", "Nilo", "Congo", "Níger"],
  },
  {
    country: "Egipto",
    question: "EGY-3 | ¿Cuál es la pirámide más grande de Egipto?",
    answer: "gran pirámide de keops",
    options: ["Pirámide Roja", "Pirámide de Micerino", "Pirámide de Kefrén", "Gran Pirámide de Keops"],
  },
  {
    country: "Egipto",
    question: "EGY-4 | ¿Qué faraón mandó construir la Gran Pirámide de Giza?",
    answer: "keops",
    options: ["Ramsés II", "Tutankamón", "Keops", "Akenatón"],
  },
  {
    country: "Egipto",
    question: "EGY-5 | ¿Cómo se llama la famosa estatua ubicada junto a las pirámides de Giza?",
    answer: "esfinge de giza",
    options: ["Obelisco Real", "Esfinge de Giza", "León del Nilo", "Guardián Solar"],
  },
  {
    country: "Egipto",
    question: "EGY-6 | ¿Cuál es el sistema político actual de Egipto?",
    answer: "república semipresidencialista",
    options: ["Monarquía absoluta", "República semipresidencialista", "Imperio federal", "Dictadura militar oficial"],
  },
  {
    country: "Egipto",
    question: "EGY-7 | ¿Qué mar limita al norte de Egipto?",
    answer: "mar mediterráneo",
    options: ["Mar Rojo", "Mar Caspio", "Mar Mediterráneo", "Mar Negro"],
  },
  {
    country: "Egipto",
    question: "EGY-8 | ¿Qué canal estratégico conecta el Mediterráneo con el Mar Rojo?",
    answer: "canal de suez",
    options: ["Canal de Panamá", "Canal de Suez", "Canal de Corinto", "Canal de Kiel"],
  },
  {
    country: "Egipto",
    question: "EGY-9 | ¿Aproximadamente cuántos habitantes tiene Egipto según estimaciones recientes?",
    answer: "115 millones",
    options: ["45 millones", "70 millones", "115 millones", "180 millones"],
  },
  {
    country: "Egipto",
    question: "EGY-10 | ¿Qué desierto ocupa gran parte del territorio egipcio?",
    answer: "desierto del sahara",
    options: ["Desierto de Atacama", "Desierto del Sahara", "Desierto de Mojave", "Desierto de Gobi"],
  },
  {
    country: "Egipto",
    question: "EGY-11 | ¿En qué Mundial volvió Egipto a participar después de 28 años?",
    answer: "2018",
    options: ["2010", "2014", "2018", "2022"],
  },
  {
    country: "Egipto",
    question: "EGY-12 | ¿Qué figura egipcia fue la gran estrella en el Mundial 2018?",
    answer: "mohamed salah",
    options: ["Ahmed Hegazi", "Mohamed Salah", "Elneny", "Trezeguet"],
  },
  {
    country: "Egipto",
    question: "EGY-13 | ¿Contra qué selección jugó Egipto el partido inaugural del Mundial 2018?",
    answer: "uruguay",
    options: ["Uruguay", "Rusia", "Arabia", "Marruecos"],
  },
  {
    country: "Egipto",
    question: "EGY-14 | ¿Qué famoso delantero egipcio jugó en el Liverpool FC?",
    answer: "salah",
    options: ["Aboutrika", "Hassan", "Salah", "Hossam Ghaly"],
  },
  {
    country: "Egipto",
    question: "EGY-15 | ¿Qué ciudad egipcia es famosa por albergar las pirámides?",
    answer: "giza",
    options: ["Luxor", "Giza", "Asuán", "Port Said"],
  },
  {
    country: "Egipto",
    question: "EGY-16 | ¿Qué idioma oficial se habla en Egipto?",
    answer: "árabe",
    options: ["Persa", "Turco", "Árabe", "Hebreo"],
  },
  {
    country: "Egipto",
    question: "EGY-17 | ¿Qué religión es mayoritaria en Egipto?",
    answer: "islam",
    options: ["Cristianismo ortodoxo", "Islam", "Judaísmo", "Hinduismo"],
  },
  {
    country: "Egipto",
    question: "EGY-18 | ¿Qué selección eliminó a Egipto del Mundial 1990?",
    answer: "no avanzó de fase de grupos",
    options: ["Países Bajos", "Inglaterra", "Irlanda", "No avanzó de fase de grupos"],
  },
  {
    country: "Egipto",
    question: "EGY-19 | ¿En qué país se disputó el Mundial 1990 donde participó Egipto?",
    answer: "italia",
    options: ["Francia", "Italia", "México", "España"],
  },
  {
    country: "Egipto",
    question: "EGY-20 | ¿Qué resultado histórico consiguió Egipto ante Países Bajos en 1990?",
    answer: "empató 1-1",
    options: ["Ganó 2-0", "Empató 1-1", "Ganó 1-0", "Perdió 5-0"],
  },
  {
    country: "Egipto",
    question: "EGY-21 | ¿Qué famoso faraón fue encontrado casi intacto en su tumba en 1922?",
    answer: "tutankamón",
    options: ["Ramsés III", "Tutankamón", "Amenhotep", "Seti I"],
  },
  {
    country: "Egipto",
    question: "EGY-22 | ¿Cuál es la segunda pirámide más grande de Giza?",
    answer: "kefrén",
    options: ["Micerino", "Kefrén", "Saqqara", "Dahshur"],
  },
  {
    country: "Egipto",
    question: "EGY-23 | ¿Qué animal era considerado sagrado en el antiguo Egipto?",
    answer: "gato",
    options: ["Tigre", "Lobo", "Gato", "Oso"],
  },
  {
    country: "Egipto",
    question: "EGY-24 | ¿Qué escritura utilizaban los antiguos egipcios?",
    answer: "jeroglíficos",
    options: ["Cuneiforme", "Jeroglíficos", "Latín antiguo", "Sánscrito"],
  },
  {
    country: "Egipto",
    question: "EGY-25 | ¿Cuál es el principal recurso agrícola de Egipto gracias al Nilo?",
    answer: "algodón",
    options: ["Café", "Arroz", "Algodón", "Soja"],
  },
  {
    country: "Egipto",
    question: "EGY-26 | ¿Qué mar limita al este de Egipto?",
    answer: "mar rojo",
    options: ["Mar Rojo", "Mar Negro", "Mar Arábigo", "Mar Báltico"],
  },
  {
    country: "Egipto",
    question: "EGY-27 | ¿Qué selección goleó 3-1 a Egipto en el Mundial 2018?",
    answer: "rusia",
    options: ["Rusia", "Uruguay", "Arabia", "España"],
  },
  {
    country: "Egipto",
    question: "EGY-28 | ¿Cuál es la moneda oficial de Egipto?",
    answer: "libra egipcia",
    options: ["Dinar", "Libra egipcia", "Peso egipcio", "Franco egipcio"],
  },
  {
    country: "Egipto",
    question: "EGY-29 | ¿Qué famoso templo se encuentra en Abu Simbel?",
    answer: "ramsés ii",
    options: ["Ramsés II", "Tutankamón", "Cleopatra", "Horus"],
  },
  {
    country: "Egipto",
    question: "EGY-30 | ¿Cuál es una de las principales ciudades portuarias egipcias sobre el Mediterráneo?",
    answer: "alejandría",
    options: ["Alejandría", "Luxor", "Giza", "Asuán"],
  },
  {
    country: "Egipto",
    question: "EGY-31 | ¿Qué selección africana eliminó a Egipto en la clasificación rumbo a Qatar 2022?",
    answer: "senegal",
    options: ["Ghana", "Camerún", "Senegal", "Marruecos"],
  },
  {
    country: "Egipto",
    question: "EGY-32 | ¿Quién erró un penal decisivo para Egipto en esa eliminación ante Senegal?",
    answer: "salah",
    options: ["Salah", "Elneny", "Trezeguet", "Hegazi"],
  },
  {
    country: "Egipto",
    question: "EGY-33 | ¿Qué famosa reina egipcia tuvo relación política con Julio César y Marco Antonio?",
    answer: "cleopatra",
    options: ["Nefertiti", "Cleopatra", "Hatshepsut", "Isis"],
  },
  {
    country: "Egipto",
    question: "EGY-34 | ¿Cuál es la ciudad más poblada de Egipto?",
    answer: "el cairo",
    options: ["Giza", "Alejandría", "El Cairo", "Suez"],
  },
  {
    country: "Egipto",
    question: "EGY-35 | ¿Qué tipo de clima predomina en Egipto?",
    answer: "desértico",
    options: ["Tropical lluvioso", "Polar", "Desértico", "Oceánico"],
  },
  {
    country: "Egipto",
    question: "EGY-36 | ¿Qué famoso museo egipcio alberga tesoros de Tutankamón?",
    answer: "museo egipcio de el cairo",
    options: ["Museo del Louvre", "Museo Egipcio de El Cairo", "Museo Británico", "Museo Nubio"],
  },
  {
    country: "Egipto",
    question: "EGY-37 | ¿Qué color predomina en la bandera de Egipto junto al blanco y negro?",
    answer: "rojo",
    options: ["Azul", "Verde", "Rojo", "Dorado"],
  },
  {
    country: "Egipto",
    question: "EGY-38 | ¿Qué país limita al oeste con Egipto?",
    answer: "libia",
    options: ["Sudán", "Libia", "Chad", "Israel"],
  },
  {
    country: "Egipto",
    question: "EGY-39 | ¿Qué país limita al noreste con Egipto?",
    answer: "israel",
    options: ["Jordania", "Siria", "Israel", "Turquía"],
  },
  {
    country: "Egipto",
    question: "EGY-40 | ¿Qué faraón es famoso por la batalla de Kadesh?",
    answer: "ramsés ii",
    options: ["Ramsés II", "Keops", "Turmosis III", "Akhenatón"],
  },
  {
    country: "Egipto",
    question: "EGY-41 | ¿Qué selección venció 2-1 a Egipto en el Mundial 2018 con un gol sobre el final?",
    answer: "arabia saudita",
    options: ["Arabia", "Rusia", "Uruguay", "Portugal"],
  },
  {
    country: "Egipto",
    question: "EGY-42 | ¿En qué Mundial participó Egipto por primera vez?",
    answer: "1934",
    options: ["1930", "1934", "1938", "1950"],
  },
  {
    country: "Egipto",
    question: "EGY-43 | ¿Qué logro histórico consiguió Egipto en el Mundial 1934?",
    answer: "primer país africano en jugar un mundial",
    options: ["Primer campeón africano", "Primer país africano en jugar un Mundial", "Primer semifinalista africano", "Primer anfitrión africano"],
  },
  {
    country: "Egipto",
    question: "EGY-44 | ¿Contra qué selección debutó Egipto en los Mundiales?",
    answer: "hungría",
    options: ["Italia", "Hungría", "Brasil", "Alemania"],
  },
  {
    country: "Egipto",
    question: "EGY-45 | ¿Qué jugador egipcio convirtió el primer gol africano en la historia de los Mundiales?",
    answer: "abdelrahman fawzi",
    options: ["Mohamed Salah", "Abdelrahman Fawzi", "El Khatib", "Hossam Hassan"],
  },
  {
    country: "Egipto",
    question: "EGY-46 | ¿Cuántos goles hizo Abdelrahman Fawzi en el Mundial 1934?",
    answer: "2",
    options: ["1", "2", "3", "4"],
  },

  // ==========================================
  // AUSTRIA (AUT)
  // ==========================================
  {
    country: "Austria",
    question: "AUT-1 | ¿En qué año Austria recuperó su plena independencia y soberanía post segunda guerra mundial?",
    answer: "1955",
    options: ["1948", "1955", "1950"],
  },
  {
    country: "Austria",
    question: "AUT-2 | ¿Con cuántos países limita Austria?",
    answer: "8",
    options: ["6", "9", "8"],
  },
  {
    country: "Austria",
    question: "AUT-3 | ¿Con qué país comparte Austria la frontera terrestre más larga?",
    answer: "alemania",
    options: ["Alemania", "Hungría", "Suiza"],
  },
  {
    country: "Austria",
    question: "AUT-4 | ¿Cómo se llama la montaña más alta de AUSTRIA (símbolo alpino por excelencia del país)?",
    answer: "grossglockner",
    options: ["Wildspitze", "Grossglockner", "Weibkugel"],
  },
  {
    country: "Austria",
    question: "AUT-5 | ¿Cómo se divide políticamente Austria?",
    answer: "9 estados",
    options: ["9 estados", "11 estados", "13 estados"],
  },
  {
    country: "Austria",
    question: "AUT-6 | ¿Cuál es la capital de Austria?",
    answer: "viena",
    options: ["Salburgo", "Litz", "Viena"],
  },
  {
    country: "Austria",
    question: "AUT-7 | ¿Quién es el presidente actual de Austria?",
    answer: "alexander van der bellen",
    options: ["Alexander Van der Bellen", "Heinz Fischer", "Thomas klestil"],
  },
  {
    country: "Austria",
    question: "AUT-8 | ¿Colores y forma de la bandera de Austria?",
    answer: "bastones horizontales rojo/blanco/rojo",
    options: ["Bastones verticales rojo/blanco/rojo", "Bastones horizontales rojo/blanco/rojo", "Rojo y Blanco en mitades iguales"],
  },
  {
    country: "Austria",
    question: "AUT-9 | ¿Idioma oficial de Austria?",
    answer: "alemán (estándar)",
    options: ["Austriaco", "Bavaro", "Aleman (Estandar)"],
  },
  {
    country: "Austria",
    question: "AUT-10 | ¿Moneda Oficial de Austria?",
    answer: "euro",
    options: ["Dolar", "Euro", "Lira Austriaca"],
  },
  {
    country: "Austria",
    question: "AUT-11 | ¿Qué religión predomina mayoritariamente en Austria?",
    answer: "cristianismo católico",
    options: ["Cristianismo Catolico", "Ateos", "Islam"],
  },
  {
    country: "Austria",
    question: "AUT-12 | ¿Técnico actual de la selección de Fútbol de Austria?",
    answer: "ralf rangnick",
    options: ["Josef Ranntik", "Ralf Rangnick", "Ralf Fischer"],
  },
  {
    country: "Austria",
    question: "AUT-13 | ¿Cuál es flor nacional austríaca?",
    answer: "edelweiss o flor de las nieves",
    options: ["Edelweiss o flor de las nieves", "Rosa de los Alpes", "Clirius de Altura"],
  },
  {
    country: "Austria",
    question: "AUT-14 | ¿A cuántos mundiales clasificó Austria en su historia? (incluyendo 2026)",
    answer: "8",
    options: ["5", "7", "8"],
  },
  {
    country: "Austria",
    question: "AUT-15 | ¿Con qué países compartió grupo Austria en el mundial 1998?",
    answer: "chile-italia-camerún",
    options: ["Chile- Mexico-Camerun", "Paraguay-Italia-Nigeria", "Chile-Italia-Camerun"],
  },
  {
    country: "Austria",
    question: "AUT-16 | ¿Contra qué país disputa Austria su segundo partido del mundial 2026?",
    answer: "argentina",
    options: ["Argelia", "Argentina", "Jordania"],
  },
  {
    country: "Austria",
    question: "AUT-17 | ¿Contra qué país disputa Austria su tercer partido del mundial 2026?",
    answer: "jordania",
    options: ["Argelia", "Argentina", "Jordania"],
  },
  {
    country: "Austria",
    question: "AUT-18 | ¿Qué día y en qué estadio juega Austria su primer partido del mundial 2026?",
    answer: "16/06 kansas city stadiun",
    options: ["15/06 Dallas Stadiun", "16/06 Kansas City Stadiun", "16/06 San Francisco Stadiun"],
  },
  {
    country: "Austria",
    question: "AUT-19 | ¿Qué día y en qué estadio juega Austria su tercer partido del mundial 2026?",
    answer: "27/06 kansas city stadiun",
    options: ["27/06 Dallas Stadiun", "27/06 Kansas City Stadiun", "26/06 San Francisco Stadiun"],
  },
  {
    country: "Austria",
    question: "AUT-20 | ¿Cuál es la segunda ciudad de Austria más poblada, después de viena?",
    answer: "graz",
    options: ["Graz", "Salzburgo", "Linz"],
  },
  {
    country: "Austria",
    question: "AUT-21 | ¿Quién fue el capitán de Austria en el Mundial de Francia 1998?",
    answer: "andreas herzog",
    options: ["Andreas Herzog", "Toni Polster", "Ivica Vastić"],
  },
  {
    country: "Austria",
    question: "AUT-22 | ¿Contra qué selección consiguió Austria su única victoria en el Mundial 1998?",
    answer: "camerún",
    options: ["Camerún", "Italia", "Chile"],
  },
  {
    country: "Austria",
    question: "AUT-23 | ¿Cómo terminó el partido entre Austria y Chile en el Mundial 1998?",
    answer: "1-1",
    options: ["1-1", "2-2", "3-3"],
  },
  {
    country: "Austria",
    question: "AUT-24 | ¿Qué delantero austríaco convirtió el gol del empate sobre la hora ante Chile en 1998?",
    answer: "ivica vastić",
    options: ["Toni Polster", "Ivica Vastić", "Andreas Herzog"],
  },
  {
    country: "Austria",
    question: "AUT-25 | ¿Cuál fue la última participación de Austria en un Mundial antes de clasificar al de 2026?",
    answer: "francia 1998",
    options: ["Alemania 2006", "Francia 1998", "Corea-Japón 2002"],
  },
  {
    country: "Austria",
    question: "AUT-26 | ¿Quién fue el entrenador de Austria en el Mundial 1998?",
    answer: "herbert prohaska",
    options: ["Herbert Prohaska", "Ernst Happel", "Josef Hickersberger"],
  },
  {
    country: "Austria",
    question: "AUT-27 | ¿Cuál fue la posición final de Austria en el grupo del Mundial 1998?",
    answer: "tercero",
    options: ["Segundo", "Tercero", "Cuarto"],
  },
  {
    country: "Austria",
    question: "AUT-28 | ¿Qué jugador austríaco alcanzó los 100 partidos internacionales antes que cualquier otro futbolista de su país?",
    answer: "andreas herzog",
    options: ["Andreas Herzog", "David Alaba", "Toni Polster"],
  },
  {
    country: "Austria",
    question: "AUT-29 | ¿Qué figura austríaca convirtió un gol de tiro libre ante Camerún en Francia 1998?",
    answer: "andreas herzog",
    options: ["Andreas Herzog", "Ivica Vastić", "Toni Polster"],
  },
  {
    country: "Austria",
    question: "AUT-30 | ¿Qué selección enfrentó Austria en su último partido de un Mundial antes de la edición 2026?",
    answer: "italia",
    options: ["Chile", "Camerún", "Italia"],
  },
  {
    country: "Austria",
    question: "AUT-31 | ¿Cuántos puntos obtuvo Austria en la fase de grupos del Mundial 1998?",
    answer: "4",
    options: ["2", "4", "5"],
  },
  {
    country: "Austria",
    question: "AUT-32 | ¿Quién fue el máximo goleador de Austria en los Mundiales entre 1986 y 2026?",
    answer: "toni polster",
    options: ["Toni Polster", "Andreas Herzog", "Marko Arnautović"],
  },
  {
    country: "Austria",
    question: "AUT-33 | ¿Qué jugador austríaco disputó el Mundial 1998 y luego se convirtió en seleccionador nacional de Austria?",
    answer: "andreas herzog",
    options: ["Ivica Vastić", "Andreas Herzog", "Martin Hiden"],
  },

  // ==========================================
  // Noruega
  // ==========================================

  {
    country: "Noruega",
    question: "NOR-1 | ¿Cuál es la ciudad más poblada de Noruega?",
    answer: "oslo",
    options: ["Bergen", "Trondheim", "Oslo"],
  },
  {
    country: "Noruega",
    question: "NOR-2 | ¿Qué mar se encuentra al norte de Noruega?",
    answer: "mar de barents",
    options: ["Mar Mediterráneo", "Mar de Barents", "Mar Negro"],
  },
  {
    country: "Noruega",
    question: "NOR-3 | ¿Qué rey unificó gran parte de Noruega según la tradición vikinga?",
    answer: "harald fairhair",
    options: ["Harald Fairhair", "Olaf II", "Canuto el Grande"],
  },
  {
    country: "Noruega",
    question: "NOR-4 | ¿Cuál es el punto más alto de Noruega?",
    answer: "galdhøpiggen",
    options: ["Monte Everest", "Galdhøpiggen", "Kilimanjaro"],
  },
  {
    country: "Noruega",
    question: "NOR-5 | ¿Qué país administró Noruega durante siglos antes de Suecia?",
    answer: "dinamarca",
    options: ["Dinamarca", "Francia", "Rusia"],
  },
  {
    country: "Noruega",
    question: "NOR-6 | ¿En qué año Noruega obtuvo su independencia definitiva?",
    answer: "1905",
    options: ["1814", "1905", "1940"],
  },
  {
    country: "Noruega",
    question: "NOR-7 | ¿Qué famoso explorador noruego fue el primero en llegar al Polo Sur?",
    answer: "roald amundsen",
    options: ["Roald Amundsen", "Leif Erikson", "Thor Heyerdahl"],
  },
  {
    country: "Noruega",
    question: "NOR-8 | ¿Qué moneda se utiliza en Noruega?",
    answer: "corona noruega",
    options: ["Euro", "Corona noruega", "Franco"],
  },
  {
    country: "Noruega",
    question: "NOR-9 | ¿Qué país eliminó a Noruega en octavos del Mundial 1998?",
    answer: "italia",
    options: ["Italia", "Brasil", "Francia"],
  },
  {
    country: "Noruega",
    question: "NOR-10 | ¿Contra qué selección logró Noruega una histórica victoria en Francia 1998?",
    answer: "brasil",
    options: ["Alemania", "Brasil", "Argentina"],
  },
  {
    country: "Noruega",
    question: "NOR-11 | ¿Quién convirtió el gol de Noruega ante Brasil en el Mundial 1998?",
    answer: "kjetil rekdal",
    options: ["Ole Gunnar Solskjær", "Tore André Flo", "Kjetil Rekdal"],
  },
  {
    country: "Noruega",
    question: "NOR-12 | ¿Qué arquero histórico fue figura de Noruega en los años 90?",
    answer: "erik thorstvedt",
    options: ["Peter Schmeichel", "Erik Thorstvedt", "Buffon"],
  },
  {
    country: "Noruega",
    question: "NOR-13 | ¿En qué club europeo brilló Ole Gunnar Solskjær como jugador?",
    answer: "manchester united",
    options: ["Liverpool", "Manchester United", "Milan"],
  },
  {
    country: "Noruega",
    question: "NOR-14 | ¿Qué delantero noruego es hijo del exfutbolista Alf-Inge Haaland?",
    answer: "erling haaland",
    options: ["Martin Ødegaard", "Erling Haaland", "John Carew"],
  },
  {
    country: "Noruega",
    question: "NOR-15 | ¿Qué jugador noruego fue capitán del Arsenal inglés?",
    answer: "martin ødegaard",
    options: ["Erling Haaland", "Martin Ødegaard", "Solskjær"],
  },
  {
    country: "Noruega",
    question: "NOR-16 | ¿Qué logro obtuvo Ada Hegerberg en 2018?",
    answer: "ganó el balón de oro femenino",
    options: ["Ganó la Copa América", "Ganó el Balón de Oro femenino", "Ganó la Champions masculina"],
  },
  {
    country: "Noruega",
    question: "NOR-17 | ¿Qué deporte además del fútbol es muy fuerte en Noruega?",
    answer: "esquí",
    options: ["Esquí", "Rugby", "Cricket"],
  },
  {
    country: "Noruega",
    question: "NOR-18 | ¿Qué fenómeno natural ocurre durante semanas en el norte de Noruega en verano?",
    answer: "sol de medianoche",
    options: ["Lluvia roja", "Sol de medianoche", "Eclipse permanente"],
  },
  {
    country: "Noruega",
    question: "NOR-19 | ¿Qué significa que Noruega sea una monarquía constitucional?",
    answer: "que tiene rey pero con constitución y parlamento",
    options: ["Que no tiene rey", "Que el rey gobierna solo", "Que tiene rey pero con Constitución y Parlamento"],
  },
  {
    country: "Noruega",
    question: "NOR-20 | ¿Cuál es el parlamento noruego llamado en idioma local?",
    answer: "storting",
    options: ["Folketing", "Storting", "Bundestag"],
  },
  {
    country: "Noruega",
    question: "NOR-21 | ¿Qué selección europea nunca pudo derrotar Brasil en Mundiales excepto Noruega?",
    answer: "noruega",
    options: ["Noruega", "Bélgica", "Croacia"],
  },
  {
    country: "Noruega",
    question: "NOR-22 | ¿Qué famoso museo de Oslo exhibe barcos vikingos?",
    answer: "museo vikingo",
    options: ["Museo del Prado", "Museo Vikingo", "Louvre"],
  },
  {
    country: "Noruega",
    question: "NOR-23 | ¿Qué océano influye directamente en el clima de Noruega?",
    answer: "atlántico",
    options: ["Atlántico", "Índico", "Pacífico"],
  },
  {
    country: "Noruega",
    question: "NOR-24 | ¿Qué importante recurso natural convirtió a Noruega en uno de los países más ricos?",
    answer: "petróleo y gas",
    options: ["Oro", "Petróleo y gas", "Diamantes"],
  },
  {
    country: "Noruega",
    question: "NOR-25 | ¿Cuál es el nombre del tradicional barco vikingo?",
    answer: "drakkar",
    options: ["Drakkar", "Galeón", "Fragata"],
  },
  {
    country: "Noruega",
    question: "NOR-26 | ¿Qué famoso dramaturgo nació en Noruega?",
    answer: "henrik ibsen",
    options: ["William Shakespeare", "Henrik Ibsen", "Cervantes"],
  },
  {
    country: "Noruega",
    question: "NOR-27 | ¿Qué característica tiene la bandera de Noruega?",
    answer: "tiene una cruz escandinava",
    options: ["Tiene una cruz escandinava", "Tiene estrellas", "Tiene un dragón"],
  },
  {
    country: "Noruega",
    question: "NOR-28 | ¿Qué ciudad noruega es famosa por sus lluvias frecuentes y sus casas de colores?",
    answer: "bergen",
    options: ["Bergen", "Tromsø", "Lillehammer"],
  },
  {
    country: "Noruega",
    question: "NOR-29 | ¿Cuál es el nombre del famoso explorador que cruzó el Pacífico en la balsa Kon-Tiki?",
    answer: "thor heyerdahl",
    options: ["Roald Amundsen", "Thor Heyerdahl", "Fridtjof Nansen"],
  },
  {
    country: "Noruega",
    question: "NOR-30 | ¿En qué país se disputó el primer Mundial que jugó Noruega?",
    answer: "francia",
    options: ["Italia", "Francia", "Brasil"],
  },
  {
    country: "Noruega",
    question: "NOR-31 | ¿En qué año Noruega jugó su primer Mundial masculino?",
    answer: "1938",
    options: ["1938", "1954", "1966"],
  },
  {
    country: "Noruega",
    question: "NOR-32 | ¿Qué selección eliminó a Noruega en el Mundial 1938?",
    answer: "italia",
    options: ["Italia", "Alemania", "Brasil"],
  },
  {
    country: "Noruega",
    question: "NOR-33 | ¿En qué Mundial Noruega volvió a participar después de 1938?",
    answer: "1994",
    options: ["1986", "1994", "1990"],
  },
  {
    country: "Noruega",
    question: "NOR-34 | ¿Qué tenía de particular el grupo de Noruega en USA 1994?",
    answer: "todos los equipos terminaron con 4 puntos",
    options: ["Todos los equipos terminaron con 4 puntos", "Ningún equipo ganó partidos", "Todos empataron entre sí"],
  },
  {
    country: "Noruega",
    question: "NOR-35 | ¿Qué selección terminó primera en el grupo de Noruega en 1994?",
    answer: "méxico",
    options: ["Italia", "México", "Irlanda"],
  },
  {
    country: "Noruega",
    question: "NOR-36 | ¿En qué Mundial Noruega alcanzó los octavos de final?",
    answer: "1998",
    options: ["1990", "1998", "2002"],
  },
  {
    country: "Noruega",
    question: "NOR-37 | ¿Qué selección derrotó Noruega en octavos de final en 1998?",
    answer: "italia",
    options: ["Francia", "Italia", "Brasil"],
  },
  {
    country: "Noruega",
    question: "NOR-38 | ¿Cuál fue el resultado entre Noruega e Italia en octavos de 1998?",
    answer: "1-0 para italia",
    options: ["1-0 para Italia", "2-1 para italia", "0-0 . gano por penales italia"],
  },
  {
    country: "Noruega",
    question: "NOR-39 | ¿Qué selección sudamericana integró el grupo de Noruega en Francia 1998?",
    answer: "brasil",
    options: ["Brasil", "Alemania", "Inglaterra"],
  },
  {
    country: "Noruega",
    question: "NOR-40 | ¿Qué selección africana compartió grupo con Noruega en 1998?",
    answer: "marruecos",
    options: ["Nigeria", "Marruecos", "Camerún"],
  },
  {
    country: "Noruega",
    question: "NOR-41 | ¿Qué selección europea compartió grupo con Noruega en 1998?",
    answer: "escocia",
    options: ["Bélgica", "Escocia", "Croacia"],
  },
  {
    country: "Noruega",
    question: "NOR-42 | ¿Cuál fue el resultado entre Noruega y Marruecos en 1998?",
    answer: "2-2",
    options: ["2-2", "1-0 Noruega", "2-0 Marruecos"],
  },
  {
    country: "Noruega",
    question: "NOR-43 | ¿Cuál fue el resultado entre Noruega y Escocia en 1998?",
    answer: "1-1",
    options: ["1-1", "2-0 Noruega", "0-0"],
  },
  {
    country: "Noruega",
    question: "NOR-44 | ¿Cuántos Mundiales masculinos jugó Noruega hasta el momento?",
    answer: "3",
    options: ["2", "3", "5"],
  },

  // ==========================================
  // Portugal
  // ==========================================
  {
    country: "Portugal",
    question: "POR-1 | ¿Cuál es la capital de Portugal?",
    answer: "lisboa",
    options: ["Porto", "Lisboa", "Faro"],
  },
  {
    country: "Portugal",
    question: "POR-2 | ¿Qué océano baña las costas de Portugal?",
    answer: "atlántico",
    options: ["Índico", "Pacífico", "Atlántico"],
  },
  {
    country: "Portugal",
    question: "POR-3 | ¿Cuál es la segunda ciudad más importante de Portugal?",
    answer: "oporto (porto)",
    options: ["Braga", "Coimbra", "Oporto (Porto)"],
  },
  {
    country: "Portugal",
    question: "POR-4 | ¿Qué famoso navegante portugués llegó a la India por vía marítima?",
    answer: "vasco da gama",
    options: ["Cristóbal Colón", "Vasco da Gama", "Magallanes"],
  },
  {
    country: "Portugal",
    question: "POR-5 | ¿Qué explorador portugués lideró la primera vuelta al mundo?",
    answer: "fernando de magallanes",
    options: ["Hernán Cortés", "Fernando de Magallanes", "Vasco Núñez de Balboa"],
  },
  {
    country: "Portugal",
    question: "POR-6 | ¿Cuál fue uno de los mayores imperios marítimos de la historia?",
    answer: "portugal",
    options: ["Portugal", "Suiza", "Bélgica"],
  },
  {
    country: "Portugal",
    question: "POR-7 | ¿Qué colonia portuguesa en Sudamérica se independizó en 1822?",
    answer: "brasil",
    options: ["Perú", "Brasil", "Colombia"],
  },
  {
    country: "Portugal",
    question: "POR-8 | ¿Cuál es el idioma oficial de Portugal?",
    answer: "portugués",
    options: ["Español", "Italiano", "Portugués"],
  },
  {
    country: "Portugal",
    question: "POR-9 | ¿Qué archipiélago portugués está en el océano Atlántico?",
    answer: "madeira",
    options: ["Canarias", "Madeira", "Malta"],
  },
  {
    country: "Portugal",
    question: "POR-10 | ¿Qué famoso estilo musical tradicional pertenece a Portugal?",
    answer: "fado",
    options: ["Tango", "Fado", "Samba"],
  },
  {
    country: "Portugal",
    question: "POR-11 | ¿Qué ciudad portuguesa es conocida por sus tranvías amarillos?",
    answer: "lisboa",
    options: ["Lisboa", "Braga", "Faro"],
  },
  {
    country: "Portugal",
    question: "POR-12 | ¿Qué dictador logró gobernar Portugal durante gran parte del siglo XX?",
    answer: "salazar",
    options: ["Franco", "Salazar", "Mussolini"],
  },
  {
    country: "Portugal",
    question: "POR-13 | ¿Qué revolución terminó con la dictadura portuguesa en 1974?",
    answer: "revolución de los claveles",
    options: ["Revolución Industrial", "Revolución de los Claveles", "Revolución portugesa"],
  },
  {
    country: "Portugal",
    question: "POR-14 | ¿Qué famoso pastel típico es originario de Lisboa?",
    answer: "pastel de nata",
    options: ["Croissant", "Pastel de nata", "Churro"],
  },
  {
    country: "Portugal",
    question: "POR-15 | ¿Qué color predomina en la bandera portuguesa?",
    answer: "verde y rojo",
    options: ["Azul", "Verde y rojo", "Amarillo"],
  },
  {
    country: "Portugal",
    question: "POR-16 | ¿En qué año Portugal debutó en un Mundial masculino?",
    answer: "1966",
    options: ["1958", "1966", "1974"],
  },
  {
    country: "Portugal",
    question: "POR-17 | ¿Qué puesto logró Portugal en su primer Mundial?",
    answer: "tercer puesto",
    options: ["Campeón", "Tercer puesto", "Subcampeón"],
  },
  {
    country: "Portugal",
    question: "POR-18 | ¿Quién fue la gran figura portuguesa del Mundial 1966?",
    answer: "eusébio",
    options: ["Cristiano Ronaldo", "Eusébio", "Vasco Dalmelin"],
  },
  {
    country: "Portugal",
    question: "POR-19 | ¿Cuántos goles convirtió Eusébio en el Mundial 1966?",
    answer: "9",
    options: ["5", "7", "9"],
  },
  {
    country: "Portugal",
    question: "POR-20 | ¿Qué selección eliminó a Portugal en semifinales de 1966?",
    answer: "inglaterra",
    options: ["Alemania", "Inglaterra", "Brasil"],
  },
  {
    country: "Portugal",
    question: "POR-21 | ¿Qué selección derrotó Portugal para quedarse con el tercer puesto en 1966?",
    answer: "unión soviética",
    options: ["Unión Soviética", "Marruecos", "Hungría"],
  },
  {
    country: "Portugal",
    question: "POR-22 | ¿Qué selección goleó Portugal 5-3 en el Mundial 1966 luego de ir perdiendo 3-0 en el primer tiempo?",
    answer: "corea del norte",
    options: ["Austria", "Corea del Norte", "México"],
  },
  {
    country: "Portugal",
    question: "POR-23 | ¿Quién es el máximo goleador histórico de Portugal en Mundiales?",
    answer: "eusébio",
    options: ["Cristiano Ronaldo", "Eusébio", "Pauleta"],
  },
  {
    country: "Portugal",
    question: "POR-24 | ¿En qué Mundial Cristiano Ronaldo jugó por primera vez?",
    answer: "2006",
    options: ["2002", "2006", "2010"],
  },
  {
    country: "Portugal",
    question: "POR-25 | ¿Qué puesto obtuvo Portugal en Alemania 2006?",
    answer: "cuarto puesto",
    options: ["Tercer puesto", "Cuarto puesto", "Octavos de final"],
  },
  {
    country: "Portugal",
    question: "POR-26 | ¿Qué selección eliminó a Portugal en semifinales del Mundial 2006?",
    answer: "francia",
    options: ["Italia", "Francia", "Alemania"],
  },
  {
    country: "Portugal",
    question: "POR-27 | ¿Qué selección venció a Portugal en el partido por el tercer puesto de 2006?",
    answer: "alemania",
    options: ["Alemania", "Italia", "Brasil"],
  },
  {
    country: "Portugal",
    question: "POR-28 | ¿Qué selección eliminó a Portugal en el Mundial 2018?",
    answer: "uruguay",
    options: ["Uruguay", "Francia", "Croacia"],
  },
  {
    country: "Portugal",
    question: "POR-29 | ¿Quién marcó un hat-trick para Portugal ante Suiza en 2022?",
    answer: "gonçalo ramos",
    options: ["Cristiano Ronaldo", "Gonçalo Ramos", "João Félix"],
  },
  {
    country: "Portugal",
    question: "POR-30 | ¿Contra qué selección Cristiano Ronaldo marcó un famoso hat-trick en Rusia 2018?",
    answer: "españa",
    options: ["España", "Alemania", "Brasil"],
  },
  {
    country: "Portugal",
    question: "POR-31 | ¿Qué entrenador dirigió a Portugal campeón de la Euro 2016 y en el Mundial 2018?",
    answer: "fernando santos",
    options: ["José Mourinho", "Fernando Santos", "André Villas-Boas"],
  },
  {
    country: "Portugal",
    question: "POR-32 | ¿Qué selección eliminó a Portugal en octavos del Mundial 2010?",
    answer: "españa",
    options: ["España", "Holanda", "Alemania"],
  },
  {
    country: "Portugal",
    question: "POR-33 | ¿Cómo se llama el himno nacional de Portugal?",
    answer: "a portuguesa",
    options: ["A Portuguesa", "Fado Nacional", "Viceres Portugal"],
  },
  {
    country: "Portugal",
    question: "POR-34 | ¿En qué año se convirtió oficialmente en himno nacional “A Portuguesa”?",
    answer: "1911",
    options: ["1911", "1880", "1933"],
  },
  {
    country: "Portugal",
    question: "POR-35 | ¿Quién compuso la música del himno de Portugal?",
    answer: "alfredo keil",
    options: ["Fernando Pessoa", "Alfredo Keil", "José Saramago"],
  },
  {
    country: "Portugal",
    question: "POR-36 | ¿Quién escribió la letra del himno portugués?",
    answer: "henrique lopes de mendonça",
    options: ["Henrique Lopes de Mendonça", "Vasco da Gama", "Antónie Salazar"],
  },
  {
    country: "Portugal",
    question: "POR-37 | ¿Qué representa la esfera armilar que aparece en la bandera de Portugal?",
    answer: "la época de exploraciones marítimas portuguesas",
    options: ["El poder militar", "La época de exploraciones marítimas portuguesas", "Las colonias africanas"],
  },
  {
    country: "Portugal",
    question: "POR-38 | ¿Qué simbolizan los cinco escudos azules en la bandera portuguesa?",
    answer: "las cinco derrotas árabes frente a Portugal",
    options: ["Cinco reyes europeos", "Las cinco derrotas árabes frente a Portugal", "Cinco provincias históricas"],
  },
  {
    country: "Portugal",
    question: "POR-39 | ¿Qué representan los puntos blancos dentro de los escudos de la bandera?",
    answer: "las llagas de cristo según la tradición",
    options: ["Monedas antiguas", "Castillos portugueses", "Las llagas de Cristo según la tradición"],
  },
  {
    country: "Portugal",
    question: "POR-40 | ¿Qué sistema político tiene actualmente Portugal?",
    answer: "república semipresidencialista",
    options: ["Monarquía absoluta", "República semipresidencialista", "Dictadura militar"],
  },
  {
    country: "Portugal",
    question: "POR-41 | ¿Quién fue el histórico dictador portugués del siglo XX?",
    answer: "antónio de oliveira salazar",
    options: ["António de Oliveira Salazar", "Francisco Franco", "Marcelo Caetano"],
  },
  {
    country: "Portugal",
    question: "POR-42 | ¿Qué famoso escritor portugués ganó el Premio Nobel de Literatura en 1998?",
    answer: "josé saramago",
    options: ["Eduardo Pessoa", "José Saramago", "Luís de Camões"],
  },
  {
    country: "Portugal",
    question: "POR-43 | ¿Qué cantante portuguesa es considerada una de las mayores representantes del fado?",
    answer: "amália rodrigues",
    options: ["Amália Rodrigues", "Andrea Da felix", "Ana Do Souza"],
  },

  // ==========================================
  // Escocia
  // ==========================================
  {
    country: "Escocia",
    question: "ESC-1 | ¿Cuál es la capital de Escocia?",
    answer: "edimburgo",
    options: ["Glasgow", "Edimburgo", "Aberdeen"],
  },
  {
    country: "Escocia",
    question: "ESC-2 | ¿Qué animal mitológico aparece en el escudo nacional de Escocia?",
    answer: "unicornio rojo",
    options: ["Dragón rojo", "Unicornio rojo", "León rojo"],
  },
  {
    country: "Escocia",
    question: "ESC-3 | ¿Cómo se llama la bandera de Escocia?",
    answer: "saltire o cruz de san andrés",
    options: ["Union Jack", "Saltire o Cruz de San Andrés", "Royal Cross"],
  },
  {
    country: "Escocia",
    question: "ESC-4 | ¿Qué colores tiene principalmente la bandera escocesa?",
    answer: "azul y blanco",
    options: ["Rojo y amarillo", "Azul y blanco", "Verde y negro"],
  },
  {
    country: "Escocia",
    question: "ESC-5 | ¿Qué instrumento musical es típico de Escocia?",
    answer: "gaita escocesa",
    options: ["Arpa", "Gaita escocesa", "Banjo"],
  },
  {
    country: "Escocia",
    question: "ESC-6 | ¿Qué prenda tradicional masculina escocesa se utiliza con tartán?",
    answer: "kilt",
    options: ["Kimono", "Kilt", "Poncho"],
  },
  {
    country: "Escocia",
    question: "ESC-7 | ¿Qué famoso monstruo pertenece a la leyenda escocesa?",
    answer: "nessie del lago ness",
    options: ["Kraken", "Nessie del Lago Ness", "Minotauro"],
  },
  {
    country: "Escocia",
    question: "ESC-8 | ¿Qué famoso lago escocés está relacionado con Nessie?",
    answer: "lago ness",
    options: ["Lago Victoria", "Lago Ness", "Lago Titicaca"],
  },
  {
    country: "Escocia",
    question: "ESC-9 | ¿Cuál es la ciudad más poblada de Escocia?",
    answer: "glasgow",
    options: ["Edimburgo", "Glasgow", "Dundee"],
  },
  {
    country: "Escocia",
    question: "ESC-10 | ¿Qué escritor escocés creó Sherlock Holmes?",
    answer: "arthur conan doyle",
    options: ["J.K. Rowling", "Arthur Conan Doyle", "Edgar Allan Poe"],
  },
  {
    country: "Escocia",
    question: "ESC-11 | ¿Qué famoso invento está asociado al escocés Alexander Graham Bell?",
    answer: "el teléfono",
    options: ["La radio", "El teléfono", "La televisión"],
  },
  {
    country: "Escocia",
    question: "ESC-12 | ¿Qué significa “Scotch” en el mundo de las bebidas?",
    answer: "whisky producido en escocia",
    options: ["Un vino", "Whisky producido en Escocia", "Una cerveza negra"],
  },
  {
    country: "Escocia",
    question: "ESC-13 | ¿Qué héroe escocés lideró la resistencia contra Inglaterra y fue retratado en “Braveheart”?",
    answer: "william wallace",
    options: ["William Wallace", "Robert Bruce", "Macbeth"],
  },
  {
    country: "Escocia",
    question: "ESC-14 | ¿Qué rey escocés derrotó a Inglaterra en la batalla de Bannockburn?",
    answer: "robert the bruce",
    options: ["Robert the Bruce", "Eduardo I", "James VI"],
  },
  {
    country: "Escocia",
    question: "ESC-15 | ¿En qué año Escocia jugó su primer Mundial masculino?",
    answer: "1954",
    options: ["1954", "1930", "1962"],
  },
  {
    country: "Escocia",
    question: "ESC-16 | ¿Cuál es la mejor actuación histórica de Escocia en Mundiales?",
    answer: "nunca superó fase de grupos",
    options: ["Cuartos de final", "Octavos de final", "Nunca superó fase de grupos"],
  },
  {
    country: "Escocia",
    question: "ESC-17 | ¿Qué selección eliminó indirectamente a Escocia del Mundial 1978 pese a vencer a Holanda?",
    answer: "diferencia de gol",
    options: ["Perú", "Diferencia de gol", "Brasil"],
  },
  {
    country: "Escocia",
    question: "ESC-18 | ¿Qué selección derrotó Escocia 3-2 en el Mundial 1978?",
    answer: "holanda",
    options: ["Holanda", "Alemania", "Argentina"],
  },
  {
    country: "Escocia",
    question: "ESC-19 | ¿Quién era la gran figura escocesa en el Mundial 1978?",
    answer: "kenny dalglish",
    options: ["Kenny Dalglish", "Denis Law", "Andy Robertson"],
  },
  {
    country: "Escocia",
    question: "ESC-20 | ¿Qué histórico delantero escocés jugó en Liverpool y fue campeón europeo?",
    answer: "kenny dalglish",
    options: ["Kenny Dalglish", "McCoist", "Darren Fletcher"],
  },
  {
    country: "Escocia",
    question: "ESC-21 | ¿Qué selección dejó afuera a Escocia en el Mundial 1998?",
    answer: "marruecos por diferencia de gol",
    options: ["Marruecos", "Brasil", "Marruecos por diferencia de gol"],
  },
  {
    country: "Escocia",
    question: "ESC-22 | ¿Contra qué selección jugó Escocia el partido inaugural del Mundial 1998?",
    answer: "brasil",
    options: ["Brasil", "Francia", "Argentina"],
  },
  {
    country: "Escocia",
    question: "ESC-23 | ¿Cuál fue el resultado del partido inaugural Francia 1998 entre Brasil y Escocia?",
    answer: "2-1 para brasil",
    options: ["1-0", "2-1 para Brasil", "3-0"],
  },
  {
    country: "Escocia",
    question: "ESC-24 | ¿Qué jugador escocés convirtió un gol en contra ante Brasil en 1998?",
    answer: "tom boyd",
    options: ["Colin Hendry", "Tom Boyd", "Darren Jackson"],
  },
  {
    country: "Escocia",
    question: "ESC-25 | ¿Qué entrenador histórico dirigió a Escocia en varios Mundiales?",
    answer: "craig brown",
    options: ["Alex Ferguson", "Craig Brown", "Kenny Dalglish"],
  },
  {
    country: "Escocia",
    question: "ESC-26 | ¿Qué selección empató con Escocia 1-1 en Francia 1998?",
    answer: "noruega",
    options: ["Noruega", "Brasil", "Italia"],
  },
  {
    country: "Escocia",
    question: "ESC-27 | ¿Qué selección derrotó a Escocia en el Mundial 1998 por 3-0?",
    answer: "marruecos",
    options: ["Marruecos", "Brasil", "Chile"],
  },
  {
    country: "Escocia",
    question: "ESC-28 | ¿Cuántos Mundiales masculinos disputó Escocia aproximadamente?",
    answer: "8",
    options: ["4", "8", "12"],
  },
  {
    country: "Escocia",
    question: "ESC-29 | ¿Qué selección eliminó a Escocia en Argentina 1978 pese a no perder partidos?",
    answer: "diferencia de gol",
    options: ["Irán", "Diferencia de gol", "Brasil"],
  },
  {
    country: "Escocia",
    question: "ESC-30 | ¿Qué selección empató con Escocia en el famoso “partido de la vergüenza” de 1982?",
    answer: "unión soviética",
    options: ["Alemania", "Unión Soviética", "Austria"],
  },
  {
    country: "Escocia",
    question: "ESC-31 | ¿Qué particularidad tiene Escocia respecto a los Mundiales?",
    answer: "nunca pasó fase de grupos",
    options: ["Nunca clasificó", "Nunca pasó fase de grupos", "Fue semifinalista"],
  },
  {
    country: "Escocia",
    question: "ESC-32 | ¿Qué técnico legendario nunca dirigió a Escocia en un Mundial pese a ser escocés?",
    answer: "alex ferguson",
    options: ["Alex Ferguson", "Craig Brown", "Jock Stein"],
  },
  {
    country: "Escocia",
    question: "ESC-33 | ¿Qué entrenador escocés murió durante el Mundial 1986?",
    answer: "jock stein",
    options: ["Craig Brown", "Jock Stein", "Matt Busby"],
  },
  {
    country: "Escocia",
    question: "ESC-34 | ¿Qué selección venció a Escocia en el Mundial 1986 por 1-0 con gol de penal de Søren Lerby?",
    answer: "dinamarca",
    options: ["Dinamarca", "Alemania", "Uruguay"],
  },
  {
    country: "Escocia",
    question: "ESC-35 | ¿Qué histórico arquero escocés jugó muchos años en Rangers?",
    answer: "andy goram",
    options: ["Andy Goram", "Jim Leighton", "Allan McGregor"],
  },
  {
    country: "Escocia",
    question: "ESC-36 | ¿Qué jugador escocés es considerado uno de los mejores del Manchester United de Ferguson?",
    answer: "denis law",
    options: ["Darren Fletcher", "Denis Law", "Kenny Miller"],
  },
  {
    country: "Escocia",
    question: "ESC-37 | ¿Qué famoso entrenador escocés ganó múltiples Champions League con Manchester United?",
    answer: "sir alex ferguson",
    options: ["Kenny Dalglish", "Sir Alex Ferguson", "Craig Brown"],
  },
  {
    country: "Escocia",
    question: "ESC-38 | ¿Qué país comparte bandera en parte con Escocia dentro del Reino Unido?",
    answer: "inglaterra",
    options: ["Inglaterra", "Italia", "Francia"],
  },
  {
    country: "Escocia",
    question: "ESC-39 | ¿Cómo se llama el himno no oficial deportivo más famoso de Escocia?",
    answer: "flower of scotland",
    options: ["Flower of Scotland", "God Save Scotland", "Highland Song"],
  },
  {
    country: "Escocia",
    question: "ESC-40 | ¿Qué flor es símbolo nacional de Escocia?",
    answer: "cardo",
    options: ["Rosa", "Cardo", "Tulipán"],
  },
  {
    country: "Escocia",
    question: "ESC-41 | ¿Qué escritor escocés creó “Peter Pan”?",
    answer: "j.m. barrie",
    options: ["Walter Scott", "J.M. Barrie", "Stevenson"],
  },
  {
    country: "Escocia",
    question: "ESC-42 | ¿Qué famoso libro escribió Robert Louis Stevenson?",
    answer: "la isla del tesoro",
    options: ["Drácula", "La isla del tesoro", "Hamlet"],
  },
  {
    country: "Escocia",
    question: "ESC-43 | ¿Qué científico escocés descubrió la penicilina?",
    answer: "alexander fleming",
    options: ["Isaac Newton", "Alexander Fleming", "Darwin"],
  },
  {
    country: "Escocia",
    question: "ESC-44 | ¿Qué selección eliminó a Escocia del Mundial 1990?",
    answer: "costa rica",
    options: ["Costa Rica", "Brasil", "Alemania"],
  },

];
*/


export const QUESTIONS_DB: QuestionItem[] = [
// ==========================================
  // FRANCIA
  // ==========================================
  {
    "country": "Francia",
    "question": "FRA-3 | ¿Contra qué selección ganó Francia la final del Mundial 1998?",
    "answer": "Brasil",
    "options": ["Brasil", "Italia", "Alemania"]
  },
  {
    "country": "Francia",
    "question": "FRA-4 | ¿Qué jugador marcó dos goles en la final del Mundial 1998?",
    "answer": "Zinedine Zidane",
    "options": ["David Trezeguet", "Zinedine Zidane", "Youri Djorkaeff"]
  },
  {
    "country": "Francia",
    "question": "FRA-5 | ¿Qué jugador francés ganó el Balón de Oro en 1998?",
    "answer": "Zinedine Zidane",
    "options": ["Thierry Henry", "Zinedine Zidane", "Patrick Vieira"]
  },
  {
    "country": "Francia",
    "question": "FRA-7 | ¿Qué selección eliminó a Francia en el Mundial 2014?",
    "answer": "Alemania",
    "options": ["Alemania", "Argentina", "Brasil"]
  },
  {
    "country": "Francia",
    "question": "FRA-9 | ¿Cuántos Mundiales ha ganado Francia hasta 2026?",
    "answer": "2",
    "options": ["1", "2", "3"]
  },
  {
    "country": "Francia",
    "question": "FRA-11 | ¿Qué francés ganó la Bota de Oro del Mundial 1958?",
    "answer": "Just Fontaine",
    "options": ["Michel Platini", "Just Fontaine", "Jean Tigana"]
  },
  {
    "country": "Francia",
    "question": "FRA-13 | ¿Quién marcó un hat-trick en la final del Mundial 2022 para Francia?",
    "answer": "Kylian Mbappé",
    "options": ["Antoine Griezmann", "Kylian Mbappé", "Olivier Giroud"]
  },
  {
    "country": "Francia",
    "question": "FRA-14 | ¿Qué torre famosa se encuentra en París?",
    "answer": "Torre Eiffel",
    "options": ["Torre de Pisa", "Torre Eiffel", "Big Ben"]
  },
  {
    "country": "Francia",
    "question": "FRA-15 | ¿Qué río atraviesa París?",
    "answer": "Sena",
    "options": ["Danubio", "Sena", "Loira"]
  },
  {
    "country": "Francia",
    "question": "FRA-16 | ¿Qué museo famoso alberga la Mona Lisa?",
    "answer": "Museo del Louvre",
    "options": ["Museo del Prado", "Museo Británico", "Museo del Louvre"]
  },
  {
    "country": "Francia",
    "question": "FRA-19 | ¿Qué famoso arco se encuentra en París?",
    "answer": "Arco del Triunfo",
    "options": ["Arco de Tito", "Arco del Triunfo", "Puerta de Brandeburgo"]
  },
  {
    "country": "Francia",
    "question": "FRA-20 | ¿Qué región francesa es famosa por su vino espumoso?",
    "answer": "Champaña",
    "options": ["Normandía", "Champaña", "Bretaña"]
  },
  {
    "country": "Francia",
    "question": "FRA-21 | ¿Qué famosa catedral sufrió un incendio en 2019?",
    "answer": "Notre Dame",
    "options": ["Sagrada Familia", "Notre Dame", "Basílica del Sacré-Cœur"]
  },
  {
    "country": "Francia",
    "question": "FRA-22 | ¿Cuál es el plato francés hecho con caracoles?",
    "answer": "Escargots",
    "options": ["Ratatouille", "Escargots", "Fondue"]
  },
  {
    "country": "Francia",
    "question": "FRA-23 | ¿Qué tratado puso fin a la Primera Guerra Mundial?",
    "answer": "Tratado de Versalles",
    "options": ["Tratado de Roma", "Tratado de Versalles", "Tratado de París"]
  },
  {
    "country": "Francia",
    "question": "FRA-24 | ¿Qué reina francesa fue ejecutada durante la Revolución Francesa?",
    "answer": "María Antonieta",
    "options": ["Catalina de Médici", "María Antonieta", "Josefina"]
  },
  {
    "country": "Francia",
    "question": "FRA-25 | ¿Cuál es la montaña más alta de Francia y Europa Occidental?",
    "answer": "Mont Blanc",
    "options": ["Pirineos", "Mont Blanc", "Alpes Julianos"]
  },
  {
    "country": "Francia",
    "question": "FRA-27 | ¿Quién era el presidente de Francia cuando ganó el Mundial 2018?",
    "answer": "Emmanuel Macron",
    "options": ["François Hollande", "Emmanuel Macron", "Nicolas Sarkozy"]
  },
  {
    "country": "Francia",
    "question": "FRA-28 | ¿Cuál es la sexta ciudad más poblada de Francia?",
    "answer": "Nantes",
    "options": ["Nantes", "Toulouse", "Estrasburgo"]
  },
  {
    "country": "Francia",
    "question": "FRA-30 | ¿Cuál es la undécima ciudad más poblada de Francia?",
    "answer": "Rennes",
    "options": ["Rennes", "Dijon", "Angers"]
  },
  {
    "country": "Francia",
    "question": "FRA-31 | ¿En qué año Napoleón Bonaparte se proclamó emperador de Francia?",
    "answer": "1804",
    "options": ["1799", "1804", "1815"]
  },
  {
    "country": "Francia",
    "question": "FRA-32 | ¿Qué batalla marcó la derrota definitiva de Napoleón Bonaparte?",
    "answer": "Waterloo",
    "options": ["Austerlitz", "Leipzig", "Waterloo"]
  },
  {
    "country": "Francia",
    "question": "FRA-33 | ¿Qué pintor francés es considerado uno de los fundadores del impresionismo?",
    "answer": "Claude Monet",
    "options": ["Claude Monet", "Auguste Rodin", "Paul Cézanne"]
  },
  {
    "country": "Francia",
    "question": "FRA-34 | ¿Cuál es el río más largo de Francia?",
    "answer": "Loira",
    "options": ["Sena", "Ródano", "Loira"]
  },
  {
    "country": "Francia",
    "question": "FRA-37 | ¿Cuál es la isla más grande perteneciente a Francia metropolitana?",
    "answer": "Córcega",
    "options": ["Córcega", "Reunión", "Martinica"]
  },
  {
    "country": "Francia",
    "question": "FRA-38 | ¿Qué rey francés fue ejecutado durante la Revolución Francesa?",
    "answer": "Luis XVI",
    "options": ["Luis XIV", "Luis XV", "Luis XVI"]
  },
  {
    "country": "Francia",
    "question": "FRA-39 | ¿Quién pintó la famosa obra \"La Libertad guiando al pueblo\"?",
    "answer": "Eugène Delacroix",
    "options": ["Claude Monet", "Eugène Delacroix", "Edgar Degas"]
  },
  {
    "country": "Francia",
    "question": "FRA-40 | ¿Qué ciudad fue la capital de Francia antes de que París se consolidara definitivamente como sede del poder real?",
    "answer": "Tours",
    "options": ["Reims", "Tours", "Dijon"]
  },
  {
    "country": "Francia",
    "question": "FRA-41 | ¿Cuál es el departamento francés más poblado?",
    "answer": "Norte (Nord)",
    "options": ["Norte (Nord)", "Bocas del Ródano", "París"]
  },
  {
    "country": "Francia",
    "question": "FRA-42 | ¿Qué región francesa es famosa por los desembarcos aliados del Día D en 1944?",
    "answer": "Normandía",
    "options": ["Bretaña", "Normandía", "Alsacia"]
  },
  {
    "country": "Francia",
    "question": "FRA-43 | ¿Cuál fue el nombre del régimen francés colaboracionista con Alemania durante la Segunda Guerra Mundial?",
    "answer": "Gobierno de Vichy",
    "options": ["Quinta República", "Gobierno de Vichy", "Directorio Francés"]
  },
  {
    "country": "Francia",
    "question": "FRA-44 | ¿Quién lideró la resistencia francesa durante la Segunda Guerra Mundial y luego fue presidente de Francia?",
    "answer": "Charles de Gaulle",
    "options": ["Georges Pompidou", "Charles de Gaulle", "François Mitterrand"]
  },
  {
    "country": "Francia",
    "question": "FRA-45 | ¿A qué región administrativa pertenece la ciudad de París?",
    "answer": "Île-de-France",
    "options": ["Île-de-France", "Normandía", "Occitania"]
  },
  {
    "country": "Francia",
    "question": "FRA-46 | ¿A qué región pertenece la ciudad de Lyon?",
    "answer": "Auvernia-Ródano-Alpes",
    "options": ["Provenza-Alpes-Costa Azul", "Auvernia-Ródano-Alpes", "Nueva Aquitania"]
  },
  {
    "country": "Francia",
    "question": "FRA-47 | ¿Cuál es la segunda región más poblada de Francia después de Île-de-France?",
    "answer": "Auvernia-Ródano-Alpes",
    "options": ["Occitania", "Auvernia-Ródano-Alpes", "Bretaña"]
  },
  {
    "country": "Francia",
    "question": "FRA-48 | ¿En qué ciudad nació Kylian Mbappé?",
    "answer": "París",
    "options": ["París", "Marsella", "Lyon"]
  },
  {
    "country": "Francia",
    "question": "FRA-50 | ¿Contra qué selección convirtió Mbappé dos goles en los octavos de final del Mundial 2018?",
    "answer": "Argentina",
    "options": ["Croacia", "Argentina", "Uruguay"]
  },
  {
    "country": "Francia",
    "question": "FRA-51 | ¿Quién asistió a Kylian Mbappé en su primer gol ante Argentina en Rusia 2018?",
    "answer": "Lucas Hernández",
    "options": ["Antoine Griezmann", "Lucas Hernández", "Paul Pogba"]
  },
  {
    "country": "Francia",
    "question": "FRA-52 | ¿Qué dorsal utilizó Kylian Mbappé en los Mundiales 2018 y 2022?",
    "answer": "10",
    "options": ["7", "10", "11"]
  },
  {
    "country": "Francia",
    "question": "FRA-53 | ¿En qué ciudad nació Antoine Griezmann?",
    "answer": "Mâcon",
    "options": ["Mâcon", "Lyon", "París"]
  },
  {
    "country": "Francia",
    "question": "FRA-54 | ¿Cuántos goles convirtió Antoine Griezmann en el Mundial 2018?",
    "answer": "4",
    "options": ["3", "4", "5"]
  },
  {
    "country": "Francia",
    "question": "FRA-55 | ¿Contra qué selección convirtió Griezmann de penal en la final del Mundial 2018?",
    "answer": "Croacia",
    "options": ["Bélgica", "Croacia", "Inglaterra"]
  },
  {
    "country": "Francia",
    "question": "FRA-56 | ¿Qué delantero francés marcó el gol de oro que le dio a Francia la Eurocopa 2000?",
    "answer": "David Trezeguet",
    "options": ["Thierry Henry", "David Trezeguet", "Sylvain Wiltord"]
  },
  {
    "country": "Francia",
    "question": "FRA-57 | ¿En qué país nació David Trezeguet?",
    "answer": "Argentina",
    "options": ["Francia", "Argentina", "Uruguay"]
  },
  {
    "country": "Francia",
    "question": "FRA-58 | ¿En qué ciudad nació David Trezeguet?",
    "answer": "Buenos Aires",
    "options": ["Rosario", "Buenos Aires", "Córdoba"]
  },
  {
    "country": "Francia",
    "question": "FRA-59 | ¿Cuántos goles convirtió David Trezeguet en los Mundiales con Francia?",
    "answer": "4",
    "options": ["3", "5", "4"]
  },
  {
    "country": "Francia",
    "question": "FRA-60 | ¿Qué selección eliminó a Francia por penales en la final del Mundial 2006, donde participó David Trezeguet?",
    "answer": "Italia",
    "options": ["Alemania", "Italia", "Brasil"]
  },
  {
    "country": "Francia",
    "question": "FRA-61 | ¿Quién fue el máximo goleador de Francia en el Mundial 2022?",
    "answer": "Kylian Mbappé",
    "options": ["Olivier Giroud", "Kylian Mbappé", "Antoine Griezmann"]
  },
  {
    "country": "Francia",
    "question": "FRA-62 | ¿Cuántos goles marcó Mbappé en el Mundial 2022?",
    "answer": "8",
    "options": ["6", "7", "8"]
  },
  {
    "country": "Francia",
    "question": "FRA-63 | ¿Contra qué selección debutó Kylian Mbappé en una Copa del Mundo?",
    "answer": "Australia",
    "options": ["Australia", "Perú", "Dinamarca"]
  },

  // ==========================================
  // ECUADOR
  // ==========================================
  {
    "country": "Ecuador",
    "question": "ECU-3 | ¿Cuál es el río más largo de la cuenca amazónica que nace en Ecuador?",
    "answer": "Río Napo",
    "options": ["Río Napo", "Río Guayas", "Río Pastaza"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-4 | ¿Cuál es el plato típico que consiste en una sopa de pescado y yuca?",
    "answer": "Encebollado",
    "options": ["Ceviche", "Encebollado", "Locro"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-5 | ¿Qué presidente ecuatoriano impulsó la construcción del ferrocarril trasandino?",
    "answer": "Eloy Alfaro",
    "options": ["Eloy Alfaro", "Gabriel García Moreno", "José María Velasco Ibarra"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-7 | ¿En qué ciudad se encuentra el monumento a la Mitad del Mundo?",
    "answer": "Quito",
    "options": ["Latacunga", "Quito", "Ibarra"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-8 | ¿Qué naturalista inglés visitó las Galápagos para desarrollar su teoría de la evolución?",
    "answer": "Charles Darwin",
    "options": ["Isaac Newton", "Charles Darwin", "Gregor Mendel"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-9 | ¿En qué año clasificó Ecuador a su primer Mundial?",
    "answer": "Corea-Japón 2002",
    "options": ["Francia 1998", "Corea-Japón 2002", "Alemania 2006"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-10 | ¿Quién era el DT de Ecuador en su debut mundialista?",
    "answer": "Hernán Darío Gómez",
    "options": ["Hernán Darío Gómez", "Luis Fernando Suárez", "Reinaldo Rueda"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-11 | ¿Contra qué selección debutó Ecuador en el Mundial 2002?",
    "answer": "Italia",
    "options": ["Italia", "México", "Croacia"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-12 | ¿Quién marcó el primer gol de Ecuador en un Mundial?",
    "answer": "Agustín Delgado",
    "options": ["Jaime Iván Kaviedes", "Agustín Delgado", "Carlos Tenorio"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-14 | ¿En qué Mundial Ecuador llegó por primera vez a Octavos de Final?",
    "answer": "Alemania 2006",
    "options": ["Corea-Japón 2002", "Alemania 2006", "Brasil 2014"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-15 | ¿Quién marcó el primer gol del triunfo ante Polonia en 2006?",
    "answer": "Carlos Tenorio",
    "options": ["Carlos Tenorio", "Enner Valencia", "Felipe Caicedo"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-16 | ¿Qué selección eliminó a Ecuador en los Octavos de Final de 2006?",
    "answer": "Inglaterra",
    "options": ["Alemania", "Brasil", "Inglaterra"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-17 | ¿Cuál fue el resultado del partido inaugural Qatar vs Ecuador en 2022?",
    "answer": "0-2",
    "options": ["0-1", "0-2", "1-2"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-18 | ¿Quién es el máximo goleador histórico de Ecuador en los Mundiales?",
    "answer": "Agustín Delgado",
    "options": ["Agustín Delgado", "Enner Valencia", "Édison Méndez"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-19 | ¿En qué estadio debutó Ecuador en el Mundial de Qatar 2022?",
    "answer": "Estadio Al Bayt",
    "options": ["Estadio Lusail", "Estadio Al Bayt", "Estadio 974"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-20 | ¿Quién era el capitán de Ecuador en el Mundial 2006?",
    "answer": "Iván Hurtado",
    "options": ["Iván Hurtado", "Álex Aguinaga", "Giovanny Espinoza"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-21 | ¿Cuántos puntos sumó Ecuador en la fase de grupos de Qatar 2022?",
    "answer": "4 puntos",
    "options": ["3 puntos", "4 puntos", "6 puntos"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-22 | ¿Quién fue el DT que llevó a Ecuador al Mundial de Qatar 2022?",
    "answer": "Gustavo Alfaro",
    "options": ["Jorge Célico", "Gustavo Alfaro", "Jordi Cruyff"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-23 | ¿Cuál es la segunda ciudad más poblada de Ecuador?",
    "answer": "Guayaquil",
    "options": ["Guayaquil", "Cuenca", "Ambato"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-24 | ¿Cuál es la tercera ciudad más poblada de Ecuador?",
    "answer": "Cuenca",
    "options": ["Cuenca", "Manta", "Loja"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-25 | ¿Cuál es la cuarta ciudad más poblada de Ecuador?",
    "answer": "Santo Domingo",
    "options": ["Santo Domingo", "Portoviejo", "Machala"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-26 | ¿Cuál es la octava ciudad más poblada de Ecuador?",
    "answer": "Durán",
    "options": ["Durán", "Riobamba", "Ibarra"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-27 | ¿Cuál es la provincia más poblada de Ecuador?",
    "answer": "Guayas",
    "options": ["Guayas", "Pichincha", "Manabí"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-30 | ¿Cuál es la segunda montaña más alta de Ecuador?",
    "answer": "Cotopaxi",
    "options": ["Cotopaxi", "Antisana", "Altar"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-31 | ¿Qué volcán ecuatoriano es considerado uno de los más peligrosos del mundo por su actividad?",
    "answer": "Tungurahua",
    "options": ["Tungurahua", "Cayambe", "Illiniza"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-32 | ¿Cuál es la capital de la provincia de Manabí?",
    "answer": "Portoviejo",
    "options": ["Portoviejo", "Manta", "Chone"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-33 | ¿Quién fue el presidente de Ecuador cuando la selección alcanzó por primera vez los octavos de final en Alemania 2006?",
    "answer": "Alfredo Palacio",
    "options": ["Alfredo Palacio", "Rafael Correa", "Lucio Gutiérrez"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-34 | ¿Qué presidente ecuatoriano gobernaba cuando Ecuador debutó en los Mundiales en 2002?",
    "answer": "Gustavo Noboa",
    "options": ["Gustavo Noboa", "Jamil Mahuad", "Lucio Gutiérrez"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-35 | ¿En qué ciudad nació Agustín Delgado?",
    "answer": "Ibarra",
    "options": ["Ibarra", "Quito", "Cuenca"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-36 | ¿Cuántos partidos mundialistas disputó Agustín Delgado con Ecuador?",
    "answer": "8",
    "options": ["8", "6", "5"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-37 | ¿Quién es el máximo goleador de Ecuador en los Mundiales?",
    "answer": "Agustín Delgado",
    "options": ["Agustín Delgado", "Enner Valencia", "Carlos Tenorio"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-38 | ¿En qué ciudad nació Enner Valencia?",
    "answer": "Esmeraldas",
    "options": ["Esmeraldas", "Quito", "Guayaquil"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-39 | ¿Cuántos goles marcó Enner Valencia en el Mundial de Qatar 2022?",
    "answer": "3",
    "options": ["3", "2", "4"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-40 | ¿En qué ciudad nació Antonio Valencia?",
    "answer": "Lago Agrio",
    "options": ["Lago Agrio", "Cuenca", "Ambato"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-41 | ¿Qué futbolista ecuatoriano disputó los Mundiales 2002, 2006 y 2014?",
    "answer": "Antonio Valencia",
    "options": ["Antonio Valencia", "Enner Valencia", "Carlos Tenorio"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-42 | ¿Qué selección eliminó a Ecuador en la fase de grupos del Mundial 2014 al empatarle en la última fecha?",
    "answer": "Francia",
    "options": ["Francia", "Honduras", "Suiza"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-43 | ¿Qué escritor ecuatoriano escribió la novela \"Cumandá\"?",
    "answer": "Juan León Mera",
    "options": ["Juan León Mera", "Jorge Icaza", "Demetrio Aguilera Malta"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-44 | ¿Qué pintor ecuatoriano es famoso por sus obras de temática indígena?",
    "answer": "Oswaldo Guayasamín",
    "options": ["Oswaldo Guayasamín", "Eduedardo Kingman", "Camilo Egas"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-45 | ¿En qué ciudad nació Oswaldo Guayasamín?",
    "answer": "Quito",
    "options": ["Quito", "Cuenca", "Loja"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-46 | ¿Cuál es el museo más importante dedicado a Guayasamín en Quito?",
    "answer": "Capilla del Hombre",
    "options": ["Capilla del Hombre", "Museo Nacional", "Casa de la Cultura"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-47 | ¿Qué ciudad ecuatoriana es conocida como la \"Atenas del Ecuador\"?",
    "answer": "Cuenca",
    "options": ["Cuenca", "Loja", "Riobamba"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-49 | ¿Cuál es el río más caudaloso de Ecuador?",
    "answer": "Guayas",
    "options": ["Guayas", "Napo", "Esmeraldas"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-50 | ¿Qué ciudad ecuatoriana fue declarada Patrimonio Cultural de la Humanidad por la UNESCO en 1978 junto con Cracovia?",
    "answer": "Quito",
    "options": ["Quito", "Cuenca", "Guayaquil"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-51 | ¿Qué país eliminó a Ecuador en las Eliminatorias para el Mundial 1998 dejándolo fuera por diferencia de gol?",
    "answer": "Chile",
    "options": ["Chile", "Perú", "Paraguay"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-52 | ¿Quién fue el capitán de Ecuador en el Mundial 2002?",
    "answer": "Álex Aguinaga",
    "options": ["Álex Aguinaga", "Iván Hurtado", "Ulises de la Cruz"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-54 | ¿Cuántos Mundiales disputó Ecuador hasta Qatar 2022?",
    "answer": "4",
    "options": ["4", "3", "5"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-55 | ¿Qué selección derrotó a Ecuador por 3-0 en su debut mundialista en 2002?",
    "answer": "Italia",
    "options": ["Italia", "México", "Croacia"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-56 | ¿Qué jugadores anotaron los goles de Ecuador en la victoria ante Polonia en Alemania 2006?",
    "answer": "Carlos Tenorio y Agustín Delgado",
    "options": ["Carlos Tenorio y Agustín Delgado", "Carlos Tenorio y Méndez", "Delgado y Kaviedes"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-57 | ¿Qué provincia ecuatoriana es conocida por la producción de cacao fino de aroma?",
    "answer": "Los Ríos",
    "options": ["Los Ríos", "Carchi", "Bolívar"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-58 | ¿Cuál es el punto más alto de Ecuador?",
    "answer": "Chimborazo",
    "options": ["Chimborazo", "Cotopaxi", "Cayambe"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-59 | ¿Qué ciudad es la capital de la provincia de Imbabura?",
    "answer": "Ibarra",
    "options": ["Ibarra", "Otavalo", "Tulcán"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-60 | ¿Cuál es el lago navegable más importante de Ecuador?",
    "answer": "San Pablo",
    "options": ["San Pablo", "Cuicocha", "Yahuarcocha"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-61 | ¿Qué ciudad ecuatoriana es conocida como la capital mundial del sombrero de paja toquilla?",
    "answer": "Cuenca",
    "options": ["Cuenca", "Loja", "Riobamba"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-62 | ¿Quién fue el primer ecuatoriano en marcar un gol en una Copa del Mundo?",
    "answer": "Agustín Delgado",
    "options": ["Agustín Delgado", "Carlos Tenorio", "Álex Aguinaga"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-63 | ¿En qué minuto marcó Agustín Delgado el primer gol mundialista de Ecuador ante México en 2002?",
    "answer": "45+1'",
    "options": ["45+1'", "45'", "5'"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-64 | ¿Contra qué selecciones marcó Enner Valencia sus tres goles en Qatar 2022?",
    "answer": "Qatar y Países Bajos",
    "options": ["Qatar y Países Bajos", "Senegal y Qatar", "Países Bajos y Senegal"]
  },
  {
    "country": "Ecuador",
    "question": "ECU-65 | ¿Cuál es el único país con el que Ecuador comparte frontera al sur?",
    "answer": "Perú",
    "options": ["Perú", "Colombia", "Brasil"]
  },

  // ==========================================
  // MÉXICO
  // ==========================================
  {
    "country": "México",
    "question": "MEX-1 | ¿Qué civilización construyó Chichén Itzá?",
    "answer": "Maya",
    "options": ["Azteca", "Maya", "Inca", "Olmeca"]
  },
  {
    "country": "México",
    "question": "MEX-2 | ¿Qué famosa pirámide se encuentra en Chichén Itzá?",
    "answer": "Kukulkán",
    "options": ["Pirámide del Sol", "Kukulkán", "Templo Mayor", "Teotihuacán"]
  },
  {
    "country": "México",
    "question": "MEX-3 | ¿Qué golfo se encuentra al este de México?",
    "answer": "Golfo de México",
    "options": ["Golfo de Panamá", "Golfo de California", "Golfo de México", "Golfo Pérsico"]
  },
  {
    "country": "México",
    "question": "MEX-4 | ¿Qué comida mexicana es Patrimonio Cultural de la Humanidad?",
    "answer": "Tacos",
    "options": ["Pizza", "Tacos", "Hamburguesa", "Sushi"]
  },
  {
    "country": "México",
    "question": "MEX-5 | ¿Qué picante es muy usado en la gastronomía mexicana?",
    "answer": "Chile",
    "options": ["Wasabi", "Ají amarillo", "Chile", "Curry"]
  },
  {
    "country": "México",
    "question": "MEX-6 | ¿Qué muralista mexicano pintó grandes obras sociales e históricas?",
    "answer": "Diego Rivera",
    "options": ["Picasso", "Diego Rivera", "Dalí", "Botero"]
  },
  {
    "country": "México",
    "question": "MEX-7 | ¿Qué famoso luchador mexicano utilizaba máscara plateada?",
    "answer": "El Santo",
    "options": ["Blue Demon", "El Santo", "Huracán Ramírez", "Mil Máscaras"]
  },
  {
    "country": "México",
    "question": "MEX-8 | ¿Qué arquero mexicano usaba uniformes muy coloridos en los años 90?",
    "answer": "Campos",
    "options": ["Ochoa", "Campos", "Carbajal", "Corona"]
  },
  {
    "country": "México",
    "question": "MEX-9 | ¿Qué jugador mexicano anotó contra Alemania en el Mundial 2018?",
    "answer": "Lozano",
    "options": ["Chicharito", "Lozano", "Guardado", "Jiménez"]
  },
  {
    "country": "México",
    "question": "MEX-10 | ¿Qué delantero mexicano es apodado “Chicharito”?",
    "answer": "Javier Hernández",
    "options": ["Hugo Sánchez", "Javier Hernández", "Cuauhtémoc Blanco", "Rafa Márquez"]
  },
  {
    "country": "México",
    "question": "MEX-11 | ¿Qué jugador mexicano realizó un penal “a lo Panenka” famoso en Francia 1998?",
    "answer": "Cuauhtémoc Blanco",
    "options": ["Borgetti", "Cuauhtémoc Blanco", "Hernández", "Márquez"]
  },
  {
    "country": "México",
    "question": "MEX-12 | ¿Qué península mexicana separa el Golfo de México del Caribe?",
    "answer": "Yucatán",
    "options": ["Yucatán", "California", "Sonora", "Oaxaca"]
  },
  {
    "country": "México",
    "question": "MEX-13 | ¿Qué género musical es tradicional de México?",
    "answer": "Mariachi",
    "options": ["Tango", "Mariachi", "Samba", "Flamenco"]
  },
  {
    "country": "México",
    "question": "MEX-15 | ¿Qué volcán mexicano es uno de los más famosos?",
    "answer": "Popocatépetl",
    "options": ["Everest", "Popocatépetl", "Aconcagua", "Vesubio"]
  },
  {
    "country": "México",
    "question": "MEX-16 | ¿Qué país limita al norte con México?",
    "answer": "Estados Unidos",
    "options": ["Canadá", "Guatemala", "Estados Unidos", "Belice"]
  },
  {
    "country": "México",
    "question": "MEX-18 | ¿Qué lago rodeaba originalmente a la ciudad de Tenochtitlán?",
    "answer": "Lago Texcoco",
    "options": ["Lago Titicaca", "Lago Texcoco", "Lago Chapala", "Lago Atitlán"]
  },
  {
    "country": "México",
    "question": "MEX-19 | ¿Qué pueblo indígena fue enemigo de los aztecas y ayudó a Hernán Cortés en la conquista?",
    "answer": "Tlaxcaltecas",
    "options": ["Mayas", "Olmecas", "Tlaxcaltecas", "Incas"]
  },
  {
    "country": "México",
    "question": "MEX-20 | ¿Cuál es la tercera ciudad más poblada de México?",
    "answer": "Puebla",
    "options": ["Puebla", "Tijuana", "León"]
  },
  {
    "country": "México",
    "question": "MEX-21 | ¿Cuál es la quinta ciudad más poblada de México?",
    "answer": "León",
    "options": ["Juárez", "León", "Mérida"]
  },
  {
    "country": "México",
    "question": "MEX-22 | ¿Cuál es el estado más poblado de México?",
    "answer": "Estado de México",
    "options": ["Jalisco", "Estado de México", "Veracruz"]
  },
  {
    "country": "México",
    "question": "MEX-23 | ¿Cuántos estados tiene México?",
    "answer": "32",
    "options": ["31", "33", "32"]
  },
  {
    "country": "México",
    "question": "MEX-24 | ¿Cuál es el pico más alto de México?",
    "answer": "Pico de Orizaba",
    "options": ["Popocatépetl", "Pico de Orizaba", "Iztaccíhuatl"]
  },
  {
    "country": "México",
    "question": "MEX-25 | ¿Qué estado mexicano tiene frontera con Belice?",
    "answer": "Quintana Roo",
    "options": ["Yucatán", "Quintana Roo", "Campeche"]
  },
  {
    "country": "México",
    "question": "MEX-26 | ¿Cuál es el estado más grande de México por superficie?",
    "answer": "Chihuahua",
    "options": ["Sonora", "Chihuahua", "Coahuila"]
  },
  {
    "country": "México",
    "question": "MEX-27 | ¿Quién fue el último emperador azteca?",
    "answer": "Cuauhtémoc",
    "options": ["Moctezuma I", "Cuauhtémoc", "Nezahualcóyotl"]
  },
  {
    "country": "México",
    "question": "MEX-28 | ¿Quién fue el capitán de México en el Mundial 2010?",
    "answer": "Rafael Márquez",
    "options": ["Rafael Márquez", "Cuauhtémoc Blanco", "Guardado"]
  },
  {
    "country": "México",
    "question": "MEX-29 | ¿Quién era el entrenador de México en el Mundial 2014?",
    "answer": "Miguel Herrera",
    "options": ["Javier Aguirre", "Miguel Herrera", "Ricardo La Volpe"]
  },
  {
    "country": "México",
    "question": "MEX-30 | ¿En qué minuto anotó Hirving Lozano el gol ante Alemania en Rusia 2018?",
    "answer": "35'",
    "options": ["35'", "42'", "51'"]
  },
  {
    "country": "México",
    "question": "MEX-31 | ¿Qué arquero mexicano fue capitán en el Mundial 2022?",
    "answer": "Ochoa",
    "options": ["Ochoa", "Corona", "Talavera"]
  },
  {
    "country": "México",
    "question": "MEX-32 | ¿Cuántos Mundiales disputó Rafael Márquez?",
    "answer": "5",
    "options": ["4", "5", "6"]
  },
  {
    "country": "México",
    "question": "MEX-33 | ¿Qué jugador mexicano marcó el gol del empate ante Argentina en Alemania 2006?",
    "answer": "Rafa Márquez",
    "options": ["Borgetti", "Rafa Márquez", "Pardo"]
  },
  {
    "country": "México",
    "question": "MEX-34 | ¿Qué estadio será sede de la inauguración del Mundial 2026?",
    "answer": "Estadio Azteca",
    "options": ["Estadio Azteca", "Akron", "BBVA"]
  },
  {
    "country": "México",
    "question": "MEX-35 | ¿Cuál es la octava ciudad más poblada de México?",
    "answer": "Zapopan",
    "options": ["Zapopan", "Aguascalientes", "Mexicali"]
  },
  {
    "country": "México",
    "question": "MEX-36 | ¿Cuál es la novena ciudad más poblada de México?",
    "answer": "Nezahualcóyotl",
    "options": ["Monterrey", "Nezahualcóyotl", "Querétaro"]
  },
  {
    "country": "México",
    "question": "MEX-37 | ¿Qué marca vistió a México en el Mundial 1986?",
    "answer": "Adidas",
    "options": ["Adidas", "Nike", "Puma"]
  },
  {
    "country": "México",
    "question": "MEX-39 | ¿Qué marca viste actualmente a la selección mexicana?",
    "answer": "Adidas",
    "options": ["Nike", "Adidas", "Puma"]
  },
  {
    "country": "México",
    "question": "MEX-40 | ¿Qué jugador convirtió el primer gol de México en el Mundial 2018?",
    "answer": "Hirving Lozano",
    "options": ["Javier Hernández", "Hirving Lozano", "Carlos Vela"]
  },
  {
    "country": "México",
    "question": "MEX-41 | ¿En qué minuto Hirving Lozano marcó el gol ante Alemania en Rusia 2018?",
    "answer": "35'",
    "options": ["35'", "41'", "52'"]
  },
  {
    "country": "México",
    "question": "MEX-42 | ¿En qué minuto Rafael Márquez abrió el marcador ante Argentina en 2006?",
    "answer": "6'",
    "options": ["6'", "12'", "19'"]
  },
  {
    "country": "México",
    "question": "MEX-43 | ¿Quién marcó el gol de México ante Países Bajos en el Mundial 2014?",
    "answer": "Giovani dos Santos",
    "options": ["Giovani dos Santos", "Guardado", "Chicharito"]
  },
  {
    "country": "México",
    "question": "MEX-44 | ¿En qué minuto Giovani dos Santos anotó ante Países Bajos en Brasil 2014?",
    "answer": "48'",
    "options": ["48'", "58'", "67'"]
  },
  {
    "country": "México",
    "question": "MEX-45 | ¿Qué jugador mexicano convirtió el gol del triunfo ante Croacia en el Mundial 2014?",
    "answer": "Chicharito Hernández",
    "options": ["Rafa Márquez", "Chicharito Hernández", "Guardado"]
  },
  {
    "country": "México",
    "question": "MEX-46 | ¿Qué jugadores convirtieron los goles de México ante Arabia Saudita en Qatar 2022?",
    "answer": "Chávez y Martín",
    "options": ["Chávez y Martín", "Lozano y Vega", "Martín y Jiménez"]
  },
  {
    "country": "México",
    "question": "MEX-47 | ¿Quién marcó el gol de tiro libre ante Arabia Saudita en Qatar 2022?",
    "answer": "Luis Chávez",
    "options": ["Alexis Vega", "Luis Chávez", "Edson Álvarez"]
  },
  {
    "country": "México",
    "question": "MEX-48 | ¿Qué jugador mexicano marcó el gol más rápido de México en los Mundiales?",
    "answer": "Oribe Peralta",
    "options": ["Cuauhtémoc Blanco", "Javier Hernández", "Oribe Peralta"]
  },
  {
    "country": "México",
    "question": "MEX-49 | ¿Quién convirtió el primer gol de México en el Mundial 2026?",
    "answer": "Edson Álvarez",
    "options": ["Santiago Giménez", "Raúl Jiménez", "Edson Álvarez"]
  },
  {
    "country": "México",
    "question": "MEX-50 | ¿En qué minuto convirtió Edson Álvarez el primer gol de México en el Mundial 2026?",
    "answer": "34'",
    "options": ["22'", "28'", "34'"]
  },
  {
    "country": "México",
    "question": "MEX-51 | ¿Quién convirtió el segundo gol de México en la victoria 2-0 ante Sudáfrica?",
    "answer": "Santiago Giménez",
    "options": ["Santiago Giménez", "Luis Chávez", "César Huerta"]
  },
  {
    "country": "México",
    "question": "MEX-52 | ¿Quién dio la asistencia del primer gol de México en el Mundial 2026?",
    "answer": "Luis Chávez",
    "options": ["Orbelín Pineda", "Luis Chávez", "Julián Quiñones"]
  },
  {
    "country": "México",
    "question": "MEX-53 | ¿Qué resultado obtuvo México en el partido inaugural ante Sudáfrica?",
    "answer": "2-0",
    "options": ["1-0", "2-0", "3-1"]
  },
  {
    "country": "México",
    "question": "MEX-54 | ¿Qué jugador convirtió el gol de la victoria ante Corea del Sur en el Mundial 2026?",
    "answer": "Luis Romo",
    "options": ["Raúl Jiménez", "Luis Romo", "César Huerta"]
  },
  {
    "country": "México",
    "question": "MEX-55 | ¿En qué minuto anotó Luis Romo el gol ante Corea del Sur en el Mundial 2026?",
    "answer": "50'",
    "options": ["44'", "50'", "57'"]
  },
  {
    "country": "México",
    "question": "MEX-56 | ¿Quién asistió a Luis Romo en el gol frente a Corea del Sur?",
    "answer": "Santiago Giménez",
    "options": ["Alexis Vega", "Roberto Alvarado", "Santiago Giménez"]
  },
  {
    "country": "México",
    "question": "MEX-57 | ¿Cuántos goles recibió México en sus dos primeros partidos del Mundial 2026?",
    "answer": "0",
    "options": ["0", "1", "2"]
  },
  {
    "country": "México",
    "question": "MEX-58 | ¿Quién es el primer asistente técnico de Javier Aguirre en la Selección de México?",
    "answer": "Rafael Márquez",
    "options": ["Rafael Márquez", "Pavel Pardo", "Andrés Guardado"]
  },
  {
    "country": "México",
    "question": "MEX-59 | ¿Cuál fue el único cambio utilizado por México en los últimos minutos ante Corea del Sur en el Mundial 2026?",
    "answer": "Orbelín Pineda por Luis Romo",
    "options": ["César Huerta por Alexis Vega", "Raúl Jiménez por Santiago Giménez", "Orbelín Pineda por Luis Romo"]
  },
  {
    "country": "México",
    "question": "MEX-60 | ¿Cuántos Mundiales disputó Guillermo Ochoa con México?",
    "answer": "6",
    "options": ["5", "6", "7"]
  },
  {
    "country": "México",
    "question": "MEX-61 | ¿Cuántos partidos mundialistas acumula Guillermo Ochoa con la Selección de México?",
    "answer": "20",
    "options": ["15", "18", "20"]
  },
  {
    "country": "México",
    "question": "MEX-62 | ¿Cuál es el séptimo estado más poblado de México?",
    "answer": "Nuevo León",
    "options": ["Nuevo León", "Chiapas", "Oaxaca"]
  },
  {
    "country": "México",
    "question": "MEX-63 | ¿Cuál es el octavo estado más poblado de México?",
    "answer": "Chiapas",
    "options": ["Chiapas", "Oaxaca", "Michoacán"]
  },
  {
    "country": "México",
    "question": "MEX-64 | ¿Cuál es el noveno estado más poblado de México?",
    "answer": "Oaxaca",
    "options": ["Oaxaca", "Michoacán", "Chihuahua"]
  },
  {
    "country": "México",
    "question": "MEX-65 | ¿Cuál es el décimo estado más poblado de México?",
    "answer": "Michoacán",
    "options": ["Michoacán", "Chihuahua", "Sonora"]
  },
  {
    "country": "México",
    "question": "MEX-66 | ¿Cuál es el undécimo estado más poblado de México?",
    "answer": "Chihuahua",
    "options": ["Chihuahua", "Guerrero", "Tamaulipas"]
  },
  {
    "country": "México",
    "question": "MEX-67 | ¿Cuál es el duodécimo estado más poblado de México?",
    "answer": "Guerrero",
    "options": ["Guerrero", "Tamaulipas", "Baja California"]
  },
  {
    "country": "México",
    "question": "MEX-68 | ¿Cuál es la séptima ciudad más poblada de México?",
    "answer": "Ciudad Juárez",
    "options": ["Ciudad Juárez", "Zapopan", "Monterrey"]
  },

  // ==========================================
  // EGIPTO
  // ==========================================
  {
    "country": "Egipto",
    "question": "EGI-1 | ¿Qué río atraviesa gran parte de Egipto?",
    "answer": "Nilo",
    "options": ["Amazonas", "Nilo", "Congo", "Níger"]
  },
  {
    "country": "Egipto",
    "question": "EGI-2 | ¿Cuál es la pirámide más grande de Egipto?",
    "answer": "Gran Pirámide de Keops",
    "options": ["Pirámide Roja", "Pirámide de Micerino", "Pirámide de Kefrén", "Gran Pirámide de Keops"]
  },
  {
    "country": "Egipto",
    "question": "EGI-3 | ¿Cómo se llama la famosa estatua ubicada junto a las pirámides de Giza?",
    "answer": "Esfinge de Giza",
    "options": ["Obelisco Real", "Esfinge de Giza", "León del Nilo", "Guardián Solar"]
  },
  {
    "country": "Egipto",
    "question": "EGI-4 | ¿Qué mar limita al norte de Egipto?",
    "answer": "Mar Mediterráneo",
    "options": ["Mar Rojo", "Mar Caspio", "Mar Mediterráneo", "Mar Negro"]
  },
  {
    "country": "Egipto",
    "question": "EGI-5 | ¿Qué canal estratégico conecta el Mediterráneo con el Mar Rojo?",
    "answer": "Canal de Suez",
    "options": ["Canal de Panamá", "Canal de Suez", "Canal de Corinto", "Canal de Kiel"]
  },
  {
    "country": "Egipto",
    "question": "EGI-6 | ¿Aproximadamente cuántos habitantes tiene Egipto según estimaciones recientes?",
    "answer": "112 millones",
    "options": ["45 millones", "70 millones", "112 millones", "180 millones"]
  },
  {
    "country": "Egipto",
    "question": "EGI-7 | ¿En qué Mundial volvió Egipto a participar después de 28 años?",
    "answer": "2018",
    "options": ["2010", "2014", "2018", "2022"]
  },
  {
    "country": "Egipto",
    "question": "EGI-8 | ¿Qué famoso delantero egipcio jugó en el Liverpool FC?",
    "answer": "Salah",
    "options": ["Aboutrika", "Hassan", "Salah", "Hossam Ghaly"]
  },
  {
    "country": "Egipto",
    "question": "EGI-9 | ¿Qué ciudad egipcia es famosa por albergar las pirámides?",
    "answer": "Giza",
    "options": ["Luxor", "Giza", "Asuán", "Port Said"]
  },
  {
    "country": "Egipto",
    "question": "EGI-10 | ¿Qué idioma oficial se habla en Egipto?",
    "answer": "Árabe",
    "options": ["Persa", "Turco", "Árabe", "Hebreo"]
  },
  {
    "country": "Egipto",
    "question": "EGI-11 | ¿Qué selección eliminó a Egipto del Mundial 1990?",
    "answer": "No avanzó de fase de grupos",
    "options": ["Países Bajos", "Inglaterra", "Irlanda", "No avanzó de fase de grupos"]
  },
  {
    "country": "Egipto",
    "question": "EGI-12 | ¿Qué resultado histórico consiguió Egipto ante Países Bajos en 1990?",
    "answer": "Empató 1-1",
    "options": ["Ganó 2-0", "Empató 1-1", "Ganó 1-0", "Perdió 5-0"]
  },
  {
    "country": "Egipto",
    "question": "EGI-13 | ¿Qué escritura utilizaban los antiguos egipcios?",
    "answer": "Jeroglíficos",
    "options": ["Cuneiforme", "Jeroglíficos", "Latín antiguo", "Sánscrito"]
  },
  {
    "country": "Egipto",
    "question": "EGI-14 | ¿Qué mar limita al este de Egipto?",
    "answer": "Mar Rojo",
    "options": ["Mar Rojo", "Mar Negro", "Mar Arábigo", "Mar Báltico"]
  },
  {
    "country": "Egipto",
    "question": "EGI-15 | ¿Cuál es la moneda oficial de Egipto?",
    "answer": "Libra egipcia",
    "options": ["Dinar", "Libra egipcia", "Peso egipcio", "Franco egipcio"]
  },
  {
    "country": "Egipto",
    "question": "EGI-16 | ¿Qué famoso templo se encuentra en Abu Simbel?",
    "answer": "Ramsés II",
    "options": ["Ramsés II", "Tutankamón", "Cleopatra", "Horus"]
  },
  {
    "country": "Egipto",
    "question": "EGI-17 | ¿Cuál es una de las principales ciudades portuarias egipcias sobre el Mediterráneo?",
    "answer": "Alejandría",
    "options": ["Alejandría", "Luxor", "Giza", "Asuán"]
  },
  {
    "country": "Egipto",
    "question": "EGI-18 | ¿Quién erró un penal decisivo para Egipto en la eliminación ante Senegal?",
    "answer": "Salah",
    "options": ["Salah", "Elneny", "Treceguet", "Hegazi"]
  },
  {
    "country": "Egipto",
    "question": "EGI-19 | ¿Qué famosa reina egipcia tuvo relación política con Julio César y Marco Antonio?",
    "answer": "Cleopatra",
    "options": ["Nefertiti", "Cleopatra", "Hatshepsut", "Isis"]
  },
  {
    "country": "Egipto",
    "question": "EGI-20 | ¿Qué famoso museo egipcio alberga tesoros de Tutankamón?",
    "answer": "Museo Egipcio de El Cairo",
    "options": ["Museo del Louvre", "Museo Egipcio de El Cairo", "Museo Akenatón", "Museo Nubio"]
  },
  {
    "country": "Egipto",
    "question": "EGI-21 | ¿Qué color predomina en la bandera de Egipto junto al blanco y negro?",
    "answer": "Rojo",
    "options": ["Azul", "Verde", "Rojo", "Dorado"]
  },
  {
    "country": "Egipto",
    "question": "EGI-22 | ¿Qué país limita al noreste con Egipto?",
    "answer": "Israel",
    "options": ["Jordania", "Siria", "Israel", "Turquía"]
  },
  {
    "country": "Egipto",
    "question": "EGI-23 | ¿Qué selección venció 2-1 a Egipto en el Mundial 2018 con un gol sobre el final?",
    "answer": "Arabia Saudita",
    "options": ["Arabia Saudita", "Rusia", "Uruguay", "Portugal"]
  },
  {
    "country": "Egipto",
    "question": "EGI-24 | ¿Qué jugador egipcio convirtió el primer gol africano en la historia de los Mundiales?",
    "answer": "Abdelrahman Fawzi",
    "options": ["Mohamed Salah", "Abdelrahman Fawzi", "El Khatib", "Hossam Hassan"]
  },
  {
    "country": "Egipto",
    "question": "EGI-25 | ¿Cuál es la segunda ciudad más poblada de Egipto?",
    "answer": "Alejandría",
    "options": ["Alejandría", "Giza", "Port Said"]
  },
  {
    "country": "Egipto",
    "question": "EGI-26 | ¿Cuál es la ciudad más poblada de Egipto?",
    "answer": "El Cairo",
    "options": ["Alejandría", "El Cairo", "Giza"]
  },
  {
    "country": "Egipto",
    "question": "EGI-27 | ¿Qué península pertenece a Egipto y conecta África con Asia?",
    "answer": "Sinaí",
    "options": ["Anatolia", "Sinaí", "Arábiga"]
  },
  {
    "country": "Egipto",
    "question": "EGI-28 | ¿Con cuántos países limita Egipto?",
    "answer": "4",
    "options": ["2", "3", "4"]
  },
  {
    "country": "Egipto",
    "question": "EGI-29 | ¿Qué país limita al sur con Egipto?",
    "answer": "Sudán",
    "options": ["Chad", "Sudán", "Etiopía"]
  },
  {
    "country": "Egipto",
    "question": "EGI-30 | ¿Cuál es el punto más alto de Egipto?",
    "answer": "Monte Catalina",
    "options": ["Monte Catalina", "Monte Sinaí", "Jebel Musa"]
  },
  {
    "country": "Egipto",
    "question": "EGI-31 | ¿Cuál es el lago más grande de Egipto?",
    "answer": "Lago Nasser",
    "options": ["Lago Nasser", "Lago Qarun", "Lago Mariout"]
  },
  {
    "country": "Egipto",
    "question": "EGI-32 | ¿Qué faraón mandó construir la Gran Pirámide de Giza?",
    "answer": "Keops",
    "options": ["Keops", "Kefrén", "Micerino"]
  },
  {
    "country": "Egipto",
    "question": "EGI-33 | ¿Qué faraón está asociado al templo de Abu Simbel?",
    "answer": "Ramsés II",
    "options": ["Tutankamón", "Ramsés II", "Akenatón"]
  },
  {
    "country": "Egipto",
    "question": "EGI-34 | ¿Quién descifró los jeroglíficos egipcios?",
    "answer": "Champollion",
    "options": ["Champollion", "Carter", "Mariette"]
  },
  {
    "country": "Egipto",
    "question": "EGI-35 | ¿En qué Mundial disputó Egipto su primer partido de la historia?",
    "answer": "1934",
    "options": ["1930", "1934", "1938"]
  },
  {
    "country": "Egipto",
    "question": "EGI-36 | ¿Contra qué selección debutó Egipto en los Mundiales?",
    "answer": "Hungría",
    "options": ["Hungría", "Italia", "Austria"]
  },
  {
    "country": "Egipto",
    "question": "EGI-37 | ¿Quién fue el capitán de Egipto en el Mundial 2018?",
    "answer": "Essam El-Hadary",
    "options": ["Mohamed Elneny", "Essam El-Hadary", "Mohamed Salah"]
  },
  {
    "country": "Egipto",
    "question": "EGI-38 | ¿Quién fue el entrenador de Egipto en el Mundial 2018?",
    "answer": "Héctor Cúper",
    "options": ["Héctor Cúper", "Hassan Shehata", "Carlos Queiroz"]
  },
  {
    "country": "Egipto",
    "question": "EGI-39 | ¿Qué arquero egipcio se convirtió en el jugador más veterano en disputar un Mundial?",
    "answer": "El-Hadary",
    "options": ["El Shenawy", "El-Hadary", "Ekramy"]
  },
  {
    "country": "Egipto",
    "question": "EGI-40 | ¿Qué edad tenía aproximadamente Essam El-Hadary cuando jugó en Rusia 2018?",
    "answer": "45 años",
    "options": ["40 años", "45 años", "48 años"]
  },
  {
    "country": "Egipto",
    "question": "EGI-41 | ¿Contra qué selección Mohamed Salah marcó su primer gol en una Copa del Mundo?",
    "answer": "Arabia Saudita",
    "options": ["Uruguay", "Rusia", "Arabia Saudita"]
  },
  {
    "country": "Egipto",
    "question": "EGI-42 | ¿En qué minuto Mohamed Salah anotó ese gol vs Arabia Saudita en Rusia 2018?",
    "answer": "22'",
    "options": ["22'", "37'", "61'"]
  },
  {
    "country": "Egipto",
    "question": "EGI-43 | ¿Cuál es la cuarta ciudad más poblada de Egipto?",
    "answer": "Shubra El-Kheima",
    "options": ["Shubra El-Kheima", "Luxor", "Port Said"]
  },
  {
    "country": "Egipto",
    "question": "EGI-44 | ¿Cuál es la quinta ciudad más poblada de Egipto?",
    "answer": "Port Said",
    "options": ["Alejandría", "Port Said", "Asuán"]
  },
  {
    "country": "Egipto",
    "question": "EGI-45 | ¿Qué faraón fue padre de Tutankamón y promovió el culto a un único dios?",
    "answer": "Akenatón",
    "options": ["Ramsés II", "Akenatón", "Keops"]
  },
  {
    "country": "Egipto",
    "question": "EGI-46 | ¿Cómo se llamaba la esposa de Akenatón y una de las reinas más famosas de Egipto?",
    "answer": "Nefertiti",
    "options": ["Cleopatra", "Nefertiti", "Hatshepsut"]
  },
  {
    "country": "Egipto",
    "question": "EGI-47 | ¿Qué faraona gobernó Egipto y es considerada una de las mujeres más poderosas de la Antigüedad?",
    "answer": "Hatshepsut",
    "options": ["Cleopatra", "Hatshepsut", "Nefertari"]
  },
  {
    "country": "Egipto",
    "question": "EGI-48 | ¿Quién marcó el gol de Egipto en la derrota 3-1 ante Rusia en el Mundial 2018?",
    "answer": "Salah",
    "options": ["Salah", "Elneny", "Treceguet"]
  },
  {
    "country": "Egipto",
    "question": "EGI-49 | ¿En qué minuto convirtió Mohamed Salah ese gol ante Rusia?",
    "answer": "73'",
    "options": ["73'", "68'", "81'"]
  },
  {
    "country": "Egipto",
    "question": "EGI-50 | ¿Qué selección derrotó a Egipto en la final de la Copa Africana de Naciones 2017?",
    "answer": "Camerún",
    "options": ["Senegal", "Camerún", "Nigeria"]
  },
  {
    "country": "Egipto",
    "question": "EGI-51 | ¿Cuál es la ciudad más austral de las siguientes dentro de Egipto?",
    "answer": "Asuán",
    "options": ["Asuán", "Alejandría", "Port Said"]
  },
  {
    "country": "Egipto",
    "question": "EGI-52 | ¿Qué brazo del Nilo forma el delta junto al brazo de Rosetta?",
    "answer": "Damieta",
    "options": ["Damieta", "Asuán", "Luxor"]
  },
  {
    "country": "Egipto",
    "question": "EGI-53 | ¿Quién es el director técnico de Egipto en el Mundial 2026?",
    "answer": "Hossam Hassan",
    "options": ["Héctor Cúper", "Hossam Hassan", "Carlos Queiroz"]
  },
  {
    "country": "Egipto",
    "question": "EGI-54 | ¿Quién marcó el gol de Egipto ante Bélgica en el Mundial 2026?",
    "answer": "Emam Ashour",
    "options": ["Mohamed Salah", "Omar Marmoush", "Emam Ashour"]
  },
  {
    "country": "Egipto",
    "question": "EGI-55 | ¿En qué minuto anotó Emam Ashour contra Bélgica en el Mundial 2026?",
    "answer": "19'",
    "options": ["19'", "28'", "37'"]
  },
  {
    "country": "Egipto",
    "question": "EGI-56 | ¿Cómo fue el gol de Emam Ashour ante Bélgica en el Mundial 2026?",
    "answer": "Remate desde fuera del área",
    "options": ["De penal", "De cabeza", "Remate desde fuera del área"]
  },
  {
    "country": "Egipto",
    "question": "EGI-57 | ¿En qué minuto llegó el empate de Bélgica ante Egipto en el Mundial 2026?",
    "answer": "66'",
    "options": ["58'", "66'", "74'"]
  },
  {
    "country": "Egipto",
    "question": "EGI-58 | ¿Qué resultado obtuvo Egipto frente a Nueva Zelanda en el Mundial 2026?",
    "answer": "3-1",
    "options": ["2-1", "3-1", "4-1"]
  },
  {
    "country": "Egipto",
    "question": "EGI-59 | ¿Quién convirtió el primer gol de Egipto ante Nueva Zelanda?",
    "answer": "Mostafa Zico",
    "options": ["Mohamed Salah", "Mostafa Zico", "Treceguet"]
  },
  {
    "country": "Egipto",
    "question": "EGI-60 | ¿En qué minuto empató Mostafa Zico ante Nueva Zelanda en el Mundial 2026?",
    "answer": "58'",
    "options": ["58'", "63'", "67'"]
  },
  {
    "country": "Egipto",
    "question": "EGI-61 | ¿Quién dio la asistencia para el gol de Mostafa Zico en el Mundial 2026?",
    "answer": "Mohamed Hany",
    "options": ["Mohamed Salah", "Omar Marmoush", "Mohamed Hany"]
  },
  {
    "country": "Egipto",
    "question": "EGI-62 | ¿Quién marcó el segundo gol de Egipto ante Nueva Zelanda en el Mundial 2026?",
    "answer": "Mohamed Salah",
    "options": ["Omar Marmoush", "Mohamed Salah", "Treceguet"]
  },
  {
    "country": "Egipto",
    "question": "EGI-63 | ¿En qué minuto Mohamed Salah puso el 2-1 ante Nueva Zelanda en el Mundial 2026?",
    "answer": "67'",
    "options": ["64'", "67'", "72'"]
  },
  {
    "country": "Egipto",
    "question": "EGI-64 | ¿Con quién hizo una pared Mohamed Salah antes de marcar el 2-1 en el Mundial 2026?",
    "answer": "Mostafa Zico",
    "options": ["Marmoush", "Hany", "Mostafa Zico"]
  },
  {
    "country": "Egipto",
    "question": "EGI-65 | ¿Quién convirtió el tercer gol de Egipto ante Nueva Zelanda en el Mundial 2026?",
    "answer": "Treceguet",
    "options": ["Treceguet", "Salah", "Ashour"]
  },
  {
    "country": "Egipto",
    "question": "EGI-66 | ¿Qué jugador de Egipto logró marcar y asistir en el partido ante Nueva Zelanda en el Mundial 2026?",
    "answer": "Salah",
    "options": ["Ashour", "Salah", "Abdelmaguid"]
  },
  {
    "country": "Egipto",
    "question": "EGI-67 | ¿Cuál es el canal marítimo más transitado que transcurre por Egipto?",
    "answer": "Suez",
    "options": ["Ormuz", "Suez", "Kiel"]
  },

  // ==========================================
  // CANADÁ
  // ==========================================
  {
    "country": "Canadá",
    "question": "CAN-1 | ¿Cuál es el segundo idioma oficial de Canadá?",
    "answer": "Francés",
    "options": ["Italiano", "Francés", "Portugués"]
  },
  {
    "country": "Canadá",
    "question": "CAN-2 | ¿Cuál es el animal nacional de Canadá?",
    "answer": "Castor",
    "options": ["Águila", "Castor", "Reno"]
  },
  {
    "country": "Canadá",
    "question": "CAN-3 | ¿Qué famoso jarabe produce Canadá en gran cantidad?",
    "answer": "Jarabe de arce",
    "options": ["Chocolate", "Frutilla", "Jarabe de arce"]
  },
  {
    "country": "Canadá",
    "question": "CAN-4 | ¿Con qué país comparte Canadá la frontera más larga del mundo?",
    "answer": "Estados Unidos",
    "options": ["México", "Rusia", "Estados Unidos"]
  },
  {
    "country": "Canadá",
    "question": "CAN-5 | ¿Quién fue el entrenador de Canadá en el Mundial de 1986?",
    "answer": "Tony Waiters",
    "options": ["Tony Waiters", "Stephen Hart", "John Herdman"]
  },
  {
    "country": "Canadá",
    "question": "CAN-6 | ¿Quién es el segundo máximo goleador histórico de la selección masculina de Canadá?",
    "answer": "Cyle Larin",
    "options": ["Lucas Cavallini", "Cyle Larin", "Jonathan David"]
  },
  {
    "country": "Canadá",
    "question": "CAN-7 | ¿Contra qué selección obtuvo Canadá su primer TRIUNFO en la historia de los Mundiales?",
    "answer": "Qatar",
    "options": ["Qatar", "Croacia", "Bélgica"]
  },
  {
    "country": "Canadá",
    "question": "CAN-8 | ¿Cuántos goles marcó Canadá en el Mundial de 2022?",
    "answer": "2",
    "options": ["1", "2", "3"]
  },
  {
    "country": "Canadá",
    "question": "CAN-9 | ¿Quién fue el entrenador de Canadá en el Mundial 2022?",
    "answer": "John Herdman",
    "options": ["George O'Conors", "Mauro Biello", "John Herdman"]
  },
  {
    "country": "Canadá",
    "question": "CAN-10 | ¿Cuál es la octava ciudad más poblada de Canadá?",
    "answer": "Mississauga",
    "options": ["Mississauga", "Quebec", "Hamilton"]
  },
  {
    "country": "Canadá",
    "question": "CAN-11 | ¿Cuál es la novena ciudad más poblada de Canadá?",
    "answer": "Quebec",
    "options": ["Quebec", "Kitchener", "Halifax"]
  },
  {
    "country": "Canadá",
    "question": "CAN-12 | ¿Cuál es la capital de la provincia de Columbia Británica?",
    "answer": "Victoria",
    "options": ["Vancouver", "Victoria", "Kelowna"]
  },
  {
    "country": "Canadá",
    "question": "CAN-13 | ¿Qué provincia canadiense es la más poblada?",
    "answer": "Ontario",
    "options": ["Quebec", "Ontario", "Alberta"]
  },
  {
    "country": "Canadá",
    "question": "CAN-14 | ¿En qué año se creó oficialmente Canadá como país mediante la Confederación?",
    "answer": "1867",
    "options": ["1776", "1867", "1914"]
  },
  {
    "country": "Canadá",
    "question": "CAN-15 | ¿Qué primer ministro canadiense es considerado el “Padre de la Confederación”?",
    "answer": "John A. Macdonald",
    "options": ["Pierre Trudeau", "John A. Macdonald", "Justin Trudeau"]
  },
  {
    "country": "Canadá",
    "question": "CAN-16 | ¿Qué potencia europea controló gran parte de Canadá antes de los británicos?",
    "answer": "Francia",
    "options": ["España", "Francia", "Portugal"]
  },
  {
    "country": "Canadá",
    "question": "CAN-17 | ¿Qué provincia canadiense tiene mayoría francófona?",
    "answer": "Quebec",
    "options": ["Ontario", "Quebec", "Saskatchewan"]
  },
  {
    "country": "Canadá",
    "question": "CAN-18 | ¿Cuál es el lago más grande ubicado completamente en Canadá?",
    "answer": "Gran Lago del Oso",
    "options": ["Lago Superior", "Gran Lago del Oso", "Lago Erie"]
  },
  {
    "country": "Canadá",
    "question": "CAN-19 | ¿Quién marcó el primer gol de Canadá en una Copa del Mundo?",
    "answer": "Alphonso Davies",
    "options": ["Jonathan David", "Alphonso Davies", "Cyle Larin"]
  },
  {
    "country": "Canadá",
    "question": "CAN-20 | ¿Contra qué selección convirtió Alphonso Davies el primer gol mundialista de Canadá?",
    "answer": "Croacia",
    "options": ["Bélgica", "Croacia", "Marruecos"]
  },
  {
    "country": "Canadá",
    "question": "CAN-21 | ¿Quién dio la asistencia para el primer gol mundialista de Canadá?",
    "answer": "Tajon Buchanan",
    "options": ["Jonathan David", "Stephen Eustáquio", "Tajon Buchanan"]
  },
  {
    "country": "Canadá",
    "question": "CAN-22 | ¿Qué selección derrotó 4-1 a Canadá en su primer partido de la historia en un Mundial (México 1986)?",
    "answer": "Unión Soviética",
    "options": ["Francia", "Hungría", "Unión Soviética"]
  },
  {
    "country": "Canadá",
    "question": "CAN-23 | ¿Cuál es la tercera ciudad más poblada de Canadá?",
    "answer": "Vancouver",
    "options": ["Vancouver", "Calgary", "Ottawa"]
  },
  {
    "country": "Canadá",
    "question": "CAN-24 | ¿Cuál es la sexta ciudad más poblada de Canadá?",
    "answer": "Ottawa",
    "options": ["Ottawa", "Hamilton", "Halifax"]
  },
  {
    "country": "Canadá",
    "question": "CAN-25 | ¿Cuál es la séptima ciudad más poblada de Canadá?",
    "answer": "Winnipeg",
    "options": ["Winnipeg", "Mississauga", "Quebec"]
  },
  {
    "country": "Canadá",
    "question": "CAN-26 | ¿Qué provincia canadiense es la más extensa por superficie?",
    "answer": "Quebec",
    "options": ["Ontario", "Quebec", "Nunavut"]
  },
  {
    "country": "Canadá",
    "question": "CAN-27 | ¿Cuál es la segunda provincia o territorio más extenso de Canadá?",
    "answer": "Ontario",
    "options": ["Quebec", "Ontario", "Columbia Británica"]
  },
  {
    "country": "Canadá",
    "question": "CAN-28 | ¿Qué explorador francés fundó la ciudad de Quebec en 1608?",
    "answer": "Samuel de Champlain",
    "options": ["Jacques Cartier", "Samuel de Champlain", "Pierre Radisson"]
  },
  {
    "country": "Canadá",
    "question": "CAN-29 | ¿En qué año Canadá obtuvo plena autonomía legislativa del Reino Unido mediante el Estatuto de Westminster?",
    "answer": "1931",
    "options": ["1919", "1931", "1945"]
  },
  {
    "country": "Canadá",
    "question": "CAN-30 | ¿Quién es el jefe de Estado de Canadá actualmente?",
    "answer": "Carlos III",
    "options": ["Justin Trudeau", "Carlos III", "Mary Simon"]
  },
  {
    "country": "Canadá",
    "question": "CAN-31 | ¿Qué río atraviesa las ciudades de Montreal y Quebec?",
    "answer": "San Lorenzo",
    "options": ["Mackenzie", "Yukón", "San Lorenzo"]
  },
  {
    "country": "Canadá",
    "question": "CAN-32 | ¿Cuál es la capital de la provincia de Quebec?",
    "answer": "Quebec City",
    "options": ["Montreal", "Quebec City", "Laval"]
  },
  {
    "country": "Canadá",
    "question": "CAN-33 | ¿En qué provincia se encuentra la ciudad de Winnipeg?",
    "answer": "Manitoba",
    "options": ["Ontario", "Manitoba", "Alberta"]
  },
  {
    "country": "Canadá",
    "question": "CAN-34 | ¿Qué provincia canadiense produce la mayor cantidad de petróleo?",
    "answer": "Alberta",
    "options": ["Alberta", "Ontario", "Quebec"]
  },
  {
    "country": "Canadá",
    "question": "CAN-35 | ¿Qué jugador le marcó el primer gol a Canadá en los Mundiales?",
    "answer": "Jean-Pierre Papin",
    "options": ["Michel Platini", "Jean-Pierre Papin", "Jean Charbonnel"]
  },
  {
    "country": "Canadá",
    "question": "CAN-36 | ¿Cuántos años tenía Atiba Hutchinson durante el Mundial de Qatar 2022?",
    "answer": "39",
    "options": ["35", "37", "39"]
  },
  {
    "country": "Canadá",
    "question": "CAN-37 | ¿Contra qué selección debutó Canadá en el Mundial 2026?",
    "answer": "Bosnia y Herzegovina",
    "options": ["Qatar", "Bosnia y Herzegovina", "Suiza"]
  },
  {
    "country": "Canadá",
    "question": "CAN-38 | ¿Cuál fue el resultado del debut de Canadá en el Mundial 2026?",
    "answer": "1-1",
    "options": ["1-1", "2-1", "0-0"]
  },
  {
    "country": "Canadá",
    "question": "CAN-39 | ¿Qué día disputó Canadá su primer partido del Mundial 2026?",
    "answer": "12 de junio",
    "options": ["11 de junio", "12 de junio", "13 de junio"]
  },
  {
    "country": "Canadá",
    "question": "CAN-40 | ¿Cuántos puntos sumó Canadá tras su primer partido del Mundial 2026?",
    "answer": "1",
    "options": ["0", "1", "3"]
  },
  {
    "country": "Canadá",
    "question": "CAN-41 | ¿Contra qué selección juega Canadá su segundo partido del Mundial 2026?",
    "answer": "Qatar",
    "options": ["Suiza", "Bosnia y Herzegovina", "Qatar"]
  },
  {
    "country": "Canadá",
    "question": "CAN-42 | ¿En qué fecha juega Canadá contra Qatar?",
    "answer": "18 de junio",
    "options": ["18 de junio", "19 de junio", "20 de junio"]
  },
  {
    "country": "Canadá",
    "question": "CAN-43 | ¿Contra qué selección jugará Canadá su tercer partido de la fase de grupos?",
    "answer": "Suiza",
    "options": ["Bosnia y Herzegovina", "Suiza", "Qatar"]
  },
  {
    "country": "Canadá",
    "question": "CAN-44 | ¿Qué día disputará Canadá su último partido del Grupo B?",
    "answer": "24 de junio",
    "options": ["25 de junio", "23 de junio", "24 de junio"]
  },
  {
    "country": "Canadá",
    "question": "CAN-45 | ¿Quién convirtió el gol del empate 1-1 de Canadá ante Bosnia y Herzegovina en el Mundial 2026?",
    "answer": "Cyle Larin",
    "options": ["Jonathan David", "Alphonso Davies", "Cyle Larin"]
  },
  {
    "country": "Canadá",
    "question": "CAN-46 | ¿En qué minuto marcó Canadá el gol del 1-1 ante Bosnia y Herzegovina?",
    "answer": "78'",
    "options": ["61'", "74'", "78'"]
  },
  {
    "country": "Canadá",
    "question": "CAN-47 | ¿Quién dio la asistencia del gol canadiense ante Bosnia y Herzegovina?",
    "answer": "Alphonso Davies",
    "options": ["Alphonso Davies", "Tajon Buchanan", "Stephen Eustáquio"]
  },
  {
    "country": "Canadá",
    "question": "CAN-49 | ¿En qué estadio se disputó el empate 1-1 entre Canadá y Bosnia y Herzegovina en el Mundial 2026?",
    "answer": "BMO Field (Toronto)",
    "options": ["BMO Field (Toronto)", "BC Place (Vancouver)", "Estadio Akron (Guadalajara)"]
  },
  {
    "country": "Canadá",
    "question": "CAN-50 | ¿Cuántos territorios tiene Canadá?",
    "answer": "3",
    "options": ["2", "3", "4"]
  },
  {
    "country": "Canadá",
    "question": "CAN-51 | ¿Cuál es la capital del territorio de Yukón?",
    "answer": "Whitehorse",
    "options": ["Yellowknife", "Whitehorse", "Iqaluit"]
  },
  {
    "country": "Canadá",
    "question": "CAN-52 | ¿Cuál es la isla canadiense donde se encuentra la ciudad de Victoria?",
    "answer": "Isla de Vancouver",
    "options": ["Isla de Vancouver", "Isla del Príncipe Eduardo", "Isla de Baffin"]
  },
  {
    "country": "Canadá",
    "question": "CAN-53 | ¿Qué número de camiseta usa Cyle Larin en el Mundial 2026?",
    "answer": "9",
    "options": ["7", "9", "11"]
  },
  {
    "country": "Canadá",
    "question": "CAN-54 | ¿Qué río conecta los Grandes Lagos con el océano Atlántico?",
    "answer": "San Lorenzo",
    "options": ["Mackenzie", "Fraser", "San Lorenzo"]
  },
  {
    "country": "Canadá",
    "question": "CAN-55 | ¿Después de cuántos años disputa un Mundial Canadá?",
    "answer": "36",
    "options": ["40", "36", "32"]
  },
  {
    "country": "Canadá",
    "question": "CAN-56 | ¿Qué isla canadiense es considerada la quinta más grande del mundo?",
    "answer": "Isla de Baffin",
    "options": ["Isla Victoria", "Isla de Baffin", "Isla Ellesmere"]
  },

  // ==========================================
  // CROACIA
  // ==========================================
  {
    "country": "Croacia",
    "question": "CRO-1 | ¿Qué mar baña la costa croata?",
    "answer": "Mar Adriático",
    "options": ["Mar Negro", "Mar Adriático", "Mar Egeo"]
  },
  {
    "country": "Croacia",
    "question": "CRO-2 | ¿Qué jugador croata convirtió el gol en contra en la final del Mundial 2018?",
    "answer": "Mandžukić",
    "options": ["Lovren", "Perišić", "Mandžukić"]
  },
  {
    "country": "Croacia",
    "question": "CRO-3 | ¿Qué selección eliminó a Croacia en semifinales de Qatar 2022?",
    "answer": "Argentina",
    "options": ["Francia", "Argentina", "Marruecos"]
  },
  {
    "country": "Croacia",
    "question": "CRO-4 | ¿Qué cordillera atraviesa parte del territorio croata?",
    "answer": "Alpes Dináricos",
    "options": ["Alpes Dináricos", "Andes", "Pirineos"]
  },
  {
    "country": "Croacia",
    "question": "CRO-5 | ¿En qué ciudad croata se encuentra el Palacio de Diocleciano?",
    "answer": "Split",
    "options": ["Split", "Zagreb", "Zadar"]
  },
  {
    "country": "Croacia",
    "question": "CRO-6 | ¿Quién convirtió el penal decisivo ante Brasil en Qatar 2022?",
    "answer": "Orsic",
    "options": ["Modrić", "Petković", "Orsic"]
  },
  {
    "country": "Croacia",
    "question": "CRO-7 | ¿Qué país compartía históricamente unión política con Croacia dentro de Yugoslavia?",
    "answer": "Serbia",
    "options": ["Hungría", "Serbia", "Austria"]
  },
  {
    "country": "Croacia",
    "question": "CRO-8 | ¿Qué religión es predominante en Croacia?",
    "answer": "Católica",
    "options": ["Ortodoxa", "Católica", "Musulmana"]
  },
  {
    "country": "Croacia",
    "question": "CRO-9 | ¿Qué científico nacido en la actual Croacia desarrolló avances fundamentales en electricidad?",
    "answer": "Nikola Tesla",
    "options": ["Nikola Tesla", "Einstein", "Edison"]
  },
  {
    "country": "Croacia",
    "question": "CRO-10 | ¿Qué ciudad croata es el principal puerto del país?",
    "answer": "Rijeka",
    "options": ["Split", "Rijeka", "Dubrovnik"]
  },
  {
    "country": "Croacia",
    "question": "CRO-11 | ¿Qué selección eliminó a Croacia en la Euro 2008 por penales?",
    "answer": "Turquía",
    "options": ["Turquía", "España", "Alemania"]
  },
  {
    "country": "Croacia",
    "question": "CRO-12 | ¿Qué futbolista croata jugó en el FC Barcelona y ganó la Champions League?",
    "answer": "Rakitić",
    "options": ["Rakitić", "Kovačić", "Olić"]
  },
  {
    "country": "Croacia",
    "question": "CRO-13 | ¿Qué famoso parque nacional croata es Patrimonio de la Humanidad por sus lagos?",
    "answer": "Plitvice",
    "options": ["Plitvice", "Krka", "Paklenica"]
  },
  {
    "country": "Croacia",
    "question": "CRO-14 | ¿Qué científico croata destacó en astronomía y matemáticas durante el siglo XVIII?",
    "answer": "Bošković",
    "options": ["Bošković", "Penkala", "Tesla"]
  },
  {
    "country": "Croacia",
    "question": "CRO-15 | ¿Qué jugador croata fue capitán en los Mundiales 2018 y 2022?",
    "answer": "Modrić",
    "options": ["Perišić", "Modrić", "Lovren"]
  },
  {
    "country": "Croacia",
    "question": "CRO-16 | ¿Qué selección enfrentó Croacia en su debut mundialista de 1998?",
    "answer": "Jamaica",
    "options": ["Jamaica", "Argentina", "Alemania"]
  },
  {
    "country": "Croacia",
    "question": "CRO-17 | ¿Qué región costera croata es famosa por sus más de mil islas?",
    "answer": "Dalmacia",
    "options": ["Dalmacia", "Slavonia", "Baranja"]
  },
  {
    "country": "Croacia",
    "question": "CRO-18 | ¿Qué selección eliminó a Croacia en el Mundial 2014?",
    "answer": "México",
    "options": ["México", "Brasil", "Camerún"]
  },
  {
    "country": "Croacia",
    "question": "CRO-19 | ¿Cuál era la capital de Yugoslavia antes de la independencia de Croacia?",
    "answer": "Belgrado",
    "options": ["Zagreb", "Sarajevo", "Belgrado"]
  },
  {
    "country": "Croacia",
    "question": "CRO-20 | ¿En qué año ingresó Croacia a la Unión Europea?",
    "answer": "2013",
    "options": ["2004", "2013", "2018"]
  },
  {
    "country": "Croacia",
    "question": "CRO-21 | ¿Quién fue el primer presidente de Croacia independiente?",
    "answer": "Franjo Tuđman",
    "options": ["Stjepan Mesić", "Franjo Tuđman", "Ivo Josipović"]
  },
  {
    "country": "Croacia",
    "question": "CRO-22 | ¿Qué ciudad fue declarada capital de Croacia desde 1991?",
    "answer": "Zagreb",
    "options": ["Split", "Zagreb", "Dubrovnik"]
  },
  {
    "country": "Croacia",
    "question": "CRO-23 | ¿Qué región croata limita con Hungría?",
    "answer": "Eslavonia",
    "options": ["Dalmacia", "Eslavonia", "Istria"]
  },
  {
    "country": "Croacia",
    "question": "CRO-24 | ¿Cuál es la tercera ciudad más poblada de Croacia?",
    "answer": "Rijeka",
    "options": ["Rijeka", "Split", "Osijek"]
  },
  {
    "country": "Croacia",
    "question": "CRO-25 | ¿Cuál es la cuarta ciudad más poblada de Croacia?",
    "answer": "Osijek",
    "options": ["Dubrovnik", "Osijek", "Pula"]
  },
  {
    "country": "Croacia",
    "question": "CRO-26 | ¿Cuál es la quinta ciudad más poblada de Croacia?",
    "answer": "Zadar",
    "options": ["Zadar", "Varaždin", "Karlovac"]
  },
  {
    "country": "Croacia",
    "question": "CRO-27 | ¿Cuál es la montaña más alta de Croacia?",
    "answer": "Dinara",
    "options": ["Velebit", "Dinara", "Biokovo"]
  },
  {
    "country": "Croacia",
    "question": "CRO-28 | ¿Qué altura aproximada tiene el monte Dinara?",
    "answer": "1.831 m",
    "options": ["1.831 m", "2.215 m", "1.502 m"]
  },
  {
    "country": "Croacia",
    "question": "CRO-29 | ¿Qué país limita al sur con Croacia a través de una pequeña franja costera?",
    "answer": "Bosnia y Herzegovina",
    "options": ["Montenegro", "Bosnia y Herzegovina", "Albania"]
  },
  {
    "country": "Croacia",
    "question": "CRO-30 | ¿Qué operación militar croata de 1995 fue clave para recuperar territorios ocupados?",
    "answer": "Operación Tormenta (Oluja)",
    "options": ["Operación Tormenta (Oluja)", "Operación Relámpago", "Operación Adriático"]
  },
  {
    "country": "Croacia",
    "question": "CRO-31 | ¿En qué año finalizó formalmente la Guerra de Independencia Croata?",
    "answer": "1995",
    "options": ["1993", "1995", "1998"]
  },
  {
    "country": "Croacia",
    "question": "CRO-32 | ¿Cuál es la península más grande de Croacia?",
    "answer": "Istria",
    "options": ["Pelješac", "Istria", "Pag"]
  },
  {
    "country": "Croacia",
    "question": "CRO-33 | ¿Cuál fue el primer mundial de Luka Modrić?",
    "answer": "2006",
    "options": ["2006", "2002", "2010"]
  },
  {
    "country": "Croacia",
    "question": "CRO-34 | ¿Cuántas islas tiene aproximadamente Croacia?",
    "answer": "Aproximadamente 1.244 islas",
    "options": ["Aproximadamente 1.144 islas", "Aproximadamente 1.244 islands", "Aproximadamente 1.122 islas"]
  },
  {
    "country": "Croacia",
    "question": "CRO-35 | ¿Contra qué selección convirtió Luka Modrić en la fase de grupos del Mundial 2018?",
    "answer": "Nigeria y Argentina",
    "options": ["Nigeria y Argentina", "Islandia y Dinamarca", "Francia y Rusia"]
  },
  {
    "country": "Croacia",
    "question": "CRO-36 | ¿Qué futbolista croata jugó para el Real Madrid y el Barcelona?",
    "answer": "Prosinečki",
    "options": ["Rakitić", "Prosinečki", "Kovačić"]
  },
  {
    "country": "Croacia",
    "question": "CRO-37 | ¿Cuántos goles convirtió Davor Šuker en el Mundial 1998?",
    "answer": "6",
    "options": ["5", "6", "7"]
  },
  {
    "country": "Croacia",
    "question": "CRO-38 | ¿Contra qué selección anotó Šuker el gol que le dio a Croacia el tercer puesto en 1998?",
    "answer": "Holanda",
    "options": ["Alemania", "Holanda", "Dinamarca"]
  },
  {
    "country": "Croacia",
    "question": "CRO-39 | ¿Quién fue el arquero titular croata en el Mundial 1998?",
    "answer": "Ladić",
    "options": ["Livaković", "Ladić", "Subašić"]
  },
  {
    "country": "Croacia",
    "question": "CRO-40 | ¿Quién marcó el empate parcial 1-1 para Croacia en la final de 2018?",
    "answer": "Perišić",
    "options": ["Rakitić", "Perišić", "Rebić"]
  },
  {
    "country": "Croacia",
    "question": "CRO-41 | ¿Qué delantero croata marcó el gol decisivo ante Inglaterra en semifinales del Mundial 2018?",
    "answer": "Mandžukić",
    "options": ["Perišić", "Mandžukić", "Kramarić"]
  },
  {
    "country": "Croacia",
    "question": "CRO-42 | ¿En qué minuto convirtió Mandžukić el gol ante Inglaterra en el Mundial 2018?",
    "answer": "109'",
    "options": ["98'", "109'", "117'"]
  },
  {
    "country": "Croacia",
    "question": "CRO-43 | ¿En qué país nació Mateo Kovačić?",
    "answer": "Austria",
    "options": ["Croacia", "Austria", "Serbia"]
  },
  {
    "country": "Croacia",
    "question": "CRO-44 | ¿Qué isla croata está más al sur del país?",
    "answer": "Lastovo",
    "options": ["Brač", "Korčula", "Lastovo"]
  },
  {
    "country": "Croacia",
    "question": "CRO-45 | ¿Cuál es la segunda isla más grande de Croacia?",
    "answer": "Cres",
    "options": ["Cres", "Brač", "Hvar"]
  },
  {
    "country": "Croacia",
    "question": "CRO-46 | ¿Qué ciudad croata se encuentra más cerca de Italia a través del mar Adriático?",
    "answer": "Pula",
    "options": ["Pula", "Split", "Dubrovnik"]
  },
  {
    "country": "Croacia",
    "question": "CRO-47 | ¿Cuál es el parque nacional más grande de Croacia por superficie?",
    "answer": "Plitvice",
    "options": ["Paklenica", "Plitvice", "Brijuni"]
  },
  {
    "country": "Croacia",
    "question": "CRO-48 | ¿Qué región histórica croata ocupa gran parte del extremo oriental del país?",
    "answer": "Eslavonia",
    "options": ["Dalmacia", "Istria", "Eslavonia"]
  },
  {
    "country": "Croacia",
    "question": "CRO-49 | ¿Cuál es la ciudad más poblada de la península de Istria?",
    "answer": "Pula",
    "options": ["Rovinj", "Poreč", "Pula"]
  },
  {
    "country": "Croacia",
    "question": "CRO-50 | ¿Cuál fue la dupla de zagueros centrales titular que más partidos jugó junta en el Mundial 1998?",
    "answer": "Slaven Bilić e Zvonimir Soldo",
    "options": ["Dario Šimić e Igor Tudor", "Slaven Bilić e Zvonimir Soldo", "Zvonimir Soldo y Robert Jarni"]
  },
  {
    "country": "Croacia",
    "question": "CRO-51 | ¿Cuál fue el arquero con más minutos jugados en el Mundial 1998?",
    "answer": "Dražen Ladić",
    "options": ["Dražen Ladić", "Robert Prosinečki", "Goran Vlaović"]
  },
  {
    "country": "Croacia",
    "question": "CRO-52 | ¿Quién fue el lateral izquierdo titular de Croacia durante gran parte del Mundial 1998?",
    "answer": "Robert Jarni",
    "options": ["Robert Jarni", "Dario Šimić", "Igor Tudor"]
  },
  {
    "country": "Croacia",
    "question": "CRO-53 | ¿Quién fue el arquero titular en el Mundial 2018?",
    "answer": "Danijel Subasic",
    "options": ["Danijel Subasic", "Dario Šimić", "Igor Tudor"]
  },
  {
    "country": "Croacia",
    "question": "CRO-54 | ¿En qué equipo juega actualmente Livaković?",
    "answer": "Fenerbahçe",
    "options": ["Dinamo Zagreb", "Fenerbahçe", "Manchester United"]
  },
  {
    "country": "Croacia",
    "question": "CRO-55 | ¿En qué Mundial Modrić fue elegido mejor jugador?",
    "answer": "2018",
    "options": ["2006", "2014", "2018"]
  },

  // ==========================================
  // PARAGUAY
  // ==========================================
  {
    "country": "Paraguay",
    "question": "PAR-1 | ¿Qué río divide Paraguay en región Oriental y Occidental?",
    "answer": "Paraguay",
    "options": ["Paraná", "Paraguay", "Pilcomayo"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-2 | ¿Qué represa comparte Paraguay con Argentina?",
    "answer": "Yacyretá",
    "options": ["Yacyretá", "Itaipú", "Corpus Christi"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-3 | ¿Qué instrumento musical es símbolo del folclore paraguayo?",
    "answer": "Arpa paraguaya",
    "options": ["Bandoneón", "Charango", "Arpa paraguaya"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-4 | ¿Cuál es el principal río utilizado para la navegación comercial paraguaya?",
    "answer": "Paraguay",
    "options": ["Pilcomayo", "Paraguay", "Bermejo"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-5 | ¿Qué animal típico del Chaco paraguayo es uno de los felinos más grandes de América?",
    "answer": "Yaguareté",
    "options": ["Yaguareté", "Puma", "Ocelote"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-6 | ¿Qué importante humedal comparte Paraguay con Brasil y Bolivia?",
    "answer": "Pantanal",
    "options": ["Everglades", "Esteros del Iberá", "Pantanal"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-7 | ¿Qué científico paraguayo fue pionero en bacteriología en Sudamérica?",
    "answer": "Andrés Barbero",
    "options": ["Andrés Barbero", "Ramón Carrillo", "Carlos Finlay"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-8 | ¿Qué ciudad paraguaya está frente a Posadas, Argentina?",
    "answer": "Encarnación",
    "options": ["Pedro Juan Caballero", "Encarnación", "Pilar"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-9 | ¿Qué puente une Encarnación con Posadas?",
    "answer": "San Roque González de Santa Cruz",
    "options": ["Puente de la Integración", "General Belgrano", "San Roque González de Santa Cruz"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-10 | ¿Qué selección eliminó a Paraguay en octavos del Mundial 1998?",
    "answer": "Francia",
    "options": ["Francia", "Alemania", "Nigeria"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-11 | ¿Qué selección eliminó a Paraguay en el Mundial 2010?",
    "answer": "España",
    "options": ["Alemania", "España", "Países Bajos"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-12 | ¿Qué selección eliminó a Paraguay en el Mundial 2002?",
    "answer": "Alemania",
    "options": ["Inglaterra", "Dinamarca", "Alemania"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-13 | ¿Qué jugador paraguayo erró un penal ante España en Sudáfrica 2010?",
    "answer": "Cardozo",
    "options": ["Cardozo", "Santa Cruz", "Barrios"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-14 | ¿Con qué selecciones empató Paraguay en el Mundial 2010?",
    "answer": "Italia y Nueva Zelanda",
    "options": ["España e Italia", "Italia y Nueva Zelanda", "Alemania y Nueva Zelanda"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-15 | ¿Cuál es la séptima ciudad más poblada de Paraguay?",
    "answer": "Caaguazú",
    "options": ["Caaguazú", "Luque", "Villarrica"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-16 | ¿Cuál es la octava ciudad más poblada de Paraguay?",
    "answer": "Villarrica",
    "options": ["Villarrica", "San Lorenzo", "Encarnación"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-17 | ¿Quién fue el primer presidente constitucional del Paraguay independiente?",
    "answer": "Carlos Antonio López",
    "options": ["José Gaspar Rodríguez de Francia", "Carlos Antonio López", "Francisco Solano López"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-18 | ¿Cómo era conocido José Gaspar Rodríguez de Francia?",
    "answer": "El Supremo",
    "options": ["El Restaurador", "El Supremo", "El Libertador"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-19 | ¿En qué año Paraguay declaró oficialmente su independencia?",
    "answer": "1811",
    "options": ["1811", "1816", "1821"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-20 | ¿Qué fortín fue clave para el inicio de la Guerra del Chaco?",
    "answer": "Boquerón",
    "options": ["Nanawa", "Boquerón", "Toledo"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-21 | ¿Cuál es el departamento más poblado de Paraguay?",
    "answer": "Central",
    "options": ["Central", "Alto Paraná", "Itapúa"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-22 | ¿Qué departamento tiene como capital a Encarnación?",
    "answer": "Itapúa",
    "options": ["Misiones", "Ñeembucú", "Itapúa"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-23 | ¿Cuál es el pico más alto de Paraguay?",
    "answer": "Cerro Tres Kandú",
    "options": ["Cerro Acahay", "Cerro Tres Kandú", "Cerro León"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-24 | ¿Qué altura aproximada tiene el Cerro Tres Kandú?",
    "answer": "748 m",
    "options": ["842 m", "700 m", "748 m"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-25 | ¿Qué jugador paraguayo marcó el gol del triunfo ante Eslovaquia en el Mundial 2010?",
    "answer": "Cristian Riveros",
    "options": ["Enrique Vera", "Lucas Barrios", "Cristian Riveros"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-26 | ¿Cuántos departamentos tiene Paraguay?",
    "answer": "17",
    "options": ["15", "17", "19"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-27 | ¿Cuál es el tercer departamento más poblado de Paraguay?",
    "answer": "Itapúa",
    "options": ["Itapúa", "Cordillera", "Caaguazú"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-28 | ¿Cuál es el quinto departamento más poblado de Paraguay?",
    "answer": "Caaguazú",
    "options": ["Cordillera", "Caaguazú", "Guairá"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-29 | ¿Qué departamento paraguayo alberga las Cataratas del Iguazú?",
    "answer": "Alto Paraná",
    "options": ["Alto Paraná", "Itapúa", "Canindeyú"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-30 | ¿En qué ciudad paraguaya se encuentran las Tres Fronteras entre Paraguay, Argentina y Brasil?",
    "answer": "Presidente Franco",
    "options": ["Encarnación", "Ciudad del Este", "Presidente Franco"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-31 | ¿Cómo se llama el puente internacional que une Ciudad del Este con Foz do Iguaçu?",
    "answer": "Amistad",
    "options": ["San Roque González", "Amistad", "Integración"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-32 | ¿En qué año fue inaugurado el Puente de la Amistad?",
    "answer": "1965",
    "options": ["1970", "1969", "1965"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-33 | ¿Quién es el director técnico de Paraguay en el Mundial 2026?",
    "answer": "Gustavo Alfaro",
    "options": ["Gustavo Alfaro", "Guillermo Barros Schelotto", "Daniel Garnero"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-34 | ¿Quién es el principal asistente técnico de Gustavo Alfaro en Paraguay?",
    "answer": "Carlos González Parera",
    "options": ["Carlos González", "Carlos González Parera", "Justo Villar"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-35 | ¿Qué jugador paraguayo tiene más partidos disputados en Copas del Mundo?",
    "answer": "Denis Caniza",
    "options": ["Roque Santa Cruz", "Carlos Gamarra", "Denis Caniza"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-36 | ¿Cuántos partidos mundialistas disputó Denis Caniza?",
    "answer": "12",
    "options": ["8", "10", "12"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-37 | ¿Qué jugador paraguayo anotó el gol del triunfo ante Turquía en el Mundial 2002?",
    "answer": "Nelson Cuevas",
    "options": ["Roque Santa Cruz", "Nelson Cuevas", "José Cardozo"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-38 | ¿Qué jugador paraguayo marcó el gol ante España en el Mundial 1998?",
    "answer": "Miguel Ángel Benítez",
    "options": ["José Cardozo", "Miguel Benítez", "Miguel Ángel Benítez"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-39 | ¿Quién convirtió el gol de Paraguay ante Italia en el Mundial 2010?",
    "answer": "Antolín Alcaraz",
    "options": ["Roque Santa Cruz", "Antolín Alcaraz", "Cristian Riveros"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-40 | ¿Quién ejecutó el córner de donde nació el gol de Antolín Alcaraz ante Italia?",
    "answer": "Aureliano Torres",
    "options": ["Aureliano Torres", "Edgar Barreto", "Cristian Riveros"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-41 | ¿Cuál es la segunda ciudad más poblada de Paraguay?",
    "answer": "Ciudad del Este",
    "options": ["Ciudad del Este", "Luque", "San Lorenzo"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-42 | ¿Qué departamento paraguayo limita con más países?",
    "answer": "Boquerón",
    "options": ["Alto Paraná", "Boquerón", "Amambay"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-43 | ¿Qué defensor paraguayo completó todos los minutos de Paraguay en los Mundiales 1998 y 2002?",
    "answer": "Carlos Gamarra",
    "options": ["Carlos Gamarra", "Denis Caniza", "Francisco Arce"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-44 | ¿Quién era el 4° suplente listado en la nómina oficial de Paraguay para el Mundial 2010?",
    "answer": "Denis Caniza",
    "options": ["Julio Cáceres", "Carlos Bonet", "Denis Caniza"]
  },
  {
    "country": "Paraguay",
    "question": "PAR-45 | ¿Quién era el 4° suplente listado en la nómina oficial de Paraguay para el Mundial 1998?",
    "answer": "Edgar Aguilera",
    "options": ["Denis Caniza", "Edgar Aguilera", "Pedro Sarabi"]
  },

  // ==========================================
  // AUSTRIA
  // ==========================================
  {
    "country": "Austria",
    "question": "AUS-1 | ¿En qué año Austria recuperó su plena independencia y soberanía tras la Segunda Guerra Mundial?",
    "answer": "1955",
    "options": ["1955", "1948", "1950"]
  },
  {
    "country": "Austria",
    "question": "AUS-2 | ¿Con cuántos países limita Austria?",
    "answer": "8",
    "options": ["6", "8", "9"]
  },
  {
    "country": "Austria",
    "question": "AUS-3 | ¿Con qué país comparte Austria la frontera terrestre más larga?",
    "answer": "Alemania",
    "options": ["Alemania", "Hungría", "Suiza"]
  },
  {
    "country": "Austria",
    "question": "AUS-4 | ¿Cómo se llama la montaña más alta de Austria?",
    "answer": "Grossglockner",
    "options": ["Wildspitze", "Grossglockner", "Weisskugel"]
  },
  {
    "country": "Austria",
    "question": "AUS-5 | ¿Cuál es la capital de Austria?",
    "answer": "Viena",
    "options": ["Salzburgo", "Viena", "Linz"]
  },
  {
    "country": "Austria",
    "question": "AUS-6 | ¿Quién es el presidente actual de Austria?",
    "answer": "Alexander Van der Bellen",
    "options": ["Heinz Fischer", "Thomas Klestil", "Alexander Van der Bellen"]
  },
  {
    "country": "Austria",
    "question": "AUS-7 | ¿Cuál es el idioma oficial de Austria?",
    "answer": "Alemán estándar",
    "options": ["Alemán estándar", "Austríaco", "Bávaro"]
  },
  {
    "country": "Austria",
    "question": "AUS-8 | ¿Qué religión predomina mayoritariamente en Austria?",
    "answer": "Cristianismo católico",
    "options": ["Islam", "Cristianismo católico", "Ateísmo"]
  },
  {
    "country": "Austria",
    "question": "AUS-9 | ¿Cuál es la flor nacional austríaca?",
    "answer": "Edelweiss o flor de las nieves",
    "options": ["Rosa de los Alpes", "Edelweiss o flor de las nieves", "Clirius de Altura"]
  },
  {
    "country": "Austria",
    "question": "AUS-10 | ¿Qué día y en qué estadio juega Austria su primer partido del Mundial 2026?",
    "answer": "17/06 – San Francisco Stadium",
    "options": ["17/06 – San Francisco Stadium", "15/06 – Dallas Stadium", "16/06 – Kansas City Stadium"]
  },
  {
    "country": "Austria",
    "question": "AUS-11 | ¿Quién fue el capitán de Austria en el Mundial de Francia 1998?",
    "answer": "Andreas Herzog",
    "options": ["Toni Polster", "Andreas Herzog", "Ivica Vastić"]
  },
  {
    "country": "Austria",
    "question": "AUS-12 | ¿Contra qué selección consiguió Austria su única victoria en el Mundial 1998?",
    "answer": "Camerún",
    "options": ["Camerún", "Italia", "Chile"]
  },
  {
    "country": "Austria",
    "question": "AUS-13 | ¿Qué delantero austríaco convirtió el gol del empate sobre la hora ante Chile en 1998?",
    "answer": "Ivica Vastić",
    "options": ["Toni Polster", "Andreas Herzog", "Ivica Vastić"]
  },
  {
    "country": "Austria",
    "question": "AUS-14 | ¿Cuál fue la posición final de Austria en el grupo del Mundial 1998?",
    "answer": "Tercero",
    "options": ["Tercero", "Segundo", "Cuarto"]
  },
  {
    "country": "Austria",
    "question": "AUS-15 | ¿Qué selección enfrentó Austria en su último partido de un Mundial antes de la edición 2026?",
    "answer": "Italia",
    "options": ["Italia", "Chile", "Camerún"]
  },
  {
    "country": "Austria",
    "question": "AUS-16 | ¿Quién fue el máximo goleador de Austria en los Mundiales entre 1986 y 2026?",
    "answer": "Toni Polster",
    "options": ["Marko Arnautović", "Toni Polster", "Andreas Herzog"]
  },
  {
    "country": "Austria",
    "question": "AUS-17 | ¿Cuál es la sexta ciudad más poblada de Austria?",
    "answer": "Klagenfurt",
    "options": ["Innsbruck", "Wels", "Klagenfurt"]
  },
  {
    "country": "Austria",
    "question": "AUS-18 | ¿Cuál es la séptima ciudad más poblada de Austria?",
    "answer": "Villach",
    "options": ["Dornbirn", "Villach", "Steyr"]
  },
  {
    "country": "Austria",
    "question": "AUS-19 | ¿Qué estado federado es el menos poblado de Austria?",
    "answer": "Burgenland",
    "options": ["Burgenland", "Vorarlberg", "Salzburgo"]
  },
  {
    "country": "Austria",
    "question": "AUS-20 | ¿Cuál es el río más largo que atraviesa Austria?",
    "answer": "Danubio",
    "options": ["Danubio", "Inn", "Mur"]
  },
  {
    "country": "Austria",
    "question": "AUS-21 | ¿Qué río pasa por Viena?",
    "answer": "Danubio",
    "options": ["Rin", "Elba", "Danubio"]
  },
  {
    "country": "Austria",
    "question": "AUS-22 | ¿Cuál es el lago más grande de Austria?",
    "answer": "Neusiedler See",
    "options": ["Attersee", "Neusiedler See", "Wolfgangsee"]
  },
  {
    "country": "Austria",
    "question": "AUS-23 | ¿En qué cordillera se encuentra la mayor parte del territorio austríaco?",
    "answer": "Alpes",
    "options": ["Alpes", "Pirineos", "Cárpatos"]
  },
  {
    "country": "Austria",
    "question": "AUS-24 | ¿Cuál es la cuarta ciudad más poblada de Austria?",
    "answer": "Salzburgo",
    "options": ["Innsbruck", "Salzburgo", "Villach"]
  },
  {
    "country": "Austria",
    "question": "AUS-25 | ¿En qué año se fundó la República de Austria moderna tras la caída del Imperio Austrohúngaro?",
    "answer": "1918",
    "options": ["1918", "1925", "1938"]
  },
  {
    "country": "Austria",
    "question": "AUS-26 | ¿Qué imperio tenía a Viena como capital antes de 1918?",
    "answer": "Imperio Austrohúngaro",
    "options": ["Imperio Alemán", "Imperio Otomano", "Imperio Austrohúngaro"]
  },
  {
    "country": "Austria",
    "question": "AUS-27 | ¿En qué año Austria ingresó a la Unión Europea?",
    "answer": "1995",
    "options": ["1986", "1995", "2001"]
  },
  {
    "country": "Austria",
    "question": "AUS-28 | ¿Qué dinastía gobernó Austria durante siglos?",
    "answer": "Habsburgo",
    "options": ["Borbones", "Habsburgo", "Romanov"]
  },
  {
    "country": "Austria",
    "question": "AUS-29 | ¿Contra qué selección empató Austria 1-1 en su primer partido del Mundial 1998?",
    "answer": "Camerún",
    "options": ["Camerún", "Chile", "Italia"]
  },
  {
    "country": "Austria",
    "question": "AUS-30 | ¿Quién anotó el gol de la victoria austríaca ante Camerún?",
    "answer": "Ivica Vastić",
    "options": ["Toni Polster", "Ivica Vastić", "Andreas Herzog"]
  },
  {
    "country": "Austria",
    "question": "AUS-31 | ¿Qué selección eliminó matemáticamente a Austria en Francia 1998?",
    "answer": "Italia",
    "options": ["Chile", "Italia", "Camerún"]
  },
  {
    "country": "Austria",
    "question": "AUS-32 | ¿Quién marcó uno de los goles italianos ante Austria en 1998?",
    "answer": "Christian Vieri",
    "options": ["Christian Vieri", "Del Piero", "Inzaghi"]
  },
  {
    "country": "Austria",
    "question": "AUS-33 | ¿Qué jugador es considerado el futbolista austríaco más destacado del siglo XXI?",
    "answer": "David Alaba",
    "options": ["Ivica Vastić", "David Alaba", "Andreas Herzog"]
  },
  {
    "country": "Austria",
    "question": "AUS-34 | ¿Cuál fue la mejor actuación histórica de Austria en una Copa del Mundo?",
    "answer": "Tercer puesto",
    "options": ["Campeón", "Subcampeón", "Tercer puesto"]
  },
  {
    "country": "Austria",
    "question": "AUS-35 | ¿En qué Mundial logró Austria ese tercer puesto?",
    "answer": "1954",
    "options": ["1954", "1934", "1978"]
  },
  {
    "country": "Austria",
    "question": "AUS-36 | ¿Quién es el máximo goleador histórico de Austria en los Mundiales?",
    "answer": "Erich Probst",
    "options": ["Toni Polster", "David Alaba", "Erich Probst"]
  },
  {
    "country": "Austria",
    "question": "AUS-37 | ¿Cuántos goles marcó Erich Probst en los Mundiales?",
    "answer": "6",
    "options": ["4", "6", "5"]
  },
  {
    "country": "Austria",
    "question": "AUS-38 | ¿Qué selección venció a Austria en semifinales del Mundial 1954?",
    "answer": "Alemania Federal",
    "options": ["Hungría", "Alemania Federal", "Uruguay"]
  },
  {
    "country": "Austria",
    "question": "AUS-39 | ¿Cuál fue el resultado de esa semifinal?",
    "answer": "6-1",
    "options": ["4-2", "3-1", "6-1"]
  },
  {
    "country": "Austria",
    "question": "AUS-40 | ¿Quién fue el capitán de Austria en Francia 1998?",
    "answer": "Andreas Herzog",
    "options": ["Andreas Herzog", "Toni Polster", "Ivica Vastić"]
  },
  {
    "country": "Austria",
    "question": "AUS-41 | ¿Quién es el director técnico de Austria en el Mundial 2026?",
    "answer": "Ralf Rangnick",
    "options": ["Oliver Glasner", "Franco Foda", "Ralf Rangnick"]
  },
  {
    "country": "Austria",
    "question": "AUS-42 | ¿Qué nacionalidad tiene Ralf Rangnick?",
    "answer": "Alemana",
    "options": ["Alemana", "Austriaca", "Suiza"]
  },
  {
    "country": "Austria",
    "question": "AUS-43 | ¿Qué país organiza la liga donde juega la mayoría de los convocados austríacos?",
    "answer": "Alemania",
    "options": ["Italia", "Alemania", "Francia"]
  },
  {
    "country": "Austria",
    "question": "AUS-44 | ¿Qué arquero fue convocado por Austria al Mundial 2026?",
    "answer": "Patrick Pentz",
    "options": ["Patrick Pentz", "Alexander Schlager", "Heinz Lindner"]
  },
  {
    "country": "Austria",
    "question": "AUS-45 | ¿Cuántos Mundiales había disputado Austria antes de 2026?",
    "answer": "9",
    "options": ["7", "9", "8"]
  },
  {
    "country": "Austria",
    "question": "AUS-46 | ¿Qué austríaco marcó el famoso gol que eliminó a Alemania en Argentina 1978?",
    "answer": "Hans Krankl",
    "options": ["Prohaska", "Polster", "Hans Krankl"]
  },
  {
    "country": "Austria",
    "question": "AUS-47 | ¿Quién es el principal ayudante de campo de Ralf Rangnick en Austria?",
    "answer": "Lars Kornetka",
    "options": ["Andreas Herzog", "Lars Kornetka", "Toni Polster"]
  },
  {
    "country": "Austria",
    "question": "AUS-48 | ¿Qué delantero austríaco jugó en Inter de Milán?",
    "answer": "Arnautović",
    "options": ["Gregoritsch", "Posch", "Arnautović"]
  },
  {
    "country": "Austria",
    "question": "AUS-49 | ¿Quién marcó el primer gol de Austria ante Jordania en el Mundial 2026?",
    "answer": "Romano Schmid",
    "options": ["Romano Schmid", "Marko Arnautović", "Marcel Sabitzer"]
  },
  {
    "country": "Austria",
    "question": "AUS-50 | ¿En qué minuto anotó Romano Schmid el 1-0 para Austria en el Mundial 2026?",
    "answer": "20'",
    "options": ["16'", "24'", "20'"]
  },
  {
    "country": "Austria",
    "question": "AUS-51 | ¿Cómo fue el primer gol de Austria ante Jordania en el Mundial 2026?",
    "answer": "Remate potente",
    "options": ["Gol de cabeza", "Remate potente", "Tiro libre directo"]
  },
  {
    "country": "Austria",
    "question": "AUS-52 | ¿Quién marcó el gol de Jordania ante Austria en el Mundial 2026?",
    "answer": "Ali Olwan",
    "options": ["Musa Al-Taamari", "Ali Olwan", "Nizar Al-Rashdan"]
  },
  {
    "country": "Austria",
    "question": "AUS-53 | ¿En qué minuto empató Jordania el partido ante Austria en el Mundial 2026?",
    "answer": "50'",
    "options": ["50'", "46'", "55'"]
  },
  {
    "country": "Austria",
    "question": "AUS-54 | ¿En qué minuto llegó el 2-1 para Austria en el Mundial 2026?",
    "answer": "76'",
    "options": ["69'", "76'", "81'"]
  },
  {
    "country": "Austria",
    "question": "AUS-55 | ¿Cómo fue el segundo gol de Austria ante Jordania en el Mundial 2026?",
    "answer": "Gol en contra tras un córner",
    "options": ["Penal", "Tiro libre", "Gol en contra tras un córner"]
  },
  {
    "country": "Austria",
    "question": "AUS-56 | ¿Quién ejecutó el córner que terminó en el gol en contra de Jordania en el Mundial 2026?",
    "answer": "Stefan Posch",
    "options": ["Stefan Posch", "David Alaba", "Marcel Sabitzer"]
  },
  {
    "country": "Austria",
    "question": "AUS-57 | ¿Quién marcó el tercer gol de Austria ante Jordania en el Mundial 2026?",
    "answer": "Arnautović",
    "options": ["Gregoritsch", "Arnautović", "Sabitzer"]
  },
  {
    "country": "Austria",
    "question": "AUS-58 | ¿En qué minuto convirtió Arnautović el 3-1 definitivo en el Mundial 2026?",
    "answer": "90+12'",
    "options": ["90+12'", "90+5'", "90+8'"]
  },
  {
    "country": "Austria",
    "question": "AUS-59 | ¿Cómo fue el tercer gol de Austria ante Jordania en el Mundial 2026?",
    "answer": "De penal",
    "options": ["De cabeza", "De tiro libre", "De penal"]
  },
  {
    "country": "Austria",
    "question": "AUS-60 | ¿Qué jugador jordano cometió la mano que derivó en el penal del 3-1 en el Mundial 2026?",
    "answer": "Saleem Obeid",
    "options": ["Saleem Obeid", "Ali Olwan", "Yazan Al-Arab"]
  },
  {
    "country": "Austria",
    "question": "AUS-61 | ¿Qué jugador austríaco había marcado un gol anulado antes del 2-1 en el Mundial 2026?",
    "answer": "Arnautović",
    "options": ["Schmid", "Sabitzer", "Arnautović"]
  },
  {
    "country": "Austria",
    "question": "AUS-62 | ¿Por qué fue anulado el gol de Arnautović a los 69 minutos en el Mundial 2026?",
    "answer": "Mano previa",
    "options": ["Mano previa", "Offside", "Falta al arquero"]
  },

  // ==========================================
  // ARGENTINA
  // ==========================================
  {
    "country": "Argentina",
    "question": "ARG-1 | ¿Cuál es la octava provincia más poblada de Argentina?",
    "answer": "Chaco",
    "options": ["Chaco", "Corrientes", "Misiones"]
  },
  {
    "country": "Argentina",
    "question": "ARG-2 | ¿Cuál es la decimosexta provincia más poblada de Argentina?",
    "answer": "San Luis",
    "options": ["San Luis", "La Rioja", "Catamarca"]
  },
  {
    "country": "Argentina",
    "question": "ARG-3 | ¿Cuántos futbolistas nacidos en Córdoba integraron planteles argentinos en Copas del Mundo?",
    "answer": "17",
    "options": ["11", "14", "17"]
  },
  {
    "country": "Argentina",
    "question": "ARG-4 | ¿Qué inventor argentino desarrolló el sistema de huellas dactilares utilizado en gran parte del mundo?",
    "answer": "Juan Vucetich",
    "options": ["René Sánchez", "Juan Vucetich", "Luis Agote"]
  },
  {
    "country": "Argentina",
    "question": "ARG-5 | ¿En qué localidad bonaerense nació Eva Perón?",
    "answer": "Los Toldos",
    "options": ["Junín", "Los Toldos", "Chivilcoy"]
  },
  {
    "country": "Argentina",
    "question": "ARG-6 | ¿Qué estancia jesuítica cordobesa fue declarada Patrimonio de la Humanidad por la UNESCO?",
    "answer": "Alta Gracia",
    "options": ["Alta Gracia", "La Paz", "Villa General Belgrano"]
  },
  {
    "country": "Argentina",
    "question": "ARG-7 | ¿Qué universidad fundada por los jesuitas en 1613 es la más antigua del país?",
    "answer": "Universidad Nacional de Córdoba",
    "options": ["Universidad Nacional de Córdoba", "Universidad Nacional de La Plata", "Universidad de Buenos Aires"]
  },
  {
    "country": "Argentina",
    "question": "ARG-8 | ¿Qué provincia argentina posee la mayor cantidad de Parques Nacionales?",
    "answer": "Santa Cruz",
    "options": ["Mendoza", "Santa Cruz", "Neuquén"]
  },
  {
    "country": "Argentina",
    "question": "ARG-9 | ¿Cuántas presencias en partidos mundialistas tiene Gonzalo Higuaín?",
    "answer": "14",
    "options": ["14", "15", "16"]
  },
  {
    "country": "Argentina",
    "question": "ARG-10 | ¿En qué provincia nació Atahualpa Yupanqui?",
    "answer": "Buenos Aires",
    "options": ["Buenos Aires", "Santiago del Estero", "Tucumán"]
  },
  {
    "country": "Argentina",
    "question": "ARG-11 | ¿Cuántas presencias en partidos mundialistas tiene Nicolás Otamendi?",
    "answer": "15",
    "options": ["12", "14", "15"]
  },
  {
    "country": "Argentina",
    "question": "ARG-12 | ¿Cuántas presencias en partidos mundialistas tuvo Mario Alberto Kempes?",
    "answer": "18",
    "options": ["13", "16", "18"]
  },
  {
    "country": "Argentina",
    "question": "ARG-13 | ¿Qué provincia argentina alberga las Ruinas de San Ignacio, uno de los principales legados jesuíticos del país?",
    "answer": "Misiones",
    "options": ["Corrientes", "Misiones", "Chaco"]
  },
  {
    "country": "Argentina",
    "question": "ARG-14 | ¿En qué fecha se celebra el Día de la Lealtad Peronista?",
    "answer": "17 de octubre",
    "options": ["17 de mayo", "17 de octubre", "19 de noviembre"]
  },
  {
    "country": "Argentina",
    "question": "ARG-15 | ¿En qué año ocurrió el tercer golpe de Estado exitoso del siglo XX en Argentina?",
    "answer": "1966",
    "options": ["1955", "1962", "1966"]
  },
  {
    "country": "Argentina",
    "question": "ARG-16 | ¿Quién era el ministro de Economía durante los hechos de diciembre de 2001 cuando renunció Fernando de la Rúa?",
    "answer": "Domingo Cavallo",
    "options": ["Domingo Cavallo", "José Luis Machinea", "Roberto Lavagna"]
  },
  {
    "country": "Argentina",
    "question": "ARG-17 | ¿Entre qué años transcurrió el mandato presidencial de Néstor Kirchner?",
    "answer": "2003-2007",
    "options": ["2001-2005", "2003-2007", "2004-2008"]
  },
  {
    "country": "Argentina",
    "question": "ARG-18 | ¿Quién fue presidente de Argentina inmediatamente antes de Néstor Kirchner?",
    "answer": "Eduardo Duhalde",
    "options": ["Eduardo Duhalde", "Ramón Puerta", "Adolfo Rodríguez Saá"]
  },
  {
    "country": "Argentina",
    "question": "ARG-19 | ¿Qué día fue hundido el crucero ARA General Belgrano durante la Guerra de Malvinas?",
    "answer": "2 de mayo de 1982",
    "options": ["2 de mayo de 1982", "4 de mayo de 1982", "7 de junio de 1982"]
  },
  {
    "country": "Argentina",
    "question": "ARG-20 | ¿Cuántas presencias en partidos mundialistas tiene Lionel Messi?",
    "answer": "28",
    "options": ["23", "26", "28"]
  },
  {
    "country": "Argentina",
    "question": "ARG-21 | ¿Cuál fue la primera provincia argentina en sancionar el voto femenino a nivel provincial?",
    "answer": "San Juan",
    "options": ["Buenos Aires", "San Juan", "Córdoba"]
  },
  {
    "country": "Argentina",
    "question": "ARG-22 | ¿Qué provincia argentina posee el único sitio del país donde se conserva un bosque de araucarias nativas?",
    "answer": "Neuquén",
    "options": ["Neuquén", "Río Negro", "Chubut"]
  },
  {
    "country": "Argentina",
    "question": "ARG-23 | ¿En qué provincia se encuentra la Manzana Jesuítica declarada Patrimonio de la Humanidad?",
    "answer": "Córdoba",
    "options": ["Misiones", "Córdoba", "Santa Fe"]
  },
  {
    "country": "Argentina",
    "question": "ARG-24 | ¿Qué inventor argentino desarrolló la birome junto al húngaro László Bíró?",
    "answer": "Juan Jorge Meyne",
    "options": ["Juan Vucetich", "Raúl Pateras Pescara", "Juan Jorge Meyne"]
  },
  {
    "country": "Argentina",
    "question": "ARG-25 | ¿Qué provincia aportó más futbolistas campeones del mundo en Qatar 2022 después de Buenos Aires?",
    "answer": "Santa Fe",
    "options": ["Santa Fe", "Córdoba", "Buenos Aires"]
  },
  {
    "country": "Argentina",
    "question": "ARG-26 | ¿Qué cordobés disputó más Mundiales con la Selección Argentina?",
    "answer": "Javier Zanetti",
    "options": ["Mario Kempes", "Paulo Dybala", "Javier Zanetti"]
  },
  {
    "country": "Argentina",
    "question": "ARG-27 | ¿En qué ciudad argentina se realizó la primera identificación criminal mediante huellas dactilares?",
    "answer": "La Plata",
    "options": ["Rosario", "La Plata", "Córdoba"]
  },
  {
    "country": "Argentina",
    "question": "ARG-28 | ¿En qué año fue patentada la birome por Ladislao Bíró en Argentina?",
    "answer": "1943",
    "options": ["1938", "1943", "1951"]
  },
  {
    "country": "Argentina",
    "question": "ARG-29 | ¿Qué científico argentino obtuvo el Premio Nobel por sus investigaciones sobre hormonas y metabolismo?",
    "answer": "Bernardo Houssay",
    "options": ["César Milstein", "Bernardo Houssay", "Luis Leloir"]
  },
  {
    "country": "Argentina",
    "question": "ARG-30 | ¿Qué científico argentino ganó el Premio Nobel de Química en 1970?",
    "answer": "Luis Federico Leloir",
    "options": ["César Milstein", "Bernardo Houssay", "Luis Federico Leloir"]
  },
  {
    "country": "Argentina",
    "question": "ARG-31 | ¿Quién fue el Director Supremo que declaró la Independence en 1816?",
    "answer": "Juan Martín de Pueyrredón",
    "options": ["Juan Martín de Pueyrredón", "Manuel Belgrano", "Gervasio Posadas"]
  },
  {
    "country": "Argentina",
    "question": "ARG-32 | ¿Cuántos golpes de Estado exitosos tuvo Argentina durante el siglo XX?",
    "answer": "6",
    "options": ["5", "6", "7"]
  },
  {
    "country": "Argentina",
    "question": "ARG-33 | ¿Qué presidente estaba en ejercicio cuando se produjo el golpe militar de 1976?",
    "answer": "María Estela Martínez de Perón",
    "options": ["Juan Domingo Perón", "María Estela Martínez de Perón", "Arturo Illia"]
  },
  {
    "country": "Argentina",
    "question": "ARG-34 | ¿Cuál fue la primera provincia argentina en tener una Constitución provincial propia después de 1810?",
    "answer": "Santa Fe",
    "options": ["Santa Fe", "Buenos Aires", "Córdoba"]
  },
  {
    "country": "Argentina",
    "question": "ARG-35 | ¿En qué año se realizó el primer censo nacional argentino?",
    "answer": "1869",
    "options": ["1853", "1869", "1880"]
  },
  {
    "country": "Argentina",
    "question": "ARG-36 | ¿Qué inventor argentino desarrolló el \"colectivo\" moderno junto a un grupo de taxistas en Buenos Aires?",
    "answer": "Ángel Di Césare",
    "options": ["Ángel Di Césare", "Juan Vucetich", "Jorge Newbery"]
  },
  {
    "country": "Argentina",
    "question": "ARG-37 | ¿En qué año se creó la Universidad de Córdoba?",
    "answer": "1613",
    "options": ["1613", "1580", "1687"]
  },
  {
    "country": "Argentina",
    "question": "ARG-38 | ¿Qué ciudad argentina fue fundada por Jerónimo Luis de Cabrera en 1573?",
    "answer": "Córdoba",
    "options": ["Córdoba", "Mendoza", "Santa Fe"]
  },
  {
    "country": "Argentina",
    "question": "ARG-39 | ¿Qué presidente argentino creó YPF en 1922?",
    "answer": "Hipólito Yrigoyen",
    "options": ["Hipólito Yrigoyen", "Marcelo T. de Alvear", "Agustín P. Justo"]
  },
  {
    "country": "Argentina",
    "question": "ARG-40 | ¿En qué año se produjo la Reforma Universitaria de Córdoba?",
    "answer": "1918",
    "options": ["1925", "1922", "1918"]
  },
  {
    "country": "Argentina",
    "question": "ARG-41 | ¿Qué presidente argentino gobernó durante el Centenario de la Revolución de Mayo en 1910?",
    "answer": "José Figueroa Alcorta",
    "options": ["Julio A. Roca", "José Figueroa Alcorta", "Roque Sáenz Peña"]
  },
  {
    "country": "Argentina",
    "question": "ARG-42 | ¿Qué provincia argentina fue la última en incorporarse definitivamente al territorio nacional?",
    "answer": "Tierra del Fuego",
    "options": ["Tierra del Fuego", "La Pampa", "Neuquén"]
  },
  {
    "country": "Argentina",
    "question": "ARG-43 | ¿En qué provincia se realizó el primer partido de fútbol registrado en Argentina?",
    "answer": "Buenos Aires",
    "options": ["Buenos Aires", "Santa Fe", "Córdoba"]
  },
  {
    "country": "Argentina",
    "question": "ARG-44 | ¿Quién diseñó el Monumento Nacional a la Bandera?",
    "answer": "Ángel Guido",
    "options": ["Ángel Guido", "Ale Alejandro Bustillo", "Francisco Salamone"]
  },
  {
    "country": "Argentina",
    "question": "ARG-45 | ¿En qué minuto convirtió Diego Maradona el llamado \"Gol del Siglo\" ante Inglaterra en México 1986?",
    "answer": "55'",
    "options": ["51'", "55'", "58'"]
  },
  {
    "country": "Argentina",
    "question": "ARG-46 | ¿Quién asistió a Jorge Burruchaga en el gol del título mundial de 1986 ante Alemania Federal?",
    "answer": "Diego Maradona",
    "options": ["Ricardo Bochini", "Jorge Valdano", "Diego Maradona"]
  },
  {
    "country": "Argentina",
    "question": "ARG-47 | ¿En qué minuto convirtió Jorge Burruchaga el gol del 3-2 en la final de México 1986?",
    "answer": "84'",
    "options": ["81'", "84'", "87'"]
  },
  {
    "country": "Argentina",
    "question": "ARG-48 | ¿Quién marcó el primer gol de la final del Mundial 1986?",
    "answer": "José Luis Brown",
    "options": ["Jorge Valdano", "José Luis Brown", "Jorge Burruchaga"]
  },
  {
    "country": "Argentina",
    "question": "ARG-49 | ¿Qué jugador argentino fue el primer expulsado en una final de Copa del Mundo?",
    "answer": "Pedro Monzón",
    "options": ["Oscar Ruggeri", "Pedro Monzón", "Sergio Batista"]
  },
  {
    "country": "Argentina",
    "question": "ARG-50 | ¿Quién convirtió el primer gol de Argentina en el Mundial 2010?",
    "answer": "Gabriel Heinze",
    "options": ["Gonzalo Higuaín", "Lionel Messi", "Gabriel Heinze"]
  },
  {
    "country": "Argentina",
    "question": "ARG-51 | ¿Quién asistió a Lionel Messi en su primer gol mundialista ante Serbia y Montenegro en 2006?",
    "answer": "Carlos Tévez",
    "options": ["Carlos Tévez", "Juan Román Riquelme", "Javier Saviola"]
  },
  {
    "country": "Argentina",
    "question": "ARG-52 | ¿Cuántos goles marcó Diego Maradona en México 1986?",
    "answer": "5",
    "options": ["4", "5", "6"]
  },
  {
    "country": "Argentina",
    "question": "ARG-53 | ¿Qué jugador anotó el gol de Argentina ante Uruguay en octavos de final de México 1986?",
    "answer": "Pedro Pasculli",
    "options": ["Diego Maradona", "Jorge Valdano", "Pedro Pasculli"]
  },
  {
    "country": "Argentina",
    "question": "ARG-54 | ¿Quién fue el único jugador argentino que ingresó como suplente en la semifinal de 1986 ante Bélgica?",
    "answer": "Ricardo Bochini",
    "options": ["Ricardo Bochini", "Pedro Pasculli", "Sergio Batista"]
  },
  {
    "country": "Argentina",
    "question": "ARG-55 | ¿Quién fue el primer argentino en marcar un hat-trick en una Copa del Mundo?",
    "answer": "Guillermo Stábile",
    "options": ["Guillermo Stábile", "Gabriel Batistuta", "Mario Kempes"]
  },
  {
    "country": "Argentina",
    "question": "ARG-56 | ¿Entre qué peso y qué peso debe tener una pelota reglamentaria de fútbol al inicio de un partido?",
    "answer": "Entre 410 y 450 gramos",
    "options": ["Entre 390 y 430 gramos", "Entre 410 y 450 gramos", "Entre 430 y 470 gramos"]
  },
  {
    "country": "Argentina",
    "question": "ARG-57 | ¿Cómo se llamó la pelota oficial del Mundial Alemania 2006?",
    "answer": "Teamgeist",
    "options": ["Jabulani", "Teamgeist", "Brazuca"]
  },
  {
    "country": "Argentina",
    "question": "ARG-58 | ¿Cómo se llamó la pelota oficial del Mundial Brasil 2014?",
    "answer": "Brazuca",
    "options": ["Brazuca", "Jabulani", "Al Rihla"]
  },
  {
    "country": "Argentina",
    "question": "ARG-59 | ¿Cómo se llamó la pelota oficial del Mundial Rusia 2018?",
    "answer": "Telstar 18",
    "options": ["Telstar 18", "Teamgeist", "Tango"]
  },
  {
    "country": "Argentina",
    "question": "ARG-60 | ¿Cómo se llamó la pelota oficial del Mundial Qatar 2022?",
    "answer": "Al Rihla",
    "options": ["Al Hilm", "Al Rihla", "Jabulani"]
  }

];


// Retorna el pool total filtrado por los tres países en juego + Argentina (siempre incluida)
export function getQuestionPoolForTeams(teamNames: string[]): QuestionItem[] {
  const allowedCountries = new Set([...teamNames, "Argentina"]);
  return QUESTIONS_DB.filter((item) => allowedCountries.has(item.country));
}

export function pickRandomQuestion(questions: QuestionItem[]) {
  return questions[Math.floor(Math.random() * questions.length)];
}