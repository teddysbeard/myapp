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
  /* Использование функций в React */
    /* function sqaure(num) {
      return num ** 2;
    }
    function sqrt(num) {
      return num ** 0.5
    }
    const sum = sqrt(sqaure(3) + sqaure(4))
    return (
      <div><p>Гипотенуза треугольинка со сторонами 3 и 4 равна: {sum} </p></div>
    ) */
  /* ------------------------------------------------------------------- */
  /* Вызов функций внутри тегов в React */
  /* Функция разворачивает строку */
/*       function reverseString(str) {
        let revString = '';
        alert(str.length)
        for (let i = str.length - 1; i >= 0; i--) {
          // alert(i);
          revString += str[i];
        }
        return revString
      }
      return (
        <div>
          <p>Строка: "Привет"</p>
          <p>Инвертированная строка: "{reverseString("Привет")}"</p>
        </div>
      ) */

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
  /* Параметры в функции JSX */
/*   function showMess(name) {
      alert('hello, ' + name);
    }
    
    return <div>
      <button onClick={() => showMess('Jack')}>show1</button>
      <button onClick={() => showMess('Mike')}>show2</button>
    </div>; */
  /* ------------------------------------------------------------------- */
  /* Объект Event в React */
/*   function func(event) {
		console.log(event.target); // объект с событием
	}
	
	return <div>
		<button onClick={func}>act</button>
	</div>; */
  /* ------------------------------------------------------------------- */
  /* Объект Event при передаче параметров */
  /*   function func(arg, event) {
    console.log(arg, event);
	}
	
	return <div>
  <button onClick={event => func('eee', event)}>act</button>
	</div>; */
  /* ------------------------------------------------------------------- */
  /* Теги в массивах JSX */
  /*   const arr = [<p>1</p>,<p>2</p>,<p>3</p>];
  return (
    <div>
    {arr}
    </div>
    ) */
    /* ------------------------------------------------------------------- */
    /* Формирование массива тегов в цикле React */
    /*   const arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(<p>{i}</p>);
    }
    return (
      <div>
      {arr}
      </div>
      ) */
      /* ------------------------------------------------------------------- */
      /* Формирование тегов из массива с данными в React */
      // const res = [];
      // for (const elem of arr) {
        //   res.push(<p>{elem}</p>);
        // }
        /*       const arr = [1, 2, 3, 4, 5];
        const res = arr.map(function(item) {
          return <p>{item}</p>;
        });
        return <div>
        {res}
        </div> */
        /* ------------------------------------------------------------------- */
    /* Уникальные ключи в массиве тегов в React */
/*     const arr = [1, 2, 3, 4, 5];
      
    const res = arr.map(function(item, index) {
      return <p key={index}>{item}</p>;
    });
    return (
      <div>
        {res}
      </div>
    ); */
/* ------------------------------------------------------------------- */
/* Вывод массива объектов в React */
/* const prods = [
      {name: 'product1', cost: 100},
      {name: 'product2', cost: 200},
      {name: 'product3', cost: 300},
    ];
    // добавляем каждому элементу атрибут key
    const res = prods.map(function(item, index) {
      return <p key={index}>
      <span>{item.name}</span>:
        <span>{item.cost}</span>
        </p>;
      });
      
      return <div>
      {res}
      </div>;
      */
    /* ------------------------------------------------------------------- */
    /* Задание 1. Выведите элементы этого массива в виде списка ul. */
    const users = [
    {id: '1', name: 'user1', surn: 'surn1', age: 30},
    {id: '2', name: 'user2', surn: 'surn2', age: 31},
    {id: '3', name: 'user3', surn: 'surn3', age: 32},
  ];
  const res = users.map(function(item) {
    return <li key={item.id}>
    <span>{item.name}, </span>
    <span>{item.surn}, </span>
    <span>{item.age}</span>
      </li>
    });
    return (
    <ul>
    {res}
    </ul>
    );
    /* ------------------------------------------------------------------- */
    /* Уникальные ключи через id в React */
    /* const prods = [
      {id: 1, name: 'product1', cost: 100}, // добавим свойство id с номером продукта
      {id: 2, name: 'product2', cost: 200}, // добавим свойство id с номером продукта
      {id: 3, name: 'product3', cost: 300}, // добавим свойство id с номером продукта
    ];
    const res = prods.map(function(item) {
      // атрибут key не отображается в верстке
      return <p key={item.id}>
        <span>{item.name}: </span>
        <span>{item.cost} </span>
      </p>;
    });
    
    return <div>
      {res}
    </div>; */

} 





export default App;