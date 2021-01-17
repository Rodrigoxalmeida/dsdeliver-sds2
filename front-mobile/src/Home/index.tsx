import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { RectButton } from 'react-native-gesture-handler';

function Home() {

    let [fontsLoaded] = useFonts({
        OpenSans_400Regular,
        OpenSans_700Bold
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    const handleOnPress = () => {

    }

    return (
        <>
            <View style={styles.container}>
                <Image source={require('../assets/deliveryman.png')} />
                <Text style={styles.title}>Acompanhe os pedidos e {'\n'} entregue no prazo!</Text>
                <Text style={styles.subTitle}>Receba todos os pedidos do seu {'\n'} restaurante na palma da sua mão</Text>
            </View>

            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={handleOnPress}>
                    <Text style={styles.buttonText}>VER PEDIDOS</Text>
                </RectButton>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    container: {
        marginTop: '15%',
        alignItems: 'center'
    },
    title: {
        color: '#263238',
        fontSize: 26,
        lineHeight: 35,
        fontWeight: 'bold',
        marginTop: 31,
        marginLeft: 10,
        textAlign: 'center'
    },
    subTitle: {
        color: '#9E9E9E',
        fontSize: 16,
        marginTop: 15,
        lineHeight: 22,
        marginLeft: 10,
        textAlign: 'center'
    },
    footer: {
        marginTop: '5%',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#DA5C5C',
        flexDirection: 'row',
        borderRadius: 10
    },
    buttonText: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
        letterSpacing: -0.24
    }
});

export default Home;
