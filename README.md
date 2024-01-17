## Domain
  ### Product
    - id number
    - code === id || usuário preenche
    - value
    - color
    - size
    - amount
    - minimum quantity
    - idByOrder === BuyOrder.id
  ### Sales
    - id autoincrement
    - productId === product.id
    - value product === product.value
    - createdAt
  ### Buy Orders
    - id autoincrement
    - productId === product.id
    - createdAt
    - updatedAt
  ### integration
    - integrar com fornecedores.

## useCase
  ### encontarar produto
    - encontrar pelo id
    - tamanho e cor para filtros
  ### verificar quantidade do produto e alertar se estiver abaixo do limit
    - quantidade minima.
    - enviar alerta de estoque baixo do produto pelo sistema e e-mail.
  ### trazer historico de vendas do produto
    - quantidade vendidas,
    - lucro por produto
    - mapear datas de periodos e trazer os produtos nesse período.
  ### ver prazos de entregas das novas remessas.
    - data prevista para chegada da remessa.
  ### Limit Quantity
    - para cada tipo de produto um limite de controle
  ### hitoric product
  ### buy orders
  ### sell tendencies
