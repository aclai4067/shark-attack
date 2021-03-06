const students = [
  {
    id: 'student1',
    firstName: 'Alesha',
    lastName: 'Reed',
    isDead: false,
    imgUrl: 'https://avatars1.githubusercontent.com/u/39807157?s=460&v=4',
  },
  {
    id: 'student2',
    firstName: 'Ashley',
    lastName: 'Claiborne',
    isDead: false,
    imgUrl: 'https://avatars0.githubusercontent.com/u/47763728?s=460&v=4',
  },
  {
    id: 'student3',
    firstName: 'Charity',
    lastName: 'Bunyon',
    isDead: false,
    imgUrl: 'https://avatars0.githubusercontent.com/u/52020883?s=460&v=4',
  },
  {
    id: 'student4',
    firstName: 'Connor',
    lastName: 'Sullivan',
    isDead: false,
    imgUrl: 'https://avatars0.githubusercontent.com/u/54124397?s=460&v=4',
  },
  {
    id: 'student5',
    firstName: 'Crystal',
    lastName: 'Broach',
    isDead: false,
    imgUrl: 'https://avatars2.githubusercontent.com/u/51486216?s=460&v=4',
  },
  {
    id: 'student6',
    firstName: 'Denise',
    lastName: 'Baker',
    isDead: false,
    imgUrl: 'https://avatars3.githubusercontent.com/u/38984447?s=460&v=4',
  },
  {
    id: 'student7',
    firstName: 'Emilee',
    lastName: 'Mitchell',
    isDead: false,
    imgUrl: 'https://avatars1.githubusercontent.com/u/36553398?s=460&v=4',
  },
  {
    id: 'student8',
    firstName: 'Evan',
    lastName: 'Grabenstein',
    isDead: false,
    imgUrl: 'https://avatars2.githubusercontent.com/u/26425684?s=460&v=4',
  },
  {
    id: 'student9',
    firstName: 'Gabe',
    lastName: 'Seals',
    isDead: false,
    imgUrl: 'https://avatars1.githubusercontent.com/u/52087296?s=460&v=4',
  },
  {
    id: 'student10',
    firstName: 'Ivan',
    lastName: 'Phelps',
    isDead: false,
    imgUrl: 'https://avatars2.githubusercontent.com/u/21040719?s=460&v=4',
  },
  {
    id: 'student11',
    firstName: 'Jacob',
    lastName: 'Best-Wittenberg',
    isDead: false,
    imgUrl: 'https://avatars0.githubusercontent.com/u/51467735?s=460&v=4',
  },
  {
    id: 'student12',
    firstName: 'Jamie',
    lastName: 'Phillips',
    isDead: false,
    imgUrl: 'https://avatars2.githubusercontent.com/u/51938283?s=460&v=4',
  },
  {
    id: 'student13',
    firstName: 'Jasmin',
    lastName: 'Williams',
    isDead: false,
    imgUrl: 'https://avatars1.githubusercontent.com/u/47404655?s=460&v=4',
  },
  {
    id: 'student14',
    firstName: 'John',
    lastName: 'Key',
    isDead: false,
    imgUrl: 'https://avatars3.githubusercontent.com/u/54037058?s=460&v=4',
  },
  {
    id: 'student15',
    firstName: 'John',
    lastName: 'Thielman',
    isDead: false,
    imgUrl: 'https://avatars3.githubusercontent.com/u/54124593?s=460&v=4',
  },
  {
    id: 'student16',
    firstName: 'John',
    lastName: 'Johnson',
    isDead: false,
    imgUrl: 'https://avatars0.githubusercontent.com/u/51214463?s=460&v=4',
  },
  {
    id: 'student17',
    firstName: 'Captain',
    lastName: 'Creel',
    isDead: false,
    imgUrl: 'https://avatars2.githubusercontent.com/u/54123694?s=460&v=4',
  },
  {
    id: 'student18',
    firstName: 'Laura',
    lastName: 'Collins',
    isDead: false,
    imgUrl: 'https://avatars1.githubusercontent.com/u/51382883?s=460&v=4',
  },
  {
    id: 'student19',
    firstName: 'Maggie',
    lastName: 'Greene',
    isDead: false,
    imgUrl: 'https://avatars0.githubusercontent.com/u/54197223?s=460&v=4',
  },
  {
    id: 'student20',
    firstName: 'Maria',
    lastName: 'Brock',
    isDead: false,
    imgUrl: 'https://avatars2.githubusercontent.com/u/54127296?s=460&v=4',
  },
  {
    id: 'student21',
    firstName: 'Monica',
    lastName: 'Djunaidi',
    isDead: false,
    imgUrl: 'https://avatars0.githubusercontent.com/u/53092019?s=460&v=4',
  },
  {
    id: 'student22',
    firstName: 'Randy',
    lastName: 'Tate',
    isDead: false,
    imgUrl: 'https://avatars2.githubusercontent.com/u/54008854?s=460&v=4',
  },
  {
    id: 'student23',
    firstName: 'Raymond',
    lastName: 'Arceneaux',
    isDead: false,
    imgUrl: 'https://avatars3.githubusercontent.com/u/40898992?s=460&v=4',
  },
];

const livingStudents = () => students.filter((student) => !student.isDead);

const dearlyDeparted = () => students.filter((student) => student.isDead);

const followTheLight = (livingStudentId) => {
  const studentIndex = students.findIndex((student) => student.id === livingStudentId);
  students[studentIndex].isDead = true;
};

export default { livingStudents, dearlyDeparted, followTheLight };
