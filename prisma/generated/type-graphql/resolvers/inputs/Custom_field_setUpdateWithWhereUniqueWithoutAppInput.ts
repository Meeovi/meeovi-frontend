import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_field_setUpdateWithoutAppInput } from "../inputs/Custom_field_setUpdateWithoutAppInput";
import { Custom_field_setWhereUniqueInput } from "../inputs/Custom_field_setWhereUniqueInput";

@TypeGraphQL.InputType("Custom_field_setUpdateWithWhereUniqueWithoutAppInput", {})
export class Custom_field_setUpdateWithWhereUniqueWithoutAppInput {
  @TypeGraphQL.Field(_type => Custom_field_setWhereUniqueInput, {
    nullable: false
  })
  where!: Custom_field_setWhereUniqueInput;

  @TypeGraphQL.Field(_type => Custom_field_setUpdateWithoutAppInput, {
    nullable: false
  })
  data!: Custom_field_setUpdateWithoutAppInput;
}
