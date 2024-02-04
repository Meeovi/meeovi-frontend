import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_sales_channelWhereInput } from "../../../inputs/Promotion_sales_channelWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPromotion_sales_channelArgs {
  @TypeGraphQL.Field(_type => Promotion_sales_channelWhereInput, {
    nullable: true
  })
  where?: Promotion_sales_channelWhereInput | undefined;
}
