import { useState } from "react";

import { 

    Body, Error, Wrapper, H3, InputBox, Line, SignupBtn 

} from "../../../styles/emotion";

export default function QuizB() {
    
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [passwordError, setPasswordError] = useState("");

    
    const [isValid, setIsValid] = useState(false);

    function onChangeEmail(event) {
        setEmail(event.target.value);
    }

    function onChangePassword(event) {
        setPassword(event.target.value);
    }

    function onChangePasswordCheck(event) {
        setPasswordCheck(event.target.value);
    }

    function onClickSignup() {
        onChangeEmail;
        onChangePassword;
        onChangePasswordCheck;
        setIsValid(true);

        if (email.includes("@") === false) {
            setEmailError("이메일이 올바르지 않습니다 @가 없습니다");
            setIsValid(false);
        } else {
            setEmailError("");
        }

        if (password !== passwordCheck) {
            setPasswordError("비밀번호와 비밀번호 확인이 일치하지 않습니다");
            setIsValid(false);
        } else if (password === "") {
            setPasswordError("비밀번호를 입력하여 주세요");
            setIsValid(false);
        } else {
            setPasswordError("");
        }
        if (isValid === true) {
            alert("회원가입을 축하드립니다");
        }
    }

    
    return (
        <Body>
            <Wrapper>

                <H3>코드캠프 회원가입</H3>

                <InputBox
                    type="text"
                    onChange={onChangeEmail}
                    placeholder="이메일을 입력해 주세요"
                />
                <Error>{emailError}</Error>
                
                <InputBox
                    type="password"
                    onChange={onChangePassword}
                    placeholder="비밀번호를 입력해 주세요"
                />

                <InputBox
                    type="password"
                    onChange={onChangePasswordCheck}
                    placeholder="비밀번호를 다시 입력해 주세요"
                />
                <Error>{passwordError}</Error>


                <Line></Line>

                <div>
                    <SignupBtn onClick={onClickSignup}>회원가입</SignupBtn>
                </div>

            </Wrapper>
        </Body>
    )
}