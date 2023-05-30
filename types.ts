// ====== TODOS

export interface Todo {
    userId:    number;
    id:        number;
    title:     string;
    completed: boolean;
}

// ====== POST

export interface Post {
    title: string,
    body: string,
    userId: number,
    id: number
}

// ===== COMMENT

export interface Comment {
    postId: number;
    id:     number;
    name:   string;
    email:  string;
    body:   string;
}

// ===== USER

export interface User {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}
