import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_rangeCreateWithoutNumber_range_translationInput } from "../inputs/Number_rangeCreateWithoutNumber_range_translationInput";
import { Number_rangeWhereUniqueInput } from "../inputs/Number_rangeWhereUniqueInput";

@TypeGraphQL.InputType("Number_rangeCreateOrConnectWithoutNumber_range_translationInput", {})
export class Number_rangeCreateOrConnectWithoutNumber_range_translationInput {
  @TypeGraphQL.Field(_type => Number_rangeWhereUniqueInput, {
    nullable: false
  })
  where!: Number_rangeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Number_rangeCreateWithoutNumber_range_translationInput, {
    nullable: false
  })
  create!: Number_rangeCreateWithoutNumber_range_translationInput;
}
