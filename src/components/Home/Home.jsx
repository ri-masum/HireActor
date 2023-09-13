import { useEffect, useState } from "react";

const Home = () => {
  const [actors, setActor] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/gias-uddin-swe/b8-test-avenger/main/public/data.json"
    )
      .then((res) => res.json())
      .then((data) => setActor(data));
  }, []);

  console.log(actors);
  return (
    <div>
      <div
        className="hero min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500"
        // style={{
        //   backgroundImage:
        //     "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        // }}
      >
        <div className="hero-overlay bg-opacity-70 "></div>

        <div className="flex w-full">
          {/* lets try to make a cards*/}
          <div className="w-2/3 gap-4 flex flex-wrap">
            {actors.map((actor) => (
              // eslint-disable-next-line react/jsx-key
              <div key={actor.id} className="card w-96 bg-red-100 shadow-xl bg-opacity-50 ">
                <figure>
                  <img
                    className="rounded-full"
                    src={actor.image}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body text-black">
                  <h2 className="card-title">{actor.name}</h2>
                  <p>
                    <small>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sequi, fugit.
                    </small>
                  </p>

                  <div className="flex">
                    <p>Salary:${actor.salary}</p>
                    <p>{actor.role}</p>
                  </div>
                  <div className="card-actions justify-center">
                    <button className="btn btn-accent  normal-case text-black">
                      Select
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* cart */}
          <div className="w-1/3">
            <h1 className="text-white font-bold text-3xl">cart section</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
