import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_currencyOrderByWithAggregationInput } from "../../../inputs/Sales_channel_currencyOrderByWithAggregationInput";
import { Sales_channel_currencyScalarWhereWithAggregatesInput } from "../../../inputs/Sales_channel_currencyScalarWhereWithAggregatesInput";
import { Sales_channel_currencyWhereInput } from "../../../inputs/Sales_channel_currencyWhereInput";
import { Sales_channel_currencyScalarFieldEnum } from "../../../../enums/Sales_channel_currencyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySales_channel_currencyArgs {
  @TypeGraphQL.Field(_type => Sales_channel_currencyWhereInput, {
    nullable: true
  })
  where?: Sales_channel_currencyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_currencyOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Sales_channel_currencyOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_currencyScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"sales_channel_id" | "currency_id">;

  @TypeGraphQL.Field(_type => Sales_channel_currencyScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Sales_channel_currencyScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
