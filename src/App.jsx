import { useState } from 'react'
import { CorCard } from './components/CorCard'
import './style.scss'

// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
function validaInputNome(nome) {

	let nomeAparado = nome.trim();

	return nomeAparado.length > 2;

}

function validaInputHexa(hexa) {

	const hexaRegexPattern = /^#(?:[0-9a-f]{3}){1,2}$/i;
	return hexaRegexPattern.test(hexa);

}

function App() {
	// Aqui você irá criar os Estados para manipular os Inputs
	const [listaCores, setListaCores] = useState([])
	const [nomeCor, setNomeCor] = useState('')
	const [hexaCor, setHexaCor] = useState('')
	const [erroFormInput, setErroFormInput] = useState(false)

	function cadastrarCor(event) {

		event.preventDefault();

		if (validaInputNome(nomeCor) && validaInputHexa(hexaCor)) {

			setErroFormInput(false)

			let novoId = listaCores.length
			
			let novaCor = {
				id: novoId,
				nome: nomeCor,
				hexa: hexaCor
			}
			
			setListaCores([...listaCores, novaCor]);
			setNomeCor("");
			setHexaCor("");

		} else {

			setErroFormInput(true);
		
		}

	}
	

	return (
		<div className="checkpoint-app">
			<div className={erroFormInput ? 'form-error' : ''}>

				<div className="tittle-wrapper">

				<h1>Adicionar Nova Cor</h1>

				</div>

				<form>
				<div>

					<label htmlFor="nomeCor">Nome: </label>
					<input id="nomeCor" type="text" value={nomeCor} onChange={event => setNomeCor(event.target.value)}/>

				</div>

				<div>

					<label htmlFor="hexaCor">Preço do produto: </label>
					<input id="hexaCor" type="text" value={hexaCor} onChange={event => setHexaCor(event.target.value)}/>

				</div>

				<button type='submit' onClick={event => cadastrarCor(event)}>Adicionar</button>
				</form>

				{
				erroFormInput ? (
					<span>Por favor, verifique os dados inseridos no formulário</span>
				) : null
				}

			</div>
			
			<div className="tittle-wrapper">
				<h1>Cores Favoritas:</h1>
			</div>

			<section className='products'>
                {
                    listaCores.map(
                        cor => {
                            return (
                                <CorCard
                                    corInfo={cor}
                                />
                            )
                        }
                    )
                }
            </section>

		</div>

		
  	)
}

export default App