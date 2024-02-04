import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PromotionWhereInput } from "../../../inputs/PromotionWhereInput";

@TypeGraphQL.ArgsType()
export class Order_line_itemPromotionArgs {
  @TypeGraphQL.Field(_type => PromotionWhereInput, {
    nullable: true
  })
  where?: PromotionWhereInput | undefined;
}
