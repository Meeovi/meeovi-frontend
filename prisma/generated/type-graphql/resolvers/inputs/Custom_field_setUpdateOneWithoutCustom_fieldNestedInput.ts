import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_field_setCreateOrConnectWithoutCustom_fieldInput } from "../inputs/Custom_field_setCreateOrConnectWithoutCustom_fieldInput";
import { Custom_field_setCreateWithoutCustom_fieldInput } from "../inputs/Custom_field_setCreateWithoutCustom_fieldInput";
import { Custom_field_setUpdateToOneWithWhereWithoutCustom_fieldInput } from "../inputs/Custom_field_setUpdateToOneWithWhereWithoutCustom_fieldInput";
import { Custom_field_setUpsertWithoutCustom_fieldInput } from "../inputs/Custom_field_setUpsertWithoutCustom_fieldInput";
import { Custom_field_setWhereInput } from "../inputs/Custom_field_setWhereInput";
import { Custom_field_setWhereUniqueInput } from "../inputs/Custom_field_setWhereUniqueInput";

@TypeGraphQL.InputType("Custom_field_setUpdateOneWithoutCustom_fieldNestedInput", {})
export class Custom_field_setUpdateOneWithoutCustom_fieldNestedInput {
  @TypeGraphQL.Field(_type => Custom_field_setCreateWithoutCustom_fieldInput, {
    nullable: true
  })
  create?: Custom_field_setCreateWithoutCustom_fieldInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setCreateOrConnectWithoutCustom_fieldInput, {
    nullable: true
  })
  connectOrCreate?: Custom_field_setCreateOrConnectWithoutCustom_fieldInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setUpsertWithoutCustom_fieldInput, {
    nullable: true
  })
  upsert?: Custom_field_setUpsertWithoutCustom_fieldInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setWhereInput, {
    nullable: true
  })
  disconnect?: Custom_field_setWhereInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setWhereInput, {
    nullable: true
  })
  delete?: Custom_field_setWhereInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setWhereUniqueInput, {
    nullable: true
  })
  connect?: Custom_field_setWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setUpdateToOneWithWhereWithoutCustom_fieldInput, {
    nullable: true
  })
  update?: Custom_field_setUpdateToOneWithWhereWithoutCustom_fieldInput | undefined;
}
