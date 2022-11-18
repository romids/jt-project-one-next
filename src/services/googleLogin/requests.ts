import { serviceFetch } from "@utils/service";
import { getRoute } from "@utils/route";

export type MutatePostApiLoginGoogleUsersRequestBody = { access_token: string; email: string };
export type MutatePostApiLoginGoogleUsersResponseBody = {
  success: boolean;
  user: {
    id?: number;
    created_at?: Date;
    updated_at?: Date;
    first_name?: string;
    last_name?: string;
  };
  access_token: {
    id?: string;
    resource_owner_id?: string;
    application_id?: string;
    token?: string;
    refresh_token?: string;
    expires_in?: string;
    revoked_at?: string;
    created_at?: string;
    scopes?: string;
    previous_refresh_token?: string;
    resource_owner_type?: string;
  };
  error: string;
};

export const mutatePostApiLoginGoogleUsers = async (
  body: MutatePostApiLoginGoogleUsersRequestBody
): Promise<MutatePostApiLoginGoogleUsersResponseBody> => {
  return serviceFetch({
    url: getRoute("api/login_google_users", body),
    method: "POST",
    data: body,
  });
};
