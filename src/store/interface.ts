export interface GetData {
    type: string;
    payload: object;
}

export interface Image {
    id: number;
    src: string;
}
export interface errorAction {
    type: string;
    payload: string;
}
export interface Product {
    id: number;
    title?: string;
    handle: string;
    body_html: string | null;
    published_at: string;
    images?: Image[];
    price?: number;
}
