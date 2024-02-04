import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Landing_page_sales_channelOrderByWithAggregationInput } from "../../../inputs/Landing_page_sales_channelOrderByWithAggregationInput";
import { Landing_page_sales_channelScalarWhereWithAggregatesInput } from "../../../inputs/Landing_page_sales_channelScalarWhereWithAggregatesInput";
import { Landing_page_sales_channelWhereInput } from "../../../inputs/Landing_page_sales_channelWhereInput";
import { Landing_page_sales_channelScalarFieldEnum } from "../../../../enums/Landing_page_sales_channelScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLanding_page_sales_channelArgs {
  @TypeGraphQL.Field(_type => Landing_page_sales_channelWhereInput, {
    nullable: true
  })
  where?: Landing_page_sales_channelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_sales_channelOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Landing_page_sales_channelOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_sales_channelScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"landing_page_id" | "landing_page_version_id" | "sales_channel_id">;

  @TypeGraphQL.Field(_type => Landing_page_sales_channelScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Landing_page_sales_channelScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
