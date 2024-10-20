import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@nextui-org/react";
// import { Label } from "@/components/ui/label";
import { Input } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { toast } from "react-hot-toast";
import { IconArrowLeft, IconStackBackward } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { ConfettiButton } from "./ui/ConfietCon";
import { useMakeTicket } from "../hooks/client";

const formSchema = z.object({
  foodPreference: z.enum(["veg", "non-veg"], {
    required_error: "Please select a food preference",
  }),
  description: z.string().optional(),
});

const ticketHints = [
  "Always keep your ticket in a safe place to avoid loss or damage.",
  "Make sure to arrive at least 30 minutes before the event starts.",
  "Have your ID ready along with your ticket for verification.",
  "Check the venue's policies on prohibited items before attending.",
  "If you have any special requirements, contact the organizers in advance.",
];

export default function TicketHintPage() {
  const navigation = useNavigate();
  const { mutate } = useMakeTicket();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    const { description, foodPreference } = data;
    try {
      await mutate({ description, foodPreference });
     
      window.localStorage.setItem("ticket", result);
      toast.success("Ticket preferences submitted successfully!");
      navigation("/ticket");
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div
        className="hidden md:block bg-[#212121] absolute p-5 rounded-full text-white cursor-pointer"
        onClick={() => navigation(-1)}
      >
        <IconArrowLeft />
      </div>
      <Card className="w-full max-w-2xl mx-auto">
        <div className="p-4">
          <CardHeader className="text-2xl font-bold">Ticket Hints</CardHeader>
          <label>Read these helpful tips about using your ticket.</label>
        </div>
        <CardBody className="space-y-6">
          <ul className="list-disc pl-5 space-y-2">
            {ticketHints.map((hint, index) => (
              <li key={index} className="text-sm text-muted-foreground">
                {hint}
              </li>
            ))}
          </ul>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label>Food Preference</label>
              <Controller
                name="foodPreference"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <Radio value="veg" id="veg" />
                      <label htmlFor="veg">Vegetarian</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Radio value="non-veg" id="non-veg" />
                      <label htmlFor="non-veg">Non-Vegetarian</label>
                    </div>
                  </RadioGroup>
                )}
              />
              {errors.foodPreference && (
                <p className="text-sm text-red-500">
                  {errors.foodPreference.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="description">
                Additional Comments (Optional)
              </label>
              <Input
                id="description"
                placeholder="Enter any additional comments or requirements"
                {...register("description")}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit Preferences"}
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
