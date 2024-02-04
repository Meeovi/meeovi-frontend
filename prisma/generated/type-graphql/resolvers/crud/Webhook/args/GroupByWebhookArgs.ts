import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebhookOrderByWithAggregationInput } from "../../../inputs/WebhookOrderByWithAggregationInput";
import { WebhookScalarWhereWithAggregatesInput } from "../../../inputs/WebhookScalarWhereWithAggregatesInput";
import { WebhookWhereInput } from "../../../inputs/WebhookWhereInput";
import { WebhookScalarFieldEnum } from "../../../../enums/WebhookScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByWebhookArgs {
  @TypeGraphQL.Field(_type => WebhookWhereInput, {
    nullable: true
  })
  where?: WebhookWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WebhookOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: WebhookOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [WebhookScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "event_name" | "url" | "app_id" | "active" | "created_at" | "updated_at" | "error_count" | "only_live_version">;

  @TypeGraphQL.Field(_type => WebhookScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: WebhookScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
