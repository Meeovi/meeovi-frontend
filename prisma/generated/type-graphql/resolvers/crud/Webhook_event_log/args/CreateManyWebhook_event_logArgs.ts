import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Webhook_event_logCreateManyInput } from "../../../inputs/Webhook_event_logCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyWebhook_event_logArgs {
  @TypeGraphQL.Field(_type => [Webhook_event_logCreateManyInput], {
    nullable: false
  })
  data!: Webhook_event_logCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
