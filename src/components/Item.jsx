import React from 'react';
import'./Item.css';

function Item (props){

return(
<div>
<h3>{props.name}</h3>
<h4>{props.actualDate}</h4>
</div>
)
}

export default Item;