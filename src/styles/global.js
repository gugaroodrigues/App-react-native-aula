// src/styles/global.js
import { StyleSheet } from 'react-native';
import { colors, spacing, fontSize } from './theme';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: spacing.xs,
        alignItems: 'center',
    },
    title: {
        color: colors.textLight,
        fontSize: fontSize.xl,
        fontWeight: '600',
        marginTop: 70,
        marginBottom: spacing.lg,
    
    },
    text: {
        color: colors.textLight,
        fontSize: fontSize.md,
    },
    button: {
        backgroundColor: colors.textDark,
        width: '100%',
        height: 56,
        borderRadius: 15,
        marginTop: spacing.lg,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonSingUp:{
        backgroundColor: colors.background2,
        width: '100%',
        height: 56,
        borderRadius: 15,
        marginTop: spacing.lg,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    buttonText: {
        color: '#fff',
        fontSize: fontSize.lg,
        fontWeight: 'bold',
    },
    buttonDisabled: {
        backgroundColor: colors.gray,
        opacity: 0.6,
    },
    contentButton: {
        flexDirection: 'column',

    }
});
