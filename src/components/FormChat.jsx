import React from 'react'

export default function FormChat () {
    return (
        <div className='intake_from'>
            <div className='container'>
                <ul className="profile-nav">
                    <li>
                        <i className="fa fa-home text-black home" />
                    </li>
                    <li>
                        <a href="#" className="profile-address">Sapna's Profile</a>
                    </li>
                </ul>
            </div>

            <div className='row m-0'>
                <div className='bg_color_Set'>

                    <div className='col-12'>
                        <h1 className='heading_intake_form'>
                            CHAT INTAKE FORM
                        </h1>
                    </div>
                    <form>
                        <div className='row'>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label >First Name:<span>*</span> </label>
                                    <input className='form-control' placeholder='Firsr Name' />
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label >Last Name:</label>
                                    <input className='form-control' placeholder='Last Name' />
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label >Gender:<span>*</span> </label>
                                    <select className='form-control select-gender' placeholder='Select Gender'>
                                        <option>Male</option>
                                        <option>FeMale</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label >Mobile Number: <span>*</span> </label>
                                    <div className='row'>
                                        <select className='col-md-4 col-sm-4 col-4 select-left '>

                                            <option>1</option>
                                            <option>1</option>
                                            <option>1</option>
                                            <option>1</option>
                                        </select>

                                        <div className='col-md-8 col-sm-8 col-6 mobile-box'>
                                            <input className='form-control' placeholder='Enter mobile no.' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label >Date of Birth:<span>*</span> </label>
                                    <div className='input-group datetime '>
                                        <div className='input-group'>
                                            {/* <div className='input-group-addon'>
                                                <i className='fa fa-calendar' />

                                            </div> */}
                                            <input type='date' className='form-control cala-formm' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label >Time of Birth:<span>*</span> </label>
                                    <div className='input-group datetime '>
                                        <div className='input-group'>

                                            <input type='time' className='form-control cala-formm' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label >Brirth Place:<span>*</span> </label>
                                    <input className='form-control' placeholder='Enter your birth place' />
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label >Marital Status:<span>*</span> </label>
                                    <select className='form-control select-gender' placeholder='Select Marital Status'>
                                        <option>Single</option>
                                        <option>Married</option>
                                        <option>Divorced</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label >Occupation: </label>
                                    <select className='form-control select-gender' placeholder='Select Employed in'>
                                        <option>Private Sector</option>
                                        <option>Gvot Sector</option>
                                        <option>Civil Services</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label >Topic of concern: </label>
                                    <select className='form-control select-gender' placeholder='Select Topic of cncern'>
                                        <option>Career and Business</option>
                                        <option>Marriage</option>
                                        <option>Love and Relationship</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='display_set_btn'>
                            <button type='submit' className='btn btn-default green'>Start chat </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
