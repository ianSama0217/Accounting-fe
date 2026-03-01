import { useState } from "react";
import Input from "../../component/input";
import Button from "../../component/button";
import { useNavigate } from "react-router-dom";

function Index() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div>
      {isLogin ? (
        <LoginForm setIsLogin={setIsLogin} />
      ) : (
        <SignForm setIsLogin={setIsLogin} />
      )}
    </div>
  );
}

function LoginForm({
  setIsLogin,
}: {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");

  return (
    <form className="w-50 position-absolute top-50 start-50 translate-middle border p-4 rounded">
      <Input
        label="使用者名稱"
        name={"username"}
        value={username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setUsername(e.target.value);
        }}
      />
      <Input
        label="密碼"
        name={"password"}
        type={"password"}
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setPassword(e.target.value);
        }}
      />
      <Input
        label="驗證碼"
        name={"captcha"}
        value={captcha}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setCaptcha(e.target.value);
        }}
      />

      <div className="text-center">
        <Button
          text={"清除"}
          onClick={() => {
            setUsername("");
            setPassword("");
            setCaptcha("");
          }}
          style="col-3 m-2"
          variant="danger"
        />
        <Button
          text={"登入"}
          onClick={() => navigate("/main")}
          style="col-3 m-2"
        />
      </div>
      <p className="text-end" onClick={() => setIsLogin(false)}>
        <a className="link-opacity-75">沒有帳號? 註冊</a>
      </p>
    </form>
  );
}

function SignForm({
  setIsLogin,
}: {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <form className="w-50 position-absolute top-50 start-50 translate-middle border p-4 rounded">
      <Input
        label="使用者名稱"
        name={"username"}
        value={username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setUsername(e.target.value);
        }}
      />
      <Input
        label="密碼"
        name={"password"}
        type={"password"}
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setPassword(e.target.value);
        }}
      />
      <Input
        label="確認密碼"
        name={"confirmPassword"}
        type={"password"}
        value={confirmPassword}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setConfirmPassword(e.target.value);
        }}
      />

      <div className="text-center">
        <Button
          text={"清除"}
          onClick={() => {
            setUsername("");
            setPassword("");
            setConfirmPassword("");
          }}
          style="col-3 m-2"
          variant="danger"
        />
        <Button
          text={"註冊帳號"}
          onClick={() => setIsLogin(true)}
          style="col-4 m-2"
        />
      </div>
      <p className="text-end pe-auto" onClick={() => setIsLogin(true)}>
        <a className="link-opacity-75">返回登入頁</a>
      </p>
    </form>
  );
}

export default Index;
