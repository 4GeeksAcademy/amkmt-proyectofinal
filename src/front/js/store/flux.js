import axios from "axios"

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
				const BASE_URL = process.env.BACKEND_URL
				let url = BASE_URL + path

				let obj = {
					method: metodo,
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + localStorage.getItem("token")
					},
					body: JSON.stringify(data)
				}

				if (metodo == "GET") {
					obj = {
						method: metodo,
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + localStorage.getItem("token")
						}
					}
				}

				let response = await fetch(url, obj)
				return response

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
			register: async (email, password) => {
				try {
					let data = await axios.post(process.env.BACKEND_URL + "/signup", {
						"email": email,
						"password": password,
						"address": "Costa Rica",
						"name": "ash",
						"username": "Vale",
						"age": "20",
						"city": "SJ",
						"phone": "25331050"
					})
					console.log(data);
					//esto es lo que guarda en el localStorage
					// localStorage.setItem("token", data.data.access_token);

					return true;
				} catch (error) {
					console.log("errorrrrr:" + error)
					if (error.response.status === 404) {
						alert(error.response.data.msg)
					}
					return false;
				}



			},

			reservation: async (cantidad, fechaReserva, email, nombre, mesaRe) => {
				try {
					let data = await axios.post(process.env.BACKEND_URL + "/reservation", {
						"MesaReservada": mesaRe,
						"Nombre": nombre,
						"Email": email,
						"FechaReserva": fechaReserva,
						"Cantidad": cantidad
					})
					console.log(data);
					//esto es lo que guarda en el localStorage
					// localStorage.setItem("token", data.data.access_token);

					return true;
				} catch (error) {
					console.log("errorrrrr:" + error)
					if (error.response.status === 404) {
						alert(error.response.data.msg)
					}
					return false;
				}


			},

			logout: () => { localStorage.removeItem("token") },

			agregarMenu: async (name, description, image, price) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/products", {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							name,
							description,
							image,
							price,
						}),
					});

					if (!response.ok) {
						// Manejo de errores si la solicitud no fue exitosa
						throw new Error('No se pudo agregar el elemento al menú');
					}
					// Manejo de éxito, si es necesario
					// Puedes actualizar el estado aquí si es necesario
					return true; // Opcional: devuelve un valor para indicar que la solicitud fue exitosa
				} catch (error) {
					console.error('Error al agregar el elemento al menú:', error);
					return false; // Opcional: devuelve un valor para indicar que la solicitud falló
				}
			}













		}
	};
};

export default getState;
