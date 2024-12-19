import React from 'react';
import { ScrollView, SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import ChartSimples from '@/components/charts/ChartSimples';
import ChartDuplo from '@/components/charts/ChartDuplo';
import QuadroAmbientes from '@/components/charts/QuadroAmbientes';

import { leituras } from '@/api/leituras';
import { ambientes } from '@/api/ambientes';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.scrollView}>
          <QuadroAmbientes ambientes={ambientes}></QuadroAmbientes>
          <ChartDuplo
            titulo={'Capacidade Condensadores (kcal/h)'}
            legenda1={'Capac. medida'}
            legenda2={'Capac. nominal'}
            parametro1={'capacidadeMedida'}
            parametro2={'capacidadeNominalCorrigida'}
            leituras={leituras}>
          </ChartDuplo>
          <ChartDuplo
            titulo={'Índice Eficiência Condensadores (kcal/kwh)'}
            legenda1={'Efic. medida'}
            legenda2={'Efic. nominal'}
            parametro1={'ieeReal'}
            parametro2={'ieeNominal'}
            leituras={leituras}>
          </ChartDuplo>
          <ChartSimples
            titulo={'TBU Admissão do Ar'}
            legenda={'TBU (°C)'}
            parametro={'tbuAdmissao'}
            leituras={leituras}>
          </ChartSimples>
          <ChartSimples
            titulo={'Ganho Energético do Ar'}
            legenda={'Ganho Energético (g/kg)'}
            parametro={'ganhoEnergetico'}
            leituras={leituras}>
          </ChartSimples>
          <ChartSimples
            titulo={'Umidade Relativa'}
            legenda={'Umidade Relativa (%)'}
            parametro={'umidadeRelativaSaida'}
            leituras={leituras}>
          </ChartSimples>
          <ChartSimples
            titulo={'Vazão Volumétrica do Ar'}
            legenda={'Vazão (m/s²)'}
            parametro={'vazaoVolumetricaAr'}
            leituras={leituras}>
          </ChartSimples>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#0F3553',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8
  },
});