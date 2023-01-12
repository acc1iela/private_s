const AnimalList = () => {
  return (
    <ul>
      {animals
        .filter((animal) => {
          const isMatch = animal.indexOf(filterVal) !== -1;
          return isMatch;
        })
        .map((animal) => {
          return (
            <li key={animal}>
              {animal}
              {animal === 'Dog' && '★'}
            </li>
          );
        })}
    </ul>
  );
};

export default AnimalList;
