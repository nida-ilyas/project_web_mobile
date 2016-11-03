import ApiUrl from './ApiUrl';

const GetDashboard= (userId) => {
    const optins ={
        method: 'GET',
        headers: new Headers({'x-user-id': userId})
    }
    return fetch(`${ApiUrl}/dashboard`, optins).then(result =>result.json());
}
export default GetDashboard;