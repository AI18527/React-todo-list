import './todo-item.css'

export function TodoItem({ title, checkItem, removeItem, renameItem, contentEditable}) {

  return (
    <div className="todo__item" >
      <input type="checkbox" onChange={checkItem} checked = {false}/>
      <span contentEditable={contentEditable} onInput={e => renameItem(e.currentTarget.textContent)} >{ title } </span>
      <button onClick={removeItem}>X</button>
    </div>
  )
}