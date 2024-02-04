import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_sales_channelCreateInput } from "../../../inputs/Promotion_sales_channelCreateInput";
import { Promotion_sales_channelUpdateInput } from "../../../inputs/Promotion_sales_channelUpdateInput";
import { Promotion_sales_channelWhereUniqueInput } from "../../../inputs/Promotion_sales_channelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePromotion_sales_channelArgs {
  @TypeGraphQL.Field(_type => Promotion_sales_channelWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_sales_channelWhereUniqueInput;

  @TypeGraphQL.Field(_type => Promotion_sales_channelCreateInput, {
    nullable: false
  })
  create!: Promotion_sales_channelCreateInput;

  @TypeGraphQL.Field(_type => Promotion_sales_channelUpdateInput, {
    nullable: false
  })
  update!: Promotion_sales_channelUpdateInput;
}
