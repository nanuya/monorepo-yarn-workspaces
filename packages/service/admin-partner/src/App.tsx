import { getProduct } from '@global/api-sdk';

const App = () => {
  console.log('test');
  return (
    <div>
      <h1>์ํ ์กฐํ</h1>
      <div>{ getProduct(1234) }</div>
    </div>
  )
};

export default App;