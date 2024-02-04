import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_persona_ruleOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Promotion_persona_ruleOrderByWithRelationAndSearchRelevanceInput";
import { Promotion_persona_ruleWhereInput } from "../../../inputs/Promotion_persona_ruleWhereInput";
import { Promotion_persona_ruleWhereUniqueInput } from "../../../inputs/Promotion_persona_ruleWhereUniqueInput";
import { Promotion_persona_ruleScalarFieldEnum } from "../../../../enums/Promotion_persona_ruleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPromotion_persona_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_persona_ruleWhereInput, {
    nullable: true
  })
  where?: Promotion_persona_ruleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Promotion_persona_ruleOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Promotion_persona_ruleOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Promotion_persona_ruleWhereUniqueInput, {
    nullable: true
  })
  cursor?: Promotion_persona_ruleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Promotion_persona_ruleScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"promotion_id" | "rule_id"> | undefined;
}
