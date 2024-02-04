import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_slot_translationOrderByWithAggregationInput } from "../../../inputs/Cms_slot_translationOrderByWithAggregationInput";
import { Cms_slot_translationScalarWhereWithAggregatesInput } from "../../../inputs/Cms_slot_translationScalarWhereWithAggregatesInput";
import { Cms_slot_translationWhereInput } from "../../../inputs/Cms_slot_translationWhereInput";
import { Cms_slot_translationScalarFieldEnum } from "../../../../enums/Cms_slot_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCms_slot_translationArgs {
  @TypeGraphQL.Field(_type => Cms_slot_translationWhereInput, {
    nullable: true
  })
  where?: Cms_slot_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Cms_slot_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Cms_slot_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_slot_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"cms_slot_id" | "cms_slot_version_id" | "language_id" | "config" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Cms_slot_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Cms_slot_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
