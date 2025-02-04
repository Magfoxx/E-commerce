

const Title = ({title1, title2, title3, titleStyles, title1Styles, paraStyles}) => {
  return (
    <div className={`${titleStyles} pb-1`}>
      <h3 className={`${title1Styles} h3`}>
        {title1}
        <span className="text-secondary !font-light"> {title2}</span>
        {title3}
      </h3>
    </div>
  )
}

export default Title