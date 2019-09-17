<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome de Usuário: <strong>{{ nome }}</strong></p>
        <p>Idade do usuário <strong>{{idade}}</strong></p>
        <button @click="reiniciarNome">Alterar Nome</button>
        <button @click="reiniciarFn()">Reiniciar Nome</button>
    </div>
</template>

<script>
import Barramento from '@/barramento';
export default {
    props: {
        nome: String,
        reiniciarFn: Function,
        idade: Number
    },
    data() {
        return {
            nomeAlter: this.nome
        }
    },
    methods: {
        reiniciarNome(){
            this.nome = 'Pedro';
            this.$emit('nomeMudou', this.nome)
        }
    },
    created(){
        Barramento.quandoIdadeMudar((idade)=>{
            this.idade = idade;
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
