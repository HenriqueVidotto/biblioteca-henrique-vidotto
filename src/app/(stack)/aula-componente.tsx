import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default function AulaComponente() {
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const gabarito: Record<string, string> = {
    q1: 'A',
    q2: 'B',
    q3: 'B',
    q4: 'A',
    q5: 'C',
  };

  const responder = (questao: string, alternativa: string) => {
    setRespostas((estadoAtual) => ({
      ...estadoAtual,
      [questao]: alternativa,
    }));

    setMostrarResultado(false);
  };

  const calcularPontuacao = () => {
    let acertos = 0;

    Object.keys(gabarito).forEach((questao) => {
      if (respostas[questao] === gabarito[questao]) {
        acertos++;
      }
    });

    return acertos;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* =====================================================
            TÍTULO
        ====================================================== */}

        <Text style={styles.title}>
          Componentes no React Native
        </Text>

        <Text style={styles.subtitle}>
          Entendendo como criar, organizar e reutilizar componentes
        </Text>

        {/* =====================================================
            1. INTRODUÇÃO
        ====================================================== */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            1. O que são componentes?
          </Text>

          <Text style={styles.paragraph}>
            Componentes são os principais blocos utilizados para
            construir uma interface no React Native.
          </Text>

          <Text style={styles.paragraph}>
            Podemos imaginar um aplicativo como uma construção
            feita com peças de LEGO. Cada peça pode representar
            uma parte da interface.
          </Text>

          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>
              Pense desta forma:
            </Text>

            <Text style={styles.infoText}>
              Aplicativo = conjunto de componentes
            </Text>

            <Text style={styles.infoText}>
              Tela = conjunto de componentes
            </Text>

            <Text style={styles.infoText}>
              Botão = componente
            </Text>

            <Text style={styles.infoText}>
              Card = componente
            </Text>

            <Text style={styles.infoText}>
              Cabeçalho = componente
            </Text>
          </View>

          <Text style={styles.paragraph}>
            A grande vantagem é que podemos criar um componente
            uma única vez e utilizá-lo em vários lugares da
            aplicação.
          </Text>
        </View>

        {/* =====================================================
            2. COMPONENTES NATIVOS
        ====================================================== */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            2. Componentes fornecidos pelo React Native
          </Text>

          <Text style={styles.paragraph}>
            O React Native já possui diversos componentes prontos
            para utilizarmos na construção das telas.
          </Text>

          <View style={styles.componentList}>
            <Text style={styles.componentItem}>
              • View — organiza outros elementos.
            </Text>

            <Text style={styles.componentItem}>
              • Text — exibe textos.
            </Text>

            <Text style={styles.componentItem}>
              • Image — exibe imagens.
            </Text>

            <Text style={styles.componentItem}>
              • TextInput — permite digitar textos.
            </Text>

            <Text style={styles.componentItem}>
              • ScrollView — permite rolagem.
            </Text>

            <Text style={styles.componentItem}>
              • TouchableOpacity — permite interação por toque.
            </Text>
          </View>

          <Text style={styles.subTitle}>
            Exemplo:
          </Text>

          <View style={styles.codeBox}>
            <Text style={styles.code}>
{`<View>
  <Text>Olá, React Native!</Text>
</View>`}
            </Text>
          </View>

          <Text style={styles.explanation}>
            Nesse exemplo, o View funciona como um container e o
            Text é responsável por apresentar o texto.
          </Text>
        </View>

        {/* =====================================================
            3. VIEW
        ====================================================== */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            3. O componente View
          </Text>

          <Text style={styles.paragraph}>
            O View é um dos componentes mais utilizados no React
            Native. Ele funciona como um container para organizar
            outros componentes.
          </Text>

          <Text style={styles.paragraph}>
            Na Web, muitas vezes utilizamos uma div para agrupar
            elementos. No React Native, utilizamos o View para
            essa finalidade.
          </Text>

          <View style={styles.codeBox}>
            <Text style={styles.code}>
{`<View>
  <Text>Nome</Text>
  <Text>Idade</Text>
</View>`}
            </Text>
          </View>

          <Text style={styles.explanation}>
            O View não precisa necessariamente apresentar um
            texto. Ele pode apenas organizar outros componentes.
          </Text>
        </View>

        {/* =====================================================
            4. TEXT
        ====================================================== */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            4. O componente Text
          </Text>

          <Text style={styles.paragraph}>
            O Text é utilizado para exibir informações textuais
            na tela.
          </Text>

          <View style={styles.codeBox}>
            <Text style={styles.code}>
{`<Text>
  Olá! Meu primeiro aplicativo.
</Text>`}
            </Text>
          </View>

          <Text style={styles.paragraph}>
            Podemos também aplicar estilos ao componente Text.
          </Text>

          <View style={styles.codeBox}>
            <Text style={styles.code}>
{`<Text style={styles.titulo}>
  Minha aplicação
</Text>`}
            </Text>
          </View>

          <Text style={styles.explanation}>
            Diferentemente do HTML, o React Native utiliza o
            próprio componente Text para apresentar textos.
          </Text>
        </View>

        {/* =====================================================
            5. COMPONENTE PERSONALIZADO
        ====================================================== */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            5. Criando um componente personalizado
          </Text>

          <Text style={styles.paragraph}>
            Além dos componentes fornecidos pelo React Native,
            podemos criar nossos próprios componentes.
          </Text>

          <Text style={styles.paragraph}>
            Um componente personalizado normalmente é uma função
            que retorna elementos de interface.
          </Text>

          <View style={styles.codeBox}>
            <Text style={styles.code}>
{`function Saudacao() {
  return (
    <View>
      <Text>Olá, aluno!</Text>
    </View>
  );
}`}
            </Text>
          </View>

          <Text style={styles.paragraph}>
            Depois de criar o componente, podemos utilizá-lo
            dentro de outro componente.
          </Text>

          <View style={styles.codeBox}>
            <Text style={styles.code}>
{`<Saudacao />`}
            </Text>
          </View>

          <View style={styles.demoCard}>
            <Text style={styles.demoTitle}>
              Saudacao
            </Text>

            <Text style={styles.demoText}>
              Olá, aluno! Este é um componente personalizado.
            </Text>
          </View>
        </View>

        {/* =====================================================
            6. LETRA MAIÚSCULA
        ====================================================== */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            6. Por que usamos letra maiúscula?
          </Text>

          <Text style={styles.paragraph}>
            Componentes personalizados devem começar com letra
            maiúscula.
          </Text>

          <View style={styles.codeBox}>
            <Text style={styles.code}>
{`function MeuComponente() {
  return <Text>Olá!</Text>;
}`}
            </Text>
          </View>

          <Text style={styles.paragraph}>
            Depois podemos utilizar:
          </Text>

          <View style={styles.codeBox}>
            <Text style={styles.code}>
{`<MeuComponente />`}
            </Text>
          </View>

          <View style={styles.warningBox}>
            <Text style={styles.warningTitle}>
              Atenção
            </Text>

            <Text style={styles.warningText}>
              Em componentes personalizados, utilize nomes que
              começam com letra maiúscula, como MeuComponente,
              Card ou Botao.
            </Text>
          </View>
        </View>

        {/* =====================================================
            7. REUTILIZAÇÃO
        ====================================================== */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            7. Reutilizando componentes
          </Text>

          <Text style={styles.paragraph}>
            Uma das principais vantagens dos componentes é poder
            reutilizá-los.
          </Text>

          <Text style={styles.paragraph}>
            Podemos criar um componente Botao e utilizá-lo em
            diferentes partes da aplicação.
          </Text>

          <View style={styles.codeBox}>
            <Text style={styles.code}>
{`function Botao() {
  return (
    <TouchableOpacity>
      <Text>Meu botão</Text>
    </TouchableOpacity>
  );
}`}
            </Text>
          </View>

          <Text style={styles.paragraph}>
            Depois podemos utilizar o mesmo componente várias
            vezes:
          </Text>

          <View style={styles.codeBox}>
            <Text style={styles.code}>
{`<Botao />
<Botao />
<Botao />`}
            </Text>
          </View>

          <Text style={styles.explanation}>
            Dessa forma, não precisamos repetir toda a estrutura
            do botão em cada lugar da aplicação.
          </Text>

          <View style={styles.buttonDemoContainer}>
            <TouchableOpacity style={styles.demoButton}>
              <Text style={styles.demoButtonText}>
                Botão 1
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.demoButton}>
              <Text style={styles.demoButtonText}>
                Botão 2
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.demoButton}>
              <Text style={styles.demoButtonText}>
                Botão 3
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* =====================================================
            8. PROPS
        ====================================================== */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            8. Componentes e Props
          </Text>

          <Text style={styles.paragraph}>
            Um componente pode receber informações de quem está
            utilizando esse componente.
          </Text>

          <Text style={styles.paragraph}>
            Essas informações são chamadas de props, abreviação
            de properties.
          </Text>

          <Text style={styles.subTitle}>
            Exemplo sem props:
          </Text>

          <View style={styles.codeBox}>
            <Text style={styles.code}>
{`function Usuario() {
  return (
    <Text>Maria</Text>
  );
}`}
            </Text>
          </View>

          <Text style={styles.paragraph}>
            Esse componente sempre exibirá Maria. Podemos torná-lo
            mais reutilizável utilizando uma prop.
          </Text>

          <Text style={styles.subTitle}>
            Exemplo com props:
          </Text>

          <View style={styles.codeBox}>
            <Text style={styles.code}>
{`function Usuario({ nome }) {
  return (
    <Text>{nome}</Text>
  );
}`}
            </Text>
          </View>

          <Text style={styles.paragraph}>
            Agora podemos enviar diferentes nomes:
          </Text>

          <View style={styles.codeBox}>
            <Text style={styles.code}>
{`<Usuario nome="Maria" />
<Usuario nome="João" />
<Usuario nome="Carlos" />`}
            </Text>
          </View>

          <View style={styles.demoCard}>
            <Text style={styles.demoTitle}>
              Exemplos de Props
            </Text>

            <Text style={styles.demoText}>
              Usuario nome="Maria"
            </Text>

            <Text style={styles.demoText}>
              Usuario nome="João"
            </Text>

            <Text style={styles.demoText}>
              Usuario nome="Carlos"
            </Text>
          </View>
        </View>

        {/* =====================================================
            9. PROPS COM TYPESCRIPT
        ====================================================== */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            9. Props com TypeScript
          </Text>

          <Text style={styles.paragraph}>
            Como estamos utilizando TypeScript, podemos informar
            qual é o tipo das propriedades que o componente
            receberá.
          </Text>

          <View style={styles.codeBox}>
            <Text style={styles.code}>
{`type UsuarioProps = {
  nome: string;
};

function Usuario({ nome }: UsuarioProps) {
  return (
    <Text>{nome}</Text>
  );
}`}
            </Text>
          </View>

          <Text style={styles.explanation}>
            Nesse exemplo, informamos que a prop nome deve ser
            um texto, ou seja, uma string.
          </Text>

          <View style={styles.codeBox}>
            <Text style={styles.code}>
{`<Usuario nome="Maria" />`}
            </Text>
          </View>
        </View>

        {/* =====================================================
            10. EXEMPLO COMPLETO
        ====================================================== */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            10. Exemplo completo de componente
          </Text>

          <Text style={styles.paragraph}>
            Agora podemos juntar os conceitos aprendidos e criar
            um componente Card reutilizável.
          </Text>

          <View style={styles.codeBox}>
            <Text style={styles.code}>
{`type CardProps = {
  titulo: string;
  descricao: string;
};

function Card({
  titulo,
  descricao,
}: CardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>
        {titulo}
      </Text>

      <Text>
        {descricao}
      </Text>
    </View>
  );
}`}
            </Text>
          </View>

          <Text style={styles.paragraph}>
            Podemos utilizar esse componente passando diferentes
            valores para suas props.
          </Text>

          <View style={styles.codeBox}>
            <Text style={styles.code}>
{`<Card
  titulo="React Native"
  descricao="Framework para aplicativos móveis."
/>

<Card
  titulo="Componentes"
  descricao="Blocos reutilizáveis da interface."
/>`}
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              React Native
            </Text>

            <Text style={styles.cardText}>
              Framework para desenvolvimento de aplicativos
              móveis.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Componentes
            </Text>

            <Text style={styles.cardText}>
              Blocos reutilizáveis utilizados para construir
              interfaces.
            </Text>
          </View>
        </View>

        {/* =====================================================
            11. COMPONENTE DENTRO DE COMPONENTE
        ====================================================== */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            11. Componentes podem utilizar outros componentes
          </Text>

          <Text style={styles.paragraph}>
            Uma tela pode ser composta por vários componentes
            menores.
          </Text>

          <View style={styles.codeBox}>
            <Text style={styles.code}>
{`function TelaPrincipal() {
  return (
    <View>
      <Cabecalho />
      <Perfil />
      <Lista />
      <Botao />
    </View>
  );
}`}
            </Text>
          </View>

          <Text style={styles.paragraph}>
            Nesse exemplo, TelaPrincipal é um componente que
            utiliza outros componentes.
          </Text>

          <View style={styles.componentTree}>
            <Text style={styles.treeTitle}>
              Estrutura da tela
            </Text>

            <Text style={styles.treeText}>
              TelaPrincipal
            </Text>

            <Text style={styles.treeChild}>
              ├── Cabecalho
            </Text>

            <Text style={styles.treeChild}>
              ├── Perfil
            </Text>

            <Text style={styles.treeChild}>
              ├── Lista
            </Text>

            <Text style={styles.treeChild}>
              └── Botao
            </Text>
          </View>

          <Text style={styles.explanation}>
            Essa composição de pequenos componentes facilita a
            organização e a manutenção da aplicação.
          </Text>
        </View>

        {/* =====================================================
            12. COMPONENTES REUTILIZÁVEIS
        ====================================================== */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            12. Por que reutilizar componentes?
          </Text>

          <Text style={styles.paragraph}>
            Imagine que seu aplicativo tenha 20 botões iguais.
            Sem componentes reutilizáveis, poderíamos acabar
            repetindo muito código.
          </Text>

          <Text style={styles.paragraph}>
            Com um componente Botao, podemos criar a estrutura
            uma única vez e reutilizá-la.
          </Text>

          <View style={styles.benefitBox}>
            <Text style={styles.benefit}>
              ✓ Menos código repetido
            </Text>

            <Text style={styles.benefit}>
              ✓ Melhor organização
            </Text>

            <Text style={styles.benefit}>
              ✓ Fácil manutenção
            </Text>

            <Text style={styles.benefit}>
              ✓ Componentes reutilizáveis
            </Text>

            <Text style={styles.benefit}>
              ✓ Código mais fácil de entender
            </Text>
          </View>
        </View>

        {/* =====================================================
            RESUMO
        ====================================================== */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Resumo da aula
          </Text>

          <View style={styles.summaryBox}>
            <Text style={styles.summaryText}>
              Componentes são blocos utilizados para construir
              interfaces.
            </Text>

            <Text style={styles.summaryText}>
              View organiza elementos.
            </Text>

            <Text style={styles.summaryText}>
              Text apresenta textos.
            </Text>

            <Text style={styles.summaryText}>
              Podemos criar nossos próprios componentes.
            </Text>

            <Text style={styles.summaryText}>
              Componentes personalizados podem ser reutilizados.
            </Text>

            <Text style={styles.summaryText}>
              Props permitem enviar informações para componentes.
            </Text>

            <Text style={styles.summaryText}>
              Uma tela pode ser formada por vários componentes.
            </Text>
          </View>
        </View>

        {/* =====================================================
            QUESTIONÁRIO
        ====================================================== */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Questionário de Fixação
          </Text>

          {/* Questão 1 */}

          <Text style={styles.question}>
            1. O que são componentes no React Native?
          </Text>

          <TouchableOpacity
            style={[
              styles.option,
              respostas.q1 === 'A' && styles.selectedOption,
            ]}
            onPress={() => responder('q1', 'A')}
          >
            <Text>
              A) Blocos de construção reutilizáveis da interface.
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.option,
              respostas.q1 === 'B' && styles.selectedOption,
            ]}
            onPress={() => responder('q1', 'B')}
          >
            <Text>
              B) Apenas bancos de dados do aplicativo.
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.option,
              respostas.q1 === 'C' && styles.selectedOption,
            ]}
            onPress={() => responder('q1', 'C')}
          >
            <Text>
              C) Apenas arquivos de configuração.
            </Text>
          </TouchableOpacity>

          {/* Questão 2 */}

          <Text style={styles.question}>
            2. Qual componente é utilizado como container?
          </Text>

          <TouchableOpacity
            style={[
              styles.option,
              respostas.q2 === 'A' && styles.selectedOption,
            ]}
            onPress={() => responder('q2', 'A')}
          >
            <Text>A) Text</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.option,
              respostas.q2 === 'B' && styles.selectedOption,
            ]}
            onPress={() => responder('q2', 'B')}
          >
            <Text>B) View</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.option,
              respostas.q2 === 'C' && styles.selectedOption,
            ]}
            onPress={() => responder('q2', 'C')}
          >
            <Text>C) Image</Text>
          </TouchableOpacity>

          {/* Questão 3 */}

          <Text style={styles.question}>
            3. Para que servem as props?
          </Text>

          <TouchableOpacity
            style={[
              styles.option,
              respostas.q3 === 'A' && styles.selectedOption,
            ]}
            onPress={() => responder('q3', 'A')}
          >
            <Text>
              A) Para substituir os componentes.
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.option,
              respostas.q3 === 'B' && styles.selectedOption,
            ]}
            onPress={() => responder('q3', 'B')}
          >
            <Text>
              B) Para passar informações para componentes.
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.option,
              respostas.q3 === 'C' && styles.selectedOption,
            ]}
            onPress={() => responder('q3', 'C')}
          >
            <Text>
              C) Para criar automaticamente uma tela.
            </Text>
          </TouchableOpacity>

          {/* Questão 4 */}

          <Text style={styles.question}>
            4. Qual componente é utilizado para exibir textos?
          </Text>

          <TouchableOpacity
            style={[
              styles.option,
              respostas.q4 === 'A' && styles.selectedOption,
            ]}
            onPress={() => responder('q4', 'A')}
          >
            <Text>A) Text</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.option,
              respostas.q4 === 'B' && styles.selectedOption,
            ]}
            onPress={() => responder('q4', 'B')}
          >
            <Text>B) View</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.option,
              respostas.q4 === 'C' && styles.selectedOption,
            ]}
            onPress={() => responder('q4', 'C')}
          >
            <Text>C) Container</Text>
          </TouchableOpacity>

          {/* Questão 5 */}

          <Text style={styles.question}>
            5. Qual é uma vantagem de criar componentes
            reutilizáveis?
          </Text>

          <TouchableOpacity
            style={[
              styles.option,
              respostas.q5 === 'A' && styles.selectedOption,
            ]}
            onPress={() => responder('q5', 'A')}
          >
            <Text>
              A) Tornar o código maior e mais repetitivo.
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.option,
              respostas.q5 === 'B' && styles.selectedOption,
            ]}
            onPress={() => responder('q5', 'B')}
          >
            <Text>
              B) Impedir que componentes sejam reutilizados.
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.option,
              respostas.q5 === 'C' && styles.selectedOption,
            ]}
            onPress={() => responder('q5', 'C')}
          >
            <Text>
              C) Reutilizar código e melhorar a organização.
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => setMostrarResultado(true)}
          >
            <Text style={styles.submitButtonText}>
              Ver Resultado
            </Text>
          </TouchableOpacity>

          {mostrarResultado && (
            <View style={styles.resultContainer}>
              <Text style={styles.resultText}>
                Você acertou {calcularPontuacao()} de 5 perguntas!
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* ============================================================
   ESTILOS
============================================================ */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8FC',
  },

  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1D3557',
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    color: '#607080',
    textAlign: 'center',
    lineHeight: 21,
    marginBottom: 20,
  },

  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#E3E8EF',
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 12,
  },

  subTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#263238',
    marginTop: 10,
    marginBottom: 8,
  },

  paragraph: {
    fontSize: 16,
    color: '#455A64',
    lineHeight: 25,
    marginBottom: 12,
  },

  explanation: {
    fontSize: 15,
    color: '#546E7A',
    lineHeight: 23,
    marginTop: 10,
    fontStyle: 'italic',
  },

  infoBox: {
    backgroundColor: '#EAF3FF',
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
  },

  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 8,
  },

  infoText: {
    fontSize: 15,
    color: '#24527A',
    lineHeight: 24,
  },

  componentList: {
    backgroundColor: '#F7F9FB',
    borderRadius: 8,
    padding: 14,
    marginBottom: 12,
  },

  componentItem: {
    fontSize: 15,
    color: '#37474F',
    lineHeight: 27,
  },

  codeBox: {
    backgroundColor: '#1E293B',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
  },

  code: {
    color: '#E2E8F0',
    fontSize: 13,
    lineHeight: 20,
    fontFamily: 'monospace',
  },

  demoCard: {
    backgroundColor: '#F0F7FF',
    borderWidth: 1,
    borderColor: '#B8D8FF',
    borderRadius: 10,
    padding: 15,
    marginTop: 12,
  },

  demoTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#005BBB',
    marginBottom: 7,
  },

  demoText: {
    fontSize: 15,
    color: '#455A64',
    lineHeight: 23,
  },

  warningBox: {
    backgroundColor: '#FFF8E1',
    borderLeftWidth: 4,
    borderLeftColor: '#FFB300',
    borderRadius: 8,
    padding: 14,
    marginTop: 12,
  },

  warningTitle: {
    fontWeight: 'bold',
    color: '#8D6E00',
    fontSize: 16,
    marginBottom: 5,
  },

  warningText: {
    color: '#6D5A00',
    fontSize: 15,
    lineHeight: 22,
  },

  buttonDemoContainer: {
    marginTop: 12,
    gap: 8,
  },

  demoButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  demoButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#DDE4EC',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1D3557',
    marginBottom: 6,
  },

  cardText: {
    fontSize: 15,
    color: '#546E7A',
    lineHeight: 22,
  },

  componentTree: {
    backgroundColor: '#263238',
    borderRadius: 8,
    padding: 15,
    marginTop: 10,
  },

  treeTitle: {
    color: '#90CAF9',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },

  treeText: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 25,
  },

  treeChild: {
    color: '#B0BEC5',
    fontSize: 15,
    lineHeight: 25,
    marginLeft: 12,
  },

  benefitBox: {
    backgroundColor: '#E8F5E9',
    borderRadius: 8,
    padding: 15,
    marginTop: 8,
  },

  benefit: {
    color: '#2E7D32',
    fontSize: 15,
    lineHeight: 27,
  },

  summaryBox: {
    backgroundColor: '#EAF3FF',
    borderRadius: 8,
    padding: 15,
  },

  summaryText: {
    fontSize: 15,
    color: '#24527A',
    lineHeight: 26,
    marginBottom: 5,
  },

  question: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#263238',
    lineHeight: 23,
    marginTop: 15,
    marginBottom: 8,
  },

  option: {
    backgroundColor: '#FFFFFF',
    padding: 13,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D5DDE5',
    marginVertical: 4,
  },

  selectedOption: {
    backgroundColor: '#D9F2E3',
    borderColor: '#52B788',
  },

  submitButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 25,
  },

  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  resultContainer: {
    marginTop: 15,
    padding: 15,
    backgroundColor: '#E8F5E9',
    borderRadius: 8,
    alignItems: 'center',
  },

  resultText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
});
