'uses-strict';
let worker = {
  list: {
    business: {
      creator: [
        { name: 'acc1io', age: 23, frontendEngineer() { } },
        { name: 'another_acc1io', age: 45, softwareEngineer() { } }
      ],
      teach() { }
    },
    company: {
      type: [{ name: 'Google' }, { name: 'Microsoft' }],
      makeWorld() { }
    }
  },
  plan() { },
  uploaded() { }
};

worker.list.business.creator.name();
