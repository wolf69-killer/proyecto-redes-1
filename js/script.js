console.log("StarCraft II cargado correctamente");

document.addEventListener("DOMContentLoaded", () => {

    const marine = document.getElementById("marine");
    const marauder = document.getElementById("marauder");
    const siegeTank = document.getElementById("siegetank");
    const battlecruiser = document.getElementById("battlecruiser");

    const zergling = document.getElementById("zergling");
    const hydralisk = document.getElementById("hydralisk");
    const mutalisk = document.getElementById("mutalisk");
    const ultralisk = document.getElementById("ultralisk");
    
    const zealot = document.getElementById("zealot");
    const stalker = document.getElementById("stalker");
    const immortal = document.getElementById("immortal");
    const carrier = document.getElementById("carrier");
    if(marine){

        marine.addEventListener("click", () => {

            alert(
                "MARINE\n\n" +
                "Costo: 50 minerales\n" +
                "Vida: 45\n" +
                "Ataque: 6\n" +
                "Rol: Infantería básica"
            );

        });
    }
    if(marauder){
        marauder.addEventListener("click", () => {
            alert(
                "MARAUDER\n\n" +
                "Costo: 100 minerales\n" +
                "25 gas\n" +
                "Vida: 125\n" +
                "Rol: Anti-blindados"
            );

        });

    }

    if(siegeTank){

        siegeTank.addEventListener("click", () => {

            alert(
                "SIEGE TANK\n\n" +
                "Costo: 150 minerales\n" +
                "125 gas\n" +
                "Rol: Artillería pesada"
            );

        });

    }

    if(battlecruiser){

        battlecruiser.addEventListener("click", () => {

            alert(
                "BATTLECRUISER\n\n" +
                "Costo: 400 minerales\n" +
                "300 gas\n" +
                "Rol: Nave capital"
            );
        });
    }
    if(zergling){

    zergling.addEventListener("click", () => {

        alert(
            "ZERGLING\n\n" +
            "Costo: 25 minerales\n" +
            "Vida: 35\n" +
            "Rol: Asalto rápido"
        );

    });

}

if(hydralisk){

    hydralisk.addEventListener("click", () => {

        alert(
            "HYDRALISK\n\n" +
            "Costo: 100 minerales\n" +
            "50 gas\n" +
            "Rol: Ataque a distancia"
        );

    });

}

if(mutalisk){

    mutalisk.addEventListener("click", () => {

        alert(
            "MUTALISK\n\n" +
            "Costo: 100 minerales\n" +
            "100 gas\n" +
            "Rol: Unidad aérea"
        );

    });

}

if(ultralisk){

    ultralisk.addEventListener("click", () => {

        alert(
            "ULTRALISK\n\n" +
            "Costo: 300 minerales\n" +
            "200 gas\n" +
            "Rol: Asalto pesado"
        );

    });

}
if(zealot){

    zealot.addEventListener("click", () => {

        alert(
            "ZEALOT\n\n" +
            "Costo: 100 minerales\n" +
            "Vida: 100\n" +
            "Rol: Guerrero cuerpo a cuerpo"
        );

    });

}

if(stalker){

    stalker.addEventListener("click", () => {

        alert(
            "STALKER\n\n" +
            "Costo: 125 minerales\n" +
            "50 gas\n" +
            "Rol: Combate a distancia"
        );

    });

}

if(immortal){

    immortal.addEventListener("click", () => {

        alert(
            "IMMORTAL\n\n" +
            "Costo: 275 minerales\n" +
            "100 gas\n" +
            "Rol: Anti-blindados"
        );

    });

}

if(carrier){

    carrier.addEventListener("click", () => {

        alert(
            "CARRIER\n\n" +
            "Costo: 350 minerales\n" +
            "250 gas\n" +
            "Rol: Nave capital"
        );

    });

}
});