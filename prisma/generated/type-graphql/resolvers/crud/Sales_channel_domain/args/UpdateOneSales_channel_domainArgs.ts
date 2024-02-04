import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_domainUpdateInput } from "../../../inputs/Sales_channel_domainUpdateInput";
import { Sales_channel_domainWhereUniqueInput } from "../../../inputs/Sales_channel_domainWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSales_channel_domainArgs {
  @TypeGraphQL.Field(_type => Sales_channel_domainUpdateInput, {
    nullable: false
  })
  data!: Sales_channel_domainUpdateInput;

  @TypeGraphQL.Field(_type => Sales_channel_domainWhereUniqueInput, {
    nullable: false
  })
  where!: Sales_channel_domainWhereUniqueInput;
}
