import { usePaginatedUsers } from "../hooks/client"; // Custom hook with React Query
import {
  Spinner,
  Card,
  CardHeader,
  CardBody,
  Divider,
  CardFooter,
  Image,
} from "@nextui-org/react";
import { useInView } from "react-intersection-observer";
import React from "react";

export default function GetAllUserCom() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    usePaginatedUsers(10);

  const users = data?.pages?.flatMap((page) => page.users) || [];

  // Intersection
  const { ref: loadMoreRef, inView } = useInView({
    threshold: 1.0,
  });

  React.useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-2">
        {users.map((user) => (
          <Card key={user.id} className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image
                alt={user.name}
                className="rounded-full"
                height={40}
                src={user?.picture || "https://placehold.co/40"}
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">{user.name}</p>
                <p className="text-small text-default-500">{user.email}</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>Status: {user.Ticket ? "Active" : "Inactive"}</p>
            </CardBody>
            <Divider />
            {/* <CardFooter>
        <Link isExternal showAnchorIcon href={`mailto:${user.email}`}>
          Contact {user.name}
        </Link>
      </CardFooter> */}
          </Card>
        ))}
        {/* Load More Trigger */}
        {isFetchingNextPage && <Spinner />} {/* Show spinner while fetching */}
        <div
          ref={loadMoreRef}
          style={{ height: "20px", marginBottom: "20px" }}
        />
      </div>
    </>
  );
}
