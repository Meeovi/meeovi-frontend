import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_field_set_relationCreateManyCustom_field_setInputEnvelope } from "../inputs/Custom_field_set_relationCreateManyCustom_field_setInputEnvelope";
import { Custom_field_set_relationCreateOrConnectWithoutCustom_field_setInput } from "../inputs/Custom_field_set_relationCreateOrConnectWithoutCustom_field_setInput";
import { Custom_field_set_relationCreateWithoutCustom_field_setInput } from "../inputs/Custom_field_set_relationCreateWithoutCustom_field_setInput";
import { Custom_field_set_relationScalarWhereInput } from "../inputs/Custom_field_set_relationScalarWhereInput";
import { Custom_field_set_relationUpdateManyWithWhereWithoutCustom_field_setInput } from "../inputs/Custom_field_set_relationUpdateManyWithWhereWithoutCustom_field_setInput";
import { Custom_field_set_relationUpdateWithWhereUniqueWithoutCustom_field_setInput } from "../inputs/Custom_field_set_relationUpdateWithWhereUniqueWithoutCustom_field_setInput";
import { Custom_field_set_relationUpsertWithWhereUniqueWithoutCustom_field_setInput } from "../inputs/Custom_field_set_relationUpsertWithWhereUniqueWithoutCustom_field_setInput";
import { Custom_field_set_relationWhereUniqueInput } from "../inputs/Custom_field_set_relationWhereUniqueInput";

@TypeGraphQL.InputType("Custom_field_set_relationUpdateManyWithoutCustom_field_setNestedInput", {})
export class Custom_field_set_relationUpdateManyWithoutCustom_field_setNestedInput {
  @TypeGraphQL.Field(_type => [Custom_field_set_relationCreateWithoutCustom_field_setInput], {
    nullable: true
  })
  create?: Custom_field_set_relationCreateWithoutCustom_field_setInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_set_relationCreateOrConnectWithoutCustom_field_setInput], {
    nullable: true
  })
  connectOrCreate?: Custom_field_set_relationCreateOrConnectWithoutCustom_field_setInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_set_relationUpsertWithWhereUniqueWithoutCustom_field_setInput], {
    nullable: true
  })
  upsert?: Custom_field_set_relationUpsertWithWhereUniqueWithoutCustom_field_setInput[] | undefined;

  @TypeGraphQL.Field(_type => Custom_field_set_relationCreateManyCustom_field_setInputEnvelope, {
    nullable: true
  })
  createMany?: Custom_field_set_relationCreateManyCustom_field_setInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_set_relationWhereUniqueInput], {
    nullable: true
  })
  set?: Custom_field_set_relationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_set_relationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Custom_field_set_relationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_set_relationWhereUniqueInput], {
    nullable: true
  })
  delete?: Custom_field_set_relationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_set_relationWhereUniqueInput], {
    nullable: true
  })
  connect?: Custom_field_set_relationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_set_relationUpdateWithWhereUniqueWithoutCustom_field_setInput], {
    nullable: true
  })
  update?: Custom_field_set_relationUpdateWithWhereUniqueWithoutCustom_field_setInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_set_relationUpdateManyWithWhereWithoutCustom_field_setInput], {
    nullable: true
  })
  updateMany?: Custom_field_set_relationUpdateManyWithWhereWithoutCustom_field_setInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_set_relationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Custom_field_set_relationScalarWhereInput[] | undefined;
}
