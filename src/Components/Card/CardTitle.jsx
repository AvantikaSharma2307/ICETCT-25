const CardTitle = ({ children, className, ...props }) => {
    return (
    <h2 className={`${className}`} {...props}>
      {children}
    </h2>
  )
}

export default CardTitle;