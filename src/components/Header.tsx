import logo from '../assets/logo-camara.png'

export function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Brasão da Câmara Municipal de Barcelos"
        className="logo"
      />

      <div className="header-text">
        <p className="institution">
          CÂMARA MUNICIPAL DE BARCELOS
        </p>

        <p className="system-name">
          SISTEMA DE CRONOMETRAGEM LEGISLATIVA
        </p>
      </div>
    </header>
  )
}