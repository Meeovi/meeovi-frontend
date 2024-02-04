import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_slot_translationUpdateInput } from "../../../inputs/Cms_slot_translationUpdateInput";
import { Cms_slot_translationWhereUniqueInput } from "../../../inputs/Cms_slot_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCms_slot_translationArgs {
  @TypeGraphQL.Field(_type => Cms_slot_translationUpdateInput, {
    nullable: false
  })
  data!: Cms_slot_translationUpdateInput;

  @TypeGraphQL.Field(_type => Cms_slot_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_slot_translationWhereUniqueInput;
}
