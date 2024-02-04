import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_languageCreateInput } from "../../../inputs/Sales_channel_languageCreateInput";
import { Sales_channel_languageUpdateInput } from "../../../inputs/Sales_channel_languageUpdateInput";
import { Sales_channel_languageWhereUniqueInput } from "../../../inputs/Sales_channel_languageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSales_channel_languageArgs {
  @TypeGraphQL.Field(_type => Sales_channel_languageWhereUniqueInput, {
    nullable: false
  })
  where!: Sales_channel_languageWhereUniqueInput;

  @TypeGraphQL.Field(_type => Sales_channel_languageCreateInput, {
    nullable: false
  })
  create!: Sales_channel_languageCreateInput;

  @TypeGraphQL.Field(_type => Sales_channel_languageUpdateInput, {
    nullable: false
  })
  update!: Sales_channel_languageUpdateInput;
}
