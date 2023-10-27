export function useApiFetch<T>(path: string | (() => string), options: any = {}) {
    let headers: any = {};

    const token = useCookie('XSRF-TOKEN');

    if (token.value) {
        headers['X-XSRF-TOKEN'] = token.value as string;
    }

    if(process.server) {
        headers = {
            ...headers,
            ...useRequestHeaders(["referer", "cookie"])
        }
    }

    return useFetch("http://localhost:8000" + (typeof path === 'function' ? path() : path), {
        credentials: "include",
        watch: false,
        ...options,
        headers: {
            ...headers,
            ...options?.headers
        }
    });
}
