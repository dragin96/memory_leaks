import {Link} from "react-router-dom";
import React from "react";

export const Menu = () => {
    return (
        <><h1>главная</h1>
            <Link to={"/analytics"}>analytics</Link>
            <br/>
            <Link to={"/listener"}>Рик и морти</Link>
            <br/>
            <Link to={"/manyRequest"}>Посты сломанные</Link>
            <br/>
            <Link to={"/manyRequest2"}>Посты немного сломанные</Link>
            <br/>
            <Link to={"/eventResize"}>Утечка связанная с добавлением события</Link>
        </>
    )
}
