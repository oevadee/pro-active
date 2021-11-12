import React from "react";

import { Layout } from "../layouts";
import { Seo } from "../components/seo";
import { NotFoundView } from "../views/404";

const NotFoundPage = () => (
    <Layout>
        <Seo title="404: Not found" />
        <NotFoundView />
    </Layout>
);

export default NotFoundPage;
