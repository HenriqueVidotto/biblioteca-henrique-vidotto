import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useEffect, useState } from 'react';

export default function Pomodoro() {

    const [segundos, setSegundos] = useState(1200);
    const [estado, setEstado] = useState(false);

    useEffect(() => {

        if (!estado) {
            return;
        }

        const interval = setInterval(() => {

            setSegundos(current => {

                if (current <= 1) {
                    clearInterval(interval);
                    setEstado(false);
                    return 0;
                }

                return current - 1;
            });

        }, 1000);

        return () => {
            clearInterval(interval);
        };

    }, [estado]);


    function reiniciar() {
        setSegundos(1200);
        setEstado(false);
    }


    function iniciar() {
        setEstado(true);
    }


    function formatarTempo(segundos: number) {

        const minutos = Math.floor(segundos / 60);

        const segundosRestantes = segundos % 60;

        return `${String(minutos).padStart(2, '0')}:${String(
            segundosRestantes
        ).padStart(2, '0')}`;
    }

    return (
        <View style={styles.container}>

            <View style={styles.card}>

                <Text style={styles.titulo}>
                    Pomodoro
                </Text>
                <Text style={styles.subtitulo}>
                    Organize seu tempo e mantenha o foco
                </Text>
                <View style={styles.timerContainer}>

                    <Text style={styles.timer}>
                        {formatarTempo(segundos)}
                    </Text>

                </View>


                <View style={styles.botoes}>


                    <Pressable
                        style={styles.botaoReiniciar}
                        onPress={reiniciar}
                    >
                        <Text style={styles.textoReiniciar}>
                            Reiniciar
                        </Text>
                    </Pressable>

                    <Pressable
                        style={styles.botaoIniciar}
                        onPress={iniciar}
                    >
                        <Text style={styles.textoIniciar}>
                            {estado ? 'Executando' : 'Iniciar'}
                        </Text>
                    </Pressable>

                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F6F8',

        justifyContent: 'center',
        alignItems: 'center',

        padding: 20,
    },

    card: {
        width: '100%',
        maxWidth: 500,

        backgroundColor: '#FFFFFF',

        borderRadius: 16,

        padding: 30,

        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 5,
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',

        color: '#172B3A',

        marginBottom: 6,
    },

    subtitulo: {
        fontSize: 15,

        color: '#78909C',

        marginBottom: 30,

        textAlign: 'center',
    },

    timerContainer: {
        width: 220,
        height: 220,

        borderWidth: 8,
        borderColor: '#F5B800',

        borderRadius: 110,

        justifyContent: 'center',
        alignItems: 'center',

        marginBottom: 30,
    },

    timer: {
        fontSize: 48,

        fontWeight: 'bold',

        color: '#172B3A',
    },

    // Container dos botões
    botoes: {
        flexDirection: 'row',

        width: '100%',

        gap: 12,
    },

    botaoReiniciar: {
        flex: 1,

        paddingVertical: 14,

        backgroundColor: '#FFFFFF',

        borderWidth: 1,
        borderColor: '#D9E0E5',

        borderRadius: 10,

        alignItems: 'center',
    },

    botaoIniciar: {
        flex: 1,

        paddingVertical: 14,

        backgroundColor: '#1976D2',

        borderRadius: 10,

        alignItems: 'center',
    },

    textoReiniciar: {
        fontSize: 16,

        fontWeight: 'bold',

        color: '#455A64',
    },


    textoIniciar: {
        fontSize: 16,

        fontWeight: 'bold',

        color: '#FFFFFF',
    },

});