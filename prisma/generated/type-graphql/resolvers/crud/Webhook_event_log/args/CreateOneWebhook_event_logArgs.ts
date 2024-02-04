import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Webhook_event_logCreateInput } from "../../../inputs/Webhook_event_logCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneWebhook_event_logArgs {
  @TypeGraphQL.Field(_type => Webhook_event_logCreateInput, {
    nullable: false
  })
  data!: Webhook_event_logCreateInput;
}
