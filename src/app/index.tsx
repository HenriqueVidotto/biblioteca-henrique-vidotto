import { Link } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.logo}>Biblioteca</Text>

        <Text style={styles.subtitle}>
          Seu conhecimento começa aqui.
        </Text>
      </View>

      {/* Acesso */}
      <View style={styles.authContainer}>

        {/* Entrar */}
        <Link href="/login" asChild>
          <Pressable style={styles.loginButton}>
            <Text style={styles.loginText}>Entrar</Text>
          </Pressable>
        </Link>

        {/* Criar conta */}
        <Link href="/register" asChild>
          <Pressable style={styles.registerButton}>
            <Text style={styles.registerText}>Criar conta</Text>
          </Pressable>
        </Link>

        {/* Chat */}
        <Link href="/chat" asChild>
          <Pressable style={styles.chatButton}>
            <Text style={styles.chatText}>Chat</Text>
          </Pressable>
        </Link>

      </View>

      {/* História do dia */}
      <View style={styles.dailyCard}>
        <Text style={styles.sectionTitle}>
          História do dia
        </Text>

        <Text style={styles.dailyText}>
          "Um bom livro pode levar você para lugares que nunca imaginou
          conhecer."
        </Text>

        <Text style={styles.dailyAuthor}>
          — Reflexão do dia
        </Text>
      </View>

      {/* Menu principal */}
      <Text style={styles.menuTitle}>
        Biblioteca
      </Text>

      <View style={styles.grid}>

        {/* Recomendações */}
        <Link href="/recomendacao" asChild>
          <Pressable style={styles.card}>
            <Text style={styles.icon}>★</Text>

            <Text style={styles.cardTitle}>
              Recomendações
            </Text>

            <Text style={styles.cardDescription}>
              Descubra novos livros
            </Text>
          </Pressable>
        </Link>
         <Link href="/pomodoro" asChild>
          <Pressable style={styles.card}>
            <Text style={styles.icon}></Text>

            <Text style={styles.cardTitle}>
              Cantinho de Estudo
            </Text>

            <Text style={styles.cardDescription}>
             Reserve um tempo para estudo
            </Text>
          </Pressable>
        </Link>

        {/* Acervo */}
        <Link href="/acervo" asChild>
          <Pressable style={styles.card}>
            <Text style={styles.icon}>▣</Text>

            <Text style={styles.cardTitle}>
              Acervo
            </Text>

            <Text style={styles.cardDescription}>
              Explore nossa coleção
            </Text>
          </Pressable>
        </Link>

        {/* Reservar */}
        <Link href="/reserva" asChild>
          <Pressable style={styles.card}>
            <Text style={styles.icon}>✓</Text>

            <Text style={styles.cardTitle}>
              Reservar livros
            </Text>

            <Text style={styles.cardDescription}>
              Faça sua reserva
            </Text>
          </Pressable>
        </Link>

        {/* Aulas */}
        <Link href="/aulas" asChild>
          <Pressable style={styles.card}>
            <Text style={styles.icon}>▸</Text>

            <Text style={styles.cardTitle}>
              Aulas Mobile
            </Text>

            <Text style={styles.cardDescription}>
              Aprenda desenvolvimento
            </Text>
          </Pressable>
        </Link>
         {/* Aulas */}
        <Link href="/atividades" asChild>
          <Pressable style={styles.card}>
            <Text style={styles.icon}>▸</Text>

            <Text style={styles.cardTitle}>
              Atividades
            </Text>

            <Text style={styles.cardDescription}>
              Atividades feitas em aulas
            </Text>
          </Pressable>
        </Link>
         {/* Desenvolvedor */}
        <Link href="/desenvolvedor" asChild>
          <Pressable style={styles.card}>
            <Text style={styles.icon}>▸</Text>

            <Text style={styles.cardTitle}>
              Desenvolvedor
            </Text>

            <Text style={styles.cardDescription}>
              BIO do desenvolvedor
            </Text>
          </Pressable>
        </Link>
        

      </View>

      {/* Rodapé */}
      <View style={styles.footer}>

        <Text style={styles.footerText}>
          Biblioteca Digital
        </Text>

        <Text style={styles.footerSubtext}>
          Conhecimento para todos.
        </Text>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },

  /* HEADER */

  header: {
    backgroundColor: "#263238",
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 24,
  },

  logo: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#CFD8DC",
    fontSize: 15,
    marginTop: 6,
  },

  /* BOTÕES */

  authContainer: {
    flexDirection: "row",
    gap: 10,
    padding: 20,
  },

  loginButton: {
    flex: 1,
    backgroundColor: "#1976D2",
    paddingVertical: 13,
    borderRadius: 8,
    alignItems: "center",
  },

  loginText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },

  registerButton: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#1976D2",
    paddingVertical: 13,
    borderRadius: 8,
    alignItems: "center",
  },

  registerText: {
    color: "#1976D2",
    fontSize: 15,
    fontWeight: "bold",
  },

  /* CHAT */

  chatButton: {
    flex: 1,
    backgroundColor: "#7E8EF8",
    paddingVertical: 13,
    borderRadius: 8,
    alignItems: "center",
  },

  chatText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },

  /* HISTÓRIA */

  dailyCard: {
    backgroundColor: "#FFF8E1",
    marginHorizontal: 20,
    marginBottom: 25,
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 5,
    borderLeftColor: "#FFB300",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#5D4037",
    marginBottom: 12,
  },

  dailyText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#4E342E",
    fontStyle: "italic",
  },

  dailyAuthor: {
    marginTop: 10,
    color: "#795548",
    fontSize: 13,
  },

  /* MENU */

  menuTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#263238",
    marginHorizontal: 20,
    marginBottom: 15,
  },

  /* CARDS */

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  card: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    padding: 18,
    marginBottom: 14,
    borderRadius: 12,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,

    elevation: 2,
  },

  icon: {
    fontSize: 26,
    color: "#1976D2",
    marginBottom: 12,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#263238",
    marginBottom: 6,
  },

  cardDescription: {
    fontSize: 13,
    lineHeight: 18,
    color: "#78909C",
  },

  /* RODAPÉ */

  footer: {
    alignItems: "center",
    paddingVertical: 30,
  },

  footerText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#546E7A",
  },

  footerSubtext: {
    fontSize: 12,
    color: "#90A4AE",
    marginTop: 4,
  },
});