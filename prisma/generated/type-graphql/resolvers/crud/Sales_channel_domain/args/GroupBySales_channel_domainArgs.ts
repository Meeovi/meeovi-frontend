import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_domainOrderByWithAggregationInput } from "../../../inputs/Sales_channel_domainOrderByWithAggregationInput";
import { Sales_channel_domainScalarWhereWithAggregatesInput } from "../../../inputs/Sales_channel_domainScalarWhereWithAggregatesInput";
import { Sales_channel_domainWhereInput } from "../../../inputs/Sales_channel_domainWhereInput";
import { Sales_channel_domainScalarFieldEnum } from "../../../../enums/Sales_channel_domainScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySales_channel_domainArgs {
  @TypeGraphQL.Field(_type => Sales_channel_domainWhereInput, {
    nullable: true
  })
  where?: Sales_channel_domainWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_domainOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Sales_channel_domainOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_domainScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "sales_channel_id" | "language_id" | "url" | "currency_id" | "snippet_set_id" | "hreflang_use_only_locale" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Sales_channel_domainScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Sales_channel_domainScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
