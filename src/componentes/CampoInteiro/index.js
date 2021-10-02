import React from 'react';

import estilosPadrao from './estilos'

import { TextInput } from 'react-native';

export default function CampoInteiro({ valor, estilos, acao }) {
    const atualiza = ( novoValor, acaoRetorno ) => {
        const verificarInteiro = novoValor.match(/^[0-9]*$/);
        if (!verificarInteiro) return;
        const removeZeroEsquerda = novoValor.replace(/^(0)(.+)/, '$2');
        acaoRetorno(removeZeroEsquerda);
    }
    const numeroEmTexto = String(valor);
    return<TextInput
        style={[estilosPadrao.campo, estilos]}
        keyboardAppearance='number-pad'
        selectTextOnFocus
        onChangeText={(novoValor) => {atualiza(novoValor, acao)}}
        value={numeroEmTexto}
    />
}