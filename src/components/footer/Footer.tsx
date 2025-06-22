export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center">
      <p>{new Date().getFullYear()} Registros de consolas de Umbral.</p>
      <p>
        Desarrollado por{" "}
        <a
          href="https://github.com/gramaphenia"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gramaphenia
        </a>
      </p>
    </footer>
  );
}
