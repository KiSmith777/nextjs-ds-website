import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import { normalizedData } from "@utils/methods";
import homepageData from "../data/homepages/home.json";

import AuditTopArea from "../containers/audits";
import KYCArea from "../containers/kyc";



export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const KYCServices = () => {
    const content = normalizedData(homepageData?.content || []);
  
    return (
        <Wrapper>
            <SEO pageTitle="KYC Services" />
            <Header />
            <main id="main-content">
               <KYCArea/>
            </main>
            <Footer />
        </Wrapper>
    );
};

export default KYCServices;
