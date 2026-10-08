import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Atividades() {
    return (
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.title}>Atividades</Text>
                <Text style={styles.subtitle}>
                    Aprenda desenvolvimento mobile passo a passo
                </Text>
            </View>
            <View style={styles.content}>
                    <Text style={styles.sectionTitle}>Lista de Atividades</Text>
            
                    <Link href="/atividades/atividade-1" asChild>
                      <Pressable style={styles.card}>
                        <View style={styles.number}>
                          <Text style={styles.numberText}>01</Text>
                        </View>
            
                        <View style={styles.info}>
                          <Text style={styles.cardTitle}>
                            Contador
                          </Text>
            
                          <Text style={styles.description}>
                            Aprenda a criar e reutilizar componentes no React Native.
                          </Text>
                        </View>
                      </Pressable>
                    </Link>
                    </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    description: {
        fontSize: 14,
        color: "#666",
    },
    info: {
        flex: 1,
        paddingHorizontal: 10,
    },
    number: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "#007AFF",
        justifyContent: "center",
        alignItems: "center",
    },
    numberText: {
        color: "#fff",
        fontWeight: "bold",
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        marginVertical: 5,
        backgroundColor: "#fff",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    content: {
        padding: 20,
    },
    header: {
        padding: 20,
        backgroundColor: "#f8f8f8",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
    },
    subtitle: {
        fontSize: 16,
        color: "#666",
        marginTop: 5,
    },
});