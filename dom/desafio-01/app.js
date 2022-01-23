new Vue({
    el: '#desafio',
    data: {
        nome: 'Pedro Santana',
        idade: 32,
        imagem: 'https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1398284908'
    },
    methods: {
        numeroRandomico() {
            return Math.random();
        }
    }
})