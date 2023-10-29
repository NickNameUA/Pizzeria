import Peperoni from "./img/Menu/Peperoni.png";
import Hawaii from "./img/Menu/Hawaii.png";
import ForCheases from "./img/Menu/ForCheases.png";
import Vegetables from "./img/Menu/Vegetables.png";
import Spicy from "./img/Menu/Spicy.png";
import ManPizza from "./img/Menu/ManPizza.png";
import MysteryPizzas from "./img/mysteryPizzas.png";
import Cola from "./img/Menu/Cola.png";
import ColaZ from "./img/Menu/ColaZ.png";
import Pepsi from "./img/Menu/Pepsi.png";
import PepsiZ from "./img/Menu/PepsiZ.png";
import Fan from "./img/Menu/Fan.png";
import FanS from "./img/Menu/FanS.png";
import NoNO from "./img/Menu/NonO.png";
import NoNJ from "./img/Menu/NonJ.png";
import NoNB from "./img/Menu/NonB.png";
import NoNU from "./img/Menu/NonU.png";
import Mon from "./img/Menu/Mon.png";
import MonU from "./img/Menu/MonU.png";
import MonPC from "./img/Menu/MonPC.png";
import MonPM from "./img/Menu/MonPM.png";
import Morsh from "./img/Menu/Morsh.png";
import Bavaria from "./img/Menu/Bavaria.png";
import SeaFood from "./img/Menu/SeaFood.png";
import Becon from "./img/Menu/Becon.png";
import ForMeats from "./img/Menu/ForMeats.png";
import Fusion from "./img/Menu/Fusion.png";
import Valentine from "./img/Menu/Valentine.png";
import Amarenno from "./img/Menu/Amarenno.png";
import Bea from "./img/Menu/Bea.png";
import Bug from "./img/Menu/Bug.png";
import Bunny from "./img/Menu/Bunny.png";
import Froggy from "./img/Menu/Froggy.png";
import Sakura from "./img/Menu/Sakura.png";
import CheaseCake from "./img/Menu/CheaseCake.png";
import Tiramisu from "./img/Menu/Tiramisu.png";
import Diablo from "./img/Menu/Diablo.png";
import Carbonara from "./img/Menu/Carbonara.png";
import Margarita from "./img/Menu/Margarita.png";
import Fri from "./img/Menu/Fri.png";
import Caprichosa from "./img/Menu/Caprichosa.png";

const imageMap = {
  Капрічоза: Caprichosa,
  "Піца Фрі": Fri,
  Маргаритта: Margarita,
  Карбонара: Carbonara,
  Діабло: Diablo,
  Тірамісу: Tiramisu,
  "Чіз-кейк": CheaseCake,
  "Сакура-Пай": Sakura,
  "Пірожине «Зайчик»": Bunny,
  "Пірожине «Жабка»": Froggy,
  Пепероні: Peperoni,
  Гавайська: Hawaii,
  "Чотири сири": ForCheases,
  Вегетаріанська: Vegetables,
  Гостра: Spicy,
  Чоловіча: ManPizza,
  "Coca-Cola": Cola,
  "Coca-Cola:Zero": ColaZ,
  Pepsi: Pepsi,
  "Pepsi:Zero": PepsiZ,
  Fanta: Fan,
  "Fanta:Shokata": FanS,
  "Non Stop:Original": NoNO,
  "Non Stop:Jungle": NoNJ,
  "Non Stop:Boost": NoNB,
  "Non Stop:Ultra": NoNU,
  Monster: Mon,
  "Monster:Ultra V": MonU,
  "Monster:Pacific": MonPC,
  "Monster:MIXXO": MonPM,
  Моршинська: Morsh,
  Баварія: Bavaria,
  "Морська піца": SeaFood,
  "Піца з беконом": Becon,
  "Чотири м'яса": ForMeats,
  "Пірожине «Ф'южн»": Fusion,
  "Пірожине «Валентинка»": Valentine,
  "Пірожине «Амаренно»": Amarenno,
  "Пірожине «Бджілка»": Bea,
  "Пірожине «Сонечко»": Bug,
} as any;

const getPhoto = (name: string) => {
  return imageMap[name] || MysteryPizzas;
};

export default getPhoto;
