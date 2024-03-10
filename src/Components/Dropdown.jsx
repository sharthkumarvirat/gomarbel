import React, { useEffect, useRef, useState } from 'react';

const Dropdown = ({ onClose }) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, onClose);

  const dropdownContent = [
    { content: "Average Order Value" },
    { content: "Conversion rate" },
    { content: "Gross Sales" },
    { content: "Net return value" },
    { content: "Store search conversion" },
    { content: "Return rate" },
  ];

  return (
    <div ref={wrapperRef} className="absolute left-[14rem] top-12 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
      <ul className="py-1">
        {
          dropdownContent.map((element, index) => (
            <DropdownItem key={index} content={element.content} />
          ))
        }
      </ul>
    </div>
  );
};

const DropdownItem = ({ content }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='flex items-center'>
        <div className='mr-2'>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.25 8.0625C1.25 8.23828 1.38672 8.375 1.5625 8.375H9.375C9.70703 8.375 10 8.66797 10 9C10 9.35156 9.70703 9.625 9.375 9.625H1.5625C0.683594 9.625 0 8.94141 0 8.0625V1.5C0 1.16797 0.273438 0.875 0.625 0.875C0.957031 0.875 1.25 1.16797 1.25 1.5V8.0625ZM6.67969 5.69922C6.44531 5.95312 6.03516 5.95312 5.80078 5.69922L4.6875 4.58594L2.92969 6.32422C2.69531 6.57812 2.28516 6.57812 2.05078 6.32422C1.79688 6.08984 1.79688 5.67969 2.05078 5.44531L4.23828 3.25781C4.47266 3.00391 4.88281 3.00391 5.11719 3.25781L6.25 4.37109L8.30078 2.32031C8.53516 2.06641 8.94531 2.06641 9.17969 2.32031C9.43359 2.55469 9.43359 2.96484 9.17969 3.19922L6.67969 5.69922Z" fill="#616161" />
          </svg>
        </div>
        {content}
      </div>
      {isHovered && (
        <div className='float-right help'>
          <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 0.25C7.75391 0.25 10 2.49609 10 5.25C10 8.02344 7.75391 10.25 5 10.25C2.22656 10.25 0 8.02344 0 5.25C0 2.49609 2.22656 0.25 5 0.25ZM5 9.3125C7.22656 9.3125 9.0625 7.49609 9.0625 5.25C9.0625 3.02344 7.22656 1.1875 5 1.1875C2.75391 1.1875 0.9375 3.02344 0.9375 5.25C0.9375 7.49609 2.75391 9.3125 5 9.3125ZM5 6.8125C5.33203 6.8125 5.625 7.08594 5.625 7.4375C5.625 7.78906 5.33203 8.0625 5 8.0625C4.62891 8.0625 4.375 7.78906 4.375 7.4375C4.375 7.08594 4.64844 6.8125 5 6.8125ZM5.64453 2.75C6.42578 2.75 7.03125 3.35547 7.01172 4.11719C7.01172 4.58594 6.75781 5.03516 6.34766 5.28906L5.46875 5.83594V5.875C5.46875 6.12891 5.25391 6.34375 5 6.34375C4.74609 6.34375 4.53125 6.12891 4.53125 5.875V5.5625C4.53125 5.40625 4.60938 5.25 4.76562 5.15234L5.87891 4.48828C6.01562 4.41016 6.09375 4.27344 6.09375 4.11719C6.09375 3.88281 5.87891 3.6875 5.625 3.6875H4.62891C4.39453 3.6875 4.21875 3.88281 4.21875 4.11719C4.21875 4.37109 4.00391 4.58594 3.75 4.58594C3.49609 4.58594 3.28125 4.37109 3.28125 4.11719C3.28125 3.35547 3.88672 2.75 4.64844 2.75H5.64453Z" fill="#616161" />
          </svg>
        </div>
      )}
    </li>
  );
};

const useOutsideAlerter = (ref, onClose) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClose]);
};

export default Dropdown;
