import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_currencyCreateInput } from "../../../inputs/Sales_channel_currencyCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSales_channel_currencyArgs {
  @TypeGraphQL.Field(_type => Sales_channel_currencyCreateInput, {
    nullable: false
  })
  data!: Sales_channel_currencyCreateInput;
}
