import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Definition() {
  return (
    <div>
      <section className='en_hero_about en_hero_about'>
          <Container>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>

                </div>
            </div>
          </Container>
        </section>
         <div className='en_bread_crumb ar_bread_crumb'>
         <Container>
         <ul className='en_creat_nav ar_creat_nav'>
             <li>
               <Link to="/DEFINITION">التعريف</Link>
             </li>
             <li>
             <i className="ri-arrow-left-s-line"></i>
             </li>
             
             <li>
               <Link to="/">الرئيسية</Link>
             </li>
           </ul>
         </Container>

         <section className='en_definition_section ar_definition_section'>
         <Container>
         <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <div className='leagues_cont'>
              <h3>التعريف</h3>
            </div>
            <div className='en_defintion_r ar_defintion_r'>
              <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <div className=' ar_defintion_contant' dir="rtl">
                    <h5><span className=' ar_number_pass'>2</span>استقبال الاهداف</h5>
                    <p>كم عدد الأهداف التي يستقبلها الفريق خلال الموسم</p>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <div className=' ar_defintion_contant' dir="rtl">
                    <h5><span className=' ar_number_pass'>1</span>معدل كسب النقاط</h5>
                    <p>‫كم عدد النقاط من أصل 3 نقاط كحد أقصى يستطيع الفريق كسبها على مدار الموسم لكل مباراة‬. الهدف هو الحصول على معدل يقترب من 3 نقاط قدر الإمكان خلال الموسم‬
                    </p>
                  </div>
                </div>
              </div>
            <div className='row'>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <div className=' ar_defintion_contant' dir="rtl">
                    <h5><span className='ar_number_pass'>4</span>تسجيل الاهداف</h5>
                    <p>كم عدد الأهداف التي سجلها الفريق خلال الموسم</p>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <div className=' ar_defintion_contant' dir="rtl">
                    <h5><span className='ar_number_pass'>3</span>معدل الاستقبال</h5>
                    <p>‎نسبة عدد الأهداف التي يتلقاها الفريق خلال الموسم في المباراة الواحده</p>
                  </div>
                </div>
                </div>
            </div>
                <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <div className=' ar_defintion_contant' dir="rtl">
                    <h5><span className='ar_number_pass'>6</span>الانحراف المعياري للنقاط</h5>
                    <p>‫مؤشر إحصائي لانتشار النقاط بالنسبة لمتوسط النقاط. كلما قل الرقم كلما كان الدوري أكثر تنافسية.</p>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <div className=' ar_defintion_contant' dir="rtl">
                    <h5><span className='ar_number_pass'>5</span>معدل تسجيل الأهداف</h5>
                    <p>‫نسبة عدد الأهداف التي يسجلها الفريق خلال الموسم لكل مباراة‬</p>
                  </div>
                </div>
            </div>
                <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <div className=' ar_defintion_contant' dir="rtl">
                    <h5><span className='ar_number_pass'>8</span>فارق النقاط</h5>
                    <p>‎‫فجوة النقاط بين الفريق الأول وبقية الفرق في جدول الدوري. الفكرة من وراء ذلك هي رؤية تنافسية الاداء بين فرق الدوري.‬</p>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <div className=' ar_defintion_contant' dir="rtl">
                    <h5><span className='ar_number_pass'>7</span>نسبة الأهداف المسجلة الى الأهداف المستقبلة</h5>
                    <p> ‫تهدف هذه النسبة إلى إظهار مدى توازن الفريق من حيث قوته الهجومية مقابل قوته الدفاعية. انظر تعريف خط فقر كرة القدم‬.</p>
                  </div>
                </div>
            </div>
                <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <div className=' ar_defintion_contant' dir="rtl">
                    <h5><span className='ar_number_pass'>9</span>خط فقر كرة القدم</h5>
                    <p>‫‫يعتمد خط فقر كرة القدم على نسبة التسجيل الى الاستقبال. ستسجل الفرق القوية أكثر مما تستقبل من اهداف وستكون لها نسبة أعلى من واحد. الفرق المتوسطة تكون عدد الأهداف التي استقبلتا قريبه من الأهداف المسجلة وبالتالي تكون نسبتها قريبة من واحد. ستستقبل الفرق ذات الاداء المنخفض أكثر مما تسجل وستكون نسبتهم أقل من واحد. بناءً على ذلك، يتم تعريف‫ خط فقر كرة القدم‬ على أنه نسبة ‫التسجيل الى الاستقبال‬ وهو‬ ‫يسا‬وي واحد.‬</p>
                  </div>
                
                </div>
              </div>
            </div>

         
        </div>
         </Container>
         </section>
   </div>
    </div>
  )
}
