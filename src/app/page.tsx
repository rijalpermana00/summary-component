import { LeftCard } from '@/components/Cards/LeftCard'
import { RightCard } from '@/components/Cards/RightCard'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
      <main className="flex flex-col h-screen bg-white">
        <div className='flex h-full justify-center'>
          <div className='relative flex desktop:flex-row mobile:flex-col max-w-2xl desktop:my-auto rounded-3xl bg-white shadow-md'>  
            <LeftCard/>
            <RightCard/>
          </div>
        </div>
        <Footer/>
      </main>
  )
}

export const metadata = {
  title: 'Results summary component',
}