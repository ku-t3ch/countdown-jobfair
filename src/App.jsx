import KULogo from '/ku_job_fair_center_logo_dark.png'
import './App.css'
import image from '/ku_job_fair_center_logo_dark.png'

function App() {

  return (
    <>
    
      <div>
        <a href="https://www.ku.ac.th/th/news1/view/KU-JOB-FAIR-2024" target="_blank">
          <img src={KULogo} className="logo" alt="KU logo" style={{height: 100, width: 350}} />
        </a>
      </div>
      <h2>
        <h1>00:00:00:00</h1>
        <h2> d  h  m  s</h2>
      </h2>
      <h2>KU Job Fair 2024</h2>
      <div className="card">
        <p>
        มหาวิทยาลัยเกษตรศาสตร์ กำหนดจัดโครงการ KU Job Fair & Education 2024 
        </p>
        <p>
        ในวันที่ 29 กุมภาพันธ์ - 1 มีนาคม 2567 ระหว่างเวลา 10.00 - 17.00 น.
        </p>
        <p>
        ณ ศูนย์เรียนรวมมหาวิทยาลัยเกษตรศาสตร์ บางเขน
        </p>
      </div>
    </>
  )
}

export default App
