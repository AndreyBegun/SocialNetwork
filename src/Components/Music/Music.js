import React from 'react';


const Music = () => {

    return (
        <div>
            <iframe frameBorder="1"
                styles="border:none;width:100%;height:100%;"
                width="250%"
                height="300%"
                src="https://music.yandex.ru/iframe/#playlist/yamusic-trending/1000/show/cover/description/">Слушайте
            <a href='https://music.yandex.ru/users/yamusic-trending/playlists/1000'>Хайп
            </a> —
            <a href='https://music.yandex.ru/users/yamusic-trending'>Яндекс.Музыка
            </a> на Яндекс.Музыке
            </iframe>
        </div>
    )
}

export default Music