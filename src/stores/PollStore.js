import { writable } from 'svelte/store';

const PollStore = writable([
  {
    id: 1,
    question: 'Python or Javascript ??',
    answerA: 'Python',
    answerB: 'Javascript',
    votesA: 9,
    votesB: 10,
  },
  {
    id: 2,
    question: 'Best processor ??',
    answerA: 'Intel chipset',
    answerB: 'M1 chip',
    votesA: 3,
    votesB: 8,
  },
  {
    id: 3,
    question: 'Favourite food ??',
    answerA: 'Noodles',
    answerB: 'Pizza',
    votesA: 7,
    votesB: 9,
  },
  {
    id: 4,
    question: 'Favourite subject ??',
    answerA: 'Mathematics',
    answerB: 'Sanskrit',
    votesA: 13,
    votesB: 4,
  },
]);

export default PollStore;
