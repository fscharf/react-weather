import { Header, Main } from 'components'
import WeatherProvider from 'contexts/weather'
import 'react-loading-skeleton/dist/skeleton.css'

function App() {
  return (
    <WeatherProvider>
      <Header />
      <main className="flex flex-col items-center justify-center my-12">
        <Main />
      </main>
    </WeatherProvider>
  )
}

export default App
