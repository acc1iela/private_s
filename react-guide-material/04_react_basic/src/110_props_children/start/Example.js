import Profile from './components/Profile';
import Container from './components/Container';

const profile = [
  { name: 'Takashi', age: 19, country: 'Japan', color: 'green' },
  { name: 'Jane', age: 28, country: 'UK', color: 'blue' },
];

const Example = () => {
  return (
    <div>
      <Container title="Childrenとは？">
        <Profile key={profile[0].name} {...profile[0]} />
      </Container>
      first= {<Profile key={profile[0].name} {...profile[0]} />}
      second= {<Profile key={profile[1].name} {...profile[1]} />}
    </div>
  );
};

export default Example;
