import {Hotel} from '../model/hotel';

let hotels: Hotel[] = [];
//let map: Map<Hotel, Date[]> = new Map();
let hotel1 = new Hotel(1, 'Hilton', 'New York', 10);
let hotel2 = new Hotel(2, 'Marriot', 'Los Angeles', 15);
let hotel3 = new Hotel(3, 'Hyatt', 'Chicago', 20);
let hotel4 = new Hotel(4, 'Sheraton', 'San Francisco', 25);
let hotel5 = new Hotel(5, 'Westin', 'Seattle', 30);
let hotel6 = new Hotel(6, 'Ritz Carlton', 'Miami', 35);
hotels.push(hotel1);
hotels.push(hotel2);
hotels.push(hotel3);
hotels.push(hotel4);
hotels.push(hotel5);
hotels.push(hotel6);

export = hotels; 
