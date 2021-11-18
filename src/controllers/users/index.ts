export default {
    getUsers: (req: any, res: any) => {
        console.log('getUsers');
        return res.status(200).send({
            status: 200,
            message: 'sucess'
        })
    }
}