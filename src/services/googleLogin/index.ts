import { useEffect, useState } from "react";
import { MutateOptions, useMutation, useQueryClient } from "react-query";
import {
  MutatePostApiLoginGoogleUsersRequestBody,
  MutatePostApiLoginGoogleUsersResponseBody,
  mutatePostApiLoginGoogleUsers,
} from "./requests";

export const useGoogleLoginService = () => {
  const queryClient = useQueryClient();

  const mutationPostApiLoginGoogleUsers = useMutation(mutatePostApiLoginGoogleUsers);

  const postApiLoginGoogleUsers = {
    fetch: (
      body?: MutatePostApiLoginGoogleUsersRequestBody,
      options: MutateOptions<
        MutatePostApiLoginGoogleUsersResponseBody,
        unknown,
        MutatePostApiLoginGoogleUsersRequestBody,
        unknown
      > = {}
    ) => {
      if (!body) {
        throw new Error("MISSING_BODY");
      }
      return mutationPostApiLoginGoogleUsers.mutateAsync(body, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("GoogleLogin");
        },
      });
    },
  };

  return {
    postApiLoginGoogleUsers,
    mutationPostApiLoginGoogleUsers,
  };
};
