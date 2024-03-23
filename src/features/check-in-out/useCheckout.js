import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    // onSuccess receive the return value of mutationFn as argument
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} is successfully checked out.`);
      // invalidate all queries that are currently active on the page
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => toast.error("There was an error while checking out."),
  });
  return { checkout, isCheckingOut };
}
