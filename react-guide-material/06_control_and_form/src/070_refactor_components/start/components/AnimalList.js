import AnimalItem from './AnimalItem';
const AnimalList = ({ animals }) => {
  if (animals.length === 0) {
    return <h3>アニマルが見つかりません</h3>;
  }
  return (
    <ul>
      {animals
        .filter((animal) => {
          const isMatch = animal.indexOf(filterVal) !== -1;
          return isMatch;
        })
        .map((animal) => {
          return <AnimalItem animal={animal} key={animal} />;
        })}
    </ul>
  );
};

export default AnimalList;
