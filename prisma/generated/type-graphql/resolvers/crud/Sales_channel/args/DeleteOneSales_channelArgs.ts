import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channelWhereUniqueInput } from "../../../inputs/Sales_channelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneSales_channelArgs {
  @TypeGraphQL.Field(_type => Sales_channelWhereUniqueInput, {
    nullable: false
  })
  where!: Sales_channelWhereUniqueInput;
}
