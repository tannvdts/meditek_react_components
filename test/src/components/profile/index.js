import React, {Component, PropTypes} from 'react'
class Profile extends Component {
	getDefaultProps(){
		return {
			data: {
				image: "assets/pages/media/profile/profile_user.jpg",
				name: "",
				dob: "",
				gender: "",
				workphone: "",
				homephone: "",
				mobile: "",
				email:"",
			},
		};
	}
	render(){
		return (
			<div className="profile-sidebar">
				<div className="portlet light profile-sidebar-portlet bordered">
					<div className="profile-userpic">
						<img src={this.props.data.image} className="img-responsive" alt="" />
					</div>
					<div className="profile-usertitle">
			            <div className="profile-usertitle-name">{this.props.data.name}</div>
			            <div className="profile-usertitle-job">{this.props.data.gender}</div>
			        </div>
			        <div className="profile-userbuttons">
			            <button type="button" className="btn btn-circle green btn-sm">New Appt</button>
			            <button type="button" className="btn btn-circle red btn-sm">Detail</button>
			        </div>
			        <div className="profile-usermenu">
			            <ul className="nav">
			                <li className="active">
			                    <a href="javascript:;">
			                        <i className="icon-info"></i> New Appointment</a>
			                </li>
			            </ul>
			        </div>
				</div>
				<div className="portlet light bordered">
                    <div>
                        <h4 className="profile-desc-title">About {this.props.data.name}</h4>
                        <span className="profile-desc-text"> Lorem ipsum dolor sit amet diam nonummy nibh dolore. </span>
                        <div className="margin-top-20 profile-desc-link">
                            <i className="glyphicon glyphicon-calendar"></i>
                            <a href="javascript:;"> Dob: {this.props.data.dob}</a>
                        </div>
                        <div className="margin-top-20 profile-desc-link">
                            <i className="glyphicon glyphicon-earphone"></i>
                            <a href="javascript:;"> Workphone: {this.props.data.workphone}</a>
                        </div>
                        <div className="margin-top-20 profile-desc-link">
                            <i className="glyphicon glyphicon-phone-alt"></i>
                            <a href="javascript:;"> Homephone: {this.props.data.homephone}</a>
                        </div>
                        <div className="margin-top-20 profile-desc-link">
                            <i className="glyphicon glyphicon-phone"></i>
                            <a href="javascript:;"> Mobile: {this.props.data.mobile}</a>
                        </div>
                        <div className="margin-top-20 profile-desc-link">
                            <i className="fa fa-envelope"></i>
                            <a href="javascript:;"> Email: {this.props.data.email}</a>
                        </div>
                        <div className="margin-top-20 profile-desc-link">
                            <i className="icon-info"></i>
                            <a href="javascript:;"> More info...</a>
                        </div>
                    </div>
                </div>
                <div className="portlet light bordered">
                	<div>
                		<h3 className="profile-desc-title">Appointment</h3>
                		<div className="margin-top-20 profile-desc-link">
                            <i className=""><small>Date:</small> </i>
                            <a href="javascript:;">N/A</a>
                        </div>
                        <div className="margin-top-20 profile-desc-link">
                            <i className=""><small>Time:</small> </i>
                            <a href="javascript:;">N/A</a>
                        </div>
                        <div className="margin-top-20 profile-desc-link">
                            <i className=""><small>State:</small> </i>
                            <a href="javascript:;">Received</a>
                        </div>
                        <div className="margin-top-20 profile-desc-link">
                            <i className=""><small>Insurer:</small> </i>
                            <a href="javascript:;">N/A</a>
                        </div>
                        <div className="margin-top-20 profile-desc-link">
                            <i className=""><small>Treating practitioner:</small> </i>
                            <a href="javascript:;">N/A</a>
                        </div>
                        <div className="margin-top-20 profile-desc-link">
                            <i className=""><small>Online users:</small> </i>
                            <a href="javascript:;" className="btn blue-madison">Call</a>
                        </div>
                	</div>
                </div>
			</div>
		);
	}
}
Profile.propTypes = {
  data: PropTypes.object,
}
export default Profile
