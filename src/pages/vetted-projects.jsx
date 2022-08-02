import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import HeroArea from "@containers/hero";
import ServiceArea from "@containers/services";

/* import NewestItmesArea from "@containers/product/layout-04";
import TopSellerArea from "@containers/top-seller/layout-01";
import ExploreProductArea from "@containers/explore-product/layout-01";
import CollectionArea from "@containers/collection/layout-01"; */
import { normalizedData } from "@utils/methods";
import VettedProjectsArea from "../containers/vetted-projects";
import vettedProjectData from "../data/vetted-projects/vetted.json"



export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const VettedProjects = () => {
  const content = normalizedData(vettedProjectData?.content || []);
  
  
    return (
        <Wrapper>
            <SEO pageTitle="Vetted Projects" />
            <Header />
            <main id="main-content">
                <VettedProjectsArea data={content["vetted-projects"]}/>
            </main>
            <Footer />
        </Wrapper>
    );
};

export default VettedProjects;
