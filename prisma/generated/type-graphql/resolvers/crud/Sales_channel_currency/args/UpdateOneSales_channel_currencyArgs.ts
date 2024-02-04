import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_currencyUpdateInput } from "../../../inputs/Sales_channel_currencyUpdateInput";
import { Sales_channel_currencyWhereUniqueInput } from "../../../inputs/Sales_channel_currencyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSales_channel_currencyArgs {
  @TypeGraphQL.Field(_type => Sales_channel_currencyUpdateInput, {
    nullable: false
  })
  data!: Sales_channel_currencyUpdateInput;

  @TypeGraphQL.Field(_type => Sales_channel_currencyWhereUniqueInput, {
    nullable: false
  })
  where!: Sales_channel_currencyWhereUniqueInput;
}
