import type { NextPageContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { initServerInfo } from "@utils/serverSide";
import { dehydrate } from "react-query";
import Tasks from "@components/pages/Tasks";
export async function getServerSideProps(context: NextPageContext) {
  const { locale = "en", query } = context;
  const options: {
    props?: Record<string, unknown>;
    redirect?: Record<string, unknown>;
  } = {};
  const { session, queryClient } = await initServerInfo(context);
  if (!session?.user?.accessToken) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

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
export default Tasks;
