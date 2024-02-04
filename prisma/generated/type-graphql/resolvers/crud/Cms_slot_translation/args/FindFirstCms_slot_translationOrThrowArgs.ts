import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_slot_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Cms_slot_translationOrderByWithRelationAndSearchRelevanceInput";
import { Cms_slot_translationWhereInput } from "../../../inputs/Cms_slot_translationWhereInput";
import { Cms_slot_translationWhereUniqueInput } from "../../../inputs/Cms_slot_translationWhereUniqueInput";
import { Cms_slot_translationScalarFieldEnum } from "../../../../enums/Cms_slot_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCms_slot_translationOrThrowArgs {
  @TypeGraphQL.Field(_type => Cms_slot_translationWhereInput, {
    nullable: true
  })
  where?: Cms_slot_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Cms_slot_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Cms_slot_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Cms_slot_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Cms_slot_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Cms_slot_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"cms_slot_id" | "cms_slot_version_id" | "language_id" | "config" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
