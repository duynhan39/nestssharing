import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center'
    },
    defaultMargin: {
        marginTop:5,
        marginBottom:5,
        marginRight: 10,
        marginLeft:10,
    },
    vstack: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    hstack: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    text: {
        // marginTop:5,
        // marginBottom:5,
        paddingLeft: 5,
        fontSize: 15,
    },
    roundedCornerBox: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        padding: 15,
        // marginTop:5,
        // marginBottom:5,

        // borderColor: '#2a4944',
        // borderWidth: 1,
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
    title: {
        fontWeight: 'bold'
    },
    subtitle: {

    },
    logo: {
        flex: 1,
        height: 120,
        width: 120,
        alignSelf: "center",
        margin: 30
    }
})
