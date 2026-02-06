import MemberCard from "../components/MemberCard";
import members from "../data/members";

function Home() {
  return (
    <div className="max-w-6xl mx-auto px-5 pt-28 pb-16">
      <h1 className="text-4xl font-bold mb-12 text-white">
        Member SIGERS
      </h1>

      <div className="flex flex-col gap-16">
        {members.map((m, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0
                ? "justify-start"
                : "justify-end"
            } md:${index % 2 === 0 ? "justify-start" : "justify-end"} justify-center`}
          >
            <MemberCard member={m} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
