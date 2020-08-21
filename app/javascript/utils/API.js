import * as Routes from "../utils/Routes";

const headers = {
	Accept: "application/json",
	"Content-Type": "application/json",
	"X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
};

export default {
	postNewLink: (payload) => {
		return fetch(Routes.links_path(), {
			method: "POST",
			headers: headers,
			body: JSON.stringify(payload),
		}).then((response) => {
			console.log(response, "RESPONSE");
			if (!response.ok) {
				throw response;
			}
			return response.json();
		});
	},
};
