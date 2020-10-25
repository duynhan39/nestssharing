import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: 'center'
        // backgroundColor: 'white',
        // backgroundColor: 'rgb(33, 206, 153)',
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
        textAlign: 'center',
        alignContent: 'center'
    },
    backButton: {

    },
    flex_one: {
        flex: 1,
    },
    scrollView: {
        alignSelf: 'stretch',
        backgroundColor: 'white',
        
    },
    defaultMargin: {
        marginTop:5,
        marginBottom:5,
        marginRight: 10,
        marginLeft:10,
    },
    rowMargin: {
        marginTop:15,
        marginBottom:15,
    },
    defaultPadding: {
        padding: 5,
        paddingRight: 10,
        paddingLeft: 10
    },
    text: {
        paddingLeft: 5,
        fontSize: 15,
    },
    title: {
        fontWeight: 'bold'
    },
    evenSpacing: {
        justifyContent: 'space-between',
    },
    vstack: {
        flexDirection: 'column',
    },
    hstack: {
        flexDirection: 'row',
    },
    roundedCornerBox: {
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
})

