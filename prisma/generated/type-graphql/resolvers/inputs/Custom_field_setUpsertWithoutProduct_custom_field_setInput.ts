import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_field_setCreateWithoutProduct_custom_field_setInput } from "../inputs/Custom_field_setCreateWithoutProduct_custom_field_setInput";
import { Custom_field_setUpdateWithoutProduct_custom_field_setInput } from "../inputs/Custom_field_setUpdateWithoutProduct_custom_field_setInput";
import { Custom_field_setWhereInput } from "../inputs/Custom_field_setWhereInput";

@TypeGraphQL.InputType("Custom_field_setUpsertWithoutProduct_custom_field_setInput", {})
export class Custom_field_setUpsertWithoutProduct_custom_field_setInput {
  @TypeGraphQL.Field(_type => Custom_field_setUpdateWithoutProduct_custom_field_setInput, {
    nullable: false
  })
  update!: Custom_field_setUpdateWithoutProduct_custom_field_setInput;

  @TypeGraphQL.Field(_type => Custom_field_setCreateWithoutProduct_custom_field_setInput, {
    nullable: false
  })
  create!: Custom_field_setCreateWithoutProduct_custom_field_setInput;

  @TypeGraphQL.Field(_type => Custom_field_setWhereInput, {
    nullable: true
  })
  where?: Custom_field_setWhereInput | undefined;
}
