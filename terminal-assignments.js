// Terminal Assignments for KEB Drives
// Maps product line + control type to terminal assignments

const terminalAssignments = {
    S6: {
        A: {
            name: "S6 APPLICATION",
            terminalStrips: [
                {
                    name: "X2A",
                    terminals: [
                        { pin: "1", function: "", name: ["DI1 / AN3"], description: "Digital input 1 (standard) / analog input 3 (special software)" },
                        { pin: "2", function: "", name: ["DI2"], description: "Digital input 2" },
                        { pin: "3", function: "", name: ["DI3"], description: "Digital input 3" },
                        { pin: "4", function: "", name: ["DI4"], description: "Digital input 4" },
                        { pin: "5", function: "", name: ["DI5"], description: "Digital input 5" },
                        { pin: "6", function: "", name: ["DI6"], description: "Digital input 6" },
                        { pin: "7", function: "", name: ["DI7"], description: "Digital input 7" },
                        { pin: "8", function: "", name: ["DI8"], description: "Digital input 8" },
                        { pin: "9", function: "", name: ["0V"], description: "Reference potential for digital inputs" },
                        { pin: "10", function: "", name: ["DO1"], description: "Digital output 1" },
                        { pin: "11", function: "", name: ["0V"], description: "Reference potential for digital outputs" },
                        { pin: "12", function: "", name: ["DO2"], description: "Digital output 2" },
                        { pin: "13", function: "", name: ["RLB"], description: "Relay output / NC contact" },
                        { pin: "14", function: "", name: ["RLA"], description: "Relay output / NO contact" },
                        { pin: "15", function: "", name: ["RLC"], description: "Relay output/ switching contact" },
                        { pin: "16", function: "", name: ["24Vout"], description: "DC voltage output 24V (max. 100 mA together with terminal 26) for controlling the inputs (SELV)." },
                        { pin: "17", function: "", name: ["AN1-"], description: "Non-isolated differential input 1" },
                        { pin: "18", function: "", name: ["AN1+"], description: "Non-isolated differential input 1" },
                        { pin: "19", function: "", name: ["AN2-"], description: "Non-isolated differential input 2" },
                        { pin: "20", function: "", name: ["AN2+"], description: "Non-isolated differential input 2" },
                        { pin: "21", function: "", name: ["0V"], description: "Reference potential for analog inputs and outputs" },
                        { pin: "22", function: "", name: ["ANOUT"], description: "Analog output DC 0...10 V" },
                        { pin: "23", function: "", name: ["CAN low"], description: "CAN bus ISO High Speed according to ISO/DIN 11898 => fieldbus interfaces" },
                        { pin: "24", function: "", name: ["CAN high"], description: "CAN bus ISO High Speed according to ISO/DIN 11898 => fieldbus interfaces" },
                        { pin: "25", function: "", name: ["CAN GND"], description: "CAN Ground\n(=> Fieldbus interfaces [▸ 26])" },
                        { pin: "26", function: "", name: ["24Vout"], description: "DC voltage output 24V (max. 100 mA together with terminal 16) for controlling the inputs (SELV)." },
                        { pin: "27", function: "", name: ["0V"], description: "Reference potential for P24Vin at external supply" },
                        { pin: "28", function: "", name: ["P24Vin"], description: "DC voltage input DC 24V to supply the control board" }
                    ]
                },
                {
                    name: "X1C",
                    terminals : [
                        { pin: "1", function: "", name: ["BR+"], description: "Brake Control / Output +" },
                        { pin: "2", function: "", name: ["BR-"], description: "Brake Control / Output -" },
                        { pin: "3", function: "", name: ["Reserved"], description: "-" },
                        { pin: "4", function: "", name: ["Reserved"], description: "-" },
                        { pin: "5", function: "", name: ["TA1"], description: "Temperature Detection / Input +" },
                        { pin: "6", function: "", name: ["TA2"], description: "Temperature Detection / Input -" }    
                    ]
                }

            ],
            equipmentStrips: {
                "1": {
                    name: "X2B",
                    terminals: [
                        { pin: "1 / 2", function: "Input", name: ["STO1+"], description: "STO channel 1" },
                        { pin: "3 / 4", function: "Input", name: ["STO1-"], description: "STO channel 1" },
                        { pin: "5 / 6", function: "Input", name: ["STO2+"], description: "STO channel 2" },
                        { pin: "7 / 8", function: "Input", name: ["STO2-"], description: "STO channel 2" },
                        { pin: "9 / 10", function: "Input", name: ["SBC1+"], description: "SBC channel 1" },
                        { pin: "11 / 12", function: "Input", name: ["SBC1-"], description: "SBC channel 1" },
                        { pin: "13 / 14", function: "Input", name: ["SBC2+"], description: "SBC channel 2" },
                        { pin: "15 / 16", function: "Input", name: ["SBC2-"], description: "SBC channel 2" },
                        { pin: "17 / 18", function: "Output", name: ["Status STO"], description: "Output STO" },
                        { pin: "19 / 20", function: "Output", name: ["Status SBC"], description: "Output SBC" }
                    ]
                },
                "3": {
                    name: "X2B",
                    terminals: [
                        { pin: "1/2", function: "STO inputs", name: ["STO.1"], description: "" },
                        { pin: "3/4", function: "STO inputs", name: ["STO.2"], description: "" },
                        { pin: "5/6", function: "SBC inputs", name: ["SBC.1"], description: "" },
                        { pin: "7/8", function: "SBC inputs", name: ["SBC.2"], description: "" },
                        { pin: "9/10", function: "Function1 inputs", name: ["FUNC1.1"], description: "" },
                        { pin: "11/12", function: "Function1 inputs", name: ["FUNC1.2"], description: "" },
                        { pin: "13/14", function: "Function2 inputs", name: ["FUNC1.1"], description: "" },
                        { pin: "15/16", function: "Function2 inputs", name: ["FUNC2.2"], description: "" },
                        { pin: "17/18", function: "Ripple- inputs", name: ["Ripple.1"], description: "" },
                        { pin: "19/20", function: "Ripple- inputs", name: ["Ripple.2"], description: "" },
                        { pin: "21/22", function: "Clock-outputs", name: ["Clock.1"], description: "" },
                        { pin: "23/24", function: "Clock-outputs", name: ["Clock.2"], description: "" },
                        { pin: "25/26", function: "Output 1", name: ["Out1"], description: "" },
                        { pin: "27/28", function: "Output 2", name: ["Out2"], description: "" },
                        { pin: "29/30", function: "Ripple outputs", name: ["Ripple Out.1"], description: "" },
                        { pin: "31/32", function: "Ripple outputs", name: ["Ripple Out.2"], description: "" }
                    ]
                },
                "5": {
                    name: "X2B",
                    terminals: [
                        { pin: "1", function: "Function1- inputs", name: ["FUNC1.1"], description: "" },
                        { pin: "2", function: "Function1- inputs", name: ["FUNC1.2"], description: "" },
                        { pin: "3", function: "Function2- inputs", name: ["FUNC2.1"], description: "" },
                        { pin: "4", function: "Function2- inputs", name: ["FUNC2.2"], description: "" },
                        { pin: "5", function: "Function3- inputs", name: ["FUNC3.1"], description: "" },
                        { pin: "6", function: "Function3- inputs", name: ["FUNC3.2"], description: "" },
                        { pin: "7", function: "Output 1", name: ["Out1"], description: "" },
                        { pin: "8", function: "Output 2", name: ["Out2"], description: "" }
                    ]
                }
            }
        },
        K: {
            name: "S6 COMPACT",
            terminalStrips: [
                {
                    name: "X2A",
                    terminals: [
                        { pin: "1", function: "", name: ["DI 1"], description: "Digital input 1" },
                        { pin: "2", function: "", name: ["24Vout"], description: "Voltage output for controlling the inputs" },
                        { pin: "3", function: "", name: ["DI 2"], description: "Digital input 2" },
                        { pin: "4", function: "", name: ["24Vout"], description: "Voltage output for controlling the inputs" },
                        { pin: "5", function: "", name: ["DI 3"], description: "Digital input 3" },
                        { pin: "6", function: "", name: ["24Vout"], description: "Voltage output for controlling the inputs" },
                        { pin: "7", function: "", name: ["DI 4"], description: "Digital input 4" },
                        { pin: "8", function: "", name: ["24Vout"], description: "Voltage output for controlling the inputs" },
                        { pin: "9", function: "", name: ["DI 5"], description: "Digital input 5" },
                        { pin: "10", function: "", name: ["24Vout"], description: "Voltage output for controlling the inputs" },
                        { pin: "11", function: "", name: ["DI 6"], description: "Digital input 6" },
                        { pin: "12", function: "", name: ["24Vout"], description: "Voltage output for controlling the inputs" },
                        { pin: "13", function: "", name: ["DI 7"], description: "Digital input 7" },
                        { pin: "14", function: "", name: ["24Vout"], description: "Voltage output for controlling the inputs" },
                        { pin: "15", function: "", name: ["DI 8"], description: "Digital input 8" },
                        { pin: "16", function: "", name: ["24Vout"], description: "Voltage output for controlling the inputs" },
                        { pin: "17", function: "", name: ["DO 1"], description: "Digital output 1" },
                        { pin: "18", function: "", name: ["0V"], description: "Reference potential for digital output" },
                        { pin: "19", function: "", name: ["DO 2"], description: "Digital output 2" },
                        { pin: "20", function: "", name: ["0V"], description: "Reference potential for digital output" },
                        { pin: "21", function: "", name: ["RLB"], description: "Relay output / NC contact" },
                        { pin: "22", function: "", name: ["RLA"], description: "Relay output / NO contact" },
                        { pin: "23", function: "", name: ["RLC"], description: "Relay output/ switching contact" },
                        { pin: "24", function: "", name: ["24Vout"], description: "DC voltage output (SELV) to control the digital inputs." }
                    ]
                },
                {
                    name: "X1C",
                    terminals : [
                        { pin: "1", function: "", name: ["BR+"], description: "Brake Control / Output +" },
                        { pin: "2", function: "", name: ["BR-"], description: "Brake Control / Output -" },
                        { pin: "3", function: "", name: ["Reserved"], description: "-" },
                        { pin: "4", function: "", name: ["Reserved"], description: "-" },
                        { pin: "5", function: "", name: ["TA1"], description: "Temperature Detection / Input +" },
                        { pin: "6", function: "", name: ["TA2"], description: "Temperature Detection / Input -" }
                    ]
                }
            ],
            equipmentStrips: {
                "1": {
                    name: "X2B",
                    terminals: [
                        { pin: "1 / 2", function: "Input", name: ["STO1+"], description: "STO channel 1" },
                        { pin: "3 / 4", function: "Input", name: ["STO1-"], description: "STO channel 1" },
                        { pin: "5 / 6", function: "Input", name: ["STO2+"], description: "STO channel 2" },
                        { pin: "7 / 8", function: "Input", name: ["STO2-"], description: "STO channel 2" },
                        { pin: "9 / 10", function: "Input", name: ["SBC1+"], description: "SBC channel 1" },
                        { pin: "11 / 12", function: "Input", name: ["SBC1-"], description: "SBC channel 1" },
                        { pin: "13 / 14", function: "Input", name: ["SBC2+"], description: "SBC channel 2" },
                        { pin: "15 / 16", function: "Input", name: ["SBC2-"], description: "SBC channel 2" },
                        { pin: "17 / 18", function: "Output", name: ["Status STO"], description: "Output STO" },
                        { pin: "19 / 20", function: "Output", name: ["Status SBC"], description: "Output SBC" }
                    ]
                },
                "3": {
                    name: "X2B",
                    terminals: [
                        { pin: "1/2", function: "STO inputs", name: ["STO.1"], description: "" },
                        { pin: "3/4", function: "STO inputs", name: ["STO.2"], description: "" },
                        { pin: "5/6", function: "SBC inputs", name: ["SBC.1"], description: "" },
                        { pin: "7/8", function: "SBC inputs", name: ["SBC.2"], description: "" },
                        { pin: "9/10", function: "Function1 inputs", name: ["FUNC1.1"], description: "" },
                        { pin: "11/12", function: "Function1 inputs", name: ["FUNC1.2"], description: "" },
                        { pin: "13/14", function: "Function2 inputs", name: ["FUNC1.1"], description: "" },
                        { pin: "15/16", function: "Function2 inputs", name: ["FUNC2.2"], description: "" },
                        { pin: "17/18", function: "Ripple- inputs", name: ["Ripple.1"], description: "" },
                        { pin: "19/20", function: "Ripple- inputs", name: ["Ripple.2"], description: "" },
                        { pin: "21/22", function: "Clock-outputs", name: ["Clock.1"], description: "" },
                        { pin: "23/24", function: "Clock-outputs", name: ["Clock.2"], description: "" },
                        { pin: "25/26", function: "Output 1", name: ["Out1"], description: "" },
                        { pin: "27/28", function: "Output 2", name: ["Out2"], description: "" },
                        { pin: "29/30", function: "Ripple outputs", name: ["Ripple Out.1"], description: "" },
                        { pin: "31/32", function: "Ripple outputs", name: ["Ripple Out.2"], description: "" }
                    ]
                },
                "5": {
                    name: "X2B",
                    terminals: [
                        { pin: "1", function: "Function1- inputs", name: ["FUNC1.1"], description: "" },
                        { pin: "2", function: "Function1- inputs", name: ["FUNC1.2"], description: "" },
                        { pin: "3", function: "Function2- inputs", name: ["FUNC2.1"], description: "" },
                        { pin: "4", function: "Function2- inputs", name: ["FUNC2.2"], description: "" },
                        { pin: "5", function: "Function3- inputs", name: ["FUNC3.1"], description: "" },
                        { pin: "6", function: "Function3- inputs", name: ["FUNC3.2"], description: "" },
                        { pin: "7", function: "Output 1", name: ["Out1"], description: "" },
                        { pin: "8", function: "Output 2", name: ["Out2"], description: "" }
                    ]
                }
            }
        },
        P: {
            name: "S6 PRO",
            terminalStrips: [
                {
                    name: "X2A",
                    terminals: [
                        { pin: "1", function: "", name: ["DI1 / AN3"], description: "Digital input 1 (standard) / analog input 3 (special software)" },
                        { pin: "2", function: "", name: ["DI2"], description: "Digital input 2" },
                        { pin: "3", function: "", name: ["DI3"], description: "Digital input 3" },
                        { pin: "4", function: "", name: ["DI4"], description: "Digital input 4" },
                        { pin: "5", function: "", name: ["DI5"], description: "Digital input 5" },
                        { pin: "6", function: "", name: ["DI6"], description: "Digital input 6" },
                        { pin: "7", function: "", name: ["DI7"], description: "Digital input 7 (fast input => see programming manual)" },
                        { pin: "8", function: "", name: ["DI8"], description: "Digital input 8 (fast input => see programming manual)" },
                        { pin: "9", function: "", name: ["0V"], description: "Reference potential for digital inputs" },
                        { pin: "10", function: "", name: ["DO1"], description: "Digital output 1" },
                        { pin: "11", function: "", name: ["0V"], description: "Reference potential for digital outputs" },
                        { pin: "12", function: "", name: ["DO2"], description: "Digital output 2" },
                        { pin: "13", function: "", name: ["RLB"], description: "Relay output / NC contact (no function for \"Relay with positive-driven contacts\" variant)" },
                        { pin: "14", function: "", name: ["RLA"], description: "Relay output / NO contact" },
                        { pin: "15", function: "", name: ["RLC"], description: "Relay output/ switching contact" },
                        { pin: "16", function: "", name: ["24Vout"], description: "DC voltage output 24V (max. 100 mA together with terminal 26) for controlling the inputs (SELV)." },
                        { pin: "17", function: "", name: ["AN1-"], description: "Non-isolated differential input 1" },
                        { pin: "18", function: "", name: ["AN1+"], description: "Non-isolated differential input 1" },
                        { pin: "19", function: "", name: ["AN2-"], description: "Non-isolated differential input 2" },
                        { pin: "20", function: "", name: ["AN2+"], description: "Non-isolated differential input 2" },
                        { pin: "21", function: "", name: ["0V"], description: "Reference potential for analog inputs and outputs" },
                        { pin: "22", function: "", name: ["ANOUT"], description: "Analog output DC 0...10 V" },
                        { pin: "23", function: "", name: ["CAN low"], description: "CAN bus ISO High Speed according to ISO/DIN 11896 => fieldbus interfaces" },
                        { pin: "24", function: "", name: ["CAN high"], description: "CAN bus ISO High Speed according to ISO/DIN 11896 => fieldbus interfaces" },
                        { pin: "25", function: "", name: ["CAN GND"], description: "CAN Ground\n(=> Fieldbus interfaces [▸ 30])" },
                        { pin: "26", function: "", name: ["24VoutCtrl"], description: "DC voltage output (SELV) to supply the digital inputs.Caution, do not couple with other power supplies!" },
                        { pin: "27", function: "", name: ["0V"], description: "Reference potential for P24Vin at external supply" },
                        { pin: "28", function: "", name: ["P24Vin"], description: "Voltage input DC 24 V supplying the control board and the brake output" }
                    ]
                },
                {
                    name: "X1C",
                    terminals : [
                        { pin: "1", function: "", name: ["BR+"], description: "Brake Control / Output +" },
                        { pin: "2", function: "", name: ["BR-"], description: "Brake Control / Output -" },
                        { pin: "3", function: "", name: ["0V"], description: "For supplying the feedback inputs\nP24Vin - 0.5V / max. 1A\n(BR+ and 24Vout in total 2A)", descriptionRowspan: 2 },
                        { pin: "4", function: "", name: ["24Vout"], descriptionRowspan: 0 },
                        { pin: "5", function: "", name: ["BCF1"], description: "Feedback input for brake control" },
                        { pin: "6", function: "", name: ["BCF2"], description: "Feedback input for brake control" },
                        { pin: "7", function: "", name: ["Reserved"], description: "-" },
                        { pin: "8", function: "", name: ["Reserved"], description: "-" },
                        { pin: "9", function: "", name: ["TA1"], description: "Temperature Detection / Input +" },
                        { pin: "10", function: "", name: ["TA2"], description: "Temperature Detection / Input -" }
                    ]
                }
            ],
            equipmentStrips: {
                "1": {
                    name: "X2B",
                    terminals: [
                        { pin: "1 / 2", function: "Input", name: ["STO1+"], description: "STO channel 1" },
                        { pin: "3 / 4", function: "Input", name: ["STO1-"], description: "STO channel 1" },
                        { pin: "5 / 6", function: "Input", name: ["STO2+"], description: "STO channel 2" },
                        { pin: "7 / 8", function: "Input", name: ["STO2-"], description: "STO channel 2" },
                        { pin: "9 / 10", function: "Input", name: ["SBC1+"], description: "SBC channel 1" },
                        { pin: "11 / 12", function: "Input", name: ["SBC1-"], description: "SBC channel 1" },
                        { pin: "13 / 14", function: "Input", name: ["SBC2+"], description: "SBC channel 2" },
                        { pin: "15 / 16", function: "Input", name: ["SBC2-"], description: "SBC channel 2" },
                        { pin: "17 / 18", function: "Output", name: ["Status STO"], description: "Output STO" },
                        { pin: "19 / 20", function: "Output", name: ["Status SBC"], description: "Output SBC" }
                    ]
                },
                "3": {
                    name: "X2B",
                    terminals: [
                        { pin: "1/2", function: "STO inputs", name: ["STO.1"], description: "" },
                        { pin: "3/4", function: "STO inputs", name: ["STO.2"], description: "" },
                        { pin: "5/6", function: "SBC inputs", name: ["SBC.1"], description: "" },
                        { pin: "7/8", function: "SBC inputs", name: ["SBC.2"], description: "" },
                        { pin: "9/10", function: "Function1 inputs", name: ["FUNC1.1"], description: "" },
                        { pin: "11/12", function: "Function1 inputs", name: ["FUNC1.2"], description: "" },
                        { pin: "13/14", function: "Function2 inputs", name: ["FUNC1.1"], description: "" },
                        { pin: "15/16", function: "Function2 inputs", name: ["FUNC2.2"], description: "" },
                        { pin: "17/18", function: "Ripple- inputs", name: ["Ripple.1"], description: "" },
                        { pin: "19/20", function: "Ripple- inputs", name: ["Ripple.2"], description: "" },
                        { pin: "21/22", function: "Clock-outputs", name: ["Clock.1"], description: "" },
                        { pin: "23/24", function: "Clock-outputs", name: ["Clock.2"], description: "" },
                        { pin: "25/26", function: "Output 1", name: ["Out1"], description: "" },
                        { pin: "27/28", function: "Output 2", name: ["Out2"], description: "" },
                        { pin: "29/30", function: "Ripple outputs", name: ["Ripple Out.1"], description: "" },
                        { pin: "31/32", function: "Ripple outputs", name: ["Ripple Out.2"], description: "" }
                    ]
                },
                "5": {
                    name: "X2B",
                    terminals: [
                        { pin: "1", function: "Function1- inputs", name: ["FUNC1.1"], description: "" },
                        { pin: "2", function: "Function1- inputs", name: ["FUNC1.2"], description: "" },
                        { pin: "3", function: "Function2- inputs", name: ["FUNC2.1"], description: "" },
                        { pin: "4", function: "Function2- inputs", name: ["FUNC2.2"], description: "" },
                        { pin: "5", function: "Function3- inputs", name: ["FUNC3.1"], description: "" },
                        { pin: "6", function: "Function3- inputs", name: ["FUNC3.2"], description: "" },
                        { pin: "7", function: "Output 1", name: ["Out1"], description: "" },
                        { pin: "8", function: "Output 2", name: ["Out2"], description: "" }
                    ]
                }
            }
        }
    },
    
    F6: {
        A: {
            name: "F6 APPLICATION",
            terminalStrips: [
                {
                    name: "X2A",
                    terminals: [
                        { pin: "1", function: "", name: ["DI1 / AN3"], description: "Digital input 1 (standard) / analog input 3 (special software)" },
                        { pin: "2", function: "", name: ["DI2"], description: "Digital input 2" },
                        { pin: "3", function: "", name: ["DI3"], description: "Digital input 3" },
                        { pin: "4", function: "", name: ["DI4"], description: "Digital input 4" },
                        { pin: "5", function: "", name: ["DI5"], description: "Digital input 5" },
                        { pin: "6", function: "", name: ["DI6"], description: "Digital input 6" },
                        { pin: "7", function: "", name: ["DI7"], description: "Digital input 7" },
                        { pin: "8", function: "", name: ["DI8"], description: "Digital input 8" },
                        { pin: "9", function: "", name: ["0V"], description: "Reference potential for digital inputs" },
                        { pin: "10", function: "", name: ["DO1"], description: "Digital output 1" },
                        { pin: "11", function: "", name: ["0V"], description: "Reference potential for digital outputs" },
                        { pin: "12", function: "", name: ["DO2"], description: "Digital output 2" },
                        { pin: "13", function: "", name: ["RLB"], description: "Relay output / NC contact" },
                        { pin: "14", function: "", name: ["RLA"], description: "Relay output / NO contact" },
                        { pin: "15", function: "", name: ["RLC"], description: "Relay output/ switching contact" },
                        { pin: "16", function: "", name: ["24Vout"], description: "DC voltage output 24V (max. 100 mA together with terminal 26) for controlling the inputs (SELV)." },
                        { pin: "17", function: "", name: ["AN1-"], description: "Non-isolated differential input 1" },
                        { pin: "18", function: "", name: ["AN1+"], description: "Non-isolated differential input 1" },
                        { pin: "19", function: "", name: ["AN2-"], description: "Non-isolated differential input 2" },
                        { pin: "20", function: "", name: ["AN2+"], description: "Non-isolated differential input 2" },
                        { pin: "21", function: "", name: ["0V"], description: "Reference potential for analog inputs and outputs" },
                        { pin: "22", function: "", name: ["ANOUT"], description: "Analog output DC 0...10 V" },
                        { pin: "23", function: "", name: ["CAN low"], description: "CAN bus ISO High Speed according to ISO/DIN 11898 => fieldbus interfaces" },
                        { pin: "24", function: "", name: ["CAN high"], description: "CAN bus ISO High Speed according to ISO/DIN 11898 => fieldbus interfaces" },
                        { pin: "25", function: "", name: ["CAN GND"], description: "CAN Ground\n(=> Fieldbus interfaces [▸ 26])" },
                        { pin: "26", function: "", name: ["24Vout"], description: "DC voltage output 24V (max. 100 mA together with terminal 16) for controlling the inputs (SELV)." },
                        { pin: "27", function: "", name: ["0V"], description: "Reference potential for P24Vin at external supply" },
                        { pin: "28", function: "", name: ["P24Vin"], description: "DC voltage input DC 24V to supply the control board" }
                    ]
                },
                {
                    name: "X1C",
                    terminals : [
                        { pin: "1", function: "", name: ["BR+"], description: "Brake Control / Output +" },
                        { pin: "2", function: "", name: ["BR-"], description: "Brake Control / Output -" },
                        { pin: "3", function: "", name: ["Reserved"], description: "-" },
                        { pin: "4", function: "", name: ["Reserved"], description: "-" },
                        { pin: "5", function: "", name: ["TA1"], description: "Temperature Detection / Input +" },
                        { pin: "6", function: "", name: ["TA2"], description: "Temperature Detection / Input -" }
                    ]
                }
            ],
            equipmentStrips: {
                "1": {
                    name: "X2B",
                    terminals: [
                        { pin: "1 / 2", function: "Input", name: ["STO1+"], description: "STO channel 1" },
                        { pin: "3 / 4", function: "Input", name: ["STO1-"], description: "STO channel 1" },
                        { pin: "5 / 6", function: "Input", name: ["STO2+"], description: "STO channel 2" },
                        { pin: "7 / 8", function: "Input", name: ["STO2-"], description: "STO channel 2" },
                        { pin: "9 / 10", function: "Input", name: ["SBC1+"], description: "SBC channel 1" },
                        { pin: "11 / 12", function: "Input", name: ["SBC1-"], description: "SBC channel 1" },
                        { pin: "13 / 14", function: "Input", name: ["SBC2+"], description: "SBC channel 2" },
                        { pin: "15 / 16", function: "Input", name: ["SBC2-"], description: "SBC channel 2" },
                        { pin: "17 / 18", function: "Output", name: ["Status STO"], description: "Output STO" },
                        { pin: "19 / 20", function: "Output", name: ["Status SBC"], description: "Output SBC" }
                    ]
                },
                "3": {
                    name: "X2B",
                    terminals: [
                        { pin: "1/2", function: "STO inputs", name: ["STO.1"], description: "" },
                        { pin: "3/4", function: "STO inputs", name: ["STO.2"], description: "" },
                        { pin: "5/6", function: "SBC inputs", name: ["SBC.1"], description: "" },
                        { pin: "7/8", function: "SBC inputs", name: ["SBC.2"], description: "" },
                        { pin: "9/10", function: "Function1 inputs", name: ["FUNC1.1"], description: "" },
                        { pin: "11/12", function: "Function1 inputs", name: ["FUNC1.2"], description: "" },
                        { pin: "13/14", function: "Function2 inputs", name: ["FUNC1.1"], description: "" },
                        { pin: "15/16", function: "Function2 inputs", name: ["FUNC2.2"], description: "" },
                        { pin: "17/18", function: "Ripple- inputs", name: ["Ripple.1"], description: "" },
                        { pin: "19/20", function: "Ripple- inputs", name: ["Ripple.2"], description: "" },
                        { pin: "21/22", function: "Clock-outputs", name: ["Clock.1"], description: "" },
                        { pin: "23/24", function: "Clock-outputs", name: ["Clock.2"], description: "" },
                        { pin: "25/26", function: "Output 1", name: ["Out1"], description: "" },
                        { pin: "27/28", function: "Output 2", name: ["Out2"], description: "" },
                        { pin: "29/30", function: "Ripple outputs", name: ["Ripple Out.1"], description: "" },
                        { pin: "31/32", function: "Ripple outputs", name: ["Ripple Out.2"], description: "" }
                    ]
                },
                "5": {
                    name: "X2B",
                    terminals: [
                        { pin: "1", function: "Function1- inputs", name: ["FUNC1.1"], description: "" },
                        { pin: "2", function: "Function1- inputs", name: ["FUNC1.2"], description: "" },
                        { pin: "3", function: "Function2- inputs", name: ["FUNC2.1"], description: "" },
                        { pin: "4", function: "Function2- inputs", name: ["FUNC2.2"], description: "" },
                        { pin: "5", function: "Function3- inputs", name: ["FUNC3.1"], description: "" },
                        { pin: "6", function: "Function3- inputs", name: ["FUNC3.2"], description: "" },
                        { pin: "7", function: "Output 1", name: ["Out1"], description: "" },
                        { pin: "8", function: "Output 2", name: ["Out2"], description: "" }
                    ]
                }
            }
        },
        K: {
            name: "F6 COMPACT",
            terminalStrips: [
                {
                    name: "X2A",
                    terminals: [
                        { pin: "1", function: "", name: ["DI 1"], description: "Digital input 1" },
                        { pin: "2", function: "", name: ["24Vout"], description: "Voltage output for controlling the inputs" },
                        { pin: "3", function: "", name: ["DI 2"], description: "Digital input 2" },
                        { pin: "4", function: "", name: ["24Vout"], description: "Voltage output for controlling the inputs" },
                        { pin: "5", function: "", name: ["DI 3"], description: "Digital input 3" },
                        { pin: "6", function: "", name: ["24Vout"], description: "Voltage output for controlling the inputs" },
                        { pin: "7", function: "", name: ["DI 4"], description: "Digital input 4" },
                        { pin: "8", function: "", name: ["24Vout"], description: "Voltage output for controlling the inputs" },
                        { pin: "9", function: "", name: ["DI 5"], description: "Digital input 5" },
                        { pin: "10", function: "", name: ["24Vout"], description: "Voltage output for controlling the inputs" },
                        { pin: "11", function: "", name: ["DI 6"], description: "Digital input 6" },
                        { pin: "12", function: "", name: ["24Vout"], description: "Voltage output for controlling the inputs" },
                        { pin: "13", function: "", name: ["DI 7"], description: "Digital input 7" },
                        { pin: "14", function: "", name: ["24Vout"], description: "Voltage output for controlling the inputs" },
                        { pin: "15", function: "", name: ["DI 8"], description: "Digital input 8" },
                        { pin: "16", function: "", name: ["24Vout"], description: "Voltage output for controlling the inputs" },
                        { pin: "17", function: "", name: ["DO 1"], description: "Digital output 1" },
                        { pin: "18", function: "", name: ["0V"], description: "Reference potential for digital output" },
                        { pin: "19", function: "", name: ["DO 2"], description: "Digital output 2" },
                        { pin: "20", function: "", name: ["0V"], description: "Reference potential for digital output" },
                        { pin: "21", function: "", name: ["RLB"], description: "Relay output / NC contact" },
                        { pin: "22", function: "", name: ["RLA"], description: "Relay output / NO contact" },
                        { pin: "23", function: "", name: ["RLC"], description: "Relay output/ switching contact" },
                        { pin: "24", function: "", name: ["24Vout"], description: "DC voltage output (SELV) to control the digital inputs." }
                    ]
                },
                {
                    name: "X1C",
                    terminals : [
                        { pin: "1", function: "", name: ["BR+"], description: "Brake Control / Output +" },
                        { pin: "2", function: "", name: ["BR-"], description: "Brake Control / Output -" },
                        { pin: "3", function: "", name: ["Reserved"], description: "-" },
                        { pin: "4", function: "", name: ["Reserved"], description: "-" },
                        { pin: "5", function: "", name: ["TA1"], description: "Temperature Detection / Input +" },
                        { pin: "6", function: "", name: ["TA2"], description: "Temperature Detection / Input -" }
                    ]
                }
            ],
            equipmentStrips: {
                "1": {
                    name: "X2B",
                    terminals: [
                        { pin: "1 / 2", function: "Input", name: ["STO1+"], description: "STO channel 1" },
                        { pin: "3 / 4", function: "Input", name: ["STO1-"], description: "STO channel 1" },
                        { pin: "5 / 6", function: "Input", name: ["STO2+"], description: "STO channel 2" },
                        { pin: "7 / 8", function: "Input", name: ["STO2-"], description: "STO channel 2" },
                        { pin: "9 / 10", function: "Input", name: ["SBC1+"], description: "SBC channel 1" },
                        { pin: "11 / 12", function: "Input", name: ["SBC1-"], description: "SBC channel 1" },
                        { pin: "13 / 14", function: "Input", name: ["SBC2+"], description: "SBC channel 2" },
                        { pin: "15 / 16", function: "Input", name: ["SBC2-"], description: "SBC channel 2" },
                        { pin: "17 / 18", function: "Output", name: ["Status STO"], description: "Output STO" },
                        { pin: "19 / 20", function: "Output", name: ["Status SBC"], description: "Output SBC" }
                    ]
                },
                "3": {
                    name: "X2B",
                    terminals: [
                        { pin: "1/2", function: "STO inputs", name: ["STO.1"], description: "" },
                        { pin: "3/4", function: "STO inputs", name: ["STO.2"], description: "" },
                        { pin: "5/6", function: "SBC inputs", name: ["SBC.1"], description: "" },
                        { pin: "7/8", function: "SBC inputs", name: ["SBC.2"], description: "" },
                        { pin: "9/10", function: "Function1 inputs", name: ["FUNC1.1"], description: "" },
                        { pin: "11/12", function: "Function1 inputs", name: ["FUNC1.2"], description: "" },
                        { pin: "13/14", function: "Function2 inputs", name: ["FUNC1.1"], description: "" },
                        { pin: "15/16", function: "Function2 inputs", name: ["FUNC2.2"], description: "" },
                        { pin: "17/18", function: "Ripple- inputs", name: ["Ripple.1"], description: "" },
                        { pin: "19/20", function: "Ripple- inputs", name: ["Ripple.2"], description: "" },
                        { pin: "21/22", function: "Clock-outputs", name: ["Clock.1"], description: "" },
                        { pin: "23/24", function: "Clock-outputs", name: ["Clock.2"], description: "" },
                        { pin: "25/26", function: "Output 1", name: ["Out1"], description: "" },
                        { pin: "27/28", function: "Output 2", name: ["Out2"], description: "" },
                        { pin: "29/30", function: "Ripple outputs", name: ["Ripple Out.1"], description: "" },
                        { pin: "31/32", function: "Ripple outputs", name: ["Ripple Out.2"], description: "" }
                    ]
                },
                "5": {
                    name: "X2B",
                    terminals: [
                        { pin: "1", function: "Function1- inputs", name: ["FUNC1.1"], description: "" },
                        { pin: "2", function: "Function1- inputs", name: ["FUNC1.2"], description: "" },
                        { pin: "3", function: "Function2- inputs", name: ["FUNC2.1"], description: "" },
                        { pin: "4", function: "Function2- inputs", name: ["FUNC2.2"], description: "" },
                        { pin: "5", function: "Function3- inputs", name: ["FUNC3.1"], description: "" },
                        { pin: "6", function: "Function3- inputs", name: ["FUNC3.2"], description: "" },
                        { pin: "7", function: "Output 1", name: ["Out1"], description: "" },
                        { pin: "8", function: "Output 2", name: ["Out2"], description: "" }
                    ]
                }
            }
        },
        P: {
            name: "F6 PRO",
            terminalStrips: [
                {
                    name: "X2A",
                    terminals: [
                        { pin: "1", function: "", name: ["DI1 / AN3"], description: "Digital input 1 (standard) / analog input 3 (special software)" },
                        { pin: "2", function: "", name: ["DI2"], description: "Digital input 2" },
                        { pin: "3", function: "", name: ["DI3"], description: "Digital input 3" },
                        { pin: "4", function: "", name: ["DI4"], description: "Digital input 4" },
                        { pin: "5", function: "", name: ["DI5"], description: "Digital input 5" },
                        { pin: "6", function: "", name: ["DI6"], description: "Digital input 6" },
                        { pin: "7", function: "", name: ["DI7"], description: "Digital input 7 (fast input => see programming manual)" },
                        { pin: "8", function: "", name: ["DI8"], description: "Digital input 8 (fast input => see programming manual)" },
                        { pin: "9", function: "", name: ["0V"], description: "Reference potential for digital inputs" },
                        { pin: "10", function: "", name: ["DO1"], description: "Digital output 1" },
                        { pin: "11", function: "", name: ["0V"], description: "Reference potential for digital outputs" },
                        { pin: "12", function: "", name: ["DO2"], description: "Digital output 2" },
                        { pin: "13", function: "", name: ["RLB"], description: "Relay output / NC contact (no function for \"Relay with positive-driven contacts\" variant)" },
                        { pin: "14", function: "", name: ["RLA"], description: "Relay output / NO contact" },
                        { pin: "15", function: "", name: ["RLC"], description: "Relay output/ switching contact" },
                        { pin: "16", function: "", name: ["24Vout"], description: "DC voltage output 24V (max. 100 mA together with terminal 26) for controlling the inputs (SELV)." },
                        { pin: "17", function: "", name: ["AN1-"], description: "Non-isolated differential input 1" },
                        { pin: "18", function: "", name: ["AN1+"], description: "Non-isolated differential input 1" },
                        { pin: "19", function: "", name: ["AN2-"], description: "Non-isolated differential input 2" },
                        { pin: "20", function: "", name: ["AN2+"], description: "Non-isolated differential input 2" },
                        { pin: "21", function: "", name: ["0V"], description: "Reference potential for analog inputs and outputs" },
                        { pin: "22", function: "", name: ["ANOUT"], description: "Analog output DC 0...10 V" },
                        { pin: "23", function: "", name: ["CAN low"], description: "CAN bus ISO High Speed according to ISO/DIN 11896 => fieldbus interfaces" },
                        { pin: "24", function: "", name: ["CAN high"], description: "CAN bus ISO High Speed according to ISO/DIN 11896 => fieldbus interfaces" },
                        { pin: "25", function: "", name: ["CAN GND"], description: "CAN Ground\n(=> Fieldbus interfaces [▸ 30])" },
                        { pin: "26", function: "", name: ["24VoutCtrl"], description: "DC voltage output (SELV) to supply the digital inputs.Caution, do not couple with other power supplies!" },
                        { pin: "27", function: "", name: ["0V"], description: "Reference potential for P24Vin at external supply" },
                        { pin: "28", function: "", name: ["P24Vin"], description: "Voltage input DC 24 V supplying the control board and the brake output" }
                    ]
                },
                {
                    name: "X1C",
                    terminals: [
                        { pin: "1", function: "", name: ["BR+"], description: "Brake Control / Output +" },
                        { pin: "2", function: "", name: ["BR-"], description: "Brake Control / Output -" },
                        { pin: "3", function: "", name: ["0V"], description: "For supplying the feedback inputs\nP24Vin - 0.5V / max. 1A\n(BR+ and 24Vout in total 2A)", descriptionRowspan: 2 },
                        { pin: "4", function: "", name: ["24Vout"], descriptionRowspan: 0 },
                        { pin: "5", function: "", name: ["BCF1"], description: "Feedback input for brake control" },
                        { pin: "6", function: "", name: ["BCF2"], description: "Feedback input for brake control" },
                        { pin: "7", function: "", name: ["Reserved"], description: "-" },
                        { pin: "8", function: "", name: ["Reserved"], description: "-" },
                        { pin: "9", function: "", name: ["TA1"], description: "Temperature Detection / Input +" },
                        { pin: "10", function: "", name: ["TA2"], description: "Temperature Detection / Input -" }
                    ]
                }
            ],
            equipmentStrips: {
                "1": {
                    name: "X2B",
                    terminals: [
                        { pin: "1 / 2", function: "Input", name: ["STO1+"], description: "STO channel 1" },
                        { pin: "3 / 4", function: "Input", name: ["STO1-"], description: "STO channel 1" },
                        { pin: "5 / 6", function: "Input", name: ["STO2+"], description: "STO channel 2" },
                        { pin: "7 / 8", function: "Input", name: ["STO2-"], description: "STO channel 2" },
                        { pin: "9 / 10", function: "Input", name: ["SBC1+"], description: "SBC channel 1" },
                        { pin: "11 / 12", function: "Input", name: ["SBC1-"], description: "SBC channel 1" },
                        { pin: "13 / 14", function: "Input", name: ["SBC2+"], description: "SBC channel 2" },
                        { pin: "15 / 16", function: "Input", name: ["SBC2-"], description: "SBC channel 2" },
                        { pin: "17 / 18", function: "Output", name: ["Status STO"], description: "Output STO" },
                        { pin: "19 / 20", function: "Output", name: ["Status SBC"], description: "Output SBC" }
                    ]
                },
                "3": {
                    name: "X2B",
                    terminals: [
                        { pin: "1/2", function: "STO inputs", name: ["STO.1"], description: "" },
                        { pin: "3/4", function: "STO inputs", name: ["STO.2"], description: "" },
                        { pin: "5/6", function: "SBC inputs", name: ["SBC.1"], description: "" },
                        { pin: "7/8", function: "SBC inputs", name: ["SBC.2"], description: "" },
                        { pin: "9/10", function: "Function1 inputs", name: ["FUNC1.1"], description: "" },
                        { pin: "11/12", function: "Function1 inputs", name: ["FUNC1.2"], description: "" },
                        { pin: "13/14", function: "Function2 inputs", name: ["FUNC1.1"], description: "" },
                        { pin: "15/16", function: "Function2 inputs", name: ["FUNC2.2"], description: "" },
                        { pin: "17/18", function: "Ripple- inputs", name: ["Ripple.1"], description: "" },
                        { pin: "19/20", function: "Ripple- inputs", name: ["Ripple.2"], description: "" },
                        { pin: "21/22", function: "Clock-outputs", name: ["Clock.1"], description: "" },
                        { pin: "23/24", function: "Clock-outputs", name: ["Clock.2"], description: "" },
                        { pin: "25/26", function: "Output 1", name: ["Out1"], description: "" },
                        { pin: "27/28", function: "Output 2", name: ["Out2"], description: "" },
                        { pin: "29/30", function: "Ripple outputs", name: ["Ripple Out.1"], description: "" },
                        { pin: "31/32", function: "Ripple outputs", name: ["Ripple Out.2"], description: "" }
                    ]
                },
                "5": {
                    name: "X2B",
                    terminals: [
                        { pin: "1", function: "Function1- inputs", name: ["FUNC1.1"], description: "" },
                        { pin: "2", function: "Function1- inputs", name: ["FUNC1.2"], description: "" },
                        { pin: "3", function: "Function2- inputs", name: ["FUNC2.1"], description: "" },
                        { pin: "4", function: "Function2- inputs", name: ["FUNC2.2"], description: "" },
                        { pin: "5", function: "Function3- inputs", name: ["FUNC3.1"], description: "" },
                        { pin: "6", function: "Function3- inputs", name: ["FUNC3.2"], description: "" },
                        { pin: "7", function: "Output 1", name: ["Out1"], description: "" },
                        { pin: "8", function: "Output 2", name: ["Out2"], description: "" }
                    ]
                }
            }
        }
    },
    G6: {
        C: {
            name: "G6 Analog/Digital",
            terminals: [
                { pin: "1", function: "Digital mass; Reference potential for digital inputs/outputs and U_ext", name: ["0V"], description: "" },
                { pin: "2", function: "Input external voltage supply", name: ["U_in"], description: "U=24 VDC +20 %/-15 %\nI_max=400 mA" },
                { pin: "3", function: "like pin 1", name: ["0V"], description: "" },
                { pin: "4", function: "Voltage output for the control of the digital inputs", name: ["U_out"], description: "U=24 V ±25 %\nI_max=100 mA\n(I_max=Pin 4+32)" },
                { pin: "5", function: "Reset", name: ["RST"], description: "" },
                { pin: "6", function: "Control release", name: ["ST"], description: "" },
                { pin: "7", function: "Reverse direction of rotation", name: ["R"], description: "8 digital inputs according to IEC61131-2 type 1\n\"0\" = -3...5 VDC\n\"1\" = 15...30 VDC\nScan time ≤ 2 ms", descriptionRowspan: 6 },
                { pin: "8", function: "Forward direction of rotation", name: ["F"], description: "", descriptionRowspan: 0 },
                { pin: "9", function: "Digital input 2", name: ["I2"], description: "", descriptionRowspan: 0 },
                { pin: "10", function: "Digital input 1", name: ["I1"], description: "", descriptionRowspan: 0 },
                { pin: "11", function: "Digital input 4", name: ["I4"], description: "", descriptionRowspan: 0 },
                { pin: "12", function: "Digital input 3", name: ["I3"], description: "", descriptionRowspan: 0 },
                { pin: "13", function: "Digital output 2", name: ["O2"], description: "2 digital transistor outputs\nPNP\nU=24 VDC ±25 %\nI_max=50 mA ohmic load for O1+O2\nmax switching frequency=250 Hz", descriptionRowspan: 2 },
                { pin: "14", function: "Digital output 1", name: ["O1"], description: "", descriptionRowspan: 0 },
                { pin: "15", function: "like pin 1", name: ["0V"], description: "" },
                { pin: "16", function: "Reference voltage for setpoint potentiometer", name: ["CRF"], description: "10 VDC +5 %; I_max=4 mA" },
                { pin: "17", function: "-Analog input 1", name: ["AN1-"], description: "adjustable:\n0...±10 V (R_i=55 kΩ)\n0...±20 mA (R_i=250 Ω)\n4...20 mA (R_i=250 Ω)\nResolution: 10 Bit + sign\nScan time ≤ 2 ms", descriptionRowspan: 4 },
                { pin: "18", function: "+Analog input 1", name: ["AN1+"], description: "", descriptionRowspan: 0 },
                { pin: "19", function: "-Analog input 2", name: ["AN2-"], description: "", descriptionRowspan: 0 },
                { pin: "20", function: "+Analog input 2", name: ["AN2+"], description: "", descriptionRowspan: 0 },
                { pin: "21", function: "Analog mass; Reference potential for analog inputs and outputs", name: ["COM"], description: "" },
                { pin: "22", function: "Analog output 1", name: ["AO1"], description: "U=0...±10 VDC (max. 11.5 VDC)\nI_max=10 mA\nRi = 100 Ω\nResolution= 11Bit + sign" },
                { pin: "23", function: "like pin 21", name: ["COM"], description: "" },
                { pin: "24", function: "Analog output 2", name: ["AO2"], description: "like pin 22" },
                { pin: "25", function: "Relay 2 - Switching Contact", name: ["R2-C"], description: "Switching contact\nU_max = 30 VDC\nI = 0.01...1A\nmax. switching cycles:\n10^6 mechanically\n500,000\nat 1A / 30 VDC\nOhmic load", descriptionRowspan: 6 },
                { pin: "26", function: "Relay 1 - Switching Contact", name: ["R1-C"], description: "", descriptionRowspan: 0 },
                { pin: "27", function: "Relay 2 - NC Contact", name: ["R2-B"], description: "NC contact", descriptionRowspan: 0 },
                { pin: "28", function: "Relay 1 - NC Contact", name: ["R1-B"], description: "", descriptionRowspan: 0 },
                { pin: "29", function: "Relay 2 - NO Contact", name: ["R2-A"], description: "NO contact", descriptionRowspan: 0 },
                { pin: "30", function: "Relay 1 - NO Contact", name: ["R1-A"], description: "", descriptionRowspan: 0 },
                { pin: "31", function: "like pin 1", name: ["0V"], description: "" },
                { pin: "32", function: "Voltage output for the control of the digital inputs", name: ["U_out"], description: "U=24 V ±25 %\nI_max=100 mA\n(I_max=Pin 4+32)" }
            ]
        },
        D: {
            name: "G6 CAN",
            terminals: [
                { pin: "1", function: "Digital mass; Reference potential for digital inputs/outputs and U_ext", name: ["0V"], description: "" },
                { pin: "2", function: "Input external voltage supply", name: ["U_in"], description: "U=24 VDC +20 %/-15 %\nI_max=400 mA" },
                { pin: "3", function: "like pin 1", name: ["0V"], description: "" },
                { pin: "4", function: "Voltage output for the control of the digital inputs", name: ["U_out"], description: "U=24 V ±25 %\nI_max=100 mA\n(I_max=Pin 4+32)" },
                { pin: "5", function: "Reset", name: ["RST"], description: "" },
                { pin: "6", function: "Control release", name: ["ST"], description: "" },
                { pin: "7", function: "Reverse direction of rotation", name: ["R"], description: "8 digital inputs according to IEC61131-2 type 1\n\"0\" = -3...5 VDC\n\"1\" = 15...30 VDC\nScan time ≤ 2 ms", descriptionRowspan: 6 },
                { pin: "8", function: "Forward direction of rotation", name: ["F"], description: "", descriptionRowspan: 0 },
                { pin: "9", function: "Digital input 2", name: ["I2"], description: "", descriptionRowspan: 0 },
                { pin: "10", function: "Digital input 1", name: ["I1"], description: "", descriptionRowspan: 0 },
                { pin: "11", function: "Digital input 4", name: ["I4"], description: "", descriptionRowspan: 0 },
                { pin: "12", function: "Digital input 3", name: ["I3"], description: "", descriptionRowspan: 0 },
                { pin: "13", function: "Digital output 2", name: ["O2"], description: "2 digital transistor outputs\nPNP\nU=24 VDC ±25 %\nI_max=50 mA ohmic load for O1+O2\nmax switching frequency=250 Hz", descriptionRowspan: 2 },
                { pin: "14", function: "Digital output 1", name: ["O1"], description: "", descriptionRowspan: 0 },
                { pin: "15", function: "like pin 1", name: ["0V"], description: "" },
                { pin: "16", function: "Reference voltage for setpoint potentiometer", name: ["CRF"], description: "10 VDC +5 %; I_max=4 mA" },
                { pin: "17", function: "-Analog input 1", name: ["AN1-"], description: "adjustable:\n0...±10 V (R_i=55 kΩ)\n0...±20 mA (R_i=250 Ω)\n4...20 mA (R_i=250 Ω)\nResolution: 10 Bit + sign\nScan time ≤ 2 ms", descriptionRowspan: 4 },
                { pin: "18", function: "+Analog input 1", name: ["AN1+"], description: "", descriptionRowspan: 0 },
                { pin: "19", function: "-Analog input 2", name: ["AN2-"], description: "", descriptionRowspan: 0 },
                { pin: "20", function: "+Analog input 2", name: ["AN2+"], description: "", descriptionRowspan: 0 },
                { pin: "21", function: "Analog mass; Reference potential for analog inputs and outputs", name: ["COM"], description: "" },
                { pin: "22", function: "Analog output 1", name: ["AO1"], description: "U=0...±10 VDC (max. 11.5 VDC)\nI_max=10 mA\nRi = 100 Ω\nResolution= 11Bit + sign" },
                { pin: "23", function: "like pin 21", name: ["COM"], description: "" },
                { pin: "24", function: "Analog output 2", name: ["AO2"], description: "like pin 22" },
                { pin: "25", function: "Relay 2 - Switching Contact", name: ["R2-C"], description: "Switching contact\nU_max = 30 VDC\nI = 0.01...1A\nmax. switching cycles:\n10^6 mechanically\n500,000\nat 1A / 30 VDC\nOhmic load", descriptionRowspan: 6 },
                { pin: "26", function: "Relay 1 - Switching Contact", name: ["R1-C"], description: "", descriptionRowspan: 0 },
                { pin: "27", function: "Relay 2 - NC Contact", name: ["R2-B"], description: "NC contact", descriptionRowspan: 0 },
                { pin: "28", function: "Relay 1 - NC Contact", name: ["R1-B"], description: "", descriptionRowspan: 0 },
                { pin: "29", function: "Relay 2 - NO Contact", name: ["R2-A"], description: "NO contact", descriptionRowspan: 0 },
                { pin: "30", function: "Relay 1 - NO Contact", name: ["R1-A"], description: "", descriptionRowspan: 0 },
                { pin: "31", function: "initiator input", name: ["Init"], description: "" },
                { pin: "32", function: "reserved", name: ["-"], description: "" }
            ]
        },
        E: {
            name: "G6 IO-Link",
            terminals: [
                { pin: "1", function: "Digital mass; Reference potential for digital inputs/outputs and U_ext", name: ["0V"], description: "" },
                { pin: "2", function: "Input external voltage supply", name: ["U_in"], description: "U=24 VDC +20 %/-15 %\nI_max=400 mA" },
                { pin: "3", function: "like pin 1", name: ["0V"], description: "" },
                { pin: "4", function: "Voltage output for the control of the digital inputs", name: ["U_out"], description: "U=24 V ±25 %\nI_max=100 mA\n(I_max=Pin 4+32)" },
                { pin: "5", function: "Reset", name: ["RST"], description: "" },
                { pin: "6", function: "Control release", name: ["ST"], description: "" },
                { pin: "7", function: "Reverse direction of rotation", name: ["R"], description: "8 digital inputs according to IEC61131-2 type 1\n\"0\" = -3...5 VDC\n\"1\" = 15...30 VDC\nScan time ≤ 2 ms", descriptionRowspan: 6 },
                { pin: "8", function: "Forward direction of rotation", name: ["F"], description: "", descriptionRowspan: 0 },
                { pin: "9", function: "Digital input 2", name: ["I2"], description: "", descriptionRowspan: 0 },
                { pin: "10", function: "Digital input 1", name: ["I1"], description: "", descriptionRowspan: 0 },
                { pin: "11", function: "Digital input 4", name: ["I4"], description: "", descriptionRowspan: 0 },
                { pin: "12", function: "Digital input 3", name: ["I3"], description: "", descriptionRowspan: 0 },
                { pin: "13", function: "Digital output 2", name: ["O2"], description: "2 digital transistor outputs\nPNP\nU=24 VDC ±25 %\nI_max=50 mA ohmic load for O1+O2\nmax switching frequency=250 Hz", descriptionRowspan: 2 },
                { pin: "14", function: "Digital output 1", name: ["O1"], description: "", descriptionRowspan: 0 },
                { pin: "15", function: "like pin 1", name: ["0V"], description: "" },
                { pin: "16", function: "Reference voltage for setpoint potentiometer", name: ["CRF"], description: "10 VDC +5 %; I_max=4 mA" },
                { pin: "17", function: "-Analog input 1", name: ["AN1-"], description: "adjustable:\n0...±10 V (R_i=55 kΩ)\n0...±20 mA (R_i=250 Ω)\n4...20 mA (R_i=250 Ω)\nResolution: 10 Bit + sign\nScan time ≤ 2 ms", descriptionRowspan: 4 },
                { pin: "18", function: "+Analog input 1", name: ["AN1+"], description: "", descriptionRowspan: 0 },
                { pin: "19", function: "-Analog input 2", name: ["AN2-"], description: "", descriptionRowspan: 0 },
                { pin: "20", function: "+Analog input 2", name: ["AN2+"], description: "", descriptionRowspan: 0 },
                { pin: "21", function: "Analog mass; Reference potential for analog inputs and outputs", name: ["COM"], description: "" },
                { pin: "22", function: "Analog output 1", name: ["AO1"], description: "U=0...±10 VDC (max. 11.5 VDC)\nI_max=10 mA\nRi = 100 Ω\nResolution= 11Bit + sign" },
                { pin: "23", function: "like pin 21", name: ["COM"], description: "" },
                { pin: "24", function: "Analog output 2", name: ["AO2"], description: "like pin 22" },
                { pin: "25", function: "Relay 2 - Switching Contact", name: ["R2-C"], description: "Switching contact\nU_max = 30 VDC\nI = 0.01...1A\nmax. switching cycles:\n10^6 mechanically\n500,000\nat 1A / 30 VDC\nOhmic load", descriptionRowspan: 6 },
                { pin: "26", function: "Relay 1 - Switching Contact", name: ["R1-C"], description: "", descriptionRowspan: 0 },
                { pin: "27", function: "Relay 2 - NC Contact", name: ["R2-B"], description: "NC contact", descriptionRowspan: 0 },
                { pin: "28", function: "Relay 1 - NC Contact", name: ["R1-B"], description: "", descriptionRowspan: 0 },
                { pin: "29", function: "Relay 2 - NO Contact", name: ["R2-A"], description: "NO contact", descriptionRowspan: 0 },
                { pin: "30", function: "Relay 1 - NO Contact", name: ["R1-A"], description: "", descriptionRowspan: 0 },
                { pin: "31", function: "Relay 3 - Switching Contact", name: ["R3-C"], description: "switching contact f=0Hz" },
                { pin: "32", function: "Relay 3 - NO Contact", name: ["R3-A"], description: "NO contact f=0Hz" }
            ]
        },
        F: {
            name: "G6 EtherCAT",
            terminals: [
                { pin: "1", function: "Digital mass; Reference potential for digital inputs/outputs and U_ext", name: ["0V"], description: "" },
                { pin: "2", function: "Input external voltage supply", name: ["U_in"], description: "U=24 VDC +20 %/-15 %\nI_max=400 mA" },
                { pin: "3", function: "like pin 1", name: ["0V"], description: "" },
                { pin: "4", function: "Voltage output for the control of the digital inputs", name: ["U_out"], description: "U=24 V ±25 %\nI_max=100 mA\n(I_max=Pin 4+32)" },
                { pin: "5", function: "Reset", name: ["RST"], description: "" },
                { pin: "6", function: "Control release", name: ["ST"], description: "" },
                { pin: "7", function: "Reverse direction of rotation", name: ["R"], description: "8 digital inputs according to IEC61131-2 type 1\n\"0\" = -3...5 VDC\n\"1\" = 15...30 VDC\nScan time ≤ 2 ms", descriptionRowspan: 6 },
                { pin: "8", function: "Forward direction of rotation", name: ["F"], description: "", descriptionRowspan: 0 },
                { pin: "9", function: "Digital input 2", name: ["I2"], description: "", descriptionRowspan: 0 },
                { pin: "10", function: "Digital input 1", name: ["I1"], description: "", descriptionRowspan: 0 },
                { pin: "11", function: "Digital input 4", name: ["I4"], description: "", descriptionRowspan: 0 },
                { pin: "12", function: "Digital input 3", name: ["I3"], description: "", descriptionRowspan: 0 },
                { pin: "13", function: "Digital output 2", name: ["O2"], description: "2 digital transistor outputs\nPNP\nU=24 VDC ±25 %\nI_max=50 mA ohmic load for O1+O2\nmax switching frequency=250 Hz", descriptionRowspan: 2 },
                { pin: "14", function: "Digital output 1", name: ["O1"], description: "", descriptionRowspan: 0 },
                { pin: "15", function: "like pin 1", name: ["0V"], description: "" },
                { pin: "16", function: "-", name: ["-"], description: "no function",descriptionRowspan: 9 },
                { pin: "17", function: "-", name: ["-"], description: "", descriptionRowspan: 0 },
                { pin: "18", function: "-", name: ["-"], description: "", descriptionRowspan: 0 },
                { pin: "19", function: "-", name: ["-"], description: "", descriptionRowspan: 0 },
                { pin: "20", function: "-", name: ["-"], description: "", descriptionRowspan: 0 },
                { pin: "21", function: "-", name: ["-"], description: "", descriptionRowspan: 0 },
                { pin: "22", function: "-", name: ["-"], description: "", descriptionRowspan: 0 },
                { pin: "23", function: "-", name: ["-"], description: "", descriptionRowspan: 0 },
                { pin: "24", function: "-", name: ["-"], description: "", descriptionRowspan: 0 },
                { pin: "25", function: "Relay 2 - Switching Contact", name: ["R2-C"], description: "Switching contact\nU_max = 30 VDC\nI = 0.01...1A\nmax. switching cycles:\n10^6 mechanically\n500,000\nat 1A / 30 VDC\nOhmic load", descriptionRowspan: 6 },
                { pin: "26", function: "Relay 1 - Switching Contact", name: ["R1-C"], description: "", descriptionRowspan: 0 },
                { pin: "27", function: "Relay 2 - NC Contact", name: ["R2-B"], description: "NC contact", descriptionRowspan: 0 },
                { pin: "28", function: "Relay 1 - NC Contact", name: ["R1-B"], description: "", descriptionRowspan: 0 },
                { pin: "29", function: "Relay 2 - NO Contact", name: ["R2-A"], description: "NO contact", descriptionRowspan: 0 },
                { pin: "30", function: "Relay 1 - NO Contact", name: ["R1-A"], description: "", descriptionRowspan: 0 },
                { pin: "31", function: "-", name: ["-"], description: "no function", descriptionRowspan: 2 },
                { pin: "32", function: "-", name: ["-"], description: "", descriptionRowspan: 0 }
            ]
        },
        G: {
            name: "G6 PROFINET",
            terminals: [
                { pin: "-", function: "not available", name: ["-"] },
            ]
        },
        H: {
            name: "G6 POWERLINK",
            terminals: [
                { pin: "-", function: "not available", name: ["-"] },
            ]
        },
        I: {
            name: "G6 VARAN",
            terminals: [
                { pin: "1", function: "Digital mass; Reference potential for digital inputs/outputs and U_ext", name: ["0V"], description: "" },
                { pin: "2", function: "Input external voltage supply", name: ["U_in"], description: "U=24 VDC +20 %/-15 %\nI_max=400 mA" },
                { pin: "3", function: "like pin 1", name: ["0V"], description: "" },
                { pin: "4", function: "Voltage output for the control of the digital inputs", name: ["U_out"], description: "U=24 V ±25 %\nI_max=100 mA\n(I_max=Pin 4+32)" },
                { pin: "5", function: "Reset", name: ["RST"], description: "" },
                { pin: "6", function: "Control release", name: ["ST"], description: "" },
                { pin: "7", function: "Reverse direction of rotation", name: ["R"], description: "8 digital inputs according to IEC61131-2 type 1\n\"0\" = -3...5 VDC\n\"1\" = 15...30 VDC\nScan time ≤ 2 ms", descriptionRowspan: 6 },
                { pin: "8", function: "Forward direction of rotation", name: ["F"], description: "", descriptionRowspan: 0 },
                { pin: "9", function: "Digital input 2", name: ["I2"], description: "", descriptionRowspan: 0 },
                { pin: "10", function: "Digital input 1", name: ["I1"], description: "", descriptionRowspan: 0 },
                { pin: "11", function: "Digital input 4", name: ["I4"], description: "", descriptionRowspan: 0 },
                { pin: "12", function: "Digital input 3", name: ["I3"], description: "", descriptionRowspan: 0 },
                { pin: "13", function: "Digital output 2", name: ["O2"], description: "2 digital transistor outputs\nPNP\nU=24 VDC ±25 %\nI_max=50 mA ohmic load for O1+O2\nmax switching frequency=250 Hz", descriptionRowspan: 2 },
                { pin: "14", function: "Digital output 1", name: ["O1"], description: "", descriptionRowspan: 0 },
                { pin: "15", function: "like pin 1", name: ["0V"], description: "" },
                { pin: "16", function: "-", name: ["-"], description: "no function",descriptionRowspan: 9 },
                { pin: "17", function: "-", name: ["-"], description: "", descriptionRowspan: 0 },
                { pin: "18", function: "-", name: ["-"], description: "", descriptionRowspan: 0 },
                { pin: "19", function: "-", name: ["-"], description: "", descriptionRowspan: 0 },
                { pin: "20", function: "-", name: ["-"], description: "", descriptionRowspan: 0 },
                { pin: "21", function: "-", name: ["-"], description: "", descriptionRowspan: 0 },
                { pin: "22", function: "-", name: ["-"], description: "", descriptionRowspan: 0 },
                { pin: "23", function: "-", name: ["-"], description: "", descriptionRowspan: 0 },
                { pin: "24", function: "-", name: ["-"], description: "", descriptionRowspan: 0 },
                { pin: "25", function: "Relay 2 - Switching Contact", name: ["R2-C"], description: "Switching contact\nU_max = 30 VDC\nI = 0.01...1A\nmax. switching cycles:\n10^6 mechanically\n500,000\nat 1A / 30 VDC\nOhmic load", descriptionRowspan: 6 },
                { pin: "26", function: "Relay 1 - Switching Contact", name: ["R1-C"], description: "", descriptionRowspan: 0 },
                { pin: "27", function: "Relay 2 - NC Contact", name: ["R2-B"], description: "NC contact", descriptionRowspan: 0 },
                { pin: "28", function: "Relay 1 - NC Contact", name: ["R1-B"], description: "", descriptionRowspan: 0 },
                { pin: "29", function: "Relay 2 - NO Contact", name: ["R2-A"], description: "NO contact", descriptionRowspan: 0 },
                { pin: "30", function: "Relay 1 - NO Contact", name: ["R1-A"], description: "", descriptionRowspan: 0 },
                { pin: "31", function: "-", name: ["-"], description: "no function", descriptionRowspan: 2 },
                { pin: "32", function: "-", name: ["-"], description: "", descriptionRowspan: 0 }
            ]
        }
    },
    F5: {
        A: {
            name: "F5 APPLICATION",
            terminals: [
                { pin: "1", function: "+ Set value input 1", name: ["AN1+"], description: "The input signal 0...±10V, 0...±20mA and 4...20mA is determined with An 00 / An 10. Specification and control see chapter 'Interface Selection'.\nResolution: 12 Bit, (1) Bit at F5 servo in the A-housing, Ri = 30 KΩ, scan time: 1 ms / at fast setpoint setting: 250 µs (see chapter 'Setpoint source')", descriptionRowspan: 4 },
                { pin: "2", function: "- Set value input 1", name: ["AN1-"], descriptionRowspan: 0 },
                { pin: "3", function: "+ Set value input 2", name: ["AN2+"], descriptionRowspan: 0 },
                { pin: "4", function: "- Set value input 2", name: ["AN2-"], descriptionRowspan: 0 },
                { pin: "5", function: "Analog output 1", name: ["ANOUT1"], description: "The variable for outputting of the analog output is determined with An 31/ An 36. Specification and connection see chapter 'ANOUT 1 / 2' / 3 / 4 / Function' voltage range 0...±10V, Ri = 100 Ω, Resolution: 10 Bit, PWM frequency: 3.4 kHz", descriptionRowspan: 2 },
                { pin: "6", function: "Analog output 2", name: ["ANOUT2"], descriptionRowspan: 0 },
                { pin: "7", function: "+10 V output", name: ["CRF"], description: "Reference voltage output +10 VDC ±5% / max. 4mA for set value potentiometer" },
                { pin: "8", function: "Analog mass", name: ["COM"], description: "Mass for analog inputs and outputs" },
                { pin: "9", function: "Analog mass", name: ["COM"], description: "Mass for analog inputs and outputs" },
                { pin: "10", function: "Progr. input 1", name: ["I1"], description: "Specifications, control and programming of the digital inputs see chapter 'Digital inputs 1-5 / Select function'\nAll digital inputs are free programmable. The control release is firmly linked with input 5/I, but can be occupied with additional functions.\nRI = 2.1 kΩ\nScan time: 1 ms", descriptionRowspan: 8 },
                { pin: "11", function: "Progr. input 2", name: ["I2"], descriptionRowspan: 0 },
                { pin: "12", function: "Progr. input 3", name: ["I3"], descriptionRowspan: 0 },
                { pin: "13", function: "Progr. input 4", name: ["I4"], descriptionRowspan: 0 },
                { pin: "14", function: "Progr. input forward", name: ["F"], descriptionRowspan: 0 },
                { pin: "15", function: "Progr. input reverse", name: ["R"], descriptionRowspan: 0 },
                { pin: "16", function: "Progr. input control release", name: ["ST"], descriptionRowspan: 0  },
                { pin: "17", function: "Progr. input reset", name: ["RST"], descriptionRowspan: 0 },
                { pin: "18", function: "Transistor output 1", name: ["O1"], description: "Specification, control and programming see chapter 'Digital inputs and outputs', a total of max. 50 mADC for both outputs", descriptionRowspan: 2 },
                { pin: "19", function: "Transistor output 2", name: ["O2"], descriptionRowspan: 0 },
                { pin: "20", function: "+24 V output", name: ["Uss"], description: "approx. 24V DC output (max.100 mA)" },
                { pin: "21", function: "20...30V input", name: ["Us"], description: "Voltage input for ext. supply, potential 0 V X2A 22/23" },
                { pin: "22", function: "Digital mass", name: ["0 V"], description: "Potential for digital inputs/outputs" },
                { pin: "23", function: "Digital mass", name: ["0 V"], description: "Potential for digital inputs/outputs" },
                { pin: "24", function: "Relay 1 / NO contact", name: ["RLA"], description: "Programmable relay output 1 (terminal X2A 24...26);\nProgrammable relay output 2 (terminal X2A 27...29)\nSpecifications, control and programming of the relay outputs max. 30 V DC, 0.01...1 A", descriptionRowspan: 6 },
                { pin: "25", function: "Relay 1 / NC contact", name: ["RLB"], descriptionRowspan: 0 },
                { pin: "26", function: "Relay 1 / switching contact", name: ["RLC"], descriptionRowspan: 0 },
                { pin: "27", function: "Relay 2 / NO contact", name: ["FLA"], descriptionRowspan: 0 },
                { pin: "28", function: "Relay 2/ NC contact", name: ["FLB"], description: "", descriptionRowspan: 0 },
                { pin: "29", function: "Relay 2 / switching contact", name: ["FLC"], descriptionRowspan: 0 }
            ]
        },
        B: {
            name: "F5 BASIC",
            terminals: [
                { pin: "1", function: "+ Set Value input 1", name: ["AN1+"], description: "The input signal (0...±10 V; 0...±20 mA and 4...20 mA) is determined with An.0/10. Specification and control see chap. 6.2.2.\nResolution: 12 Bit (BASIC and GENERAL B-housing: 11 Bit)\nScan time: 1 ms (BASIC: 2 ms)\nat directly setpoint input: 250 µs (see chapter 6.4.2)"},
                { pin: "5", function: "Analog Output 1", name: ["ANOUT1"], description: "The variable for outputting at analog output 2 is determined with An.31 / An.36. Specification and control and see chap. 6.2.11.\nVoltage range: 0...±10V, Ri = 100 Ω, Resolution: ±10 Bit"},
                { pin: "7", function: "+10 V Output", name: ["CRF"], description: "Reference voltage output +10 VDC ±5% / max. 4 mA for set value potentiometer." },
                { pin: "8", function: "Analog Mass", name: ["COM"], description: "Mass for analog in- and outputs" },
                { pin: "10", function: "Progr. Input 1", name: ["I1"], description: "Specifications, control and programming of the digital inputs see chap. 6.3.1...6.3.11\nAll digital inputs are free programmable.\nThe control release is firmly linked with the input ST, but can be additional occupied with other functions.\nRi = 2,1 kΩ\nScan time: 1 ms (BASIC: 2 ms)", descriptionRowspan: 5 },
                { pin: "11", function: "Progr. Input 2", name: ["I2"], descriptionRowspan: 0 },
                { pin: "14", function: "Progr. Input Forward", name: ["F"], descriptionRowspan: 0 },
                { pin: "15", function: "Progr. Input Reverse", name: ["R"], descriptionRowspan: 0 },
                { pin: "16", function: "Progr. Input Control Rel.", name: ["ST"], descriptionRowspan: 0 },
                { pin: "20", function: "+24 V Output", name: ["Uout"], description: "approx. 24V DC output (max.100 mA)" },
                { pin: "22", function: "Digital Mass", name: ["0V"], description: "Potential for digital in-/outputs" },
                { pin: "24", function: "Relay 1 /NO contact", name: ["RLA"], description: "Programmable relay output 1 (Terminal X2A.24...26);\nProgrammable relay output 2 ( Terminal X2A.27...29)\nSpecifications, control and programming of the relay outputs see chapter 6.3.11...6.3.17\nmax. 30 V DC, 1 A", descriptionRowspan: 6 },
                { pin: "25", function: "Relay 1 /NC contact", name: ["RLB"], descriptionRowspan: 0 },
                { pin: "26", function: "Relay 1 /switching contact", name: ["RLC"], descriptionRowspan: 0 },
                { pin: "27", function: "Relay 2 /NO contact", name: ["FLA"], descriptionRowspan: 0 },
                { pin: "28", function: "Relay 2 /NC contact", name: ["FLB"], descriptionRowspan: 0 },
                { pin: "29", function: "Relay 2 /switching contact", name: ["FLC"], descriptionRowspan: 0 }
            ]
        },
        C: {
            name: "F5 COMPACT",
            terminals: [
                { pin: "1", function: "+ Set Value input 1", name: ["AN1+"], description: "The input signal (0...±10 V; 0...±20 mA and 4...20 mA) is determined with An.0/10. Specification and control see chap. 6.2.2.\nResolution: 12 Bit (BASIC and GENERAL B-housing: 11 Bit)\nScan time: 1 ms (BASIC: 2 ms)\nat directly setpoint input: 250 µs (see chapter 6.4.2)", descriptionRowspan: 4 },
                { pin: "2", function: "- Set Value input 1", name: ["AN1-"], descriptionRowspan: 0 },
                { pin: "3", function: "+ Set value input 2", name: ["AN2+"], descriptionRowspan: 0 },
                { pin: "4", function: "- Set value input 2", name: ["AN2-"], descriptionRowspan: 0 },
                { pin: "5", function: "Analog Output 1", name: ["ANOUT1"], description: "The variable for outputting at analog output 2 is determined with An.31 / An.36. Specification and control and see chap. 6.2.11.\nVoltage range: 0...±10V, Ri = 100 Ω, Resolution: ±10 Bit", descriptionRowspan: 2 },
                { pin: "6", function: "Analog Output 2", name: ["ANOUT2"], descriptionRowspan: 0 },
                { pin: "7", function: "+10 V Output", name: ["CRF"], description: "Reference voltage output +10 VDC ±5% / max. 4 mA for set value potentiometer." },
                { pin: "8", function: "Analog Mass", name: ["COM"], description: "Mass for analog in- and outputs" },
                { pin: "9", function: "Analog Mass", name: ["COM"], description: "Mass for analog in- and outputs" },
                { pin: "10", function: "Progr. Input 1", name: ["I1"], description: "Specifications, control and programming of the digital inputs see chap. 6.3.1...6.3.11\nAll digital inputs are free programmable.\nThe control release is firmly linked with the input ST, but can be additional occupied with other functions.\nRi = 2,1 kΩ\nScan time: 1 ms (BASIC: 2 ms)", descriptionRowspan: 8 },
                { pin: "11", function: "Progr. Input 2", name: ["I2"], descriptionRowspan: 0 },
                { pin: "12", function: "Progr. Input 3", name: ["I3"], descriptionRowspan: 0 },
                { pin: "13", function: "Progr. Input 4", name: ["I4"], descriptionRowspan: 0 },
                { pin: "14", function: "Progr. Input Forward", name: ["F"], descriptionRowspan: 0 },
                { pin: "15", function: "Progr. Input Reverse", name: ["R"], descriptionRowspan: 0 },
                { pin: "16", function: "Progr. Input Control Rel.", name: ["ST"], descriptionRowspan: 0 },
                { pin: "17", function: "Progr. Input Reset", name: ["RST"], descriptionRowspan: 0 },
                { pin: "18", function: "Transistor Output 1", name: ["O1"], description: "Specifications, control and programming of the digital transistor outputs see chap. 6.3.14...6.3.20.22\na total of max. 50 mADC for both outputs", descriptionRowspan: 2 },
                { pin: "19", function: "Transistor Output 2", name: ["O2"], descriptionRowspan: 0 },
                { pin: "20", function: "+24 V Output", name: ["Uout"], description: "approx. 24V DC output (max.100 mA)" },
                { pin: "21", function: "20...30 V Input", name: ["Uin"], description: "Ext. supply voltage for digital in-/outputs, potential 0V (X2A.22/23)" },
                { pin: "22", function: "Digital Mass", name: ["0V"], description: "Potential for digital in-/outputs" },
                { pin: "23", function: "Digital Mass", name: ["0V"], description: "Potential for digital in-/outputs" },
                { pin: "24", function: "Relay 1 /NO contact", name: ["RLA"], description: "Programmable relay output 1 (Terminal X2A.24...26);\nProgrammable relay output 2 ( Terminal X2A.27...29)\nSpecifications, control and programming of the relay outputs see chapter 6.3.11...6.3.17\nmax. 30 V DC, 1 A", descriptionRowspan: 6 },
                { pin: "25", function: "Relay 1 /NC contact", name: ["RLB"], descriptionRowspan: 0 },
                { pin: "26", function: "Relay 1 /switching contact", name: ["RLC"], descriptionRowspan: 0 },
                { pin: "27", function: "Relay 2 /NO contact", name: ["FLA"], descriptionRowspan: 0 },
                { pin: "28", function: "Relay 2 /NC contact", name: ["FLB"], descriptionRowspan: 0 },
                { pin: "29", function: "Relay 2 /switching contact", name: ["FLC"], descriptionRowspan: 0 }
            ]
        },
        E: {
            name: "F5 APPLICATION with SCL",
            terminals: [
                { pin: "1", function: "+ Set value input 1", name: ["AN1+"], description: "The input signal 0...±10V, 0...±20mA and 4...20mA is determined with An 00 / An 10. Specification and control see chapter 'Interface Selection'.\nResolution: 12 Bit, (1) Bit at F5 servo in the A-housing, Ri = 30 KΩ, scan time: 1 ms / at fast setpoint setting: 250 µs (see chapter 'Setpoint source')", descriptionRowspan: 4 },
                { pin: "2", function: "- Set value input 1", name: ["AN1-"], descriptionRowspan: 0 },
                { pin: "3", function: "+ Set value input 2", name: ["AN2+"], descriptionRowspan: 0 },
                { pin: "4", function: "- Set value input 2", name: ["AN2-"], descriptionRowspan: 0 },
                { pin: "5", function: "Analog output 1", name: ["ANOUT1"], description: "The variable for outputting of the analog output is determined with An 31/ An 36. Specification and connection see chapter 'ANOUT 1 / 2' / 3 / 4 / Function' voltage range 0...±10V, Ri = 100 Ω, Resolution: 10 Bit, PWM frequency: 3.4 kHz", descriptionRowspan: 2 },
                { pin: "6", function: "Analog output 2", name: ["ANOUT2"], descriptionRowspan: 0 },
                { pin: "7", function: "+10 V output", name: ["CRF"], description: "Reference voltage output +10 VDC ±5% / max. 4mA for set value potentiometer" },
                { pin: "8", function: "Analog mass", name: ["COM"], description: "Mass for analog inputs and outputs" },
                { pin: "9", function: "Analog mass", name: ["COM"], description: "Mass for analog inputs and outputs" },
                { pin: "10", function: "Progr. input 1", name: ["I1"], description: "Specifications, control and programming of the digital inputs see chapter 'Digital inputs 1-5 / Select function'\nAll digital inputs are free programmable. The control release is firmly linked with input 5/I, but can be occupied with additional functions.\nRI = 2.1 kΩ\nScan time: 1 ms", descriptionRowspan: 8 },
                { pin: "11", function: "Progr. input 2", name: ["I2"], descriptionRowspan: 0 },
                { pin: "12", function: "Progr. input 3", name: ["I3"], descriptionRowspan: 0 },
                { pin: "13", function: "Progr. input 4", name: ["I4"], descriptionRowspan: 0 },
                { pin: "14", function: "Progr. input forward", name: ["F"], descriptionRowspan: 0 },
                { pin: "15", function: "Progr. input reverse", name: ["R"], descriptionRowspan: 0 },
                { pin: "16", function: "Progr. input control release", name: ["ST"], descriptionRowspan: 0  },
                { pin: "17", function: "Progr. input reset", name: ["RST"], descriptionRowspan: 0 },
                { pin: "18", function: "Transistor output 1", name: ["O1"], description: "Specification, control and programming see chapter 'Digital inputs and outputs', a total of max. 50 mADC for both outputs", descriptionRowspan: 2 },
                { pin: "19", function: "Transistor output 2", name: ["O2"], descriptionRowspan: 0 },
                { pin: "20", function: "+24 V output", name: ["Uss"], description: "approx. 24V DC output (max.100 mA)" },
                { pin: "21", function: "20...30V input", name: ["Us"], description: "Voltage input for ext. supply, potential 0 V X2A 22/23" },
                { pin: "22", function: "Digital mass", name: ["0 V"], description: "Potential for digital inputs/outputs" },
                { pin: "23", function: "Digital mass", name: ["0 V"], description: "Potential for digital inputs/outputs" },
                { pin: "24", function: "Relay 1 / NO contact", name: ["RLA"], description: "Programmable relay output 1 (terminal X2A 24...26);\nProgrammable relay output 2 (terminal X2A 27...29)\nSpecifications, control and programming of the relay outputs max. 30 V DC, 0.01...1 A", descriptionRowspan: 6 },
                { pin: "25", function: "Relay 1 / NC contact", name: ["RLB"], descriptionRowspan: 0 },
                { pin: "26", function: "Relay 1 / switching contact", name: ["RLC"], descriptionRowspan: 0 },
                { pin: "27", function: "Relay 2 / NO contact", name: ["FLA"], descriptionRowspan: 0 },
                { pin: "28", function: "Relay 2/ NC contact", name: ["FLB"], description: "", descriptionRowspan: 0 },
                { pin: "29", function: "Relay 2 / switching contact", name: ["FLC"], descriptionRowspan: 0 }
            ]
        },
        G: {
            name: "F5 GENERAL",
            terminals: [
                { pin: "1", function: "+ Set Value input 1", name: ["AN1+"], description: "The input signal (0...±10 V; 0...±20 mA and 4...20 mA) is determined with An.0/10. Specification and control see chap. 6.2.2.\nResolution: 12 Bit (BASIC and GENERAL B-housing: 11 Bit)\nScan time: 1 ms (BASIC: 2 ms)\nat directly setpoint input: 250 µs (see chapter 6.4.2)", descriptionRowspan: 4 },
                { pin: "2", function: "- Set Value input 1", name: ["AN1-"], descriptionRowspan: 0 },
                { pin: "3", function: "+ Set value input 2", name: ["AN2+"], descriptionRowspan: 0 },
                { pin: "4", function: "- Set value input 2", name: ["AN2-"], descriptionRowspan: 0 },
                { pin: "5", function: "Analog Output 1", name: ["ANOUT1"], description: "The variable for outputting at analog output 2 is determined with An.31 / An.36. Specification and control and see chap. 6.2.11.\nVoltage range: 0...±10V, Ri = 100 Ω, Resolution: ±10 Bit", descriptionRowspan: 2 },
                { pin: "6", function: "Analog Output 2", name: ["ANOUT2"], descriptionRowspan: 0 },
                { pin: "7", function: "+10 V Output", name: ["CRF"], description: "Reference voltage output +10 VDC ±5% / max. 4 mA for set value potentiometer." },
                { pin: "8", function: "Analog Mass", name: ["COM"], description: "Mass for analog in- and outputs" },
                { pin: "9", function: "Analog Mass", name: ["COM"], description: "Mass for analog in- and outputs" },
                { pin: "10", function: "Progr. Input 1", name: ["I1"], description: "Specifications, control and programming of the digital inputs see chap. 6.3.1...6.3.11\nAll digital inputs are free programmable.\nThe control release is firmly linked with the input ST, but can be additional occupied with other functions.\nRi = 2,1 kΩ\nScan time: 1 ms (BASIC: 2 ms)", descriptionRowspan: 8 },
                { pin: "11", function: "Progr. Input 2", name: ["I2"], descriptionRowspan: 0 },
                { pin: "12", function: "Progr. Input 3", name: ["I3"], descriptionRowspan: 0 },
                { pin: "13", function: "Progr. Input 4", name: ["I4"], descriptionRowspan: 0 },
                { pin: "14", function: "Progr. Input Forward", name: ["F"], descriptionRowspan: 0 },
                { pin: "15", function: "Progr. Input Reverse", name: ["R"], descriptionRowspan: 0 },
                { pin: "16", function: "Progr. Input Control Rel.", name: ["ST"], descriptionRowspan: 0 },
                { pin: "17", function: "Progr. Input Reset", name: ["RST"], descriptionRowspan: 0 },
                { pin: "18", function: "Transistor Output 1", name: ["O1"], description: "Specifications, control and programming of the digital transistor outputs see chap. 6.3.14...6.3.20.22\na total of max. 50 mADC for both outputs", descriptionRowspan: 2 },
                { pin: "19", function: "Transistor Output 2", name: ["O2"], descriptionRowspan: 0 },
                { pin: "20", function: "+24 V Output", name: ["Uout"], description: "approx. 24V DC output (max.100 mA)" },
                { pin: "21", function: "20...30 V Input", name: ["Uin"], description: "Ext. supply voltage for digital in-/outputs, potential 0V (X2A.22/23)" },
                { pin: "22", function: "Digital Mass", name: ["0V"], description: "Potential for digital in-/outputs" },
                { pin: "23", function: "Digital Mass", name: ["0V"], description: "Potential for digital in-/outputs" },
                { pin: "24", function: "Relay 1 /NO contact", name: ["RLA"], description: "Programmable relay output 1 (Terminal X2A.24...26);\nProgrammable relay output 2 ( Terminal X2A.27...29)\nSpecifications, control and programming of the relay outputs see chapter 6.3.11...6.3.17\nmax. 30 V DC, 1 A", descriptionRowspan: 6 },
                { pin: "25", function: "Relay 1 /NC contact", name: ["RLB"], descriptionRowspan: 0 },
                { pin: "26", function: "Relay 1 /switching contact", name: ["RLC"], descriptionRowspan: 0 },
                { pin: "27", function: "Relay 2 /NO contact", name: ["FLA"], descriptionRowspan: 0 },
                { pin: "28", function: "Relay 2 /NC contact", name: ["FLB"], descriptionRowspan: 0 },
                { pin: "29", function: "Relay 2 /switching contact", name: ["FLC"], descriptionRowspan: 0 }
            ]
        },
        H: {
            name: "F5 APPLICATION with ASCL",
            terminals: [
                { pin: "1", function: "+ Set value input 1", name: ["AN1+"], description: "The input signal 0...±10V, 0...±20mA and 4...20mA is determined with An 00 / An 10. Specification and control see chapter 'Interface Selection'.\nResolution: 12 Bit, (1) Bit at F5 servo in the A-housing, Ri = 30 KΩ, scan time: 1 ms / at fast setpoint setting: 250 µs (see chapter 'Setpoint source')", descriptionRowspan: 4 },
                { pin: "2", function: "- Set value input 1", name: ["AN1-"], descriptionRowspan: 0 },
                { pin: "3", function: "+ Set value input 2", name: ["AN2+"], descriptionRowspan: 0 },
                { pin: "4", function: "- Set value input 2", name: ["AN2-"], descriptionRowspan: 0 },
                { pin: "5", function: "Analog output 1", name: ["ANOUT1"], description: "The variable for outputting of the analog output is determined with An 31/ An 36. Specification and connection see chapter 'ANOUT 1 / 2' / 3 / 4 / Function' voltage range 0...±10V, Ri = 100 Ω, Resolution: 10 Bit, PWM frequency: 3.4 kHz", descriptionRowspan: 2 },
                { pin: "6", function: "Analog output 2", name: ["ANOUT2"], descriptionRowspan: 0 },
                { pin: "7", function: "+10 V output", name: ["CRF"], description: "Reference voltage output +10 VDC ±5% / max. 4mA for set value potentiometer" },
                { pin: "8", function: "Analog mass", name: ["COM"], description: "Mass for analog inputs and outputs" },
                { pin: "9", function: "Analog mass", name: ["COM"], description: "Mass for analog inputs and outputs" },
                { pin: "10", function: "Progr. input 1", name: ["I1"], description: "Specifications, control and programming of the digital inputs see chapter 'Digital inputs 1-5 / Select function'\nAll digital inputs are free programmable. The control release is firmly linked with input 5/I, but can be occupied with additional functions.\nRI = 2.1 kΩ\nScan time: 1 ms", descriptionRowspan: 8 },
                { pin: "11", function: "Progr. input 2", name: ["I2"], descriptionRowspan: 0 },
                { pin: "12", function: "Progr. input 3", name: ["I3"], descriptionRowspan: 0 },
                { pin: "13", function: "Progr. input 4", name: ["I4"], descriptionRowspan: 0 },
                { pin: "14", function: "Progr. input forward", name: ["F"], descriptionRowspan: 0 },
                { pin: "15", function: "Progr. input reverse", name: ["R"], descriptionRowspan: 0 },
                { pin: "16", function: "Progr. input control release", name: ["ST"], descriptionRowspan: 0  },
                { pin: "17", function: "Progr. input reset", name: ["RST"], descriptionRowspan: 0 },
                { pin: "18", function: "Transistor output 1", name: ["O1"], description: "Specification, control and programming see chapter 'Digital inputs and outputs', a total of max. 50 mADC for both outputs", descriptionRowspan: 2 },
                { pin: "19", function: "Transistor output 2", name: ["O2"], descriptionRowspan: 0 },
                { pin: "20", function: "+24 V output", name: ["Uss"], description: "approx. 24V DC output (max.100 mA)" },
                { pin: "21", function: "20...30V input", name: ["Us"], description: "Voltage input for ext. supply, potential 0 V X2A 22/23" },
                { pin: "22", function: "Digital mass", name: ["0 V"], description: "Potential for digital inputs/outputs" },
                { pin: "23", function: "Digital mass", name: ["0 V"], description: "Potential for digital inputs/outputs" },
                { pin: "24", function: "Relay 1 / NO contact", name: ["RLA"], description: "Programmable relay output 1 (terminal X2A 24...26);\nProgrammable relay output 2 (terminal X2A 27...29)\nSpecifications, control and programming of the relay outputs max. 30 V DC, 0.01...1 A", descriptionRowspan: 6 },
                { pin: "25", function: "Relay 1 / NC contact", name: ["RLB"], descriptionRowspan: 0 },
                { pin: "26", function: "Relay 1 / switching contact", name: ["RLC"], descriptionRowspan: 0 },
                { pin: "27", function: "Relay 2 / NO contact", name: ["FLA"], descriptionRowspan: 0 },
                { pin: "28", function: "Relay 2/ NC contact", name: ["FLB"], description: "", descriptionRowspan: 0 },
                { pin: "29", function: "Relay 2 / switching contact", name: ["FLC"], descriptionRowspan: 0 }
            ]
        },
        K: {
            name: "F5 APPLICATION with safety",
            terminalStrips: [
                {
                    name: "X2A",
                    terminals: [
                        { pin: "1", function: "Digital mass", name: ["0 V"], description: "Reference potential for digital inputs/outputs, Uin and Uout" },
                        { pin: "2", function: "20...30V input", name: ["Uin"], description: "Input external voltage supply\nU=24 Vdc +20 %-15 % Imax=1 A" },
                        { pin: "3", function: "Digital mass", name: ["0 V"], description: "like pin 1" },
                        { pin: "4", function: "+24 V output", name: ["Uout"], description: "Voltage output for the control of the digital inputs\nU=24 Vdc ±25 %\nImax (PIN 4+32)=100 mA" },
                        { pin: "5", function: "Progr. input reset", name: ["RST"], description: "Programmable digital inputs (assignment ex factory see chapter 'Connection of the digital inputs for COMBIVERT F5 with STO')\n8 digital inputs in accordance with IEC61131-2 type1\n'0' = -3...5 VDC\n'1' = 15...30 VDC scan time ≤ 1ms", descriptionRowspan: 8 },
                        { pin: "6", function: "Progr. input control release", name: ["ST"], descriptionRowspan: 0 },
                        { pin: "7", function: "Progr. input reverse", name: ["R"], descriptionRowspan: 0 },
                        { pin: "8", function: "Progr. input forward", name: ["F"], descriptionRowspan: 0 },
                        { pin: "9", function: "Progr. input 2", name: ["I2"], descriptionRowspan: 0 },
                        { pin: "10", function: "Progr. input 1", name: ["I1"], descriptionRowspan: 0 },
                        { pin: "11", function: "Progr. input 4", name: ["I4"], descriptionRowspan: 0 },
                        { pin: "12", function: "Progr. input 3", name: ["I3"], descriptionRowspan: 0 },
                        { pin: "13", function: "Progr. output 2", name: ["O2"], description: "Programmable digital outputs (assignment ex factory see chapter 'Connection of the digital outputs for COMBIVERT F5 with STO')\n2 short-circuit proof digital 24 V outputs according to IEC61131-2 specified Imax = 100mA per output switching of inductive load (without free-wheeling path) to 300mH maximum switching frequency = 1kHz", descriptionRowspan: 2 },
                        { pin: "14", function: "Progr. output 1", name: ["O1"], descriptionRowspan: 0 },
                        { pin: "15", function: "Digital mass", name: ["0 V"], description: "like pin 1" },
                        { pin: "16", function: "CRF", name: ["CRF"], description: "Reference voltage for setpoint potentiometer\n10 Vdc +5 % Imax = 4 mA" },
                        { pin: "17", function: "Analog input 1 -", name: ["AN1-"], description: "Programmable analog inputs (assignment ex factory see chapter 'Connection of the analog inputs for COMBIVERT F5 with STO')\n0...±10 Vdc (Ri=55 KΩ)\n0...±20 mA (Ri=260 Ω)\n4...20 mA (Ri=260 Ω)\nResolution: 11 Bit + sign scan time ≤1 ms", descriptionRowspan: 4 },
                        { pin: "18", function: "Analog input 1 +", name: ["AN1+"], descriptionRowspan: 0 },
                        { pin: "19", function: "Analog input 2 -", name: ["AN2-"], descriptionRowspan: 0 },
                        { pin: "20", function: "Analog input 2 +", name: ["AN2+"], descriptionRowspan: 0 },
                        { pin: "21", function: "Analog mass", name: ["COM"], description: "Analog mass; reference potential for analog inputs and outputs" },
                        { pin: "22", function: "Analog output 1", name: ["ANOUT1"], description: "Programmable analog output 1 (assignment ex factory see chapter 'Connection of the analog outputs for COMBIVERT F5 with STO')\nU=0...±10 Vdc (max. 11.5 Vdc)\nImax=10 mA, Ri=100 Ω\nRes.:11Bit + sign" },
                        { pin: "23", function: "Analog mass", name: ["COM"], description: "like pin 21" },
                        { pin: "24", function: "Analog output 2", name: ["ANOUT2"], description: "Programmable analog output 2 (assignment ex factory see chapter 'Connection of the analog outputs for COMBIVERT F5 with STO')\nU=0...±10 Vdc (max. 11.5 Vdc)\nImax=10 mA, Ri=100 Ω\nRes.:11Bit + sign" },
                        { pin: "25", function: "R2-C / switching contact", name: ["R2-C"], description: "Programmable relay outputs (assignment ex factory see chapter 'Connection of the relay outputs for COMBIVERT F5 with STO')\nUmax = 30 Vdc\nI = 0.01...1 A", descriptionRowspan: 6 },
                        { pin: "26", function: "R1-C / switching contact", name: ["R1-C"], descriptionRowspan: 0 },
                        { pin: "27", function: "R2-B / NC contact", name: ["R2-B"], descriptionRowspan: 0 },
                        { pin: "28", function: "R1-B / NC contact", name: ["R1-B"], descriptionRowspan: 0 },
                        { pin: "29", function: "R2-A / NO contact", name: ["R2-A"], descriptionRowspan: 0 },
                        { pin: "30", function: "R1-A / NO contact", name: ["R1-A"], descriptionRowspan: 0 },
                        { pin: "31", function: "Digital mass", name: ["0 V"], description: "like pin 1" },
                        { pin: "32", function: "+24 V output", name: ["Uout"], description: "like pin 4" }
                    ]
                },
                {
                    name: "X2B",
                    terminals: [
                        { pin: "1 / 2", function: "Input", name: ["STO1+"], description: "STO channel 1" },
                        { pin: "3 / 4", function: "Input", name: ["STO1-"], description: "STO channel 1" },
                        { pin: "5 / 6", function: "Input", name: ["STO2+"], description: "STO channel 2" },
                        { pin: "7 / 8", function: "Input", name: ["STO2-"], description: "STO channel 2" },
                        { pin: "9 / 10", function: "Input", name: ["SBC1+"], description: "SBC channel 1" },
                        { pin: "11 / 12", function: "Input", name: ["SBC1-"], description: "SBC channel 1" },
                        { pin: "13 / 14", function: "Input", name: ["SBC2+"], description: "SBC channel 2" },
                        { pin: "15 / 16", function: "Input", name: ["SBC2-"], description: "SBC channel 2" },
                        { pin: "17 / 18", function: "Output", name: ["Status STO"], description: "Output STO" },
                        { pin: "19 / 20", function: "Output", name: ["Status SBC"], description: "Output SBC" }
                    ]
                }
            ]
        },
        L: {
            name: "F5 ASCL with safety",
            terminalStrips: [
                {
                    name: "X2A",
                    terminals: [
                        { pin: "1", function: "Digital mass", name: ["0 V"], description: "Reference potential for digital inputs/outputs, Uin and Uout" },
                        { pin: "2", function: "20...30V input", name: ["Uin"], description: "Input external voltage supply\nU=24 Vdc +20 %-15 % Imax=1 A" },
                        { pin: "3", function: "Digital mass", name: ["0 V"], description: "like pin 1" },
                        { pin: "4", function: "+24 V output", name: ["Uout"], description: "Voltage output for the control of the digital inputs\nU=24 Vdc ±25 %\nImax (PIN 4+32)=100 mA" },
                        { pin: "5", function: "Progr. input reset", name: ["RST"], description: "Programmable digital inputs (assignment ex factory see chapter 'Connection of the digital inputs for COMBIVERT F5 with STO')\n8 digital inputs in accordance with IEC61131-2 type1\n'0' = -3...5 VDC\n'1' = 15...30 VDC scan time ≤ 1ms", descriptionRowspan: 8 },
                        { pin: "6", function: "Progr. input control release", name: ["ST"], descriptionRowspan: 0 },
                        { pin: "7", function: "Progr. input reverse", name: ["R"], descriptionRowspan: 0 },
                        { pin: "8", function: "Progr. input forward", name: ["F"], descriptionRowspan: 0 },
                        { pin: "9", function: "Progr. input 2", name: ["I2"], descriptionRowspan: 0 },
                        { pin: "10", function: "Progr. input 1", name: ["I1"], descriptionRowspan: 0 },
                        { pin: "11", function: "Progr. input 4", name: ["I4"], descriptionRowspan: 0 },
                        { pin: "12", function: "Progr. input 3", name: ["I3"], descriptionRowspan: 0 },
                        { pin: "13", function: "Progr. output 2", name: ["O2"], description: "Programmable digital outputs (assignment ex factory see chapter 'Connection of the digital outputs for COMBIVERT F5 with STO')\n2 short-circuit proof digital 24 V outputs according to IEC61131-2 specified Imax = 100mA per output switching of inductive load (without free-wheeling path) to 300mH maximum switching frequency = 1kHz", descriptionRowspan: 2 },
                        { pin: "14", function: "Progr. output 1", name: ["O1"], descriptionRowspan: 0 },
                        { pin: "15", function: "Digital mass", name: ["0 V"], description: "like pin 1" },
                        { pin: "16", function: "CRF", name: ["CRF"], description: "Reference voltage for setpoint potentiometer\n10 Vdc +5 % Imax = 4 mA" },
                        { pin: "17", function: "Analog input 1 -", name: ["AN1-"], description: "Programmable analog inputs (assignment ex factory see chapter 'Connection of the analog inputs for COMBIVERT F5 with STO')\n0...±10 Vdc (Ri=55 KΩ)\n0...±20 mA (Ri=260 Ω)\n4...20 mA (Ri=260 Ω)\nResolution: 11 Bit + sign scan time ≤1 ms", descriptionRowspan: 4 },
                        { pin: "18", function: "Analog input 1 +", name: ["AN1+"], descriptionRowspan: 0 },
                        { pin: "19", function: "Analog input 2 -", name: ["AN2-"], descriptionRowspan: 0 },
                        { pin: "20", function: "Analog input 2 +", name: ["AN2+"], descriptionRowspan: 0 },
                        { pin: "21", function: "Analog mass", name: ["COM"], description: "Analog mass; reference potential for analog inputs and outputs" },
                        { pin: "22", function: "Analog output 1", name: ["ANOUT1"], description: "Programmable analog output 1 (assignment ex factory see chapter 'Connection of the analog outputs for COMBIVERT F5 with STO')\nU=0...±10 Vdc (max. 11.5 Vdc)\nImax=10 mA, Ri=100 Ω\nRes.:11Bit + sign" },
                        { pin: "23", function: "Analog mass", name: ["COM"], description: "like pin 21" },
                        { pin: "24", function: "Analog output 2", name: ["ANOUT2"], description: "Programmable analog output 2 (assignment ex factory see chapter 'Connection of the analog outputs for COMBIVERT F5 with STO')\nU=0...±10 Vdc (max. 11.5 Vdc)\nImax=10 mA, Ri=100 Ω\nRes.:11Bit + sign" },
                        { pin: "25", function: "R2-C / switching contact", name: ["R2-C"], description: "Programmable relay outputs (assignment ex factory see chapter 'Connection of the relay outputs for COMBIVERT F5 with STO')\nUmax = 30 Vdc\nI = 0.01...1 A", descriptionRowspan: 6 },
                        { pin: "26", function: "R1-C / switching contact", name: ["R1-C"], descriptionRowspan: 0 },
                        { pin: "27", function: "R2-B / NC contact", name: ["R2-B"], descriptionRowspan: 0 },
                        { pin: "28", function: "R1-B / NC contact", name: ["R1-B"], descriptionRowspan: 0 },
                        { pin: "29", function: "R2-A / NO contact", name: ["R2-A"], descriptionRowspan: 0 },
                        { pin: "30", function: "R1-A / NO contact", name: ["R1-A"], descriptionRowspan: 0 },
                        { pin: "31", function: "Digital mass", name: ["0 V"], description: "like pin 1" },
                        { pin: "32", function: "+24 V output", name: ["Uout"], description: "like pin 4" }
                    ]
                },
                {
                    name: "X2B",
                    terminals: [
                        { pin: "1 / 2", function: "Input", name: ["STO1+"], description: "STO channel 1" },
                        { pin: "3 / 4", function: "Input", name: ["STO1-"], description: "STO channel 1" },
                        { pin: "5 / 6", function: "Input", name: ["STO2+"], description: "STO channel 2" },
                        { pin: "7 / 8", function: "Input", name: ["STO2-"], description: "STO channel 2" },
                        { pin: "9 / 10", function: "Input", name: ["SBC1+"], description: "SBC channel 1" },
                        { pin: "11 / 12", function: "Input", name: ["SBC1-"], description: "SBC channel 1" },
                        { pin: "13 / 14", function: "Input", name: ["SBC2+"], description: "SBC channel 2" },
                        { pin: "15 / 16", function: "Input", name: ["SBC2-"], description: "SBC channel 2" },
                        { pin: "17 / 18", function: "Output", name: ["Status STO"], description: "Output STO" },
                        { pin: "19 / 20", function: "Output", name: ["Status SBC"], description: "Output SBC" }
                    ]
                }
            ]
        },
        P: {
            name: "F5 SCL with safety",
            terminalStrips: [
                {
                    name: "X2A",
                    terminals: [
                        { pin: "1", function: "Digital mass", name: ["0 V"], description: "Reference potential for digital inputs/outputs, Uin and Uout" },
                        { pin: "2", function: "20...30V input", name: ["Uin"], description: "Input external voltage supply\nU=24 Vdc +20 %-15 % Imax=1 A" },
                        { pin: "3", function: "Digital mass", name: ["0 V"], description: "like pin 1" },
                        { pin: "4", function: "+24 V output", name: ["Uout"], description: "Voltage output for the control of the digital inputs\nU=24 Vdc ±25 %\nImax (PIN 4+32)=100 mA" },
                        { pin: "5", function: "Progr. input reset", name: ["RST"], description: "Programmable digital inputs (assignment ex factory see chapter 'Connection of the digital inputs for COMBIVERT F5 with STO')\n8 digital inputs in accordance with IEC61131-2 type1\n'0' = -3...5 VDC\n'1' = 15...30 VDC scan time ≤ 1ms", descriptionRowspan: 8 },
                        { pin: "6", function: "Progr. input control release", name: ["ST"], descriptionRowspan: 0 },
                        { pin: "7", function: "Progr. input reverse", name: ["R"], descriptionRowspan: 0 },
                        { pin: "8", function: "Progr. input forward", name: ["F"], descriptionRowspan: 0 },
                        { pin: "9", function: "Progr. input 2", name: ["I2"], descriptionRowspan: 0 },
                        { pin: "10", function: "Progr. input 1", name: ["I1"], descriptionRowspan: 0 },
                        { pin: "11", function: "Progr. input 4", name: ["I4"], descriptionRowspan: 0 },
                        { pin: "12", function: "Progr. input 3", name: ["I3"], descriptionRowspan: 0 },
                        { pin: "13", function: "Progr. output 2", name: ["O2"], description: "Programmable digital outputs (assignment ex factory see chapter 'Connection of the digital outputs for COMBIVERT F5 with STO')\n2 short-circuit proof digital 24 V outputs according to IEC61131-2 specified Imax = 100mA per output switching of inductive load (without free-wheeling path) to 300mH maximum switching frequency = 1kHz", descriptionRowspan: 2 },
                        { pin: "14", function: "Progr. output 1", name: ["O1"], descriptionRowspan: 0 },
                        { pin: "15", function: "Digital mass", name: ["0 V"], description: "like pin 1" },
                        { pin: "16", function: "CRF", name: ["CRF"], description: "Reference voltage for setpoint potentiometer\n10 Vdc +5 % Imax = 4 mA" },
                        { pin: "17", function: "Analog input 1 -", name: ["AN1-"], description: "Programmable analog inputs (assignment ex factory see chapter 'Connection of the analog inputs for COMBIVERT F5 with STO')\n0...±10 Vdc (Ri=55 KΩ)\n0...±20 mA (Ri=260 Ω)\n4...20 mA (Ri=260 Ω)\nResolution: 11 Bit + sign scan time ≤1 ms", descriptionRowspan: 4 },
                        { pin: "18", function: "Analog input 1 +", name: ["AN1+"], descriptionRowspan: 0 },
                        { pin: "19", function: "Analog input 2 -", name: ["AN2-"], descriptionRowspan: 0 },
                        { pin: "20", function: "Analog input 2 +", name: ["AN2+"], descriptionRowspan: 0 },
                        { pin: "21", function: "Analog mass", name: ["COM"], description: "Analog mass; reference potential for analog inputs and outputs" },
                        { pin: "22", function: "Analog output 1", name: ["ANOUT1"], description: "Programmable analog output 1 (assignment ex factory see chapter 'Connection of the analog outputs for COMBIVERT F5 with STO')\nU=0...±10 Vdc (max. 11.5 Vdc)\nImax=10 mA, Ri=100 Ω\nRes.:11Bit + sign" },
                        { pin: "23", function: "Analog mass", name: ["COM"], description: "like pin 21" },
                        { pin: "24", function: "Analog output 2", name: ["ANOUT2"], description: "Programmable analog output 2 (assignment ex factory see chapter 'Connection of the analog outputs for COMBIVERT F5 with STO')\nU=0...±10 Vdc (max. 11.5 Vdc)\nImax=10 mA, Ri=100 Ω\nRes.:11Bit + sign" },
                        { pin: "25", function: "R2-C / switching contact", name: ["R2-C"], description: "Programmable relay outputs (assignment ex factory see chapter 'Connection of the relay outputs for COMBIVERT F5 with STO')\nUmax = 30 Vdc\nI = 0.01...1 A", descriptionRowspan: 6 },
                        { pin: "26", function: "R1-C / switching contact", name: ["R1-C"], descriptionRowspan: 0 },
                        { pin: "27", function: "R2-B / NC contact", name: ["R2-B"], descriptionRowspan: 0 },
                        { pin: "28", function: "R1-B / NC contact", name: ["R1-B"], descriptionRowspan: 0 },
                        { pin: "29", function: "R2-A / NO contact", name: ["R2-A"], descriptionRowspan: 0 },
                        { pin: "30", function: "R1-A / NO contact", name: ["R1-A"], descriptionRowspan: 0 },
                        { pin: "31", function: "Digital mass", name: ["0 V"], description: "like pin 1" },
                        { pin: "32", function: "+24 V output", name: ["Uout"], description: "like pin 4" }
                    ]
                },
                {
                    name: "X2B",
                    terminals: [
                        { pin: "1 / 2", function: "Input", name: ["STO1+"], description: "STO channel 1" },
                        { pin: "3 / 4", function: "Input", name: ["STO1-"], description: "STO channel 1" },
                        { pin: "5 / 6", function: "Input", name: ["STO2+"], description: "STO channel 2" },
                        { pin: "7 / 8", function: "Input", name: ["STO2-"], description: "STO channel 2" },
                        { pin: "9 / 10", function: "Input", name: ["SBC1+"], description: "SBC channel 1" },
                        { pin: "11 / 12", function: "Input", name: ["SBC1-"], description: "SBC channel 1" },
                        { pin: "13 / 14", function: "Input", name: ["SBC2+"], description: "SBC channel 2" },
                        { pin: "15 / 16", function: "Input", name: ["SBC2-"], description: "SBC channel 2" },
                        { pin: "17 / 18", function: "Output", name: ["Status STO"], description: "Output STO" },
                        { pin: "19 / 20", function: "Output", name: ["Status SBC"], description: "Output SBC" }
                    ]
                }
            ]
        },
        S: {
            name: "F5 APPLICATION - SERVO",
            terminals: [
                { pin: "1", function: "+ Set value input 1", name: ["AN1+"], description: "Difference voltage input 0...±10 VDC ⊿ 0...±maximum speed, Ri = 55kΩ", descriptionRowspan: 2 },
                { pin: "2", function: "- Set value input 1", name: ["AN1-"], descriptionRowspan: 0 },
                { pin: "5", function: "Analog output", name: ["AN OUT1"], description: "Programmable analog output 0...±10 VDC/ 5mA. Function is defined by the machine builder" },
                { pin: "7", function: "+10V output", name: ["CRF"], description: "Reference voltage output for set value potentiometer (+10 VDC / max. 4mA)" },
                { pin: "8", function: "Analog mass", name: ["COM"], description: "Mass for analog inputs and outputs" },
                { pin: "10", function: "Progr. input 1", name: ["I1"], description: "The function of the programmable inputs is defined by the machine builder\nSwitching voltage 13...30 VDC ±0% smoothed\nRI=2.1 kΩ", descriptionRowspan: 4 },
                { pin: "11", function: "Progr. input 2", name: ["I2"], descriptionRowspan: 0 },
                { pin: "12", function: "Progr. input 3", name: ["I3"], description: "", descriptionRowspan: 0 },
                { pin: "13", function: "Progr. input 4", name: ["I4"], descriptionRowspan: 0 },
                { pin: "16", function: "Supply voltage\nDriver circuit", name: ["ST"], description: "Supply of the driver circuit\nThis input must be supplied with an external voltage of 20...30 VDC ±0% / 0.2A (Uss max. 3.6 Vss). An error reset is executed when switching off this voltage" },
                { pin: "18", function: "Transistor output 1", name: ["O1"], description: "Programmable digital outputs\nLoad capacity for both outputs maximum 50mA.\nFunction is defined by the machine builder",descriptionRowspan: 2 },
                { pin: "19", function: "Transistor output 2", name: ["O2"], descriptionRowspan: 0 },
                { pin: "21", function: "Supply voltage\nControl board", name: ["Uin"], description: "Voltage supply of the control board\nThis input must be supplied with an external voltage of 20...30 VDC ±0% / 0.8A (Uss max. 3.6 Vss). Due to the separate supply the control can be further operated also when the driver / power unit is switched off" },
                { pin: "22", function: "Digital mass", name: ["0 V"], description: "Reference potential for digital inputs/outputs" },
                { pin: "24", function: "Relay No contact", name: ["RLA"], description: "Programmable relay output (CP 33)\nLoad capacity max. 30 VDC / 0.01...1A\nFunction is defined by the machine builder", descriptionRowspan: 3 },
                { pin: "25", function: "Relay (NC contact)", name: ["RLB"], descriptionRowspan: 0 },
                { pin: "26", function: "Relay Switching contact", name: ["RLC"], descriptionRowspan: 0 }
            ]
        },
        M: {
            name: "F5 APPLICATION - MULTI",
            terminals: [
                { pin: "1", function: "Analog input 1 +", name: ["AN1+"], description: "Differential voltage input for speed / torque:\nFor speed (CP.10=4); 0...±10 VDC Δ 0...±100 % (CP22, CP28, CP29)\nFor torque (CP.10=5); 0...±10 VDC Δ 0...±100 % (=CP22, CP28, CP29)\nResolution: 12 Bit; Ri=30k Ohm; scan time: 1 msec.", descriptionRowspan: 4 },
                { pin: "2", function: "Analog input 1 -", name: ["AN1-"], descriptionRowspan: 0 },
                { pin: "3", function: "Analog input 2 +", name: ["AN2+"], descriptionRowspan: 0 },
                { pin: "4", function: "Analog input 2 -", name: ["AN2-"], descriptionRowspan: 0 },
                { pin: "5", function: "Analog output 1", name: ["ANOUT1"], description: "Analog output of the real speed\n0...±10 VDC Δ 0...±2 x nspec rpm\nVoltage range: 0...±10V\nRi=100k Ohm, resolution: 12 Bit" },
                { pin: "6", function: "Analog output 2", name: ["ANOUT2"], description: "Analog output of the phase current\n0...10 VDC Δ 0...2 x IN\nPWM frequency: 3.4 kHz\nfilter response 1. Order: 178 Hz" },
                { pin: "7", function: "+10V Output", name: ["CRF"], description: "Ref. Voltage for speed potentiometer\n+10VDC ±5% / max. 4 mA" },
                { pin: "8", function: "Analog Common", name: ["COM"], description: "Common for analog in- and outputs" },
                { pin: "9", function: "Analog Common", name: ["COM"], description: "Common for analog in- and outputs" },
                { pin: "10", function: "Jog speed 1", name: ["I1"], description: "I1+I2 = Jog speed 3; CP23, CP24 to adjust value;" },
                { pin: "11", function: "Jog speed 2", name: ["I2"], description: "No input will default to analog voltage ref. (Pin 7)" },
                { pin: "12", function: "External fault", name: ["I3"], description: "External fault triggered when active." },
                { pin: "13", function: "No Function", name: ["I4"], description: "Adjust response with CP36 1)\nRi = 2.1 kOhm\nscan time: 1 msec.", descriptionRowspan: 4 },
                { pin: "14", function: "Forward", name: ["F"], description: "Software limit switch 1)", descriptionRowspan: 0 },
                { pin: "15", function: "Reverse", name: ["R"], description: "The response can be adjusted with CP35 & CP36", descriptionRowspan: 0 },
                { pin: "16", function: "Control release / Reset", name: ["ST"], description: "Inverter enable / disable and drive fault reset;\nAll drive faults reset when switching off inputs", descriptionRowspan: 0 },
                { pin: "17", function: "Reset", name: ["RST"], description: "Reset; only when an error occurs" },
                { pin: "18", function: "At Speed signal", name: ["O1"], description: "Transistor output, switched at actual speed = set speed" },
                { pin: "19", function: "Ready signal", name: ["O2"], description: "Transistor output, switched as long as no error occurs" },
                { pin: "20", function: "24V Output", name: ["Vout"], description: "Approx. 24V output (max.100 mA)" },
                { pin: "21", function: "20...30V Input", name: ["Vin"], description: "Voltage input for external supply" },
                { pin: "22", function: "Digital Common", name: ["0V"], description: "Common for digital in-/outputs" },
                { pin: "23", function: "Digital Common", name: ["0V"], description: "Common for digital in-/outputs" },
                { pin: "24", function: "Relay1/NO contact", name: ["FLA"], description: "Relay output; fault relay (default);\nFunction can be\nchanged with CP33\nMax. 30 VDC, 1 A", descriptionRowspan: 3 },
                { pin: "25", function: "Relay 1/NC contact", name: ["FLB"], descriptionRowspan: 0 },
                { pin: "26", function: "Relay 1/switching contact", name: ["FLC"], descriptionRowspan: 0 },
                { pin: "27", function: "Relay2/NO contact", name: ["RLA"], description: "Relay output; run signal (default);\nFunction can be\nchanged with CP34\nMax. 30 VDC, 1 A", descriptionRowspan: 3 },
                { pin: "28", function: "Relay 2/NC contact", name: ["RLB"], descriptionRowspan: 0 },
                { pin: "29", function: "Relay2/switching contact", name: ["RLC"], descriptionRowspan: 0 }
            ]
        }
    },
    F4: {
        C: {
            name: "F4 Compact",
            terminals: [
                { pin: "1", function: "programmable output relay\n(OUT2)", name: ["RLA"], functionRowspan: 3, description: "30VDC / 1A", descriptionRowspan: 3 },
                { pin: "2", function: "", name: ["RLB"], functionRowspan: 0, descriptionRowspan: 0 },
                { pin: "3", function: "", name: ["RLC"], functionRowspan: 0, descriptionRowspan: 0 },
                { pin: "4", function: "programmable input 1\n(fixed frequency 1)", name: ["I1"], description: "interference immunity 2 kV\nlogic 1 at ±12...30 VDC\ninput resistance: ca. 2 KΩ\nLogic: PNP / NPN (prog. with di.1)\nFactory setting, the functions are changeable with di.3...di.6", descriptionRowspan: 4 },
                { pin: "5", function: "programmable input 2\n(fixed frequency 2)", name: ["I2"], descriptionRowspan: 0 },
                { pin: "6", function: "programmable input 3\n(DC-brake)", name: ["I3"], descriptionRowspan: 0 },
                { pin: "7", function: "programmable input 4\n(energy saving function)", name: ["I4"], descriptionRowspan: 0 },
                { pin: "8", function: "analog setpoint input", name: ["REF+"], functionRowspan: 2, description: "voltage differential input ±10V\nRi: 40kΩ (56kΩ); Resolution: ±11Bit" },
                { pin: "9", function: "", name: ["REF-"], functionRowspan: 0, description: "specifications see I1...I4" },
                { pin: "10", function: "rotation selection", name: ["F"], description: "specifications see I1...I4" },
                { pin: "11", function: "forward/reverse (or Run/Stop)", name: ["R"], description: "function is changeable with di.20" },
                { pin: "12", function: "programmable transistor output", name: ["OUT1"], description: "14...30V max. 20mA" },
                { pin: "13", function: "earth for Uext and\ndigital in-/outputs", name: ["0V"], description: "Voltage: depending on power circuit and load 16...30VDC\nload rating: max. 100mA" },
                { pin: "14", function: "external voltage in-/output", name: ["Uext"], description: "Voltage output: supply voltage provided by the inverter for digital in- and outputs\nVoltage input: external supply voltage for digital in-/outputs (only necessary if the voltage provided by the inverter is not a primary control) and for the supply of the control card at switched off power circuit (external supply voltage: +10...30V DC)" },
                { pin: "15", function: "progr. analog output", name: ["AOUT"], description: "Uout 0...10 VDC; Imax: 5 mA; Ri < 100 Ω; Resolution: 9 Bit" },
                { pin: "16", function: "reference voltage for analog input", name: ["CRF"], description: "voltage output +10 VDC ±3%; max 4 mA" },
                { pin: "17", function: "progr. analog input An 26", name: ["REF"], description: "0...10V Ri: 56 KΩ (0...20mA or 4...20mA Ri: 250 Ω)" },
                { pin: "18", function: "analog earth", name: ["COM"], description: "earth for analog in-/outputs" },
                { pin: "19", function: "control release\n(reset at breaking contact progr. with di.21)", name: ["ST"], description: "specifications see I1...I4" },
                { pin: "20", function: "reset", name: ["RST"], description: "specifications see I1...I4" },
                { pin: "21", function: "programmable output relay\n(Out3)", name: ["FLA"], functionRowspan: 3, description: "30VDC / 1A", descriptionRowspan: 3 },
                { pin: "22", function: "", name: ["FLB"], functionRowspan: 0, descriptionRowspan: 0 },
                { pin: "23", function: "", name: ["FLC"], functionRowspan: 0, descriptionRowspan: 0 }
            ]
        },
        S: {
            name: "F4 Standard",
            terminals: [
                { pin: "1", function: "programmable output relay\n(OUT2)", name: ["RLA NO Contact"], functionRowspan: 3, description: "30VDC / 1A", descriptionRowspan: 3 },
                { pin: "2", function: "", name: ["RLB NC Contact"], functionRowspan: 0, descriptionRowspan: 0 },
                { pin: "3", function: "", name: ["RLC Common Contact"], functionRowspan: 0, descriptionRowspan: 0 },
                { pin: "4", function: "programmable input 1\n(fixed frequency 1)", name: ["I1"], description: "interference immunity 2 kV\nlogic 1 at ±12...30 VDC\ninput resistance: ca. 2 KΩ\nLogic: PNP / NPN (prog. with di.1)\nFactory setting, the functions are changeable with di.3...di.6", descriptionRowspan: 3 },
                { pin: "5", function: "programmable input 2\n(fixed frequency 2)", name: ["I2"], descriptionRowspan: 0 },
                { pin: "6", function: "digital mass", name: ["0V"]},
                { pin: "7", function: "reference voltage for analog input", name: ["CRF"], description: "supply voltage, output +10 VDC ±3%; max 4 mA" },
                { pin: "8", function: "analog setpoint input", name: ["REF+"], functionRowspan: 2, description: "voltage differential input ±10V\nRi: 40kΩ (56kΩ); Resolution: ±11Bit" },
                { pin: "9", function: "common", name: ["COM"], functionRowspan: 0, description: "ground for analog I/O's" },
                { pin: "10", function: "analog/digital output", name: ["AN-OUT"], description: "analog output e.g: the output frequency (AN14 = 0)\nor digital output (An.14 = 7)" },       
                { pin: "11", function: "15V", name: ["Uext"], description: "supply voltage for digital I/O's" },
                { pin: "12", function: "reverse direction", name: ["REV"], description: "forward has priority", descriptionRowspan: 2 },
                { pin: "13", function: "forward direction", name: ["FOR"], descriptionRowspan: 0 },
                { pin: "14", function: "control release/fault reset", name: ["ST"], description: "power module released; reset when opened" }
            ]
        },
        F: {
            name: "F4 Field-oriented control",
            terminals: [
                { pin: "1", function: "Control release", name: ["ST"], description: "Digital Inputs\nlogic 1: ± (12...30V)\ninternal input resistor: approx. 2 kΩ\nPNP/NPN (prog. with di.1)", descriptionRowspan: 7 },
                { pin: "2", function: "Reset", name: ["I4"], description: "", descriptionRowspan: 0 },
                { pin: "3", function: "Rotation selection / forward *1)", name: ["I5"], descriptionRowspan: 0 },
                { pin: "4", function: "Rotation selection / reverse *1)", name: ["I6"], description: "", descriptionRowspan: 0 },
                { pin: "5", function: "Programmable input 1\n(Jog-speed forward *1)", name: ["I1"], descriptionRowspan: 0 },
                { pin: "6", function: "Programmable input 2\n(Jog-speed reverse *1)", name: ["I2"], descriptionRowspan: 0 },
                { pin: "7", function: "Programmable input 3\n(external fault *1)", name: ["I3"], descriptionRowspan: 0 },
                { pin: "8", function: "Digital output 1 (Out 1)", name: ["D1"], description: "programmable PNP-transistor outputs 14...30 V / max. 20 mA per output", descriptionRowspan: 2 },
                { pin: "9", function: "Digital output 2 (Out 2)", name: ["D2"], descriptionRowspan: 0 },
                { pin: "10", function: "Output voltage for", name: ["Uout"], description: "Voltage output: supply voltage provided by the inverter for digital I/O and outputs\nVoltage: depending on power circuit and load 16...60V max.80 mA", functionRowspan: 2, descriptionRowspan: 2 },
                { pin: "11", function: "Mass for Uout and digital in-/outputs", name: ["0V"], description: "", descriptionRowspan: 0 },
                { pin: "12", function: "Analog reference voltage", name: ["CRF"], description: "Voltage output: +10V (+/-3%); max. 4 mA\nMass for analog in-/outputs", descriptionRowspan: 2 },
                { pin: "13", function: "Analog mass", name: ["COM"], description: "", descriptionRowspan: 0 },
                { pin: "14", function: "Analog setpoint input", name: ["REF I +"], description: "Differential voltage input\n±10 V / resolution: 12 Bit / Ri = 24 kΩ / 40 kΩ (see next page)\nsee An.2 - An.5 (chapter 5.9)", descriptionRowspan: 4 },
                { pin: "15", function: "", name: ["REF I -"], description: "",descriptionRowspan: 0 },
                { pin: "16", function: "Prog. analog input", name: ["REF 2 +"], descriptionRowspan: 0 },
                { pin: "17", function: "", name: ["REF 2 -"], description: "", descriptionRowspan: 0 },
                { pin: "18", function: "Analog output 1", name: ["A1"], description: "Analog outputs\nVoltage range: 0...±10V / internal resistance: 100 Ω", descriptionRowspan: 2 },
                { pin: "19", function: "Analog output 2", name: ["A2"],  },
                { pin: "20", function: "Output relay\n(Out 3)", name: ["RLA"], description: "30 VDC / 1A", functionRowspan: 3, descriptionRowspan: 3 },
                { pin: "21", function: "", name: ["RLB"], description: "", functionRowspan: 0, descriptionRowspan: 0 },
                { pin: "22", function: "", name: ["RLC"], description: "", functionRowspan: 0, descriptionRowspan: 0 },
                { pin: "23", function: "External voltage supply", name: ["Ext. Spg."], description: "External voltage input (only necessary if the voltage provided by the inverter is too low for a primary control or an external encoder) and for the supply of the control card at switched off power circuit (this function is not available for all power circuit sizes)" }
            ]
        }
    }
};

function getControlTypeId(productLine) {
    const controlTypeMap = {
        'S6': 's6-controltype',
        'F6': 'f6-control',
        'G6': 'g6-control',
        'F5': 'f5-control',
        'F4': 'f4-control'
    };
    return controlTypeMap[productLine];
}

function updateTerminalAssignments() {
    const productLine = document.getElementById('productLine').value;
    const controlTypeId = getControlTypeId(productLine);
    const controlTypeElement = document.getElementById(controlTypeId);
    
    if (!controlTypeElement) {
        document.getElementById('io-content').innerHTML = '<p style="color: #666;">Select a product line to view terminal assignments.</p>';
        return;
    }
    
    const controlType = controlTypeElement.value;
    const assignments = terminalAssignments[productLine]?.[controlType];
    
    if (!assignments) {
        document.getElementById('io-content').innerHTML = '<p style="color: #666;">No terminal assignment data available for this configuration.</p>';
        return;
    }
    
    // Build the terminal assignment display
    let html = `<label style="margin: 10px 0;">${assignments.name}</label>`;
    
    // If there's an image, display it
    if (assignments.image) {
        html += `<div style="text-align: center; margin: 20px 0;">`;
        html += `<img src="${assignments.image}" alt="${assignments.name} Terminal Diagram" style="width: 100%; height: auto; border: 1px solid #ddd;">`;
        html += `</div>`;
    }
    
    // Support both old format (single terminals array) and new format (terminalStrips array)
    let terminalStrips = assignments.terminalStrips || (assignments.terminals ? [{ name: "", terminals: assignments.terminals }] : []);
    
    // For F6 and S6, check if there are equipment-specific terminal strips
    if ((productLine === 'F6' || productLine === 'S6') && assignments.equipmentStrips) {
        const equipmentId = productLine === 'F6' ? 'f6-equipment' : 's6-safetymodule';
        const equipmentElement = document.getElementById(equipmentId);
        if (equipmentElement) {
            const equipmentValue = equipmentElement.value;
            const equipmentStrip = assignments.equipmentStrips[equipmentValue];
            if (equipmentStrip) {
                terminalStrips = [...terminalStrips, equipmentStrip];
            }
        }
    }
    
    // Build tables for each terminal strip
    terminalStrips.forEach((strip, index) => {
        // Add terminal strip name inline with the table if it exists
        let tablePrefix = '';
        if (strip.name) {
            tablePrefix = `<span style="font-weight: bold; color: #222; margin-right: 12px;">${strip.name}</span>`;
        }
        
        // Only build table if there are terminals
        if (strip.terminals && strip.terminals.length > 0) {
            // Check if any terminal has description
            const hasDescription = strip.terminals.some(t => t.description);
            
            html += `<div style="display: flex; align-items: flex-start;"><div>${tablePrefix}</div><table style="width: auto; border-collapse: collapse; margin-top: 0; margin-bottom: 16px; margin-left: 8px;">`;
            html += '<thead><tr style="background: #f0f0f0; border: 2px solid #222;">';
            html += '<th style="padding: 8px; text-align: left; border: 2px solid #222;">PIN</th>';
            html += '<th style="padding: 8px; text-align: left; border: 2px solid #222;">Name</th>';
            html += '<th style="padding: 8px; text-align: left; border: 2px solid #222;">Function</th>';
            if (hasDescription) {
                html += '<th style="padding: 8px; text-align: left; border: 2px solid #222;">Description</th>';
            }
            html += '</tr></thead><tbody>';
            
            strip.terminals.forEach(terminal => {
                html += '<tr style="border: 1px solid #ddd;">';
                html += `<td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">${terminal.pin}</td>`;
                html += `<td style="padding: 8px; border: 1px solid #ddd; font-family: monospace;">${terminal.name.join(', ')}</td>`;
                // Handle function with rowspan
                if (terminal.functionRowspan !== 0) {
                    const functionRowspanAttr = terminal.functionRowspan > 1 ? ` rowspan="${terminal.functionRowspan}"` : '';
                    const functionText = terminal.function.replace(/\n/g, '<br>');
                    html += `<td style="padding: 8px; border: 1px solid #ddd;"${functionRowspanAttr}>${functionText}</td>`;
                }
                if (hasDescription) {
                    // Handle description with rowspan
                    if (terminal.descriptionRowspan !== 0) {
                        const descriptionRowspanAttr = terminal.descriptionRowspan > 1 ? ` rowspan="${terminal.descriptionRowspan}"` : '';
                        const descriptionText = (terminal.description || '').replace(/\n/g, '<br>');
                        html += `<td style="padding: 8px; border: 1px solid #ddd; font-size: 0.9em;"${descriptionRowspanAttr}>${descriptionText}</td>`;
                    }
                }
                html += '</tr>';
            });
            
            html += '</tbody></table></div>';
        }
    });
    
    document.getElementById('io-content').innerHTML = html;
}

// Set up event listeners when DOM is loaded
window.addEventListener('DOMContentLoaded', function() {
    // Listen to product line changes
    const productLineSelect = document.getElementById('productLine');
    if (productLineSelect) {
        productLineSelect.addEventListener('change', updateTerminalAssignments);
    }
    
    // Listen to all control type selects
    ['s6-controltype', 'f6-control', 'g6-control', 'f5-control', 'f4-control'].forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('change', updateTerminalAssignments);
        }
    });
    
    // Listen to equipment type changes for F6 and S6
    const f6Equipment = document.getElementById('f6-equipment');
    if (f6Equipment) {
        f6Equipment.addEventListener('change', updateTerminalAssignments);
    }
    
    const s6SafetyModule = document.getElementById('s6-safetymodule');
    if (s6SafetyModule) {
        s6SafetyModule.addEventListener('change', updateTerminalAssignments);
    }
    
    // Initial update
    updateTerminalAssignments();
});

