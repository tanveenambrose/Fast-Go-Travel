import { toast } from "sonner";

const showToast = () => {
  const todayInBDT = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Dhaka", // BDT timezone
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  toast("This site is under construction.", {
    description: todayInBDT,
    action: {
      label: "Undo",
      onClick: () => console.log("close"),
    },
  });
};

export default showToast;
