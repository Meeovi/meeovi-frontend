import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_countryWhereUniqueInput } from "../../../inputs/Sales_channel_countryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneSales_channel_countryArgs {
  @TypeGraphQL.Field(_type => Sales_channel_countryWhereUniqueInput, {
    nullable: false
  })
  where!: Sales_channel_countryWhereUniqueInput;
}
