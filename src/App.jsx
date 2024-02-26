import KULogo from '/ku_job_fair_center_logo_dark.png'
import './App.css'
// import image from '/ku_job_fair_center_logo_dark.png'
import { CountDown } from './compontns/CountDown'

function App() {
    return (
        <div className="h-screen flex flex-col justify-center padding-20">
            
                
            <div className="flex justify-center">
                <a href="https://www.ku.ac.th/th/news1/view/KU-JOB-FAIR-2024" target="_blank">
                    <img src={KULogo} className="logo" alt="KU logo" style={{ height: 100, width: 350 }} />
                </a>
            </div>

            <div className="my-20">
                <CountDown />
            </div>



            <div className="text-center">
                <h2 className="text-3xl font-bold text-center mb-4">KU Job Fair 2024</h2>
                <p className="">
                    มหาวิทยาลัยเกษตรศาสตร์ กำหนดจัดโครงการ KU Job Fair & Education 2024
                </p>
                <p className="mt-50">
                    ในวันที่ 29 กุมภาพันธ์ - 1 มีนาคม 2567 ระหว่างเวลา 10.00 - 17.00 น.
                </p>
                <p className="mt-50">
                    ณ ศูนย์เรียนรวมมหาวิทยาลัยเกษตรศาสตร์ บางเขน
                </p>
            </div>
        </div>
    );
}

export default App
