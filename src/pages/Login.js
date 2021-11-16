import React,{useState} from "react";
function Login (){
//	let navigate = useNavigate();
    const [email, setEmail]=useState('')
    const [pasword, setPasword] = useState("");
	const handleSubmit = (e) => {
        e.preventDefault();
		//navigate("/welcome");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="email"
				name="email"
				placeholder="Enter your Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			<input
				type="pasword"
				name="pasword"
				placeholder="Enter your Password"
				value={pasword}
				onChange={(e) => setPasword(e.target.value)}
				required
			/>
			<button type="submit">submit</button>
		</form>
	);
};
export default Login