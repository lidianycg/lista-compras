export const itemsData = {
  'Alimentos Básicos': {
    'Grãos e Cereais': [
      {
        name: 'Arroz',
        types: ['branco', 'integral', 'parboilizado', 'arbóreo para risoto'],
      },
      { name: 'Feijão', types: ['preto', 'carioca', 'branco', 'fradinho'] },
      { name: 'Lentilha, grão-de-bico, ervilha seca', types: [] },
      { name: 'Milho para pipoca', types: [] },
    ],
    'Farinha e Derivados': [
      { name: 'Farinha de trigo', types: ['branca', 'integral'] },
      { name: 'Farinha de milho, fubá', types: [] },
      { name: 'Farinha de mandioca, farinha de rosca', types: [] },
      { name: 'Amido de milho (maizena)', types: [] },
    ],
    'Massas e Macarrão': [
      {
        name: 'Espaguete, talharim, penne, fusilli, lasanha, nhoque',
        types: [],
      },
      { name: 'Macarrão instantâneo, capeletti, ravioli', types: [] },
    ],
    'Caldo e Temperos Prontos': [
      { name: 'Caldo de carne, frango, legumes, peixe', types: [] },
      { name: 'Cubos de tempero, temperos secos', types: [] },
    ],
    'Óleos e Gorduras': [
      { name: 'Óleo de soja, óleo de milho, óleo de canola', types: [] },
      { name: 'Azeite de oliva', types: ['extra virgem', 'virgem'] },
      { name: 'Manteiga, margarina, banha de porco', types: [] },
    ],
    'Açúcares e Adoçantes': [
      { name: 'Açúcar', types: ['refinado', 'mascavo', 'demerara', 'cristal'] },
      { name: 'Mel, adoçante', types: ['stevia', 'sucralose'] },
    ],
    'Sal e Condimentos': [
      { name: 'Sal', types: ['refinado', 'grosso', 'rosa'] },
      {
        name: 'Pimenta do reino, colorau, páprica',
        types: ['doce', 'picante'],
      },
      {
        name: 'Ervas secas',
        types: ['orégano', 'manjericão', 'salsa', 'tomilho'],
      },
    ],
  },
  'Laticínios e Ovos': {
    'Leite e Derivados': [
      { name: 'Leite', types: ['integral', 'desnatado', 'semidesnatado'] },
      { name: 'Leite em pó, leite condensado, creme de leite', types: [] },
    ],
    Queijos: [
      { name: 'Mussarela, queijo prato, parmesão, queijo minas', types: [] },
      { name: 'Queijo cottage, cream cheese, requeijão', types: [] },
    ],
    'Iogurtes e Bebidas Lácteas': [
      { name: 'Iogurte', types: ['natural', 'grego', 'com sabores'] },
      { name: 'Bebidas lácteas', types: ['chocolate', 'morango'] },
    ],
    Outros: [{ name: 'Manteiga, creme de leite fresco, nata', types: [] }],
    Ovos: [{ name: 'Ovos', types: ['brancos', 'vermelhos', 'caipira'] }],
  },
  Proteínas: {
    Carnes: [
      {
        name: 'Carne bovina',
        types: ['alcatra', 'contrafilé', 'patinho', 'carne moída'],
      },
      {
        name: 'Carne suína',
        types: ['filé mignon suíno', 'lombo', 'costelinha'],
      },
      { name: 'Carne de cordeiro, carne de vitela', types: [] },
    ],
    'Frango e Aves': [
      {
        name: 'Frango',
        types: ['inteiro', 'peito', 'coxa', 'asa', 'filé de frango'],
      },
      { name: 'Peru, chester, pato', types: [] },
    ],
    'Peixes e Frutos do Mar': [
      { name: 'Peixes frescos', types: ['salmão', 'tilápia', 'merluza'] },
      { name: 'Peixes congelados, filés de peixe', types: [] },
      { name: 'Camarão, lula, polvo, mexilhões', types: [] },
    ],
    Embutidos: [
      { name: 'Presunto, mortadela, salame, peito de peru', types: [] },
      { name: 'Linguiça', types: ['toscana', 'calabresa', 'frango'] },
    ],
  },
  'Pães e Produtos de Panificação': [
    { name: 'Pão de forma, pão francês, pão integral', types: [] },
    { name: 'Pão de hambúrguer, pão sírio, pão de alho', types: [] },
    {
      name: 'Biscoitos e bolachas',
      types: ['cream cracker', 'recheadas', 'amanteigadas'],
    },
    { name: 'Torradas, croissants, pão doce', types: [] },
  ],
  'Grãos e Cereais': [
    { name: 'Aveia', types: ['flocos', 'farelo', 'instantânea'] },
    { name: 'Granola', types: ['com frutas', 'sem açúcar'] },
    { name: 'Chia, linhaça, quinoa', types: [] },
    { name: 'Flocos de milho (cereal matinal), musli', types: [] },
  ],
  'Frutas, Verduras e Legumes': {
    Frutas: [
      { name: 'Banana, maçã, laranja, abacaxi, manga, morango', types: [] },
      { name: 'Uva, melancia, melão, mamão, kiwi, pera', types: [] },
      { name: 'Frutas secas', types: ['uva-passa', 'damasco', 'ameixa seca'] },
    ],
    'Verduras e Folhas': [
      { name: 'Alface', types: ['crespa', 'lisa', 'americana'] },
      { name: 'Rúcula, agrião, espinafre, couve, acelga', types: [] },
    ],
    Legumes: [
      { name: 'Tomate, cenoura, batata, batata-doce', types: [] },
      {
        name: 'Abobrinha, berinjela, cebola, alho, pimentão',
        types: ['verde', 'vermelho', 'amarelo'],
      },
    ],
  },
  Congelados: {
    'Vegetais Congelados': [
      { name: 'Milho, ervilha, brócolis, couve-flor, espinafre', types: [] },
    ],
    'Proteínas Congeladas': [
      { name: 'Filés de peixe, camarão, hambúrgueres, almôndegas', types: [] },
    ],
    'Pratos Prontos Congelados': [
      { name: 'Lasanhas, pizzas, massas, vegetais cozidos', types: [] },
    ],
  },
  Bebidas: [
    { name: 'Água mineral', types: ['com gás', 'sem gás'] },
    { name: 'Sucos', types: ['naturais', 'néctar', 'concentrados'] },
    { name: 'Refrigerantes, chás prontos, água de coco', types: [] },
    { name: 'Café', types: ['solúvel', 'em grão', 'em cápsulas'] },
    { name: 'Achocolatado, leite de coco, leite de amêndoas', types: [] },
  ],
  'Higiene Pessoal': {
    'Cabelo e Corpo': [
      { name: 'Shampoo, condicionador, máscara de hidratação', types: [] },
      { name: 'Sabonete líquido, sabonete em barra, gel de banho', types: [] },
      { name: 'Loção hidratante, protetor solar', types: [] },
    ],
    'Higiene Bucal': [
      { name: 'Creme dental, escova de dentes, fio dental', types: [] },
      { name: 'Enxaguante bucal', types: [] },
    ],
    'Outros Itens': [
      { name: 'Papel higiênico, lenço umedecido', types: [] },
      { name: 'Absorventes, desodorante, algodão', types: [] },
    ],
  },
  'Produtos de Limpeza': {
    'Para Louças e Cozinha': [
      { name: 'Detergente, esponja, luvas de limpeza', types: [] },
      { name: 'Desengordurante, limpa forno', types: [] },
    ],
    'Para Roupas': [
      { name: 'Sabão em pó, sabão líquido, amaciante', types: [] },
      { name: 'Tira manchas, alvejante, removedor de ferrugem', types: [] },
    ],
    'Para Casa': [
      { name: 'Desinfetante, água sanitária', types: [] },
      { name: 'Limpa-vidros, limpa-móveis, lustra móveis', types: [] },
    ],
  },
  'Higiene da Casa': [
    { name: 'Sacos de lixo', types: ['diferentes tamanhos'] },
    { name: 'Papel toalha, toalhas de papel', types: [] },
    { name: 'Desinfetante para banheiro, limpador de piso', types: [] },
    { name: 'Esponjas, vassouras, panos multiuso', types: [] },
  ],
  'Snacks e Petiscos': {
    'Salgadinhos e Pipoca': [
      { name: 'Chips de batata, pipoca de micro-ondas', types: [] },
      {
        name: 'Palitos de queijo, snacks saudáveis',
        types: ['vegetais', 'assados'],
      },
    ],
    'Frutas e Oleaginosas': [
      {
        name: 'Amendoim, castanha de caju, castanha do Pará, nozes',
        types: [],
      },
      { name: 'Pistache, amêndoas, frutas cristalizadas', types: [] },
    ],
    'Doces e Chocolates': [
      { name: 'Chocolates, balas, barras de cereal', types: [] },
      {
        name: 'Barras de chocolate, bombons, mix de castanhas e frutas',
        types: [],
      },
    ],
  },
  'Condimentos e Molhos': {
    'Molhos Prontos': [
      {
        name: 'Molho de tomate, extrato de tomate, ketchup, mostarda',
        types: [],
      },
      { name: 'Molho barbecue, molho de pimenta, maionese', types: [] },
    ],
    'Vinagres e Molhos Especiais': [
      { name: 'Vinagre de maçã, vinagre balsâmico, vinagre branco', types: [] },
      { name: 'Shoyu, molho inglês, molho agridoce', types: [] },
    ],
  },
  'Utensílios Descartáveis (Opcional)': [
    { name: 'Copos, pratos, talheres descartáveis', types: [] },
    { name: 'Guardanapos, toalhas de papel, palitos de dente', types: [] },
  ],
}
