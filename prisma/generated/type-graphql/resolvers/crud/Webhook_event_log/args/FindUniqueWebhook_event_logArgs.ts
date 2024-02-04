import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Webhook_event_logWhereUniqueInput } from "../../../inputs/Webhook_event_logWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueWebhook_event_logArgs {
  @TypeGraphQL.Field(_type => Webhook_event_logWhereUniqueInput, {
    nullable: false
  })
  where!: Webhook_event_logWhereUniqueInput;
}
