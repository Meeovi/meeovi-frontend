import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_countryCreateInput } from "../../../inputs/Sales_channel_countryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSales_channel_countryArgs {
  @TypeGraphQL.Field(_type => Sales_channel_countryCreateInput, {
    nullable: false
  })
  data!: Sales_channel_countryCreateInput;
}
