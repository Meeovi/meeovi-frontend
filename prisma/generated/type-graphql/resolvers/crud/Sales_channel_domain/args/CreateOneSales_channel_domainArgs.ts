import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_domainCreateInput } from "../../../inputs/Sales_channel_domainCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSales_channel_domainArgs {
  @TypeGraphQL.Field(_type => Sales_channel_domainCreateInput, {
    nullable: false
  })
  data!: Sales_channel_domainCreateInput;
}
