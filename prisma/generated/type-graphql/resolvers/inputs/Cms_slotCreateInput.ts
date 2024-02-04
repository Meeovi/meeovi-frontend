import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_blockCreateNestedOneWithoutCms_slotInput } from "../inputs/Cms_blockCreateNestedOneWithoutCms_slotInput";
import { Cms_slot_translationCreateNestedManyWithoutCms_slotInput } from "../inputs/Cms_slot_translationCreateNestedManyWithoutCms_slotInput";

@TypeGraphQL.InputType("Cms_slotCreateInput", {})
export class Cms_slotCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  version_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  slot!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  locked?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Cms_blockCreateNestedOneWithoutCms_slotInput, {
    nullable: false
  })
  cms_block!: Cms_blockCreateNestedOneWithoutCms_slotInput;

  @TypeGraphQL.Field(_type => Cms_slot_translationCreateNestedManyWithoutCms_slotInput, {
    nullable: true
  })
  cms_slot_translation?: Cms_slot_translationCreateNestedManyWithoutCms_slotInput | undefined;
}
