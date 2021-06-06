import React, {useState, useEffect} from 'react';

import './index.css';

export default function Wheel (props) {

  const [selectedItem, setSelectedItem] = useState(null);
  const spinning = selectedItem !== null ? 'spinning' : '';
  const wheelVars = {
    '--nb-item': props.items.length,
    '--selected-item': selectedItem,
  };

  useEffect(() => {


    setTimeout(() => {
      props.setupWinnerText(props.items[selectedItem]);
    }, 4500)
    
  }, [selectedItem]);

  function selectItem() {
    if (selectedItem === null) {
      const newSelectedItem = Math.floor(Math.random() * props.items.length);
      if (props.onSelectItem) {
        props.onSelectItem(selectedItem);
      }
      setSelectedItem(newSelectedItem);
      console.log(selectedItem)
    } else {
      console.log(selectedItem)
      setSelectedItem(null);
      // setTimeout(selectItem, 500)
    }
  }

  return (
    <div className="wheel-container">
      <div className={`wheel ${spinning}`} style={wheelVars} onClick={selectItem}>
        {props.items.map((item, index) => (
          <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
