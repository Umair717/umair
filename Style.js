import { StyleSheet } from "react-native";

const ApiStyle = StyleSheet.create({
  mainContainer: {
  flex: 1,
  alignItems:'center'
  },
  cardContainer: {
   width:'95%',
    
    marginVertical:5,
    paddingVertical: 20,
    paddingHorizontal:20,
    borderRadius:20,
    shadowOffset:{
      width:0,
      height:0,
    },
    shadowOpacity:1,
    shadowRadius:0,
    elevation:5,

  },
  cardImage:{
    height:300,
    width: '100%',
    borderRadius:20,
    
  },
  CardTitle:{
    color:'blue',
    fontSize:18,
    textAlign:'center'
  },
  ScrollViewStyle:{

  }
});

export{ApiStyle};