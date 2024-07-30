import React from "react";
import TitleSection from "./titles/TitleSection";
import Check from "./icons/Check";

const plans = [
  {
    title: "Formule découverte",
    price: "15€",
    features: [
      "Unlimited Gym Access",
      "6 Week Package",
      "12 - 18 Training",
      "Mobile App Access",
    ],
  },
  {
    title: "Formule personnalisée",
    price: "35€",
    features: [
      "2 XLEVEL Assessments",
      "24 - 36 Training Sessions",
      "2 Dietitian Consultation",
      "6 Group Classes",
      "Mobile App Access",
    ],
    popular: true,
  },
  {
    title: "Formule découverte",
    price: "15€",
    features: [
      "Unlimited Gym Access",
      "6 Week Package",
      "12 - 18 Training",
      "Mobile App Access",
    ],
  },
  {
    title: "Formule découverte",
    price: "15€",
    features: [
      "Unlimited Gym Access",
      "6 Week Package",
      "12 - 18 Training",
      "Mobile App Access",
    ],
  },
];

const PricingCard: React.FC<{ plan: (typeof plans)[0] }> = ({ plan }) => {
  return (
    <div
      className={`w-full max-w-sm p-6 bg-blue-900 rounded-lg shadow-lg text-white ${
        plan.popular ? "bg-red-600" : "bg-blue-900"
      }`}
    >
      {plan.popular && (
        <div className="absolute top-0 right-0 bg-white text-red-600 font-bold px-2 py-1 rounded-bl-lg">
          Populaire
        </div>
      )}
      <h2 className="text-xl font-bold mb-4">{plan.title}</h2>
      <div className="text-3xl font-bold mb-4">{plan.price}</div>
      <ul className="mb-4 space-y-2">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            {/* <CheckIcon className="h-5 w-5 text-green-500 mr-2" /> */}
            <Check />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

const PricingSection: React.FC = () => {
  return (
    <>
      <TitleSection
        title="tarifs"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum ex, eius architecto voluptate quibusdam, ratione, molestias at dolores culpa natus quia impedit. Porro, quae. Totam minima tempore enim accusantium repellendus, nihil laudantium qui excepturi in cumque praesentium assumenda id at porro sit, culpa fugit delectus, vero expedita eum non?"
        position="text-center"
      />
      <div className="bg-yellow-400 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center space-x-4">
            {plans.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingSection;
