import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_type_translationScalarWhereInput } from "../inputs/Number_range_type_translationScalarWhereInput";
import { Number_range_type_translationUpdateManyMutationInput } from "../inputs/Number_range_type_translationUpdateManyMutationInput";

@TypeGraphQL.InputType("Number_range_type_translationUpdateManyWithWhereWithoutNumber_range_typeInput", {})
export class Number_range_type_translationUpdateManyWithWhereWithoutNumber_range_typeInput {
  @TypeGraphQL.Field(_type => Number_range_type_translationScalarWhereInput, {
    nullable: false
  })
  where!: Number_range_type_translationScalarWhereInput;

  @TypeGraphQL.Field(_type => Number_range_type_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Number_range_type_translationUpdateManyMutationInput;
}
