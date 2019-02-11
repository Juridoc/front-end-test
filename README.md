# Teste Front-End Juridoc

Este teste é apresentado aos candidatos as vagas de desenvolvimento Front-end para avaliar os quesitos técnicos.

## O Desafio

A partir de um ambiente pré estruturado, seu objetivo é corrigir e concluir a implementação de um formulário de registro de usuários seguindo os requisitos listados abaixo.

#### Ajustes de design

- A logomarca da juridoc precisa ser ajustada com as dimensões 200x80
- O título do campo também deve estar no placeholder do input
- Os títulos devem estar na parte superior do input
- O espaço entre os campos e a borda do formulário deve ser 1rem
- A margem entre os campos é muito grande, reduza para 0.5rem
- Os campos devem estar alinhados à esquerda e preenchendo 100% do formulário
- O botão deve estar alinhado à direita
- O espaço entre o botão e o último campo deve ser 1rem
- O campo para confirmação de senha não existe, adicione

#### Validação dos dados

- Os respectivos tipos de cada campo devem corresponder ao formato de dados esperado. (password, email, tel, etc...)
- Os campos "primeiro nome" e "último nome" são obrigatórios
- O campo "nome de usuário" deve aceitar somente caracteres a-z e 0-9 e no mínimo 6 caracteres
- O campo "telefone" deve aceitar apenas caracteres 0-9 e hífen e um único espaço entre dois números
- O campo "email" deve aceitar apenas emails com o domínio juridoc.io
- O campo "senha" deve conter pelo menos 6 caracteres
- O campo "confirmar senha" deve possuir o mesmo valor do campo "senha"

#### Armazenamento dos dados

Após definir as regras de validação do formulário no método submitHandler, faça um `POST` com objeto JSON contendo as informações do formulário para o endepoint: `https://test.juridoc.io/register`, utilize o método fetch nativo do JavaScript.

**JSON Exemplo**

```json
{
  "firstName": "Someone",
  "lastName": "Someone",
  "phone": "11 1234-4321",
  "email": "someone@juridoc.io",
  "username": "someone",
  "password": "000000"
}
```

#### Bônus

- Melhorar os aspectos visuais gerais (tamanho dos campos, cores, sombras, bordas) para um estilo agradável e moderno.
- Fazer o commit do grupo das alterações que são relacionadas entre si em vez de um único commit gigante.

## Ambiente

- Os comandos para fazer o build e iniciar a aplicação estão no arquivo package.json
- O servidor local é executado com Node.Js, o endereço padrão é: `http://127.0.0.1:8080`
- Os arquivos que precisam ser alterados estão no diretório `frontend/source`
- Os arquivos .tsx e .less representam respectivamente os arquivos HTML e CSS.

## Pré-requisitos

- TypeScript
- JavaScript ES6+
- NPM
- Git
- CSS/LESS
- HTML/TSX
