const leituras = [
    {
        "id": 1,
        "ligado": true,
        "dataHora": "2024-07-09T16:21:57.876Z",
        "temperaturaEntrada": 10,
        "umidadeRelativaEntrada": 25,
        "temperaturaSaida": 31,
        "umidadeRelativaSaida": 22,
        "velocidadeArEntrada": 97,
        "vazaoVolumetricaAr": 539,
        "corrente": 98,
        "frequencia": 33,
        "capacidadeMedida": 990,
        "capacidadeNominalCorrigida": 49,
        "potenciaCalculada": 60,
        "ieeNominal": 68,
        "ieeReal": 36,
        "tbuAdmissao": 48,
        "ganhoEnergetico": 70,
        "saturacao": 42,
        "condensadorId": 1
    },
    {
        "id": 2,
        "ligado": true,
        "dataHora": "2024-07-09T16:21:57.876Z",
        "temperaturaEntrada": 25,
        "umidadeRelativaEntrada": 10,
        "temperaturaSaida": 29,
        "umidadeRelativaSaida": 44,
        "velocidadeArEntrada": 83,
        "vazaoVolumetricaAr": 437,
        "corrente": 59,
        "frequencia": 10,
        "capacidadeMedida": 573,
        "capacidadeNominalCorrigida": 72,
        "potenciaCalculada": 12,
        "ieeNominal": 48,
        "ieeReal": 35,
        "tbuAdmissao": 6,
        "ganhoEnergetico": 15,
        "saturacao": 25,
        "condensadorId": 2
    },
    {
        "id": 3,
        "ligado": true,
        "dataHora": "2024-07-09T16:21:57.876Z",
        "temperaturaEntrada": 24,
        "umidadeRelativaEntrada": 29,
        "temperaturaSaida": 43,
        "umidadeRelativaSaida": 82,
        "velocidadeArEntrada": 79,
        "vazaoVolumetricaAr": 150,
        "corrente": 51,
        "frequencia": 11,
        "capacidadeMedida": 250,
        "capacidadeNominalCorrigida": 89,
        "potenciaCalculada": 97,
        "ieeNominal": 89,
        "ieeReal": 46,
        "tbuAdmissao": 1,
        "ganhoEnergetico": 45,
        "saturacao": 48,
        "condensadorId": 3
    },
    {
        "id": 4,
        "ligado": true,
        "dataHora": "2024-07-09T16:21:57.876Z",
        "temperaturaEntrada": 16,
        "umidadeRelativaEntrada": 14,
        "temperaturaSaida": 35,
        "umidadeRelativaSaida": 85,
        "velocidadeArEntrada": 63,
        "vazaoVolumetricaAr": 700,
        "corrente": 19,
        "frequencia": 85,
        "capacidadeMedida": 344,
        "capacidadeNominalCorrigida": 83,
        "potenciaCalculada": 18,
        "ieeNominal": 57,
        "ieeReal": 21,
        "tbuAdmissao": 26,
        "ganhoEnergetico": 63,
        "saturacao": 7,
        "condensadorId": 4
    },
    {
        "id": 5,
        "ligado": true,
        "dataHora": "2024-07-09T16:21:57.876Z",
        "temperaturaEntrada": 27,
        "umidadeRelativaEntrada": 29,
        "temperaturaSaida": 59,
        "umidadeRelativaSaida": 2,
        "velocidadeArEntrada": 85,
        "vazaoVolumetricaAr": 950,
        "corrente": 25,
        "frequencia": 28,
        "capacidadeMedida": 739,
        "capacidadeNominalCorrigida": 35,
        "potenciaCalculada": 72,
        "ieeNominal": 48,
        "ieeReal": 73,
        "tbuAdmissao": 66,
        "ganhoEnergetico": 26,
        "saturacao": 65,
        "condensadorId": 5
    },
    {
        "id": 6,
        "ligado": true,
        "dataHora": "2024-07-09T16:21:57.876Z",
        "temperaturaEntrada": 16,
        "umidadeRelativaEntrada": 28,
        "temperaturaSaida": 55,
        "umidadeRelativaSaida": 8,
        "velocidadeArEntrada": 99,
        "vazaoVolumetricaAr": 148,
        "corrente": 33,
        "frequencia": 16,
        "capacidadeMedida": 916,
        "capacidadeNominalCorrigida": 3,
        "potenciaCalculada": 54,
        "ieeNominal": 52,
        "ieeReal": 10,
        "tbuAdmissao": 95,
        "ganhoEnergetico": 50,
        "saturacao": 43,
        "condensadorId": 6
    },
    {
        "id": 7,
        "ligado": true,
        "dataHora": "2024-07-09T16:21:57.876Z",
        "temperaturaEntrada": 1,
        "umidadeRelativaEntrada": 12,
        "temperaturaSaida": 63,
        "umidadeRelativaSaida": 77,
        "velocidadeArEntrada": 75,
        "vazaoVolumetricaAr": 798,
        "corrente": 63,
        "frequencia": 68,
        "capacidadeMedida": 888,
        "capacidadeNominalCorrigida": 90,
        "potenciaCalculada": 78,
        "ieeNominal": 10,
        "ieeReal": 70,
        "tbuAdmissao": 7,
        "ganhoEnergetico": 44,
        "saturacao": 68,
        "condensadorId": 7
    },
    {
        "id": 8,
        "ligado": true,
        "dataHora": "2024-07-09T16:21:57.876Z",
        "temperaturaEntrada": 6,
        "umidadeRelativaEntrada": 20,
        "temperaturaSaida": 3,
        "umidadeRelativaSaida": 8,
        "velocidadeArEntrada": 52,
        "vazaoVolumetricaAr": 538,
        "corrente": 29,
        "frequencia": 100,
        "capacidadeMedida": 387,
        "capacidadeNominalCorrigida": 54,
        "potenciaCalculada": 52,
        "ieeNominal": 62,
        "ieeReal": 54,
        "tbuAdmissao": 86,
        "ganhoEnergetico": 48,
        "saturacao": 1,
        "condensadorId": 8
    },
    {
        "id": 9,
        "ligado": true,
        "dataHora": "2024-07-09T16:21:57.876Z",
        "temperaturaEntrada": 0,
        "umidadeRelativaEntrada": 4,
        "temperaturaSaida": 51,
        "umidadeRelativaSaida": 85,
        "velocidadeArEntrada": 92,
        "vazaoVolumetricaAr": 223,
        "corrente": 81,
        "frequencia": 1,
        "capacidadeMedida": 349,
        "capacidadeNominalCorrigida": 53,
        "potenciaCalculada": 62,
        "ieeNominal": 76,
        "ieeReal": 39,
        "tbuAdmissao": 69,
        "ganhoEnergetico": 74,
        "saturacao": 23,
        "condensadorId": 9
    },
    {
        "id": 10,
        "ligado": true,
        "dataHora": "2024-07-09T16:21:57.876Z",
        "temperaturaEntrada": 16,
        "umidadeRelativaEntrada": 30,
        "temperaturaSaida": 17,
        "umidadeRelativaSaida": 25,
        "velocidadeArEntrada": 59,
        "vazaoVolumetricaAr": 507,
        "corrente": 6,
        "frequencia": 10,
        "capacidadeMedida": 581,
        "capacidadeNominalCorrigida": 53,
        "potenciaCalculada": 34,
        "ieeNominal": 4,
        "ieeReal": 44,
        "tbuAdmissao": 100,
        "ganhoEnergetico": 12,
        "saturacao": 6,
        "condensadorId": 10
    }
];

module.exports = {
    leituras
};