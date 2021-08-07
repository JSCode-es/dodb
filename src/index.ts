const $ = process.env

import Build from './core/build'

(async () => {

    let { user } = await Build.syncDatabase()

    let insert =
    {
        name: 'Sergio',
        surname: 'Gonzalez',
        alias: 'sgonzalez',
        email: 'sgonzalez@gmail.com',
        pass: 'contraseña'
    }

    //let data = await user.add(insert)
    //let data = await user.get(2)
    let data = await user.update(insert)
    //let data = await user.remove(1)

    console.log(data)

})()

export default async () => await Build.syncDatabase()