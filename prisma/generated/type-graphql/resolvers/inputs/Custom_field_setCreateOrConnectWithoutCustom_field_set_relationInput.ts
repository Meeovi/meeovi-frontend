import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_field_setCreateWithoutCustom_field_set_relationInput } from "../inputs/Custom_field_setCreateWithoutCustom_field_set_relationInput";
import { Custom_field_setWhereUniqueInput } from "../inputs/Custom_field_setWhereUniqueInput";

@TypeGraphQL.InputType("Custom_field_setCreateOrConnectWithoutCustom_field_set_relationInput", {})
export class Custom_field_setCreateOrConnectWithoutCustom_field_set_relationInput {
  @TypeGraphQL.Field(_type => Custom_field_setWhereUniqueInput, {
    nullable: false
  })
  where!: Custom_field_setWhereUniqueInput;

  @TypeGraphQL.Field(_type => Custom_field_setCreateWithoutCustom_field_set_relationInput, {
    nullable: false
  })
  create!: Custom_field_setCreateWithoutCustom_field_set_relationInput;
}
