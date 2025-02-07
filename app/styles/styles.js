import { StyleSheet } from 'react-native';

export const Theme = {
    bgColor:"#000",
    mainColor:"#6e0e08",
    textColor:"#fff",
    secondaryColor:"#2e2b2b",
    rippleColor:"#787d79",
    lowerColor:"#aeb5b0",
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Theme.bgColor,
    alignItems:"center",
    justifyContent:"center",
    width:"100vw",
  },
  text: {
    fontSize: 18,
    color: Theme.textColor,
  },
  rippleContainer : {
    backgroundColor:Theme.secondaryColor,
    borderRadius:10,
    width:"100%",
    overflow:"hidden",
    marginTop:10,
    borderLeftWidth:15,
    borderLeftColor:Theme.mainColor
  },

  button: {
    padding:20,
    width:"100%"
  },

  heading:{
    fontSize:24,
    fontWeight:"500"
  },

  lowColorText:{
    color:Theme.lowerColor,
    marginTop:10
  },
  cardContainer:{
    backgroundColor:Theme.secondaryColor,
    borderRadius:10,
    overflow:"hidden",
    marginTop:10,
    width:"100%"
  },

        //   Scrollview111

    scrollView:{
        minHeight:"100%",
        width:"100vw",
        flex:1,
        backgroundColor:Theme.mainColor
    },

    lowMargin:{
        marginTop:0
    },

    lowFontSize: {
        fontSize:18,
        fontWeight:"500"
    },

    topicCard: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        position:"relative",
        width:"100vw"
      },

    right:{
        position:"absolute",
        width:20,
        height:20,
        right:5,
        top:0,
        bottom:0,
        height:"100%",
        alignItems:"center",
        justifyContent:"end",
        flexDirection:"row",
    },

    arrowRight:{
        fontSize:30,
        fontWeight:"500",
        color:Theme.mainColor,
    },

    answerContainer: {
      padding: 10,
      backgroundColor: Theme.secondaryColor,
      marginTop: 10,
      borderRadius: 5,
    },
    bulletPointsContainer: {
      marginVertical: 5,
    },
    bulletPoint: {
      color: Theme.textColor,
      marginLeft: 8,
      marginTop:5,
      fontSize:15
    },
    toggleButton: {
      alignSelf: 'center',
      marginTop: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: Theme.mainColor,
      borderRadius: 5,
    },
    questionContainer: {
      marginBottom: 10,
    },

    answer:{
      color: Theme.lowerColor,
      fontSize: 18,
      borderTopColor:Theme.lowerColor,
      borderTopWidth: 1,
      marginTop:5,
      paddingTop:5
    }
});
