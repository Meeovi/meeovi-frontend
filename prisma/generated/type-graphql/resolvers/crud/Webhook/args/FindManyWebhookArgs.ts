import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebhookOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/WebhookOrderByWithRelationAndSearchRelevanceInput";
import { WebhookWhereInput } from "../../../inputs/WebhookWhereInput";
import { WebhookWhereUniqueInput } from "../../../inputs/WebhookWhereUniqueInput";
import { WebhookScalarFieldEnum } from "../../../../enums/WebhookScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyWebhookArgs {
  @TypeGraphQL.Field(_type => WebhookWhereInput, {
    nullable: true
  })
  where?: WebhookWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WebhookOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: WebhookOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => WebhookWhereUniqueInput, {
    nullable: true
  })
  cursor?: WebhookWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [WebhookScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "event_name" | "url" | "app_id" | "active" | "created_at" | "updated_at" | "error_count" | "only_live_version"> | undefined;
}
