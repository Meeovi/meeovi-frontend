import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_discountOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Promotion_discountOrderByWithRelationAndSearchRelevanceInput";
import { Promotion_discountWhereInput } from "../../../inputs/Promotion_discountWhereInput";
import { Promotion_discountWhereUniqueInput } from "../../../inputs/Promotion_discountWhereUniqueInput";
import { Promotion_discountScalarFieldEnum } from "../../../../enums/Promotion_discountScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPromotion_discountArgs {
  @TypeGraphQL.Field(_type => Promotion_discountWhereInput, {
    nullable: true
  })
  where?: Promotion_discountWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discountOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Promotion_discountOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Promotion_discountWhereUniqueInput, {
    nullable: true
  })
  cursor?: Promotion_discountWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discountScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "promotion_id" | "scope" | "type" | "value" | "created_at" | "updated_at" | "consider_advanced_rules" | "max_value" | "sorter_key" | "applier_key" | "usage_key" | "picker_key"> | undefined;
}
