import { Message } from '@line/bot-sdk'
import * as readline from 'readline'
import handleReply from './handleReply'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

export default function testForDev() {
  rl.question('Message:', async (message: string) => {
    const echo: Message | undefined = await handleReply(message)
    console.log(echo)
    testForDev()
  })
}
