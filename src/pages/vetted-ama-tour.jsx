import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import VettedAMATourArea from "../containers/vetted-ama-tour";
export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const VettedAMATour = () => {

  
    return (
        <Wrapper>
            <SEO pageTitle="Vetted AMA Tour" />
            <Header />
            <main id="main-content">
                <VettedAMATourArea/>
                
            </main>
            <Footer />
        </Wrapper>
    );
};

export default VettedAMATour;
