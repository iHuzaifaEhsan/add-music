import { useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'

const App = () => {

  const data = [
    {
      image: "https://scontent.flyp1-1.fna.fbcdn.net/v/t1.6435-9/199080843_187352526726092_1683789005869521061_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeG5hvL5-2KUTzAOXxNkkXEVbiUaYNlne9NuJRpg2Wd700BPTFTaq9RfqQdrxbW3gNHhlFOHlD3tO_xmgUQZrfwB&_nc_ohc=U69gK8qzaTMQ7kNvgE_qqgv&_nc_ht=scontent.flyp1-1.fna&oh=00_AYBXakVHClSfWF3EPzKlzuzdBVtS7DYdLmLjNoxU7bUfNg&oe=6723DB5F",
      name: "Janam Janam",
      artist: "Arijit Singh",
      added: false
    },
    {
      image: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Night Sky",
      artist: "Chris Smith",
      added: false
    },
    {
      image: "https://images.unsplash.com/photo-1534081333815-ae5019106622?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sunset Dreams",
      artist: "Emma Davis",
      added: false
    },
    {
      image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Autumn Vibes",
      artist: "Julia Green",
      added: false
    },
    {
      image: "https://scontent.flyp1-1.fna.fbcdn.net/v/t39.30808-6/436995000_414501091194694_2042142805876255461_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGdEQSMa4D-m-RWkSVDX6Vx7_lvM5tEKGvv-W8zm0Qoa_8lBbN_oD2hl6AR0RlRxyFZ2jWIrmodZlHbj-ScfnO6&_nc_ohc=VZT1e53hVjIQ7kNvgGzgQ6c&_nc_ht=scontent.flyp1-1.fna&_nc_gid=AUMfupjQtxr3bHVc_629iR9&oh=00_AYBj8VIATR9kWHoFBnhwa4WJtGZDIjgywnyr0rA4Iew0sw&oe=670234D9",
      name: "Never Sing",
      artist: "Huzaifa Ehsan",
      added: false
    }
  ];


  const [song, setSong] = useState(data);

  const handleClick = (index) => {
    setSong((prev) => {
      return prev.map((item, itemIndex) => {
        if (itemIndex === index) return { ...item, added: !item.added }
        return item;
      })
    })
  }

  return (
    <>
      <div className='w-full h-screen bg-zinc-300 font-family: ui-sans-serif'>
        <Navbar data={song}></Navbar>
        <div className='px-20 flex gap-10 mt-10 flex-wrap'>
          {song.map((obj, i) => <Card key={i} index={i} data={obj} handleClick={handleClick} />)}
        </div>
      </div>
    </>
  )
}

export default App