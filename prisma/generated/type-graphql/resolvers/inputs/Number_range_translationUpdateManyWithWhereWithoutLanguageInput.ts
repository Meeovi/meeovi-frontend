import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_translationScalarWhereInput } from "../inputs/Number_range_translationScalarWhereInput";
import { Number_range_translationUpdateManyMutationInput } from "../inputs/Number_range_translationUpdateManyMutationInput";

@TypeGraphQL.InputType("Number_range_translationUpdateManyWithWhereWithoutLanguageInput", {})
export class Number_range_translationUpdateManyWithWhereWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Number_range_translationScalarWhereInput, {
    nullable: false
  })
  where!: Number_range_translationScalarWhereInput;

  @TypeGraphQL.Field(_type => Number_range_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Number_range_translationUpdateManyMutationInput;
}
