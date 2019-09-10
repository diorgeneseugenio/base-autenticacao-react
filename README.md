# Código padrão para autenticação em React

Este projeto tem um intuíto de conter um projeto inicial em react contendo já configurado uma arquitetura responsável pela autenticação. O principal objetivo é poupar tempo de desenvolvimento para o início de projetos. O projeto espera que haja uma API para consumir os dados, sendo que o método de autenticação escolhido para esta implementação é o JWT. 

## Configuração de variáveis

Para a configuração é apenas necesário mudar duas variáveis encontradas dentro do arquivo .env na raiz do projeto sendo elas:

- **REACT_APP_NAME_APP**={NOME DO PROJETO}
- **REACT_APP_API_URL**={URL ONDE ESTÁ DISPONÍVEL A API}

## Organiação dos diretórios

> **A:** A organização abaixo é uma sugestão de como o projeto foi desenvolvido.

    .
    ├── public
    ├── src                    
    │   ├── components                  # Todos os componentes da aplicação
            ├── Dashboard
            ├── Login 
            ├── utils                   # Componentes polivalentes dentro da aplicação
                   ├── functional       # Componentes de funcionabilidade 
                   ├── templates        # Componentes de renderização 
    │   ├── redux         
    │   ├── services                    # Serviços disponíveis para toda aplicação             

## *Observação:*
É esperado como resposta do back-end ao ter o token expirado um erro 401, contendo a informação **sub_status** com o valor 42, indicando assim que o token foi expirado e a sessão deve ser autenticada novamente.