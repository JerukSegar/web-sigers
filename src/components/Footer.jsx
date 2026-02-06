function Footer() {
  return (
    <footer className="mt-20 bg-black text-white text-center py-6 border-t border-zinc-800">
      <p>© {new Date().getFullYear()} SIGERS Tongkrongan</p>
      <p className="text-sm text-zinc-400">
        Dibuat dengan niat + gabut + kopi ☕
      </p>
    </footer>
  );
}

export default Footer;
