import { Meta, StoryObj } from '@storybook/vue3'
import BaseCard from '~/components/search/atoms/BaseCard.vue'
import BaseText from '~/components/search/atoms/BaseText.vue'
import BaseTitle from '~/components/search/atoms/BaseTitle.vue'

const meta: Meta<typeof BaseCard> = {
  component: BaseCard,
  render: args => ({
    components: { BaseCard, BaseText, BaseTitle },
    setup: () => ({ args }),
    template: `
      <BaseCard>
        <BaseTitle>This is the title</BaseTitle>
        <BaseText>This is some text.</BaseText>
      </BaseCard>
    `
  })
}

export default meta

type Story = StoryObj<typeof BaseCard>

export const Default: Story = {
}
