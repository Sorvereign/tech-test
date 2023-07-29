import * as RadixDialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios, { AxiosError } from "axios";
export function Dialog({ delay }: { delay: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const onClick = async () => {
    try {
      await axios.post("http://localhost:3000/api/form", {
        email,
      });
      setIsSubmitted(true);
    } catch (error) {
      setError(
        ((error as AxiosError).response?.data as { message: string })
          .message as string
      );
    }
  };
  return (
    <RadixDialog.Root open={isVisible}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="bg-black/90 data-[state=open]:animate-overlayShow fixed inset-0" />
        <RadixDialog.Content className="border border-gray-900 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[95vh] lg:max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white  shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <RadixDialog.Title className="m-0 text-xl font-medium text-yellow-300 bg-gradient-to-r from-red-600 via-red-900 to-black p-[25px] text-center">
            ⚠️ Wait!
          </RadixDialog.Title>
          <RadixDialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal  p-[25px]">
            <div className="flex justify-center py-4">
              <Image src="/image.png" height={320} width={320} alt="Image" />
            </div>
            {!isSubmitted ? (
              <>
                <div className="text-2xl font-semibold text-center justify-center">
                  {" "}
                  Get our <p className="text-red-800">FREE Ebook</p>
                  <p className="text-base text-black font-light">
                    Revealing the happines of your partner
                  </p>
                </div>
                <fieldset className="mb-[15px] flex items-center gap-5 pt-4">
                  <input
                    className="text-red-900 shadow-red-800 focus:shadow-red-800 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                    id="name"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="partner@happier.com"
                  />
                </fieldset>
                {error && <p className="text-red-800">{error}</p>}
              </>
            ) : (
              <div className="text-2xl font-semibold text-center justify-center">
                <p className="text-2xl text-black font-semibold">Thank you!</p>
                <p className="text-base text-black font-light">
                  You'll get a copy of the pussy Key e-Guide straight to your
                  inbox. Please close this window to continue watching the
                  explicit video.
                </p>
              </div>
            )}
          </RadixDialog.Description>
          <div className="mt-[25px] flex justify-center pb-[45px]">
            <button
              className="bg-gradient-to-r from-red-600 via-red-900 to-black font-semibold w-1/2 sm:w-1/3 py-4 px-2 text-white"
              onClick={onClick}
            >
              I want it!
            </button>
          </div>
          <RadixDialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
              onClick={() => setIsVisible(false)}
            >
              <Cross2Icon />
            </button>
          </RadixDialog.Close>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}
