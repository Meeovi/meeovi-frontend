import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_individual_codeOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Promotion_individual_codeOrderByWithRelationAndSearchRelevanceInput";
import { Promotion_individual_codeWhereInput } from "../../../inputs/Promotion_individual_codeWhereInput";
import { Promotion_individual_codeWhereUniqueInput } from "../../../inputs/Promotion_individual_codeWhereUniqueInput";
import { Promotion_individual_codeScalarFieldEnum } from "../../../../enums/Promotion_individual_codeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPromotion_individual_codeOrThrowArgs {
  @TypeGraphQL.Field(_type => Promotion_individual_codeWhereInput, {
    nullable: true
  })
  where?: Promotion_individual_codeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Promotion_individual_codeOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Promotion_individual_codeOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Promotion_individual_codeWhereUniqueInput, {
    nullable: true
  })
  cursor?: Promotion_individual_codeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Promotion_individual_codeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "promotion_id" | "code" | "payload" | "created_at" | "updated_at"> | undefined;
}
