import { iconDown, iconFaceBook, iconInsta, iconTwitter, iconYoutube, iconUp } from "./icons"

export interface SocialData {
  id: number;
  platform: string;
  user: string;
  icon: () => JSX.Element;
  number: string;
  measure: string;
  trend: () => JSX.Element;
  isDown: boolean;
  todayCount: number;
}

const socialData: SocialData[] = [
  {
    id: 1,
    platform: "facebook",
    user: "@nathanf",
    icon: () => iconFaceBook,
    number: "1987",
    measure: "follower",
    trend: () => iconUp,
    isDown: false,
    todayCount: 12,
  },
  {
    id: 2,
    platform: "twitter",
    user: "@nathanf",
    icon: () => iconTwitter,
    number: "1044",
    measure: "follower",
    trend: () => iconUp,
    isDown: false,
    todayCount: 99,
  },
  {
    id: 3,
    platform: "instagram",
    user: "@realnathanf",
    icon: () => iconInsta,
    number: "11k",
    measure: "follower",
    trend: () => iconUp,
    isDown: false,
    todayCount: 1099,
  },
  {
    id: 4,
    platform: "youtube",
    user: "Nathan F.",
    icon: () => iconYoutube,
    number: "8239",
    measure: "subcriber",
    trend: () => iconDown,
    isDown: true,
    todayCount: 144,
  },

]

export default socialData;