import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebhookCreateInput } from "../../../inputs/WebhookCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneWebhookArgs {
  @TypeGraphQL.Field(_type => WebhookCreateInput, {
    nullable: false
  })
  data!: WebhookCreateInput;
}
