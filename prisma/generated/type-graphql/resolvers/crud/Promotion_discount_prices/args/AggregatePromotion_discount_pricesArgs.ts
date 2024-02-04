import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_discount_pricesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Promotion_discount_pricesOrderByWithRelationAndSearchRelevanceInput";
import { Promotion_discount_pricesWhereInput } from "../../../inputs/Promotion_discount_pricesWhereInput";
import { Promotion_discount_pricesWhereUniqueInput } from "../../../inputs/Promotion_discount_pricesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePromotion_discount_pricesArgs {
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
}
