const data = [
  { question: 'Какое ключевое слово позволяет создавать объекты общего вида?', answers: ['object', 'prototype', 'this'], correctAnswer: 'object' },
  {
    question: 'Объекты, отвечающие, что содержится на Web-странице в окне браузера называются:',
    answers: ['Клиентские', 'Пользовательские', 'Встроенные'],
    correctAnswer: 'Клиентские',
  },
  {
    question: 'Можно ли из JavaScript получить содержимое комментария?',
    answers: [
      'Да, комментарий – DOM-узел, можно получить.',
      'Нет, комментарии есть в HTML, но отсутствуют в DOM.',
      'Можно получить, но только до окончания загрузки страницы',
    ],
    correctAnswer: 'Да, комментарий – DOM-узел, можно получить.',
  },
  {
    question: 'Браузер вызывает setInterval и setTimeout гораздо реже, чем обычно, если…',
    answers: [
      'Вкладка, в которой работает JavaScript, не видна и находится в фоновом режиме.',
      'Посетитель зашёл с ноутбука, с питанием от батареи.',
      'В обоих этих случаях.',
    ],
    correctAnswer: 'В обоих этих случаях.',
  },
  {
    question: 'Чему равна сумма 1.15 + 2.30 с точки зрения JavaScript?',
    answers: ['345', '3.45', '3,45', 'Ни один из вариантов выше.'],
    correctAnswer: 'Ни один из вариантов выше.',
  },
  {
    question: 'Есть ли разница между вызовами i++ и ++i?',
    answers: ['Разница в значении, которое возвращает такой вызов.', 'Разница в значении i после вызова.', 'Нет никакой разницы.'],
    correctAnswer: 'Разница в значении, которое возвращает такой вызов.',
  },
  {
    question: 'Чему равно значение выражения 4 - "5" + 0xf - "1e1"?',
    answers: ['Цифре.', 'Строке', 'NaN'],
    correctAnswer: 'Цифре.',
  },
  {
    question: 'Чему равно 0 || "" || 2 || undefined || true || falsе ?',
    answers: ['""', '2', 'undefined', 'true', 'false'],
    correctAnswer: 'true',
  },
  {
    question: 'Чему равно a: let a = (1,5 - 1) * 2;',
    answers: ['0.999999999', '1', '0.5', '8', '-0.5', '4'],
    correctAnswer: '8',
  },
  {
    question: 'Что получится, если сложить true + false?',
    answers: ['"truefalse"', '0', '1', 'NaN'],
    correctAnswer: '1',
  },
  {
    question: 'Чему равно такое выражение: [] + false - null + true',
    answers: ['1', 'NaN', '0', 'indefined'],
    correctAnswer: 'NaN',
  },
];

export default data;
