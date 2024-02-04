import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_currencyOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Sales_channel_currencyOrderByWithRelationAndSearchRelevanceInput";
import { Sales_channel_currencyWhereInput } from "../../../inputs/Sales_channel_currencyWhereInput";
import { Sales_channel_currencyWhereUniqueInput } from "../../../inputs/Sales_channel_currencyWhereUniqueInput";
import { Sales_channel_currencyScalarFieldEnum } from "../../../../enums/Sales_channel_currencyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class CurrencySales_channel_currencyArgs {
  @TypeGraphQL.Field(_type => Sales_channel_currencyWhereInput, {
    nullable: true
  })
  where?: Sales_channel_currencyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_currencyOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Sales_channel_currencyOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_currencyWhereUniqueInput, {
    nullable: true
  })
  cursor?: Sales_channel_currencyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_currencyScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"sales_channel_id" | "currency_id"> | undefined;
}
