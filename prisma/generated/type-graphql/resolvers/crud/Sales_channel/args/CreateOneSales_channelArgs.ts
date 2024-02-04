import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channelCreateInput } from "../../../inputs/Sales_channelCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSales_channelArgs {
  @TypeGraphQL.Field(_type => Sales_channelCreateInput, {
    nullable: false
  })
  data!: Sales_channelCreateInput;
}
