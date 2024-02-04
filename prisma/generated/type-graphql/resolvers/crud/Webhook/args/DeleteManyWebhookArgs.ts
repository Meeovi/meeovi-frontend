import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebhookWhereInput } from "../../../inputs/WebhookWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyWebhookArgs {
  @TypeGraphQL.Field(_type => WebhookWhereInput, {
    nullable: true
  })
  where?: WebhookWhereInput | undefined;
}
