import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_translationCreateManyNumber_rangeInputEnvelope } from "../inputs/Number_range_translationCreateManyNumber_rangeInputEnvelope";
import { Number_range_translationCreateOrConnectWithoutNumber_rangeInput } from "../inputs/Number_range_translationCreateOrConnectWithoutNumber_rangeInput";
import { Number_range_translationCreateWithoutNumber_rangeInput } from "../inputs/Number_range_translationCreateWithoutNumber_rangeInput";
import { Number_range_translationWhereUniqueInput } from "../inputs/Number_range_translationWhereUniqueInput";

@TypeGraphQL.InputType("Number_range_translationCreateNestedManyWithoutNumber_rangeInput", {})
export class Number_range_translationCreateNestedManyWithoutNumber_rangeInput {
  @TypeGraphQL.Field(_type => [Number_range_translationCreateWithoutNumber_rangeInput], {
    nullable: true
  })
  create?: Number_range_translationCreateWithoutNumber_rangeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_translationCreateOrConnectWithoutNumber_rangeInput], {
    nullable: true
  })
  connectOrCreate?: Number_range_translationCreateOrConnectWithoutNumber_rangeInput[] | undefined;

  @TypeGraphQL.Field(_type => Number_range_translationCreateManyNumber_rangeInputEnvelope, {
    nullable: true
  })
  createMany?: Number_range_translationCreateManyNumber_rangeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Number_range_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Number_range_translationWhereUniqueInput[] | undefined;
}
