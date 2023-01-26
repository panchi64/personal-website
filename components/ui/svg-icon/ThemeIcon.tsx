const ThemeIcon = (props: {
  width: number;
  height: number;
  className: string;
}) => {
  const { width, height, className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      className={className}
    >
      <g fill='currentColor'>
        <path d='M12 16a4 4 0 0 0 0-8v8Z' />
        <path
          fillRule='evenodd'
          d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2Zm0 2v4a4 4 0 1 0 0 8v4a8 8 0 1 0 0-16Z'
          clipRule='evenodd'
        />
      </g>
    </svg>
  );
};

export default ThemeIcon;
