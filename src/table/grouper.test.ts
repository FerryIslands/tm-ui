import { grouper } from './grouper'

const topScorers = [
  {
    name: 'Markus Rosenberg',
    nationality: 'Sverige',
    team: 'Malmö FF',
  },
  {
    name: 'David Moberg Karlsson',
    nationality: 'Sverige',
    team: 'IFK Norrköping',
  },
  {
    name: 'Jiloan Hamad',
    nationality: 'Sverige',
    team: 'Hammarby',
  },
  {
    name: 'Bajram Ajeti',
    nationality: 'Norge',
    team: 'Brommapojkarna',
  },
  {
    name: 'Mohammed Buya Turay',
    nationality: 'Sierra Leone',
    team: 'Dalkurd',
  },
  {
    name: 'Imad Khalili',
    nationality: 'Sverige',
    team: 'Hammarby',
  },
]

test('group 1 column', () => {
  expect(grouper(['nationality'], topScorers)).toEqual([
    {
      id: 'Norge',
      items: [
        {
          name: 'Bajram Ajeti',
          nationality: 'Norge',
          team: 'Brommapojkarna',
        },
      ],
      nationality: 'Norge',
    },
    {
      id: 'Sierra Leone',
      items: [
        {
          name: 'Mohammed Buya Turay',
          nationality: 'Sierra Leone',
          team: 'Dalkurd',
        },
      ],
      nationality: 'Sierra Leone',
    },
    {
      id: 'Sverige',
      items: [
        {
          name: 'Markus Rosenberg',
          nationality: 'Sverige',
          team: 'Malmö FF',
        },
        {
          name: 'David Moberg Karlsson',
          nationality: 'Sverige',
          team: 'IFK Norrköping',
        },
        {
          name: 'Jiloan Hamad',
          nationality: 'Sverige',
          team: 'Hammarby',
        },
        {
          name: 'Imad Khalili',
          nationality: 'Sverige',
          team: 'Hammarby',
        },
      ],
      nationality: 'Sverige',
    },
  ])
})

test('group 2 columns', () => {
  expect(grouper(['nationality', 'team'], topScorers)).toEqual([
    {
      id: 'Norge - Brommapojkarna',
      items: [
        {
          name: 'Bajram Ajeti',
          nationality: 'Norge',
          team: 'Brommapojkarna',
        },
      ],
      nationality: 'Norge',
      team: 'Brommapojkarna',
    },
    {
      id: 'Sierra Leone - Dalkurd',
      items: [
        {
          name: 'Mohammed Buya Turay',
          nationality: 'Sierra Leone',
          team: 'Dalkurd',
        },
      ],
      nationality: 'Sierra Leone',
      team: 'Dalkurd',
    },
    {
      id: 'Sverige - Hammarby',
      items: [
        {
          name: 'Jiloan Hamad',
          nationality: 'Sverige',
          team: 'Hammarby',
        },
        {
          name: 'Imad Khalili',
          nationality: 'Sverige',
          team: 'Hammarby',
        },
      ],
      nationality: 'Sverige',
      team: 'Hammarby',
    },
    {
      id: 'Sverige - IFK Norrköping',
      items: [
        {
          name: 'David Moberg Karlsson',
          nationality: 'Sverige',
          team: 'IFK Norrköping',
        },
      ],
      nationality: 'Sverige',
      team: 'IFK Norrköping',
    },
    {
      id: 'Sverige - Malmö FF',
      items: [
        {
          name: 'Markus Rosenberg',
          nationality: 'Sverige',
          team: 'Malmö FF',
        },
      ],
      nationality: 'Sverige',
      team: 'Malmö FF',
    },
  ])
})

test('group 1 column and sort descending', () => {
  expect(
    grouper(['nationality'], topScorers, {
      column: 'nationality',
      desc: true,
    }),
  ).toEqual([
    {
      id: 'Sverige',
      items: [
        {
          name: 'Markus Rosenberg',
          nationality: 'Sverige',
          team: 'Malmö FF',
        },
        {
          name: 'David Moberg Karlsson',
          nationality: 'Sverige',
          team: 'IFK Norrköping',
        },
        {
          name: 'Jiloan Hamad',
          nationality: 'Sverige',
          team: 'Hammarby',
        },
        {
          name: 'Imad Khalili',
          nationality: 'Sverige',
          team: 'Hammarby',
        },
      ],
      nationality: 'Sverige',
    },
    {
      id: 'Sierra Leone',
      items: [
        {
          name: 'Mohammed Buya Turay',
          nationality: 'Sierra Leone',
          team: 'Dalkurd',
        },
      ],
      nationality: 'Sierra Leone',
    },
    {
      id: 'Norge',
      items: [
        {
          name: 'Bajram Ajeti',
          nationality: 'Norge',
          team: 'Brommapojkarna',
        },
      ],
      nationality: 'Norge',
    },
  ])
})
test('group 2 columns and sort', () => {
  expect(
    grouper(['nationality', 'team'], topScorers, {
      column: 'team',
      desc: true,
    }),
  ).toEqual([
    {
      id: 'Sverige - Malmö FF',
      items: [
        {
          name: 'Markus Rosenberg',
          nationality: 'Sverige',
          team: 'Malmö FF',
        },
      ],
      nationality: 'Sverige',
      team: 'Malmö FF',
    },
    {
      id: 'Sverige - IFK Norrköping',
      items: [
        {
          name: 'David Moberg Karlsson',
          nationality: 'Sverige',
          team: 'IFK Norrköping',
        },
      ],
      nationality: 'Sverige',
      team: 'IFK Norrköping',
    },
    {
      id: 'Sverige - Hammarby',
      items: [
        {
          name: 'Jiloan Hamad',
          nationality: 'Sverige',
          team: 'Hammarby',
        },
        {
          name: 'Imad Khalili',
          nationality: 'Sverige',
          team: 'Hammarby',
        },
      ],
      nationality: 'Sverige',
      team: 'Hammarby',
    },
    {
      id: 'Sierra Leone - Dalkurd',
      items: [
        {
          name: 'Mohammed Buya Turay',
          nationality: 'Sierra Leone',
          team: 'Dalkurd',
        },
      ],
      nationality: 'Sierra Leone',
      team: 'Dalkurd',
    },
    {
      id: 'Norge - Brommapojkarna',
      items: [
        {
          name: 'Bajram Ajeti',
          nationality: 'Norge',
          team: 'Brommapojkarna',
        },
      ],
      nationality: 'Norge',
      team: 'Brommapojkarna',
    },
  ])
})
