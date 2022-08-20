import * as ItensStyles from './styles';
import { Item } from '../../types/Item';

type Props = {
    list: Item,
    handleTaskChange: (id: number, done: boolean) => void
}


export const Itens = ({ list, handleTaskChange }: Props) => {

    return (
        <ItensStyles.Container done={list.done}>
            <input
                type='checkbox'
                checked={list.done}
                onChange={event => handleTaskChange(list.id, event.target.checked)}
            />
            <label>{list.name}</label>
            {list.done && <span>✔️</span>}
        </ItensStyles.Container>
    )
}