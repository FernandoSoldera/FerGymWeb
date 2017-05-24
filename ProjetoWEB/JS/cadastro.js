function enviar(){
	var nome = form1.nome.value;
	var cpf = form1.cpf.value;
	var endereco = form1.endereco.value;
	var telefone = form1.telefone.value;

	window.alert("Cadastro Confirmado, dados cadastrados:\nNome: "
	 + nome + "\nCPF: " + cpf + "\nEndereço: " + endereco + 
	 "\nTelefone: " + telefone);

}