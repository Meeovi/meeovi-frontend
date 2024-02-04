import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_order_ruleOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Promotion_order_ruleOrderByWithRelationAndSearchRelevanceInput";
import { Promotion_order_ruleWhereInput } from "../../../inputs/Promotion_order_ruleWhereInput";
import { Promotion_order_ruleWhereUniqueInput } from "../../../inputs/Promotion_order_ruleWhereUniqueInput";
import { Promotion_order_ruleScalarFieldEnum } from "../../../../enums/Promotion_order_ruleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPromotion_order_ruleOrThrowArgs {
  @TypeGraphQL.Field(_type => Promotion_order_ruleWhereInput, {
    nullable: true
  })
  where?: Promotion_order_ruleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Promotion_order_ruleOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Promotion_order_ruleOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Promotion_order_ruleWhereUniqueInput, {
    nullable: true
  })
  cursor?: Promotion_order_ruleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Promotion_order_ruleScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"promotion_id" | "rule_id"> | undefined;
}
