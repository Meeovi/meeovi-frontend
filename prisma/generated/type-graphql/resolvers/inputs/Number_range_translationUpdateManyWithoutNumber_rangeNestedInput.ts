import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_translationCreateManyNumber_rangeInputEnvelope } from "../inputs/Number_range_translationCreateManyNumber_rangeInputEnvelope";
import { Number_range_translationCreateOrConnectWithoutNumber_rangeInput } from "../inputs/Number_range_translationCreateOrConnectWithoutNumber_rangeInput";
import { Number_range_translationCreateWithoutNumber_rangeInput } from "../inputs/Number_range_translationCreateWithoutNumber_rangeInput";
import { Number_range_translationScalarWhereInput } from "../inputs/Number_range_translationScalarWhereInput";
import { Number_range_translationUpdateManyWithWhereWithoutNumber_rangeInput } from "../inputs/Number_range_translationUpdateManyWithWhereWithoutNumber_rangeInput";
import { Number_range_translationUpdateWithWhereUniqueWithoutNumber_rangeInput } from "../inputs/Number_range_translationUpdateWithWhereUniqueWithoutNumber_rangeInput";
import { Number_range_translationUpsertWithWhereUniqueWithoutNumber_rangeInput } from "../inputs/Number_range_translationUpsertWithWhereUniqueWithoutNumber_rangeInput";
import { Number_range_translationWhereUniqueInput } from "../inputs/Number_range_translationWhereUniqueInput";

@TypeGraphQL.InputType("Number_range_translationUpdateManyWithoutNumber_rangeNestedInput", {})
export class Number_range_translationUpdateManyWithoutNumber_rangeNestedInput {
  @TypeGraphQL.Field(_type => [Number_range_translationCreateWithoutNumber_rangeInput], {
    nullable: true
  })
  create?: Number_range_translationCreateWithoutNumber_rangeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_translationCreateOrConnectWithoutNumber_rangeInput], {
    nullable: true
  })
  connectOrCreate?: Number_range_translationCreateOrConnectWithoutNumber_rangeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_translationUpsertWithWhereUniqueWithoutNumber_rangeInput], {
    nullable: true
  })
  upsert?: Number_range_translationUpsertWithWhereUniqueWithoutNumber_rangeInput[] | undefined;

  @TypeGraphQL.Field(_type => Number_range_translationCreateManyNumber_rangeInputEnvelope, {
    nullable: true
  })
  createMany?: Number_range_translationCreateManyNumber_rangeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Number_range_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Number_range_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Number_range_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Number_range_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Number_range_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_translationUpdateWithWhereUniqueWithoutNumber_rangeInput], {
    nullable: true
  })
  update?: Number_range_translationUpdateWithWhereUniqueWithoutNumber_rangeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_translationUpdateManyWithWhereWithoutNumber_rangeInput], {
    nullable: true
  })
  updateMany?: Number_range_translationUpdateManyWithWhereWithoutNumber_rangeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Number_range_translationScalarWhereInput[] | undefined;
}
