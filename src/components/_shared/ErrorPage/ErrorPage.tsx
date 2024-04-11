import { useRouteError } from 'react-router-dom';

const ErrorPage = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError();

  return (
    <div
      id="error-page"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
