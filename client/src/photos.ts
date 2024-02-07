import Peperoni from "./img/Menu/Peperoni.webp";
import Hawaii from "./img/Menu/Hawaii.webp";
import ForCheases from "./img/Menu/ForCheases.webp";
import Vegetables from "./img/Menu/Vegetables.webp";
import Spicy from "./img/Menu/Spicy.webp";
import ManPizza from "./img/Menu/ManPizza.webp";
import MysteryPizzas from "./img/mysteryPizzas.webp";
import Cola from "./img/Menu/Cola.webp";
import ColaZ from "./img/Menu/ColaZ.webp";
import Pepsi from "./img/Menu/Pepsi.webp";
import PepsiZ from "./img/Menu/PepsiZ.webp";
import Fan from "./img/Menu/Fan.webp";
import FanS from "./img/Menu/FanS.webp";
import NoNO from "./img/Menu/NonO.webp";
import NoNJ from "./img/Menu/NonJ.webp";
import NoNB from "./img/Menu/NonB.webp";
import NoNU from "./img/Menu/NonU.webp";
import Mon from "./img/Menu/Mon.webp";
import MonU from "./img/Menu/MonU.webp";
import MonPC from "./img/Menu/MonPC.webp";
import MonPM from "./img/Menu/MonPM.webp";
import Morsh from "./img/Menu/Morsh.webp";
import Bavaria from "./img/Menu/Bavaria.webp";
import SeaFood from "./img/Menu/SeaFood.webp";
import Becon from "./img/Menu/Becon.webp";
import ForMeats from "./img/Menu/ForMeats.webp";
import Fusion from "./img/Menu/Fusion.webp";
import Valentine from "./img/Menu/Valentine.webp";
import Amarenno from "./img/Menu/Amarenno.webp";
import Bea from "./img/Menu/Bea.webp";
import Bug from "./img/Menu/Bug.webp";
import Bunny from "./img/Menu/Bunny.webp";
import Froggy from "./img/Menu/Froggy.webp";
import Sakura from "./img/Menu/Sakura.webp";
import CheaseCake from "./img/Menu/CheaseCake.webp";
import Tiramisu from "./img/Menu/Tiramisu.webp";
import Diablo from "./img/Menu/Diablo.webp";
import Carbonara from "./img/Menu/Carbonara.webp";
import Margarita from "./img/Menu/Margarita.webp";
import Fri from "./img/Menu/Fri.webp";
import Caprichosa from "./img/Menu/Caprichosa.webp";

const imageMap = {
  Капрічоза: Caprichosa,
  "Піца Фрі": Fri,
  Маргаритта: Margarita,
  Карбонара: Carbonara,
  Діабло: Diablo,
  Тірамісу: Tiramisu,
  "Чіз-кейк": CheaseCake,
  "Сакура-Пай": Sakura,
  "Тістечко «Зайчик»": Bunny,
  "Тістечко «Жабка»": Froggy,
  Пепероні: Peperoni,
  Гавайська: Hawaii,
  "Чотири сири": ForCheases,
  Вегетаріанська: Vegetables,
  Гостра: Spicy,
  Чоловіча: ManPizza,
  "Coca-Cola": Cola,
  "Coca-Cola: Zero": ColaZ,
  Pepsi: Pepsi,
  "Pepsi: Zero": PepsiZ,
  Fanta: Fan,
  "Fanta: Shokata": FanS,
  "Non Stop: Original": NoNO,
  "Non Stop: Jungle": NoNJ,
  "Non Stop: Boost": NoNB,
  "Non Stop: Ultra": NoNU,
  Monster: Mon,
  "Monster: Ultra V": MonU,
  "Monster: Pacific": MonPC,
  "Monster: MIXXO": MonPM,
  Моршинська: Morsh,
  Баварія: Bavaria,
  "Морська піца": SeaFood,
  "Піца з беконом": Becon,
  "Чотири м'яса": ForMeats,
  "Тістечко «Ф'южн»": Fusion,
  "Тістечко «Валентинка»": Valentine,
  "Тістечко «Амаренно»": Amarenno,
  "Тістечко «Бджілка»": Bea,
  "Тістечко «Сонечко»": Bug,
} as any;

const getPhoto = (name: string) => {
  return imageMap[name] || MysteryPizzas;
};

export default getPhoto;
