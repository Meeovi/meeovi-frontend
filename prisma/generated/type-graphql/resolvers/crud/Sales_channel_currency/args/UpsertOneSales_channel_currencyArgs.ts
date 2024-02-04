import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_currencyCreateInput } from "../../../inputs/Sales_channel_currencyCreateInput";
import { Sales_channel_currencyUpdateInput } from "../../../inputs/Sales_channel_currencyUpdateInput";
import { Sales_channel_currencyWhereUniqueInput } from "../../../inputs/Sales_channel_currencyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSales_channel_currencyArgs {
  @TypeGraphQL.Field(_type => Sales_channel_currencyWhereUniqueInput, {
    nullable: false
  })
  where!: Sales_channel_currencyWhereUniqueInput;

  @TypeGraphQL.Field(_type => Sales_channel_currencyCreateInput, {
    nullable: false
  })
  create!: Sales_channel_currencyCreateInput;

  @TypeGraphQL.Field(_type => Sales_channel_currencyUpdateInput, {
    nullable: false
  })
  update!: Sales_channel_currencyUpdateInput;
}
