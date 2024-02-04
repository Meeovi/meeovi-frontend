import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_slot_translationScalarWhereInput } from "../inputs/Cms_slot_translationScalarWhereInput";
import { Cms_slot_translationUpdateManyMutationInput } from "../inputs/Cms_slot_translationUpdateManyMutationInput";

@TypeGraphQL.InputType("Cms_slot_translationUpdateManyWithWhereWithoutCms_slotInput", {})
export class Cms_slot_translationUpdateManyWithWhereWithoutCms_slotInput {
  @TypeGraphQL.Field(_type => Cms_slot_translationScalarWhereInput, {
    nullable: false
  })
  where!: Cms_slot_translationScalarWhereInput;

  @TypeGraphQL.Field(_type => Cms_slot_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Cms_slot_translationUpdateManyMutationInput;
}
