import React , {useState}from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import {Gents, Ladies} from '../data'
import WomenCollection from '../components/WomenCollection'

const MainPage = () => {
const [gentsFashion,setGentsFashion] = useState(Gents)
const [ladiesFashion, setLadiesFashion] = useState(Ladies)



  console.log(Gents)
  return (
    <div>
        <Header />
        <Banner />
        <Collections gents = {gentsFashion} />
        <WomenCollection ladies = {ladiesFashion} />
        <Footer />
        
    </div>
  )
}

export default MainPage