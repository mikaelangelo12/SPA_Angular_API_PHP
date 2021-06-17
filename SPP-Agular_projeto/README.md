# SPA-Front-End Com Angular/Cli

#### Componentes:
Serie - Detalhes
Series - Lista

### Iniciar o Projeto

Para inicar o projeto vai precisar da pasta node_modules e para criar a pasta, basta  executar o comando:

 npm install express -save

e depois o comando para rodar o projeto:

 ng serve

#### Components do Angular Material Utilizados:

Neste projeto criei um aplicativo com uma SPA que exibe uma lista de Séries e com uma pagina com mais detalhe sobre a serie em si, quando o usuário clica em uma série na lista,o componete irá exibir os detalhes da serie selecionada onde contem uma imagem,titulo e uma descrição e abaixo tem um botão de volta para pagina inicial.

As paginas tem a interação entre si através do RouterModule e é utilizado o animations.ts para fazer a animação entre uma pagina na outra e como é uma SPA não precisa fazer um carregamento completo da pagina, quando faz á interação entre elas.


#Montando a api com Lumin com Laravel
 
###Preparando o ambinete para rodar o api

é preciso gerar a pasta vendor com o comando:

composer install

depois vamos rodar o projeto na direcionar para 8000:

php -S localhost:8000 -t public

# o link da api

http://localhost:8000/api/series

## como foi montada a Api

Montei a api para centralizar o acesso aos dados em um servidor, e todos os outros clientes vão fazer uma requisição pra esse servidor que me responde com os dados de cada série, e os dados do servidor é id, Name e desc (faz parte da descrição da serie).
Comecei apontando as rotas em routes criei a ligação para o Http/controller, fiz uma refatoração de código onde para que todo o código duplicado esteja em um local centralizado no BaseController depois em SeriesController eu só fiz importar o BaseController.

Eu utilizei o Sqlite para armazenar o conteúdo do aplicativo onde criei uma tabela no Migration com o comando: 

php artisan make:migration criar_tabela_series –create=series

depois criei o arquivo do sqlite database.sqlite logo depois fiz a migração para o banco de dados com o comando:

php artisan migrate

na tabela de series criei com seguinte parametros Id, Nome e Desc:

  $table->tinyIncrements('id');
  $table->string('name')->unique();
  $table->string('desc')->unique();

## importando api para o angular

Em series.service.ts importei a biblioteca HtttpCliente onte eu possa está recebendo o link da api no aplicativo,onde subistitui o arquivo de SERIES onde ficava armazenado as informações, pois este trabalho agora é da api,por isso não tem mais necessidade de manter o arquivo, apobtei o http para o link da api http://localhost:8000/api/series.

Quando é adicionado uma serie no banco de dados automaticamente aparece no app.
# Test_Facilita-Tech
# SPA-Minhas-Series_comAPI
