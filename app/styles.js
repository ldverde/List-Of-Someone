import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#282A36",
    flex:1
  },
  Typi: { 
    paddingLeft:20,
    paddingRight:10,
    marginTop: 10,
    marginBottom:80
  },
  ver: {
    alignItems: "center",
  },
  bot: {
    padding: 12,
    borderRadius: 20,
    backgroundColor: "#bc70fa",
  },
  tibut: {
    fontSize: 15,
    fontFamily: "ArefRuqaa_700Bold",
    display:"swap"
  },
  titulo: {
    fontFamily: "Sunshiney_400Regular",
    fontSize: 24,
    color: "white",
    marginTop:20,
    marginBottom:10
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
    backgroundColor: "#282A36" 
  },
  rodaText: {
    fontSize:15,
    color: "white",
    fontFamily: "JosefinSans_400Regular",
    display:"swap"
  } 
});

export default styles;