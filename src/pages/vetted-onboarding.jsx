import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import { normalizedData } from "@utils/methods";
import homepageData from "../data/homepages/home.json";
import OnboardingArea from "../containers/vetted-onboarding";



export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Onboarding = () => {
    const content = normalizedData(homepageData?.content || []);
  
    return (
        <Wrapper>
            <SEO pageTitle="Vetted Onboarding" />
            <Header />
            <main id="main-content">
               <OnboardingArea/>
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Onboarding;
