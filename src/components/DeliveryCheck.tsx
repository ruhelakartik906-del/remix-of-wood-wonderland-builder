import { useState } from "react";
import { MapPin } from "lucide-react";

const DeliveryCheck = () => {
  const [pincode, setPincode] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleCheck = () => {
    if (pincode.length === 6) {
      setResult("Delivery available in your area!");
    } else {
      setResult("Please enter a valid 6-digit pincode.");
    }
  };

  return (
    <div className="bg-section-alt border-b border-border">
      <div className="container mx-auto flex items-center justify-center gap-3 px-4 py-2">
        <MapPin size={16} className="text-muted-foreground shrink-0" />
        <input
          type="text"
          placeholder="Enter Pincode to check Delivery Availability"
          value={pincode}
          onChange={(e) => {
            setPincode(e.target.value.replace(/\D/g, "").slice(0, 6));
            setResult(null);
          }}
          className="bg-background border border-border rounded px-3 py-1.5 text-sm w-64 focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <button
          onClick={handleCheck}
          className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1.5 rounded hover:bg-accent transition-colors"
        >
          Check
        </button>
        {result && <span className="text-sm text-primary font-medium hidden sm:inline">{result}</span>}
      </div>
    </div>
  );
};

export default DeliveryCheck;
