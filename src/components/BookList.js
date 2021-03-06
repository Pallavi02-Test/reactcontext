import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends React.Component {
    static contextType =ThemeContext;

    render() {
        const {isLightTheme,light,dark}=this.context;
        const theme = isLightTheme? light :dark;
        return (
            <div className="book-list" style={{color:theme.ui, color:theme.sytanx,background:theme.bg}}> 
            <ul>
                <li style={{background:theme.ui}}>The way of kings</li>
                <li style={{background:theme.ui}}>The name of Wind</li>
                <li style={{background:theme.ui}}>Success</li>
            </ul>

            </div>
        );
    }
}

export default BookList;
