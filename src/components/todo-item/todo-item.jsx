import './todo-item.css'

export function TodoItem({ title, checkItem, removeItem, renameItem, checked}) {

  return (
    <div className="todo__item" >
      <input type="checkbox" onChange={checkItem} checked = {checked}/>
      <span contentEditable onInput={e => renameItem(e.currentTarget.textContent)} >{ title } </span>
      <button onClick={removeItem}>X</button>
    </div>
  )
}