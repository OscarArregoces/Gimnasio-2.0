import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExercieServiceService {

  public abdomen: any[];
    public biceps: any[];
    public espalda: any[];
    public hombros: any[];
    public pectoral: any[];
    public piernas: any[];
    public trapesio: any[];
    public triceps: any[];
    constructor() {
        this.abdomen = [
            { 'id': 1,'type': 'abdomen' ,'name': 'Alcance y captura alternativos' },
            { 'id': 2,'type': 'abdomen' ,'name': 'Cuartel cuarto crunch' },
            { 'id': 3,'type': 'abdomen' ,'name': 'Curling body via block simulator' },
            { 'id': 4,'type': 'abdomen' ,'name': 'Doble giro en el banco' },
            { 'id': 5,'type': 'abdomen' ,'name': 'Flexion del cuerpo con manos y pies' },
            { 'id': 6,'type': 'abdomen' ,'name': 'La oblique se levanta en los bares paralelos' },
            { 'id': 7,'type': 'abdomen' ,'name': 'Llevando las piernas a los brazos colgando del travesaño' },
            { 'id': 8,'type': 'abdomen' ,'name': 'Oblique twist with weight plate' },
            { 'id': 9,'type': 'abdomen' ,'name': 'Pendiente' },
            { 'id': 10,'type': 'abdomen' ,'name': 'Pistas laterales de pie' },
            { 'id': 11,'type': 'abdomen' ,'name': 'Sube el maletero' },
            { 'id': 12,'type': 'abdomen' ,'name': 'Tocadores de talones alternativos'}
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
            { 'id': 1,'type': 'piernas' ,'name': 'Jalon de pierna con cable' },
            { 'id': 2,'type': 'piernas' ,'name': 'Levantamiento de gluteo' },
            { 'id': 3,'type': 'piernas' ,'name': 'Levantamientos con una barbacoa' },
            { 'id': 4,'type': 'piernas' ,'name': 'Mutaculo de flexibilidad mintiendo' },
            { 'id': 5,'type': 'piernas' ,'name': 'Pata del simulador de flexibilidad' },
            { 'id': 6,'type': 'piernas' ,'name': 'Prensa de pierna inclinada' },
            { 'id': 7,'type': 'piernas' ,'name': 'Sancadas' },
            { 'id': 8,'type': 'piernas' ,'name': 'Simulador de pierna flexible mintiendo' },
            { 'id': 9,'type': 'piernas' ,'name': 'Squats en los hombros' },
            { 'id': 10,'type': 'piernas' ,'name': 'Sumo de levantamiento de muerte' }
        ]
        this.trapesio = [
            { 'id': 1,'type': 'trapesio' ,'name': 'Camino a la parte trasera del delta' },
            { 'id': 2,'type': 'trapesio' ,'name': 'Carroceria del hombro delantero con barbacoa' },
            { 'id': 3,'type': 'trapesio' ,'name': 'Cruzar cables' },
            { 'id': 4,'type': 'trapesio' ,'name': 'Filas verticales del cable' }
        ]
        this.triceps = [
            { 'id': 1,'type': 'triceps' ,'name': 'Brazos de extension con barro curvo por detras de la cabeza' },
            { 'id': 2,'type': 'triceps' ,'name': 'CableV BarTricepsPushdown' },
            { 'id': 3,'type': 'triceps' ,'name': 'Dumbbell Kickback copy 1' },
            { 'id': 4,'type': 'triceps' ,'name': 'Dumbell Triceps Extension' },
            { 'id': 5,'type': 'triceps' ,'name': 'Extensión de una mano con una pesa de gimnasia detrás de la cabeza' },
            { 'id': 6,'type': 'triceps' ,'name': 'Extension de barra tricep' },
            { 'id': 7,'type': 'triceps' ,'name': 'Extension de tricep con cable agarre neutro' },
            { 'id': 8,'type': 'triceps' ,'name': 'Extension de triceps seleccionada' },
            { 'id': 9,'type': 'triceps' ,'name': 'Presion alternativa de doblaje con la muñeca girada' },
            { 'id': 10,'type': 'triceps' ,'name': 'Tricep en banco' },
            { 'id': 11,'type': 'triceps' ,'name': 'Extensiones de tríceps sentado por encima de la cabeza con dos brazos' }
        ]
    }
}
