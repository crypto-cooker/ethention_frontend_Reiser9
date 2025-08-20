import React from "react";

export const Change = ({ ...props }) => {
    return (
        <svg
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#clip0_124_658)">
                <path
                    d="M10.02 9.37998L11.14 10.5H6.8C4.07 10.5 1.9 8.32998 1.9 5.59998H0.5C0.5 9.09998 3.3 11.9 6.8 11.9H11.14L10.02 13.02L11 14L13.8 11.2L11 8.39998L10.02 9.37998Z"
                    fill="currentColor"
                />
                <path
                    d="M4.97995 4.62L3.85995 3.5H8.19995C10.93 3.5 13.1 5.67 13.1 8.4H14.5C14.5 4.9 11.7 2.1 8.19995 2.1H3.85995L4.97995 0.98L3.99995 0L1.19995 2.8L3.99995 5.6L4.97995 4.62Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_124_658">
                    <rect
                        width="14"
                        height="14"
                        fill="white"
                        transform="translate(0.5)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};
