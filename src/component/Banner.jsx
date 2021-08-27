import React, {useState} from 'react';
import './Banner.scss'
function Banner(props) {
  const [isShowPro,setIsShowPro]=useState(false)
  const [isShowBoy,setIsShowBoy]=useState(false)
  const [isShowGirl,setIsShowGirl]=useState(false)
  const [isShowEqu,setIsShowEqu]=useState(false)
  const hightProtective=()=>{
    setIsShowPro(true)
    setIsShowBoy(false)
    setIsShowGirl(false)
    setIsShowEqu(false)
  }
  const hightBoy=()=>{
    setIsShowPro(false)
    setIsShowBoy(true)
    setIsShowGirl(false)
    setIsShowEqu(false)
  }
  const hightGirl=()=>{
    setIsShowPro(false)
    setIsShowBoy(false)
    setIsShowGirl(true)
    setIsShowEqu(false)
  }
  const hightEquipment=()=>{
    setIsShowPro(false)
    setIsShowBoy(false)
    setIsShowGirl(false)
    setIsShowEqu(true)
  }
  const noHight=()=>{
    setIsShowPro(false)
    setIsShowBoy(false)
    setIsShowGirl(false)
    setIsShowEqu(false)
  }
  return (
    <div className='banner'>
      <div className='top-banner'>
       <ul className='big-item'>
         <li onMouseLeave={noHight} onMouseOver={hightProtective} className='hight'>健身護具</li>
         <li onMouseLeave={noHight} onMouseOver={hightBoy} className='hight'>男裝</li>
         <li onMouseLeave={noHight} onMouseOver={hightGirl} className='hight'>女裝</li>
         <li onMouseLeave={noHight} onMouseOver={hightEquipment} className='hight'>健身配件</li>
       </ul>
      </div>
      <div className='body-banner'>
        <ul className={isShowPro?'body-protective':'hide'} >
          <li>健身腰帶</li>
          <li>健身拉力帶</li>
          <li>健身護腕</li>
          <li>健身護膝</li>
          <li>健身護肘</li>
        </ul>
        <ul className={isShowBoy?'body-boy':'hide'}>
          <li>new男裝</li>
          <li>長褲</li>
          <li>短褲</li>
          <li>上衣</li>
          <li>背心</li>
          <li>外套</li>
          <li>襪子</li>
          <li>運動套裝</li>
        </ul>
        <ul className={isShowGirl?'body-girl':'hide'}>
          <li>new女裝</li>
          <li>長褲/緊身褲</li>
          <li>短褲</li>
          <li>上衣</li>
          <li>背心</li>
          <li>運動內衣</li>
          <li>外套</li>
          <li>襪子</li>
          <li>運動套裝</li>
        </ul>
        <ul className={isShowEqu?'body-equipment':'hide'}>
          <li>帽子</li>
          <li>背包</li>
          <li>水壺</li>
          <li>硬舉鞋</li>
          <li>跳繩</li>
        </ul>
      </div>
    </div>
  );
}

export default Banner;