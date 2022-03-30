import MeetupList from "../Components/MeetupList";

const dummy_data = [{
        "id": 4029,
        "name": "Jammu and Kashmir",
        "state_code": "JK",
        "latitude": "33.27783900",
        "longitude": "75.34121790",
        "type": null
    },
    {
        "id": 4025,
        "name": "Jharkhand",
        "state_code": "JH",
        "latitude": "23.61018080",
        "longitude": "85.27993540",
        "type": null
    },
    {
        "id": 4026,
        "name": "Karnataka",
        "state_code": "KA",
        "latitude": "15.31727750",
        "longitude": "75.71388840",
        "type": null
    },
    {
        "id": 4028,
        "name": "Kerala",
        "state_code": "KL",
        "latitude": "10.85051590",
        "longitude": "76.27108330",
        "type": null
    },
    {
        "id": 4852,
        "name": "Ladakh",
        "state_code": "LA",
        "latitude": "34.22684750",
        "longitude": "77.56194190",
        "type": null
    },
    {
        "id": 4019,
        "name": "Lakshadweep",
        "state_code": "LD",
        "latitude": "10.32802650",
        "longitude": "72.78463360",
        "type": null
    },
    {
        "id": 4039,
        "name": "Madhya Pradesh",
        "state_code": "MP",
        "latitude": "22.97342290",
        "longitude": "78.65689420",
        "type": null
    },
    {
        "id": 4008,
        "name": "Maharashtra",
        "state_code": "MH",
        "latitude": "19.75147980",
        "longitude": "75.71388840",
        "type": null
    },
    {
        "id": 4010,
        "name": "Manipur",
        "state_code": "MN",
        "latitude": "24.66371730",
        "longitude": "93.90626880",
        "type": null
    },
    {
        "id": 4006,
        "name": "Meghalaya",
        "state_code": "ML",
        "latitude": "25.46703080",
        "longitude": "91.36621600",
        "type": null
    },
    {
        "id": 4036,
        "name": "Mizoram",
        "state_code": "MZ",
        "latitude": "23.16454300",
        "longitude": "92.93757390",
        "type": null
    },
    {
        "id": 4018,
        "name": "Nagaland",
        "state_code": "NL",
        "latitude": "26.15843540",
        "longitude": "94.56244260",
        "type": null
    },
    {
        "id": 4013,
        "name": "Odisha",
        "state_code": "OR",
        "latitude": "20.95166580",
        "longitude": "85.09852360",
        "type": null
    },
    {
        "id": 4011,
        "name": "Puducherry",
        "state_code": "PY",
        "latitude": "11.94159150",
        "longitude": "79.80831330",
        "type": null
    },
    {
        "id": 4015,
        "name": "Punjab",
        "state_code": "PB",
        "latitude": "27.02380360",
        "longitude": null,
        "type": null
    },
    {
        "id": 4014,
        "name": "Rajasthan",
        "state_code": "RJ",
        "latitude": "27.02380360",
        "longitude": "74.21793260",
        "type": null
    },
    {
        "id": 4034,
        "name": "Sikkim",
        "state_code": "SK",
        "latitude": "27.53297180",
        "longitude": "88.51221780",
        "type": null
    },
    {
        "id": 4035,
        "name": "Tamil Nadu",
        "state_code": "TN",
        "latitude": "11.12712250",
        "longitude": "78.65689420",
        "type": null
    },
    {
        "id": 4012,
        "name": "Telangana",
        "state_code": "TG",
        "latitude": "18.11243720",
        "longitude": "79.01929970",
        "type": null
    }
];

function AllMeetups() {
    return ( <
        section className = 'Meetup' >
        <
        h1 >
        All Meetup 's</h1> <
        MeetupList meetups = {
            dummy_data
        }
        /> < /
        section >

    );
}

export default AllMeetups;