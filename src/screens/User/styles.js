import { StyleSheet, Dimensions, PixelRatio } from 'react-native';
import { colors, spacing, fontSize } from '../../styles/theme';

const { width, height } = Dimensions.get('window');

// Função para escalar tamanhos com base na largura da tela
const scale = size => (width / 375) * size; // 375 é uma largura de referência (ex: iPhone 6/7/8)
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.background,
        paddingHorizontal: moderateScale(spacing.md), // Usar escala moderada para padding
    },

    content: {
        width: '100%',
        marginTop: height * 0.06, // 6% da altura da tela
        alignItems: 'center',
        gap: moderateScale(20), // Escalar o gap
    },

    input: {
        flex: 1,
        color: colors.textLight,
        height: moderateScale(50), // Escalar a altura
        fontSize: moderateScale(fontSize.md), // Escalar o tamanho da fonte
    },

    contentInput: {
        width: '100%',
        height: moderateScale(56), // Escalar a altura
        borderRadius: moderateScale(15), // Escalar o border radius
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: moderateScale(spacing.md),
        gap: moderateScale(10),
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },

    header: {
        alignSelf: 'flex-start',
        marginTop: height * 0.06, // 6% da altura da tela
    },

    singupLink: {
        color: colors.primary,
        fontSize: moderateScale(fontSize.md),
        fontWeight: 'bold',
        paddingTop: moderateScale(spacing.lg),
        
    },

    forgotPasswordLink:{
        color: colors.primary,
        fontSize: moderateScale(fontSize.md),
        fontWeight: 'bold',
        paddingTop: moderateScale(spacing.lg),
    },

});
