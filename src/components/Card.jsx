// components/Card.jsx
export default function Card({ title, items }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      <ul className="space-y-2 text-gray-600">
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}