import React from "react";

import { Layout } from "../components/layout";
import { Seo } from "../components/seo";
import { IndexView } from "../views/index";

const IndexPage = () => (
    <Layout>
        <Seo title="Home" />
        <IndexView />
    </Layout>
);

export default IndexPage;
