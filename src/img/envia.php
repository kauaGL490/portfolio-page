<?php
// Corrige o uso das variáveis
$nome = addslashes($_POST['nome']);
$email = addslashes($_POST['email']);
$telefone = addslashes($_POST['telefone']);

// Define destinatário e assunto
$para = "kauaugustosilva10@gmail.com"; 
$assunto = "Troca de dados - Responsive Portfolio";

// Corpo do e-mail
$corpo = "Nome: $nome\nE-mail: $email\nTelefone: $telefone";

// Cabeçalho do e-mail
$cabeca = "From:a5917@gmail.com\r\n";
$cabeca .= "Reply-To: $email\r\n";
$cabeca .= "X-Mailer: PHP/" . phpversion();

// Envia o e-mail
if (mail($para, $assunto, $corpo, $cabeca)) {
    echo "E-mail enviado com sucesso!";
} else {
    echo "Houve um erro ao enviar o e-mail!";
}
?>
