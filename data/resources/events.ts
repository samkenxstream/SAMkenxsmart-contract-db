export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  link: string;
  src: string;
}

export const events: Event[] = [
  {
    id: 'connecting-the-blockchain-ecosystem-global',
    title: 'The Blockchain Expo',
    description:
      'The world-leading Blockchain Expo series returns to London at the prestigious Business Design Centre on 6-7th September 2021 and virtually on 13-15 September to host its fifth annual global event.',
    startDate: '2021-09-06T06:00:00.000Z',
    endDate: '2021-09-07T06:00:00.000Z',
    location: 'Business Design Centre | London',
    link: 'https://blockchain-expo.com/global/',
    src: '/img/events/blockchain-expo.jpg',
  },
  {
    id: 'coin-agenda-europe',
    title: 'CoinAgenda | Europe',
    description: `This year's CoinAgenda Europe conference will connect blockchain and cryptocurrency investors with startup and ICO opportunities in the European region and globally.`,
    startDate: '2021-09-27T06:00:00.000Z',
    endDate: '2021-09-29T06:00:00.000Z',
    location: 'Le Méridien Beach Plaza | Monaco, Monaco',
    link: 'https://www.eventbrite.com/e/coinagenda-europe-monaco-2021-plus-bitangels-pitch-day-tickets-163290585537',
    src: '/img/events/coinAgenda.jpg',
  },
  {
    id: 'connecting-the-blockchain-ecosystem-north-america',
    title: 'The Blockchain Expo North America',
    description:
      'The Blockchain Expo North America is an online technology conference and event, taking place 29-30 September virtually, consisting of top-level content and thought leadership discussions looking at the Blockchain ecosystem.',
    startDate: '2021-09-29T06:00:00.000Z',
    endDate: '2021-09-30T06:00:00.000Z',
    location: 'Virtual',
    link: 'https://blockchain-expo.com/northamerica/',
    src: '/img/events/blockchain-expo.jpg',
  },
  {
    id: 'chainlink-2021-fall-hackathon',
    title: 'Chainlink Fall 2021 Hackathon',
    description:
      'Join us for our biggest hackathon yet, where you’ll get the chance to build the next generation of hybrid smart contracts alongside developers, creators, artists, and industry-leading mentors from across the blockchain ecosystem.',
    startDate: '2021-10-22T06:00:00.000Z',
    endDate: '2021-11-28T07:00:00.000Z',
    location: 'Virtual',
    link: 'https://chain.link/hackathon/',
    src: '/img/events/chainlink_fall_hackathon.jpeg',
  },
  {
    id: 'chainlink-spanish-bootcamp',
    title: 'Bootcamp en Español para desarrolladores de Smart Contracts',
    description:
      'Aprende a programar contratos inteligentes en Solidity y conéctelos a datos del mundo real en una sesión grupal en vivo dirigida por un instructor con expertos Chainlink Developer Advocates.',
    startDate: '2021-09-27T06:00:00.000Z',
    endDate: '2021-10-01T06:00:00.000Z',
    location: 'Virtual',
    link: 'https://chain.link/es/bootcamp/',
    src: '/img/events/esp_bootcamp.png',
  },
];
