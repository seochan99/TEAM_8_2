import React, { useState } from "react";
import * as S from "./style";
import Logo from "../../assets/logo-shadow.png";
import { Link } from "react-router-dom";
import Lbox from "../../assets/img/letterbox-1.png";
import menu1 from "../../assets/img/menu-shape.png";
import menu2 from "../../assets/img/menu-color.png";
import menu3 from "../../assets/img/menu-ornaments.png";
import shape1 from "../../assets/img/pickShape-1.png";
import shape2 from "../../assets/img/pickShape-2.png";
import shape3 from "../../assets/img/pickShape-3.png";
import shape4 from "../../assets/img/pickShape-4.png";
import shape5 from "../../assets/img/pickShape-5.png";
import shape6 from "../../assets/img/pickShape-6.png";
import orna1 from "../../assets/img/pickOrna-1.png";
import orna2 from "../../assets/img/pickOrna-2.png";
import orna3 from "../../assets/img/pickOrna-3.png";
import orna4 from "../../assets/img/pickOrna-4.png";
import orna5 from "../../assets/img/pickOrna-5.png";
import orna6 from "../../assets/img/pickOrna-6.png";

import ornament1 from "../../assets/decoLib/ornaments/ornament-1.png";
import ornament2 from "../../assets/decoLib/ornaments/ornament-2.png";
import ornament3 from "../../assets/decoLib/ornaments/ornament-3.png";
import ornament4 from "../../assets/decoLib/ornaments/ornament-4.png";
import ornament5 from "../../assets/decoLib/ornaments/ornament-5.png";
import ornament6 from "../../assets/decoLib/ornaments/ornament-6.png";

import shape1beige from "../../assets/decoLib/shape1/beige.png";
import shape1black from "../../assets/decoLib/shape1/black.png";
import shape1blue from "../../assets/decoLib/shape1/blue.png";
import shape1deepblue from "../../assets/decoLib/shape1/deep-blue.png";
import shape1deepgreen from "../../assets/decoLib/shape1/deep-green.png";
import shape1grey from "../../assets/decoLib/shape1/grey.png";
import shape1green from "../../assets/decoLib/shape1/green.png";
import shape1lightblue from "../../assets/decoLib/shape1/light-blue.png";
import shape1orange from "../../assets/decoLib/shape1/orange.png";
import shape1pink from "../../assets/decoLib/shape1/pink.png";
import shape1purple from "../../assets/decoLib/shape1/purple.png";
import shape1red from "../../assets/decoLib/shape1/red.png";
import shape1skyblue from "../../assets/decoLib/shape1/sky-blue.png";
import shape1white from "../../assets/decoLib/shape1/White.png";
import shape1yellow from "../../assets/decoLib/shape1/yellow.png";

import shape2beige from "../../assets/decoLib/shape2/beige.png";
import shape2black from "../../assets/decoLib/shape2/black.png";
import shape2blue from "../../assets/decoLib/shape2/blue.png";
import shape2deepblue from "../../assets/decoLib/shape2/deep-blue.png";
import shape2deepgreen from "../../assets/decoLib/shape2/deep-green.png";
import shape2grey from "../../assets/decoLib/shape2/grey.png";
import shape2green from "../../assets/decoLib/shape2/green.png";
import shape2lightblue from "../../assets/decoLib/shape2/light-blue.png";
import shape2orange from "../../assets/decoLib/shape2/orange.png";
import shape2pink from "../../assets/decoLib/shape2/pink.png";
import shape2purple from "../../assets/decoLib/shape2/purple.png";
import shape2red from "../../assets/decoLib/shape2/red.png";
import shape2skyblue from "../../assets/decoLib/shape2/sky-blue.png";
import shape2white from "../../assets/decoLib/shape2/White.png";
import shape2yellow from "../../assets/decoLib/shape2/yellow.png";

import shape3beige from "../../assets/decoLib/shape3/beige.png";
import shape3black from "../../assets/decoLib/shape3/black.png";
import shape3blue from "../../assets/decoLib/shape3/blue.png";
import shape3deepblue from "../../assets/decoLib/shape3/deep-blue.png";
import shape3deepgreen from "../../assets/decoLib/shape3/deep-green.png";
import shape3grey from "../../assets/decoLib/shape3/grey.png";
import shape3green from "../../assets/decoLib/shape3/green.png";
import shape3lightblue from "../../assets/decoLib/shape3/light-blue.png";
import shape3orange from "../../assets/decoLib/shape3/orange.png";
import shape3pink from "../../assets/decoLib/shape3/pink.png";
import shape3purple from "../../assets/decoLib/shape3/purple.png";
import shape3red from "../../assets/decoLib/shape3/red.png";
import shape3skyblue from "../../assets/decoLib/shape3/sky-blue.png";
import shape3white from "../../assets/decoLib/shape3/White.png";
import shape3yellow from "../../assets/decoLib/shape3/yellow.png";

import shape4beige from "../../assets/decoLib/shape4/beige.png";
import shape4black from "../../assets/decoLib/shape4/black.png";
import shape4blue from "../../assets/decoLib/shape4/blue.png";
import shape4deepblue from "../../assets/decoLib/shape4/deep-blue.png";
import shape4deepgreen from "../../assets/decoLib/shape4/deep-green.png";
import shape4grey from "../../assets/decoLib/shape4/grey.png";
import shape4green from "../../assets/decoLib/shape4/green.png";
import shape4lightblue from "../../assets/decoLib/shape4/light-blue.png";
import shape4orange from "../../assets/decoLib/shape4/orange.png";
import shape4pink from "../../assets/decoLib/shape4/pink.png";
import shape4purple from "../../assets/decoLib/shape4/purple.png";
import shape4red from "../../assets/decoLib/shape4/red.png";
import shape4skyblue from "../../assets/decoLib/shape4/sky-blue.png";
import shape4white from "../../assets/decoLib/shape4/White.png";
import shape4yellow from "../../assets/decoLib/shape4/yellow.png";

import shape5beige from "../../assets/decoLib/shape5/beige.png";
import shape5black from "../../assets/decoLib/shape5/black.png";
import shape5blue from "../../assets/decoLib/shape5/blue.png";
import shape5deepblue from "../../assets/decoLib/shape5/deep-blue.png";
import shape5deepgreen from "../../assets/decoLib/shape5/deep-green.png";
import shape5grey from "../../assets/decoLib/shape5/grey.png";
import shape5green from "../../assets/decoLib/shape5/green.png";
import shape5lightblue from "../../assets/decoLib/shape5/light-blue.png";
import shape5orange from "../../assets/decoLib/shape5/orange.png";
import shape5pink from "../../assets/decoLib/shape5/pink.png";
import shape5purple from "../../assets/decoLib/shape5/purple.png";
import shape5red from "../../assets/decoLib/shape5/red.png";
import shape5skyblue from "../../assets/decoLib/shape5/sky-blue.png";
import shape5white from "../../assets/decoLib/shape5/White.png";
import shape5yellow from "../../assets/decoLib/shape5/yellow.png";

import shape6beige from "../../assets/decoLib/shape6/beige.png";
import shape6black from "../../assets/decoLib/shape6/black.png";
import shape6blue from "../../assets/decoLib/shape6/blue.png";
import shape6deepblue from "../../assets/decoLib/shape6/deep-blue.png";
import shape6deepgreen from "../../assets/decoLib/shape6/deep-green.png";
import shape6grey from "../../assets/decoLib/shape6/grey.png";
import shape6green from "../../assets/decoLib/shape6/green.png";
import shape6lightblue from "../../assets/decoLib/shape6/light-blue.png";
import shape6orange from "../../assets/decoLib/shape6/orange.png";
import shape6pink from "../../assets/decoLib/shape6/pink.png";
import shape6purple from "../../assets/decoLib/shape6/purple.png";
import shape6red from "../../assets/decoLib/shape6/red.png";
import shape6skyblue from "../../assets/decoLib/shape6/sky-blue.png";
import shape6white from "../../assets/decoLib/shape6/White.png";
import shape6yellow from "../../assets/decoLib/shape6/yellow.png";

export default function Deco() {
  const initialSelectedData ={
    shape: 'shape1',
    color: 'red',
    ornaments: 'orna1'
  }
  const [selectedMenu, setSelectedMenu] = useState("shape"); // 스타일박스 메뉴 카테고리 선택
  const [selectedItems, setSelectedItems] = useState(initialSelectedData);  // 우체통 스타일 폼
  const [isStyleBoxVisible, setIsStyleBoxVisible] = useState(false); // 스타일박스 로딩 유무
  
  const shapeList = [shape1, shape2, shape3, shape4, shape5, shape6];
  const colorList = [
    { name: 'red', value: '#E20000' },
    { name: 'pink', value: '#F88C81' },
    { name: 'orange', value: '#F90' },
    { name: 'yellow', value: '#FFD600' },
    { name: 'beige', value: '#F7E2C2' },
    { name: 'skyblue', value: '#A8D4CF' },
    { name: 'lightblue', value: '#0093B3' },
    { name: 'green', value: '#00A839' },
    { name: 'deepgreen', value: '#005143' },
    { name: 'purple', value: '#A337E6' },
    { name: 'blue', value: '#2849F8' },
    { name: 'deepblue', value: '#0F148B' },
    { name: 'black', value: '#000' },
    { name: 'grey', value: '#7E7E7E' },
    { name: 'white', value: '#FFF'}
  ];
  const ornaList = [orna1, orna2, orna3, orna4, orna5, orna6];

  const shapeImages = {
    shape1: [
      shape1red, shape1pink, shape1orange, shape1yellow, shape1beige, 
      shape1skyblue, shape1lightblue, shape1green, shape1deepgreen, 
      shape1purple, shape1blue, shape1deepblue,
      shape1black, shape1grey, shape1white
    ],
    shape2: [
      shape2red, shape2pink, shape2orange, shape2yellow, shape2beige, 
      shape2skyblue, shape2lightblue, shape2green, shape2deepgreen, 
      shape2purple, shape2blue, shape2deepblue,
      shape2black, shape2grey, shape2white
    ],
    shape3: [
      shape3red, shape3pink, shape3orange, shape3yellow, shape3beige, 
      shape3skyblue, shape3lightblue, shape3green, shape3deepgreen, 
      shape3purple, shape3blue, shape3deepblue,
      shape3black, shape3grey, shape3white
    ],
    shape4: [
      shape4red, shape4pink, shape4orange, shape4yellow, shape4beige, 
      shape4skyblue, shape4lightblue, shape4green, shape4deepgreen, 
      shape4purple, shape4blue, shape4deepblue,
      shape4black, shape4grey, shape4white
    ],
    shape5: [
      shape5red, shape5pink, shape5orange, shape5yellow, shape5beige, 
      shape5skyblue, shape5lightblue, shape5green, shape5deepgreen, 
      shape5purple, shape5blue, shape5deepblue,
      shape5black, shape5grey, shape5white
    ],
    shape6: [
      shape6red, shape6pink, shape6orange, shape6yellow, shape6beige, 
      shape6skyblue, shape6lightblue, shape6green, shape6deepgreen, 
      shape6purple, shape6blue, shape6deepblue,
      shape6black, shape6grey, shape6white
    ],
  };

  const ornamentImages = {
    orna1: ornament1,
    orna2: ornament2,
    orna3: ornament3,
    orna4: ornament4,
    orna5: ornament5,
    orna6: ornament6
  };
  
  const handleItemClick = (item) => {
    let newItem;
  
    if (selectedMenu === 'color') {
      // color 항목일 경우 item에는 colorList의 객체가 전달됩니다.
      newItem = item.name;
    } else if (selectedMenu === 'shape' || selectedMenu === 'ornaments') {
      // shape와 orna 항목일 경우 item에는 숫자가 전달됩니다.
      newItem = item;
    }
  
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [selectedMenu]: newItem
    }));
  };

  const handleLetterBoxClick = () => {
    // LetterBox 클릭 시 StyleBox를 토글하여 보이기/숨기기
    setIsStyleBoxVisible((prevIsVisible) => !prevIsVisible);
  };

  console.log(selectedItems);

  return (
    <>
      <S.Root>
        <S.Header>
          <p>취향을 담아 우체통을 꾸며주세요!</p>
        </S.Header>
        <S.LetterBox
          src={shapeImages[selectedItems.shape][colorList.findIndex(color => color.name === selectedItems.color)]}
          alt="letterbox"
          onClick={handleLetterBoxClick}
        />
        <S.Ornaments
          src={ornamentImages[selectedItems.ornaments]}
          alt="ornaments"
        />
        {isStyleBoxVisible && ( 
          <S.StyleBox>
            <S.MenuWrapper>
              <S.MenuBtn onClick={() => setSelectedMenu("shape")}>
                <img src={menu1} alt="menu1" />
              </S.MenuBtn>
              <S.LineVertical />
              <S.MenuBtn onClick={() => setSelectedMenu("color")}>
                <img src={menu2} alt="menu2" />
              </S.MenuBtn>
              <S.LineVertical />
              <S.MenuBtn onClick={() => setSelectedMenu("ornaments")}>
                <img src={menu3} alt="menu3" />
              </S.MenuBtn>
            </S.MenuWrapper>
            <S.LineHorizontal />
            {(selectedMenu === "shape") && (
              <S.ShapeContainer>
                {shapeList.map((shape, index) => (
                  <S.IconWrapper
                    key={index}
                    isSelected={selectedItems.shape ===`shape${index + 1}`}
                    onClick={() => handleItemClick(`shape${index + 1}`)}
                  >
                    <S.ShapeIcon src={shape} alt={`shape${index + 1}`} />
                  </S.IconWrapper>
                ))}
              </S.ShapeContainer>
            )}
            {(selectedMenu === "color") && (
              <S.ColorContainer>
                {colorList.map((color, index) => (
                  <S.ColorBtn
                    key={index}
                    backgroundColor={color.value}
                    border={selectedItems.color === color ? '3px solid #FF9466' : 'none'}
                    isSelected={selectedItems.color === `color${index + 1}`}
                    onClick={() => handleItemClick(color)}
                  />
                ))}
                <S.ColorBtn
                  key={15}
                  backgroundColor="#FFF"
                  border={
                    selectedItems.color === "#FFF"
                      ? '3px solid #FF9466'
                      : '0.54px solid rgba(0, 0, 0, 0.33)'
                  }
                  isSelected={selectedItems.color === `color15`}
                  onClick={() => handleItemClick("#FFF")}
                />
              </S.ColorContainer>
            )}
            {(selectedMenu === "ornaments") && (
              <S.OrnaContainer>
                {ornaList.map((orna, index) => (
                  <S.IconWrapper
                    key={index}
                    isSelected={selectedItems.orna ===`orna${index + 1}`}
                    onClick={() => handleItemClick(`orna${index + 1}`)}
                  >
                    <S.OrnaIcon src={orna} alt={`orna${index + 1}`} />
                  </S.IconWrapper>
                ))}
              </S.OrnaContainer>
            )}
          </S.StyleBox>
        )}
        <S.Button $white="true">
          완성하기
        </S.Button>
      </S.Root>
    </>
  )
}
