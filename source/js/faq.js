const tabs = document.querySelectorAll('.tabs__button');
const accordions = document.querySelectorAll('.accordions__item');

const center = {
  question1: 'Как стать членом фитнес-центра?',
  answer1: 'При первом посещении и покупке абонемента, необходимо заполнить анкету и подписать договор. При покупке абонемента онлайн, анкета также заполняется онлайн и договор придёт вам на почту.',
  question2: 'Где можно посмотреть расписание?',
  answer2: 'Вы можете ознакомиться с расписание на стойке информации, на нашем официальном сайте. Так же есть возможность оформить подписку на наши новости и получать расписание и обновления на почту каждую неделю.',
  question3: 'Есть кулеры в центре? Предоставляются полотенца?',
  answer3: 'Да, в вашем доступе неограниченное количество полотенец и питьевой воды.',
  question4: 'Сколько тренеров работает в клубе и какова их квалификация?',
  answer4: 'Постоянно в зале находятся 5 дежурных тренеров, кроме того 10 тренеров для идивидуальынх тренировок и 5 тренеров на групповых тренировок. У нас работают только опытные профессионалы.',
};

const membership = {
  question1: 'Занятия с тренером входят в абонемент?',
  answer1: 'При посещении тренажерного зала вам необходимо оплатить занятия с тренером отдельно. В зале всегда присутствует дежурный тренер, которому можно задать вопрос, получить небольшую консультацию по тренажеру или технике выполнения упражнения.',
  question2: 'Можно ли заморозить абонемент?',
  answer2: 'Чтобы воспользоваться правом «заморозки», необходимо обратиться в фитнес-клуб с соответствующей просьбой.',
  question3: 'Есть ли лимит по посещениям тренажерного зала и групповых занятий?',
  answer3: 'Оптимальное количество занятий – 3-4 раза еженедельно. Увеличивать это количество до 6-7 посещений тренажерного зала нецелесообразно: мышцам необходимо давать отдых, чтобы они успевали восстановиться.',
  question4: 'Что такое семейный доступ и доступ для друзей?',
  answer4: '«Family Sharing» или «Семейный доступ» – отличная функция, которая открывает доступ к библиотеке другим пользователям, благодаря чему они могут играть почти во все ваши игры или наоборот.',
};

const services = {
  question1: 'Предлагает ли клуб услуги по консультированию по вопросам питания?',
  answer1: 'Да. Вы можете обратиться как к своему тренеру, так и к нашему нутрициологу. Специалист уточнит ваши данные, цели и предложит программу питания.',
  question2: 'Проводятся ли в клубе какие-либо мероприятия или соревнования?',
  answer2: 'Да, и довольно часто',
  question3: 'Можно ли приобрести в центре спортивное питание?',
  answer3: 'У нас его очень много, на любой цвет и вкус',
  question4: 'Есть ли в центре детская комната?',
  answer4: 'Да, также в детской комнате постоянно дежурит няня.',
};

const rules = {
  question1: 'Есть в фитнес-центре дресс-код?',
  answer1: 'Для тренировок необходимо иметь предназначенную для этого закрытую спортивную обувь и одежду. Верхняя и нижняя части тела должны быть закрыты (используйте футболки, майки, спортивные брюки, шорты, кроссовки). В целях безопасности, запрещается тренироваться босиком, в пляжных или домашних тапочках и т. п., исключения составляют специальные классы (например, йога, пилатес).',
  question2: 'Можно ли приводить с собой детей на тренировки?',
  answer2: 'Можно, также вы можете их оставить в детской комнате.',
  question3: 'Какие дополнительные правила посещения центра?',
  answer3: 'Специальных дополнитеьных правил нет.',
  question4: 'Нужна ли медицинская справка для посещения залов и бассейна?',
  answer4: 'Справка нужна. Однако, если ее у вас нет, то можете ее получить у нашего врача за дополнительную плату.',
};

const updateValues = (value) => {
  accordions[0].querySelector('h3').textContent = `${value.question1}`;
  accordions[0].querySelector('p').textContent = `${value.answer1}`;
  accordions[1].querySelector('h3').textContent = `${value.question2}`;
  accordions[1].querySelector('p').textContent = `${value.answer2}`;
  accordions[2].querySelector('h3').textContent = `${value.question3}`;
  accordions[2].querySelector('p').textContent = `${value.answer3}`;
  accordions[3].querySelector('h3').textContent = `${value.question4}`;
  accordions[3].querySelector('p').textContent = `${value.answer4}`;
};

for (const tab of tabs) {
  tab.addEventListener('click', ()=> {
    tabs.forEach((item) => item.classList.remove('tabs__button--current'));
    tab.classList.add('tabs__button--current');

    if (tab.classList.contains('tabs__button--center')) {
      updateValues(center);
    } else if (tab.classList.contains('tabs__button--membership')) {
      updateValues(membership);
    } else if (tab.classList.contains('tabs__button--services')) {
      updateValues(services);
    } else if (tab.classList.contains('tabs__button--rules')) {
      updateValues(rules);
    }
  });
}

const accordionButtons = document.querySelectorAll('.accordions__button ');

for (const accordionButton of accordionButtons) {
  accordionButton.addEventListener('click', ()=> {
    accordionButton.classList.toggle('accordions__button--active');
    const element = accordionButton.parentNode.parentNode;
    element.classList.toggle('accordions__item--active');
  });
}
