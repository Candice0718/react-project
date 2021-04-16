import React from "react";
import themeContext from '../../context/themeContext.js';
import styles from './Bottom.module.css';
// 在class组件中使用Consumer
// export default class Bottom extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return(
//             <React.Fragment>
//                 <themeContext.Consumer>
//                     {
//                         theme => {
//                             return (
//                                 <div className={ styles.bottom + " " + styles[theme]}>
//                                     {
//                                         this.props.children
//                                     }
//                                 </div>
//                             )
//                         }
//                     }
//                 </themeContext.Consumer>
//             </React.Fragment>
//         )
//     }
// }
// 在function组件中使用Consumer
export default function Bottom(props) {
    return(
        <React.Fragment>
            <themeContext.Consumer>
                {
                    theme => {
                        return (
                            <div className={ styles.bottom + " " + styles[theme]}>
                                {
                                    props.children
                                }
                            </div>
                        )
                    }
                }
            </themeContext.Consumer>
        </React.Fragment>
    )
}
