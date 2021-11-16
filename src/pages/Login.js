import React,{useState, useNavigate} from "react";
function Login (){
    const [email, setEmail]=useState('')
    const [pasword, setPasword] = useState("");
    let Navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
         alert(`Submitting Name ${email, pasword}`);
		Navigate("/welcome");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="email"
				name="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			<input
				type="pasword"
                name="pasword"
                value={pasword}
				onChange={(e) => setPasword(e.target.value)}
				required
			/>
			<button type="submit" value={submit}>
				submit
			</button>
		</form>
	);
};
export default Login