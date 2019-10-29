import React from 'react';

export class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
                title: "",
                content: "",
                date:""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }


    handleSubmit (event) {
        try {
        fetch('https://localhost:44367/api/blogpostcommand/v1', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                postTitle: this.state.title,
                PostContent: this.state.content,
            })
        });
        } catch (error) {
            console.error(error);
        }

        event.preventDefault();
    }

    handleInputChange (event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
          });
    }

    render() {
        const form  = (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Title:
                    <input 
                        type="text"
                        name="title" 
                        value={this.state.title} 
                        onChange={this.handleInputChange}/>
                </label>
                <label>
                    Content:
                    <input 
                    type="text"
                     name="content" 
                     value={this.state.content} 
                     onChange={this.handleInputChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );

        return form;
    }

}