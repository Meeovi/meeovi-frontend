import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_setgroupOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Promotion_setgroupOrderByWithRelationAndSearchRelevanceInput";
import { Promotion_setgroupWhereInput } from "../../../inputs/Promotion_setgroupWhereInput";
import { Promotion_setgroupWhereUniqueInput } from "../../../inputs/Promotion_setgroupWhereUniqueInput";
import { Promotion_setgroupScalarFieldEnum } from "../../../../enums/Promotion_setgroupScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPromotion_setgroupOrThrowArgs {
  @TypeGraphQL.Field(_type => Promotion_setgroupWhereInput, {
    nullable: true
  })
  where?: Promotion_setgroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Promotion_setgroupOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Promotion_setgroupOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Promotion_setgroupWhereUniqueInput, {
    nullable: true
  })
  cursor?: Promotion_setgroupWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Promotion_setgroupScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "promotion_id" | "packager_key" | "sorter_key" | "value" | "created_at" | "updated_at"> | undefined;
}
