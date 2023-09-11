const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white",
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white",
				},
			],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
					const data = await resp.json();
					setStore({ message: data.message });
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			fetchPromise: async (path, metodo = "GET", data = null) => {
				const BASE_URL = process.env.BACKEND_URL;
				let url = BASE_URL + path;

				let obj = {
					method: metodo,
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + localStorage.getItem("token"),
					},
				}
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			login: async (email, password) => {
				try {
					let data = await axios.post('https://opulent-xylophone-7g7vgpgjrjpfxpj4-3001.app.github.dev/login/', {
						"email": email,
						"password": password
					})
					console.log(data);
					//esto es lo que guarda en el localStorage
					localStorage.setItem("token", data.data.access_token);

					return true;
				} catch (error) {
					console.log("errorrrrr:" + error)
					if (error.response.status === 404) {
						alert(error.response.data.msg)
					}
					return false;
				}


			},
			logout: () => { localStorage.removeItem("token") }
		}
	};
};

export default getState;
