function MemberCard({ member }) {
  return (
    <div className="w-full max-w-sm bg-zinc-900 text-white rounded-2xl p-5 shadow-lg border border-zinc-700 hover:scale-105 transition duration-300">
      <img
        src={member.foto}
        alt={member.nama}
        className="w-full h-64 object-contain bg-black rounded-xl mb-4"
      />

      <h2 className="text-2xl font-semibold mb-2">{member.nama}</h2>

      <p className="text-sm text-zinc-300">Hobi: {member.hobi}</p>
      <p className="text-sm text-zinc-300">Ultah: {member.ulangTahun}</p>
      <p className="text-sm text-zinc-300">Kelebihan: {member.kelebihan}</p>
      <p className="text-sm text-zinc-300">Kekurangan: {member.kekurangan}</p>
    </div>
  );
}

export default MemberCard;
