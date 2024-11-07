"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SeatSelection() {
    const router = useRouter();
    const [selectedTime, setSelectedTime] = useState("10:00 AM");
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [soldSeats, setSoldSeats] = useState(new Set(["A1", "B2", "C3", "D4", "E5"]));

    const times = ["10:00 AM", "01:15 PM", "04:30 PM", "07:50 PM", "11:05 PM"];
    const rows = "LKJHGFEDCBA".split("");

    const seatPrice = 295;

    // Simulate some bestseller and sold seats
    const bestsellerSeats = new Set(["L5", "L6", "L7", "K5", "K6", "H5", "H6", "H7"]);

    const handleSeatClick = (seatId) => {
        if (soldSeats.has(seatId)) return;

        setSelectedSeats((prev) => (prev.includes(seatId) ? prev.filter((s) => s !== seatId) : [...prev, seatId]));
    };

    const handlePay = () => {
        setSoldSeats((pervSoldSeats) => new Set([pervSoldSeats, ...selectedSeats]));
        setSelectedSeats([]);
    };

    const getSeatStatus = (seatId) => {
        if (soldSeats.has(seatId)) return "sold";
        if (selectedSeats.includes(seatId)) return "selected";
        if (bestsellerSeats.has(seatId)) return "bestseller";
        return "available";
    };

    return (
        <Card className="p-6 mt-5 max-w-4xl mx-auto">
            <div className="">
                <ArrowLeft onClick={() => router.back()} size={30} className="cursor-pointer hover:bg-gray-200 hover:rounded-2xl" />{" "}
            </div>
            <div className="flex justify-center gap-2 mb-8 overflow-x-auto pb-2">
                {times.map((time) => (
                    <Button key={time} variant={selectedTime === time ? "default" : "outline"} onClick={() => setSelectedTime(time)}>
                        {time}
                    </Button>
                ))}
            </div>

            <div className="text-center mb-8">
                <div className="text-sm text-muted-foreground">Rs. 295 CLASSIC</div>
            </div>

            <div className="w-full overflow-x-auto">
                <div className="min-w-[600px]">
                    {rows.map((row) => (
                        <div key={row} className="flex justify-center items-center gap-1 mb-1">
                            <div className="w-6 text-center text-sm text-muted-foreground">{row}</div>
                            <div className="flex gap-1">
                                {Array.from({ length: 15 }, (_, i) => {
                                    const seatId = `${row}${i + 1}`;
                                    const status = getSeatStatus(seatId);
                                    return (
                                        <button
                                            key={seatId}
                                            onClick={() => handleSeatClick(seatId)}
                                            disabled={status === "sold"}
                                            className={`
                        w-6 h-6 text-xs rounded border transition-colors
                        ${status === "sold" ? "bg-gray-200 text-muted-foreground cursor-not-allowed" : ""}
                        ${status === "selected" ? "bg-green-600 text-primary-foreground" : ""}
                        ${status === "bestseller" ? "bg-yellow-100 border-yellow-400" : ""}
                        ${status === "available" ? "hover:border-primary" : ""}
                      `}
                                        >
                                            {i + 1}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center my-5">
                {selectedSeats.length > 0 && (
                    <button onClick={handlePay} className="bg-pink-500 text-white p-2 w-1/3 rounded-lg">
                        Pay Rs. {selectedSeats.length * seatPrice}
                    </button>
                )}
            </div>

            <div className="flex justify-center gap-6 mt-8">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border rounded bg-yellow-100 border-yellow-400" />
                    <span className="text-sm">Bestseller</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border rounded" />
                    <span className="text-sm">Available</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border rounded bg-green-600" />
                    <span className="text-sm">Selected</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border rounded bg-gray-300" />
                    <span className="text-sm">Sold</span>
                </div>
            </div>
        </Card>
    );
}
