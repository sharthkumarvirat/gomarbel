import React, { useState } from "react";
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const cardsData = [
        {
            heading: "Online store session",
            price: "255,581",
            percentage: "9"
        },
        {
            heading: "Net return value",
            price: "-$15,07.44",
            percentage: "14"
        },
        {
            heading: "Total orders",
            price: "10,511",
            percentage: "2"
        },
        {
            heading: "Conversion rate",
            price: "3.18%",
            percentage: "7"
        },
    ]

    const handleEditClick = (dataKey) => {
        setActiveDropdown(activeDropdown === dataKey ? null : dataKey);
    };


    return (
        <div className='container mx-auto p-4 bg-white mb-4'>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {
                    cardsData.map((card, index) => {
                        return (
                            <DashboardCard
                                key={card+index}
                                title={card.heading}
                                mainValue={card.price}
                                percentChange={card.percentage}
                                dataKey={`sessions${index}`}
                                onEditClick={() => handleEditClick(`sessions${index}`)}
                                isDropdownOpen={activeDropdown === `sessions${index}`}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Dashboard;
