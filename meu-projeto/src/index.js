import React from 'react';
import ReactDOM from 'react-dom';
import Botao from './test';

function App() {
const handleClick = () => {
console.log('Clicou no botão!');
};
return (
<div>
<h1>HELLO WORLD!</h1>
<Botao onClick={handleClick} label="Clique aqui" />
</div>
);
}
ReactDOM.render(
<React.StrictMode>
<App />
</React.StrictMode>,
document.getElementById('root')
);