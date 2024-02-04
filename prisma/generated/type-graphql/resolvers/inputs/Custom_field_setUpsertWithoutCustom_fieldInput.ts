import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_field_setCreateWithoutCustom_fieldInput } from "../inputs/Custom_field_setCreateWithoutCustom_fieldInput";
import { Custom_field_setUpdateWithoutCustom_fieldInput } from "../inputs/Custom_field_setUpdateWithoutCustom_fieldInput";
import { Custom_field_setWhereInput } from "../inputs/Custom_field_setWhereInput";

@TypeGraphQL.InputType("Custom_field_setUpsertWithoutCustom_fieldInput", {})
export class Custom_field_setUpsertWithoutCustom_fieldInput {
  @TypeGraphQL.Field(_type => Custom_field_setUpdateWithoutCustom_fieldInput, {
    nullable: false
  })
  update!: Custom_field_setUpdateWithoutCustom_fieldInput;

  @TypeGraphQL.Field(_type => Custom_field_setCreateWithoutCustom_fieldInput, {
    nullable: false
  })
  create!: Custom_field_setCreateWithoutCustom_fieldInput;

  @TypeGraphQL.Field(_type => Custom_field_setWhereInput, {
    nullable: true
  })
  where?: Custom_field_setWhereInput | undefined;
}
