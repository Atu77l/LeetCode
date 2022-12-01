import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import './Tab.css';
 
const Tab1=() =>{
 return (
  //  <div className="tab">
     <Tabs className="Tabs">
       <TabList>
         <Tab>Tab 1</Tab>
         <Tab>Tab 2</Tab>
         <Tab>Tab 3</Tab>
       </TabList>
<TabPanel>
         <p>What is Your Name</p>
         <p>In which language are you best?</p>
       </TabPanel>
       <TabPanel>
         <p>C+++,JavaScript,Competitive Coding</p>
         <p>Hello , I am good at all of these.</p>
       </TabPanel>
       <TabPanel>
         <p>Tab 3 works!</p>
       </TabPanel>
     </Tabs>
  //  </div>
 );
}
 
export default Tab1;