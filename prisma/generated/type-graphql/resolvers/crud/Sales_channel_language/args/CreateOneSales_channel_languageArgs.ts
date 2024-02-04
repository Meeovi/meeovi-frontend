import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_languageCreateInput } from "../../../inputs/Sales_channel_languageCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSales_channel_languageArgs {
  @TypeGraphQL.Field(_type => Sales_channel_languageCreateInput, {
    nullable: false
  })
  data!: Sales_channel_languageCreateInput;
}
