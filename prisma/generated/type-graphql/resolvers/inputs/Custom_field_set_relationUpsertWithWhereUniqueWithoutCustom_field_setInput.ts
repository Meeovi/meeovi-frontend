import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_field_set_relationCreateWithoutCustom_field_setInput } from "../inputs/Custom_field_set_relationCreateWithoutCustom_field_setInput";
import { Custom_field_set_relationUpdateWithoutCustom_field_setInput } from "../inputs/Custom_field_set_relationUpdateWithoutCustom_field_setInput";
import { Custom_field_set_relationWhereUniqueInput } from "../inputs/Custom_field_set_relationWhereUniqueInput";

@TypeGraphQL.InputType("Custom_field_set_relationUpsertWithWhereUniqueWithoutCustom_field_setInput", {})
export class Custom_field_set_relationUpsertWithWhereUniqueWithoutCustom_field_setInput {
  @TypeGraphQL.Field(_type => Custom_field_set_relationWhereUniqueInput, {
    nullable: false
  })
  where!: Custom_field_set_relationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Custom_field_set_relationUpdateWithoutCustom_field_setInput, {
    nullable: false
  })
  update!: Custom_field_set_relationUpdateWithoutCustom_field_setInput;

  @TypeGraphQL.Field(_type => Custom_field_set_relationCreateWithoutCustom_field_setInput, {
    nullable: false
  })
  create!: Custom_field_set_relationCreateWithoutCustom_field_setInput;
}
