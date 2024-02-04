import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channelCreateInput } from "../../../inputs/Sales_channelCreateInput";
import { Sales_channelUpdateInput } from "../../../inputs/Sales_channelUpdateInput";
import { Sales_channelWhereUniqueInput } from "../../../inputs/Sales_channelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSales_channelArgs {
  @TypeGraphQL.Field(_type => Sales_channelWhereUniqueInput, {
    nullable: false
  })
  where!: Sales_channelWhereUniqueInput;

  @TypeGraphQL.Field(_type => Sales_channelCreateInput, {
    nullable: false
  })
  create!: Sales_channelCreateInput;

  @TypeGraphQL.Field(_type => Sales_channelUpdateInput, {
    nullable: false
  })
  update!: Sales_channelUpdateInput;
}
