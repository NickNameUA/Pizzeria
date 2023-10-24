import Peperoni from "../img/Menu/Peperoni.png";
import Hawaii from "../img/Menu/Hawaii.png";
import ForCheases from "../img/Menu/ForCheases.png";
import Vegetables from "../img/Menu/Vegetables.png";
import Spicy from "../img/Menu/Spicy.png";
import ManPizza from "../img/Menu/ManPizza.png";
import MysteryPizzas from "../img/mysteryPizzas.png";
import Cola from "../img/Menu/Cola.png";
import ColaZ from "../img/Menu/ColaZ.png";
import Pepsi from "../img/Menu/Pepsi.png";
import PepsiZ from "../img/Menu/PepsiZ.png";
import Fan from "../img/Menu/Fan.png";
import FanS from "../img/Menu/FanS.png";
import NoNO from "../img/Menu/NonO.png";
import NoNJ from "../img/Menu/NonJ.png";
import NoNB from "../img/Menu/NonB.png";
import NoNU from "../img/Menu/NonU.png";
import Mon from "../img/Menu/Mon.png";
import MonU from "../img/Menu/MonU.png";
import MonPC from "../img/Menu/MonPC.png";
import MonPM from "../img/Menu/MonPM.png";
import Morsh from "../img/Menu/Morsh.png";
import Bavaria from "../img/Menu/Bavaria.png";
import SeaFood from "../img/Menu/SeaFood.png";
import Becon from "../img/Menu/Becon.png";
import ForMeats from "../img/Menu/ForMeats.png";
import Fusion from "../img/Menu/Fusion.png";
import Valentine from "../img/Menu/Valentine.png";
import Amarenno from "../img/Menu/Amarenno.png";
import Bea from "../img/Menu/Bea.png";
import Bug from "../img/Menu/Bug.png";
import Bunny from "../img/Menu/Bunny.png";
import Froggy from "../img/Menu/Froggy.png";
import Sakura from "../img/Menu/Sakura.png";
import CheaseCake from "../img/Menu/CheaseCake.png";
import Tiramisu from "../img/Menu/Tiramisu.png";
import Diablo from "../img/Menu/Diablo.png";
import Carbonara from "../img/Menu/Carbonara.png";
import Margarita from "../img/Menu/Margarita.png";
import Fri from "../img/Menu/Fri.png";
import Caprichosa from "../img/Menu/Caprichosa.png";

const getPhoto = (name: string) => {
  switch (name) {
    case "Капрічоза":
      return Caprichosa;
    case "Піца Фрі":
      return Fri;
    case "Маргаритта":
      return Margarita;
    case "Карбонара":
      return Carbonara;
    case "Діабло":
      return Diablo;
    case "Тірамісу":
      return Tiramisu;
    case "Чіз-кейк":
      return CheaseCake;
    case "Сакура-Пай":
      return Sakura;
    case "Пірожине «Зайчик»":
      return Bunny;
    case "Пірожине «Жабка»":
      return Froggy;
    case "Пепероні":
      return Peperoni;
    case "Гавайська":
      return Hawaii;
    case "Чотири сири":
      return ForCheases;
    case "Вегетаріанська":
      return Vegetables;
    case "Гостра":
      return Spicy;
    case "Чоловіча":
      return ManPizza;
    case "Coca-Cola":
      return Cola;
    case "Coca-Cola:Zero":
      return ColaZ;
    case "Pepsi":
      return Pepsi;
    case "Pepsi:Zero":
      return PepsiZ;
    case "Fanta":
      return Fan;
    case "Fanta:Shokata":
      return FanS;
    case "Non Stop:Original":
      return NoNO;
    case "Non Stop:Jungle":
      return NoNJ;
    case "Non Stop:Boost":
      return NoNB;
    case "Non Stop:Ultra":
      return NoNU;
    case "Monster":
      return Mon;
    case "Monster:Ultra V":
      return MonU;
    case "Monster:Pacific":
      return MonPC;
    case "Monster:MIXXO":
      return MonPM;
    case "Моршинська":
      return Morsh;
    case "Баварія":
      return Bavaria;
    case "Морська піца":
      return SeaFood;
    case "Піца з беконом":
      return Becon;
    case "Чотири м'яса":
      return ForMeats;
    case "Пірожине «Ф'южн»":
      return Fusion;
    case "Пірожине «Валентинка»":
      return Valentine;
    case "Пірожине «Амаренно»":
      return Amarenno;
    case "Пірожине «Бджілка»":
      return Bea;
    case "Пірожине «Сонечко»":
      return Bug;
    default:
      return MysteryPizzas;
  }
};

export default getPhoto;
