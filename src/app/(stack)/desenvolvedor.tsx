
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function Desenvolvedor() {
    return (
        <ScrollView style={styles.container}>

            {/* Nome */}
            <View style={styles.cardName}>
                <Text style={styles.nameText}>
                    Henrique Vidotto Vinico Neto
                </Text>

                <Text style={styles.profissao}>
                    Desenvolvedor de Software
                </Text>
            </View>

            {/* Sobre mim */}
            <View style={styles.card}>
                <Text style={styles.title}>Sobre mim</Text>

                <Text style={styles.description}>
                    Olá! Meu nome é Henrique e sou desenvolvedor de software.
                    Tenho interesse em desenvolvimento de aplicações mobile,
                    web e backend. Atualmente estou desenvolvendo projetos
                    utilizando React Native e outras tecnologias.
                </Text>
            </View>

            {/* Contato */}
            <View style={styles.cardContato}>
                <Text style={styles.title}>Contato</Text>

                <Text style={styles.info}>
                    📧 henriquevidotto77@gmail.com
                </Text>

                <Text style={styles.info}>
                    📱 (15) 98831-7466
                </Text>
            </View>

            {/* Tecnologias */}
            <View style={styles.card}>
                <Text style={styles.title}>Tecnologias</Text>

                <Text style={styles.info}>⚛️ React Native</Text>
                <Text style={styles.info}>🌐 JavaScript</Text>
                <Text style={styles.info}>🟢 Node.js</Text>
                <Text style={styles.info}>🗄️ PostgreSQL</Text>
                <Text style={styles.info}>🔧 Git e GitHub</Text>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },

    cardName: {
        padding: 25,
        margin: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        borderRadius: 12,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 3,
    },

    nameText: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },

    profissao: {
        marginTop: 8,
        fontSize: 16,
        color: "#666",
    },

    card: {
        padding: 20,
        marginHorizontal: 20,
        marginBottom: 20,
        backgroundColor: "#ffffff",
        borderRadius: 12,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 4,

        elevation: 3,
    },

    cardContato: {
        padding: 20,
        marginHorizontal: 20,
        marginBottom: 20,
        backgroundColor: "#ffffff",
        borderRadius: 12,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 4,

        elevation: 3,
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 12,
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: "#555",
        textAlign: "justify",
    },

    info: {
        fontSize: 16,
        marginBottom: 10,
        color: "#444",
    },
});
