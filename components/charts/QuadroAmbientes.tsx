import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';

export default function QuadroAmbientes({ambientes}) {
    return (
      <View style={styles.container}>
        {ambientes.map((ambiente) =>
          <View style={styles.box}>
            <Text style={styles.small}>{ambiente.nome}</Text>
            <View style={styles.innerContainer}>
              <Image style={styles.image} source={require('@/assets/images/termometro.png')}></Image>
              <Text style={[styles.large, ambiente.temperaturaAtual > ambiente.temperaturaReferencia ? styles.red : styles.yellow]}>{ambiente.temperaturaAtual}</Text>
              <Text style={styles.small}>°C</Text>
            </View>
          </View>
        )}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    rowGap: 5
  },
  box: {
    backgroundColor: '#0F162A',
    width: '48%',
    height: 60,
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '35%'
  },
  image: {
    width: 12,
    height: 12
  },
  small: {
    color: '#808080',
    fontSize: 12
  },
  large: {
    fontSize: 24,
    width: '45%',
    textAlign: 'right'
  },
  red: {
    color: '#963c4c'
  },
  yellow: {
    color: '#adaa44'
  }
});