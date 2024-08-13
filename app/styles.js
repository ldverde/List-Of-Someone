import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#282A36",
    flex:1
  },
  Typi: { 
    paddingLeft:20,
    paddingRight:10,
    marginTop: 30,
  },
  ver: {
    alignItems: "center",
    marginTop: 150,
  },
  bot: {
    padding: 12,
    borderRadius: 20,
    backgroundColor: "#bc70fa",
  },
  tibut: {
    fontSize: 18,
    fontFamily: "ArefRuqaa_700Bold",
    display:"swap"
  },
  titulo: {
    fontFamily: "Sunshiney_400Regular",
    fontSize: 40,
    color: "white",
    display:"swap"
  },
  Vimg: {
    width: 380,
    height: 200,
    marginBottom: 30,
  },
  img: {
    width: 380,
    height: 200,
  },
  rodaPe: {
    borderRadius:20,
    height:50,
    justifyContent:'center',
    alignItems: "center",
    backgroundColor: "#282A36", position: 'absolute', left: 0, right: 0, bottom: 0
  },
  rodaText: {
    fontSize:15,
    color: "white",
    fontFamily: "JosefinSans_400Regular",
    display:"swap"
  },
  scroll:{
    backgroundColor:'#282A36'
  }
});

export default styles;