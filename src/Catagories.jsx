import { TiThSmall } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { GiNoodles } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";

export const Catagories = [
  {
    id:1,
    name:"All",
    image:<TiThSmall className="w-[60px] h-[60px] text-green-600" />
  },
  {
    id:1,
    name:"Breakfast",
    image:<MdFreeBreakfast className="w-[60px] h-[60px] text-green-600" />
  },
  {
    id:3,
    name:"Soup",
    image:<LuSoup className="w-[60px] h-[60px] text-green-600"/>
  },
  {
    id:4,
    name:"Pasta",
    image:<GiNoodles className="w-[60px] h-[60px] text-green-600"/>
  },
  {
    id:5,
    name:"Main_Course",
    image:<MdOutlineFoodBank className="w-[60px] h-[60px] text-green-600"/>
  },
  {
    id:6,
    name:"Pizza",
    image:<GiFullPizza className="w-[60px] h-[60px] text-green-600"/>
  },
  {
    id:7,
    name:"Burger",
    image:<GiHamburger className="w-[60px] h-[60px] text-green-600"/>
  }
]