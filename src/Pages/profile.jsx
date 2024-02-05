import { useLogin } from "../hooks/useLogin";

export default function ProfilePage() {
  const username = useLogin();
   
  return (
    <div>Profile</div>
  )
}