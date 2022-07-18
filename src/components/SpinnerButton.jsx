export const SpinnerButton = ({className="", id})=>{
    return (
      <span className={`spinner-border primary ${className}`} type="button" role="status" {...(id&&{id: id})}></span>
    );
  };