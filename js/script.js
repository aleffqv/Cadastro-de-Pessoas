const { createApp } = Vue;


createApp({

    data () {
        return {
            nome: "",
            email:"",
            dataNasc: "",
            CPF:"",
            senha:"",
            mostrar: false
        }
    },
    methods: {
        cadastrarPessoa() {

            if(this.nome === "" || this.email === "" || this.dataNasc === "" || this.CPF === "" || this.senha === "") {
                alert("Preencha todos os campos para cadastrar!");
                return
            } 

            this.mostrar = true
        }
    }

}).mount("#app")