import React, { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

interface SearchProps {
    data: string | null;
    onDataChange: (newData: string) => void;
}

export default function Search(props: SearchProps) {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { data, onDataChange } = props;

    useEffect(() => {
        setLoading(false);
    }, [data]);

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = event.target.value;
        setQuery(value);
    };

    const handleButtonClick = () => {
        if (!query.trim()) {
            setError("Please enter a search term.");
            return;
        }

        setLoading(true);
        
        const requestOptions: RequestInit = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({ username: query }),
        };

        console.log(requestOptions)
        // @ts-expect-error
        fetch(process.env.VITE_T_BACKEND, requestOptions)
            .then((response) => {
                if (!response.ok) {
                    console.log(process.env.__APP_ENV__)
                    console.log(process.env.VITE_T_BACKEND)
                    console.log(process.env.__APP_ENV2__)
                    throw (response);
                }
                else {
                    console.log(process.env.__APP_ENV__)
                    console.log(process.env.VITE_T_BACKEND)
                    console.log(process.env.__APP_ENV2__)
                    return response.json()
                }
            })
            .then((data) => {
                setLoading(false);
                setError("")
                onDataChange(JSON.stringify(data));
            })
            .catch((error) => {
                console.log(process.env.__APP_ENV__)
                console.log(process.env.VITE_T_BACKEND)
                console.log(process.env.__APP_ENV2__)
                setLoading(false);
                if (error instanceof Response) {
                    if (error.status === 400) {
                        error.json().then((jsonError: any) => {
                            console.log(jsonError["Error"]);
                            setError(jsonError["Error"])
                        });
                    }
                }
                else if (error instanceof Request) {
                    console.error(error);
                } else {
                    console.error("Error", error.message);
                }
            });
    };

    const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleButtonClick();
        }
    };

    return (
        <>
            <div className="flex max-w-20 items-center bg-d-grey rounded-full w-full p-2 px-4">
                <input
                    type="text"
                    maxLength={25}
                    className=" bg-d-grey w-full ml-2 outline-none text-t-grey placeholder-t-grey text-md rounded-lg focus:ring-m-blue focus:border-m-blue border-transparent transition duration-[300ms]"
                    placeholder="Enter a username..."
                    value={query}
                    onChange={handleInputChange}
                    onKeyDown={handleEnterPress}
                />
                <button
                    type="button"
                    className={`ml-auto px-4 py-[8px] bg-d-grey rounded-full text-t-grey font-medium text-base transition duration-[300ms] ${loading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                    onClick={handleButtonClick}
                    disabled={loading}
                >
                    {loading ? (
                        <svg
                            className="animate-spin h-5 w-5 m-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                    ) : (
                        <MagnifyingGlassIcon className="w-6 h-6" />
                    )}
                </button>
            </div>
            <div className="text-h-blue text-sm text-center mt-2">{error}</div>
        </>
    )
}