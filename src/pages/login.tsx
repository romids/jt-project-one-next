import type { NextPageContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { initServerInfo } from "@utils/serverSide";
import { dehydrate } from "react-query";
import Login from "@components/pages/Login";
export async function getServerSideProps(context: NextPageContext) {
  const { locale = "en", query } = context;
  const options: {
    props?: Record<string, unknown>;
    redirect?: Record<string, unknown>;
  } = {};
  const { session, queryClient } = await initServerInfo(context);

  return {
    ...options,
    props: {
      query,
      session,
      dehydratedState: dehydrate(queryClient),
      seo: {
        title: "" || "",
        description: "" || "",
      },
      ...(await serverSideTranslations(locale)),
      ...(options.props || {}),
    },
  };
}
export default Login;
