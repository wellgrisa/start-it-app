let Strings = {};


Strings['default'] = {
  language: 'default'
};


Strings['pt-BR'] = Object.assign({}, Strings['en-US'], {
  language: 'pt-BR',

  Errors: {
    email: 'Campo email inválido',
    password: 'Campo senha inválida',
    name: 'Campo nome inválido',
    surname: 'Campo surname inválido',
    oab: 'Campo oab inválido'
  },

  Menu: {
    home: 'Início',
    health: 'Saúde',
    training: 'Treinamento',
    calendar: 'Calendário',
    evaluation: 'Avaliação'
  },

  Buttons: {
    login: 'Login',
    logout: 'Sair',
    perfil: 'Perfil',
    health: 'Saúde',
    training: 'Treinamento',
    calendar: 'Calendário',
    evaluation: 'Avaliação'
  },

  Messages: {
    homeFirst: 'Por favor, complete seu cadastro.',
    healthFirst: 'Para criarmos o melhor treino para você, precisamos saber um pouco mais sobre sua saúde.',
    evaluationFirst: 'Responda as perguntas abaixo e fazeremos uma avaliação sua imediatamente.',
    trainingFirst: 'Vamos começar a montar seu treino?',
    createSuccess: 'Usuário cadastrado com sucesso!'
  },

  Forms: {
    name: 'Nome',
    surname: 'Sobrenome',
    email: 'Email',
    password: 'Password',
    training_group: 'Grupo de Treinamento',
    oab: 'OAB do responsável',
    code: {
      oab: 'OAB do responsável',
      cpf: 'CPF do responsável'
    },
    birth_date: 'Data de nascimento',
    gender: {
      label: 'Sexo',
      options: [
        {value: 'M', label: 'M'},
        {value: 'F', label: 'F'}
      ]
    },
    cpf: 'CPF',
    training_group: 'Grupo de treino',
    phone: {
      label: 'Celular',
      placeholder: 'Digite seu número com DDD'
    },
    height: 'Estatura (m)',
    sleep_hours: {
      label: 'Horas de sono diária',
      options: [
        {value: 'abaixo de 6 horas', label: 'abaixo de 6 horas'},
        {value: 'entre 6 e 8 horas', label: 'entre 6 e 8 horas'},
        {value: 'acima de 8 horas', label:'acima de 8 horas'}
      ]
    },
    smoke: {
      label: 'Fuma',
      options: [
        {value: 'não', label: 'não'},
        {value: 'até 20 cigarros por dia', label: 'até 20 cigarros por dia'},
        {value: 'acima de 20 cigarros por dia', label: 'acima de 20 cigarros por dia'}
      ]
    },
    alcoholic_drinks: {
      label: 'bebidas alcoólicas',
      options: [
        {value: 'não', label: 'não'},
        {value: 'aos finais de semana', label: 'aos finais de semana'},
        {value: 'quase todos os dias', label: 'quase todos os dias'},
        {value: 'todos os dias', label: 'todos os dias'}
      ]
    },
    drugs: {
      label: 'Outras drogas',
      info: 'Quais',
      options: [
        {value: 'não', label: 'não'},
        {value: 'sim', label: 'sim'}
      ]
    },
    cep: {
      cep: 'CEP',
      street: 'Logradouro',
      district: 'Bairro',
      city: 'Cidade',
      state: 'Estado',
    },
    health: {
      details : {
        fields : [
          {
            id: 0,
            info: 'Quais',
            options: [
              {value: 'não', label: 'não'},
              {value: 'sim', label: 'sim'}
            ],
            label: 'Doença na famíia nos últimos anos?'
          },
          {
            id: 1,
            info: 'Quais',
            options: [
              {value: 'não', label: 'não'},
              {value: 'sim', label: 'sim'}
            ],
            label: 'Doença suas nos últimos anos?'
          },
          {
            id: 2,
            info: 'Quais',
            options: [
              {value: 'não', label: 'não'},
              {value: 'sim', label: 'sim'}
            ],
            label: 'Tem restrições à prática de atividade física?'
          },
          {
            id: 3,
            info: 'Quais',
            options: [
              {value: 'não', label: 'não'},
              {value: 'sim', label: 'sim'}
            ],
            label: 'Foi submetido a algum tipo de cirurgia?'
          },
          {
            id: 4,
            info: 'Quais',
            options: [
              {value: 'não', label: 'não'},
              {value: 'sim', label: 'sim'}
            ],
            label: 'Tem alergias?'
          },
          {
            id: 5,
            info: 'Quais',
            options: [
              {value: 'não', label: 'não'},
              {value: 'sim', label: 'sim'}
            ],
            label: 'Medicamento(s) de uso contínuo?'
          },
          {
            id: 6,
            info: 'Onde',
            options: [
              {value: 'não', label: 'não'},
              {value: 'sim', label: 'sim'}
            ],
            label: 'Sente dores no corpo?'
          },
          {
            id: 7,
            options: [
              {value: 'não faço dieta', label: 'não faço dieta'},
              {value: 'sim, para adquirir peso', label: 'sim, para adquirir peso'},
              {value: 'sim, para perder peso', label: 'sim, para perder peso'},
            ],
            label: 'Faz dieta para adquirir ou perder peso?'
          }
        ]
      },
      parq: {
        id: 'parq',
        title:'Par-Q',
        fields: [
          {
            id: 0,
            options: [
              {value: 'não', label: 'não'},
              {value: 'sim', label: 'sim'}
            ],
            label: 'Você sente dor ou desconforto no peito quando faz atividade física?'
          },
          {
            id: 1,
            options: [
              {value: 'não', label: 'não'},
              {value: 'sim', label: 'sim'}
            ],
            label: 'Nos últimos meses você tem sentido dor ou desconforto no peito mesmo sem fazer atividade física?'
          },
          {
            id: 2,
            options: [
              {value: 'não', label: 'não'},
              {value: 'sim', label: 'sim'}
            ],
            label: 'Você perde o equilíbrio em virtude de tonturas ou alguma vez já ficou inconsciente?'
          },
          {
            id: 3,
            options: [
              {value: 'não', label: 'não'},
              {value: 'sim', label: 'sim'}
            ],
            label: 'Você tem problemas ósseos, articulares ou de coluna que pioram quando pratica atividade física?'
          },
          {
            id: 4,
            options: [
              {value: 'não', label: 'não'},
              {value: 'sim', label: 'sim'}
            ],
            label: 'Seu médico já prescreveu medicamentos para pressão arterial ou problemas cardíacos?'
          },
          {
            id: 5,
            options: [
              {value: 'não', label: 'não'},
              {value: 'sim', label: 'sim'}
            ],
            label: 'Você tem qualquer outra razão conhecida para não praticar atividade física?'
          },
          {
            id: 6,
            options: [
              {value: 'não', label: 'não'},
              {value: 'sim', label: 'sim'}
            ],
            label: 'Alguma vez foi mencionado que você tem algum problema cardíaco ou que só poderia fazer atividades físicas com recomendação médica?'
          }
        ],
      },
      problem: 'o Par-Q é um questionário simples, porém muito importante. Respodendo Sim para uma ou mais pergunta(s), sugerimos que contate um médico para uma avaliação e um correto acompanhamento clínico. O Check-Up Clínico Geral é um grande aliado de sua boa saúde e prevenção contra doenças.'
    },
    evaluation:{
      idealWeight: 'Qual o peso você se sente bem em Kg?',
      currentWeight: 'Qual seu peso atual em Kg?',
      IMC: {
        label: 'Vamos avaliar seu Índice de Massa Corporal',
        result: (imc) => {
          const results = {
            17: {text: `Seu IMC é ${imc}, o que significa que você esta muito abaixo do peso.`, className: 'red-label'},
            '18.5': {text: `Seu IMC é ${imc}, o que significa que você esta abaixo do peso.`, className: 'yellow-label'},
            25: {text: `Seu IMC é ${imc}, o que significa que você esta no peso normal.`, className: 'green-label'},
            30: {text: `Seu IMC é ${imc}, o que significa que você esta acima do peso.`, className: 'yellow-label'},
            35: {text: `Seu IMC é ${imc}, o que significa que você esta em um nível de obesidade I.`, className: 'red-label'},
            40: {text: `Seu IMC é ${imc}, o que significa que você esta em um nível de obesidade II (severa).`, className: 'red-label'},
            99: {text: `Seu IMC é ${imc}, o que significa que você esta em um nível de obesidade III (mórbida).`, className: 'red-label'}
          };
          for(var key in results){
            var IMCLevel = parseFloat(key);
            if(parseFloat(imc) && (parseFloat(imc) < IMCLevel || IMCLevel == 99)){
              return results[key];
            }
          }
          return '';
        }
      },
      waist: 'Qual a circunferência da sua cintura em cm',
      hip: 'Qual a circunferência do seu quadril em cm',
      RCQ: {
        label: 'Vamos verificar a relação entre sua cintura e quadril',
        result: (gender, rcq) => {
          const level = {
            F: rcq > 0.75 ? {text: 'alto', className: 'red-label'} : {text: 'baixo', className: 'green-label'},
            M: rcq > 0.85 ? {text: 'alto', className: 'red-label'} : {text: 'baixo', className: 'green-label'}
          };
          return {
            text: `Seu RCQ é ${rcq}, o que significa um ${level[gender].text} risco cardiovascular.`,
            className: level[gender].className
          }
        }
      },
      test:{
        title: 'Por último, vamos checar como esta seu condicionamento físico',
        header: 'Realize o teste adaptado de 12 minutos. Corra a maior distância possível em 12 minutos contínuos.',
        label: 'Qual a distância você percorreu em Km?',
        result: (distance) => {
          return 'Nível muito bom de condicionamento físico.';
        }
      }
    },
    training: {
      exercise:{
        options: [
          {value: 'não me exercito', label: 'não me exercito'},
          {value: 'sim, a menos de um ano', label: 'sim, a menos de um ano'},
          {value: 'sim, a mais de um ano', label: 'sim, a mais de um ano'}
        ],
        label: 'Você se exercita?'
      },
      daysOfWeek:{
        options: [
          {value: 'Segunda', label: 'Segunda'},
          {value: 'Terça', label: 'Terça'},
          {value: 'Quarta', label: 'Quarta'},
          {value: 'Quinta', label: 'Quinta'},
          {value: 'Sexta', label: 'Sexta'},
          {value: 'Sábado', label: 'Sábado'},
          {value: 'Domingo', label: 'Domingo'}
        ],
        label: 'Quais os dias da semana você tem disponível para se dedicar a atividade física (mínimo 60 minutos)?'
      },
      timePerDay:{
        options: [
          {value:'Menos de 1 hora', label: 'Menos de 1 hora'},
          {value:'Entre 1 e 2 horas', label: 'Entre 1 e 2 horas'},
          {value:'Entre 2 e 4 horas', label: 'Entre 2 e 4 horas'},
          {value:'Acima de 4 horas', label: 'Acima de 4 horas'}
        ],
        label: 'Quanto tempo, em média, você terá disponível nestes dias?'
      },
      sports:{
        options: [
          {value:'Caminhada', label: 'Caminhada'},
          {value:'Corrida', label: 'Corrida'},
          {value:'Ciclismo', label: 'Ciclismo'},
          {value:'Natação', label: 'Natação'},
          {value:'Thiathlon', label: 'Thiathlon'}
        ],
        label: 'Quais modalidades você pratica ou gostaria de praticar?'
      },
      goals:{
        options: [
          {value:'Estético', label: 'Estético'},
          {value:'Condicionamento Físico', label: 'Condicionamento físico'},
          {value:'Bem-estar físico e mental', label: 'Bem-estar físico e mental'},
          {value:'Manutenção da saúde', label: 'Manutenção da saúde'},
          {value:'Lazer', label: 'Lazer'},
          {value:'Competições amadoras', label: 'Competições amadoras'},
          {value:'Competições profissionais', label: 'Competições profissionais'}
        ],
        label: 'Quais seu objetivos?'
      }
    }
  },

  Date: {
    dateFormat: 'dd/mm/yyyy',
    monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    weekdaysFull: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    weekdaysLetter: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    today: 'Hoje',
    clear: 'Limpar',
    close: 'Fechar'
  }

});

module.exports = Strings['pt-BR'];
