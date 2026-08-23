const Engine = {
    currentScene: null,
    currentStepIndex: 0,

    init() {
        console.log("Motor de Sueños de Acero y Carne iniciado.");
        this.loadScene("act1_scene1");
    },

    loadScene(sceneKey) {
        if (!SCENES[sceneKey]) {
            console.error(`La escena '${sceneKey}' no existe.`);
            return;
        }
        this.currentScene = SCENES[sceneKey];
        this.currentStepIndex = 0;
        this.renderStep();
    },

    renderStep() {
        const step = this.currentScene[this.currentStepIndex];
        if (!step) return;

        const textElement = document.getElementById("dialogue-text");
        const choicesContainer = document.getElementById("choices-container");
        
        choicesContainer.innerHTML = "";

        let displayText = step.text;
        if (step.speaker && CONFIG.characters[step.speaker]) {
            const charData = CONFIG.characters[step.speaker];
            if (charData.name !== "") {
                displayText = `[${charData.name}]: ${step.text}`;
            }
        }
        textElement.textContent = displayText;

        if (step.action) {
            step.action();
        }

        if (step.choices && step.choices.length > 0) {
            step.choices.forEach(choice => {
                const btn = document.createElement("button");
                btn.className = "choice-btn";
                btn.textContent = choice.text;
                btn.onclick = () => {
                    if (choice.action) choice.action();
                    if (choice.nextScene) {
                        this.loadScene(choice.nextScene);
                    } else {
                        this.currentStepIndex++;
                        this.renderStep();
                    }
                };
                choicesContainer.appendChild(btn);
            });
        } else {
            const btn = document.createElement("button");
            btn.className = "choice-btn";
            btn.textContent = "Continuar >";
            btn.onclick = () => {
                if (step.nextScene) {
                    this.loadScene(step.nextScene);
                } else {
                    this.currentStepIndex++;
                    if (this.currentStepIndex >= this.currentScene.length) {
                        console.log("Fin de la escena actual.");
                    } else {
                        this.renderStep();
                    }
                }
            };
            choicesContainer.appendChild(btn);
        }
    }
};