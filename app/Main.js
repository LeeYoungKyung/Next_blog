'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function Main() {
  useEffect(() => {
    // 지도를 초기화하는 함수
    const initMap = () => {
      const mapContainer = document.getElementById('map'); // 지도를 표시할 div
      const mapOption = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

      const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

      // 마커가 표시될 위치입니다
      const markerPosition = new window.kakao.maps.LatLng(
        33.450701,
        126.570667
      );

      // 마커를 생성합니다
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);
    };

    // Kakao Maps 스크립트가 로드된 후 initMap 호출
    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(initMap);
    } else {
      console.log('Loading Kakao Maps API script...');
      const script = document.createElement('script');
      script.src =
        'https://dapi.kakao.com/v2/maps/sdk.js?appkey=283a8e275f2bb2b8bffee7c7e61f42b6&autoload=false';
      script.async = true;
      script.onload = () => {
        console.log('Kakao Maps API script loaded.');
        window.kakao.maps.load(initMap);
      };
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, []);

  return (
    <div>
      <div id='map' style={{ width: '100%', height: '500px' }}></div>
    </div>
  );
}
