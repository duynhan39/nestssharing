import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(33, 206, 153)',
    },
    insideContainer: {
        flex: 1,
        paddingBottom: 5,
        paddingTop: 5,
    },
    header: {
        padding: 10,
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: "center",
    },
    headerText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 35,
    },
    scrollView: {
        alignSelf: 'stretch',
        // backgroundColor: '#D3D3D3',        
    },
    defaultMargin: {
        marginTop:5,
        marginBottom:5,
        marginRight: 10,
        marginLeft:10,
    },
    text: {
        paddingLeft: 5,
        fontSize: 15,
    },
    vstack: {
        flexDirection: 'column',
    },
    hstack: {
        flexDirection: 'row',
    },
    text: {
        paddingLeft: 5,
        fontSize: 15,
    },
    roundedCornerBox: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    shadowbox: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.12,
        shadowRadius: 8.30,

        elevation: 13,
    },
    modal: {
        // width: 100,
        // flexDirection:'row', 
        // width: '100%',
        // flex:0.5,
        // width: '80%',

        // justifyContent:'center'
    },
    modalContent: {
        // flexDirection:'row', 
        // flex:0.5,
        // width: 300,//'100%',
        width: '80%',
    }
})
