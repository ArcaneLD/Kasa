import './gallery.scss'

import { datas } from '../../data/data'

import Card from '../card/Card'

//return the full Galery of accomodations according to the data file
export default function Gallery() {

    return (
        <main className='gallery'>
            {datas.map(data => {
                return (
                    <Card key={data.id} id={data.id} title={data.title} cover={data.cover} />
                )
            })}
        </main>
    )
}
