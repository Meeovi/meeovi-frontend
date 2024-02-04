import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_fieldScalarWhereInput } from "../inputs/Custom_fieldScalarWhereInput";
import { Custom_fieldUpdateManyMutationInput } from "../inputs/Custom_fieldUpdateManyMutationInput";

@TypeGraphQL.InputType("Custom_fieldUpdateManyWithWhereWithoutCustom_field_setInput", {})
export class Custom_fieldUpdateManyWithWhereWithoutCustom_field_setInput {
  @TypeGraphQL.Field(_type => Custom_fieldScalarWhereInput, {
    nullable: false
  })
  where!: Custom_fieldScalarWhereInput;

  @TypeGraphQL.Field(_type => Custom_fieldUpdateManyMutationInput, {
    nullable: false
  })
  data!: Custom_fieldUpdateManyMutationInput;
}
