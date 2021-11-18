import app from './src/app'
import * as dotenv from 'dotenv'

dotenv.config()

const port = 3000

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})