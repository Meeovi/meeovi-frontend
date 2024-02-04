import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_discount_ruleOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Promotion_discount_ruleOrderByWithRelationAndSearchRelevanceInput";
import { Promotion_discount_ruleWhereInput } from "../../../inputs/Promotion_discount_ruleWhereInput";
import { Promotion_discount_ruleWhereUniqueInput } from "../../../inputs/Promotion_discount_ruleWhereUniqueInput";
import { Promotion_discount_ruleScalarFieldEnum } from "../../../../enums/Promotion_discount_ruleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPromotion_discount_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_discount_ruleWhereInput, {
    nullable: true
  })
  where?: Promotion_discount_ruleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_ruleOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Promotion_discount_ruleOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Promotion_discount_ruleWhereUniqueInput, {
    nullable: true
  })
  cursor?: Promotion_discount_ruleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_ruleScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"discount_id" | "rule_id"> | undefined;
}
