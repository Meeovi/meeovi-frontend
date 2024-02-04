import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_field_setCreateOrConnectWithoutCustom_field_set_relationInput } from "../inputs/Custom_field_setCreateOrConnectWithoutCustom_field_set_relationInput";
import { Custom_field_setCreateWithoutCustom_field_set_relationInput } from "../inputs/Custom_field_setCreateWithoutCustom_field_set_relationInput";
import { Custom_field_setUpdateToOneWithWhereWithoutCustom_field_set_relationInput } from "../inputs/Custom_field_setUpdateToOneWithWhereWithoutCustom_field_set_relationInput";
import { Custom_field_setUpsertWithoutCustom_field_set_relationInput } from "../inputs/Custom_field_setUpsertWithoutCustom_field_set_relationInput";
import { Custom_field_setWhereUniqueInput } from "../inputs/Custom_field_setWhereUniqueInput";

@TypeGraphQL.InputType("Custom_field_setUpdateOneRequiredWithoutCustom_field_set_relationNestedInput", {})
export class Custom_field_setUpdateOneRequiredWithoutCustom_field_set_relationNestedInput {
  @TypeGraphQL.Field(_type => Custom_field_setCreateWithoutCustom_field_set_relationInput, {
    nullable: true
  })
  create?: Custom_field_setCreateWithoutCustom_field_set_relationInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setCreateOrConnectWithoutCustom_field_set_relationInput, {
    nullable: true
  })
  connectOrCreate?: Custom_field_setCreateOrConnectWithoutCustom_field_set_relationInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setUpsertWithoutCustom_field_set_relationInput, {
    nullable: true
  })
  upsert?: Custom_field_setUpsertWithoutCustom_field_set_relationInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setWhereUniqueInput, {
    nullable: true
  })
  connect?: Custom_field_setWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setUpdateToOneWithWhereWithoutCustom_field_set_relationInput, {
    nullable: true
  })
  update?: Custom_field_setUpdateToOneWithWhereWithoutCustom_field_set_relationInput | undefined;
}
