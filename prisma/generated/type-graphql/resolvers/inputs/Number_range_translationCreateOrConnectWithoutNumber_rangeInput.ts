import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_translationCreateWithoutNumber_rangeInput } from "../inputs/Number_range_translationCreateWithoutNumber_rangeInput";
import { Number_range_translationWhereUniqueInput } from "../inputs/Number_range_translationWhereUniqueInput";

@TypeGraphQL.InputType("Number_range_translationCreateOrConnectWithoutNumber_rangeInput", {})
export class Number_range_translationCreateOrConnectWithoutNumber_rangeInput {
  @TypeGraphQL.Field(_type => Number_range_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Number_range_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Number_range_translationCreateWithoutNumber_rangeInput, {
    nullable: false
  })
  create!: Number_range_translationCreateWithoutNumber_rangeInput;
}
