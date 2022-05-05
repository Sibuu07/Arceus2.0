import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'itachi',
            description: 'Displays the info.',
            category: 'misc',
            usage: `${client.config.prefix}itachi`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/ITACHI/intro.mp4'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `🎗 *UCHIHA ITACHI*\n\n⚜ *Description: Genjustu on that level doesn't work on me* \n\n ⭐*insta ID-https://www.instagram.com/akuma__24/?hl=en* \n` }
        )
    }
}
