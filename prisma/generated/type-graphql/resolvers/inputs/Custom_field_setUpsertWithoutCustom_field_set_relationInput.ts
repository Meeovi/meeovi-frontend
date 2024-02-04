import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_field_setCreateWithoutCustom_field_set_relationInput } from "../inputs/Custom_field_setCreateWithoutCustom_field_set_relationInput";
import { Custom_field_setUpdateWithoutCustom_field_set_relationInput } from "../inputs/Custom_field_setUpdateWithoutCustom_field_set_relationInput";
import { Custom_field_setWhereInput } from "../inputs/Custom_field_setWhereInput";

@TypeGraphQL.InputType("Custom_field_setUpsertWithoutCustom_field_set_relationInput", {})
export class Custom_field_setUpsertWithoutCustom_field_set_relationInput {
  @TypeGraphQL.Field(_type => Custom_field_setUpdateWithoutCustom_field_set_relationInput, {
    nullable: false
  })
  update!: Custom_field_setUpdateWithoutCustom_field_set_relationInput;

  @TypeGraphQL.Field(_type => Custom_field_setCreateWithoutCustom_field_set_relationInput, {
    nullable: false
  })
  create!: Custom_field_setCreateWithoutCustom_field_set_relationInput;

  @TypeGraphQL.Field(_type => Custom_field_setWhereInput, {
    nullable: true
  })
  where?: Custom_field_setWhereInput | undefined;
}
