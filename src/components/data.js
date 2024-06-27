import mountfuji from '../images/mount fuji.png'
import sydneyopera from '../images/sydneyOpera.png'
import Geirangerfjord from '../images/Geirangerfjord.png'
const traveldata = [
    {
        id: 1,
        image:(mountfuji),
        country: 'JAPAN', 
        travellink:'https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170636,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu',
        title: 'Mount Fuji',
        time:'12 Jan, 2021 - 24 Jan, 2021',
        description:'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.'
    },
    {
        id: 2,
        image:(sydneyopera),
        country: 'AUSTRALIA',
        travellink:'https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567799,151.2127218,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0?entry=ttu',
        title: 'Sydney Opera House',
        time:'22 May, 2021 - 8 Jun, 2021',
        description:`The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings`
    },
    {
        id: 3,
        image:(Geirangerfjord),
        country: 'NORWAY',
        travellink:'https://www.google.com/maps/place/Geirangerfjord/@62.1049045,6.9922376,12z/data=!3m1!4b1!4m6!3m5!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817!16zL20vMDZ4eXFi?entry=ttu',
        title: 'Geirangerfjord',
        time:'01 Oct, 2021 - 18 Nov, 2021',
        description:'The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.'
    }
]

export{traveldata}