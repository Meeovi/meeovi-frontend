import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_discount_pricesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Promotion_discount_pricesOrderByWithRelationAndSearchRelevanceInput";
import { Promotion_discount_pricesWhereInput } from "../../../inputs/Promotion_discount_pricesWhereInput";
import { Promotion_discount_pricesWhereUniqueInput } from "../../../inputs/Promotion_discount_pricesWhereUniqueInput";
import { Promotion_discount_pricesScalarFieldEnum } from "../../../../enums/Promotion_discount_pricesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyPromotion_discount_pricesArgs {
  @TypeGraphQL.Field(_type => Promotion_discount_pricesWhereInput, {
    nullable: true
  })
  where?: Promotion_discount_pricesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_pricesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Promotion_discount_pricesOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Promotion_discount_pricesWhereUniqueInput, {
    nullable: true
  })
  cursor?: Promotion_discount_pricesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_pricesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "discount_id" | "currency_id" | "price" | "created_at" | "updated_at"> | undefined;
}
