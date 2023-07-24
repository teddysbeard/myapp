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
  // const str = 'String constant'
  // const str2 = 'One more string'
  // return (
  //   <div>{str} additional text {str2}</div>
  // )
  /* ------------------------------------------------------------------- */
  /* вставка массивов в JSX */
/*   const arr = [1, 2 ,3];
  return (
    <div>
      <p>{arr[0]}</p>
      <p>{arr[1]}</p>
      <p>{arr[2]}</p>
      <p>{arr}</p>
    </div>
  ) */
    /* ------------------------------------------------------------------- */
  /* вставка объектов в JSX */
/*   const obj = {name: 'john', surname: 'smit'};
  return (
    <p>
      name: <span>{obj['name']}</span>, <br></br>
      surname: <span>{obj['surname']}</span>,
    </p>
  ) */
  /* ------------------------------------------------------------------- */
  /* Вставка переменных и констант в атрибуты тегов в JSX */
/*   const str = 'elem';
  return (
    <div id={str}>
      text
    </div>
  ) */
  /* ------------------------------------------------------------------- */
  /* Хранение тегов в переменных и константах JSX */
  /* const str = <p>Хранение тегов в переменных и константах JSX</p>;
  return (
    <div>{str}</div>
  ) */
  /* ------------------------------------------------------------------- */
  /* Закрытость тегов JSX */
/*   const message = "Enter your text"
  return (
    <div>
      <input placeholder={message}/>
    </div>
  ) */
  /* ------------------------------------------------------------------- */
  /* В React теги tr должны быть вложены либо в тег tbody, либо в thead, либо в tfoot. */
  /* return (
    <table>
      <tbody>
        <tr>
            <td>1</td>
            <td>2</td>
        </tr>
          <tr>
            <td>3</td>
            <td>4</td>
        </tr>
    </tbody>
  </table>
  ) */
  /* ------------------------------------------------------------------- */
  /* Выполнение кода JavaScript */
/*   const name = 'john';
	const surname = 'smit';
	
	return <div>
		result: {name + ' ' + surname}
	</div>; */
  /* ------------------------------------------------------------------- */
  /* Применение условий в JSX */
  /* let text;
	const show = true;
	
	if (show) {
		text = 'text1';
	} else {
		text = 'text2';
	}
	
	return <div>
		{text}
	</div>; */
  /* ------------------------------------------------------------------- */
  /* Тернарный оператор в JSX */
/*   const show = true;
  return (
    <div>
      {show ? <p>text1</p> : <p>text2</p>}
    </div>
  ) */
  /* ------------------------------------------------------------------- */
  /* Использование оператора && в JSX */

/*   const show = true;
  return <div>
    {show && <p>text</p>}
  </div>; */

   /* ------------------------------------------------------------------- */
  /* Инвертирование для сокращенных условий в JSX в JSX */
  // const hide = false;
	
	// return <div>
	// 	{!hide && <p>text</p>}
	// </div>;

  /* ------------------------------------------------------------------- */
  /* Навешивание событий в JSX */
  
/*   function showMess() {
		alert('hello');
	}
	
	return <div>
		<button onClick={showMess}>show</button>
	</div>; */
/*   function show1() {
		alert(1);
	}
	
	function show2() {
		alert(2);
	}
	
	return <div>
		<button onClick={show1}>act1</button>
		<button onClick={show2}>act2</button>
	</div>; */
  /* ------------------------------------------------------------------- */
  /* Объект Event при передаче параметров */
  function func(arg, event) {
		console.log(arg, event);
	}
	
	return <div>
		<button onClick={event => func('eee', event)}>act</button>
	</div>;

}





export default App;