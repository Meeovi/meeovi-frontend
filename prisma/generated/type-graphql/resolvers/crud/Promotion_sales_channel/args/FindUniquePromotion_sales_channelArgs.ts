import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_sales_channelWhereUniqueInput } from "../../../inputs/Promotion_sales_channelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePromotion_sales_channelArgs {
  @TypeGraphQL.Field(_type => Promotion_sales_channelWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_sales_channelWhereUniqueInput;
}
