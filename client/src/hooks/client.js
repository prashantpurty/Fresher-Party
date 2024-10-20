import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  GetCurrectLoginUserQuery,
  GetVerifyTicket,
} from "../graphql/query/user";
import { graphqlClient } from "../api";
import { makeTicketMutation } from "../graphql/mutation/user";

export const useCurrectUser = () => {
  const query = useQuery({
    queryKey: ["Login_User"],
    queryFn: () => graphqlClient.request(GetCurrectLoginUserQuery),
  });

  return { ...query, user: query.data?.getCurrectUser };
};

export const useMakeTicket = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ description, foodPreference }) => {
      return graphqlClient.request(makeTicketMutation, {
        description,
        foodPreference,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Login_User"] });
    },
  });

  return mutation;
};

export const useVerifyTicket = (ticket) => {
  const query = useQuery({
    queryKey: ["Verify_Ticket", ticket],
    queryFn: () => graphqlClient.request(GetVerifyTicket, { ticket }),
  });

  return { ...query, ticket: query.data?.VerifyTicket };
};

// export const useGetTicketById = (id) => {
//   const query = useQuery({
//     queryKey: ["Tweet", id],
//     queryFn: () => graphqlClient.request(getTweetID, { id }),
//   });
//   return { ...query, data: query.data?.getTweetById };
// };
