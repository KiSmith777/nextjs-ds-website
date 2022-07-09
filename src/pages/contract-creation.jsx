import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import { normalizedData } from "@utils/methods";
import homepageData from "../data/homepages/home.json";
import ContractCreationArea from "@containers/contract-creation"

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const ContractCreation = () => {
    const content = normalizedData(homepageData?.content || []);
  
    return (
        <Wrapper>
            <SEO pageTitle="Smart Contract Creation" />
            <Header />
            <main id="main-content">
                <ContractCreationArea/>
               
            </main>
            <Footer />
        </Wrapper>
    );
};

export default ContractCreation;
