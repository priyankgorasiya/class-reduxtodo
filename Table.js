import React, { Component } from "react";
import { connect } from "react-redux";

class Table extends Component {
  render() {
    const { users } = this.props.user;
    return (
      <div className="mt-4 bg-info">
        <table className="table table-sm table-striped table-bordered w-50">
          <thead>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>Date</th>
              <th>Gender</th>
              <th>Phone.No</th>
            </tr>
          </thead>

          <tbody>
            {users?.map((item, index) => {
              return (
                <tr key={`index_${index}`}>
                  <td>{item?.name}</td>
                  <td>{item?.city}</td>
                  <td>{item?.date}</td>
                  <td>{item?.gender}</td>

                  <td>{item?.phone}</td>

                  <td>
                    <button className="btn btn-sm btn-warning">Edit</button>
                    <button className="btn btn-sm btn-danger m-1">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, {})(Table);
