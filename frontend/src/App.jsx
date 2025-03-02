import { useEffect, useState } from 'react'
import './App.css'
import  { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/ui/accordion'
function App() {
  
  const [testData, setTestData] = useState('')
  // const fetchJoke = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://official-joke-api.appspot.com/random_joke"
  //     );
  //     const data = await response.json();
  //     setJoke(data);
  //   } catch (error) {
  //     console.error("Error fetching joke:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchJoke();
  // }, [reload]);

  const fetchTestApi = async() => {
    try{
      const response = await fetch('http://localhost:5000/test')
      const data = await response.json();
      
      setTestData(data);
  
    }catch(error) {
      console.log("Something went wrong while fetching test data", error);
    }
  }
  
  useEffect(() => {
    fetchTestApi();
  }, [])
  return (
    <>
      <h3>Test data</h3>
      {
        testData? <div>{testData}</div>: <div>Noting</div>
      }
    </>
  )
}

export default App
