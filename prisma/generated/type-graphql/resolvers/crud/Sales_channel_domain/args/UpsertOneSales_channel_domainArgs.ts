import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_domainCreateInput } from "../../../inputs/Sales_channel_domainCreateInput";
import { Sales_channel_domainUpdateInput } from "../../../inputs/Sales_channel_domainUpdateInput";
import { Sales_channel_domainWhereUniqueInput } from "../../../inputs/Sales_channel_domainWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSales_channel_domainArgs {
  @TypeGraphQL.Field(_type => Sales_channel_domainWhereUniqueInput, {
    nullable: false
  })
  where!: Sales_channel_domainWhereUniqueInput;

  @TypeGraphQL.Field(_type => Sales_channel_domainCreateInput, {
    nullable: false
  })
  create!: Sales_channel_domainCreateInput;

  @TypeGraphQL.Field(_type => Sales_channel_domainUpdateInput, {
    nullable: false
  })
  update!: Sales_channel_domainUpdateInput;
}
