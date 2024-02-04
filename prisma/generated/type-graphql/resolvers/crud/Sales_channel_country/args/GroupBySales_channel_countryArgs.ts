import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_countryOrderByWithAggregationInput } from "../../../inputs/Sales_channel_countryOrderByWithAggregationInput";
import { Sales_channel_countryScalarWhereWithAggregatesInput } from "../../../inputs/Sales_channel_countryScalarWhereWithAggregatesInput";
import { Sales_channel_countryWhereInput } from "../../../inputs/Sales_channel_countryWhereInput";
import { Sales_channel_countryScalarFieldEnum } from "../../../../enums/Sales_channel_countryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySales_channel_countryArgs {
  @TypeGraphQL.Field(_type => Sales_channel_countryWhereInput, {
    nullable: true
  })
  where?: Sales_channel_countryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_countryOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Sales_channel_countryOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_countryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"sales_channel_id" | "country_id">;

  @TypeGraphQL.Field(_type => Sales_channel_countryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Sales_channel_countryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
