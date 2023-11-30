const API = 'https://www.themoviedb.org/';
export function get(path) {
	return fetch(API + path, {
		headers: {
			authorization:
				'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmMzYzExMDg1MWE0ZDJjNTcxN2U4YTYzYTJiOTkwMSIsInN1YiI6IjY1NjdlOWU4YTQ0ZDA5MDBhZTZhODIxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YTQHmJ4_v-quGznX72bSupouKrt66TYedlwGIxm_ReM',
			'content-type': 'application/json;charset=utf-8',
		},
	}).then((response) => response.json());
}
