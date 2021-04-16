import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Book extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 2
        }
    }
    render() {
        return (
            <div className={"container mm-4 mt-5"}>
                <div className={"row"}>
                    <div className={"table-responsive"}>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>Category</th>
                                <th scope={"col"}>Author</th>
                                <th scope={"col"}>AvailableCopies</th>
                                <th scope={"col"}>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.books.map((term) => {
                                return (
                                    <tr>
                                        <td>{term.name}</td>
                                        <td>{term.category}</td>
                                        <td>{term.author.name}</td>
                                        <td>{term.availableCopies}</td>
                                        <td className={"text-right"}>
                                            <a title={"Delete"} className={"btn btn-danger"}>
                                                Delete
                                            </a>
                                            <Link className={"btn btn-info ml-2"}>
                                                Edit
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                    <div className="col mb-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <Link className={"btn btn-block btn-dark"} to={"/books/add"}>Add new book</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Book;