import React from 'react';
<script src="http://10.211.1.92:8097"></script>
function App() {
  // const  elem = <div>
  //   <p class='first-paragraph'>Hello</p>
  //   <p class='second-paragraph'>World</p>
  //   </div>;
	// return elem;
  // return  (
  //   <div>
  //     <p class='first-paragraph'>Hello</p>
  //     <p class='second-paragraph'>World</p>
  //   </div>);
  /* ------------------------------------------------------------------- */
  // В следующем коде автор кода хочет вернуть тег ul
  // return (
  //   <ul>
	// 		<li>text1</li>
	// 		<li>text2</li>
	// 		<li>text3</li>
	// 	</ul>
  // );
  
 /* Вставка значений переменных и констант в JSX */
  const str = 'String constant'
  return (
    <div>{str} additional text</div>
  )
}

export default App;