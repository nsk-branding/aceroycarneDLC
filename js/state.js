const GameState = {
    player: {
        gender: "female",
        firstName: "Lorena",
        lastName: "Shepard",
        pronoun: "ella"
    },
    
    relations: {
        garrus: 0,
        miranda: 0,
        kaidan: 0,
        liara: 0,
        tali: 0,
        joker: 0
    },

    romance: {
        kaidan: false,
        garrus: false,
        miranda: false,
        liara: false,
        tali: false
    },

    flags: {
        flag_apartment_scene_completed: false,
        flag_council_meeting_completed: false,
        flag_ceremony_completed: false,
        flag_intimate_scene_completed: false,
        flag_act1_completed: false,
        flag_liara_investigation: false,
        flag_protean_sanctuary_completed: false,
        flag_act2_completed: false,
        flag_truth_revealed: false,
        flag_talked_garrus: false
    },

    armaxVisits: 0,

    setFlag(key, value) {
        this.flags[key] = value;
    },

    getFlag(key) {
        return this.flags[key] !== undefined ? this.flags[key] : false;
    }
};