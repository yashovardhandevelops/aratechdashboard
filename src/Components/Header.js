import React from 'react'

function Header() {
    return (
        <div>
            <header className='header'>
                <h3 className='heading-tertiary'>Aara Tech</h3>

                <div>
                    <div className='main' >
                        <h3 className='heading-tertiary'>Dashboard</h3>
                    </div>
                </div>

                <div className='right'>
                    <span><i class="fa-solid fa-bell"></i></span>
                    <span><i class="fa-solid fa-envelope"></i></span>
                    <h3 className='heading-tertiary'>Dashboard</h3> <br></br>
                    <span><i class="fa-solid fa-user"></i> &nbsp;Super admin</span>

                </div>  
            </header>
        </div>
    )
}

export default Header