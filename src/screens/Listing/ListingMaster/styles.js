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
        padding: 5,
        paddingTop: 0,
        paddingBottom: 5,
        justifyContent: "center",
    },
    headerText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 35,
    },
    headlineText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
    },
    scrollView: {
        alignSelf: 'stretch',
        backgroundColor: 'white',
        // backgroundColor: 'rgb(230, 230, 230)',        
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
    }
})
