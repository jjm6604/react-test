import { useState, useEffect } from 'react'
import testData from '../assets/test.json'
import dongData from '../assets/dong.json'


const { kakao } = window

export default function MapPage() {
    const [polygons, setPolygons] = useState([])
    const [isChanged, setIsChanged] = useState(true)
    useEffect(() => {

        const mapContainer = document.getElementById('map') // 지도를 표시할 div 
        const mapOption = { 
            center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
            level: 12 // 지도의 확대 레벨
        };
        const map = new kakao.maps.Map(mapContainer, mapOption);
        for (let unit of dongData.features){
            const coordinates = unit.geometry.coordinates[0]
            const polygonPath = []
            for (let coordinate of coordinates){
                for (let coord of coordinate){
                    polygonPath.push(new kakao.maps.LatLng(coord[1], coord[0]))
                }
            }
            const polygon = new kakao.maps.Polygon({
                
                path: polygonPath,
                strokeWeight: 3, // 선의 두께입니다
                strokeColor: '#39DE2A', // 선의 색깔입니다
                strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                strokeStyle: '', // 선의 스타일입니다
                fillColor: '#A2FF99', // 채우기 색깔입니다
                fillOpacity: 0.5 // 채우기 불투명도 입니다
            })
            // setPolygons([...polygons, polygon])
            polygon.setMap(map)
        }
        
    }, [])
    // init(map, dongData.features)
    // const init = (map, datas) => {

    //     for (let i = 0; i < 1; i++) {
    //         makePolygons(map, datas[i]);
    //     }
    // }
    // const makePolygons = (map, unit) =>{
    //     // const data = testData.features
    //     const coordinates = unit.geometry.coordinates[0]
    //     const polygonPath = []
    //     for (let coordinate of coordinates){
    //         for (let coord of coordinate){
    //             polygonPath.push(new kakao.maps.LatLng(coord[0], coord[1]))
    //         }
    //         // console.log(coordinates)
    //         // console.log(coordinate)
    //     }
    //     // console.log(coordinates)
    //     // console.log(polygonPath)
    //     // const unitName = unit.properties.CTP_KOR_NM
    //     const polygon = new kakao.maps.Polygon({

    //         path: polygonPath,
    //         strokeWeight: 3, // 선의 두께입니다
    //         strokeColor: '#39DE2A', // 선의 색깔입니다
    //         strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
    //         strokeStyle: 'longdash', // 선의 스타일입니다
    //         fillColor: '#A2FF99', // 채우기 색깔입니다
    //         fillOpacity: 0.7 // 채우기 불투명도 입니다
    //     })
    //     polygon.setMap(map)
    //     setPolygons([...polygons, polygon])
    // }
    
// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    return(
        <div>
            <h1>여기가 지도 !</h1>
            <div id="map" style={{width:'500px', height:'500px'}}></div>
        </div>
    )
}