import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Webhook_event_logWhereInput } from "../../../inputs/Webhook_event_logWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyWebhook_event_logArgs {
  @TypeGraphQL.Field(_type => Webhook_event_logWhereInput, {
    nullable: true
  })
  where?: Webhook_event_logWhereInput | undefined;
}
