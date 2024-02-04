import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_rangeUpdateWithoutNumber_range_translationInput } from "../inputs/Number_rangeUpdateWithoutNumber_range_translationInput";
import { Number_rangeWhereInput } from "../inputs/Number_rangeWhereInput";

@TypeGraphQL.InputType("Number_rangeUpdateToOneWithWhereWithoutNumber_range_translationInput", {})
export class Number_rangeUpdateToOneWithWhereWithoutNumber_range_translationInput {
  @TypeGraphQL.Field(_type => Number_rangeWhereInput, {
    nullable: true
  })
  where?: Number_rangeWhereInput | undefined;

  @TypeGraphQL.Field(_type => Number_rangeUpdateWithoutNumber_range_translationInput, {
    nullable: false
  })
  data!: Number_rangeUpdateWithoutNumber_range_translationInput;
}
