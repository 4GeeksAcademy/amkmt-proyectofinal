import axios from "axios"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			current_user: null,
			message: null,
			mercadoPago: {},
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
			pagoMercadoPago: async (total) => {
				try {
					const response = await axios.post(process.env.BACKEND_URL + "/api/preference", {
						total: total, //acá está de nuevo la variable donde se guarda el total a pagar por el cliente
					});
					console.log(response.data);
					setStore({ mercadoPago: response.data });//guardamos la info en el objeto que creamos en store
				} catch (error) {
					console.log(error);
				}
			},

			fetchPromise: async (path, metodo = "GET", data = null) => {
				const BASE_URL = process.env.BACKEND_URL;
				let url = BASE_URL + path;
				let obj = {
					method: metodo,
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + localStorage.getItem("token")
					},
					body: JSON.stringify(data)
				}
				if (metodo === "GET") {
					obj = {
						method: metodo,
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + localStorage.getItem("token")
						}
					}
				}
				try {
					let response = await fetch(url, obj);
					if (response.ok) {
						return response;
					} else {
						console.error("Error en la respuesta:", response.status, response.statusText);
						return null; // Retorna null en caso de respuesta no exitosa
					}
				} catch (error) {
					console.error("Error al realizar la solicitud:", error);
					return null; // Retorna null en caso de error en la solicitud
				}
			},
			getAuth: async () => {
				const actions = getActions()
				const store = getStore()
				try {
					// fetching data from the backend
					const resp = await actions.fetchPromise("/auth")
					const data = await resp.json()
					console.log(data)
					setStore({ ...store, current_user: data.user })
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
					let data = await axios.post(process.env.BACKEND_URL + "/login", {
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
					// setStore(data);
					//esto es lo que guarda en el localStorage
					// localStorage.setItem("token", data.data.access_token);
					return true;
				} catch (error) {
					// console.log("errorrrrr:" + error)
					// if (error.response.status === 404) {
					//  alert(error.response.data.msg)
					// }
					// return false;
				}
			},
			reservation: async (reservation_date, cantidad_personas) => {
				try {
					let data = await axios.post(process.env.BACKEND_URL + "/reservation", {

						"reservation_date": reservation_date,
						"cantidad_personas": cantidad_personas
					})
					console.log(data);
					//esto es lo que guarda en el localStorage
					localStorage.setItem("token", data.data.access_token);

					return true;
				} catch (error) {
					console.log("el errorrrrr es:" + error)
					if (error.response.status === 404) {
						alert(error.response.data.msg)
					}
					return false;
				}


			},

			// logout: () => { localStorage.removeItem("token") },

			agregarMenu: async (data) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/products", {
						method: 'POST',
						headers: {
							// 'Content-Type': 'application/json',
						},
						body: data
					});
					console.log(response)
					if (!response.ok) {
						// Manejo de errores si la solicitud no fue exitosa
						throw new Error('No se pudo agregar el elemento al menú');
					}
					// Manejo de éxito, si es necesario
					// Puedes actualizar el estado aquí si es necesario
					return response.status; // Opcional: devuelve un valor para indicar que la solicitud fue exitosa
				} catch (error) {
					console.error('Error al agregar el elemento al menú:', error);
					return false; // Opcional: devuelve un valor para indicar que la solicitud falló
				}
			},

			logout: async () => {
				try {
					let data = await axios.post(process.env.BACKEND_URL + "/logout", {}, {
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + localStorage.getItem("token"),
						},

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















			}
		},
	};
};

export default getState;
