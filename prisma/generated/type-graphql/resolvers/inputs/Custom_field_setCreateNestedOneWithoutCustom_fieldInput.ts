import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_field_setCreateOrConnectWithoutCustom_fieldInput } from "../inputs/Custom_field_setCreateOrConnectWithoutCustom_fieldInput";
import { Custom_field_setCreateWithoutCustom_fieldInput } from "../inputs/Custom_field_setCreateWithoutCustom_fieldInput";
import { Custom_field_setWhereUniqueInput } from "../inputs/Custom_field_setWhereUniqueInput";

@TypeGraphQL.InputType("Custom_field_setCreateNestedOneWithoutCustom_fieldInput", {})
export class Custom_field_setCreateNestedOneWithoutCustom_fieldInput {
  @TypeGraphQL.Field(_type => Custom_field_setCreateWithoutCustom_fieldInput, {
    nullable: true
  })
  create?: Custom_field_setCreateWithoutCustom_fieldInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setCreateOrConnectWithoutCustom_fieldInput, {
    nullable: true
  })
  connectOrCreate?: Custom_field_setCreateOrConnectWithoutCustom_fieldInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setWhereUniqueInput, {
    nullable: true
  })
  connect?: Custom_field_setWhereUniqueInput | undefined;
}
