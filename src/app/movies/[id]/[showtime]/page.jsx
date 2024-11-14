"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SeatSelection() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [dates, setDates] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [selectedDate, setSelectedDate] = useState(null); // Initially null to enforce selection
    const [selectedTime, setSelectedTime] = useState(null); // Initially null to enforce selection
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [soldSeats, setSoldSeats] = useState(new Set(["F8", "E10", "E11", "F10", "E9"]));

    const movieName = searchParams.get("movieName") || "Movie";

    const times = ["10:00 AM", "01:15 PM", "04:30 PM", "07:50 PM", "11:05 PM"];
    const rows = "LKJHGFEDCBA".split("");

    const seatPrice = 295;

    const bestsellerSeats = new Set(["L10", "L9", "L11", "K10", "K9", "H9", "H10", "H11"]);

    const handleSeatClick = (seatId) => {
        if (soldSeats.has(seatId) || !selectedDate || !selectedTime) return;

        setSelectedSeats((prev) => (prev.includes(seatId) ? prev.filter((s) => s !== seatId) : [...prev, seatId]));
    };

    const handlePay = () => {
        setSoldSeats((pervSoldSeats) => new Set([...pervSoldSeats, ...selectedSeats]));
        setSelectedSeats([]);
    };

    const getSeatStatus = (seatId) => {
        if (soldSeats.has(seatId)) return "sold";
        if (selectedSeats.includes(seatId)) return "selected";
        if (bestsellerSeats.has(seatId)) return "bestseller";
        return "available";
    };

    useEffect(() => {
        const today = new Date();
        const nextDates = Array.from({ length: 30 }, (_, i) => {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            return date;
        });
        setDates(nextDates);
    }, []);

    const handleNextDates = () => {
        if (startIndex + 5 < dates.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePreviousDates = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const formatDate = (date) => {
        const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        return (
            <div className="flex flex-col items-center">
                <span className="text-xs font-semibold">{days[date.getDay()]}</span>
                <span className="text-lg font-bold">{date.getDate()}</span>
                <span className="text-xs">{months[date.getMonth()]}</span>
            </div>
        );
    };

    return (
        <Card className="p-6 max-w-full mx-auto">
            <div className="flex mb-2">
                <ArrowLeft onClick={() => router.back()} size={30} className="cursor-pointer hover:bg-gray-200 hover:rounded-2xl" />{" "}
                <h2 className="ml-4 text-xl font-semibold">{movieName}</h2>
            </div>
            <hr />
            <div className="flex flex-col items-center justify-between gap-5 my-4 overflow-x-auto pb-2">
                <div className="flex items-center">
                    <Button variant="ghost" size="icon" onClick={handlePreviousDates} disabled={startIndex === 0}>
                        <ChevronLeft size={20} className="h-4 w-4" />
                    </Button>
                    <div className="flex space-x-4">
                        {dates.slice(startIndex, startIndex + 5).map((date, index) => (
                            <Button
                                key={index}
                                variant={date.toDateString() === selectedDate?.toDateString() ? "default" : "ghost"}
                                className={`w-12 h-16 p-1 ${date.toDateString() === selectedDate?.toDateString() ? "bg-pink-500 text-white" : ""}`}
                                onClick={() => setSelectedDate(date)}
                            >
                                {formatDate(date)}
                            </Button>
                        ))}
                    </div>
                    <Button variant="ghost" size="icon" onClick={handleNextDates} disabled={startIndex + 5 >= dates.length}>
                        <ChevronRight className="h-6 w-6" />
                    </Button>
                </div>
                <div className="flex gap-2">
                    {times.map((time) => (
                        <Button
                            key={time}
                            className={`px-4 py-2 font-semibold rounded-none ${
                                selectedTime === time
                                    ? "bg-green-500 text-white "
                                    : "hover:bg-green-500 hover:text-white border border-green-500 bg-white text-green-500"
                            }`}
                            onClick={() => selectedDate && setSelectedTime(time)} // Only set time if a date is selected
                            disabled={!selectedDate} // Disable if no date is selected
                        >
                            {time}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="text-center mb-4">
                <div className="text-sm text-muted-foreground">Rs. 295 CLASSIC</div>
            </div>

            <div className="w-full overflow-x-auto">
                <div className="min-w-[600px]">
                    {rows.map((row) => (
                        <div key={row} className="flex justify-center items-center gap-1 mb-1">
                            <div className="w-6 text-center text-sm text-gray-100 font-semibold text-muted-foreground">{row}</div>
                            <div className="flex gap-2">
                                {Array.from({ length: 20 }, (_, i) => {
                                    const seatId = `${row}${i + 1}`;
                                    const status = getSeatStatus(seatId);
                                    return (
                                        <button
                                            key={seatId}
                                            onClick={() => handleSeatClick(seatId)}
                                            disabled={status === "sold" || !selectedDate || !selectedTime} // Disable if no date/time selected
                                            className={`
                        w-8 h-8 text-xs  border border-green-500  transition-colors
                        ${status === "sold" ? "bg-gray-200 border-gray-200 text-white text-muted-foreground cursor-not-allowed" : ""}
                        ${status === "selected" ? "bg-green-500 text-white " : ""}
                        ${status === "bestseller" ? "bg-yellow-100 border-yellow-400" : ""}
                        ${status === "available" ? "hover:border-green-500 hover:bg-green-500 hover:text-white" : ""}
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
            <div className="relative mt-16 text-center mx-40">
                <div className="h-2 bg-gradient-to-b from-primary/20 to-transparent absolute inset-x-0 -top-6" />
                <div className="text-sm font-medium">All eyes this way please!</div>
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
