import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      toast.success(
        "Account successfully created! Please check the email we've sent you to verify your email address."
      );
    },
  });
  return { signup, isLoading };
}
