import caliPineApple from "./caliPineAppleSplash.png";
import iplayBerryWatermelon from "./iplayBerryWatermelon.png";
import bananaNutTyson from "./BananaNutTyson.png";
import nastyTangyAppleSplash from "./nastyTangyAppleSplash.png";
import tysonEliquidCherryCola from "./tysonEliquidCherryCola.png";
import cloudNurdzPeachBlueRazz from "./cloudNurdzPeachBlueRazz.png";
import tysonEliquidStrawberryBanana from "./tysonEliquidStrawberryBanana.png";
import blankBarSaltStrawberryBliss from "./blankBarSaltStrawberryBliss.png";
import geekVapeDigiMaxKit from "./geekVapeDigiMaxKit.png";
import voopooDragx2Kit from "./voopooDragx2Kit.png";
import SmokgPriv4Kit from "./SmokgPriv4Kit.png";
import vaporessoArmourGsKit from "./vaporessoArmourGsKit.png";
import chrisBrown from "./chrisBrownDesechable.png";
import cali from "./caliBlackSeriesDesechable.png";
import nexaUltra from "./nexaUltra.png";
import geekBar from "./geekBarPulseX.png";
import nastySalt from "./nastySalt.png";
import caliJuice from "./caliJuiceSalt.png";
import jamMonster from "./jamMonsterSalt.png";
import juiceHead from "./juiceHeadSaltFreeze.png";
import voopooArgus from "./voopooArgusG2PodKit.png";
import smokNovo from "./smokNovo.png";
import vaporessoLux from "./vaporessoLuxe.png";
import vaporessoEcoNano from "./vaporessoEcoNano.png";

let all_product = [
  {
    id: 1,
    name: "Cali PineApple Splash",
    image: caliPineApple,
    new_price: "$420",
    old_price: "$500",
    category: "disposable",
  },
  {
    id: 2,
    name: "Iplay Berry Watermelon",
    image: iplayBerryWatermelon,
    new_price: "$250",
    old_price: "$350",
    category: "disposable",
  },
  {
    id: 3,
    name: "Mike Tyson Banana-Nut",
    image: bananaNutTyson,
    new_price: "$450",
    old_price: "$500",
    category: "disposable",
  },
  {
    id: 4,
    name: "Nasty Tangy Apple Splash",
    image: nastyTangyAppleSplash,
    new_price: "$500",
    old_price: "$600",
    category: "disposable",
  },
  {
    id: 5,
    name: "Tyson E-liquid Cherry Cola",
    image: tysonEliquidCherryCola,
    new_price: "$350",
    old_price: "$500",
    category: "eliquid",
  },
  {
    id: 6,
    name: "Cloud Nurdz Peach BlueRazz",
    image: cloudNurdzPeachBlueRazz,
    new_price: "$320",
    old_price: "$500",
    category: "eliquid",
  },
  {
    id: 7,
    name: "Tyson E-liquid StrawberryBanana",
    image: tysonEliquidStrawberryBanana,
    new_price: "$350",
    old_price: "$500",
    category: "eliquid",
  },
  {
    id: 8,
    name: "Blank BarSalt StrawberryBliss",
    image: blankBarSaltStrawberryBliss,
    new_price: "$350",
    old_price: "$500",
    category: "eliquid",
  },
  {
    id: 9,
    name: "Geek Vape DigiMax Kit",
    image: geekVapeDigiMaxKit,
    new_price: "$1,200",
    old_price: "$1,500",
    category: "vapeskit",
  },
  {
    id: 10,
    name: "Voopoo Drag X2 Kit",
    image: voopooDragx2Kit,
    new_price: "$1,100",
    old_price: "$1,500",
    category: "vapeskit",
  },
  {
    id: 11,
    name: "Smok - G-Priv 4 Kit",
    image: SmokgPriv4Kit,
    new_price: "$2,000",
    old_price: "$2,500",
    category: "vapeskit",
  },
  {
    id: 12,
    name: "VAPORESSO Armour GS KIT",
    image: vaporessoArmourGsKit,
    new_price: "$1,400",
    old_price: "$2,000",
    category: "vapeskit",
  },
  {
    id: 13,
    name: "Chris Brown BlueRazz",
    image: chrisBrown,
    new_price: "$290",
    old_price: "$500",
    category: "disposable",
  },
  {
    id: 14,
    name: "Cali UL20000 Blue Blast",
    image: cali,
    new_price: "$550",
    old_price: "$800",
    category: "disposable",
  },
  {
    id: 15,
    name: "Nexa Ultra B-Pop Desechable",
    image: nexaUltra,
    new_price: "$650",
    old_price: "$900",
    category: "disposable",
  },
  {
    id: 16,
    name: "Geek Bar Pulse X Blue Rancher",
    image: geekBar,
    new_price: "$600",
    old_price: "$800",
    category: "disposable",
  },
  {
    id: 17,
    name: "Nasty Salt Bad Blood",
    image: nastySalt,
    new_price: "$280",
    old_price: "$350",
    category: "eliquid",
  },
  {
    id: 18,
    name: "Cali Juice Salt Frozen Strawberry",
    image: caliJuice,
    new_price: "$350",
    old_price: "$500",
    category: "eliquid",
  },
  {
    id: 19,
    name: "JAM Monster Apple Salt",
    image: jamMonster,
    new_price: "$320",
    old_price: "$500",
    category: "eliquid",
  },
  {
    id: 20,
    name: "Juice Head Raspberry L Salt",
    image: juiceHead,
    new_price: "$350",
    old_price: "$500",
    category: "eliquid",
  },
  {
    id: 21,
    name: "Voopoo Argus G2 Pod Kit",
    image: voopooArgus,
    new_price: "$850",
    old_price: "$1,200",
    category: "vapeskit",
  },
  {
    id: 22,
    name: "Smok Novo Eco Kit",
    image: smokNovo,
    new_price: "$550",
    old_price: "$1,000",
    category: "vapeskit",
  },
  {
    id: 23,
    name: "Vaporesso Luxe XR Pod Kit",
    image: vaporessoLux,
    new_price: "$830",
    old_price: "$1,000",
    category: "vapeskit",
  },
  {
    id: 24,
    name: "Vaporesso Eco Nano Pro",
    image: vaporessoEcoNano,
    new_price: "$800",
    old_price: "$1,000",
    category: "vapeskit",
  },
];

export default all_product;
