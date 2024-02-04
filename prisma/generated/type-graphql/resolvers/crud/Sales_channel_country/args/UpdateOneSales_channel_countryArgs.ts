import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_countryUpdateInput } from "../../../inputs/Sales_channel_countryUpdateInput";
import { Sales_channel_countryWhereUniqueInput } from "../../../inputs/Sales_channel_countryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSales_channel_countryArgs {
  @TypeGraphQL.Field(_type => Sales_channel_countryUpdateInput, {
    nullable: false
  })
  data!: Sales_channel_countryUpdateInput;

  @TypeGraphQL.Field(_type => Sales_channel_countryWhereUniqueInput, {
    nullable: false
  })
  where!: Sales_channel_countryWhereUniqueInput;
}
