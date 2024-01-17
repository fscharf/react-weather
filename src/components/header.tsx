import { BiCloudRain } from 'react-icons/bi'

const Header = () => {
  return (
    <header className="flex items-center justify-center mt-12">
      <h2 className="text-4xl text-center font-bold uppercase flex flex-col items-center gap-2">
        <BiCloudRain className="text-6xl" /> React Weather
      </h2>
    </header>
  )
}

export default Header
