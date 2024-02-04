import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_rangeCreateOrConnectWithoutNumber_range_translationInput } from "../inputs/Number_rangeCreateOrConnectWithoutNumber_range_translationInput";
import { Number_rangeCreateWithoutNumber_range_translationInput } from "../inputs/Number_rangeCreateWithoutNumber_range_translationInput";
import { Number_rangeWhereUniqueInput } from "../inputs/Number_rangeWhereUniqueInput";

@TypeGraphQL.InputType("Number_rangeCreateNestedOneWithoutNumber_range_translationInput", {})
export class Number_rangeCreateNestedOneWithoutNumber_range_translationInput {
  @TypeGraphQL.Field(_type => Number_rangeCreateWithoutNumber_range_translationInput, {
    nullable: true
  })
  create?: Number_rangeCreateWithoutNumber_range_translationInput | undefined;

  @TypeGraphQL.Field(_type => Number_rangeCreateOrConnectWithoutNumber_range_translationInput, {
    nullable: true
  })
  connectOrCreate?: Number_rangeCreateOrConnectWithoutNumber_range_translationInput | undefined;

  @TypeGraphQL.Field(_type => Number_rangeWhereUniqueInput, {
    nullable: true
  })
  connect?: Number_rangeWhereUniqueInput | undefined;
}
