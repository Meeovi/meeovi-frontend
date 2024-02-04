import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebhookUpdateManyMutationInput } from "../../../inputs/WebhookUpdateManyMutationInput";
import { WebhookWhereInput } from "../../../inputs/WebhookWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyWebhookArgs {
  @TypeGraphQL.Field(_type => WebhookUpdateManyMutationInput, {
    nullable: false
  })
  data!: WebhookUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => WebhookWhereInput, {
    nullable: true
  })
  where?: WebhookWhereInput | undefined;
}
