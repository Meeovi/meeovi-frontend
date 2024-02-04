import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_api_contextCreateInput } from "../../../inputs/Sales_channel_api_contextCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSales_channel_api_contextArgs {
  @TypeGraphQL.Field(_type => Sales_channel_api_contextCreateInput, {
    nullable: false
  })
  data!: Sales_channel_api_contextCreateInput;
}
