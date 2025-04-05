import Section from "../components/Section";
import { motion } from "framer-motion";

const fadeInUpZoom = {
  hidden: { opacity: 0, y: 30, scale: 0.95 }, // Initial state: hidden with slight zoom-out
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1, // On visible, it returns to normal size
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Home: React.FC = () => {
  return (
    <div className="space-y-10 bg-[#5e3a1e] text-white">
      {/* Hero */}
      <Section
        heading="Bridgepoint"
        title="Your Career Partner, 당신의 커리어 길잡이"
        subtitle="Personalized Career Coaching to Help You Succeed"
        bgImage="/careercoaching/images/thought-catalog-505eectW54k-unsplash.jpg"
        textAlignment="absolute z-10 gap-10 text-center top-[20%] left-1/2 transform -translate-x-1/2"
      />

      {/* About Julie */}
      <Section id="about" bgColor="#744927">
        <div className="py-10 px-4 md:px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <motion.div
            className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden flex-shrink-0 shadow-lg"
            variants={fadeInUpZoom}
            initial="hidden"
            whileInView="visible"
          >
            <img
              src="/careercoaching/images/wifey.jpeg"
              alt="Julie Park"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="space-y-4 md:flex-1 text-center md:text-left"
            variants={fadeInUpZoom}
            initial="hidden"
            whileInView="visible"
            custom={1}
          >
            <h2 className="text-5xz md:text-4xl font-bold">
              당신의 커리어 파트너: Julie Park
            </h2>
            <p>
              안녕하세요, 커리어 파트너 줄리 멘토입니다. 한국 종로의 헤드헌팅
              펌에서 커리어를 시작해, 현재는 뉴질랜드 로켓랩(Rocket Lab)에서
              글로벌 채용 총괄로 일하고 있으며, KOTRA 오세아니아 커리어 멘토로도
              활동 중입니다.
            </p>
            <p>
              현지 시장의 채용 트렌드를 누구보다 빠르게 파악하고, 한국 분들의
              뛰어난 경력을 어떻게 효과적으로 전달할지에 대한 인사이트를
              제공합니다.
            </p>
            <p>
              전략적으로 접근하지 않으면 경쟁이 치열한 시장에서 기회를 얻기
              어렵습니다. 저의 인사이트를 바탕으로 맞춤형 커리어 코칭 프로그램을
              소개합니다.
            </p>
            <ul className="list-disc list-inside">
              <li>현) 로켓랩 글로벌 채용 담당</li>
              <li>현) 한국 무역 진흥 공단 (KOTRA) 오세아니아 커리어 멘토</li>
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Who It's For */}
      <Section bgColor="#8c5a33">
        <motion.div
          className="py-10 px-4 md:px-6 max-w-7xl mx-auto space-y-6 md:text-left text-center"
          variants={fadeInUpZoom}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="text-3xl md:text-4xl  font-bold">Who It's For</h2>
          <p>
            BridgePoint coaching is designed for individuals transitioning from
            Korea to the NZ/AUS job market. Whether you’re just starting out or
            facing repeated rejection, this program is tailored to help you:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>Navigate the local job market</li>
            <li>Build an English resume</li>
            <li>Prepare for interviews</li>
            <li>Identify roles where your experience is most relevant</li>
          </ul>
          <div className="border-t border-white/20 pt-4">
            <p>
              브릿지포인트는 해외 구직, 이직, 커리어 전환을 준비하시는 분들을
              위한 프로그램입니다. 구체적인 전략 없이 지원만 반복하시거나,
              어디서부터 시작해야 할지 모를 때, 현지 채용자의 관점에서 효과적인
              커리어 설계를 도와드립니다.
            </p>
          </div>
        </motion.div>
      </Section>
      {/* What We Help You Achieve */}
      <Section bgColor="#6d4024">
        <motion.div
          className="py-10 px-4 md:px-6 max-w-7xl mx-auto space-y-6"
          variants={fadeInUpZoom}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="text-4xl md:text-4xl font-bold">
            What We Help You Achieve
          </h2>
          <p className="font-semibold text-2xl">
            Our coaching program helps you:
          </p>
          <ol className="list-decimal list-inside space-y-2 pl-4 text-xl">
            <li>Design a personalized career roadmap</li>
            <li>Set your job search strategy based on market research</li>
            <li>Optimize your resume and LinkedIn for visibility</li>
            <li>Connect with key industry professionals</li>
            <li>Confidently prepare and succeed in interviews</li>
            <li>Negotiate competitive offers that reflect your worth</li>
          </ol>
        </motion.div>
      </Section>

      {/* Why BridgePoint */}
      <Section bgColor="#5e3a1e">
        <motion.div
          className="py-10 px-4 md:px-6 max-w-7xl mx-auto space-y-6"
          variants={fadeInUpZoom}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="text-4xl md:text-4xl font-bold">Why BridgePoint?</h2>
          <ol className="list-decimal list-inside space-y-2 pl-4 text-xl">
            <li>실무 중심의 구직 전략과 최신 채용 인사이트 제공</li>
            <li>모든 직군과 산업을 아우르는 맞춤형 커리어 코칭</li>
            <li>실제 채용 담당자와의 네트워크 연결 가능</li>
            <li>
              한국에서 시작해 글로벌 기업에 안착한 경험 기반의 현실적 조언
            </li>
            <li>KOTRA 공식 멘토로 인증된 전문성</li>
            <li>합격까지 함께하는 파트너십</li>
          </ol>
        </motion.div>
      </Section>

      {/* Contact Section */}
      <Section
        bgColor="#744927"
        id="contact"
        title="Get In Touch"
        subtitle="Ready to take the next step in your career?"
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            {
              title: "Resume Review",
              desc: "Get expert feedback to improve your resume.",
            },
            {
              title: "Interview Coaching",
              desc: "Practice with mock interviews and gain insider tips.",
            },
            {
              title: "Career Guidance",
              desc: "Receive personalized advice to grow your career abroad.",
            },
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={`mailto:careerwithj@gmail.com?subject=Inquiry: ${encodeURIComponent(
                item.title
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              variants={fadeInUpZoom}
              custom={idx}
              className="block p-6 rounded-xl bg-[#8c5a33] shadow-md border border-white/10"
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-base">{item.desc}</p>
            </motion.a>
          ))}
        </motion.div>
        <motion.div
          className="fixed bottom-6 inset-x-0 flex justify-center z-50"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center space-x-4 bg-[#744927dd] backdrop-blur-sm rounded-full px-6 py-3 shadow-2xl hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300 ease-in-out border border-white/10">
            <a
              href="mailto:careerwithj@gmail.com?subject=General Inquiry"
              className="flex items-center space-x-2 text-white hover:text-[#ffddaa] transition-colors duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 4h20v16H2z" fill="none" />
                <path d="M22 4H2v16h20V4zm-2 2v.01L12 13 4 6.01V6h16zm0 12H4V8l8 7 8-7v10z" />
              </svg>
              <span className="font-medium">careerwithj@gmail.com</span>
            </a>
            <div className="w-px h-6 bg-white/30" />
            <a
              href="https://www.linkedin.com/in/julie-park-"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-[#a7d4ff] transition-colors duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5S0 4.88 0 3.5C0 2.12 1.12 1 2.5 1S4.98 2.12 4.98 3.5zM.5 8h4.9v12H.5V8zm7.5 0h4.7v1.6h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.7v8.4h-4.9V16c0-1.8-.03-4.1-2.5-4.1-2.5 0-2.9 1.9-2.9 4v8.1h-4.9V8z" />
              </svg>
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </Section>

      {/* Call to Action */}
      <Section
        title="Start Your Journey Today"
        subtitle="Join thousands of professionals who have transformed their careers."
        bgImage="/careercoaching/images/j.jpg"
        bgPosition="center 30%"
        bgSize="auto"
        slideValue="10%"
        textAlignment="text- absolute z-10 gap-10 text-center bottom-[35%] left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          className="mt-8 flex justify-center "
          variants={fadeInUpZoom}
          initial="hidden"
          whileInView="visible"
          custom={1}
        >
          <motion.a
            href="mailto:careerwithj@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 text-white bg-[#744927] rounded-full shadow-lg hover:bg-[#8c5a33] transition-colors duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </Section>
    </div>
  );
};

export default Home;
