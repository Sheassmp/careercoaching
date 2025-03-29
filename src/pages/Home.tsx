import Section from "../components/Section";

const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <Section
        heading="Bridgepoint"
        title="Your Career Partner, 당신의 커리어 길잡이"
        subtitle="Personalized Career Coaching to Help You Succeed"
        bgImage="/images/thought-catalog-505eectW54k-unsplash.jpg"
      />

      <Section>
        {/* New Section with Image on Top for Mobile and Side-by-Side on Desktop */}
        <div
          className="flex flex-col md:flex-row items-center justify-center bg-gray-100 py-4 px-4 md:px-6 shadow-lg"
          style={{ backgroundColor: "#69625d" }}
        >
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 max-w-6xl mx-auto">
            {/* Left: Circular Image */}
            <div className="w-64 h-64 md:w-80 md:h-80 bg-cover bg-center rounded-full overflow-hidden mx-auto md:ml-10">
              <img
                src="/images/wifey.jpeg"
                alt="Unlock Your Potential"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Right: Text */}
            <div className="w-full md:w-2/3 text-center md:text-left mx-4 md:ml-10 p-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                당신의 커리어 파트너: Julie Park
              </h2>
              <p className="text-base md:text-xl text-white mb-4">
                안녕하세요, 커리어 파트너 줄리 멘토 입니다. 한국 종로의 헤드헌팅
                펌에서 커리어를 시작해, 호주와 뉴질랜드 마켓에서 에이전시,
                인하우스 리쿠르터로 일 한 지 4년차이며, 현재는 로켓랩 이라는
                글로벌 항공 우주 회사에서 채용 총괄로 현직 재직 중입니다. 또한
                현재 한국 무역기관 (KOTRA) 에서 오세아니아 공식 커리어 멘토로
                활동중에 있습니다.
              </p>
              <p className="text-base md:text-xl text-white mb-4">
                여러 Trans-Tasman (ANZ) 비즈니스에서 채용담당자로 일을 오래
                하다보니, 현지 구직시장의 흐름이나, 호주 / 뉴질랜드 회사들의
                채용 &amp; 스킬 트렌드에 관한 인사이트를 감사하게 많이 얻는 입장이
                되었습니다.
              </p>
              <p className="text-base md:text-xl text-white mb-4">
                매일 이력서들을 제일 앞에서 스크린 할 때마다 한국분들의 뛰어난
                경력을 담은 이력서들을 많이 접하게 됩니다. 하지만, 안타깝게도
                대부분의 이력서들이 현지 채용담당자 (Hiring Manager) 들의 입맛에
                맞추지 못해 첫 단계부터 떨어지는 것을 많이 봅니다.
              </p>
              <p className="text-base md:text-xl text-white mb-4">
                한 포지션에 150개 넘는 이력서가 들어오는, 이런 경쟁이 심화 된
                구직시장에서는 구직에 공을 더 들이는 것이 중요합니다.
                "전략적으로" 공을 들이셔야 됩니다. 제 전문 인사이트로 성공적인
                구직과 이직을 도와드리는 맞춤형 커리어 코칭 프로그램을
                소개합니다.
              </p>
              <ul>
                <li className="text-base md:text-xl text-white">
                  - 현) 로켓랩 글로벌 채용 담당
                </li>
                <li className="text-base md:text-xl text-white">
                  - 현) 한국 무역 진흥 공단 (KOTRA) 오세아니아 공식 커리어 멘토
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div
          className="flex flex-col md:flex-row items-center justify-center py-4 px-4 md:px-6 shadow-lg"
          style={{ backgroundColor: "#69625d" }}
        >
          <div className="max-w-7xl mx-auto text-left p-4 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Who It's For
            </h2>
            {/* English Section */}
            <div className="mb-6">
              <p className="text-base md:text-xl text-white leading-relaxed mb-4">
                Bridge point career coaching is for you if you are transitioning
                your career from Korea to NZ / AUS market, or you are looking
                for professional help for your job hunting. You should be
                coachable, self-aware, and ready to step into building a
                meaningful career in NZ / AUS market in the next 90 days. If this is
                you, you're likely to struggle with: finding a job in the local
                markets, having no idea where to start, building an English
                resume, interviewing, or identifying the right roles where you can
                leverage your experience.
              </p>
            </div>
            {/* Korean Section */}
            <div className="border-t border-white/20 pt-4">
              <p className="text-base md:text-xl text-white leading-relaxed">
                브릿지 포인트 컨설팅은 채용 전문가의 눈으로, 해외 취업, 구직,
                이직, 커리어 트랜지션을 도와드리는 코칭 서비스 입니다. 한국에서
                영어권 국가로 이민을 준비하신다던가, 이미 해외에서 구직이나
                이직을 활발하게 준비하시는 분들에게 맞춤인 서비스 입니다. 해외
                취업, 이직을 어디서부터 시작하셔야 할지 도저히 감이 안잡힌다,
                계속 인터뷰와 서류에서 떨어진다, 한국에서 막 도착했는데
                한국에서의 경력을 어떻게 이어나가야 할 지 모르겠다, 현지 로컬
                회사들에서 커리어를 쌓아나가고 싶다. 하시는 분들께 레주메 부터
                시작해, 전반적인 로컬 마켓에 따른 구직 전략, 네트워킹 전략,
                인터뷰 준비, 링크드인 관리 전략, 해외에서의 성공적인 이직과
                구직을 도와드립니다.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div
          className="flex flex-col items-center justify-center py-4 px-4 md:px-6 shadow-lg"
          style={{ backgroundColor: "#69625d" }}
        >
          <div className="max-w-7xl mx-auto text-left w-full p-4 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              What It Helps You Achieve
            </h2>
            <p className="text-base md:text-xl font-bold text-white leading-relaxed mb-4">
              Bridge point career coaching helps you achieve the following:
            </p>
            <ol className="list-decimal list-inside text-base md:text-xl text-white leading-relaxed space-y-2 md:space-y-4">
              <li>
                Map out a career path that aligns with your goals so you secure the best jobs
              </li>
              <li>
                Research local job market &amp; set the job searching strategy
              </li>
              <li>
                Optimize your resume &amp; LinkedIn so recruiters/hiring managers contact you
              </li>
              <li>
                Connect with key personnel who directly impact your career and salary
              </li>
              <li>
                Prepare for interviews so you confidently build rapport and get offers
              </li>
              <li>
                Secure highly competitive job offers knowing you’re getting paid your worth
              </li>
            </ol>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section title="Our Services">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6 p-4 md:p-6">
          <div className="p-4 md:p-6 bg-white text-black rounded-lg shadow-lg">
            <h3 className="text-lg md:text-xl font-bold">Resume Review</h3>
            <p className="mt-2 text-sm md:text-base">Get expert feedback to improve your resume.</p>
          </div>
          <div className="p-4 md:p-6 bg-white text-black rounded-lg shadow-lg">
            <h3 className="text-lg md:text-xl font-bold">Interview Coaching</h3>
            <p className="mt-2 text-sm md:text-base">
              Prepare with mock interviews and expert tips.
            </p>
          </div>
          <div className="p-4 md:p-6 bg-white text-black rounded-lg shadow-lg">
            <h3 className="text-lg md:text-xl font-bold">Career Guidance</h3>
            <p className="mt-2 text-sm md:text-base">
              Find the right path with one-on-one coaching.
            </p>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section
        title="Start Your Journey Today"
        subtitle="Join thousands of professionals who have transformed their careers."
        bgImage="https://source.unsplash.com/1600x900/?goal,career"
      />
    </div>
  );
};

export default Home;