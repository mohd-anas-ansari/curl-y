export function links_path() {
	return "/links";
}

export function new_link_path() {
	return "/links/new";
}

export function link_path(id) {
	return `/links/${id}`;
}

export function curl_path(curl_id) {
	return `/${curl_id}`;
}

export function edit_link_path(id) {
	return `/links/${id}/edit`;
}
