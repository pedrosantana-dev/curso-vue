<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>
      Nome do Usuário: <strong>{{ inverterNome() }}</strong>
    </p>
    <p>
      Idade do Usuário <strong>{{ idade }}</strong>
    </p>
    <button @click="reinicializarNome">Reinicializar Nome</button>
    <button @click="reiniciarFn">ReiniciarNome (Callback)</button>
  </div>
</template>

<script>
import barramento from "@/barramento";

export default {
  props: {
    nome: {
      type: String,
      // required: true,
      // default: function () {
      //     return Array(10).fill(0).join(',')
      // }
      default: "Anonimo",
    },
    idade: Number,
    reiniciarFn: Function,
  },
  methods: {
    inverterNome() {
      return this.nome.split("").reverse().join("");
    },
    reinicializarNome() {
      //   this.nome = "Pedro";
      this.$emit("nomeMudou", "Pedro");
    },
  },
  created() {
    barramento.quandoIdadeMudar((idade) => {
      this.idade = idade;
    });
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
