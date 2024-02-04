import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_fieldUpdateWithoutCustom_field_setInput } from "../inputs/Custom_fieldUpdateWithoutCustom_field_setInput";
import { Custom_fieldWhereUniqueInput } from "../inputs/Custom_fieldWhereUniqueInput";

@TypeGraphQL.InputType("Custom_fieldUpdateWithWhereUniqueWithoutCustom_field_setInput", {})
export class Custom_fieldUpdateWithWhereUniqueWithoutCustom_field_setInput {
  @TypeGraphQL.Field(_type => Custom_fieldWhereUniqueInput, {
    nullable: false
  })
  where!: Custom_fieldWhereUniqueInput;

  @TypeGraphQL.Field(_type => Custom_fieldUpdateWithoutCustom_field_setInput, {
    nullable: false
  })
  data!: Custom_fieldUpdateWithoutCustom_field_setInput;
}
