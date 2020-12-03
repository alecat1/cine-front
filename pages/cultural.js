import Head from "next/head";
import Statistics from "../src/components/statistics";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "../src/components/menu";
import Footer from "../src/components/footer";
import Cultural from "../src/components/cultural";

import "../src/components/admin/tips/tips-change.css";
import "../src/components/tips/tips.css";
import "../src/components/admin/admin/admin.css";
import "../src/components/admin/glossary/change/glossary-change.css";
import "../src/components/admin/glossary/new/glossary-new.css";
import "../src/components/admin/home/home-change.css";
import "../src/components/admin/material/material-change.css";
import "../src/components/admin/policies/change/policies-change.css";
import "../src/components/admin/policies/new/policies-new.css";
import "../src/components/admin/register/register.css";
import "../src/components/admin/resilience/resilience-change.css";
import "../src/components/admin/user/user-change.css";
import "../src/components/admin/user/user-change.css";
import "../src/components/cultural/cultural.css"
import "../src/components/footer/footer.css";
import "../src/components/login/login.css";
import "../src/components/material/material.css";
import "../src/components/mediavideos/mediavideos.css";
import "../src/components/menu/menu.css";
import "../src/components/policies/policies.css";
import "../src/components/resilience/resilience.css";
import "../src/components/statistics/statistics.css";
import "../src/components/word/word.css";

export default function cultural() {
  return (
    <div>
      <Head>
        <title>Tiktok Web Site - Cultural</title>
        <link rel="icon" href="/assents/icons/favicon.png" />
      </Head>
      <Menu></Menu>
      <Cultural />
      <Footer />
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background: url("/assents/images/Background-Glossary.png");
          background-repeat: no-repeat;
          background-size: cover;
        }
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(102, 102, 102, 0.315);
        }
      `}</style>
    </div>
  );
}
