import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_fieldCreateManyCustom_field_setInputEnvelope } from "../inputs/Custom_fieldCreateManyCustom_field_setInputEnvelope";
import { Custom_fieldCreateOrConnectWithoutCustom_field_setInput } from "../inputs/Custom_fieldCreateOrConnectWithoutCustom_field_setInput";
import { Custom_fieldCreateWithoutCustom_field_setInput } from "../inputs/Custom_fieldCreateWithoutCustom_field_setInput";
import { Custom_fieldScalarWhereInput } from "../inputs/Custom_fieldScalarWhereInput";
import { Custom_fieldUpdateManyWithWhereWithoutCustom_field_setInput } from "../inputs/Custom_fieldUpdateManyWithWhereWithoutCustom_field_setInput";
import { Custom_fieldUpdateWithWhereUniqueWithoutCustom_field_setInput } from "../inputs/Custom_fieldUpdateWithWhereUniqueWithoutCustom_field_setInput";
import { Custom_fieldUpsertWithWhereUniqueWithoutCustom_field_setInput } from "../inputs/Custom_fieldUpsertWithWhereUniqueWithoutCustom_field_setInput";
import { Custom_fieldWhereUniqueInput } from "../inputs/Custom_fieldWhereUniqueInput";

@TypeGraphQL.InputType("Custom_fieldUpdateManyWithoutCustom_field_setNestedInput", {})
export class Custom_fieldUpdateManyWithoutCustom_field_setNestedInput {
  @TypeGraphQL.Field(_type => [Custom_fieldCreateWithoutCustom_field_setInput], {
    nullable: true
  })
  create?: Custom_fieldCreateWithoutCustom_field_setInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_fieldCreateOrConnectWithoutCustom_field_setInput], {
    nullable: true
  })
  connectOrCreate?: Custom_fieldCreateOrConnectWithoutCustom_field_setInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_fieldUpsertWithWhereUniqueWithoutCustom_field_setInput], {
    nullable: true
  })
  upsert?: Custom_fieldUpsertWithWhereUniqueWithoutCustom_field_setInput[] | undefined;

  @TypeGraphQL.Field(_type => Custom_fieldCreateManyCustom_field_setInputEnvelope, {
    nullable: true
  })
  createMany?: Custom_fieldCreateManyCustom_field_setInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Custom_fieldWhereUniqueInput], {
    nullable: true
  })
  set?: Custom_fieldWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_fieldWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Custom_fieldWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_fieldWhereUniqueInput], {
    nullable: true
  })
  delete?: Custom_fieldWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_fieldWhereUniqueInput], {
    nullable: true
  })
  connect?: Custom_fieldWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_fieldUpdateWithWhereUniqueWithoutCustom_field_setInput], {
    nullable: true
  })
  update?: Custom_fieldUpdateWithWhereUniqueWithoutCustom_field_setInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_fieldUpdateManyWithWhereWithoutCustom_field_setInput], {
    nullable: true
  })
  updateMany?: Custom_fieldUpdateManyWithWhereWithoutCustom_field_setInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_fieldScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Custom_fieldScalarWhereInput[] | undefined;
}
