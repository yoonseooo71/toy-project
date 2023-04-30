import Image from "next/image"; //이미지 최적화 제공 태그 
import tomatoesImage from "/public/food0.png";
import pastaImage from "/public/food1.png";
import coconutImage from "/public/food2.png";
export default function List(){
  let goodses = ['Tomatoes','Pasta','Coconut'] ; 
  const foodImages = [tomatoesImage,pastaImage,coconutImage];
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {
        goodses.map((goods,index)=>{
          return (
            <div className="food" key={index}>
              <Image src={foodImages[index]} alt={`${goods}-image`} />
              <h4>{goods} $40</h4>
            </div>
          )
        })
      }
    </div>
  )
}