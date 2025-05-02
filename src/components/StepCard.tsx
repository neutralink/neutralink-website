// src/components/StepCard.tsx
interface StepCardProps {
    title: string;
    description: string;
  }
  
  export default function StepCard({ title, description }: StepCardProps) {
    return (
      <div className="bg-neutral-100 p-6 rounded-lg shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-neutral-700">{description}</p>
      </div>
    );
  }
  