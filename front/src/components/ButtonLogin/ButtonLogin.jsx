import React from "react";

export default class Button extends React.Component {
    render() {
        return (
            <form method="post" onSubmit={(data => console.log(data))}>
                <button>
                    {this.props.text}
                </button>
            </form>
        );
    }
}