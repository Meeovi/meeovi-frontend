import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_discount_pricesOrderByWithAggregationInput } from "../../../inputs/Promotion_discount_pricesOrderByWithAggregationInput";
import { Promotion_discount_pricesScalarWhereWithAggregatesInput } from "../../../inputs/Promotion_discount_pricesScalarWhereWithAggregatesInput";
import { Promotion_discount_pricesWhereInput } from "../../../inputs/Promotion_discount_pricesWhereInput";
import { Promotion_discount_pricesScalarFieldEnum } from "../../../../enums/Promotion_discount_pricesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPromotion_discount_pricesArgs {
  @TypeGraphQL.Field(_type => Promotion_discount_pricesWhereInput, {
    nullable: true
  })
  where?: Promotion_discount_pricesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_pricesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Promotion_discount_pricesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_pricesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "discount_id" | "currency_id" | "price" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Promotion_discount_pricesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Promotion_discount_pricesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
