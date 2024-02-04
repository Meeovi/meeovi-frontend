import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateNestedOneWithoutCustom_field_setInput } from "../inputs/AppCreateNestedOneWithoutCustom_field_setInput";
import { Custom_fieldCreateNestedManyWithoutCustom_field_setInput } from "../inputs/Custom_fieldCreateNestedManyWithoutCustom_field_setInput";
import { Custom_field_set_relationCreateNestedManyWithoutCustom_field_setInput } from "../inputs/Custom_field_set_relationCreateNestedManyWithoutCustom_field_setInput";

@TypeGraphQL.InputType("Custom_field_setCreateWithoutProduct_custom_field_setInput", {})
export class Custom_field_setCreateWithoutProduct_custom_field_setInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  config?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active?: boolean | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  position?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  global?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Custom_fieldCreateNestedManyWithoutCustom_field_setInput, {
    nullable: true
  })
  custom_field?: Custom_fieldCreateNestedManyWithoutCustom_field_setInput | undefined;

  @TypeGraphQL.Field(_type => AppCreateNestedOneWithoutCustom_field_setInput, {
    nullable: true
  })
  app?: AppCreateNestedOneWithoutCustom_field_setInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_set_relationCreateNestedManyWithoutCustom_field_setInput, {
    nullable: true
  })
  custom_field_set_relation?: Custom_field_set_relationCreateNestedManyWithoutCustom_field_setInput | undefined;
}
