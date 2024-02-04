import CardWrapper from "./card-wrapper";

const LoginForm = () => {
  return (
    <div>
      <CardWrapper
        headerLable="Welcome back"
        backButtonLable="Don`t have an account?"
        backButtonHref="/auth/register"
        showSocial
      >
        Login form!
      </CardWrapper>
    </div>
  );
};

export default LoginForm;
