
import './App.css';
import Item  from './components/Verma'
import ItemDate from './components/ItemDate'
import Card from './components/Card'


// function App() {
//   const itemFirstName="Nirma";
//   const itemSecondName="RIN";
//   const itemThirdName="555";
//   return (
//     <div>
//           <Item name={itemFirstName}></Item>
//           <ItemDate day="10" month="December" year="1990"></ItemDate>

//           <Item name={itemSecondName}></Item>
//           <ItemDate day="15" month="June" year="2000"></ItemDate>

//           <Item name={itemThirdName}></Item>
//           <ItemDate day="20" month="July" year="2010"></ItemDate>
//           <div className="App">hello ji kese ho sare</div>
//     </div>
//   );
// }

function App() {
  const response=[
    {
      itemFirstName:"Nirma",
      itemDay:"10",
      itemMonth:"December",
      itemYear:"1990"


    },
    {
      itemSecondName:"RIN",
      itemDay:"30",
      itemMonth:"June",
      itemYear:"1995"


    },
    {
      itemThirdName:"555",
      itemDay:"20",
      itemMonth:"July",
      itemYear:"2000"


    }
  ]
  return (
    <div>
        <Card>
          <Item name={response[0].itemFirstName}>hello ji kese ho saare</Item>
          <ItemDate day={response[0].itemDay} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

          <Item name={response[1].itemSecondName}></Item>
          <ItemDate day={response[1].itemDay} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

          <Item name={response[2].itemThirdName}></Item>
          <ItemDate day={response[2].itemDay} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
          <div className="App">hello ji kese ho sare</div>
          </Card>
    </div>
  );
}

export default App;

