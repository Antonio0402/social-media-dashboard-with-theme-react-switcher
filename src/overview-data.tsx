import { iconDown, iconFaceBook, iconInsta, iconTwitter, iconYoutube, iconUp } from "./icons"

export interface OverviewData {
  id: number;
  measure: string;
  icon: () => JSX.Element;
  number: string;
  trend: () => JSX.Element;
  isDown: boolean;
  percentage: string;
}

const overviewData = [
  {
    id: 1,
    measure: "Page Views",
    icon: () => iconFaceBook,
    number: "87",
    trend: () => iconUp,
    isDown: false,
    percentage: "3%", 
  },
  {
    id: 2,
    measure: "Likes",
    icon: () => iconFaceBook,
    number: "52",
    trend: () => iconDown,
    isDown: true,
    percentage: "2%", 
  },
  {
    id: 3,
    measure: " Likes",
    icon: () => iconInsta,
    number: " 5462",
    trend: () => iconUp,
    isDown: false,
    percentage: "2257%", 
  },
  {
    id: 4,
    measure: "Profile Views",
    icon: () => iconInsta,
    number: "52k",
    trend: () => iconUp,
    isDown: false,
    percentage: "1375%", 
  },
  {
    id: 5,
    measure: "Retweets",
    icon: () => iconTwitter,
    number: "117",
    trend: () => iconUp,
    isDown: false,
    percentage: "303%", 
  },
  {
    id: 6,
    measure: "Likes",
    icon: () => iconTwitter,
    number: "507",
    trend: () => iconUp,
    isDown: false,
    percentage: "553%", 
  },
  {
    id: 7,
    measure: "Likes",
    icon: () => iconYoutube,
    number: "87",
    trend: () => iconDown,
    isDown: true,
    percentage: "19%", 
  },
  {
    id: 8,
    measure: "Total Views",
    icon: () => iconYoutube,
    number: "1407",
    trend: () => iconDown,
    isDown: true,
    percentage: "12%", 
  },
]

export default overviewData;