export default function MapSection() {
  return (
    <div className="mt-16 mx-5 md:mx-0">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Location</h2>
      <div className="w-full h-80 bg-zinc-800 rounded-lg overflow-hidden">
        {/* Replace with real Map embed */}
        <iframe
          src="https://maps.google.com/maps?q=Bashundhara%20Dhaka&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <p className="text-gray-400 mt-2">
        📍 Bashundhara, Dhaka — 1.2 km from center
      </p>
    </div>
  );
}
