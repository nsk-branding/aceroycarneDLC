const SCENES = {
    act1_scene1: [
        {
            speaker: "calista",
            text: "\"...un nombramiento histórico y sin precedentes. Miranda Lawson, quien fuera pieza clave en la resistencia contra Cerberus y figura fundamental en la supervivencia de la Tierra, asume hoy oficialmente su cargo como Embajadora ante el Consejo de la Ciudadela...\""[cite: 1]
        },
        {
            speaker: "garrus",
            text: "Vaya, parece que los días de 'científica renegada' de Cerberus han quedado atrás. Ahora es la máxima representante de la humanidad. ¿Quién lo diría, Shep? Supongo que el currículum de salvar la galaxia te abre las puertas de cualquier diplomacia."[cite: 1]
        },
        {
            speaker: "shepard",
            text: "Al menos será mucho más fácil tratar con ella que con el anterior embajador."[cite: 1]
        },
        {
            speaker: "garrus",
            text: "Hablando de eso... la reunión de mañana con Hackett y el Consejo. ¿Está todo bien? He visto tu cara cada vez que miras el terminal. No es solo cansancio acumulado.",[cite: 1]
            choices: [
                {
                    text: "\"Estoy nervioso/a, Garrus.\"",
                    action: () => {
                        GameState.relations.garrus += 1;
                        GameState.setFlag("flag_talked_garrus", true);
                    },
                    nextScene: "act1_garrus_nervous"
                },
                {
                    text: "\"Me siento optimista, Garrus.\"",
                    action: () => {
                        GameState.relations.garrus += 2;
                        GameState.setFlag("flag_talked_garrus", true);
                    },
                    nextScene: "act1_garrus_optimistic"
                },
                {
                    text: "\"No quiero hablar de eso ahora.\"",
                    action: () => {
                        GameState.setFlag("flag_talked_garrus", true);
                    },
                    nextScene: "act1_garrus_silent"
                }
            ]
        }
    ],

    act1_garrus_nervous: [
        {
            speaker: "shepard",
            text: "Hay muchas preguntas sobre el informe que hice. El consejo necesita despejar muchas dudas. Buscan respuestas que no sé si voy a poder darles."[cite: 1]
        },
        {
            speaker: "garrus",
            text: "Mañana estaremos ahí respaldándote. Solo grita y entraré pateando la puerta."[cite: 1]
        },
        {
            speaker: "narrator",
            text: "(Ambos ríen)",[cite: 1],
            nextScene: "act1_scene2"
        }
    ],

    act1_garrus_optimistic: [
        {
            speaker: "shepard",
            text: "Ya ha pasado lo peor. Me siento aliviado/a de que todo esto termine de una vez por todas."[cite: 1]
        },
        {
            speaker: "garrus",
            text: "Eso es más como lo esperaba de ti, Shepard. Pero no bajes la guardia. El Consejo siempre tiene sus propias agendas."[cite: 1]
        },
        {
            nextScene: "act1_scene2"
        }
    ],

    act1_garrus_silent: [
        {
            speaker: "shepard",
            text: "Solo quiero disfrutar de esta noche, Garrus. Mañana será otro día."[cite: 1]
        },
        {
            speaker: "garrus",
            text: "Entendido, Comandante. Pero si necesitas hablar, aquí estoy."[cite: 1]
        },
        {
            nextScene: "act1_scene2"
        }
    ],

    act1_scene2: [
        {
            speaker: "hackett",
            text: "Comandante, los datos telemétricos del Crisol dejan muchas preguntas. Por la seguridad de todo el universo debemos desmantelarlo, pero no sin antes entender qué ha sucedido."[cite: 1]
        },
        {
            speaker: "hackett",
            text: "Oficialmente, la galaxia entera cree que la Destrucción barrió con todo rastro sintético. Pero nosotros sabemos la verdad: los Geth, EDI, usted y millones de personas con implantes siguen respirando."[cite: 1]
        },
        {
            speaker: "miranda",
            text: "Shepard, según tu informe, ninguno de nosotros deberíamos estar vivos. Los modificados con implantes o sintéticos... necesitamos analizar qué anomalía energética ha causado el milagro de que aún estemos hablando."[cite: 1]
        },
        {
            speaker: "salarian_councillor",
            text: "Nuestros científicos confirman que un flujo de energía desconocido se activó al mismo instante que el catalizador y protegió de alguna manera a las vidas sintéticas de la galaxia. La pregunta es sencilla, Shepard: ¿Fue una alteración consciente y deliberada por alguien?"[cite: 1]
        },
        {
            speaker: "turian_councillor",
            text: "Shepard, lo más importante: El Consejo está de acuerdo en que, como Espectro, tienes autoridad para actuar y entendemos la situación. Sin embargo, si esto se filtra, el pánico destruirá la paz."[cite: 1]
        },
        {
            speaker: "narrator",
            text: "El ambiente se siente tenso y se entiende la gravedad del asunto. Esto jamás saldrá a la luz. La elección de Shepard ese día en el Crisol será un asunto clasificado."[cite: 1],
            choices: [
                {
                    text: "[Honesta / Vulnerable] \"Estuve allí dentro, Hackett...\"",
                    action: () => GameState.setFlag("choice_council_response", "honest"),
                    nextScene: "act1_council_honest"
                },
                {
                    text: "[Defensiva / Firme] \"El Crisol era una caja negra indescifrable...\"",
                    action: () => GameState.setFlag("choice_council_response", "defensive"),
                    nextScene: "act1_council_defensive"
                },
                {
                    text: "[Pragmática / Secreta] \"Lo importante es que los Segadores están muertos...\"",
                    action: () => GameState.setFlag("choice_council_response", "pragmatic"),
                    nextScene: "act1_council_pragmatic"
                }
            ]
        }
    ],

    act1_council_honest: [
        {
            speaker: "shepard",
            text: "Estuve allí dentro, Hackett. Vi morir a Anderson. Cuando tomé la decisión final, elegí la Destrucción para acabar con los Segadores... pero mi mente no pudo soportar borrar a los míos. El pulso falló por cuenta propia."[cite: 1]
        },
        {
            nextScene: "act1_council_outro"
        }
    ],

    act1_council_defensive: [
        {
            speaker: "shepard",
            text: "El Crisol era una caja negra indescifrable. Hice lo que la misión exigía: destruir a los Segadores. Lo que pasó después es un milagro técnico que escapa de mi control."[cite: 1]
        },
        {
            nextScene: "act1_council_outro"
        }
    ],

    act1_council_pragmatic: [
        {
            speaker: "shepard",
            text: "Lo importante es que los Segadores están muertos y la galaxia sobrevive. Los caídos serán recordados."[cite: 1]
        },
        {
            nextScene: "act1_council_outro"
        }
    ],

    act1_council_outro: [
        {
            speaker: "hackett",
            text: "Bien. Mantendremos el informe sellado como 'Falla Estructural Inexplicable'. Queda asignada a una misión ultra secreta junto a su equipo para averiguar qué pasó realmente."[cite: 1]
        },
        {
            nextScene: "act1_scene3"
        }
    ],

    act1_scene3: [
        {
            speaker: "hackett",
            text: "Hoy honramos a los caídos y a los valientes que dieron su último aliento. Y reconocemos a la arquitecta de esta paz..."[cite: 1]
        },
        {
            speaker: "narrator",
            text: "Hackett le otorga a Shepard la Medalla al Mérito Supremo de los Espectros mientras la multitud estalla en aplausos."[cite: 1]
        },
        {
            speaker: "kaidan",
            text: "Estoy tan orgulloso de ti. Siempre lo he estado."[cite: 1]
        },
        {
            speaker: "liara",
            text: "La galaxia entera te debe su existencia. Nunca lo olvides."[cite: 1]
        },
        {
            nextScene: "act1_scene4"
        }
    ],

    act1_scene4: [
        {
            speaker: "narrator",
            text: "Noche cerrada. El apartamento está en penumbra. Shepard está junto al ventanal. Kaidan entra, se afloja el cuello del uniforme y la rodea con sus brazos."[cite: 1]
        },
        {
            speaker: "kaidan",
            text: "Los vítores afuera siguen resonando... Brindaron por ti en toda la galaxia, Comandante."[cite: 1]
        },
        {
            speaker: "shepard",
            text: "Kaidan. Ese día en el núcleo, elegí la destrucción sabiendo que ibas a morir tú, que iba a borrar a EDI, a Legión... No debería aceptar esta medalla."[cite: 1]
        },
        {
            speaker: "kaidan",
            text: "Shepard... mírame. En ese último segundo elegiste proteger a los que podías. No eres un monstruo por amar la vida. Si el mundo entero te juzgara, yo quemaría el universo con tal de defenderte."[cite: 1]
        },
        {
            speaker: "narrator",
            text: "La tensión estalla en un beso profundo y apasionado que disipa todas las sombras de la noche."[cite: 1],
            action: () => {
                GameState.setFlag("romance_kaidan", true);
                GameState.relations.kaidan += 5;
                GameState.setFlag("flag_act1_completed", true);
            },
            nextScene: "act2_normandy_hub"
        }
    ],

    act2_normandy_hub: [
        {
            speaker: "narrator",
            text: "Te encuentras en la Normandy. El panel del ascensor principal despliega las opciones de cubierta."[cite: 1]
        },
        {
            text: "¿A qué zona de la nave deseas acudir?",
            choices: [
                {
                    text: "Puente / Cockpit (Joker y EDI)",
                    nextScene: "act2_bridge"
                },
                {
                    text: "Cubierta de Artillería (Garrus)",
                    nextScene: "act2_armory"
                },
                {
                    text: "Comedor / Zona de Descanso (Tali y Geth)",
                    nextScene: "act2_mess"
                },
                {
                    text: "Camarote del Comandante (Liara y Glyphe)",
                    nextScene: "act2_cabin"
                },
                {
                    text: "Continuar hacia el Santuario Proteano",
                    nextScene: "act2_sanctuary"
                }
            ]
        }
    ],

    act2_bridge: [
        {
            speaker: "joker",
            text: "Ey, Comandante. Veo que sobreviviste al desfile de la Ciudadela sin desmayarte. Punto para ti."[cite: 1]
        },
        {
            speaker: "edi",
            text: "Estadísticamente, las probabilidades de un colapso público eran del 34.2%. Me alegra ver que fallaron."[cite: 1]
        },
        {
            nextScene: "act2_normandy_hub"
        }
    ],

    act2_armory: [
        {
            speaker: "garrus",
            text: "¡Menos mal que apareces! Los relés están reparados, pero el rendimiento térmico de los cañones tras el salto... un desastre absoluto."[cite: 1],
            choices: [
                {
                    text: "\"¿Aún sigues con las malditas calibraciones, Garrus?\"",
                    action: () => GameState.relations.garrus += 2,
                    nextScene: "act2_normandy_hub"
                },
                {
                    text: "\"Déjate de tuercas, necesito hablar o tomar un trago contigo.\"",
                    action: () => GameState.relations.garrus += 3,
                    nextScene: "act2_normandy_hub"
                }
            ]
        }
    ],

    act2_mess: [
        {
            speaker: "tali",
            text: "¿Sabes? A veces, cuando giras la torreta, haces exactamente el mismo gesto que hacía tu padre, Legión."[cite: 1]
        },
        {
            speaker: "geth",
            text: "Advertencia: Las plataformas Geth carecen de ascendencia biológica, pero esta unidad procesa esa coincidencia como afecto optimizado hacia ti, Tali'Zorah."[cite: 1],
            choices: [
                {
                    text: "\"La lógica Geth tiene más corazón que la de muchos orgánicos.\"",
                    action: () => GameState.relations.tali += 2,
                    nextScene: "act2_normandy_hub"
                },
                {
                    text: "\"Cuidado, Tali, no vayas a invitar a cenar a una plataforma móvil.\"",
                    action: () => GameState.relations.tali += 1,
                    nextScene: "act2_normandy_hub"
                }
            ]
        }
    ],

    act2_cabin: [
        {
            speaker: "liara",
            text: "He estado analizando los datos sobre el Santuario Proteano. Hay una baliza allí que podría contener respuestas clave sobre el Crisol."[cite: 1]
        },
        {
            action: () => {
                GameState.relations.liara += 1;
                GameState.setFlag("flag_liara_investigation", true);
            },
            nextScene: "act2_normandy_hub"
        }
    ],

    act2_sanctuary: [
        {
            speaker: "narrator",
            text: "Shepard y Liara lideran la incursión a la instalación proteana acompañadas por Kaidan."[cite: 1]
        },
        {
            speaker: "liara",
            text: "¡Increíble! Intentaron diseñar un escudo cuántico, pero cometieron un error monumental de polaridad."[cite: 1]
        },
        {
            speaker: "shepard",
            text: "No era un arma destructiva... El artefacto blindó por la fuerza a todas las formas de vida conectadas. El pulso del Crisol absorbió esta directriz por error."[cite: 1]
        },
        {
            action: () => {
                GameState.setFlag("flag_protean_sanctuary_completed", true);
                GameState.setFlag("flag_act2_completed", true);
            },
            nextScene: "act3_armax"
        }
    ],

    act3_armax: [
        {
            speaker: "narrator",
            text: "Te encuentras en el Simulador de Combate de Armax."[cite: 1]
        },
        {
            speaker: "kaidan",
            text: "Shepard... ver cómo eliminas a ese pelotón de asalto con tanta elegancia... me distrae peligrosamente."[cite: 1],
            choices: [
                {
                    text: "\"Concéntrate, Mayor.\"",
                    nextScene: "act3_romance_end"
                },
                {
                    text: "\"Bueno, al menos no voy a ser la única que se distrae.\"",
                    nextScene: "act3_romance_end"
                }
            ]
        }
    ],

    act3_romance_end: [
        {
            speaker: "kaidan",
            text: "Me importa muy poco si el Consejo nos vigila o si la galaxia entera nos observa. Aquí para mí, lo único real eres tú."[cite: 1]
        },
        {
            speaker: "narrator",
            text: "Se produce una escena de mucha pasión, con un beso profundo y cargado de amor. La multitud en el Armax Arena estalla en aplausos."[cite: 1],
            action: () => {
                GameState.armaxVisits++;
                GameState.relations.kaidan += 2;
            },
            choices: [
                {
                    text: "Volver al panel de la Normandy",
                    nextScene: "act2_normandy_hub"
                },
                {
                    text: "Reiniciar juego desde el principio",
                    nextScene: "act1_scene1"
                }
            ]
        }
    ]
};