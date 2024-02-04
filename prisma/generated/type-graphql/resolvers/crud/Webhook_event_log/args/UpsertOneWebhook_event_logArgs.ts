import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Webhook_event_logCreateInput } from "../../../inputs/Webhook_event_logCreateInput";
import { Webhook_event_logUpdateInput } from "../../../inputs/Webhook_event_logUpdateInput";
import { Webhook_event_logWhereUniqueInput } from "../../../inputs/Webhook_event_logWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneWebhook_event_logArgs {
  @TypeGraphQL.Field(_type => Webhook_event_logWhereUniqueInput, {
    nullable: false
  })
  where!: Webhook_event_logWhereUniqueInput;

  @TypeGraphQL.Field(_type => Webhook_event_logCreateInput, {
    nullable: false
  })
  create!: Webhook_event_logCreateInput;

  @TypeGraphQL.Field(_type => Webhook_event_logUpdateInput, {
    nullable: false
  })
  update!: Webhook_event_logUpdateInput;
}
