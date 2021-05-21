import './vendors/jquery.min.js';
import AgentsContent from './contents/AgentsContent.js';

const AgentsData = AgentsContent.slice(0, -1);
let currentIndex = 0; /* GLOBAL VARIABLE */
let defaultAgent = 'viper';

const getCurrentAgent = (searchId) => {
  return AgentsData.find(({ id }) => id === searchId);
};

const getCurrentAbilities = (currentAgentId) => {
  return AgentsData.find(({ id }) => id === currentAgentId).ability;
};

const Agents = () => {
  const parameter =
    new URL(window.location.href).searchParams.get('agent') || defaultAgent;

  //------- CAROUSEL -------------//
  const carouselNextBtn = $('#js-carousel-next');
  const carouselPrevBtn = $('#js-carousel-prev');

  const handleNext = function (e) {
    $(this).attr('disabled', true);

    currentIndex += 1;

    if (currentIndex > AgentsData.length - 1) {
      currentIndex = 0;
    }

    setActiveCircle(currentIndex);
    setAgentsHeader(currentIndex);
    setAbilities(currentIndex);
    $(this).removeAttr('disabled');
  };

  const handlePrev = function (e) {
    $(this).attr('disabled', true);

    currentIndex -= 1;

    if (currentIndex < 0) {
      currentIndex = AgentsData.length - 1;
    }

    setActiveCircle(currentIndex);
    setAgentsHeader(currentIndex);
    setAbilities(currentIndex);
    $(this).removeAttr('disabled');
  };

  //--------- SET AGENTS HEADER ---------------//
  const setAgentsHeader = (searchedIndex) => {
    const currentAgent = getCurrentAgent(searchedIndex);
    const image = `<img src="${currentAgent.image}" alt="${currentAgent.name}" />`;
    const nameQuote = `
      <h1 class="agent__name">${currentAgent.name}</h1>
      <p class="agent__quote">${currentAgent.quote}</p>
    `;

    const bio = `
      <h2 class="bio__title text-title underline-after">BIOGRAPHY</h2>
      <p class="bio__body text-body">${currentAgent.bio}</p>
    `;

    $('#js-agent-image').empty().append(image);

    $('#js-agent-name-quote').empty().append(nameQuote);
    $('#js-agent-bio').empty().append(bio);
  };

  //--------- SET AGENTS ABILITIES ---------------//
  const setAbilities = (searchedIndex) => {
    const currentAbilities = getCurrentAbilities(searchedIndex);

    const icons = currentAbilities.map(({ id, ability_name, ability_logo }) => {
      // prettier-ignore
      return `
        <button 
          data-ability-index="${id}" 
          class="flex icon ${id === 0 ? 'icon--active' : ''}"
          >
          <img src="${ability_logo}" alt="${ability_name}" />
        </button>
      `;
    });

    if ($('#js-icons').length > 0) {
      $('#js-icons').empty();
    }

    icons.forEach((el) => $('#js-icons').append(el));
    $('#js-icons').each((_, icon) => setIconListener(icon, handleIconClick));
    setAbilityDescription(currentAbilities[0]);
  };

  //--------- SET ABILITY DESCRIPTION ---------------//
  const setAbilityDescription = (current) => {
    $('#js-ability-name').html(current?.ability_name);
    $('#js-ability-body').html(current?.ability_description);
  };

  //--------- CLICK HANDLER ABILITIES ---------------//
  const handleIconClick = (e) => {
    const currElement = e.target;
    $(currElement).attr('disabled', true);

    const data = $(currElement).data().abilityIndex;

    const currentAbility = getCurrentAbilities(currentIndex).find(
      ({ id }) => id === data,
    );

    setActiveIcons(data);
    setAbilityDescription(currentAbility);
    $(currElement).removeAttr('disabled');
  };

  //--------- SET ACTIVE CLASS ICON ---------------//
  const setActiveIcons = (activeIndex) => {
    $('#js-icons')
      .children()
      .each((_, el) => {
        if (activeIndex === $(el).data().abilityIndex) {
          $(el).addClass('icon--active');
        } else {
          $(el).removeClass('icon--active');
        }
      });
  };

  //-------- SET ICON CLICK LISTENER -------------//
  const setIconListener = (iconElement, listenerCallback) => {
    $(iconElement).on('click', listenerCallback);
  };

  //-------- SET ACTIVE CIRCLE INDICATOR -------------//
  const setActiveCircle = (activeIndex) => {
    $('.cc').each((_, el) =>
      $(el).data().agentsIndex === activeIndex
        ? $(el).addClass('cc--active')
        : $(el).removeClass('cc--active'),
    );
  };

  const displayLoadingScreen = () => {
    let i = 0;
    $('.loading').show();
    let timer = setInterval(() => {
      carouselNextBtn.trigger('click');
      i++;
      if (i === AgentsData.length) {
        $('.loading').slideUp();
        currentIndex = AgentsData.find(
          (item) => item.name.toLowerCase() === parameter.toLowerCase(),
        ).id;

        setAgentsHeader(currentIndex);
        setAbilities(currentIndex);
        setActiveCircle(currentIndex);
        clearInterval(timer);
      }
    }, 150);
  };

  const circleIndicator = ({ id }) =>
    `<div data-agents-index="${id}" class="cc"></div>`;

  //--------- Calling all Functions -----------//

  $('#js-circle-container')
    .empty()
    .append(AgentsData.map((el) => circleIndicator(el)).join(''));

  carouselNextBtn.on('click', handleNext);
  carouselPrevBtn.on('click', handlePrev);

  displayLoadingScreen();
};

export default Agents;
