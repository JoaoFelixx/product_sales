# Gestão de vendas
 
Olá, tudo bem ? Nesse projeto estou abordando uma `api` que faz gestão de vendas ! Qual a ideia desse projeto ? bom, primeiramente conheço muitos estabelecimentos
como: restaurantes, lanchonetes, bares, etc. que anotam suas vendas e fazer as
contas totalmente usando folha e caneta. Qual o problema nisso ? parando para pensar nenhum ! mas não concorda que é um serviço um tanto quanto desgastante para ser feito ? Eu digo por experiência própria que essa tarefa é bem chata,pensando nisso criei essa `api` com um intuito de ajudar nesse tipo de problema !
 
## Como funciona ?
 
HTTP | ROUTE | BODY | DESCRIÇÃO |
| --- | ------ | ------ |  ------ |
| GET | /api/v1/sales/:data | | Esta rota serve para pegar os dados das vendas cujo a data é passada como parâmetro será retornado os dados das vendas **statusCode(200)OK** se vazio, será retornado **statusCode(204)**
| GET | /api/v1/sales/sum/:date | | Esta rota foi criada para fazer a conta de todas as vendas retornando o valor total das vendas da data enviada por parâmetro **statusCode(200)OK** se vazio, será retornado **statusCode(204)**
| POST | /api/v1/sales | JSON (product_name, product_value, product_amount, product_form_of_payment) | Esta rota é a de criação das vendas do dia,  `product_name`, `product_value`, `product_amount`, `product_form_of_payment`, são os dados obrigatórios para a rota de criação de vendas **OBS. a forma de pagamento foi feita para ser um `ENUM` ele suporta (Cartão, Dinheiro, Pix) sei que existem outras formas de pagamentos mas essas são as mais comuns**
| DELETE | /api/v1/sales/:user_id | | A rota de deleção de vendas é para deletar a venda cujo `id` é passado por parâmetro.

