"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar"; // shadcn Calendar
import { format } from "date-fns";

export default function VisaTabForm() {
  const [date, setDate] = useState(new Date("2025-06-02"));
  const [price, setPrice] = useState("6,000 BDT"); // initial value

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 py-4 mt-3 md:max-w-1/2">
      {/* Processing Type */}
      <div className="flex flex-col">
        <label className="text-sm font-semibold mb-1">Processing Type</label>
        <Select defaultValue="normal">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="normal">Normal</SelectItem>
            <SelectItem value="urgent">Urgent</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* No. of Visa */}
      <div className="flex flex-col">
        <label className="text-sm font-semibold mb-1">No. of Visa</label>
        <Input type="number" min={1} defaultValue={1} className="w-full" />
      </div>

      {/* Intended Flying Date */}
      <div className="flex flex-col">
        <label className="text-sm font-semibold mb-1">
          Intended Flying Date
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="input"
              className="w-full justify-between font-normal"
            >
              {date ? format(date, "PPP") : <span>Pick a date</span>}
              <CalendarIcon className="ml-2 h-4 w-4 text-gray-500" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Price */}
      <div className="flex flex-col">
        <label className="text-sm font-semibold mb-1">Price</label>
        <Input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full font-semibold"
        />
      </div>
    </div>
  );
}
