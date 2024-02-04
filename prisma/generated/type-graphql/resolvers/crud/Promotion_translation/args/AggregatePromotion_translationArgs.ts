import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Promotion_translationOrderByWithRelationAndSearchRelevanceInput";
import { Promotion_translationWhereInput } from "../../../inputs/Promotion_translationWhereInput";
import { Promotion_translationWhereUniqueInput } from "../../../inputs/Promotion_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePromotion_translationArgs {
  @TypeGraphQL.Field(_type => Promotion_translationWhereInput, {
    nullable: true
  })
  where?: Promotion_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Promotion_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Promotion_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Promotion_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Promotion_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
