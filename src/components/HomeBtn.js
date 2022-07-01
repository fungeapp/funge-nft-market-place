export default function HomeBtn({width,
    height,
    backgroundColor,
    color,
    border,
    borderColor,
    fontSize,
    buttonText,}) {
      return (
          <button style={{width, height, backgroundColor, color, border, borderColor, fontSize}}>
             {buttonText}
          </button>
      )
  }