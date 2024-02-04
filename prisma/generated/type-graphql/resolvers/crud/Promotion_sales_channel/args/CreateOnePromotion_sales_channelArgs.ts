import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_sales_channelCreateInput } from "../../../inputs/Promotion_sales_channelCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePromotion_sales_channelArgs {
  @TypeGraphQL.Field(_type => Promotion_sales_channelCreateInput, {
    nullable: false
  })
  data!: Promotion_sales_channelCreateInput;
}
