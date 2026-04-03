import Navbar from "./components/Navbar"
import Card from "./components/Card"

function App() {

  return (
    <>
    <Navbar/>
    <div className="w-full flex flex-col items-center justify-center sm:flex-row sm:flex-wrap sm:gap-10">
      <Card title='moletom' price='12'/>
      <Card title='moletom' price='12'/>
      <Card title='moletom' price='12'/>
      <Card title='moletom' price='12'/>
      <Card title='moletom' price='12'/>
      <Card title='moletom' price='12'/>
    </div>
    
    </>
  )
}

export default App
