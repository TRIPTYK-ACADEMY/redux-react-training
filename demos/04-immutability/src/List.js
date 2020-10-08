import React from 'react'
import { useSelector } from 'react-redux';
const List = () => {
  const items = useSelector(state => state.itemsToBuy)

  return (
    // <div>   { JSON.stringify(items)}</div>

    items.length ? (<div>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>) : (
        <div>No items yet</div>
      )

  )
}
export default List
