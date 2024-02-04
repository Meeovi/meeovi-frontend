import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Seo_url_templateOrderByWithAggregationInput } from "../../../inputs/Seo_url_templateOrderByWithAggregationInput";
import { Seo_url_templateScalarWhereWithAggregatesInput } from "../../../inputs/Seo_url_templateScalarWhereWithAggregatesInput";
import { Seo_url_templateWhereInput } from "../../../inputs/Seo_url_templateWhereInput";
import { Seo_url_templateScalarFieldEnum } from "../../../../enums/Seo_url_templateScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySeo_url_templateArgs {
  @TypeGraphQL.Field(_type => Seo_url_templateWhereInput, {
    nullable: true
  })
  where?: Seo_url_templateWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Seo_url_templateOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Seo_url_templateOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Seo_url_templateScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "sales_channel_id" | "route_name" | "entity_name" | "template" | "is_valid" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Seo_url_templateScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Seo_url_templateScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
