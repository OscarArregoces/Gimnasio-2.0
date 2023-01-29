
export class NameExercie {
    public adbomen: any[];
    public biceps: any[];
    public espalda: any[];
    public hombros: any[];
    public pectoral: any[];
    public piernas: any[];
    public trapesio: any[];
    public triceps: any[];
    constructor() {
        this.adbomen = [
            { 'id': 1,'type': 'adbomen' ,'name': 'Alcance y captura alternativos' },
            { 'id': 2,'type': 'adbomen' ,'name': 'Cuartel cuarto crunch' },
            { 'id': 3,'type': 'adbomen' ,'name': 'Curling body via block simulator' },
            { 'id': 4,'type': 'adbomen' ,'name': 'Doble giro en el banco' },
            { 'id': 5,'type': 'adbomen' ,'name': 'Flexion del cuerpo con manos y pies' },
            { 'id': 6,'type': 'adbomen' ,'name': 'La oblique se levanta en los bares paralelos' },
            { 'id': 7,'type': 'adbomen' ,'name': 'Llevando las piernas a los brazos colgando del travesaño' },
            { 'id': 8,'type': 'adbomen' ,'name': 'Oblique twist with weight plate' },
            { 'id': 9,'type': 'adbomen' ,'name': 'Pendiente' },
            { 'id': 10,'type': 'adbomen' ,'name': 'Pistas laterales de pie' },
            { 'id': 11,'type': 'adbomen' ,'name': 'Sube el maletero' },
            { 'id': 12,'type': 'adbomen' ,'name': 'Tocadores de talones alternativos'}
        ]
        this.biceps = [
            { 'id': 1,'type': 'biceps' ,'name': 'Colapso en el suelo del maletero' },
            { 'id': 2,'type': 'biceps' ,'name': 'Curl con una empuñadora de timbre' },
            { 'id': 3,'type': 'biceps' ,'name': 'Curl en el simulador' },
            { 'id': 4,'type': 'biceps' ,'name': 'Cursl de barra EZ' },
            { 'id': 5,'type': 'biceps' ,'name': 'Curl de agarre cercano sentado en barra' },
            { 'id': 6,'type': 'biceps' ,'name': 'Un brazo doblado rizo predicador' }
        ]
        this.espalda = [
            { 'id': 1,'type': 'espalda' ,'name': 'Arrojar campanillas en la pendiente' },
            { 'id': 2,'type': 'espalda' ,'name': 'Tercero' },
            { 'id': 3,'type': 'espalda' ,'name': 'Banca inclinada dos brazos tirados' },
            { 'id': 4,'type': 'espalda' ,'name': 'Dominada' },
            { 'id': 5,'type': 'espalda' ,'name': 'Expulsar el simulador Hummer' },
            { 'id': 6,'type': 'espalda' ,'name': 'Extremo de los brazos rectos delbloque superior' },
            { 'id': 7,'type': 'espalda' ,'name': 'Fila doblada de barbel' },
            { 'id': 8,'type': 'espalda' ,'name': 'Impulso horizontal sobre el simulador' },
            { 'id': 9,'type': 'espalda' ,'name': 'Levantando timbre en la mano' },
            { 'id': 10,'type': 'espalda' ,'name': 'Maquina de agarre invertida' },
            { 'id': 11,'type': 'espalda' ,'name': 'Termina el timbre con una mano' },
            { 'id': 12,'type': 'espalda' ,'name': 'Thrust T-shaped on the back muscles in the slope' },
            { 'id': 13,'type': 'espalda' ,'name': 'Tira asistida por maquina' },
        ]
        this.hombros = [
            { 'id': 1,'type': 'hombros' ,'name': 'Arnold press' },
            { 'id': 2,'type': 'hombros' ,'name': 'Barbell bent over row' },
            { 'id': 3,'type': 'hombros' ,'name': 'Barbell front raise' },
            { 'id': 4,'type': 'hombros' ,'name': 'Bent over reverse fly' },
            { 'id': 5,'type': 'hombros' ,'name': 'Cruzar los brazos para bloquear el soporte del simulador' },
            { 'id': 6,'type': 'hombros' ,'name': 'Dips' },
            { 'id': 7,'type': 'hombros' ,'name': 'Inclined bench press' },
            { 'id': 8,'type': 'hombros' ,'name': 'Knee roll-out' },
            { 'id': 9,'type': 'hombros' ,'name': 'Lateral raise' },
            { 'id': 10,'type': 'hombros' ,'name': 'Levanta los brazos hacia aelante con el bloque inferior de pie' },
            { 'id': 11,'type': 'hombros' ,'name': 'Levanten las manos con un timbre' },
            { 'id': 12,'type': 'hombros' ,'name': 'Maquina hombros presionar' },
            { 'id': 13,'type': 'hombros' ,'name': 'Pulsa el simulador de gimnasio de fuerza martillo' },
            { 'id': 14,'type': 'hombros' ,'name': 'Simulador de flexibilidad' },
            { 'id': 15,'type': 'hombros' ,'name': 'Standing rope face pull' },
            { 'id': 16,'type': 'hombros' ,'name': 'Upright row' }
        ]
        this.pectoral = [
            { 'id': 1,'type': 'pectoral' ,'name': 'Apertua en maquina' },
            { 'id': 2,'type': 'pectoral' ,'name': 'Cruzar los brazos para bloquear el soporte' },
            { 'id': 3,'type': 'pectoral' ,'name': 'Declinar smith machine bench press' },
            { 'id': 4,'type': 'pectoral' ,'name': 'Enlazar campanas desde detras de la cabeza' },
            { 'id': 5,'type': 'pectoral' ,'name': 'Mancuernas sobrevolando tu cuerpo' },
            { 'id': 6,'type': 'pectoral' ,'name': 'Prensa de cofres sentados' },
            { 'id': 7,'type': 'pectoral' ,'name': 'Presion de pectorales con mancuernas' },
            { 'id': 8,'type': 'pectoral' ,'name': 'Press de banca con mancuernas' },
            { 'id': 9,'type': 'pectoral' ,'name': 'Press de banca declinado' },
            { 'id': 10,'type': 'pectoral' ,'name': 'Press de banca inclinado' },
            { 'id': 11,'type': 'pectoral' ,'name': 'Press de banca' },
            { 'id': 12,'type': 'pectoral' ,'name': 'Simulador de fuerza martillo' }
        ]
        this.piernas = [
            { 'id': 1,'type': 'piernas' ,'name': 'Jalon_de_pierna_con_cable' },
            { 'id': 2,'type': 'piernas' ,'name': 'Levantamiento_de_gluteo' },
            { 'id': 3,'type': 'piernas' ,'name': 'Levantamientos_con_una_barbacoa' },
            { 'id': 4,'type': 'piernas' ,'name': 'Mutaculo_de_flexibilidad_mintiendo' },
            { 'id': 5,'type': 'piernas' ,'name': 'Pata_del_simulador_de_flexibilidad' },
            { 'id': 6,'type': 'piernas' ,'name': 'Prensa_de_pierna_inclinada' },
            { 'id': 7,'type': 'piernas' ,'name': 'Sancadas' },
            { 'id': 8,'type': 'piernas' ,'name': 'Simulador_de_pierna_flexible_mintiendo' },
            { 'id': 9,'type': 'piernas' ,'name': 'Squats_en_los_hombros' },
            { 'id': 10,'type': 'piernas' ,'name': 'Sumo_de_levantamiento_de_muerte' }
        ]
        this.trapesio = [
            { 'id': 1,'type': 'piernas' ,'name': 'Camino_a_la_parte_trasera_del_delta' },
            { 'id': 2,'type': 'piernas' ,'name': 'Carroceria_del_hombro_delantero_con_barbacoa' },
            { 'id': 3,'type': 'piernas' ,'name': 'Cruzar_cables' },
            { 'id': 4,'type': 'piernas' ,'name': 'Filas_verticales_del_cable' }
        ]
        this.triceps = [
            { 'id': 1,'type': 'espalda' ,'name': 'Brazos_de_extension_con_barro_curvo_por_detras_de_la_cabeza' },
            { 'id': 2,'type': 'espalda' ,'name': 'CableV-BarTricepsPushdown' },
            { 'id': 3,'type': 'espalda' ,'name': 'Dumbbell-Kickback-copy-1' },
            { 'id': 4,'type': 'espalda' ,'name': 'Dumbell-Triceps-Extension' },
            { 'id': 5,'type': 'espalda' ,'name': 'exercising-extensión-de-una-mano-con-una-pesa-de-gimnasia-de-detrás-la-cabeza-43826101' },
            { 'id': 6,'type': 'espalda' ,'name': 'Extension_de_barra_tricep' },
            { 'id': 7,'type': 'espalda' ,'name': 'Extension_de_tricep_con_cable_agarre_neutro' },
            { 'id': 8,'type': 'espalda' ,'name': 'Extension_de_triceps_seleccionada' },
            { 'id': 9,'type': 'espalda' ,'name': 'Presion_alternativa_de_doblaje_con_la_muñeca_girada' },
            { 'id': 10,'type': 'espalda' ,'name': 'Tricep_en_banco' },
            { 'id': 11,'type': 'espalda' ,'name': 'TwoArmOverheadSeatedTricepsExtensions' }
        ]
    }
}