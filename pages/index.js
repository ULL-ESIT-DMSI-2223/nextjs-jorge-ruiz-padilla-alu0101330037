import Link from 'next/link'

export default function Home() {
  return (
    <ul>
      <h1>
        
        <center><Link href='/pet'>  Generador de nombres de mascotas </Link></center>
        
        <center><Link href='/image'> Generador imagenes </Link></center>

      
      </h1>
    </ul>
  )
}