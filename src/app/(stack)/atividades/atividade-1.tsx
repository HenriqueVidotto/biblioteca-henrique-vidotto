import { StyleSheet, Text, View, Button } from 'react-native';
import { useEffect, useState} from 'react';



export default function Atividade1() {

  const [contar,setContar] = useState(0);

function pressionarContar(){
  setContar(contar + 1);
}
function pressionarSubtrair(){
   setContar(contar - 1);
}


  return (
    <View style={styles.container}>
     <Text>{contar} </Text>

     <Button  title="CONTAR +1" onPress={pressionarContar}/>
      <Button   title="CONTAR -1" onPress={pressionarSubtrair}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  

});
