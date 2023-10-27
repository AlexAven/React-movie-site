import React from "react";

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    handleRadioChange = (event) => {
        this.setState(() => ({type: event.target.dataset.type}), () => {
            this.props.searchMovies(this.state.search, this.state.type);
        });
    }

    render() {
        return <div className="row">
            <div className="input-field">
                <input
                    placeholder="search"
                    id="email_inline"
                    type="search"
                    className="validate"
                    value={this.state.search}
                    onChange={(event) => this.setState({search: event.target.value})}
                    onKeyDown={this.handleKey}
                />
                <button className="btn search-btn" onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Find</button>
            </div>
            <div>
                <label>
                <input className="with-gap" type='radio' name='type' data-type='all' onChange={this.handleRadioChange} checked={this.state.type === 'all'} />
                    <span>All</span>
                </label>
                <label>
                <input className="with-gap" type='radio' name='type' data-type='movie' onChange={this.handleRadioChange} checked={this.state.type === 'movie'} />
                    <span>Movies</span>
                </label>
                <label>
                <input className="with-gap" type='radio' name='type' data-type='series' onChange={this.handleRadioChange} checked={this.state.type === 'series'} />
                    <span>Series</span>
                </label>
            </div>
        </div>
    }
}

export {Search}