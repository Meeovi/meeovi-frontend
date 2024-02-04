import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_api_contextWhereUniqueInput } from "../../../inputs/Sales_channel_api_contextWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneSales_channel_api_contextArgs {
  @TypeGraphQL.Field(_type => Sales_channel_api_contextWhereUniqueInput, {
    nullable: false
  })
  where!: Sales_channel_api_contextWhereUniqueInput;
}
