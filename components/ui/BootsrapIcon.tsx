const BootstrapIcon = (props: {
  className: string;
  icon: string;
  color?: string;
}) => {
  const { className, icon, color } = props;

  return <i className={className + ' ' + icon + ' ' + color}></i>;
};

export default BootstrapIcon;
