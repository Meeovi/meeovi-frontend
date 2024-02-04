import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channelUpdateInput } from "../../../inputs/Sales_channelUpdateInput";
import { Sales_channelWhereUniqueInput } from "../../../inputs/Sales_channelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSales_channelArgs {
  @TypeGraphQL.Field(_type => Sales_channelUpdateInput, {
    nullable: false
  })
  data!: Sales_channelUpdateInput;

  @TypeGraphQL.Field(_type => Sales_channelWhereUniqueInput, {
    nullable: false
  })
  where!: Sales_channelWhereUniqueInput;
}
