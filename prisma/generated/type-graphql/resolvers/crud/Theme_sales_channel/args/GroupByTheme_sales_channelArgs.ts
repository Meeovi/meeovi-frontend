import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_sales_channelOrderByWithAggregationInput } from "../../../inputs/Theme_sales_channelOrderByWithAggregationInput";
import { Theme_sales_channelScalarWhereWithAggregatesInput } from "../../../inputs/Theme_sales_channelScalarWhereWithAggregatesInput";
import { Theme_sales_channelWhereInput } from "../../../inputs/Theme_sales_channelWhereInput";
import { Theme_sales_channelScalarFieldEnum } from "../../../../enums/Theme_sales_channelScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTheme_sales_channelArgs {
  @TypeGraphQL.Field(_type => Theme_sales_channelWhereInput, {
    nullable: true
  })
  where?: Theme_sales_channelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Theme_sales_channelOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Theme_sales_channelOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Theme_sales_channelScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"theme_id" | "sales_channel_id">;

  @TypeGraphQL.Field(_type => Theme_sales_channelScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Theme_sales_channelScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
