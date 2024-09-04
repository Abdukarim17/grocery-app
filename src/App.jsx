import Header from "./components/Header";
import SearchItem from "./components/SearchItem";
import AddItem from "./components/AddItem";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";
import Content from "./components/Content";
import { FaLaptopHouse } from "react-icons/fa";

const BASE_URL = 'http://localhost:3000'

function App() {
  const [items, setItems] =useState([])
  const [item, setItem] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)
  
  useEffect(()=>{
    async function fetchItems(){
      try{
        const response = await fetch(`${BASE_URL}/items`)
        const products = await response.json();
        setItems(products)
      }
      catch(e){
        console.error(e.message) 
      }finally{
        setLoading(false)
      }

    }

    fetchItems()
  }, [])

  

  async function handleSubmit(e){
    e.preventDefault()
    const newItem = {
      id: String(items.length === 0 ? 1 : +items.at(-1).id + 1),
      item, 
      checked: true
    }

    try{
      const response = await fetch(`${BASE_URL}/items`, {
        method: 'POST', 
        headers: {
          "Content-type": 'application/json'
        }, 
        body: JSON.stringify(newItem)
      });

      const newItems = [...items, newItem];
      setItems(newItems);
      setItem('')


    }catch(e){
      console.error(e)
    }
    
  }

  async function handleDelete(id){
    console.log(id)
    try{
      const response = await fetch(`${BASE_URL}/items/${id}`, {
        method: 'DELETE'
      });

    const filteredItems = items.filter(item => item.id !==id);
    setItems(filteredItems)

    }
    catch(e){
      console.error(e)
    }
  }

  async function handleCheck( id){ 
    try{
      const item = items.find((i)=>
        i.id === id
      );
      const response = await fetch(`${BASE_URL}/items/${id}`, {
        method: "PUT", 
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({...item, checked: !item.checked})
      });
      

      if(!response.ok){
        const errorText = response.text();
        throw new Error ("Network was not ok:", errorText)
      }
      const updatedItem = await response.json();
      const updatedItems = items.map((item)=>
        item.id === updatedItem.id ? updatedItem : item
      );
      
      setItems(updatedItems)
    }
    catch(e){
      console.error(e)
    }

    
  }
  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }

  const filteredItems = items.filter((item) =>
    item.item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='App'>
      <Header title='Grocery List' />
      <AddItem handleSubmit={handleSubmit} item={item} setItem={setItem}/>
      <SearchItem searchQuery={searchQuery} handleSearch={handleSearch}/>
      <main>
        {loading ? <p>Loading...</p> : <Content items={filteredItems} handleDelete={handleDelete} handleCheck={handleCheck}/>}
      </main>
      <Footer />
    </div>
  );
}

export default App;
