import Layout from "layouts/layout";
import WvContainer from "@wevisdemo/ui/components/container";
import WvParagraphGroup from "@wevisdemo/ui/components/paragraph-group";
import WvButtonGroup from "@wevisdemo/ui/components/button-group";
import WvButton from "@wevisdemo/ui/components/button";
import WvSharer from "@wevisdemo/ui/components/sharer";
import WvFooter from "@wevisdemo/ui/components/footer";
import config from "jsconfig.json";

const about = () => {
  const refs_link = [
    "http://air4thai.pcd.go.th/webV2/download.php",
    "https://webportal.bangkok.go.th/pipd/page/sub/21303/%E0%B8%AA%E0%B8%96%E0%B8%B4%E0%B8%95%E0%B8%B4%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3-2563",
    "http://203.155.220.118/green-parks-admin/reports/report17.php?park_year=2564",
    "https://webportal.bangkok.go.th/pipd/page/sub/21303/%E0%B8%AA%E0%B8%96%E0%B8%B4%E0%B8%95%E0%B8%B4%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3-2563",
    "https://webportal.bangkok.go.th/public/user_files_editor/231/WasteData/2564/12.September2021.pdf",
    "https://webportal.bangkok.go.th/pipd/page/sub/21303/%E0%B8%AA%E0%B8%96%E0%B8%B4%E0%B8%95%E0%B8%B4%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3-2563",
    "http://www.nso.go.th/sites/2014/Pages/home.aspx",
  ];
  return (
    <Layout>
      <div className="h-full overflow-y-auto bg-white-default">
        <WvContainer>
          <div className="flex flex-col items-center font-bold ">
            <p className="h1">Open Bangkok</p>
            <p className="h3">สำรวจย้อนหลัง 10 ปีกับปัญหาที่กวนใจชาวกทม.</p>
          </div>
          <WvParagraphGroup heading="เกี่ยวกับโปรเจกต์นี้">
            <div>
              กรุงเทพมหานคร เมืองหลวง เป็นศูนย์กลางของเศรษฐกิจของประเทศ
              ซึ่งมีหลากหลายประเด็นที่เกี่ยวข้องกับชีวิตที่น่าสนใจ
              โดยที่ประเด็นปัญหาที่หลากหลายเหล่านี้ยังคงเป็นประเด็นที่ยังกวนใจใครหลายคน
              แล้วกรุงเทพมหานครในฐานะองค์กรปกครองรูปแบบพิเศษที่ตั้งรูปแบบการบริหารมาเฉพาะ
              ที่ต้องเลือกตั้งผู้ว่าราชการจังหวัด ร่วมทั้งบทบาทของสภา และประชาชน
              ที่ใครหลายคนอาจจะยังไม่เข้าใจถึงระบบหรือการดำเนินการจัดการปัญหาต่างๆของกรุงเทพมหานคร
              <br />
              <br />
              โปรเจกต์นี้ทางทีม WeVis ร่วมกับสถาบันพระปกเกล้า และผศ.ดร.พิชญ์ พงษ์สวัสดิ์
              จึงชวนทุกคนทำความรู้จักกรุงเทพมหานคร ทั้งผู้ว่าราชการจังหวัด สภา หน้าที่ของกรุงเทพมหานคร
              รวมทั้งสำรวจประเด็นที่เกี่ยวข้องในชีวิตประจำวัน ของกรุงเทพมหานคร ไม่ว่าจะเป็น เรื่องฝุ่น น้ำท่วม
              น้ำเน่าเสีย ขยะ พื้นที่สีเขียว ว่าสถานการณ์ตอนนี้เป็นอย่างไร และกรุงเทพมหานครนั้นในฐานะที่ดูแล
              มีหน้าที่ในการดำเนินการอย่างไร ประกอบกับมีการจัดสรรงบประมาณเท่าไหร่จัดการอย่างไร
              <br />
              <br />
              เพื่อให้ทุกคนได้รับรู้ข้อมูลได้อย่างชัดเจน ทางทีม จะพยายามอัพเดทข้อมูลให้เป็นปัจจุบันมากที่สุด
            </div>
          </WvParagraphGroup>

          <WvParagraphGroup heading="ที่มาของข้อมูล">
            <div className="b2">
              ทางทีมผู้พัฒนา ได้ใช้ข้อมูลจากเว็บไซต์จากกรุงเทพมหานครเป็นหลัก ได้แก่ สถิติที่กรุงเทพมหานครรวบรวมไว้
              จากกองยุทธศาสตร์บริหารจัดการ สำนักยุทธศาสตร์และประเมินผล กรุงเทพมหานคร และรายประเด็น
            </div>

            <div className="b3 hint">
              <ul className="ml-10 list-disc ">
                <li>เรื่องฝุ่น จากกองจัดการคุณภาพอากาศและเสียง กรมควบคุมมลพิษ</li>
                <li>เรื่องน้ำท่วม จากสำนักการระบายน้ำ กรุงเทพมหานคร</li>
                <li>เรื่องน้ำเน่าเสีย จากกองยุทธศาสตร์บริหารจัดการ สำนักยุทธศาสตร์และประเมินผล กรุงเทพมหานคร</li>
                <li>เรื่องพื้นที่สีเขียว จากสำนักสิ่งแวดล้อม และ สำนักยุทธศาสตร์และประเมินผล (กรุงเทพมหานคร)</li>
                <li>เรื่องขยะ จากสำนักสิ่งแวดล้อม กรุงเทพมหานคร</li>
                <li>เรื่องประชากร กทม. เรื่องประชากร จากสำนักงานสถิติแห่งชาติ</li>
                <li>เรื่องงบฯ จากข้อบัญญัติกรุงเทพมหานคร ราชกิจจานุเบกษา</li>
              </ul>
            </div>
          </WvParagraphGroup>
          <WvParagraphGroup small heading="อ้างอิงข้อมูลจาก :">
            <ul className="ml-10 list-disc ">
              {refs_link.map((d, index) => (
                <li key={index} className="break-all hover:underline ">
                  <a href={d} target="_blank" rel="noopener noreferrer">
                    {d === "http://www.nso.go.th/sites/2014/Pages/home.aspx" ? "สำนักงานสถิติแห่งชาติ (nso.go.th)" : d}
                  </a>
                </li>
              ))}
            </ul>
          </WvParagraphGroup>

          <WvParagraphGroup heading="นโยบายการนำข้อมูลไปใช้ต่อ">
            <div className="b2">
              ทางทีมมีความตั้งใจที่พัฒนาทุกโปรเจ็กต์ให้เป็น Open Source และเปิดข้อมูลเป็น Open Data ภายใต้เงื่อนไข
              Creative Commons Attribution-ShareAlike License คือสามารถนำไปเผยแพร่และดัดแปลงได้ โดยต้องระบุที่มา
              แต่ห้ามนำไปใช้เพื่อการค้า และต้องเผยแพร่งานดัดแปลงโดยใช้สัญญาอนุญาตชนิดเดียวกัน
              <br />
              <br />
              หากมีข้อสงสัยต้องการสอบถามเพิ่มเติม ประสงค์แจ้งเปลี่ยนแปลงหรือเพิ่มเติมข้อมูลเพื่อความถูกต้อง
              หรือมีข้อเสนอแนะใดๆ สามารถติดต่อได้ที่ team [at] punchup.world
            </div>
          </WvParagraphGroup>

          <WvParagraphGroup heading="อาสาสมัครร่วมพัฒนา">
            <WvParagraphGroup small heading="เขียนโปรแกรม">
              <a
                href="https://github.com/MEEP00H"
                target="_blank"
                rel="noopener noreferrer"
                className="b2 hover:underline"
              >
                โสภณ จำปาซ่อนกลิ่น
              </a>
              <a
                href="https://github.com/mixth"
                target="_blank"
                rel="noopener noreferrer"
                className="b2 hover:underline"
              >
                , ณรัฐ สุชาติสุนทร
              </a>
            </WvParagraphGroup>

            <WvParagraphGroup small heading="ออกแบบ">
              <a
                href="https://www.instagram.com/messymachine/"
                target="_blank"
                rel="noopener noreferrer"
                className="b2 hover:underline"
              >
                พิชญา โชนะโต
              </a>
            </WvParagraphGroup>

            <WvParagraphGroup small heading="สืบค้นและรวบรวมข้อมูล">
              <a
                href="https://www.linkedin.com/in/suphisara-isaranugul-a943b017b/"
                target="_blank"
                rel="noopener noreferrer"
                className="b2 hover:underline"
              >
                ศุภิสรา อิศรานุกูล
              </a>
            </WvParagraphGroup>

            <WvParagraphGroup small heading="บรรณาธิการ">
              <a
                href="https://www.linkedin.com/in/thanisara-r/"
                target="_blank"
                rel="noopener noreferrer"
                className="b2 hover:underline"
              >
                ธนิสรา เรืองเดช
              </a>
            </WvParagraphGroup>

            <WvParagraphGroup small heading="ประสานงานและจัดการอื่นๆ">
              <div className="b2">
                <a
                  href="https://punchup.world/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight hover:underline"
                >
                  Punch Up
                </a>
                <span className="mx-1"> และ </span>
                <a
                  href="https://wevis.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-1 highlight hover:underline"
                >
                  WeVis
                </a>
                Open Bangkok สำรวจย้อนหลัง 10 ปีกับปัญหาที่กวนใจชาวกทม.
              </div>
            </WvParagraphGroup>
          </WvParagraphGroup>

          <WvButtonGroup center>
            <a
              href="https://docs.google.com/spreadsheets/d/1L6rVuwhfpyhx2eK0reUx-hTJd4vMv8aelgJrGPoYS2s/edit#gid=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WvButton>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_314_173)">
                    <path
                      d="M7.03582 2.86356H1.17529V19.4081H19.8247V2.86356C19.8247 2.86356 15.306 2.86356 13.9642 2.86356"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M16.0317 8.65536L10.7284 13.9587L5.42513 8.65536"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                    />
                    <line x1="10.667" y1="0.5" x2="10.667" y2="13" stroke="currentColor" stroke-width="2" />
                  </g>
                  <defs>
                    <clipPath id="clip0_314_173">
                      <rect width="20.8333" height="20" fill="white" transform="translate(0.0834961 0.5)" />
                    </clipPath>
                  </defs>
                </svg>
                <div>ดาวน์โหลดข้อมูล</div>
              </WvButton>
            </a>

            <a href="https://airtable.com/shryu4errnlj1LWsM" target="_blank" rel="noopener noreferrer" className="b2 ">
              <WvButton>
                <img
                  width="26"
                  src="data:image/png;base64,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"
                  alt=""
                />
                <span>Feedback</span>
              </WvButton>
            </a>
          </WvButtonGroup>

          <WvSharer center url={config.web_url} />
        </WvContainer>
        <WvFooter />
      </div>
    </Layout>
  );
};

export default about;
