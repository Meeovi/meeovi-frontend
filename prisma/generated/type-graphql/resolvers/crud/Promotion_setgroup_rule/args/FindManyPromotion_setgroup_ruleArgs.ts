import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_setgroup_ruleOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Promotion_setgroup_ruleOrderByWithRelationAndSearchRelevanceInput";
import { Promotion_setgroup_ruleWhereInput } from "../../../inputs/Promotion_setgroup_ruleWhereInput";
import { Promotion_setgroup_ruleWhereUniqueInput } from "../../../inputs/Promotion_setgroup_ruleWhereUniqueInput";
import { Promotion_setgroup_ruleScalarFieldEnum } from "../../../../enums/Promotion_setgroup_ruleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyPromotion_setgroup_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_setgroup_ruleWhereInput, {
    nullable: true
  })
  where?: Promotion_setgroup_ruleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Promotion_setgroup_ruleOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Promotion_setgroup_ruleOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Promotion_setgroup_ruleWhereUniqueInput, {
    nullable: true
  })
  cursor?: Promotion_setgroup_ruleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Promotion_setgroup_ruleScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"setgroup_id" | "rule_id"> | undefined;
}
