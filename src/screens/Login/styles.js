import { StyleSheet } from 'react-native';
import { colors, spacing, fontSize } from '../../styles/theme';

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.background,
        paddingHorizontal: spacing.md,
    },

    content: {
        width: '100%',
        marginTop: 50,
        alignItems: 'center',
        gap: 20,
    },

    input: {
        flex: 1,
        color: colors.textLight,
        height: 50,
        fontSize: fontSize.md,
    },

    contentInput: {
        width: '100%',
        height: 56,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: spacing.md,
        gap: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },

    header: {
        alignSelf: 'flex-start',
        marginTop: 50,
    },

    singupLink: {
        color: colors.primary,
        fontSize: fontSize.md,
        fontWeight: 'bold',
        paddingTop: spacing.lg,
        
    },

    forgotPasswordLink:{
        color: colors.primary,
        fontSize: fontSize.md,
        fontWeight: 'bold',
        paddingTop: spacing.lg,
    },

});
