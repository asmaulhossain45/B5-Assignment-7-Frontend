import TiltCard from "@/components/cards/TiltCard";
import LoginForm from "@/components/forms/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex-1 h-full border flex items-center justify-center">
      <TiltCard className="w-full max-w-sm">
        <LoginForm />
      </TiltCard>
    </div>
  );
};

export default LoginPage;
