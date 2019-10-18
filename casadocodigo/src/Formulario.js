import React, { Component } from 'react';

class Formulario extends Component {

    constructor(props) {

        super(props);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: ''
        };

        this.state = this.stateInicial;
    }

    handleChange = event => {

        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submit = () => {

        this.props.handleSubmit(this.state);
        this.setState(this.stateInicial);
    };

    render() {

        const { nome, livro, preco } = this.state;

        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="nome">Nome</label>
                        <input
                            className="validate"
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.handleChange}
                        />                        
                    </div>

                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="livro">Livro</label>
                        <input
                            className="validate"
                            id="livro"
                            type="text"
                            name="livro"
                            value={livro}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="preco">Preço</label>
                        <input
                            className="validate"
                            id="preco"
                            type="text"
                            name="preco"
                            value={preco}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <button type="button" onClick={this.submit} className="waves-effect waves-light indigo lighten-2 btn">Salvar</button>
            </form>
        );
    }
}

export default Formulario;