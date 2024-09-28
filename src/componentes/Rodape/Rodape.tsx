import "./Rodape.css";

export const Rodape = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="rodape__container">
      <p>© {anoAtual} MovieList. Todos os direitos reservados.</p>
    </footer>
  );
};
