// src/styles/global.js
import { StyleSheet } from 'react-native';
import { colors, spacing, fontSize } from './theme';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: spacing.md,
        alignItems: 'center',
    },
    title: {
        color: colors.textLight,
        fontSize: fontSize.xl,
        fontWeight: '600',
        marginTop: spacing.xl,
        marginBottom: spacing.lg,
    },
    text: {
        color: colors.textLight,
        fontSize: fontSize.md,
    },
    button: {
        backgroundColor: colors.primary,
        width: '100%',
        height: 56,
        borderRadius: 20,
        marginTop: spacing.lg,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: fontSize.lg,
        fontWeight: 'bold',
    },
});
