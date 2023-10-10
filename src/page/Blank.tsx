import {Link} from "react-router-dom";
import React from "react";
import {rootPath} from "../index";

export const Menu = () => {
    return (
        <><h1>главная</h1>
            <Link to={rootPath + "/analytics"}>analytics</Link>
            <br/>
            <Link to={rootPath + "/listener"}>Рик и морти</Link>
            <br/>
            <Link to={rootPath + "/manyRequest"}>Посты сломанные</Link>
            <br/>
            <Link to={rootPath + "/manyRequest2"}>Посты немного сломанные</Link>
            <br/>
            <Link to={rootPath + "/eventResize"}>Утечка связанная с добавлением события</Link>
        </>
    )
}
