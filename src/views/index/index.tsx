import { Link } from "gatsby";
import React from "react";

export const IndexView = () => {
    return (
        <>
            <h1>Pro active</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <p>
                <Link to="/using-ssr">Go to "Using SSR"</Link>
            </p>
        </>
    );
};
