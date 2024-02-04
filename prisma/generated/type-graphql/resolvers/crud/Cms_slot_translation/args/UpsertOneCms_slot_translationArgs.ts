import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_slot_translationCreateInput } from "../../../inputs/Cms_slot_translationCreateInput";
import { Cms_slot_translationUpdateInput } from "../../../inputs/Cms_slot_translationUpdateInput";
import { Cms_slot_translationWhereUniqueInput } from "../../../inputs/Cms_slot_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCms_slot_translationArgs {
  @TypeGraphQL.Field(_type => Cms_slot_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_slot_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Cms_slot_translationCreateInput, {
    nullable: false
  })
  create!: Cms_slot_translationCreateInput;

  @TypeGraphQL.Field(_type => Cms_slot_translationUpdateInput, {
    nullable: false
  })
  update!: Cms_slot_translationUpdateInput;
}
