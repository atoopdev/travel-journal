import TravelData from "./data"
import TripCard from './components/tripcard';
import Header from "./components/header"


function App() {
  // get data out of file and into object

  const tripElements = TravelData.map(
    (trip) =>{
      // return <TripCard title={trip.title}/>
      return <TripCard key={trip.id} trip={trip} />
    }
  )
console.log(tripElements)

  return (
    <div>
    <Header />
    <div className="trip-listing">{tripElements}
    </div>
    </div>
  );
}

export default App;
