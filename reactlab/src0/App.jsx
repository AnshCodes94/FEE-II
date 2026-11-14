import { Carousel } from "./Carousel";

import bmw from "./images/bmw.jpg";
import harry from "./images/harry.jpg";
import strangerThings from "./images/stranger-things.jpg";
import upsideDown from "./images/upside down.jpg";

const imageUrls = [bmw, harry, strangerThings, upsideDown];

const App = () => {
  return (
    <div className="fyc bg71 p3 mt2">
      <Carousel images={imageUrls} />
    </div>
  );
};

export default App;