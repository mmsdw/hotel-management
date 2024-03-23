import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    // React Query: We can only pass one argument to this function, so we pass the arguments in as an object
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("User info successfully update!");
      queryClient.setQueryData(["user", user]);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}
