
// export default defineEventHandler(async (event) => {
//     console.log('asdfasdf');
//     const paramsUrl = event.context.params._;
    
//     console.log(`https://jsonplaceholder.typicode.com/${paramsUrl}`);

//     const { data } = await $fetch(`https://jsonplaceholder.typicode.com/posts`, {
//         method: "GET",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             // 'X-API-TOKEN': '',
//             // Authorization: '',
//         },
//     });

//     console.log('data',data);
//     return data;
//     // if (data && data.data) {
//     //     return data.data 
//     // } else {
//     //     return data;
//     // }
// });