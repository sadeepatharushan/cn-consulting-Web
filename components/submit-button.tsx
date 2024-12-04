import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="bg-zinc-900" disabled={pending}>
      {pending ? (
        <Loader2 className="size-4 animate-spin" />
      ) : (
        "Submit"
      )}
    </Button>
  );
}