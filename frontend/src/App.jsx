import './App.css'
import  { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/ui/accordion'
function App() {
 

  return (
    <>
     <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">ShadCN Accordion Test</h1>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Click to Expand</AccordionTrigger>
          <AccordionContent>
            This is the content inside the accordion.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
    </>
  )
}

export default App
