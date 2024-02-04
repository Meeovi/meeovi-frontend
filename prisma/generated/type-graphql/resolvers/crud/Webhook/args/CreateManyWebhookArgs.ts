import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebhookCreateManyInput } from "../../../inputs/WebhookCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyWebhookArgs {
  @TypeGraphQL.Field(_type => [WebhookCreateManyInput], {
    nullable: false
  })
  data!: WebhookCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
