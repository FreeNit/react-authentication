import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const data = request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };
}
