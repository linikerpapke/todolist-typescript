
import React, { useState } from 'react';
import * as AppStyles from './App.styles';
import { Item } from './types/Item'
import { Itens } from './components/Itens';
import { Input } from './components/Input'

const App = () => {

  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar pão', done: false },
    { id: 2, name: 'Comprar bolo', done: true },
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (

    <AppStyles.Container>
      <AppStyles.Area>
        <AppStyles.Header>Lista de Tarefas</AppStyles.Header>

        <Input handleAddTask={handleAddTask} />
        {list.map((item) => (
          <Itens 
          key={item.id} 
          list={item}
          handleTaskChange={handleTaskChange}
           />
        ))}
      </AppStyles.Area>
    </AppStyles.Container>

  );

}

export default App;