import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebhookUpdateInput } from "../../../inputs/WebhookUpdateInput";
import { WebhookWhereUniqueInput } from "../../../inputs/WebhookWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneWebhookArgs {
  @TypeGraphQL.Field(_type => WebhookUpdateInput, {
    nullable: false
  })
  data!: WebhookUpdateInput;

  @TypeGraphQL.Field(_type => WebhookWhereUniqueInput, {
    nullable: false
  })
  where!: WebhookWhereUniqueInput;
}
