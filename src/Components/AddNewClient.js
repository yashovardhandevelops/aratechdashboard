import React from 'react'

function AddNewClient({ setShowForm }) {

    const [data, setData] = React.useState({
        client_name: '',
        client_image: null,
        admin_name: "",
        admin_email: '',
        password: '',
        employee_count: '',
        country_id: '',
        industry: '',
        client_mobile_number: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://45.64.156.214:8000/rewardadmin/add-client/', {
            method: 'POST',
            body: JSON.stringify({
                data
            }),
            headers: {
                Authorization: 'a0061e309f8747b383706c80d7231556',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // Handle data
            })
            .catch((err) => {
                console.log(err.message);
            });
    }


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, [name]: value });
    };

    return (
        <div className='dashboard-client'>
            <div className='left_container'>

                <nav className='main-nav'>
                    <ul className='main-nav-list'>
                        <li className='main-nav-link' onClick={() => setShowForm(false)}> <i class="fa-solid fa-house"></i>&nbsp; Dashboard </li>

                        <li className='main-nav-link'><i class="fa-solid fa-user"></i> &nbsp;Client Area</li>
                        <li className='main-nav-link'><i class="fa-solid fa-wallet"></i>  &nbsp; Wallet Area</li>
                        <li className='main-nav-link'><i class="fa-solid fa-chart-simple"></i>  &nbsp;  Report </li>
                        <li className='main-nav-link'><i class="fa-solid fa-user"></i>  &nbsp; Admin Area</li>
                        <li className='main-nav-link'> <i class="fa-solid fa-arrow-rotate-right"></i>&nbsp; Manage Concerns</li>
                        <li className='main-nav-link'> <i class="fa-solid fa-gear"></i> &nbsp;Manage Config.</li>
                    </ul>
                </nav>
            </div>
            <div className='right-container-information'>
                {/* (i) */}
                <form onSubmit={(e) => handleSubmit(e)}>

                    <div className='Add-new-Client'>

                        <h2 class="heading-secondary">Add New Client</h2>
                        <div class="png-title">Only<span>Png</span> or <span>Jpg</span> Dashboard</div>
                        <button class="btn-dashboard"><i class="fa-solid fa-user-plus"></i>&nbsp;  View All</button>



                        {data.client_image && (
                            <div>
                                <img alt="not fount" width={"250px"} src={URL.createObjectURL(data.client_image)} />
                                <br />
                                <button onClick={() => setData({ ...data, client_image: null })}>Remove</button>
                            </div>
                        )}
                        <br />

                        <br />
                        <input type="file" name="myImage" onChange={(event) => {
                            setData({ ...data, client_image: event.target.files[0] });
                        }}
                        />
                    </div>
                </form>

                <div className='New-client-Information-main'>

                    <div className='New-client-Information'>
                        <h2 className='heading-secondary'> New Client Information</h2>
                        <input className='information-field' type='text' placeholder='Client Name' name='client_name' onChange={handleChange} /> <br></br>
                        <input className='information-field' type='text' placeholder='Admin Name' name='admin_name' onChange={handleChange} /> <br></br>
                        <input className='information-field' type='email' placeholder='Admin Email' name='admin_email' onChange={handleChange} /><br></br>

                        <input className='information-field' type='password' placeholder='Password' name='password' onChange={handleChange} /><br></br>
                        <h2 className='heading-secondary'> Kyc Information</h2>

                        <input className='information-field' type='text' placeholder='Employee Count' name='employee_count' onChange={handleChange} /><br></br>
                        <input className='information-field' type='text' placeholder='Country Id' name='country_id' onChange={handleChange} /><br></br>
                        <input className='information-field' type='text' placeholder='Industry ' name='industry' onChange={handleChange} /><br></br>
                        <input className='information-field' type='text' placeholder='Mobile Number' name='client_mobile_number' onChange={handleChange} /><br></br>

                        <button className='submit-btn'>Submit</button>
                    </div>
                </div>

                {/* <div className='Add-new-Client'>

                </div> */}

                {/* <div className='New-client-Information-main'>

                    <div className='New-client-Information'>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
export default AddNewClient;