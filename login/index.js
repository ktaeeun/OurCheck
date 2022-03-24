import { useState } from "react"

export default function Login () {
    const [id, setId] = useState("")
    const [password, setPassword] = useState("")
    const [errorId, setErrorId] = useState("")
    const [errorPasswrod, setErrorPassword] = useState("")

    function handleChangeId(event) {
        const value = event.target.value
        setId(value)
    }
    function handleChangePassword(event) {
        const value = event.target.value
        setPassword(value)
    }

    function handleClickLogin() {
        if(id === "") {
            setErrorId('이름을 입력해주세요.')
        }
        if(password === "" {
            setErrorPassword("비밀번호를 입력해주세요.")
        }
    }
    return (
        <div>
            <h1>Our__</h1>
            <div>이름</div>
            <input type="text" onChange={handleChangeId} />
            <div>비밀번호</div>
            <input type="text" onChange={handleChangePassword} />
            <button onClick={handleClickLogin}>로그인</button>
        </div>

    )

}

export default Login