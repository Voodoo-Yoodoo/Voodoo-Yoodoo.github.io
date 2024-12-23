const Heading = ({ as = "h1", children, className = "", icon }) => {
  return (
    <>
      {as === "h1" && (
        <h1 className={className}>
          {icon}
          {children}
        </h1>
      )}
      {as === "h2" && (
        <h2 className={className}>
          {icon}
          {children}
        </h2>
      )}
      {as === "h3" && (
        <h3 className={className}>
          {icon}
          {children}
        </h3>
      )}
    </>
  );
};

export default Heading;
