import * as inputStyles from './styles';
import { useState, KeyboardEvent } from 'react';

type Props = {
    handleAddTask: (taskName: string) => void
}

export const Input = ({handleAddTask}: Props) => {

    const [inputText, setInputText] = useState('')

    const handleKeyUp = (event: KeyboardEvent) => {
        if(event.code === 'Enter' && inputText !== '') {
            handleAddTask(inputText)
            setInputText('')
        }
    }

    return (
        <inputStyles.Container>
            <div className='image'>➕</div>
            <input
                type='text'
                placeholder='Adicione uma Tarefa'
                value={inputText}
                onChange={event => setInputText(event.target.value)}
                onKeyUp={handleKeyUp}
            />
        </inputStyles.Container>
    )
}