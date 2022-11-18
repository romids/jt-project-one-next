import { useRouter } from "next/router";
import { parseParamUrl } from "@utils/navigation";

export const useNavigateService = () => {
  const navigateService = useRouter();

  return {
    navigate: (url: string, params?: Record<string, string | number | undefined>) => {
      navigateService.push({
        pathname: parseParamUrl(url, params),
        query: params,
      });
    },
    replace: (url: string, params?: Record<string, string | number | undefined>) => {
      navigateService.push({
        pathname: parseParamUrl(url, params),
        query: params,
      });
    },
    goBack: () => {
      navigateService.back();
    },
    reload: () => {
      navigateService.reload();
    },
    openExternalLink: (
      url: string,
      isNewTab?: boolean,
      params?: Record<string, string | number | undefined>
    ) => {
      if (isNewTab) {
        window.open(parseParamUrl(url, params), "_blank");
      } else {
        window.open(parseParamUrl(url, params), "_self");
      }
    },
  };
};
