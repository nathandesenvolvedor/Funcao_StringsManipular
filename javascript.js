function submit() {
    var nome = document.getElementById('nomes').value;
    document.getElementById('quantidade_de_letras').value = nome.length;

    var PosiçãoLetra = document.getElementById('Posição_de_uma_letra').value;
    document.getElementById('Posição_da_letra').value = nome.charAt(PosiçãoLetra - 1);

    document.getElementById('Primeira_letra_do_nome').value = nome.charAt(0);

    document.getElementById('O_dobro_de_quantidade_de_letras').value = nome.length * 2;
}