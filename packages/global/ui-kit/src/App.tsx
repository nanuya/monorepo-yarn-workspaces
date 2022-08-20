import { getMall } from '@global/api-sdk';

const App = () => {
  console.log('test');
  return (
    <div>
      <h1>쇼핑몰 조회</h1>
      <div>{ getMall(3124) }</div>
    </div>
  )
};

export default App;