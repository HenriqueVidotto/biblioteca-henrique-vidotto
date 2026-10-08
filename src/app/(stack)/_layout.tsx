import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="aula-componente" />
      <Stack.Screen name="aula-rotas" />
      <Stack.Screen name="recomendacao" />
      <Stack.Screen name="desenvolvedor" />
      <Stack.Screen name="pomodoro" />
      <Stack.Screen name="atividades" />
      <Stack.Screen name="atividades/atividade-1" />
    </Stack>
  );
}
