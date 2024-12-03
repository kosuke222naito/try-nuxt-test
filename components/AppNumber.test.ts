import {mockNuxtImport, mountSuspended} from "@nuxt/test-utils/runtime"
import {it, describe, expect} from "vitest"
import AppNumber from "./AppNumber.vue"

mockNuxtImport("useState", () => {
  return () => 3
})

describe("AppNumber", () => {
  it("cant mount the component", async () => {
    const component = await mountSuspended(AppNumber)
    expect(component.html()).toContain("Number")
  })
  it("returns the state", async () => {
    const component = await mountSuspended(AppNumber)
    expect(component.text()).toContain("Number: 3Refresh")
  })
})


