import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebhookWhereUniqueInput } from "../../../inputs/WebhookWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneWebhookArgs {
  @TypeGraphQL.Field(_type => WebhookWhereUniqueInput, {
    nullable: false
  })
  where!: WebhookWhereUniqueInput;
}
