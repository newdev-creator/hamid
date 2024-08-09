import React from "react";
import TitleSection from "./titles/TitleSection";
import Check from "./icons/Check";
import TitleCard from "./titles/TitleCard";

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
    title: "Formule à la séance",
    price: "35€",
    features: [
      "2 XLEVEL Assessments",
      "24 - 36 Training Sessions",
      "2 Dietitian Consultation",
      "6 Group Classes",
      "Mobile App Access",
    ],
  },
  {
    title: "Formule 10 séances",
    price: "300€",
    discount: "30€/séance",
    popular: true,
    features: [
      "Unlimited Gym Access",
      "6 Week Package",
      "12 - 18 Training",
      "Mobile App Access",
    ],
  },
  {
    title: "Formule 30 séances",
    price: "750€",
    discount: "25€/séance",
    features: [
      "Unlimited Gym Access",
      "6 Week Package",
      "12 - 18 Training",
      "Mobile App Access",
    ],
  },
];

interface PlanProps {
  title: string;
  price: string;
  discount?: string;
  features: string[];
  popular?: boolean;
}

const PricingCard: React.FC<{ plan: PlanProps }> = ({ plan }) => {
  return (
    <div
      className={`w-full max-w-sm p-8 mx-auto text-center rounded-lg shadow-lg text-white relative ${
        plan.popular ? "bg-red-600 scale-105" : "bg-fontBlack"
      }`}
    >
      {plan.popular && (
        <div className="absolute top-0 right-0 bg-white text-red-600 font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg">
          Populaire
        </div>
      )}
      <TitleCard titleCard={plan.title} />
      <TitleCard titleCard={plan.price} />
      <div className="opacity-90">{plan.discount}</div>
      <ul className="my-4 space-y-2 ml-14 lg:ml-0">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-1">
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
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
