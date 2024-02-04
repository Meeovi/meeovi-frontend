import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_field_setScalarWhereInput } from "../inputs/Custom_field_setScalarWhereInput";
import { Custom_field_setUpdateManyMutationInput } from "../inputs/Custom_field_setUpdateManyMutationInput";

@TypeGraphQL.InputType("Custom_field_setUpdateManyWithWhereWithoutAppInput", {})
export class Custom_field_setUpdateManyWithWhereWithoutAppInput {
  @TypeGraphQL.Field(_type => Custom_field_setScalarWhereInput, {
    nullable: false
  })
  where!: Custom_field_setScalarWhereInput;

  @TypeGraphQL.Field(_type => Custom_field_setUpdateManyMutationInput, {
    nullable: false
  })
  data!: Custom_field_setUpdateManyMutationInput;
}
