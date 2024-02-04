import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_sales_channelOrderByWithAggregationInput } from "../../../inputs/Promotion_sales_channelOrderByWithAggregationInput";
import { Promotion_sales_channelScalarWhereWithAggregatesInput } from "../../../inputs/Promotion_sales_channelScalarWhereWithAggregatesInput";
import { Promotion_sales_channelWhereInput } from "../../../inputs/Promotion_sales_channelWhereInput";
import { Promotion_sales_channelScalarFieldEnum } from "../../../../enums/Promotion_sales_channelScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPromotion_sales_channelArgs {
  @TypeGraphQL.Field(_type => Promotion_sales_channelWhereInput, {
    nullable: true
  })
  where?: Promotion_sales_channelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Promotion_sales_channelOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Promotion_sales_channelOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_sales_channelScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "promotion_id" | "sales_channel_id" | "priority" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Promotion_sales_channelScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Promotion_sales_channelScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
