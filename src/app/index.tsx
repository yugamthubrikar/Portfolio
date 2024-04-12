"use client"
import FillButton from "../components/fill-button";
import MyCards from "../components/my-cards";
import PlainButton from "../components/plain-button";
import setting from "../../public/settings.png";
import account from "../../public/account.png";
import telephone from "../../public/telephone-call.png";
import email from "../../public/email.png";
import Navtext from "@/components/navtext";
import QualityCards from "@/components/quality-card";
import Link from "next/link";
import { useState } from "react";
import styles from '@/app/index.module.css';
import AboutCards from "@/components/about-card";

export default function HomePage() {

  // const [emailtext, setEmailtext] = useState("");

  // function emailme() {
  //   alert('sdfs')
  // }

  return (
    <div>
      <header
        className={`bg-green-200 flex justify-between items-center py-[20px] px-[60px]`}
      >
        <h1 className={`font-serif text-4xl`}>Yugam</h1>
        <ul className={`flex`}>
         <Link href={"#about"}><Navtext  text="ABOUT ME" /></Link>
         <Link href={"#features"}><Navtext text="FEATURES" /> </Link>
          
          <Link href={`https://drive.google.com/file/d/1z2sWhFU0dfpUqQy7ZAv4itoCSWXdTnOJ/view?usp=drive_link`}><Navtext text="RESUME" /></Link>
          <Link target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=yugamthubrikar7620@gmail.com"> <Navtext  text="CONTACT ME" /> </Link>
        </ul>
        <FillButton btntitle="Hire Me" />
      </header>
      <main>
        <section className={`bg-no-repeat bg-[center_right_12rem] bg-contain bg-[url('../../public/mainpic.png')] bg-green-200 py-[60px] lg:p-[60px] `}>
          <p className={`py-2 text-green-700 font-extrabold`}>Hello, I am</p>
          <h1 className={`py-2 text-4xl font-extrabold`}>YUGAM THUBRIKAR</h1>
          <p className={`py-2 text-green-700 font-extrabold`}>
            Web Devoloper
          </p>
          <p className={`py-2 w-[50%]`}>
          Self-motivated and hardworking fresher seeking for an opportunity to work in a challenging environment 
          to prove my skills and utilize my knowledge & intelligence in the growth of the organization.
          </p>
          <div>
            <Link target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=yugamthubrikar7620@gmail.com"><FillButton btntitle="Contact Us" /></Link>
             <Link href={"#learn"}><PlainButton /> </Link>
          </div>
        </section>
        <section className={`px-[60px] flex justify-between py-[40px]`}>
          <QualityCards title="01" para="Award as a best consultant of the year in 2019" />
          <QualityCards title="100+" para="Clients" />
          <QualityCards title="07 " para="Years Experience of sales consultant from 2015-2023  "/>
          <QualityCards title="80+" para="Projects" />
        </section>
        <section id="about" className={`flex justify-between bg-green-200  px-[60px]`}>
          <div className={`w-[50%]`}>
            <h1 className={`py-2 text-4xl font-extrabold`}>About Me</h1>
            <p className={`py-2`}><b>Contact Number:</b> 7620637695</p> 
            <p className={`py-2`}><b>D:O:B:</b> 30 June 1996</p> 
            
            <h3><b>Languages:</b></h3>
            <ul className={`list-disc px-4`}>
              <li>English</li>
              <li>Hindi</li>
              <li>Marathi</li>
            </ul>
           <p className={`py-2`}><b>Education: </b><span>Bachelor of Commerce, Rashtrasant Tukdoji
              Maharaj Nagpur University
              2018.</span></p>
              <h3 className={`py-2`}><b>Programming Skills</b></h3>
          <ul className={`list-disc px-4`}>
            <li>C, C++</li>
            <li>Data Structures</li>
            <li>Html, Css, Javascript</li>
            <li>React, Tailwind, Tyescript</li>
            <li>Node, Flask</li>
            <li>SQL, Prisma</li>
          </ul>
            
            <h3 className={`py-2`}><b>Skills</b></h3>
            <ul className={`list-disc px-4`}>
            <li>Strong Communication, Presentation and Teamwork skills</li>
            <li>Self-Motivated, Hardworking, Industrious and strong analytical skills.</li>
            <li>Able to work as part of a team or on own initiative, and can deal with administrative duties completely</li>
          
            <li>Excellent communication skill.</li>
            <li>Ability to grasp the new skills quickly.</li>
            <li>Hard-working.</li>
          </ul>
          <p className={`py-2`}>
            Self-motivated and hardworking fresher seeking for an opportunity to work in a challenging environment 
            to prove my skills and utilize my knowledge & intelligence in the growth of the organization.</p>
          
          
            <div>
            <Link target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=yugamthubrikar7620@gmail.com"><FillButton btntitle="Contact Us" /></Link>
            <Link href={"#learn"}><PlainButton /> </Link>
            </div>
          </div>
          <div className={`w-[35%] bg-no-repeat bg-[center_right_1rem] bg-contain  bg-[url('../../public/me.jpeg')]`}> </div>
        </section>
        <section id="learn" className={`bg-red-50`}>
          <ul className={styles.timeline}>
            <li className={styles.timelineevent}>
              <label className={styles.timelineeventicon}></label>
              <div className={styles.timelineeventcopy}>
                <p className={styles.timelineeventthumbnail}>Jan 2015 – Jun 2017</p>
                <p>
                  <strong>BOSCH (Alf Automobile Pvt. Ltd. ) Designation :- </strong>
                  <br />Marketing Excuetive
                </p>
                <div>
                  <strong>Roles & Responsibilities:</strong>
                  <ul className={styles.rolesandresponsibilities}>
                    <li>Closed large sales in line with company targets.</li>
                    <li>Triggered territory growth by overhauling lead generation procedures.</li>
                    <li>Finalised winning sales contracts to close lucrative deals.</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className={styles.timelineevent}>
              <label className={styles.timelineeventicon}></label>
              <div className={styles.timelineeventcopy}>
                <p className={styles.timelineeventthumbnail}>Aug 2017 – Sep 2020</p>
                <p>
                  <strong>Unnati Vehicle Pvt. Ltd. Nagpur, Designation :- </strong>
                  <br />Sales Executive
                </p>
                <div>
                  <strong>Roles & Responsibilities:</strong>
                  <ul className={styles.rolesandresponsibilities}>
                    <li>Liaised with customers to determine needs and provide recommendations.</li>
                    <li>Executed complete sales cycle process from prospecting through contract negotiations and closings.</li>
                    <li>Secured new clients through targeted prospecting and networking</li>
                    <li>Collaborated with sales and marketing teams to produce ideas for sales aids, promotions and leaflets</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className={styles.timelineevent}>
              <label className={styles.timelineeventicon}></label>
              <div className={styles.timelineeventcopy}>
                <p className={styles.timelineeventthumbnail}>Sep 2020 – Jun 2021</p>
                <p>
                  <strong>Provincial Nissan Pvt. Ltd. Nagpur, Designation:- </strong>
                  <br />Sales Executive
                </p>
                <div>
                  <strong>Roles & Responsibilities:</strong>
                  <ul className={styles.rolesandresponsibilities}>
                    <li>Sustained customer base by facilitating market research to formulate brand strategies.</li>
                    <li>Documented orders and coordinated deliveries, taking into account customer requests.</li>
                    <li>Presented products with polished demonstrations highlighting functions, usability and unique selling points to help close sales.</li>
                    </ul>
                </div>
              </div>
            </li>
            <li className={styles.timelineevent}>
              <label className={styles.timelineeventicon}></label>
              <div className={styles.timelineeventcopy}>
                <p className={styles.timelineeventthumbnail}>Jul 2021 – Jun 2023</p>
                <p>
                  <strong>JAIKAVanijya Pvt. Ltd. NagpurDesignation:- </strong>
                  <br />KIA Experience Consultant</p>
                <div>
                  <strong>Roles & Responsibilities:</strong>
                  <ul className={styles.rolesandresponsibilities}>
                    <li>Inspired teams to achieve or exceed goals through regular motivation, implementing loyalty incentives and facilitating Team - building activities.</li>
                    <li>Delivered quality service with friendly and professional demeanor.</li>
                    <li>Maintained excellent employee relationships by cultivating supportive, positive and helpful working environment.</li>
                    <li>Tactfully handled complaints from staff, management and clients using excellent problem-solving and dispute resolution skills.</li>
                    <li>Resolved complex customer enquiries, disputes and complaints.</li>
                  </ul>
                </div>
              </div>
            </li>
            
          </ul>
        </section>
        <section id="features" className={`flex flex-col items-center text-center`}>
          <h1 className={`py-2 text-4xl font-extrabold`}>Our Features</h1>
          <p className={`py-2 w-[50%]`}>Unleash your creativety with a visual collaboration platform that enables effective ideation</p>
          <div className={`flex justify-between gap-2 py-6`}  >
            <MyCards
              icon={setting}
              heading="Chossing a Service"
              para="Choosing an accountant that matches your needs"
            />
            <MyCards
              icon={account}
              heading="Our Client Says"
              para="Read the reviews from some of our satisfied clients "
            />
            <MyCards
              icon={email}
              heading=" Intial Consultation"
              para="Understanding your accountancy requirment"
            />
            <MyCards
              icon={telephone}
              heading="Request a Callback"
              para="Lets talk at a more convenient time for you"
            />
          </div>
        </section>
        {/* <section id="contactme">
          <h1>Contact Me</h1>
          <input type="text" />
          <button onClick={() => {
            const mailtoLink = `https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTgbrKKDvDsXLSKWwDXqdBJHfZSLcTVwMPJnPsslfQQkDGglBdlkXWXRLqrnjCBmFxBRhS`;
            window.location.href = mailtoLink;
          }}>Email</button>
          <button>WhatsApp</button>
        </section> */}
        <footer className={`w-[100%] h-[40px] bg-green-800 md:bg-red-800 lg:bg-blue-800`}>
        </footer>
      </main>
    </div>
  );
}
