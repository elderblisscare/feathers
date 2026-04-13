import { useState } from "react";
import Terms_And_Conditions from "./Terms_And_Conditions";
import Privacy_Policy from "./Privacy_Policy";
import Disclaimer from "./Disclaimer";
import Cookies_Policy from "./Cookies_Policy";

const PoliciesPage = () => {
  const [activeTab, setActiveTab] = useState("terms");

  const tabs = [
    { id: "terms", label: "Terms & Conditions" },
    { id: "privacy", label: "Privacy Policy" },
    { id: "disclaimer", label: "Disclaimer" },
    { id: "cookies", label: "Cookies Policy" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-4">
        Our Terms & Policies
      </h1>

      <p className="text-center text-gray-600 mb-8">
        Explore Feathers policies covering privacy, terms, and service guidelines. We are committed to protecting your data and providing safe, transparent Health care services.
      </p>

      {/* Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-3 text-sm md:text-base font-medium border-r last:border-r-0 
              ${
                activeTab === tab.id
                  ? "bg-blue-900 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Box */}
      <div className="border p-6 bg-white ">
        {/* max-h-[500px] overflow-y-auto---------------for scrollable */}
        
        {activeTab === "terms" && <Terms_And_Conditions/>}

        {activeTab === "privacy" && <Privacy_Policy/>}

        {activeTab === "disclaimer" && <Disclaimer/>}

        {activeTab === "cookies" && <Cookies_Policy/>}

      </div>
    </div>
  );
};

export default PoliciesPage;