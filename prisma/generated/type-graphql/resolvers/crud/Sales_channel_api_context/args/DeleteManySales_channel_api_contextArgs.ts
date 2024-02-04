import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_api_contextWhereInput } from "../../../inputs/Sales_channel_api_contextWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySales_channel_api_contextArgs {
  @TypeGraphQL.Field(_type => Sales_channel_api_contextWhereInput, {
    nullable: true
  })
  where?: Sales_channel_api_contextWhereInput | undefined;
}
