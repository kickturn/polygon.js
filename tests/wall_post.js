const { username, password } = require("./creds.json")
const Polygon = require("../src")
const user = new Polygon.User(username, password)

const status = "Dis is pretty cool"

;(async () => {
    if (!(await user.login())) return console.log(`[x] Login failed!`)
    const info = await user.info()
    console.log(`[✓] Login success: ${info.username} (${info.id})`)

    console.log(`[?] Waiting 5 seconds.`)
    await new Promise(resolve => setTimeout(resolve, 5000))

    console.log(`[?] Setting status to: ${status}`)
    await user.setStatus(status)

    await user.logout() ? console.log(`[✓] Logout success!`) : console.log(`[x] Logout failed!`)
})()