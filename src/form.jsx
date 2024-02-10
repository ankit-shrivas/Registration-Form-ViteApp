import { useState, useEffect } from 'react';

function Form() {
	const data = { name: "", password: "", email: "" };
	const [inputData, setInputdata] = useState(data);


	const [flag, setFlag] = useState(false);

	useEffect(function () {
		//console.log("registered");
	}, [flag]);

	function handleData(e) {
		setInputdata({ ...inputData, [e.target.name]: e.target.value });

	}



	function handleSubmit(e) {
		e.preventDefault();

		if (!inputData.name || !inputData.password || !inputData.email) {
			alert("all field madatory");
		} else {
			setFlag(true);
		}
	}

	return <>



		<pre>{(flag) ? <h2 className="">hello {inputData.name}, registered Success</h2> : ""}</pre>

		<form onSubmit={handleSubmit}>


			<div className="header bg-blue">
				<h1>Registration Form</h1>
			</div>

			<div className="bg-gray">
				<div >
					<input type="text" placeholder="Enter Name" name="name" value={inputData.name} onChange={handleData} className="w-1" />
				</div>

				<div className="p-tb">
					<input type="password" placeholder="Enter pwd" name="password" value={inputData.password} onChange={handleData} className="w-1" />
				</div>

				<div>
					<input type="email" placeholder="xyz@gmail.com" name="email" value={inputData.email} onChange={handleData} className="w-1" />
				</div>

				<div className="p-tb">
					<button>Submit</button>
				</div>
			</div>
		</form>

	</>
}

export default Form;