import AnimalItem from './AnimalItem';

const AnimalList = ({ animals }) => {
  if (animals.length === 0) {
    return <h4>アニマルは存在しませんよ ' '</h4>;
  }
  return (
    <ul>
      {animals.map((animal) => {
        return <AnimalItem animal={animal} key={animal} />;
      })}
    </ul>
  );
};

export default AnimalList;
