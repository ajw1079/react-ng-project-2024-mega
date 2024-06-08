import { useState, useEffect } from "react";
import subData from "../assets/data/sub.json";

const AnimalPg = () => {
  // console.log(subData);
  // const subAnimalData = subData && subData.data.animal; //optional chaninng : jsx에서 null처리되는 부분에 대한 선 검사를 진행(데이터를 가져오는 과정에서 통과를 시키는 관문)
  // console.log(subAnimalData);

  //비동기 요청에 의한 응답을 받았을 때,
  //useEeffct를 사용하는 방법
  //응답에 대한 데이터의 저장
  //useEffect(() => {실행문}, [의존성])
  //첫 페이지 시작간 화면에 콘텐츠를 뿌려야 할 때
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(subData.data.animal);
  }, [data]);

  return (
    <section className="sub_item py-60">
      <div className="wrap mx-auto">
        <h2 className="pb-40">Animal</h2>
        <div className="content d-flex flex-wrap">
          {data.map((v, i) => (
            <div className="box" key={i}>
              <div
                className="bg_img"
                style={{
                  backgroundImage: `url(/images/animals/${v.img})`,
                }}
              ></div>
              <div className="info">
                <p>{v.txt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AnimalPg;
