import { Button } from "@/components/ui/button";

export default function PopUp({ onClose }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h2 className="mb-5 text-xl font-semibold">You have overstayed</h2>
        <Button variant="blue" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  popup: {
    background: "#fff",
    padding: "40px",
    borderRadius: "8px",
    textAlign: "center",
  },
};
