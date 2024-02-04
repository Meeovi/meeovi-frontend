import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_api_contextCreateInput } from "../../../inputs/Sales_channel_api_contextCreateInput";
import { Sales_channel_api_contextUpdateInput } from "../../../inputs/Sales_channel_api_contextUpdateInput";
import { Sales_channel_api_contextWhereUniqueInput } from "../../../inputs/Sales_channel_api_contextWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSales_channel_api_contextArgs {
  @TypeGraphQL.Field(_type => Sales_channel_api_contextWhereUniqueInput, {
    nullable: false
  })
  where!: Sales_channel_api_contextWhereUniqueInput;

  @TypeGraphQL.Field(_type => Sales_channel_api_contextCreateInput, {
    nullable: false
  })
  create!: Sales_channel_api_contextCreateInput;

  @TypeGraphQL.Field(_type => Sales_channel_api_contextUpdateInput, {
    nullable: false
  })
  update!: Sales_channel_api_contextUpdateInput;
}
