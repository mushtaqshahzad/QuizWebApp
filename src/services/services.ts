import axios from 'axios'

export const URL = 'https://api.github.com'

interface ApiProps {
    path?: string
    method?: string
    isForm?: boolean
    url?: string
    body?: string
    token?: string
}

interface HeaderProps {
    Authorization?: any
    Accept?: any
}
interface OptionProps {
    headers?: any
    method?: string
    data?: string
    url?: string
}

export const callApi: any = ({
    path,
    method = 'GET',
    isForm,
    url = null,
    body = null,
    token = null,
}): any => {
    let urlString = URL + path
    const headers: HeaderProps = {
        ...(isForm
            ? {}
            : {
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
              }),
    }
    const options: OptionProps = {
        method,
    }
    if (token) headers.Authorization = `Bearer ${token}`
    options.headers = headers
    if (body) options.data = body
    if (url) urlString = url
    options.url = urlString
    return axios(options).then((res) => {
        if (res.status === 200) {
            return res.data
        }
        return { status: res.status, ...res.data }
    })
}
