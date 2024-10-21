import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  GetAllUsers,
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

export const getPaginatedUsers = async ({ pageParam = 0, limit = 10 }) => {
  const response = await graphqlClient.request(GetAllUsers, {
    limit,
    offset: pageParam,
  });
  return response.getAllUsers;
};

// UseInfiniteQuery Hook
export const usePaginatedUsers = (limit = 10) => {
  return useInfiniteQuery({
    queryKey: ["Get_All_Users"],
    queryFn: ({ pageParam = 0 }) => getPaginatedUsers({ pageParam, limit }),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.users.length === limit) {
        return allPages.length * limit; // Calculate the next offset
      } else {
        return undefined; // No more pages to load
      }
    },
  });
};
