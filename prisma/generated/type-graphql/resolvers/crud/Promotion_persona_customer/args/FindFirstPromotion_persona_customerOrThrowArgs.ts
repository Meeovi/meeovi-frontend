import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_persona_customerOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Promotion_persona_customerOrderByWithRelationAndSearchRelevanceInput";
import { Promotion_persona_customerWhereInput } from "../../../inputs/Promotion_persona_customerWhereInput";
import { Promotion_persona_customerWhereUniqueInput } from "../../../inputs/Promotion_persona_customerWhereUniqueInput";
import { Promotion_persona_customerScalarFieldEnum } from "../../../../enums/Promotion_persona_customerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPromotion_persona_customerOrThrowArgs {
  @TypeGraphQL.Field(_type => Promotion_persona_customerWhereInput, {
    nullable: true
  })
  where?: Promotion_persona_customerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Promotion_persona_customerOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Promotion_persona_customerOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Promotion_persona_customerWhereUniqueInput, {
    nullable: true
  })
  cursor?: Promotion_persona_customerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Promotion_persona_customerScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"promotion_id" | "customer_id"> | undefined;
}
