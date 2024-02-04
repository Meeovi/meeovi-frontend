import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_domainWhereUniqueInput } from "../../../inputs/Sales_channel_domainWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSales_channel_domainOrThrowArgs {
  @TypeGraphQL.Field(_type => Sales_channel_domainWhereUniqueInput, {
    nullable: false
  })
  where!: Sales_channel_domainWhereUniqueInput;
}
