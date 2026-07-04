import Header from "../components/Header";
import UploadSection from "../components/UploadSection";
import SuggestedQuestions from "../components/SuggestedQuestions";
import ChatSection from "../components/ChatSection";

function Home() {
  return (
    <div className="home">

      <Header />

      <div className="workspace">

        <div className="left-panel">
          <UploadSection />
        </div>

        <div className="right-panel">
          <SuggestedQuestions />
          <ChatSection />
        </div>

      </div>

    </div>
  );
}

export default Home;