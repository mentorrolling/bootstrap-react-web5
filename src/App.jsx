import NavBarApp from "./components/NavBarApp";
import CarouselApp from "./components/CarouselApp";
import speakers from "./data/speakers";
import CardSpeaker from "./components/CardSpeaker";

const App = () => {
  //código de javascript
  console.log(speakers);
  const carouselImg = [
    {
      src: "1.jpg",
      alt: "Imagen 1",
    },
    {
      src: "2.jpg",
      alt: "Imagen 2",
    },
    {
      src: "3.jpg",
      alt: "Imagen 3",
    },
  ];
  const mostrarMensaje = (mensaje) => {
    alert(mensaje);
  };
  //código JSX
  return (
    <>
      <NavBarApp />
      <CarouselApp carouselImg={carouselImg} id={"carousel1"} />

      <div className="container">
        <div className="row">
          <div className="col p-2 text-center">
            <h1>Bienvenidos a RollingCode Conf</h1>
          </div>
          <div className="col-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
              commodi cumque provident quod earum laboriosam similique quasi
              excepturi dolores? Praesentium autem excepturi maxime! Voluptas
              sed voluptatem quaerat rem distinctio obcaecati nam in possimus.
              Inventore, molestias. Adipisci saepe, officiis harum voluptates
              possimus officia quae nihil dolore, fugiat id atque laudantium
              eveniet.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
              voluptatum quasi! Id veniam, quae dolore perferendis praesentium
              laborum dolores. Culpa dicta natus eveniet enim repudiandae eaque,
              nam iure id quo!
            </p>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {speakers.map((speaker, index) => (
            <CardSpeaker key={index} speaker={speaker} />
          ))}
        </div>
        <div className="row my-5">
          <div className="col">
            <h3>Mensaje</h3>
            <button
              onClick={() => mostrarMensaje("Hola mundo")}
              className="btn btn-warning"
            >
              Click me!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
