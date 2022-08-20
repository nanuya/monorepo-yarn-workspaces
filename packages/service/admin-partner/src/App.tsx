import { getProduct } from '@global/api-sdk';

const App = () => {
  console.log('test');
  return (
    <div>
      <h1>상품 조회</h1>
      <div>{ getProduct(1234) }</div>
    </div>
  )
};

export default App;