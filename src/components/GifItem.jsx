import PropTypes from 'prop-types'

export const GifItem = ({ title, url }) => {

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert('URL copiada al portapapeles');
    } catch (err) {
      alert('Error al copiar la URL');
    }
  };

  return (
    <div className="flex flex-col items-center p-2 bg-gray-600 rounded-lg shadow-md">
      <img
        src={url}
        alt={title}
        className="w-full h-64 object-cover rounded-md"
      />
      {/* <p className="mt-2 text-sm text-center text-white">{title}</p> */}
      <div className="flex gap-2 mt-3">
        <a
          href={url}
          download="imagen.png"
          className="bg-indigo-500 hover:bg-indigo-600 text-white text-xs px-2 py-1 rounded transition duration-200 cursor-pointer"
          >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAPZJREFUOE/dlNENgzAMRE22iBimMFlhstJhkLdwW1sYHYlBrVR+4BPws313SUMnPM0JTLoYlJk7EelUqpTSlHOejmQ7XH+e5yGldA8Ak4g827YdIvgutADqZCNM6436aOoQisCcc/VP0bACVwWqHxE9dC0RGfdWBLBq3KMMGygzK8wMKYHM/Pp82wCid1q7QrGz6ldqtQP1IUxzr1mhSxFFGmr3CLoMcvPtiMj0NSjoWK6H+VTHLUplXkt9DydF09CIyEDcBKGmT2DQmoYFXLntk3otQqtiFz/KJeipvSwx7sfXwda44dGMTlzl/j/v1Yvdp79K8wZIQ8EWTIO0AAAAAABJRU5ErkJggg=="
            alt="Icono de descarga"
          />
        </a>
        <button
          onClick={handleCopy}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-xs px-2 py-1 rounded transition duration-200 cursor-pointer"
          >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAPFJREFUOE/VlNEVwyAIRWUTnaTJZE0nSzqJbkJDKtYYlKSeftRP4VyfPADMDw6cYVprBy0vhLBwThNqrZ0A4K4BOY6II8FPQRHxoYHj44v3fmxCnXOzMWbw3qtlcs7hmvuvUHJYMIVdT85SbVdDniGEKa+z+P14qfmR4uw0XxygUeVMLpcKyle4zcpcFVprdurBHqjU9Fu79EDJoHI0l1wp9SQZlkbzPXmfPv2mppKjXOdtUkporOlhiZCJ2T7YKSWVvFRq0Ms1zZWLUFZffrHl/ilobQpq7h+gdNE7USKUFFAAAG7arEaXd/tAhGqgK/EX1pEZJU+w+BcAAAAASUVORK5CYII="/>
        </button>
      </div>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
