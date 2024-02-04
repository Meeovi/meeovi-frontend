import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_currencyWhereUniqueInput } from "../../../inputs/Sales_channel_currencyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSales_channel_currencyOrThrowArgs {
  @TypeGraphQL.Field(_type => Sales_channel_currencyWhereUniqueInput, {
    nullable: false
  })
  where!: Sales_channel_currencyWhereUniqueInput;
}
