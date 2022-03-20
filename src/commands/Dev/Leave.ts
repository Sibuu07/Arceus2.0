import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'leave',
            description: 'Bot Leaves the group',
            category: 'dev',
            dm: true,
            usage: `${client.config.prefix}leave`,
            modsOnly: true,
            baseXp: 0
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        await M.reply( await request.buffer(`https://c.tenor.com/z27v22_kuZgAAAPo/itachi-uchiha-ninjutsu.mp4`),
        MessageType.video,
        await M.reply(`*Sayonara* 👋`)
        await this.client.groupLeave(M.from).catch(() => M.reply('Failed to leave the Group'))
    }
}
