import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, container, Modal, ModalBody, ModalHeader, }
import filtrados from './components/filtrados';

const data = [
    { id: 1, nombre: "jose luis", telefono: "78711054" },
    { id: 2, nombre: "fajardo puma", telefono: "61541" },
];

class App extends React.Component {
    state = {
        data: data,
        form: {
            id: "",
            nombre: "",
            telefono: "",
        },
        dataSearch: [],
        modalInsertar: false,
        modalActualizar: false,
        modalConfirmacion: false,
    };
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                []
            }
        })
    }
}