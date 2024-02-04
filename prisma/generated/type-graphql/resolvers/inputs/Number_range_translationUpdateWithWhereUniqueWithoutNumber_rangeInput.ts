import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_translationUpdateWithoutNumber_rangeInput } from "../inputs/Number_range_translationUpdateWithoutNumber_rangeInput";
import { Number_range_translationWhereUniqueInput } from "../inputs/Number_range_translationWhereUniqueInput";

@TypeGraphQL.InputType("Number_range_translationUpdateWithWhereUniqueWithoutNumber_rangeInput", {})
export class Number_range_translationUpdateWithWhereUniqueWithoutNumber_rangeInput {
  @TypeGraphQL.Field(_type => Number_range_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Number_range_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Number_range_translationUpdateWithoutNumber_rangeInput, {
    nullable: false
  })
  data!: Number_range_translationUpdateWithoutNumber_rangeInput;
}
