export interface Invited {
    title: string;
    name: string;
    url: string;
    email: string;
    note: string;
    status?: string;
}

// #2 Invited[]
export const GUESTS: Array<Invited> = [
    // export const GUESTS: Invited['cats'] = [
    {
        title: 'Mr.',
        name: 'Chuchu',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp8GSq_y-2Cr5j_6srGAfnGOTF4a6dEQHwQzIALkjY0earyawWrNx3fnIF7hGH17Fu2LE&usqp=CAU',
        note: 'likes to stare at people',
        email: 'chuchu8@gmail.meow',
        status: 'invited',
    },
    {
        title: 'Mr.',
        name: 'Tomie',
        url: 'https://cdn.pixabay.com/photo/2017/07/06/05/01/bengal-2476933__480.jpg',
        note: 'a big rocket league fan',
        email: 'tomtom@gmail.lol',
        status: 'responded',
    },
    {
        title: 'Miss.',
        name: 'Nabi',
        url: 'https://cdn.famtimes.co.kr/news/photo/202012/502104_3008_164.png',
        note: 'likes to sleep',
        email: 'bibi@gmail.neow',
        status: 'invited',
    },
    {
        title: 'Mrs.',
        name: 'Piguie',
        url: 'https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_280/5-3-%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg',
        note: 'ADHD',
        email: 'piguie@gmail.oink',
        status: 'responded',
    },
];

// https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_280/5-3-%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg

// https://cdn.famtimes.co.kr/news/photo/202012/502104_3008_164.png

//
