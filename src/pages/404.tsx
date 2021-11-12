import * as React from "react";

import { Layout } from "../components/layout";
import { Seo } from "../components/seo";
import { NotFoundView } from "../views/404";

export const NotFoundPage = () => (
    <Layout>
        <Seo title="404: Not found" />
        <NotFoundView />
    </Layout>
);
