import React from 'react';
import { FlatList} from 'react-native';
import TelaPadrao from '../../componentes/TelaPadrao';
import Item from './Item';

const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.90,
        descricao: "NÃO DÊ BANHO NO SEU GATO, mas se precisar nós damos por você.",
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 89.9,
        descricao: "Uma dose da vacina V4. Seu gato precisa de duas.",
    },
    {
        id: 3,
        nome: "Vacina Antirrábica",
        preco: 99.9,
        descricao: "Uma dose da vacina antirrábica, seu gato precisa de uma por ano.",
    }
]

export default function Servicos() {
    return <TelaPadrao>
        <FlatList
            data={servicos}
            renderItem={({item}) => <Item{ ...item }/>}
            keyExtractor={({id}) => String(id)}
        />
    </TelaPadrao>
}