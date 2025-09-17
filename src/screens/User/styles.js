import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#161622',
        paddingHorizontal: 20,
    },

    content: {
        width: '100%',
        marginTop: 50,
        alignItems: 'center',
        gap: 20,
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 8,
    },

    contentInput: {
        width: '100%',
        height: 56,

        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        gap: 10,

        borderBottomWidth: 1,
        borderBottomColor: '#3a3a3a',

    },

    cadastroText: {
        color: '#f4f4f4',
        marginTop: 100,
        fontSize: 30,
        fontWeight: '600',
    }

})