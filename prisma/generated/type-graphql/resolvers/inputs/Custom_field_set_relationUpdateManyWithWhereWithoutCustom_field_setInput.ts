import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_field_set_relationScalarWhereInput } from "../inputs/Custom_field_set_relationScalarWhereInput";
import { Custom_field_set_relationUpdateManyMutationInput } from "../inputs/Custom_field_set_relationUpdateManyMutationInput";

@TypeGraphQL.InputType("Custom_field_set_relationUpdateManyWithWhereWithoutCustom_field_setInput", {})
export class Custom_field_set_relationUpdateManyWithWhereWithoutCustom_field_setInput {
  @TypeGraphQL.Field(_type => Custom_field_set_relationScalarWhereInput, {
    nullable: false
  })
  where!: Custom_field_set_relationScalarWhereInput;

  @TypeGraphQL.Field(_type => Custom_field_set_relationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Custom_field_set_relationUpdateManyMutationInput;
}
