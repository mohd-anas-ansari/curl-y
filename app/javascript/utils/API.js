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
			if (!response.ok) {
				throw response;
			}
			return response.json();
		});
	},

	editLink: (id) => {
		console.log(id, "ID");
		return fetch(Routes.edit_link_path(id), {
			method: "GET",
			headers: headers,
		}).then((response) => {
			if (!response.ok) {
				throw response;
			}
			return response.json();
		});
	},

	updateLinkCountAndRedirect: (id) => {
		console.log(id, "ID");
		return fetch(Routes.curl_path(id), {
			method: "GET",
			headers: headers,
		}).then((response) => {
			if (!response.ok) {
				throw response;
			}
			return response.json();
		});
	},
};
