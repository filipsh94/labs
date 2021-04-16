import React, {Component} from "react";
import {Link} from "react-router-dom";


class Category extends Component
{
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className={"container mm-4 mt-5"}>
                <div className={"row"}>
                    <div className={"table-responsive"}>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Category</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.categories.map((term) => {
                                return (
                                    <tr>
                                        <td>{term}</td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default  Category;